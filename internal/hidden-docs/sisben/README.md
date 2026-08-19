# Hidden: v2/co/sisben

These docs were removed from public Docusaurus content trees so they are not served
in `npm start` or production builds. The upstream SISBEN consultation portal is no
longer available, so the Verifik endpoint was retired.

Public replacement: [`docs/background-check/colombia-rui.mdx`](../../../docs/background-check/colombia-rui.mdx)
(`GET /v2/co/rui`, feature `colombia_api_rui`).

To restore: move files back under `docs/`, `docs-es/`, etc., re-add sidebar entries,
restore the hreflang ES→EN map entry in `scripts/generate-hreflang-manifest.js`, and
re-add the endpoint-doc-index / search-synonyms rows if needed.
