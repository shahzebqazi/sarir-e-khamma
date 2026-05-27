# Handoff: Ideas / Excalidraw

**Status:** Reference

## Goal

Change embedded Excalidraw behavior on `/ideas` without breaking other routes.

## Read first

- `src/routes/ideas/+page.ts` (`export const ssr = false`)
- `src/lib/components/ExcalidrawHost.svelte`, `ExcalidrawReact.tsx`
- `vite.config.ts` — React plugin

## Constraints

- Lazy-load Excalidraw only on Ideas route
- Drawings are client-only; no server persistence unless operator adds a room URL later
- Expect large JS chunk (~1.8 MB) in build output

## Common tasks

- Adjust editor height / mobile viewport → `ideas/+page.svelte` + host styles
- Upgrade `@excalidraw/excalidraw` → test `npm run build` and mobile Safari
- Initial view / UI options → props in `ExcalidrawReact.tsx`

## Verify

- `npm run build` succeeds
- Ideas page loads without console errors on desktop and iPhone width
- Other routes do not load React/Excalidraw bundles unnecessarily (check network tab)

## Do not

- Enable SSR on Ideas without a full client-only guard
- Import Excalidraw in `+layout.svelte`
