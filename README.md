# machinerelations.ai

The definitive resource for **Machine Relations (MR)** — the discipline of earning AI engine citations and recommendations. Coined by [Jaxon Parrott](https://jaxonparrott.com), founder of [AuthorityTech](https://authoritytech.io).

## Stack

- **Framework:** Next.js 15 (App Router)
- **Deployment:** Vercel / Cloudflare Pages
- **Design:** Minimal, dark, schema-rich

## Development

```bash
npm install
npm run dev
```

## Deployment

Static export enabled (`output: "export"` in next.config.ts). Deploy to Vercel or Cloudflare Pages.

## Schema

Full JSON-LD structured data including:
- `DefinedTerm` — Machine Relations definition with creator attribution
- `Person` — Jaxon Parrott entity with consistent `@id`
- `Organization` — AuthorityTech entity
- `WebPage` with `speakable` spec
- `FAQPage` with 5 core questions

All `@id` references are consistent with schema deployed across authoritytech.io, curated.authoritytech.io, blog.authoritytech.io, team.authoritytech.io, jaxonparrott.com, and archive.authoritytech.io.
