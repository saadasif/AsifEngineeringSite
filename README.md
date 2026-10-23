site for my personal projects. made in pure vanilla HTML/CSS (and maybe TS one day) for the ❤️ of the craft.

## Styles

`shared.css` contains the site-wide palette and page reset, plus the readme and
Reading Room’s common fonts, page chrome, and numbered section labels. Page
layouts stay in `readme.css` and `reading.css`; publication artwork stays in
`reading-covers.css`. Homepage typography, layout, and animation stay in
`styles.css`.

`watches.html` is the static watch moodboard. Its bench layout and paper tags
live in `watches.css`; photograph sizes and thread attachments live in
`watch-photos.css`. Image and specification sources are recorded in
`assets/watches/SOURCES.md`; catalog edit prompts live in
`assets/watches/IMAGE_EDITS.md`. Add new entries directly to the HTML; no browser
JavaScript or data-loading step is needed.

Each watch has one transparent, losslessly encoded WebP in `assets/watches/`,
at up to 720 pixels wide for crisp laptop and phone rendering. Watches below
the first row lazy-load. Images render directly, including from disk; no browser
masks or public JavaScript are needed. Original PNGs and reference photos stay
outside git, for example in `.context/watch-masters/`.

For a new render, start from the original manufacturer photographs and include
all required corrections in one prompt. Do not feed an earlier generated render
back into the image tool; repeated passes distort dial details and materials.
Check the result at page size and against the dark background before replacing it.

To replace a watch image after setting its framing, run
`npm run watch-images -- /path/to/watch-name.png`. The authoring tool uses
`cwebp` (the WebP command-line encoder) and the existing Playwright dependency.
It resizes and losslessly encodes the accepted image, preserves transparency,
and updates the matching HTML source and dimensions without changing the PNG.
Only the final serving image belongs in the repo; remove superseded variants.

The board uses four columns, then two on tablets and one on phones. Small
vertical offsets and scale differences vary the complete watch/tag assemblies.
In `watch-photos.css`, `--photo-ratio` follows the source image's dimensions; `--tie-dx` and
`--tie-dy` locate the thread attachment relative to its centre, in units of the
rendered image height. The thread ends at the tag's eyelet, which is also the
tag's rotation origin. Each assembly uses one SVG thread, painted above the
paper and below the watch.

## Link previews

Screenshots for Messages and other Open Graph link previews are generated
automatically after changes land on `main`, including merges. Do not generate
or commit preview images on feature branches or before merging.

The generator serves the site and captures each page at 1200 × 630.
It sets `data-link-preview` on the document; page styles can use that hook for
capture framing. The watch page uses it to fit the first row's complete tags.
Images live in `assets/previews/`. The **Refresh link previews** GitHub Actions
workflow runs on pushes to `main`, commits changed screenshots, and requests
a GitHub Pages rebuild. It uses `GITHUB_TOKEN`, so its
image commits do not recursively trigger the workflow. The repository must
allow Actions to write contents and request Pages builds; branch protection
must permit the workflow's image commits.

### Reusable agent prompt

> Follow the link preview instructions in AGENTS.md. Leave preview generation
> to the Refresh link previews workflow after changes land on main. Verify
> that workflow and the Pages build succeed, then inspect the generated
> homepage, Reading Room, readme, and watch study images for loaded fonts, readable text,
> and correct framing. Confirm their Open Graph image URLs and 1200 × 630
> dimensions match. Fetch the workflow's image commit before the next merge
> or push.
