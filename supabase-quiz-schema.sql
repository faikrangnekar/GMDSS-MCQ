-- ======================================================
-- GMDSS MCQ - Quiz attempts & candidate access schema
-- Run this once in the Supabase SQL Editor (main project).
-- ======================================================

-- Stores the result of each completed quiz attempt.
create table if not exists public.quiz_attempts (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users(id) on delete cascade,
  set_name         text not null,
  total_questions  integer not null default 0,
  correct_answers  integer not null default 0,
  wrong_answers    integer not null default 0,
  score            numeric not null default 0,
  completed_at     timestamptz not null default now()
);

create index if not exists idx_quiz_attempts_completed
  on public.quiz_attempts (completed_at desc);

create index if not exists idx_quiz_attempts_user
  on public.quiz_attempts (user_id);

-- Tracks payment/access status per candidate.
create table if not exists public.candidate_access (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  payment_status text not null default 'pending'
                 check (payment_status in ('pending', 'paid', 'expired', 'trial')),
  expires_at     timestamptz,
  updated_at     timestamptz not null default now()
);

-- RLS: candidates can read/update their own rows; admins can read/update all.
alter table public.quiz_attempts enable row level security;
alter table public.candidate_access enable row level security;

drop policy if exists "Users can read own attempts" on public.quiz_attempts;
create policy "Users can read own attempts"
  on public.quiz_attempts for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own attempts" on public.quiz_attempts;
create policy "Users can insert own attempts"
  on public.quiz_attempts for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Admins can read all attempts" on public.quiz_attempts;
create policy "Admins can read all attempts"
  on public.quiz_attempts for select
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

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

drop policy if exists "Admins can read all access" on public.candidate_access;
create policy "Admins can read all access"
  on public.candidate_access for select
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

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
