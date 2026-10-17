# Plan: Candidate "Report Wrong Answer" Button + Admin Review Panel

## Goal
Add one set-level **"Report a Wrong Answer"** button on the test page. A candidate clicks it, enters the **question number** and the **answer they believe is correct** (plus an optional note). The report is stored in a new Supabase table and appears in the existing admin dashboard with **pending/resolved** status, so corrections can be applied manually in `questions.js`.

Decisions confirmed with the user:
- Storage: **Supabase table + admin dashboard** (works across devices).
- Placement: **one set-level button only** (test page, near Submit Test).
- Corrections: **manual edit of questions.js** — dashboard only lists/toggles report status.

---

## 1. One-time Supabase setup (user runs SQL in Supabase SQL Editor)

Create `supabase-schema.sql` in the repo root (for reference/record), and run its contents in the Supabase SQL Editor:

```sql
-- Table for candidate wrong-answer reports
create table if not exists public.wrong_answer_reports (
  id                 uuid primary key default gen_random_uuid(),
  candidate_name     text not null,
  set_key            text not null,
  set_label          text not null,
  question_number    integer not null check (question_number > 0),
  question_text      text,
  current_answer_text text,
  reported_answer    text not null,
  note               text,
  status             text not null default 'pending'
                     check (status in ('pending', 'resolved')),
  created_at         timestamptz not null default now()
);

create index if not exists idx_wrong_reports_created
  on public.wrong_answer_reports (created_at desc);

alter table public.wrong_answer_reports enable row level security;

-- Anyone (incl. anonymous test takers) may submit a report
create policy "Anyone can submit a report"
  on public.wrong_answer_reports for insert
  to anon, authenticated
  with check (true);

-- Only admins may read reports
create policy "Admins can read reports"
  on public.wrong_answer_reports for select
  to authenticated
  using (exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  ));

-- Only admins may change status
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
```

## 2. Fix Supabase URL in admin-config.js (pre-existing bug)

`admin-config.js` currently stores `https://<project>.supabase.co/rest/v1/`. supabase-js v2 `createClient()` expects the **base project URL** only; with `/rest/v1/` appended every auth/REST call 404s (this would break admin login too).

- Change `supabaseUrl` to `https://jldiqlkkiigkteqnpule.supabase.co` (no path, no trailing slash).
- Add the same defensive normalization helper in both `admin.js` and `script.js`: strip trailing `/` and any trailing `/rest/v1` before `createClient`.

## 3. test.html — button + modal markup

- Before `questions.js`/`script.js`, also load:
  - `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`
  - `admin-config.js` (shared config; already contains the project URL/key)
- In `.submit-area`, add a secondary button under Submit Test:
  - `<button type="button" id="reportWrongBtn" class="btn btn-outline report-btn">Report a Wrong Answer</button>`
- Add a new modal following the existing `.modal-overlay.hidden` pattern (`#reportModal`) containing:
  - `<h3>Report a Wrong Answer</h3>`
  - Form (left-aligned inside the centered modal):
    - Question number: `<input type="number" id="reportQnum" min="1" inputmode="numeric">` (max set from JS = question count)
    - "Answer you believe is correct" (required): `<textarea id="reportAnswer" maxlength="300" rows="2">`
    - Optional note: `<textarea id="reportNote" maxlength="500" rows="2">`
    - `<div id="reportError" class="form-error" hidden></div>`
  - `.modal-actions`: Cancel (`#cancelReportBtn`, btn-outline) + Send Report (`#sendReportBtn`, btn-primary)
  - Success view (`#reportSuccess`, hidden until sent): "Thank you! Your report has been sent for review." + Close button (`#closeReportBtn`)

## 4. script.js — report logic (inside the existing test-page block, `startTest()` scope)

- `initReportClient()`:
  - Read config from `window.ADMIN_SUPABASE_CONFIG`, normalize URL; if config missing/placeholder or lib not loaded → **hide** `#reportWrongBtn` (misconfigured deploy shouldn't show a dead button).
- Open/close:
  - Click `#reportWrongBtn` → reset form + error, show `#reportModal` (reuse the same `.hidden` toggle convention as `submitModal`).
  - Cancel → hide modal; Close (success) → hide modal and clear fields so next open is fresh.
- Validation (on send):
  - Question number: integer in `1..total` → else error "Enter a question number between 1 and N."
  - Reported answer: non-empty after trim → else "Enter the answer you believe is correct."
  - No `innerHTML` — build with `createElement`/`textContent` per existing codebase style; plain ES5-style functions, `var`/`const` mixed as file already does.
- Build payload from the in-scope `questions`/`setKey`/`candidateName`:
  - `candidate_name`, `set_key`, `set_label` (`getSetLabel(setKey)`), `question_number`, `question_text` (`displayQuestion(questions[n-1].question)`, truncated ~200 chars), `current_answer_text` (`questions[n-1].options[questions[n-1].answer]`), `reported_answer`, `note` (or null).
- Submit:
  - Disable `#sendReportBtn` ("Sending...") to prevent double sends.
  - `supabaseClient.from("wrong_answer_reports").insert(payload)` — anonymous insert allowed by RLS policy.
  - Success → hide form view, show `#reportSuccess`.
  - Error → re-enable button, show message in `#reportError` (keeps modal open).
- Reports blocked once `submitted || autoSubmitting` (page redirects at submit anyway, so guard is just defensive).

## 5. style.css — small additions

- `.submit-area { flex-direction: column; gap: 12px; }` so the two buttons stack (Submit stays large/primary; `.report-btn` gets `max-width: 480px; width: 100%; min-height: 48px; font-size: 0.98rem;`).
- Add `.field-group textarea` alongside the existing `input, select` styling (same border/padding/focus).
- `.modal-form { text-align: left; }` (modals default to centered text) and `.form-success` (green confirmation text), plus `.report-modal .modal-actions .btn { flex: 1; }`.

## 6. admin.html — reports panel

- New panel after "Quiz Attempts":
  - `<section class="panel">` with `<h2 class="panel-title">Reported Wrong Answers</h2>`, a status filter `<select id="reportsFilter">` (All / Pending / Resolved), and `<div id="reportsContent"></div>`.

## 7. admin.js — fetch, render, toggle status

- `showLogin()`: also clear `reportsContent`.
- `loadDashboard()`: add 4th parallel query:
  `supabaseClient.from("wrong_answer_reports").select("*").order("created_at", { ascending: false })`
  and add its error to the aggregated dashboard error message.
- `renderStats(...)`: add stat card **"Pending Reports"** (count of `status === "pending"`, red).
- `renderReportsTable(reports)` using existing `buildTable`/`renderTableOrMessage` helpers.
  - Columns: Reported At, Candidate, Set, Q#, Question (truncated ~120 chars), App's Answer, Reported Answer, Note, Status (badge), Action.
  - Action cell: button **"Mark Resolved"** (pending rows) or **"Reopen"** (resolved rows).
  - On click: `supabaseClient.from("wrong_answer_reports").update({ status: ... }).eq("id", id)` → on success update the cached array and re-render the table (no full dashboard reload); on error append message to `#dashboard-error`.
- Filter: keep the raw reports array in a module-level variable; `#reportsFilter` change re-renders with client-side filtering.

## 8. admin.css — report styles

- `.status-badge` + `.status-badge.pending` (orange bg/text) / `.status-badge.resolved` (green).
- `.report-action-btn` — compact variant of `.btn btn-outline` (smaller padding/min-height).
- `.report-question-cell { max-width: 260px; overflow-wrap: anywhere; }` to keep the table readable.

---

## Files touched
| File | Change |
|---|---|
| `supabase-schema.sql` | **New** — table + RLS SQL (reference copy) |
| `admin-config.js` | Fix `supabaseUrl` to base project URL |
| `test.html` | Load Supabase CDN + config; add report button + modal |
| `script.js` | Report client init, modal wiring, validation, insert |
| `style.css` | Submit-area stacking, textarea field styling, modal form/success styles |
| `admin.html` | "Reported Wrong Answers" panel + filter select |
| `admin.js` | Load reports, stat card, table render, status toggle, filter |
| `admin.css` | Status badges, action buttons, question cell styling |

## Verification
1. Run the SQL in Supabase SQL Editor; confirm table exists and policies are applied.
2. Serve the site locally (`py -m http.server 8080` in project dir) and:
   - Start a test → click "Report a Wrong Answer" → verify validation errors (bad q# , empty answer) and a successful submit (row visible in Supabase Table Editor with correct question text + app answer).
   - Normal test flow regression: start → answer → submit → result page still works.
3. Log in to `admin.html` → confirm "Pending Reports" stat + reports table; toggle Mark Resolved/Reopen and verify `status` updates in Supabase; test the status filter.
4. No lint/typecheck tooling exists in this repo; verification is manual/browser-based.

## Risks / notes
- The anonymous INSERT policy allows anyone with the anon key to submit reports (spam risk). Acceptable for now thanks to RLS column scoping; captcha/rate-limiting can be added later if abused.
- Multiple candidates reporting the same question is expected — no dedupe (by design; each report carries the candidate's suggested answer text).
- Reports reference questions by number; the modal instructs the candidate using the same 1-based numbering shown on the test page, and JS validates the range against the current set.
- Follow-up idea (not in scope): also place the same button on the result page, where candidates review answers.
