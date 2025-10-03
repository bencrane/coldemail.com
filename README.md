# ColdEmail.com

Minimal landing page establishing domain presence for a future cold email tools affiliate directory.

## Current State

- ✅ **Landing page deployed** - Clean black/white hero (Vercel aesthetic)
- ✅ **SEO ready** - Meta tags, Open Graph, sitemap.xml, robots.txt
- ✅ **Production stack** - Next.js 15, TypeScript, Tailwind CSS
- 🚧 **Not yet built** - Tool directory, affiliate tracking, comparison pages

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Styling**: Tailwind CSS 3.4.15 (pinned to v3 - see INCIDENTS.md)
- **Language**: TypeScript (strict mode)
- **Deployment**: TBD

## Development

```bash
npm install
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm start       # Serve production build
```

## Project Structure

```
/app
  layout.tsx    # Root layout with SEO meta tags
  page.tsx      # Landing page hero
  globals.css   # Tailwind directives
  sitemap.ts    # Dynamic sitemap generation
/public
  robots.txt    # Search engine indexing rules
```

## Known Issues

- Warning about multiple lockfiles (cosmetic - doesn't affect functionality)

## Future Plans

- Tool directory with categories (email finders, verifiers, senders, etc.)
- Affiliate link tracking system
- Tool comparison pages
- Blog/resources section for SEO

## Documentation

- **INCIDENTS.md** - Error log with root cause analysis (only updated when things break)
- **README.md** (this file) - Current state and context for future sessions
