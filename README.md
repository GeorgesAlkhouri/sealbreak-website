# Sealbreak website

Static project website for [Sealbreak](https://github.com/GeorgesAlkhouri/sealbreak), built with Astro and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The design intentionally mirrors the Sealbreak iOS paper-cut design system. Shared visual values live in `src/styles/global.css`, while the layered landscape and cards are implemented as native HTML, CSS, and SVG.

The current GitHub Pages configuration targets `https://georgesalkhouri.github.io/sealbreak-website/`. When a custom domain is connected, update `site` and remove the repository `base` path in `astro.config.mjs`.
