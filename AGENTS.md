# Working on this site

Keep the site in vanilla HTML/CSS. Node and Playwright are build tools for link
preview screenshots; the public pages should not need a JavaScript runtime.

## Link preview screenshots

Before every push to `main`, including merges, regenerate the previews:

```sh
npm ci
npx playwright install chromium
npm run previews
```

- Inspect all three images in `assets/previews/` and include changed images in
  the same commit as the page changes. Do not push if generation fails.
- Use the generator rather than manually cropping screenshots. It captures
  the working tree at 1200 × 630, waits for fonts/images, and freezes animations.
- Each page's `og:image` must use the full public URL of its preview image.
  Keep `og:image:width`, `og:image:height`, and `og:image:alt` accurate.
- If adding a page, add it to `scripts/generate-previews.mjs` and supply its
  Open Graph tags. Keep the readme's `noindex` directive.
- After a push to `main`, check the **Refresh link previews** workflow and the
  Pages build. The workflow is the automatic backstop; it commits changed
  images and explicitly requests a Pages rebuild with the new screenshots.
- The workflow may add a follow-up commit. Fetch before the next merge/push;
  do not force-push over generated-image commits.

Run `git diff --check` before committing.
