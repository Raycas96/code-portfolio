# Code Portfolio

A modern open-source portfolio template designed to look like VS Code. Stand out with a developer-friendly aesthetic while showcasing your skills and experience.

**Visual Shell Only** — The editor interface is a beautifully crafted graphic layer. Not a real code editor, but it feels like one.

## Features

- **VS Code-inspired UI** — Familiar sidebar, editor tabs, status bar
- **Next.js 16 + React 19** — Fast, modern, server-rendered
- **TypeScript** — Full type safety out of the box
- **Tailwind CSS 4** — Utility-first styling with design tokens
- **Easy Customization** — Single config file, template-driven content
- **Privacy-First** — Keep personal data local, not in git
- **Pre-configured Quality Tools** — ESLint 9, Prettier, Vitest, Husky hooks

## Quick Start

### Clone & Install

```bash
git clone https://github.com/yourusername/code-portfolio.git
cd code-portfolio
npm install
```

### Configure Your Info

Edit `config/user.ts` with your name, title, links, and experience:

```typescript
export default {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "you@example.com",
    phone: "+1 (555) 123-4567",
  },
  // ... rest of your data
};
```

### Run Locally

```bash
npm run dev
```

Visit http://localhost:3000 to preview.

## Customization

### Personal Data

Store sensitive overrides locally using `.env.local` or a gitignored config file. See `config/user.ts` for the structure.

### Styling

- Global design tokens: `app/styles/tokens.css`
- Component styles: CSS Modules in each component folder
- Utilities layer: `app/styles/utilities.css`

### Deploying with Personal Data

For deployment with your actual personal info:

1. **Fork as a private repo** (recommended)
2. Add GitHub Actions deployment (see examples below)
3. Deploy to GitHub Pages, Vercel, Netlify, or any static host

Example GitHub Pages deployment: See `.github/workflows/deploy.yml.example` for setup.

## Development

```bash
# Start dev server with hot reload
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Lint & format
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS Modules + Custom Design Tokens
- **Testing**: Vitest 4
- **Linting**: ESLint 9 + Prettier 3
- **Git Hooks**: Husky 9 + lint-staged

## Privacy & Security

This template is designed with privacy in mind:

- **No personal data in version control by default**
- Use local `.env.local` or a gitignored config for your actual info
- Template includes placeholder data that's safe to commit
- If you accidentally commit sensitive data, see [GitHub's guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) to rewrite history

## Deployment

### GitHub Pages (Free)

Recommended for personal use:

This template only produces `out/` when `NEXT_STATIC_EXPORT=true` is set. The example workflow enables that for you, so copy the example file instead of using it directly.

1. Fork this repo as **private**
2. In your private fork, copy `.github/workflows/deploy.yml.example` to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

3. In repository settings, set **GitHub Pages source** to "GitHub Actions"
4. Push to `main` → auto-deploys to `https://yourusername.github.io/code-portfolio`

### Other Platforms

- **Vercel**: `npm run build` then deploy the `out/` folder
- **Netlify**: Connect repo, set build command to `npm run build`, publish folder to `out`
- **Static Host**: Run `npm run build`, upload `out/` folder

## Contributing

Contributions are welcome! Our project uses automated quality gates to keep the codebase healthy:

### Quality Gates (Pre-Merge)

All pull requests run through our CI pipeline:

- **ESLint** — catches code style issues
- **Vitest** — runs test suite
- **Next.js Build** — ensures no runtime errors
- **Git Hooks** — lint-staged validates commits before push

PRs must pass all checks before merge. See `.github/workflows/ci.yml` for details.

### Creating a Pull Request

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (lint-staged will auto-format)
5. Push to your fork
6. Open a PR — a pull request template will auto-populate with guidance
7. Respond to review feedback if needed
8. GitHub Actions will validate before merge

### Local Quality Checks (Before Pushing)

```bash
npm run lint    # Check code style
npm test        # Run tests
npm run build   # Verify build succeeds
```

## License

MIT License — see [LICENSE](LICENSE) for details.

## Questions?

Open an issue on GitHub or check the [wiki](https://github.com/yourusername/code-portfolio/wiki) for FAQs.

- Contributions are welcome
- Keep UI inspired by editor patterns, but avoid direct brand misuse
- Prefer reusable components and data-driven sections

## Powered By

Powered by Next.js, TypeScript, and Tailwind CSS.
