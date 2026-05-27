# Glossary

## Trilingual shape

```ts
{
  slug: string;
  english: { label: string; definition: string };
  urdu?: { label?: string; script?: string; definition?: string };
  kashmiri?: { label?: string; script?: string; definition?: string };
}
```

UI (`GlossaryTermCard.svelte`): show English always; Urdu/Kashmiri rows only when present. Urdu script uses `dir="rtl"` and `--font-urdu`.

## Regenerate ghazal terms

```bash
npm run import:glossary
```

Reads `shahzebqazi/kashmiri-language-poetry` `legacy/pages/02-ghazals.html` via GitHub API (no clone required). Writes `src/lib/data/glossary-terms.ts`.

## Sarir + poets

- Sarir terms: `sarir-terms.ts`
- Poets: `poets.ts` (names, dates, optional Urdu/Kashmiri)

Handoff: [HANDOFF_GLOSSARY.md](../handoffs/HANDOFF_GLOSSARY.md).
