# Design: Sarir e Khamma UI polish (handoff review)

**Date:** 2026-05-27  
**Status:** UI **complete**; landing **Option A approved & shipped**; Sessions/About poster copy may still be pending  
**Operator decision (2026-05-27):** Landing = **Option A** (poster-first)

---

## Review summary

UX/UI handoffs were written before implementation landed. By 2026-05-27 the codebase includes:

- Caveat `ScriptSubhead`, CSS paper grain, `.def-line`
- Sessions poster script lines
- About `ConnectIcon` grid
- Glossary epigraph + featured `shortDef` bullets + black term titles + stagger
- `ScriptTitle` fade-in + global `prefers-reduced-motion`

**Handoff docs were out of date** (still said Pending, instructed copying PNGs already in `docs/design/reference/`, described gaps that were closed).

---

## Implementation checklist (all done)

| Requirement | Shipped in |
|-------------|------------|
| Black script accents | `ScriptSubhead.svelte`, sessions page |
| Grain texture | `body::before` SVG noise (`app.css`) |
| Landing `.def-line` | `+page.svelte` |
| Connect icons | `ConnectIcon.svelte`, `about/+page.svelte` |
| Glossary hero | `glossary/+page.svelte` |
| Term title accent + scroll margin | `GlossaryTermCard.svelte` |
| Glossary stagger (no stagger on search) | `stagger` prop + `query ? undefined : i` |
| Motion guard + title entrance | `app.css`, `ScriptTitle.svelte` |

**Deferred (intentional):** footer email bottom-right; SVG write-on; portrait aside entrance; `static/textures/paper-grain.png`.

---

## Copy vs poster

| Route | Status |
|-------|--------|
| **Landing `/`** | **Done** — sacred epigraph only via `EpigraphTitle`; Baatin/Zaahir defs moved to glossary ([`+page.svelte`](../../src/routes/+page.svelte), [HANDOFF_BAATIN_ZAAHIR](../../handoffs/DONE_HANDOFFS.md#2026-05-27--handoff_baatin_zaahirmd)) |
| **Glossary** | Epigraph from `posterEpigraph`; Sarir term cards hold poster glosses |
| **Sessions / About** | Poster copy **done** — see [DONE_HANDOFFS.md](../../handoffs/DONE_HANDOFFS.md) (About rewrite, portrait transparent) |

### Landing (Option A — approved)

Shipped pattern:

```svelte
<ScriptTitle>{posterEpigraph}</ScriptTitle>
<p class="def-line">{posterBaatinLine}</p>
<p class="def-line">{posterZaahirLine}</p>
```

Sacred strings live in [`poster-copy.ts`](../../src/lib/data/poster-copy.ts). `landingWorkshopIntro` and `aboutArtistBioParagraphs` removed from `about-links.ts`.

---

## Minor UI polish (optional, no handoff required)

1. **Hide `glossary__featured` when `query` is non-empty** — featured lines are static; filtering below should not imply featured rows filter too.
2. **Portrait entrance** — skip unless operator asks (YAGNI).
3. **`CONVENTIONS.md`** — already documents tokens/components; keep in sync when adding `poster-copy.ts`.

---

## Handoff file status (after this review)

| Area | Status |
|------|--------|
| `HANDOFF_UI_*` (all five) | **Archived** — [DONE_HANDOFFS.md](../../handoffs/DONE_HANDOFFS.md) |
| `HANDOFF_CONTENT_*` | **Archived** — same |
| Active | [README.md](../../handoffs/README.md) — templates/references only |

---

## Verification

```bash
npm run check && npm run build && npm run preview
```

Compare `/`, `/glossary`, `/sessions` to `docs/design/reference/*.png`.

---

## Next step

Landing epigraph-only pattern is shipped. Poster copy, About rewrite, portrait, and UI polish handoffs are archived in [DONE_HANDOFFS.md](../../handoffs/DONE_HANDOFFS.md).
