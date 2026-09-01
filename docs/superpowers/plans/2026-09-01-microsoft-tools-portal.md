# Microsoft Tools Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the renamed repository into a scalable Microsoft Store product portal, move Toolbox Suite into its own product route, centralize support/privacy/updates, and repair cross-site links in Portfolio and BIM Specialist.

**Architecture:** GitHub Pages remains a static site deployed from `docs/`. Shared portal pages live at the site root while product-specific pages live under product slugs. A shared `lang.js` controls bilingual state/RTL and common metadata without injecting Portfolio backlinks.

**Tech Stack:** Static HTML/CSS/JavaScript, GitHub Pages, GitHub Actions, XML sitemap, robots.txt.

**Spec:** `docs/superpowers/specs/2026-09-01-microsoft-tools-portal-design.md`

## Global Constraints
- Portfolio may link to product sites; product sites do not link back to Portfolio.
- Support, Privacy, and Updates are shared across Microsoft Store products.
- Documentation is product-specific.
- Arabic is full RTL and the inactive language must not leak into visible UI.
- Preserve legacy Toolbox Suite URLs where practical.
- Keep GitHub Pages deployment from `docs/`.

---

### Task 1: Microsoft Tools portal shell

**Files:**
- Modify: `docs/index.html`
- Modify: `docs/lang.js`
- Modify: `docs/404.html`

**Interfaces:**
- Consumes: current static site and language storage.
- Produces: Microsoft Tools root identity and shared navigation to Products, Updates, Support, Privacy.

- [ ] Replace Toolbox Suite root identity with Microsoft Tools product-catalog copy.
- [ ] Add a Toolbox Suite product card linking to `/microsoft-tools/toolbox-suite/`.
- [ ] Rename language storage from Toolbox Suite-specific wording to a Microsoft Tools key while reading the legacy key as fallback.
- [ ] Remove injected Portfolio backlink from `lang.js`.
- [ ] Make root structured data represent the Microsoft Tools website/product collection.
- [ ] Rebrand 404 as Microsoft Tools and link to root/support.
- [ ] Verify no root page links to Portfolio or GitHub.

### Task 2: Toolbox Suite product route

**Files:**
- Create: `docs/toolbox-suite/index.html`
- Create: `docs/toolbox-suite/documentation/index.html`
- Modify: `docs/documentation/index.html`

**Interfaces:**
- Produces: canonical Toolbox Suite product and documentation routes.
- Legacy `/documentation/` forwards to `/toolbox-suite/documentation/`.

- [ ] Move product-specific homepage content into `/toolbox-suite/`.
- [ ] Move Toolbox Suite documentation into `/toolbox-suite/documentation/`.
- [ ] Point product actions to shared Support/Privacy/Updates.
- [ ] Replace old top-level documentation page with a lightweight bilingual redirect/fallback page.
- [ ] Verify canonical and social metadata use the new product paths.

### Task 3: Shared Support, Privacy, and Updates

**Files:**
- Modify: `docs/support/index.html`
- Modify: `docs/privacy/index.html`
- Modify: `docs/updates/index.html`

**Interfaces:**
- Consumes: product identity from the Microsoft Tools catalog.
- Produces: shared resource pages that can support future product cards without structural changes.

- [ ] Generalize Support heading and contact flow for multiple products.
- [ ] Keep Toolbox Suite troubleshooting as a product-specific section within shared Support.
- [ ] Generalize Privacy to BIM Specialist Software Microsoft Store applications, with a Toolbox Suite subsection preserving current local-processing disclosures.
- [ ] Generalize Updates into an application update center and keep Toolbox Suite release details as the first product entry.
- [ ] Ensure all three pages link to Microsoft Tools home and do not link to Portfolio.

### Task 4: SEO, sitemap, repository identity

**Files:**
- Modify: `docs/sitemap.xml`
- Modify: `docs/robots.txt` if needed
- Modify: `README.md`
- Modify: `package.json`

**Interfaces:**
- Produces: discoverable new route map and repository identity.

- [ ] Add `/toolbox-suite/` and `/toolbox-suite/documentation/` to sitemap.
- [ ] Remove obsolete top-level documentation as a primary sitemap destination.
- [ ] Keep shared Support/Privacy/Updates in sitemap.
- [ ] Replace vinext starter README with Microsoft Tools repository documentation.
- [ ] Rename package metadata to `microsoft-tools` without changing build scripts/dependencies.

### Task 5: Portfolio cross-site links

**Files:**
- Modify: `assets/js/main.js`
- Modify: `developer-portfolio.html`
- Modify: `content/portfolio.json`
- Modify: `developer/index.html` if still public/admin-linked.

**Interfaces:**
- Produces: Portfolio → Microsoft Tools / Toolbox Suite one-way discovery.

- [ ] Replace `toolbox-suite-support` root links with the new Toolbox Suite product path.
- [ ] Replace documentation links with `/microsoft-tools/toolbox-suite/documentation/`.
- [ ] Keep Portfolio as the only personal-site source of outbound product discovery.
- [ ] Search repository for remaining `toolbox-suite-support` references and remove public-facing stale URLs.

### Task 6: BIM Specialist cross-site and Arabic cleanup

**Files:**
- Modify: `tools.html`
- Modify: `script.js`
- Modify: `privacy.html`

**Interfaces:**
- Produces: BIM Specialist → Microsoft Tools product discovery without Portfolio backlinks.

- [ ] Point Toolbox Suite ecosystem card to `/microsoft-tools/toolbox-suite/`.
- [ ] Change dynamically injected Arabic `التوثيق` strings to `دليل الاستخدام`.
- [ ] Remove static GitHub footer link from Privacy HTML.
- [ ] Search for remaining `toolbox-suite-support` and public GitHub links.

### Task 7: Verification and release

**Files:**
- Review all touched files and deployment workflows.

**Interfaces:**
- Produces: release evidence for all three repositories.

- [ ] Search all three repositories for `toolbox-suite-support` and verify no intended public reference remains.
- [ ] Search Microsoft Tools and BIM Specialist for Portfolio backlinks and verify none remain.
- [ ] Verify Microsoft Tools sitemap routes correspond to actual files.
- [ ] Verify `deploy-pages.yml` still uploads `docs`.
- [ ] Open PRs for each repository, inspect diffs, merge only when mergeable.
- [ ] Check GitHub Pages/Actions build status after each merge and report any unresolved runtime-only visual checks separately.
