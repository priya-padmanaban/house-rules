# House Rules

House Rules is an interactive social-worldbuilding game about founding a town and deciding what its residents consider normal.

Rather than asking the player direct personality questions, the game presents practical civic decisions: what neighbors owe one another, how much privacy people expect, which harmless eccentricities are tolerated, how gossip travels, how conflicts are handled, and which traditions survive. Those decisions gradually produce a town with its own culture, residents, statistics, complaints, lore, and reputation.

## Features

- Seven chapters covering place, neighbors, privacy, weirdness, reputation, conflict, and belonging
- 49 decisions selected deterministically from a larger structured content pool
- Seeded town names, question ordering, population figures, and outcomes
- Hidden social dimensions that combine to determine the final classification
- Town updates and recurring resident commentary between chapters
- A growing illustrated town overview
- A substantial Town Report with observations, statistics, local history, and unintended consequences
- Local progress persistence, including refresh-and-continue support
- Copyable plain-text result card
- Responsive layouts, visible keyboard focus, and reduced-motion support
- No backend, account, database, external API, or LLM dependency

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Browser `localStorage` for saved games

The application is a standard Next.js App Router project and can be deployed directly to Vercel.

## Requirements

- Node.js 22.13 or newer
- pnpm 10 or newer

## Local development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
pnpm build
```

Run the production server locally:

```bash
pnpm start
```

## Project structure

```text
app/
  globals.css    Visual system, responsive layouts, and town illustration
  layout.tsx     Site metadata and root document layout
  page.tsx       Game content, simulation state, interactions, and report engine
public/          Static assets
```

The current MVP keeps its game engine and structured content in `app/page.tsx`. Questions are represented as data rather than separate React components, so the content can be moved into chapter-specific files later without changing the interaction model.

## Game state

Each town maintains:

- A deterministic playthrough seed
- The chosen town name
- Current chapter and decision index
- Hidden social dimensions
- Flags recording individual decisions
- The current screen and generated report inputs

Progress is stored under the browser key `house-rules-save`. There is no server-side storage, so saved towns remain on the device and browser where they were created.

## Deploying to Vercel

Import the repository into Vercel and use these settings:

- **Framework Preset:** Next.js
- **Build Command:** Next.js Default
- **Output Directory:** leave blank
- **Root Directory:** the directory containing `package.json`

No environment variables are required.

If the project was previously deployed using the old Vinext/Cloudflare configuration, clear the Vercel build cache before redeploying. In the deployment menu, choose **Redeploy**, enable **Clear build cache**, and deploy again.

## Useful commands

```bash
pnpm dev      # Start the local development server
pnpm build    # Create and validate the production build
pnpm start    # Serve the completed production build
pnpm lint     # Run the configured lint checks
```

## Privacy

House Rules does not send answers or town data anywhere. All gameplay and result generation happens locally in the browser.
