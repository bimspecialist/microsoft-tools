# Microsoft Tools

Official public product hub and support repository for Windows applications published by **BIM Specialist Software**.

## Production site

GitHub Pages publishes the static site from `docs/`.

Public structure:

- `/microsoft-tools/` — product catalog
- `/microsoft-tools/toolbox-suite/` — Toolbox Suite product page
- `/microsoft-tools/toolbox-suite/documentation/` — Toolbox Suite documentation
- `/microsoft-tools/support/` — shared product support
- `/microsoft-tools/privacy/` — shared privacy policy
- `/microsoft-tools/updates/` — shared update center

## Deployment

`.github/workflows/deploy-pages.yml` deploys the `docs/` directory to GitHub Pages on pushes to `main`.

## Language

Public pages support English and Arabic. Arabic uses RTL layout. `docs/lang.js` stores the shared language preference under `microsoft-tools-language` and reads the previous `toolbox-suite-language` key as a migration fallback.

## Product routing convention

Future Microsoft Store products should use:

- `/microsoft-tools/<product-slug>/`
- `/microsoft-tools/<product-slug>/documentation/`

Support, privacy, and update resources remain shared unless a product has a documented need for a dedicated resource.

## Legacy compatibility

The former `/microsoft-tools/documentation/` route forwards to Toolbox Suite's product-specific documentation route so existing public links remain usable.
