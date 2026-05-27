# Site copy design — Sarir e Khamma

**Date:** 2026-05-26  
**Status:** Approved (2026-05-26) — About uses option **A** (both intro paragraphs on About and Sessions)  
**Scope:** Written content only — not UI tokens, motion, or glossary data import.

---

## Goal

Align the live site with **operator-provided poster copy** (WhatsApp reference images). Poster strings are **immutable**. All other prose on the site should be rewritten or removed so it does not contradict, duplicate awkwardly, or replace approved source text.

Implementation archived in [docs/handoffs/DONE_HANDOFFS.md](../handoffs/DONE_HANDOFFS.md) (content handoffs, 2026-05-26).

---

## Sacred text (do not edit)

Transcribed from reference images. Agents must use these strings **verbatim** (including capitalization, spelling, and punctuation) wherever they appear on the site.

### Glossary / landing poster

| Element | Verbatim text |
|---------|----------------|
| Script epigraph | `sab shayr hai baatin kuch kuch zaahir hai` |
| Baatin | `Baatin : inside, internal, inner self, hidden self` |
| Zaahir | `Zaahir : Evident, Visible, apparent` |
| Contact | `Sarirekhamma.alif@gmail.com` |

### Sessions poster (color — Why / What / How)

| Element | Verbatim text |
|---------|----------------|
| Title | `sarir e khamma / sessions` |
| Script line 1 | `Why What How` |
| Script line 2 | `Creative Writing / Poetry / Songwriting` |
| With label | `With` |
| Name | `Mohammad muneem nazir/Alif` |
| Body 1 | `In-depth sessions with your poetry, story & writing, understanding the traditional & contemporary ways of creative writing / song writing.` |
| Body 2 | `About Sek: Sek, a comprehensive 10-session course led by Mohammad Muneem ( Virtual One on One ), intitally the program was conducted at Symbiosis College of Arts & Commerce, pune.` |

### Sessions poster (B&W — long curriculum)

| Element | Verbatim text |
|---------|----------------|
| Title (variant) | `sarir e khamma sessions` |
| With / name | Same as above |
| Body paragraphs | Four paragraphs as on `/sessions` today (including `Song writting`, `intitally` only on poster 2 not poster 3) |

Full paragraph text is recorded in [DONE_HANDOFFS.md](../handoffs/DONE_HANDOFFS.md#2026-05-26--handoff_content_sessionsmd).

### Explicitly out of scope for rewrite

- **Testimonials** — participant quote in `testimonials.ts` (verbatim per prior handoff).
- **Ghazal glossary terms** — generated from `kashmiri-language-poetry` (`glossary-terms.ts`).
- **Poet bios** — short reference blurbs in `poets.ts` (separate educational corpus).

---

## Current problems

| Location | Issue |
|----------|--------|
| `/` Baatin/Zaahir | Agent prose replaces poster bullet definitions |
| `/` lede | `landingWorkshopIntro` invents marketing copy not on any poster |
| `/sessions` | Missing poster color body 1–2; agent “Why/What/How” pillar bullets replace script subheads |
| `/about` | Three paragraphs of agent-written bio; no poster source |
| `/glossary` Sarir terms | English definitions paraphrase poster bullets |
| `/ideas`, glossary chrome | Agent utility copy (acceptable to rewrite; not sacred) |

---

## Approaches considered

### A — Poster-only (recommended)

- Every page draws only from sacred text + structural labels (nav, “Connect”, “Glossary”).
- **About** = poster sessions intro paragraphs + Connect links (no invented bio).
- **Landing** = epigraph + bullet defs only; no lede.
- **Sessions** = full poster stack (color header + B&W body).

**Pros:** Single source of truth; no approval drift.  
**Cons:** About feels thin until operator adds new approved copy.

### B — Poster + light bridge copy

- Same as A, plus one neutral bridge sentence per page (e.g. landing → “Read sessions for the full curriculum”).
- **Pros:** Slightly better wayfinding.  
**Cons:** Risk of tone drift; operator must approve each bridge line.

### C — Keep agent literary voice

- Retain current `about-links.ts` bio and landing defs; only fix sessions gaps.

**Rejected:** Conflicts with operator instruction to preserve poster text and rethink everything else.

**Recommendation:** **A** for implementation handoffs. If the operator wants bridge copy, add it in a follow-up pass with explicit approval.

---

## Page-by-page design

### Landing (`/`)

- **Keep:** script epigraph (already correct).
- **Replace:** Baatin/Zaahir `<p>` blocks with poster bullet lines (`.def-line` pattern per UI typography handoff).
- **Remove:** `landingWorkshopIntro` lede entirely (sessions page holds program copy).

### Sessions (`/sessions`)

- **Keep:** title, With/name, four B&W body paragraphs (already verbatim).
- **Add:** script subheads `Why What How` and `Creative Writing / Poetry / Songwriting` (black script component).
- **Add:** color poster body 1–2 **before** the four paragraphs.
- **Remove:** synthesized `<ul>` pillar list.

### About (`/about`) — operator choice **A**

- **Remove:** `aboutArtistBioParagraphs` agent prose.
- **Use:** both color-poster intro paragraphs (`posterSessionsIntro1`, `posterSessionsIntro2`) — **same strings as on `/sessions`** (intentional duplication).
- **Keep:** Connect links + email (sacred).
- **Optional chrome:** “Full session curriculum →” link to `/sessions` below the two paragraphs (non-sacred; not required for option A).

### Glossary (`/glossary`)

- **Sarir terms:** English `definition` for `baatin` / `zaahir` aligned to poster bullet text (comma-separated gloss, not new sentences).
- **Intro / search / empty states:** Short neutral chrome copy (proposed strings in handoff).

### Ideas, shell, meta

- Minimal utilitarian intros; do not echo workshop curriculum.
- Testimonials `<svelte:head>` description may stay or shorten — not sacred.

---

## Data layout

| Concern | Approach |
|---------|----------|
| Poster strings | New `src/lib/data/poster-copy.ts` exporting constants (single source for landing + sessions + about) |
| About bio | Delete `aboutArtistBioParagraphs`; import shared poster paragraphs |
| Landing lede | Remove `landingWorkshopIntro` export |

---

## Verification

- Diff against sacred table above — no substring edits on poster lines.
- `npm run check` && `npm run build`
- Manual: `/`, `/sessions`, `/about` read against reference PNGs in `docs/design/reference/`

---

## Next step

Operator reviews this spec and handoffs. After approval, agents implement via scoped handoffs (no copy edits in UI-only handoffs).
