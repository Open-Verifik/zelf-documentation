---
title: Domains
description: Read the license object for each TLD from /api/zelf-ids/domains.
keywords: [zelf domains, supported domains, license object]
image: /img/social-card.png
---

# Domains

Each TLD is a [license object](/docs/api/licenses/license-object): pricing, name rules, storage, and wallets live on that JSON. This page is the Zelf ID read API for that object.

Full field reference, `pricingTable` shape, and Zelf ID plan rules: **[The License Object](/docs/api/licenses/license-object)**.

## List all domains

```
GET https://v4.zelf.world/api/zelf-ids/domains
```

Returns an object keyed by TLD. Each value is the license object for that domain.

## Get one domain

```
GET https://v4.zelf.world/api/zelf-ids/domains/:domain
```

Returns the same license object for a single TLD (`zelf`, `avax`, …). Unknown TLDs are `404: domain_not_found`.

## Authentication

Requires a JWT from `POST /api/sessions`.

## Query parameters

| Parameter | Description |
|-----------|-------------|
| `includeThemeSettings` | `1` / `true` merges `themeSettingsUrl` into the license object. See [Include theme settings](/docs/api/licenses/include-theme-settings). |
| `includeNonPaid` | `true` includes licenses that have not paid Stripe (list only). |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/domains" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

curl -X GET "https://v4.zelf.world/api/zelf-ids/domains/zelf" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");

const headers = {
  Authorization: `Bearer ${token}`,
  Origin: "https://test.example.com",
};

const { data } = await axios.get("https://v4.zelf.world/api/zelf-ids/domains/zelf", {
  headers,
});

const table = data.data.tags.payment.pricingTable;
```

</TabItem>
</Tabs>
