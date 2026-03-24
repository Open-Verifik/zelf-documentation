---
name: api-doc-runbook
description: Run and maintain the Zelf documentation site and public API docs. Use when working on Docusaurus commands, docs structure, sidebars, public API pages, or docs repo operations.
---

# API Doc Runbook

Use this skill for practical work in `zelf-documentation`.

## Quick start

1. Install dependencies with `npm install`.
2. Start the local docs site with `npm start`.
3. Build the site with `npm run build`.

## Core commands

- Local dev: `npm start`
- Production build: `npm run build`
- Generate social card: `npm run generate:og`
- Serve built site: `npm run serve`
- Docusaurus maintenance: `npm run clear`, `npm run write-translations`, `npm run write-heading-ids`

## Repo structure

- English docs: `docs/`
- Spanish docs: `docs-es/`
- English sidebar: `sidebars.js`
- Spanish sidebar: `sidebars-es.js`
- Site config: `docusaurus.config.js`

## API docs workflow

- Public API pages live under `docs/api/`.
- Use `https://api.zelf.world` in examples.
- Check the backend repo `zelf` before updating endpoint behavior, auth rules, or response shapes.
- For protected endpoints, include session bootstrap when that is part of the backend flow.

## Localization notes

- English and Spanish are managed as separate docs trees, not a shared message-key system.
- If you add or rename a page in one locale, decide whether the matching page and sidebar entry should also change in the other locale.

## Maintenance

- When Docusaurus config, site structure, or API doc conventions change, update this skill and mirror durable facts in `AGENTS.md`.
