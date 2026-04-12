# CV Portfolio Template (VS Code-Inspired UI)

Open-source Next.js template for building a fake-editor style portfolio/CV website.

This project is intentionally graphic-only: the editor look is visual, not functional.

## Goals

- Recreate a VS Code-inspired layout for portfolio presentation
- Keep content easy to customize
- Keep sensitive data out of the repository by default

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Open in browser

http://localhost:3000

## Privacy and Personal Data

Do not commit private contact information directly in tracked files.

Recommended approach:

- Keep a public-safe default profile in a tracked config file
- Keep personal overrides in a local file that is gitignored
- Load local overrides only for local development

If personal data was already committed and pushed, rewrite Git history before sharing publicly.

## Open Source Notes

- Contributions are welcome
- Keep UI inspired by editor patterns, but avoid direct brand misuse
- Prefer reusable components and data-driven sections

## Powered By

Powered by Next.js, TypeScript, and Tailwind CSS.
