-- ======================================================
-- GMDSS MCQ - Terms & Conditions acceptance tracking
-- Run this ONCE in the Supabase SQL Editor (main project).
-- Safe to re-run: uses IF NOT EXISTS / DO blocks where possible.
-- ======================================================

-- 1) Add columns to profiles if they do not already exist
alter table public.profiles add column if not exists terms_accepted boolean not null default false;
alter table public.profiles add column if not exists terms_accepted_at timestamptz;

-- 2) Ensure existing rows have safe defaults (do NOT auto-mark as accepted)
update public.profiles
set terms_accepted = false
where terms_accepted is null;

-- If the column was just added with default false, this is usually a no-op.
-- Explicitly set to false for clarity without changing roles/other data.
alter table public.profiles alter column terms_accepted set default false;
alter table public.profiles alter column terms_accepted set not null;

-- 3) Update the trigger that auto-creates profiles on signup
-- If the project uses the trigger from supabase-auth-setup.sql, this will
-- still create the profile row. We cannot "auto-truth" from the trigger
-- unless we pass metadata. The frontend now upserts after signup and also
-- passes terms_accepted in user_metadata as a hint (not trusted alone).
-- This trigger remains unchanged in role; see notes below.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, birth_date, phone_number, email, role, terms_accepted)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', ''),
    nullif(new.raw_user_meta_data ->> 'birth_date', '')::date,
    new.raw_user_meta_data ->> 'phone_number',
    new.email,
    'candidate',
    false
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- 4) Row Level Security notes
-- Existing policies allow users to update their own profile (see supabase-auth-setup.sql).
-- Allowing users to set terms_accepted=true themselves is generally acceptable
-- if recorded at signup, but to be safer you can restrict updates. However, changing
-- RLS here is optional. DO NOT create a policy that lets anyone write arbitrary values.
-- If you want to hard-block self-updating acceptance later, consider a trigger
-- that prevents changing terms_accepted/terms_accepted_at except by a service role.

-- 5) Verification queries (run after signup to confirm)
-- select id, email, role, terms_accepted, terms_accepted_at, created_at
-- from public.profiles
-- order by created_at desc
-- limit 10;
