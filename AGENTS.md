# AGENTS.md

Project instructions for coding agents working in this repository.

## Mission

Build and maintain an open-source CV/portfolio website with a fake VS Code-inspired interface.

The editor look is visual only (graphic shell), not a functional code editor.

## Critical Framework Note

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes, and APIs, conventions, and file structure may differ from older Next.js releases.

Read the relevant guide in node_modules/next/dist/docs/ before writing code.

Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Prettier 3
- Vitest 4

## Repository Layout

- app/: App Router entry files and global styles
- public/: static assets
- .husky/: git hooks
- lint-staged.config.mjs: staged-file quality gates
- vitest.config.ts: test runner config

## Runbook

Install:

npm install

Development:

npm run dev

Build:

npm run build

Production run:

npm run start

Lint:

npm run lint

Tests:

npm test

## Commit Quality Gates

Pre-commit hook runs:

npx lint-staged

lint-staged behavior:

- JS/TS files: eslint --fix, then prettier --write
- d.ts and content files: prettier --write
- Full test command: npm test

Do not bypass quality gates unless explicitly requested.

## Coding Rules

- Keep changes minimal and targeted.
- Preserve existing structure and naming unless refactor is requested.
- Do not introduce heavy dependencies for simple UI behavior.
- Prefer reusable components and data-driven rendering.
- Ensure responsive behavior for desktop and mobile.

## CSS Design System Rules

- Keep global styles layered via app/globals.css imports only: tokens.css, base.css, components.css, utilities.css.
- Store design tokens in app/styles/tokens.css and avoid hardcoding raw color values in components when a token exists.
- Keep reset and typography defaults in app/styles/base.css only.
- Put reusable UI shell classes (layout primitives and fake editor chrome) in app/styles/components.css.
- Keep one-off helpers in app/styles/utilities.css and avoid component-specific logic there.
- Prefer semantic utility usage (bg-panel, text-muted, border-border) over arbitrary values.
- Maintain naming consistency for shell classes (shell, titlebar, explorer, editor-area, statusbar, tab).
- If a style is reused 3+ times, promote it to a component class instead of repeating long Tailwind class strings.
- Do not reintroduce legacy background/foreground root variables that conflict with tokenized design values.
- Keep styles mobile-first and verify desktop/mobile behavior after CSS changes.

## Testing Rules

- Add or update tests when behavior changes.
- Keep tests deterministic and fast.
- Use Vitest for unit and small integration tests.
- If no test is appropriate, explain why in the change summary.

## Privacy and Open Source Rules

- Do not commit personal contact data unless user explicitly requests it.
- Prefer template-safe placeholder data in tracked files.
- Use local override files for private values and keep those gitignored.
- If sensitive data is accidentally committed, remove it and rewrite history before public release.

## Documentation Rules

- Keep README focused on template usage, setup, and customization.
- Keep AGENTS.md updated when scripts, tooling, or workflows change.
- Document new commands in package.json and usage notes together.

## Definition of Done

- Code builds and lints.
- Tests pass or are intentionally not applicable.
- No sensitive data leaked in tracked files.
- Docs updated for any developer workflow changes.
