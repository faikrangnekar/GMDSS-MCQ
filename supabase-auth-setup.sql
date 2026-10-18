-- ======================================================
-- GMDSS MCQ - User Authentication / Profiles setup
-- Run this once in the Supabase SQL Editor.
--
-- Creates the public.profiles table used to store the
-- extra signup fields (full name, birth date, phone) and
-- links each row to auth.users via auth.uid().
--
-- Safe to re-run: uses IF NOT EXISTS / DROP POLICY IF EXISTS.
-- ======================================================

-- 1. Profiles table -------------------------------------------------
create table if not exists public.profiles (
  id                uuid primary key references auth.users (id) on delete cascade,
  display_name      text,
  birth_date        date,
  phone_number      text,
  email             text,
  role              text not null default 'candidate',
  created_at        timestamptz not null default now(),
  -- Exact time of the most recent login (UTC instant + device wall-clock).
  -- Maintained automatically by supabase-login-history.sql's trigger.
  last_login_at     timestamptz,
  last_login_local  text
);

-- Add any columns that may be missing on an existing table.
alter table public.profiles add column if not exists display_name text;
alter table public.profiles add column if not exists birth_date   date;
alter table public.profiles add column if not exists phone_number text;
alter table public.profiles add column if not exists email        text;
alter table public.profiles add column if not exists role         text not null default 'candidate';
alter table public.profiles add column if not exists created_at   timestamptz not null default now();
alter table public.profiles add column if not exists last_login_at    timestamptz;
alter table public.profiles add column if not exists last_login_local text;

-- 2. Helper: is the current user an administrator? -------------------
-- SECURITY DEFINER avoids "infinite recursion" when policies on
-- profiles need to read profiles.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

-- 3. Row Level Security ---------------------------------------------
alter table public.profiles enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
  on public.profiles for select
  to authenticated
  using (auth.uid() = id);

drop policy if exists "Admins can view all profiles" on public.profiles;
create policy "Admins can view all profiles"
  on public.profiles for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  to authenticated
  with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- 4. Auto-create a profile row when a user signs up ----------------
-- Copies the signup options.data fields into public.profiles.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, birth_date, phone_number, email, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', ''),
    nullif(new.raw_user_meta_data ->> 'birth_date', '')::date,
    new.raw_user_meta_data ->> 'phone_number',
    new.email,
    'candidate'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 5. Make an existing account an administrator (optional) ----------
-- Replace the email with your admin's email, then run:
--
--   update public.profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'admin@example.com');
