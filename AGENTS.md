# Working on this site

Keep the site in vanilla HTML/CSS. Node and Playwright are build tools for link
preview screenshots; the public pages should not need a JavaScript runtime.

## Delivering changes

Do not create pull requests for changes. Commit changes and merge directly to
`main` when instructed to deliver them. Fetch `origin/main` before merging or
pushing, and use a normal push without force-pushing.

## Page structure and content

- Keep the shared palette, reset, fonts and page chrome in `shared.css`.
- Homepage typography, layout and animation belong in `styles.css`.
- The Reading Room uses `reading.html`, `reading.css` and
  `reading-covers.css` for publication artwork.
- The personal readme uses `readme.html` and `readme.css`. Its writing comes
  from the owner's personal reflection; do not rewrite it unless requested.
- The watch moodboard uses `watches.html` and `watches.css`. Per-image case
  calibration and thread anchors belong in `watch-photos.css`.
- The Canadian community guide uses `next-place.html`, `next-place.css` and
  `assets/places/`. Keep it direct-link only with `noindex`.
- These secondary pages are AI-generated design playgrounds. Preserve
  that distinction from the owner-authored writing on the personal readme.

## Watch images and measurements

Add watch entries directly to the HTML; do not add browser JavaScript or a
runtime data-loading step. Use one transparent PNG per
watch in `assets/watches/`, up to 720 pixels wide. Lazy-load watches below the
first row. Remove superseded serving images; retain originals, references,
render prompts and research notes locally under gitignored `.context/`.
The local `$asif-add-watch` skill covers adding an entry end to end.
Current local source records and prompts are in `.context/watch-authoring/`;
they are authoring references, not a site dependency.

For a new render, start from original photographs and include all required
corrections in one prompt. Do not use an earlier generated render as input.
Inspect the result at page size against the dark background, especially dial
details, cutout edges and empty gaps between the strap and lugs.

Run `npm run watch-images -- /path/to/watch-name.png` to resize and encode an
accepted image, update its HTML source/version and dimensions, and preserve
the original PNG. This authoring tool uses Playwright. Recheck
case calibration and the thread anchor whenever replacing an image.

The board uses four columns, two on tablets and one on phones. Cases share
one responsive scale based on the 40 mm ochs; vary position rather than scale
for decorative staggering. `--case-mm` is a verified case measurement and
`--case-span` is that same axis's span in image pixels divided by image height.
The tag may show the longest side of an irregular case; never apply that
number to a horizontal pixel span unless it is the horizontal measurement.
Measure the case body excluding crowns, pushers, straps and transparent margins.
`--tie-dx` and `--tie-dy` locate the strap attachment relative to the image's
centre, in units of its rendered height. One SVG thread connects this point
to the tag eyelet, painted above the paper and behind the watch. The eyelet
is also the tag's rotation origin.

Use consistent visible tags: `Ø 38 × 12.8 mm`, then `100 m WR / Automatic`.
The main dimension row always gives overall thickness, including the crystal,
rounded to one decimal. Where supported, add a separate `10.0 mm excl. crystal`
line between dimensions and water resistance. Mark estimates visibly with
`est.` and use whole-millimetre ranges for rough photo estimates. Use the same `excl. crystal` wording
for these notes, or `excl. crystals` when both front and rear domes are omitted;
explain that distinction in the accessible description. Do not invent a separate value for a flat or unmeasured crystal.
Use manufacturer figures or credible measurements; calculations may subtract
only documented external crystal protrusion, not the glass's material thickness.
Photo estimates require original side views with identifiable measurement
boundaries and a broad range that accounts for perspective. Omit estimates
when the measurement cannot be bounded usefully; generated images are not dimensional evidence. Keep
sources, calculation details and uncertainty in local research notes and the
accessible description.
Each tag has one `sr-only` description for screen readers; visible rows are
hidden from assistive technology to avoid repeating the same specifications.

## Link preview screenshots

Preview generation is handled by the **Refresh link previews** workflow after
changes land on `main` (including merges). Do not generate or commit preview
images while working on feature branches or preparing a merge.

- The workflow generates the home, reading, readme and watches images in
  `assets/previews/` and commits changed images to `main`. After it succeeds,
  inspect them for loaded fonts, readable text, and correct framing.
- Use the generator rather than manually cropping screenshots. It captures
  the working tree at 1200 × 630, waits for fonts/images, and freezes animations.
  It sets `data-link-preview` for page-specific framing; the watch page uses
  this to keep the first row of complete tags inside the capture.
- Each page's `og:image` must use the full public URL of its preview image.
  Keep `og:image:width`, `og:image:height`, and `og:image:alt` accurate.
- If adding a page, add it to `scripts/generate-previews.mjs` and supply its
  Open Graph tags. Keep the readme's `noindex` directive.
- After changes land on `main`, check the **Refresh link previews** workflow
  and the Pages build. The workflow commits changed
  images and explicitly requests a Pages rebuild with the new screenshots.
- The workflow may add a follow-up commit. Fetch before the next merge/push;
  do not force-push over generated-image commits.

The workflow uses `GITHUB_TOKEN`, so its generated-image commits do not
recursively trigger it. Repository Actions permissions must allow contents
and Pages writes; branch protection must permit these image commits.

Run `git diff --check` before committing.
