site for my personal projects. made in pure vanilla HTML/CSS (and maybe TS one day) for the ❤️ of the craft.

## Styles

`shared.css` contains the site-wide palette and page reset, plus the readme and
Reading Room’s common fonts, page chrome, and numbered section labels. Page
layouts stay in `readme.css` and `reading.css`; publication artwork stays in
`reading-covers.css`. Homepage typography, layout, and animation stay in
`styles.css`.

## Link previews

Screenshots for Messages and other Open Graph link previews are generated
automatically after changes land on `main`, including merges. Do not generate
or commit preview images on feature branches or before merging.

The generator serves the site and captures each page at 1200 × 630.
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
> homepage, Reading Room, and readme images for loaded fonts, readable text,
> and correct framing. Confirm their Open Graph image URLs and 1200 × 630
> dimensions match. Fetch the workflow's image commit before the next merge
> or push.
