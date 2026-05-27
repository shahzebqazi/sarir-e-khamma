# Handoff: Glossary (trilingual)

**Status:** Reference (baseline implemented; use for extensions)

## Goal

Maintain and extend the **English · Urdu · Kashmiri** glossary: import ghazal terms, hand-curate Sarir/Koshur entries, keep search/filter working.

## Read first

- [docs/agents/GLOSSARY.md](../agents/GLOSSARY.md)
- `scripts/import-glossary.mjs`
- `src/lib/data/sarir-terms.ts`, `poets.ts`, `glossary-terms.ts`
- `src/lib/components/GlossaryTermCard.svelte`

## Tasks (when extending)

1. Run `npm run import:glossary` after upstream `kashmiri-language-poetry` changes.
2. Add Sarir terms in `sarir-terms.ts` with optional `urdu` / `kashmiri` blocks.
3. Add poets in `poets.ts`; link to archive paths in comments if needed.
4. Ensure glossary page filter matches `english`, `urdu.*`, `kashmiri.*` fields.
5. Commit regenerated `glossary-terms.ts` if import output changed.

## Verify

- Glossary shows terms without empty language rows
- Urdu script renders RTL with Noto Nastaliq
- `npm run build` (import runs in build)

## Do not

- Remove trilingual fields without operator approval
- Hotlink private assets from kashmiri-language-poetry repo
