# Handoff rules (agents)

How to pick up, finish, merge, and archive scoped tasks in this repo. **Read [HANDOFF_RULES.md](HANDOFF_RULES.md) before any handoff work.**

**Git policy:** `main` = production (https://iconoclastaud.io/gift-for-alif/). **Each handoff = one branch.** Never commit WIP directly to `main`. Deploy only from `main` after merge. See [AGENTS.md](../../AGENTS.md#git--branches).

---

## Branch naming

| Pattern | Use |
|---------|-----|
| `handoff/<short-name>` | Scoped handoff from `HANDOFF_*.md` (e.g. `handoff/ui-polish`) |
| `feature/<name>` | Broader or multi-step feature work |

Use lowercase, hyphens, short slug tied to the handoff title. One branch per handoff — do not reuse a merged branch for a new task.

---

## Before you start

1. Read [docs/agents/CURRENT_STATE.md](../agents/CURRENT_STATE.md).
2. Read [docs/handoffs/README.md](README.md) for **active** handoffs only.
3. Open the handoff file; follow its **Read first**, **Constraints**, and **Do not** sections.
4. **Create a branch from `main`** before any code changes:

   ```bash
   git fetch origin
   git checkout main && git pull origin main
   git checkout -b handoff/short-name   # or feature/name
   ```

5. One handoff per session when possible — do not mix unrelated UI + content unless the operator asks.

---

## Picking up a handoff

| Step | Action |
|------|--------|
| 1 | Confirm **Status** is `Pending` (or operator explicitly assigned a reference/template task). |
| 2 | **Branch from `main`** — `git checkout -b handoff/<short-name>` (see [Branch naming](#branch-naming)). |
| 3 | Skim parent handoffs and design specs linked from the file. |
| 4 | Implement only what the handoff lists on that branch; match [CONVENTIONS.md](../agents/CONVENTIONS.md). |
| 5 | Run verification from the handoff and [VERIFY.md](../agents/VERIFY.md). |

Templates ([HANDOFF_NEW_ROUTE.md](HANDOFF_NEW_ROUTE.md)) and references ([HANDOFF_GLOSSARY.md](HANDOFF_GLOSSARY.md), [HANDOFF_EXCALIDRAW.md](HANDOFF_EXCALIDRAW.md)) are not “done tasks” — do not archive them when you use them as checklists.

---

## Definition of done

A handoff is ready to archive only when **all** of the following are true:

| Criterion | Meaning |
|-----------|---------|
| **Implemented** | Every task in the handoff is shipped in code or docs as specified. |
| **Deslopped** | No agent-invented prose, duplicate blocks, or scope creep beyond the handoff (grep guards in the file pass). |
| **Verified** | `npm run check` and `npm run build` pass; manual checks in the handoff are done; deploy/live checks completed if the handoff requires them. |

If verification fails, fix or stop — **do not** set Status to Done or archive.

---

## Finish: merge, archive, deploy

When a task handoff is truly done:

1. **Merge to `main`** (after `npm run check` and `npm run build` pass on the handoff branch):

   ```bash
   git checkout main && git pull origin main
   git merge handoff/short-name    # never force-push main
   ```

   Push when the operator asks. Do not deploy from a handoff branch.

2. **Deploy from `main` only** — `bash scripts/deploy-from-mac.sh` ([DEPLOY.md](../agents/DEPLOY.md)).

3. **Summarize** — Add a chronological entry to [DONE_HANDOFFS.md](DONE_HANDOFFS.md):
   - Date completed (YYYY-MM-DD)
   - Original filename
   - 2–4 sentence summary
   - Key files touched
   - Branch merged (name)
   - Verification performed
4. **Delete** — Remove the `HANDOFF_*.md` source file (not templates/references).
5. **Update** [README.md](README.md) — Remove the row; active handoffs only.
6. **Update** [AGENTS.md](../../AGENTS.md) — Remove links to deleted files; point pending work at README.
7. **Optional** — One line in [CURRENT_STATE.md](../agents/CURRENT_STATE.md) if the change affects “what exists today”.

Do **not** commit or merge unless the operator asks.

---

## What not to do

- Commit handoff WIP directly to **`main`** — use a branch.
- Deploy from a **`handoff/*` or `feature/*`** branch — production deploys come from **`main`** only.
- Force-push **`main`**.
- Leave **Status: Pending** on finished work — archive or update README.
- Archive or merge without **check + build** (and deploy when the handoff requires it).
- Delete [HANDOFF_NEW_ROUTE.md](HANDOFF_NEW_ROUTE.md), [HANDOFF_GLOSSARY.md](HANDOFF_GLOSSARY.md), or [HANDOFF_EXCALIDRAW.md](HANDOFF_EXCALIDRAW.md) — they stay as template/reference.
- Edit **sacred** poster strings in `poster-copy.ts` unless a new operator-approved handoff says otherwise.
- “Fix” poster typos or testimonial quote spelling without explicit operator approval.

---

## Where history lives

Completed task handoffs are summarized in **[DONE_HANDOFFS.md](DONE_HANDOFFS.md)** (chronological archive). Active work stays as individual `HANDOFF_*.md` files listed in [README.md](README.md).
