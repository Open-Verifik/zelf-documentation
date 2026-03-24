---
name: api-doc-patterns
description: Follow Zelf public API page patterns in Docusaurus. Use when creating or editing API reference pages, response tabs, code examples, sidebar entries, or cross-checking docs against backend behavior.
---

# API Doc Patterns

Use this skill when editing docs pages in `zelf-documentation`.

## Priority references

When there is ambiguity, check these files first:

1. `docs/api/tags/search-tag.md`
2. `docs/api/tags/lease-tag.md`
3. `docs/api/licenses/get-licenses.md`
4. `docusaurus.config.js`
5. `sidebars.js`
6. The corresponding backend route, controller, module, and tests in `zelf`

## Default API page structure

- Frontmatter with `title`, `description`, `keywords`, and `image`
- Short introduction
- `## Endpoint`
- `## Description`
- `## Authentication` when needed
- `## Parameters`
- `## Response` with Docusaurus tabs for status variants
- `## Examples` with language tabs

## Examples guidance

- Default to cURL, Node.js, Python, PHP, and Rust for full API references.
- Prefer consistent auth examples that show session creation before protected calls.
- Keep example URLs on `https://api.zelf.world`.
- Do not spread older language drift unless the page intentionally needs a special language example.

## Sidebar guidance

- If you add or move an API page, update `sidebars.js`.
- If the Spanish docs should mirror the change, also update `docs-es/` and `sidebars-es.js`.

## Review checklist

- Does the page structure match nearby API docs?
- Does the endpoint and auth model match the backend repo?
- Are response tabs and examples clear and complete?
- Did any sidebar entries need updating?
