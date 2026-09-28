# Auto Executivo — Engineering Instructions

## Source of truth

The implementation must follow `docs/site-spec.md`.

The specification contains the approved business, content, UX, visual, responsive, SEO and acceptance requirements. Do not reinterpret or rewrite approved content unless required by a genuine technical limitation or explicitly requested.

## Project scope

Single-page institutional website for Auto Executivo.

Primary conversion: WhatsApp.

No backend, CMS, authentication, checkout, reservation system or internal routes are part of this version.

## Stack

Use:
- React
- TypeScript
- Vite
- CSS with centralized design tokens

Do not introduce Tailwind, Next.js, Astro, React Router or large UI frameworks unless project requirements materially change.

Keep dependencies minimal. Do not add animation, UI, HTTP or routing libraries for functionality that can be implemented cleanly with platform APIs and CSS.

## Engineering principles

Before changing existing code:
1. Inspect the relevant architecture.
2. Identify dependencies and affected components.
3. Diagnose the real cause.
4. Implement the smallest correct solution.
5. Validate the result.

Avoid:
- unrelated changes;
- duplicated components or content;
- unnecessary dependencies;
- premature abstractions;
- hardcoded repeated configuration;
- dead code;
- inconsistent styling.

## Architecture

Prefer a structure equivalent to:
- `src/components`
- `src/sections`
- `src/data`
- `src/styles`
- `src/utils`
- `src/assets`

Repeated business content must be separated from presentation when appropriate.

Centralize at least:
- site configuration;
- phone number;
- WhatsApp messages;
- navigation;
- services;
- regions.

Do not create abstractions for one-off elements unless they provide a clear maintenance or semantic benefit.

## Styling

Use semantic CSS variables/tokens.

Do not scatter literal brand colors throughout components when a semantic token is available.

Follow the design system in `docs/site-spec.md`.

Do not introduce generic template aesthetics, excessive black/gold styling, glow effects, heavy shadows or generalized glassmorphism.

## Responsive behavior

Implementation must work across desktop, tablet and mobile.

Validate at minimum:
- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

Do not rely on hover for essential information. Avoid horizontal overflow.

## Accessibility

Target WCAG 2.2 AA where applicable.

Ensure:
- semantic HTML;
- keyboard navigation;
- visible focus;
- correct heading hierarchy;
- accessible mobile menu;
- descriptive labels;
- reduced-motion support;
- appropriate alt text;
- decorative elements hidden from assistive technologies.

## SEO

Implement the SEO requirements defined in `docs/site-spec.md`.

Production must include appropriate:
- title;
- meta description;
- canonical;
- Open Graph metadata;
- robots;
- sitemap;
- structured data using only verified information.

## Performance

Prioritize:
- minimal JavaScript;
- optimized images;
- efficient fonts;
- explicit media dimensions;
- lazy loading below the fold;
- optimized hero loading;
- no large animation dependencies unless clearly justified.

## Assets

Do not invent a vehicle fleet, company facilities, testimonials, ratings or other unverified business facts.

Final visual implementation depends on approved/prepared brand assets and photography described in `docs/site-spec.md`. Structural development may proceed before final photography is available.

## Validation

Before considering implementation complete, run:

```bash
npm run lint
npm run build
```

Run TypeScript validation separately if it is not already covered by the build.

Fix all relevant errors before completion.

Never claim a validation succeeded unless the command was actually executed.

## Git workflow

For substantial implementation work, use a feature branch rather than committing directly to `main`.

Preferred flow:

feature branch → implementation → validation → pull request → review → merge

Do not merge a pull request with failing required checks, unresolved conflicts or known blocking defects.
