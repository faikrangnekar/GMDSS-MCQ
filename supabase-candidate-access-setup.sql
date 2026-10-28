-- ======================================================
-- GMDSS MCQ - Candidate access management setup
-- Run this once in the Supabase SQL Editor (main project).
-- Adds the missing admin INSERT policy so the admin dashboard
-- can create an access record for any candidate (upsert needs
-- both INSERT and UPDATE rights under RLS).
-- ======================================================

-- Table (same definition as supabase-quiz-schema.sql; safe to re-run).
create table if not exists public.candidate_access (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  payment_status text not null default 'pending'
                 check (payment_status in ('pending', 'paid', 'expired', 'trial')),
  expires_at     timestamptz,
  updated_at     timestamptz not null default now()
);

alter table public.candidate_access enable row level security;

-- Candidates: read and create their own record.
drop policy if exists "Users can read own access" on public.candidate_access;
create policy "Users can read own access"
  on public.candidate_access for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can upsert own access" on public.candidate_access;
create policy "Users can upsert own access"
  on public.candidate_access for insert
  to authenticated
  with check (
    auth.uid() = user_id
    and payment_status = 'pending'
    and expires_at is null
  );

-- Admins: read all records.
drop policy if exists "Admins can read all access" on public.candidate_access;
create policy "Admins can read all access"
  on public.candidate_access for select
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

-- Admins: update all records (status changes, expiry changes).
drop policy if exists "Admins can update access" on public.candidate_access;
create policy "Admins can update access"
  on public.candidate_access for update
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ))
  with check (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

-- NEW: admins can create a record for any candidate. Without this the
-- dashboard could only edit candidates who already had a row, and the
-- candidate_access table stayed empty forever.
drop policy if exists "Admins can insert access" on public.candidate_access;
create policy "Admins can insert access"
  on public.candidate_access for insert
  to authenticated
  with check (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

-- Keep updated_at current on every change.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_candidate_access_updated_at on public.candidate_access;
create trigger trg_candidate_access_updated_at
  before update on public.candidate_access
  for each row execute function public.set_updated_at();
