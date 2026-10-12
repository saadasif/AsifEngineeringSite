# Working on this site

Keep the site in vanilla HTML/CSS. Node and Playwright are build tools for link
preview screenshots; the public pages should not need a JavaScript runtime.

## Link preview screenshots

Preview generation is handled by the **Refresh link previews** workflow after
changes land on `main` (including merges). Do not generate or commit preview
images while working on feature branches or preparing a merge.

- The workflow generates all three images in `assets/previews/` and commits
  changed images to `main`. After it succeeds, inspect the generated images
  for loaded fonts, readable text, and correct framing.
- Use the generator rather than manually cropping screenshots. It captures
  the working tree at 1200 × 630, waits for fonts/images, and freezes animations.
- Each page's `og:image` must use the full public URL of its preview image.
  Keep `og:image:width`, `og:image:height`, and `og:image:alt` accurate.
- If adding a page, add it to `scripts/generate-previews.mjs` and supply its
  Open Graph tags. Keep the readme's `noindex` directive.
- After changes land on `main`, check the **Refresh link previews** workflow
  and the Pages build. The workflow commits changed
  images and explicitly requests a Pages rebuild with the new screenshots.
- The workflow may add a follow-up commit. Fetch before the next merge/push;
  do not force-push over generated-image commits.

Run `git diff --check` before committing.
