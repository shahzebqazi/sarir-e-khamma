# Verify before done

```bash
npm run check
npm run build
npm run preview   # optional: spot-check /gift-for-alif/
```

## Checklist

- [ ] No hardcoded `/gift-for-alif` in `src/` (use `base`)
- [ ] New routes in `SiteShell` nav if user-facing
- [ ] External links use `rel="noopener noreferrer"`
- [ ] `npm run build` succeeds (glossary import runs in build script)
- [ ] If glossary import changed: `npm run import:glossary` committed or regenerated on server at deploy

## Production (operator)

After deploy on droplet:

```bash
for p in '' sessions about testimonials ideas glossary pins; do
  curl -sI "https://iconoclastaud.io/gift-for-alif/${p}" | head -1
done
```

All of the above must be `HTTP/2 200`. Clean URLs (no `.html`) require `trailingSlash: 'always'` in `+layout.ts` so Caddy can serve `{path}/index.html`.

## Do not

- Commit secrets or `.env` with keys
- Change `paths.base` without operator approval
- Force-push `main`
