# Jie Wang — Academic Website

A responsive, dependency-free academic website built for GitHub Pages.

## Publish at `https://eeerperfect.github.io`

1. On GitHub, create a **public** repository named exactly `EEerperfect.github.io`.
2. Upload every file and folder from this directory to the repository root, including `.github`, `.nojekyll`, and `assets`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push to `main`, or open **Actions → Deploy GitHub Pages → Run workflow**.

The workflow will publish the site automatically. Later edits pushed to `main` will trigger a fresh deployment.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Update content

- Academic text and publication links: `index.html`
- Colors, spacing, typography, and responsive layout: `styles.css`
- Menu, theme switcher, publication expansion, and reveal effects: `script.js`
- Browser icon: `assets/favicon.svg`

No build tools or third-party libraries are required.
