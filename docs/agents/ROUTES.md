# Routes

## Adding a page

1. Create `src/routes/<name>/+page.svelte`
2. Use `PageGrid`, `ScriptTitle` from `$lib/components/`
3. Add `<svelte:head>` with `<title>` and `<meta name="description">`
4. Add nav entry in `SiteShell.svelte` `nav` array
5. Run `npm run check` and `npm run build` (prerender picks up `*`)

Optional data file: `src/lib/data/<name>.ts`

## Active route highlighting

`SiteShell` uses `isActive($page.url.pathname, item.href)` with `base` prefix.

## Ideas route exception

`src/routes/ideas/+page.ts`:

```ts
export const ssr = false;
```

Required for Excalidraw (browser-only APIs).

See [HANDOFF_NEW_ROUTE.md](../handoffs/HANDOFF_NEW_ROUTE.md) for a full checklist.
