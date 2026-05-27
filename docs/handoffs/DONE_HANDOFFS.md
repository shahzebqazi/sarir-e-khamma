# Done handoffs (archive)

Chronological archive of **completed** scoped tasks. Active and pending work lives in [README.md](README.md) as individual `HANDOFF_*.md` files.

**Agent workflow:** [HANDOFF_RULES.md](HANDOFF_RULES.md)

---

## Agent rules (summary)

1. Read [CURRENT_STATE.md](../agents/CURRENT_STATE.md) and [README.md](README.md) before coding.
2. Pick up only **Pending** handoffs (or operator-assigned work from a template).
3. **Done** = implemented + deslopped + `npm run check` / `npm run build` (+ manual/deploy checks per handoff).
4. **Archive:** append an entry below → delete the source `HANDOFF_*.md` → update README + AGENTS.md.
5. Do not archive templates/references or skip verification.

Full procedure: [HANDOFF_RULES.md](HANDOFF_RULES.md).

---

## Archive (oldest first)

### 2026-05-26 — HANDOFF_TESTIMONIALS.md

Added a prerendered `/testimonials` route with verbatim W. Worst quote, blockquote layout, and nav link after About. Data lives in a dedicated testimonials module; styles match About patterns.

**Key files:** `src/lib/data/testimonials.ts`, `src/routes/testimonials/+page.svelte`, `src/lib/components/SiteShell.svelte`

**Verification:** `npm run check`; dev/preview on `/testimonials`; nav active state.

---

### 2026-05-26 — HANDOFF_VIEWPORTS.md

Mobile-first pass at iPhone widths: stacked header nav, 44px tap targets, centered portrait aside on narrow viewports, full-width glossary search, overflow-wrap on trilingual cards, Excalidraw mobile height. Documented responsive breakpoints in agent conventions.

**Key files:** `src/app.css`, `SiteShell.svelte`, `PageGrid.svelte`, `glossary/+page.svelte`, `GlossaryTermCard.svelte`, `ExcalidrawHost.svelte`, `docs/agents/CONVENTIONS.md`

**Verification:** DevTools 375×667 and 390×844; `npm run build`; no horizontal scroll on footer link.

---

### 2026-05-26 — HANDOFF_CONTENT_POSTER_DATA.md

Created `poster-copy.ts` with verbatim sacred poster strings and removed invented marketing exports from `about-links.ts` (`landingWorkshopIntro`, `aboutArtistBioParagraphs`). Centralized copy so routes cannot drift wording.

**Key files:** `src/lib/data/poster-copy.ts`, `src/lib/data/about-links.ts`, `docs/agents/DATA_FILES.md`, `docs/agents/CONTENT.md`

**Verification:** `npm run check`; `rg` found no remaining imports of removed exports.

---

### 2026-05-26 — HANDOFF_CONTENT_LANDING.md

Landing `/` matched the baatin·zaahir poster: script epigraph plus two `.def-line` poster glosses only; removed agent workshop lede and duplicate subhead/prose blocks.

**Key files:** `src/routes/+page.svelte`, imports from `poster-copy.ts`

**Verification:** Character-for-character poster lines; no `landingWorkshopIntro`; portrait aside unchanged.

---

### 2026-05-26 — HANDOFF_CONTENT_SESSIONS.md

Sessions route stacked color-poster header (Why/What/How, disciplines, intros) then four B&W body paragraphs from `poster-copy.ts`; removed synthesized Why/What/How pillar bullet list.

**Key files:** `src/routes/sessions/+page.svelte`, `poster-copy.ts`, `ScriptSubhead.svelte`

**Verification:** Pillar marketing text gone; sacred typos (`Song writting`, `intitally`) preserved; `npm run check` / build.

---

### 2026-05-26 — HANDOFF_CONTENT_ABOUT.md

Replaced invented artist bio with the two sacred session intro paragraphs plus optional curriculum link; Connect section unchanged. *(Later superseded by [HANDOFF_ABOUT_REWRITE.md](HANDOFF_ABOUT_REWRITE.md) for A+C+D layout — see active handoffs.)*

**Key files:** `src/routes/about/+page.svelte`, `poster-copy.ts`, `about-links.ts`

**Verification:** No “meeting point” agent prose; Symbiosis paragraph verbatim; Connect URLs intact.

---

### 2026-05-26 — HANDOFF_CONTENT_SITE_CHROME.md

Rewrote non-poster utility copy: glossary intro/placeholders/empty states, Ideas blurb, Sarir `english.definition` aligned to poster glosses for baatin/zaahir; optional testimonials meta description. Did not touch ghazal import data or quote body.

**Key files:** `src/routes/glossary/+page.svelte`, `src/routes/ideas/+page.svelte`, `src/lib/data/sarir-terms.ts`, `src/routes/testimonials/+page.svelte`

**Verification:** `npm run check`; Sarir English defs match poster bullets.

---

### 2026-05-26 — HANDOFF_CONTENT_COPY.md

Master content handoff: poster-faithful site copy with sacred-text rule; coordinated five child route/data handoffs (poster module, landing, sessions, about, site chrome). Design spec: `docs/superpowers/specs/2026-05-26-site-copy-design.md`.

**Key files:** `poster-copy.ts`, route pages under `src/routes/`, `sarir-terms.ts`, `about-links.ts`

**Verification:** `npm run check` / `npm run build`; grep guards for unchanged epigraph and removed agent strings.

---

### 2026-05-27 — HANDOFF_UI_TYPOGRAPHY.md

Shipped Caveat script subheads (`ScriptSubhead`), `.def-line` utility, sessions script lines, and CSS SVG paper grain on `body::before` (no static grain PNG).

**Key files:** `src/app.css`, `src/app.html`, `ScriptSubhead.svelte`, `sessions/+page.svelte`, landing `+page.svelte`

**Verification:** Visual match to `docs/design/reference/sessions-poster-color.png`; build passes.

---

### 2026-05-27 — HANDOFF_UI_GLOSSARY_PAGE.md

Glossary hero with epigraph and featured `.def-line` bullets from `english.shortDef`; black term titles, scroll margins, section dividers, search focus transition.

**Key files:** `src/routes/glossary/+page.svelte`, `sarir-terms.ts`, `GlossaryTermCard.svelte`

**Verification:** Reference PNG alignment; regression at 390px and desktop.

---

### 2026-05-27 — HANDOFF_UI_CONNECT_ICONS.md

About Connect grid with filled SVG icons per link kind, 44px targets, hover/focus states; `ConnectIcon` + extended `about-links.ts` types.

**Key files:** `src/lib/components/ConnectIcon.svelte`, `src/lib/data/about-links.ts`, `src/routes/about/+page.svelte`

**Verification:** All five `href` values unchanged; `aria-label` on anchors.

---

### 2026-05-27 — HANDOFF_UI_MOTION.md

Added `prefers-reduced-motion` guard, title fade-up, glossary term stagger (disabled while searching), Connect and search micro-transitions.

**Key files:** `src/app.css`, `ScriptTitle.svelte`, `GlossaryTermCard.svelte`, `glossary/+page.svelte`, `about/+page.svelte`

**Verification:** Reduced-motion respected; no console errors on glossary filter.

---

### 2026-05-27 — HANDOFF_UI_AUDIT.md

UX/UI gap map closed: all five UI implementation handoffs shipped per `docs/superpowers/specs/2026-05-27-ui-polish-design.md`. Poster **content** work tracked separately (content handoffs above).

**Key files:** Cross-cutting UI components and routes (see child UI handoffs in this archive)

**Verification:** `npm run check && npm run build`; routes `/`, `/sessions`, `/about`, `/glossary` at 390px and 1280px.

---

### 2026-05-27 — HANDOFF_BAATIN_ZAAHIR.md

Removed Baatin/Zaahir definition blocks from home; added workshop prose to glossary term cards; styled epigraph phrases in bold Helvetica stack via `EpigraphTitle` / `--font-epigraph-accent` without editing sacred `poster-copy.ts` strings.

**Key files:** `src/routes/+page.svelte`, `src/routes/glossary/+page.svelte`, `src/lib/data/sarir-terms.ts`, `src/app.css`, `EpigraphTitle.svelte` (or equivalent)

**Verification:** `npm run check` / `npm run build`; workshop prose only in `sarir-terms.ts`; responsive epigraph at ~390px.

---

### 2026-05-27 — HANDOFF_DEPLOY.md

Site published to production at `https://iconoclastaud.io/gift-for-alif/`. Documented Mac build + rsync via `scripts/deploy-from-mac.sh` (preferred over on-server Vite build, which OOMs on Droplet B).

**Key files:** `scripts/deploy-from-mac.sh`, `docs/agents/DEPLOY.md`

**Verification:** `curl -sI` HTTP 200 on live URL; operator deploy from Mac.

---

### 2026-05-27 — HANDOFF_ABOUT_REWRITE.md

Rewrote `/about` per operator model A+C+D: sacred poster header (With/name, Why What How, disciplines), both session intro paragraphs, one neutral bridge line in `about-copy.ts`, curriculum link, and Connect unchanged. Removed agent `prose-mixed` bio slop.

**Key files:** `src/lib/data/about-copy.ts`, `src/routes/about/+page.svelte`, `docs/agents/CONTENT.md`

**Verification:** `npm run build`; grep guards (no `prose-mixed`/tone spans on About); deslop checklist passed.

---

### 2026-05-27 — HANDOFF_PORTRAIT_TRANSPARENT.md

Confirmed transparent cutout asset in repo and `AlifPortraitAside`; built and deployed to production so terracotta shows through on `/`, `/sessions`, `/about`. Original orange PNG preserved.

**Key files:** `static/images/alif-sessions-cutout-transparent.png`, `src/lib/components/AlifPortraitAside.svelte`

**Verification:** `npm run build` (transparent PNG in `build/images/`); `scripts/deploy-from-mac.sh`; live `curl` + HTML grep on production.

---

### 2026-05-27 — HANDOFF_GLOSSARY_PAGE_REFINEMENT.md

Removed visible Ideas/Glossary `<h1>` titles (document titles via `<svelte:head>` only). Dropped glossary hero `glossary__featured` Baatin/Zaahir `.def-line` duplication; merged poster glosses into Sarir term card definitions. Added `GlossarySource` type, citation UI on every Sarir + ghazal term, curated Urdu rows, and import overlays (`scripts/glossary-citations.json`, `scripts/glossary-urdu-overlay.json`) so `npm run import:glossary` preserves sources. Fixed epigraph/nav fonts: global `.script-title .epigraph-phrase` Helvetica bold with `!important`; Cedarville on nav with `font-synthesis: none`.

**Key files:** `src/routes/ideas/+page.svelte`, `src/routes/glossary/+page.svelte`, `src/lib/types/glossary.ts`, `src/lib/components/GlossaryTermCard.svelte`, `src/lib/data/sarir-terms.ts`, `src/lib/data/glossary-terms.ts`, `scripts/import-glossary.mjs`, `src/app.css`, `EpigraphTitle.svelte`, `SiteShell.svelte`, `docs/agents/GLOSSARY.md`

**Verification:** `npm run build`; deslop guards (no Ideas/Glossary h1, no `glossary__featured`); 16 ghazal + 3 Sarir `sources`; deploy + live font/CSS check.

---

### 2026-05-26 — handoff/glossary-pins

Glossary pin unlock: Baatin and Zaahir always visible; pins **2212**, **122**, **222** unlock three term groups via `sessionStorage`. Hidden facilitator page at `/pins` (not in nav).

**Key files:** `src/lib/data/glossary-pin-groups.ts`, `src/lib/glossary/pin-unlock.ts`, `src/routes/glossary/+page.svelte`, `src/routes/pins/+page.svelte`, `src/lib/components/GlossaryTermCard.svelte`

**Verification:** `npm run build`; glossary locked/unlock UX; `build/pins.html`; deploy to https://iconoclastaud.io/gift-for-alif/

---

### 2026-05-27 — merge regression restore (`352c8d8`)

Restored poster-faithful landing (epigraph + portrait), sessions, about, testimonials route/nav, and portrait components after WIP on `main` had regressed routes. Documented stash hazard in `CURRENT_STATE.md`.

**Key files:** `src/routes/+page.svelte`, `sessions/+page.svelte`, `about/+page.svelte`, `testimonials/+page.svelte`, `AlifPortraitAside.svelte`, `poster-copy.ts` consumers

**Branch:** `handoff/fix-merge-regressions` merged to `main`

**Verification:** `npm run build`; no agent workshop lede on landing

---

### 2026-05-27 — typography and nav polish (batch)

Font deslop (single token path in `app.css`), Great Vibes on nav/brand (`handoff/nav-font-match-sessions`), Ideas page visible H1 removed.

**Key files:** `src/app.css`, `SiteShell.svelte`, `src/routes/ideas/+page.svelte`

**Verification:** `npm run build`

**Note:** `handoff/fix-landing-copy` was **not** merged — it reintroduces agent marketing copy; keep `main` epigraph-only.

---
