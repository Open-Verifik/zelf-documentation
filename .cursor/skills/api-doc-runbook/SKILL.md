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
- Public API base URL for examples: `config/zelf-public-api.config.json` (`publicApiOrigin`; loaded by `config/zelf-public-api.cjs`)

## API docs workflow

- Public API pages live under `docs/api/`.
- Use `{{ZELF_PUBLIC_API_ORIGIN}}` in examples (and `{{ZELF_PUBLIC_API_HOST}}` only when an example needs the hostname without a scheme, for example some Python clients).
- Example URLs expand at build time from `config/zelf-public-api.config.json` (`publicApiOrigin`, default `https://v3.zelf.world`), loaded by `config/zelf-public-api.cjs`. Edit that JSON file to change the base URL for all examples—do not use a `.env` file for this.
- Check the backend repo `zelf` before updating endpoint behavior, auth rules, or response shapes.
- For protected endpoints, include session bootstrap when that is part of the backend flow.

## Troubleshooting

- If `npm run build` fails with `EACCES` under `.docusaurus/` (often because the cache was created as another user), fix ownership on that folder and rebuild: `sudo chown -R "$(whoami)" .docusaurus`, then `npm run clear` and `npm run build`.

## Localization notes

- English and Spanish are managed as separate docs trees, not a shared message-key system.
- If you add or rename a page in one locale, decide whether the matching page and sidebar entry should also change in the other locale.

## Maintenance

- When Docusaurus config, site structure, or API doc conventions change, update this skill and mirror durable facts in `AGENTS.md`.
