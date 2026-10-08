# YAIBOS Website & Open Specification 🤖

Official website, interactive implementation scorecard, and open specification for **YAIBOS** (Your AI Business OS).

Open specification for running a small business with AI agents. The Base profile describes Samuel's existing file-based YAIBOS: company context, SOPs, role-agent definitions and memory, a tools registry and synchronization across supported harnesses. Cockpit adds an optional execution dashboard; Team adds shared context and enforced permissions. The latter two are profiles to implement, not released YAIBOS applications. The site publishes the spec, a cockpit simulation and a qualitative market scorecard.

## Core Pillars

Six pillars, each with requirements tagged [L1] Base, [L2] Cockpit, [L3] Team, or [Opt]. See `SPEC.md` for the normative text.

1. Usable without a terminal
2. SOPs as portable skills
3. Bring your own subscription (official harness login or own API key, never scraped sessions)
4. A living second brain
5. Permissions and safety
6. Harness and model portability

## Editing rules

- `SPEC.md` at the repo root is the single source of the spec. `/spec` renders it and `/SPEC.md` serves it raw (`src/pages/SPEC.md.ts`). Never copy it elsewhere.
- Specification versions and implementation profiles are separate. Keep Base aligned with the working second brain; cockpit metadata must not become mandatory Base fields. Do not imply all harnesses support the same models, subscriptions, tools or scheduling.
- Existing scorecard grades mix core and optional capabilities and are not conformance certification. Do not regrade projects without fresh evidence.
- `src/data/spec.ts` is only the short homepage summary of the pillars. Update it when a pillar changes.
- Scorecard data lives in `src/data/implementations.ts`. Screenshots come from each project's own README, stored in `public/images/implementations/` as WebP (max 1200px wide), with a source link.
- Avoid fake technical decoration: no "validated" badges, fake file names, pulsing "live" dots or RFC numbers on static content.

## Tech Stack

- **Framework**: Astro 5 (SSG, static output)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` and `@tailwindcss/typography`
- **Design Language**: Light, calm, readable. Plain sentence-case labels, one primary action per section.
- **Integrations**: MyVideoAsk asynchronous contact (`contact.samuelmichelot.com`)
- **Analytics**: PostHog EU, loaded after visitor consent, with session recording disabled. YAIBOS uses the existing Simple AI Studio project and tags every event with `source_site: yaibos`; filter the PostHog dashboard by that event property or by `yaibos.com` in Current URL.
- **Deployment Target**: Cloudflare Pages

## Project Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run template and TypeScript type checks
npm run check

# Build production bundle
npm run build

# Publish committed main changes through the Cloudflare Pages GitHub integration
npm run deploy

# Preview production build locally
npm run preview
```

Production deploys use the GitHub-connected Cloudflare Pages build on `main`. Run checks and the build, commit the reviewed changes, then push. Do not use direct Wrangler uploads for production. The deploy command pushes committed work only.

## Repository Structure

```
yaibos-site/
├── README.md                  # Project overview and developer instructions
├── SPEC.md                    # YAIBOS Open Specification (single source, rendered at /spec)
├── astro.config.mjs           # Astro configuration
├── package.json               # Dependencies and scripts
├── public/                    # Static assets, favicon, robots.txt
├── src/
│   ├── components/            # Astro UI components
│   │   ├── Header.astro       # Tech header with live telemetry style
│   │   ├── Hero.astro         # Direct positioning, value proposition, quick actions
│   │   ├── Principles.astro   # Six core architecture pillars
│   │   ├── SopCockpitDemo.astro # Interactive 1-click SOP simulation
│   │   ├── ImplementationProfiles.astro # Base, Cockpit and Team summary
│   │   ├── ImplementationsScorecard.astro # Filterable matrix of market tools and grades
│   │   ├── MyVideoAskSection.astro # Asynchronous video/audio/text contact
│   │   └── Footer.astro       # Attribution, open spec license, links
│   ├── data/
│   │   ├── spec.ts            # Short homepage pillar summary
│   │   └── implementations.ts # Market tools evaluation criteria and scores
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with SEO, fonts, and dark theme
│   ├── pages/
│   │   ├── index.astro        # Landing page (Hero, Cockpit, Summary, Contact)
│   │   ├── spec.astro         # Dedicated full specification page
│   │   └── implementations.astro # Dedicated market scorecard and gap analysis
│   └── styles/
│       └── global.css         # Tailwind v4 theme, fonts, custom glow and grid tokens
```

## Open Collaboration & Contributing

We actively welcome contributions to the specification, RFC amendments, and new tool evaluations for the scorecard:
- Review [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution guidelines and RFC submission steps.
- Read [`SPEC.md`](SPEC.md) for the complete normative standard.
- Specification license: [Creative Commons Attribution 4.0 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/).
- Code license: [MIT License](LICENSE).
