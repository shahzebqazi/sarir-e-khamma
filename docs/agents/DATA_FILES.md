# Data files

| File | Edited by | Purpose |
|------|-----------|---------|
| `about-links.ts` | Hand | `connectLinks`, `contactEmail`, `aboutBio` |
| `sarir-terms.ts` | Hand | Baatin, Zaahir, Sarir e Khamma (trilingual) |
| `glossary-terms.ts` | **Generated** | Ghazal/prosody terms from import script |
| `poets.ts` | Hand | Poet index for glossary page |

Glossary page imports `sarirTerms`, `ghazalTerms`, and `poets` directly in `glossary/+page.svelte`.

**Do not** hand-edit `glossary-terms.ts` for bulk changes — run `npm run import:glossary` and use `glossary-overrides` pattern in import script if overrides are added later.

## Types

`src/lib/types/glossary.ts` — `GlossaryTerm` with optional `urdu` and `kashmiri` blocks.
