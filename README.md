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

## Dependency updates

Renovate proposes regular updates after a seven-day release cooldown; updates require manual review.
The project-level `.npmrc` also sets `min-release-age=7` so npm respects the
cooldown when resolving direct and transitive dependencies for `package-lock.json`.
Use Node.js 24 from `.node-version` and npm 11.10 or newer (but below npm 12);
`package.json` enforces these tool requirements. Install with `npm ci` for
reproducible builds.

Security fixes that must be applied earlier can use a narrowly scoped temporary
`min-release-age-exclude[]=package-name` entry in `.npmrc` when regenerating
the lockfile. Remove the exception afterward and verify the resulting lockfile.
This cooldown reduces supply-chain risk but does not validate package integrity
or establish that an already locked version is safe.

## Cloudflare deployment

Connect the `GeorgesAlkhouri/sealbreak-website` repository to Cloudflare and use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`

Astro is configured for the production site at `https://sealbreak.app`. Cloudflare owns the production deployment; GitHub Actions only validates pull requests.
