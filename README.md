# Sealbreak website

Static project website for [Sealbreak](https://github.com/GeorgesAlkhouri/sealbreak), built with Astro and intended to be deployed through Cloudflare's Git integration.

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

## Cloudflare deployment

Connect the `GeorgesAlkhouri/sealbreak-website` repository to Cloudflare and use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Astro is configured for the production site at `https://sealbreak.app`. Cloudflare owns the production deployment; GitHub Actions only validates pull requests.
