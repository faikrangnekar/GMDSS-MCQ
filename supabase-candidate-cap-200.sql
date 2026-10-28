-- ======================================================
-- GMDSS MCQ - Hard cap on registered candidates (200)
-- Run once in the Supabase SQL Editor (main project).
--
-- Target table: public.profiles. Candidate names live in
-- profiles.display_name; candidates are rows where role <> 'admin'.
-- Administrator rows are intentionally never deleted.
--
-- After this runs, every candidate insert keeps only the 200 newest
-- rows (by created_at) and deletes the oldest rows first.
-- Safe to re-run.
-- ======================================================

create or replace function public.enforce_candidate_cap()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  excess bigint;
begin
  -- Serialize enforcement so concurrent signups cannot push past 200.
  perform pg_advisory_xact_lock(hashtext('gmdss_candidate_cap_200'));

  select count(*) - 200
    into excess
  from public.profiles
  where role <> 'admin';

  if excess > 0 then
    delete from public.profiles
    where id in (
      select id
      from public.profiles
      where role <> 'admin'
      order by created_at asc, id asc
      limit excess
    );
  end if;

  return new;
end;
$$;

drop trigger if exists enforce_candidate_cap on public.profiles;

create trigger enforce_candidate_cap
after insert on public.profiles
for each row
when (new.role <> 'admin')
execute function public.enforce_candidate_cap();

-- One-time normalization for any data already above the cap.
-- This is a no-op while the table has 200 or fewer candidates.
with ranked as (
  select id,
         row_number() over (order by created_at asc, id asc) as rn
  from public.profiles
  where role <> 'admin'
)
delete from public.profiles
where id in (select id from ranked where rn > 200);
