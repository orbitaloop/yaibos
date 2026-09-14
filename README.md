# YAIBOS Website & Open Specification 🤖

Official website, interactive implementation scorecard, and open specification for **YAIBOS** (Your AI Business OS).

Sovereign, zero-friction AI operating system specification and harness tailored for founders, small businesses, and non-technical teams.

## Core Pillars

1. **Zero-Install / All-in-One Simple UI**: Non-technical team members interact through a clean web or desktop dashboard without terminal hurdles, git conflicts, or complex setups.
2. **1-Click SOP & Skills Execution Dashboard**: Visual business procedures (SOPs) runnable in one click with live telemetry, status indicators, and logs.
3. **BYOS (Bring Your Own Subscription) Auth**: Team members authenticate using their existing subscriptions (ChatGPT Plus/Team/Pro, Claude Pro/Team, DeepSeek web auth) with zero host API token bill shock.
4. **Integrated Team Second Brain & Memory**: Markdown-first knowledge base with persistent semantic memory, readable and editable without vendor lock-in.
5. **Team Permissions & Role-Based Access Control (RBAC)**: Folder-level and file-level permissions with area responsibility.
6. **Modular "Everything is a Plugin" Architecture**: Lightweight micro-kernel allowing swappable tools, models, and connectors.

## Tech Stack

- **Framework**: Astro 5 (SSG, static output)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` and `@tailwindcss/typography`
- **Design Language**: Dark cyber-minimalist engineering interface, high-contrast monospace accents, no generic AI slope
- **Integrations**: MyVideoAsk asynchronous contact (`contact.samuelmichelot.com`)
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

# Deploy to Cloudflare Pages
npm run deploy

# Preview production build locally
npm run preview
```

## Repository Structure

```
yaibos-site/
├── README.md                  # Project overview and developer instructions
├── SPEC.md                    # Complete standalone YAIBOS Open Specification v1.0
├── astro.config.mjs           # Astro configuration
├── package.json               # Dependencies and scripts
├── public/                    # Static assets, favicon, robots.txt
├── src/
│   ├── components/            # Astro UI components
│   │   ├── Header.astro       # Tech header with live telemetry style
│   │   ├── Hero.astro         # Direct positioning, value proposition, quick actions
│   │   ├── Principles.astro   # Six core architecture pillars
│   │   ├── SopCockpitDemo.astro # Interactive 1-click SOP simulation
│   │   ├── SpecDocument.astro # Rendered specification with copyable sections
│   │   ├── ImplementationsScorecard.astro # Filterable matrix of market tools and grades
│   │   ├── MyVideoAskSection.astro # Asynchronous video/audio/text contact
│   │   └── Footer.astro       # Attribution, open spec license, links
│   ├── data/
│   │   ├── spec.ts            # Structured specification data
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

## Relationship to Second Brain

- Specification source: `MD_VAULTS/sam-vault/3 RESOURCES/Tech & AI Experimenter/MAIBOS - MyAIBusinessOS.md`
- Market research radar: `MD_VAULTS/sam-vault/3 RESOURCES/Tech & AI Experimenter/AI Business Harness & Tools Radar 🤖.md`
