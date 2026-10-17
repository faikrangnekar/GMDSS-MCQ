-- ======================================================
-- GMDSS MCQ - Wrong Answer Reports schema
-- Run this once in the Supabase SQL Editor.
-- ======================================================

create table if not exists public.wrong_answer_reports (
  id                  uuid primary key default gen_random_uuid(),
  candidate_name      text not null,
  set_key             text not null,
  set_label           text not null,
  question_number     integer not null check (question_number > 0),
  question_text       text,
  current_answer_text text,
  reported_answer     text not null,
  note                text,
  status              text not null default 'pending'
                      check (status in ('pending', 'resolved')),
  created_at          timestamptz not null default now()
);

create index if not exists idx_wrong_reports_created
  on public.wrong_answer_reports (created_at desc);

alter table public.wrong_answer_reports enable row level security;

-- Anyone (including anonymous test takers) may submit a report.
create policy "Anyone can submit a report"
  on public.wrong_answer_reports for insert
  to anon, authenticated
  with check (true);

-- Only administrators may read reports.
create policy "Admins can read reports"
  on public.wrong_answer_reports for select
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

-- Only administrators may change the status.
create policy "Admins can update reports"
  on public.wrong_answer_reports for update
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ))
  with check (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));
