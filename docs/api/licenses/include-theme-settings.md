---
title: Optional themeSettings (includeThemeSettings)
description: Query flag and official license JSON field for loading domain theme from a second IPFS document.
keywords: [zelf license, themeSettings, themeSettingsUrl, domains API]
image: /img/social-card.png
---

# Optional theme settings on license and domains APIs

Official domain configuration is stored in the primary license JSON on IPFS. Some domains keep **`themeSettings`** inline (e.g. BDAG). Others can store a pointer to a **separate** theme JSON using **`themeSettingsUrl`** on that same license file.

To avoid an extra HTTP request on every call, merged theme data is returned only when the client opts in.

Automated checks (local HTTP tests, no Mongo): `tests/integration/license-zelf-theme-api.test.js` covers full zelf `zns` color keys on `GET /api/license?domain=zelf`, the **all-licenses** list `GET /api/license?includeThemeSettings=1`, plus 401/409/`includeThemeSettings=0`, and tags/domains paths. Run `npm run test:license-theme` with the API up (`jest.integration.http.config.js`). Unit merge/parse tests live in `tests/unit/license-theme-merge.test.js`.

## Query parameter

| Parameter | Values | When set |
|-----------|--------|----------|
| `includeThemeSettings` | `1`, `true`, `0`, `false` (license search validates; tags accept any string, truthy = `1` / `true`) | If truthy, the server may `GET` `themeSettingsUrl` from the official license JSON and deep-merge the result into `themeSettings`. |

## Endpoints

- `GET {{ZELF_PUBLIC_API_ORIGIN}}/api/license?domain=zelf&includeThemeSettings=1`
- `GET {{ZELF_PUBLIC_API_ORIGIN}}/api/license?includeThemeSettings=1` (all licenses, when each record has `domainConfig` loaded)
- `GET {{ZELF_PUBLIC_API_ORIGIN}}/api/tags/domains?includeThemeSettings=1`
- `GET {{ZELF_PUBLIC_API_ORIGIN}}/api/tags/domains/:domain?includeThemeSettings=1`

## Official license JSON (IPFS)

Optional field on the **primary** domain license document:

| Field | Type | Description |
|-------|------|-------------|
| `themeSettingsUrl` | string (URL) | Gateway or IPFS URL of a JSON document. If absent, `includeThemeSettings` does not trigger a second fetch. |

Remote theme file may be either:

- `{ "themeSettings": { ... } }`, or
- a root object treated as the theme settings object.

## Behavior

- Without `includeThemeSettings` (or falsy): same as before; no second request.
- With truthy flag but no `themeSettingsUrl`: no second request; `themeSettings` stays as in the primary JSON.
- If the optional fetch fails: error is logged; the API still succeeds with primary JSON `themeSettings` only.
