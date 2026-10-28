-- ======================================================
-- GMDSS MCQ - Login history schema
-- Run this once in the Supabase SQL Editor (main project).
-- Records the date/time AND candidate name of every login.
-- Safe to re-run (idempotent).
-- ======================================================

-- New installs: full table including the candidate name.
create table if not exists public.login_history (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  candidate_name text,
  login_at       timestamptz not null default now(),
  -- Wall-clock time on the candidate's device at the exact login moment,
  -- stored as plain text ("YYYY-MM-DD HH:MM:SS") so the Supabase table
  -- shows the real local login time instead of the UTC value.
  login_local    text
);

-- Installs that ran an older version: add the columns if missing.
alter table public.login_history add column if not exists candidate_name text;
alter table public.login_history add column if not exists login_local text;

create index if not exists idx_login_history_user
  on public.login_history (user_id);

create index if not exists idx_login_history_login_at
  on public.login_history (login_at desc);

-- Backfill the name for rows recorded before the column existed.
update public.login_history lh
set candidate_name = p.display_name
from public.profiles p
where lh.user_id = p.id
  and (lh.candidate_name is null or lh.candidate_name = '');

-- RLS: candidates can record/read their own logins; admins can read all.
alter table public.login_history enable row level security;

drop policy if exists "Users can insert own login" on public.login_history;
create policy "Users can insert own login"
  on public.login_history for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can read own logins" on public.login_history;
create policy "Users can read own logins"
  on public.login_history for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Admins can read all logins" on public.login_history;
create policy "Admins can read all logins"
  on public.login_history for select
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

-- ======================================================
-- Last login on the profiles table
-- ======================================================

-- Two columns on profiles holding the exact moment of the most recent
-- login. last_login_at is the authoritative UTC instant; last_login_local
-- is the candidate's device wall-clock time ("YYYY-MM-DD HH:MM:SS") so the
-- Supabase table reads correctly without timezone conversion.
alter table public.profiles add column if not exists last_login_at    timestamptz;
alter table public.profiles add column if not exists last_login_local text;

-- Backfill from already-recorded logins (newest row per user wins).
update public.profiles p
set last_login_at    = lh.login_at,
    last_login_local = lh.login_local
from (
  select distinct on (user_id) user_id, login_at, login_local
  from public.login_history
  order by user_id, login_at desc
) lh
where p.id = lh.user_id
  and (p.last_login_at is null or p.last_login_at < lh.login_at);

-- Keep profiles in sync automatically: every login_history insert
-- (form login, Remember Me return visit, signup, admin sign-in)
-- refreshes the two columns. SECURITY DEFINER so the trigger may write
-- to profiles regardless of RLS.
create or replace function public.sync_profile_last_login()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles
  set last_login_at    = new.login_at,
      last_login_local = coalesce(new.login_local, last_login_local)
  where id = new.user_id;
  return new;
end;
$$;

drop trigger if exists trg_sync_profile_last_login on public.login_history;
create trigger trg_sync_profile_last_login
after insert on public.login_history
for each row execute function public.sync_profile_last_login();

-- ======================================================
-- Server-side login recorder (THE guaranteed path)
-- ======================================================
-- Supabase Auth (GoTrue) stamps auth.users.last_sign_in_at on every
-- successful sign-in. This trigger writes login_history directly from
-- that, so a login is recorded even when the candidate's browser blocks,
-- caches, aborts or never runs the client-side insert. The client-side
-- inserters detect this row (last 60 seconds) and skip, so no duplicates.
-- Safe to re-run (idempotent). login_local uses Asia/Kolkata; change the
-- timezone below if your candidates sit elsewhere.

create or replace function public.handle_auth_login()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  /* UPDATE: only record when the sign-in timestamp actually moved. */
  if tg_op = 'UPDATE' and new.last_sign_in_at is not distinct from old.last_sign_in_at then
    return new;
  end if;

  /* INSERT (signup that issues an immediate session): only if signed in. */
  if tg_op = 'INSERT' and new.last_sign_in_at is null then
    return new;
  end if;

  insert into public.login_history (user_id, candidate_name, login_local)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', new.email),
    to_char(timezone('Asia/Kolkata', now()), 'YYYY-MM-DD HH24:MI:SS')
  );
  return new;
end;
$$;

drop trigger if exists trg_record_login_on_auth_change on auth.users;
create trigger trg_record_login_on_auth_change
after insert or update on auth.users
for each row execute function public.handle_auth_login();
