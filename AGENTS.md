# AGENTS.md

## Documentation guidance skills

Repo-specific documentation guidance lives in:

- `.cursor/skills/api-doc-runbook/SKILL.md`
- `.cursor/skills/api-doc-patterns/SKILL.md`

Update those files when Docusaurus commands, sidebar structure, API doc conventions, or localization workflows change.

## Services

This is the Docusaurus repository for Zelf public documentation.

- Start local docs with `npm start`.
- Build production docs with `npm run build`.
- Social cards are generated during `prebuild` via `npm run generate:og`.
- Production site URL is `https://docs.zelf.world`.

## Content structure

- English docs live under `docs/`.
- Spanish docs live under `docs-es/` through the `docs-es` Docusaurus plugin.
- API reference pages live under `docs/api/`.
- Sidebar structure is maintained in `sidebars.js` and `sidebars-es.js`.

## Relationship to the backend repo

- `zelf` is the source of truth for endpoint behavior, auth flows, route names, and test-backed examples.
- `zelf-documentation` is the source of truth for how those behaviors are presented in public docs.
- Public API examples must use `https://api.zelf.world`, not localhost URLs.
- When documenting protected endpoints, include the session creation flow before authenticated calls when that matches backend behavior.

## Authoring expectations

- Prefer Docusaurus tabs for response variants and multi-language examples.
- Keep API pages aligned with the backend standards: success and error responses, auth requirements, and supported languages.
- If you add or move docs pages, check whether `sidebars.js` or `sidebars-es.js` also need updating.
