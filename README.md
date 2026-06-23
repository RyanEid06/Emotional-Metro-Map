# My Emotional Metro Map

Interactive website for Psychology Assignment 2, "My Emotional Metro Map."

The project presents one normal day as an emotional roadmap with Part 1 conceptual reflection and eight realistic stations. The visuals are original CSS/SVG-style illustrations. No external assets, copied game assets, backend, database, credentials, or environment variables are required.

## Local Setup

Required:

- Node.js 20 or newer
- npm 11 or newer, installed with Node.js

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/data/projectContent.ts` contains the approved reflection, conclusion, schedule, and eight data-driven stations.
- `src/components/` contains reusable visual and interaction components.
- `src/App.tsx` handles hash navigation, visited stations, and journey state.
- `src/styles.css` contains the responsive 2.5D visual system, accessibility focus styles, and reduced-motion behavior.

## GitHub Workflow

Recommended production branch: `main`

If the repository has not been created yet:

```bash
git init
git branch -M main
git add .
git commit -m "Build emotional metro map website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not commit:

- `node_modules/`
- `dist/`
- `.env` files
- build caches
- local editor files
- secrets or tokens

The `.gitignore` already excludes those files.

## Cloudflare Pages

Use the GitHub integration in Cloudflare Pages.

Recommended settings:

- Framework preset: `Vite`
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `/`
- Environment variables: none required

Cloudflare setup steps:

1. Push the repository to GitHub on the `main` branch.
2. In Cloudflare Dashboard, open Workers & Pages.
3. Create a Pages project.
4. Select "Connect to Git."
5. Choose the GitHub repository.
6. Set the production branch to `main`.
7. Use the Vite preset or manually enter `npm run build` and `dist`.
8. Save and deploy.

After this is connected, every future push to `main` automatically triggers a new Cloudflare Pages deployment.

The website uses hash navigation such as `#station-3`, so refreshing Cloudflare Pages URLs does not require a special SPA redirect rule.

## Asset Credits

No external visual assets are used. The avatar, roadmap, station markers, and scenes are original CSS/SVG-style illustrations created for this project.

## Rubric Checklist

| Requirement | Where it is covered |
| --- | --- |
| Part 1 explains daily moments as reference points and navigation | Full continuous reflection in the Part 1 screen |
| Small repeated moments support well-being | Reflection paragraphs and concept cards |
| At least one psychological concept is integrated | Habit formation and emotional regulation in Part 1 and station techniques |
| Class tools are linked to the routine | Breathing, meditation, visualization, mindful eating, anchoring, movement, grounding, recovery, and self-control appear across the site |
| Minimum 6-7 stations across the day | Eight stations from morning through before sleep |
| Each station includes activity, technique, emotional state, and automatic habit | Every station panel displays these fields with consistent labels |
| Realistic and not idealized | Phone use, waiting periods, tiredness, procrastination, headaches, social battery drain, and chess frustration remain honest |
| Clear, organized, readable, creative | Responsive roadmap, station panels, original scenes, readable text, and obvious navigation |
| Reflection ties to map | Concept cards and station techniques make Part 1 ideas visible in Part 2 |

