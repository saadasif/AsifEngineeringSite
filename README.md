site for my personal projects. made in pure vanilla HTML/CSS (and maybe TS one day) for the ❤️ of the craft.

## Link previews

Generate screenshots for Messages and other Open Graph link previews:

```sh
npm ci
npx playwright install chromium
npm run previews
```

The generator serves the local site and captures each page at 1200 × 630.
Images live in `assets/previews/`. Inspect and commit them with page changes.
The **Refresh link previews** GitHub Actions workflow also runs on every push
to `main`, commits changed screenshots, and requests a GitHub Pages rebuild.
It can be run manually from the Actions tab. It uses `GITHUB_TOKEN`, so its
image commits do not recursively trigger the workflow. The repository must
allow Actions to write contents and request Pages builds; branch protection
must permit the workflow's image commits.

### Reusable agent prompt

> Regenerate the link preview screenshots for the current site using the
> instructions in AGENTS.md. Run `npm ci`, install Playwright Chromium if
> needed, and run `npm run previews`. Inspect the homepage, Reading Room,
> and readme images in `assets/previews/` for loaded fonts, readable text,
> and correct framing. Confirm their Open Graph image URLs and 1200 × 630
> dimensions match. Include changed images in the commit before pushing to
> main, then verify the Refresh link previews workflow and Pages build succeed.
