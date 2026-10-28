-- ======================================================
-- GMDSS MCQ - Cashfree payments / 30-day access
-- Run once in the Supabase SQL Editor (main project).
-- Safe to re-run.
--
-- This only adds payment plumbing. It does not change profiles,
-- the admin dashboard, the candidate cap, or auth.
-- ======================================================

-- Orders created by the create-cashfree-order Edge Function.
create table if not exists public.payment_orders (
  order_id      text primary key,
  user_id       uuid not null references auth.users(id) on delete cascade,
  amount        integer not null check (amount > 0), -- paise (5000 = Rs 50)
  currency      text not null default 'INR',
  status        text not null default 'created'
                check (status in ('created', 'paid', 'failed', 'expired')),
  cf_payment_id text,
  created_at    timestamptz not null default now(),
  paid_at       timestamptz
);

create index if not exists idx_payment_orders_user
  on public.payment_orders (user_id);

create unique index if not exists idx_payment_orders_cf_payment
  on public.payment_orders (cf_payment_id)
  where cf_payment_id is not null;

alter table public.payment_orders enable row level security;
-- No policies on purpose: only the service role (Edge Functions) can read/write.

-- Candidates may only create a pending access row for themselves.
-- They must never be able to mark themselves paid.
drop policy if exists "Users can upsert own access" on public.candidate_access;
create policy "Users can upsert own access"
  on public.candidate_access for insert
  to authenticated
  with check (
    auth.uid() = user_id
    and payment_status = 'pending'
    and expires_at is null
  );

-- Atomically mark an order paid and grant/extend 30 days of access.
-- Called only by the Cashfree webhook Edge Function (service role).
create or replace function public.apply_cashfree_payment(
  p_order_id text,
  p_cf_payment_id text,
  p_amount_paise bigint
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order  public.payment_orders%rowtype;
  v_expiry timestamptz;
begin
  select * into v_order
  from public.payment_orders
  where order_id = p_order_id
  for update;

  if not found then
    raise exception 'Unknown payment order: %', p_order_id;
  end if;

  -- Idempotent: Cashfree may retry the same webhook.
  if v_order.status = 'paid' then
    return false;
  end if;

  if p_amount_paise <> v_order.amount then
    raise exception 'Amount mismatch for order % (expected %, got %)',
      p_order_id, v_order.amount, p_amount_paise;
  end if;

  update public.payment_orders
    set status = 'paid',
        cf_payment_id = p_cf_payment_id,
        paid_at = now()
    where order_id = p_order_id;

  -- Extend an active pass by 30 days; otherwise start 30 days from now.
  select greatest(coalesce(expires_at, now()), now()) + interval '30 days'
    into v_expiry
  from public.candidate_access
  where user_id = v_order.user_id;

  if v_expiry is null then
    v_expiry := now() + interval '30 days';
  end if;

  insert into public.candidate_access (user_id, payment_status, expires_at, updated_at)
  values (v_order.user_id, 'paid', v_expiry, now())
  on conflict (user_id) do update
    set payment_status = 'paid',
        expires_at = excluded.expires_at,
        updated_at = now();

  return true;
end;
$$;

revoke all on function public.apply_cashfree_payment(text, text, bigint) from public;
revoke all on function public.apply_cashfree_payment(text, text, bigint) from anon;
revoke all on function public.apply_cashfree_payment(text, text, bigint) from authenticated;
grant execute on function public.apply_cashfree_payment(text, text, bigint) to service_role;
