# Microsoft Tools Portal Design

## Goal
Transform `bimspecialist/microsoft-tools` from a Toolbox Suite-only support site into a reusable Microsoft Store product portal while preserving Toolbox Suite as the first product and keeping Portfolio as the one-way discovery entry point.

## Navigation model
- Portfolio may link to BIM Specialist and Microsoft Tools.
- BIM Specialist may link to Microsoft Tools.
- Microsoft Tools must not link back to Portfolio.
- Microsoft Tools home is a catalog/portal for all Microsoft Store products.

## Shared resources
- `/microsoft-tools/support/` is shared support for all Microsoft Store products.
- `/microsoft-tools/privacy/` is the shared privacy policy covering the product family, with product-specific notes where required.
- `/microsoft-tools/updates/` is the shared update center across products.
- Each product owns its documentation below its product slug.

## Product routing
Toolbox Suite is the first product and uses:
- `/microsoft-tools/toolbox-suite/`
- `/microsoft-tools/toolbox-suite/documentation/`

Future products follow:
- `/microsoft-tools/<product-slug>/`
- `/microsoft-tools/<product-slug>/documentation/`

## Compatibility and legacy links
Existing public Toolbox Suite paths may already exist in Microsoft Store listings, search results, bookmarks, or support material. Legacy top-level documentation paths must remain usable by redirecting or forwarding visitors to the new Toolbox Suite route where technically possible on GitHub Pages.

## Language and accessibility
- English and Arabic are first-class languages.
- Arabic uses `dir=rtl`, right alignment, readable line height, and no English copy leakage when Arabic is selected.
- Shared language state belongs to Microsoft Tools, not Toolbox Suite.
- Interactive language controls expose active state with `aria-pressed`.
- Public pages must keep visible keyboard focus and responsive mobile layout.

## SEO
- Site identity and root structured data use `Microsoft Tools` / `BIM Specialist Software`, not Toolbox Suite.
- Product structured data is product-specific on product pages.
- Canonicals, sitemap, robots, Open Graph, and Twitter metadata use `/microsoft-tools/` paths.
- Sitemap includes root, shared pages, Toolbox Suite product page, and Toolbox Suite documentation.
- 404 is branded Microsoft Tools and links to root/support rather than presenting itself as Toolbox Suite.

## Repository identity
- README describes Microsoft Tools as the shared Microsoft Store product repository.
- Remove starter-template branding from repository-facing metadata where safe.
- GitHub Pages continues deploying only `docs/`.

## Cross-site fixes
### Portfolio
- Replace public `toolbox-suite-support` URLs with `https://bimspecialist.github.io/microsoft-tools/` or the Toolbox Suite product path as appropriate.
- Preserve one-way navigation from Portfolio to product sites.

### BIM Specialist
- Replace `toolbox-suite-support` links with the Microsoft Tools Toolbox Suite product path.
- Do not add Portfolio backlinks.
- Clean dynamic Arabic terms from `التوثيق` to `دليل الاستخدام` where they can override corrected HTML.
- Remove static GitHub links from public HTML where present, even if JavaScript also hides them.

## Non-goals
- Do not redesign the Revit product itself.
- Do not add accounts, analytics, ecommerce, or new backend services.
- Do not migrate the currently unused Next/vinext starter into the production GitHub Pages site.
