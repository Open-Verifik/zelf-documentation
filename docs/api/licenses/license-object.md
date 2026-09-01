---
title: The License Object
description: The license JSON is the domain. Pricing, name rules, storage, and wallets live on this object and are read by Zelf ID and Tags.
keywords: [zelf license object, license domain, pricingTable, domain config, zelf id domains]
image: /img/social-card.png
sidebar_label: The License Object
---

# The License Object

A **domain** (TLD such as `zelf`, `avax`, or `bdag`) **is** this license object. Creating or updating a license writes one IPFS JSON document. That document is the runtime config for every name under that TLD: length rules, yearly prices, payment networks, storage, wallets, and theme.

Zelf ID (`/api/zelf-ids`) and Tags (`/api/tags`) do not keep a separate price list. They load official licenses and call `domainConfig.getPrice(tagName, duration, referralTagName)` on that table.

Write and own the config with the [Licenses API](/docs/api/licenses/create-license). Read the same object from the domain list endpoints below.

## How the license object is stored

1. [Create or update](/docs/api/licenses/create-license) `POST /api/license` with `domain` plus `domainConfig`.
2. The server pins `{domain}.license` on IPFS (`type: "license"`, `licenseDomain`, `licenseOwner`).
3. Domain loaders (`loadOfficialLicenses`) fetch those pins and wrap each JSON in a `Domain` object.
4. `GET /api/zelf-ids/domains` and `GET /api/tags/domains` return that map. `GET /api/zelf-ids/domains/:domain` returns one license object.
5. [Search licenses](/docs/api/licenses/get-licenses) lists the same pins. [Get my license](/docs/api/licenses/get-my-license) returns the caller’s own record.

One TLD → one license object → one pricing table. Changing prices means updating the license, not a Zelf ID constant.

## Zelf ID plans on top of the table

Paid Zelf ID plans are **yearly subscriptions**. Dollar amounts always come from `tags.payment.pricingTable`. The product only decides which plans a name may use:

| Bare-name length | Allowed plans | Lease behavior |
|------------------|---------------|----------------|
| 1–5 | `unlimited` only | Leftover license price → 5-hour `name.domain.hold`. `$0` after referral → complimentary year of `unlimited`. Cannot be `premium`. |
| 6–27 | `free`, `premium`, `unlimited` | Lease as `free` if you do not pay. Later buy a yearly `premium` or `unlimited` year from the same table. Never `.hold`. |

After a paid year ends, the name stays and the visible plan reads as `free`. See [Migration v4](/docs/changelog/2026-08-31-zelf-id-migration-v4) and [Lease](/docs/api/zelf-ids/lease).

`getPrice` looks up:

- length **6–15** → `pricingTable["6-15"][duration]`
- other lengths **1–5** or **16–27** → `pricingTable[length][duration]`
- `duration`: `"1"` … `"5"` (years) or `"lifetime"`
- optional referral: license `whitelist` amount/`%`, otherwise 10%

## Object fields

This is the `domainConfig` saved on the license and returned on domain detail. Field names match `POST /api/license`, not the older `tagPaymentSettings` / `validation` aliases.

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | TLD (`zelf`, `avax`, …). Map key on the list endpoint. |
| `holdSuffix` | string | Default `".hold"`. Short unpaid Zelf IDs pin as `alice.zelf.hold`. |
| `status` | string | `"active"`, `"inactive"`, or `"suspended"` |
| `type` | string | `"official"`, `"custom"`, `"community"`, or `"enterprise"` (system-managed on create) |
| `owner` | string | License owner email |
| `description` | string | Human-readable blurb |
| `startDate` / `endDate` / `expiresAt` | string | License window (system-managed, usually one year) |
| `subscriptionId` | string | Stripe/license subscription id (system-managed) |
| `features` | array | Enabled product flags |
| `limits` | object | `tags`, `zelfkeys`, `zelfProofs` (Stripe-managed) |
| `stripe` | object | `productId`, `priceId`, `amountPaid`, `paidAt` |
| `tags` | object | Name rules, payment, storage, wallets (below) |
| `zelfkeys` | object | Zelf Keys plans and storage |
| `metadata` | object | `logo`, `launchDate`, `version`, `documentation`, `support` |
| `themeSettings` | object | Inline theme, or merged from `themeSettingsUrl` when requested |

### `tags` (name rules + payment)

| Field | Description |
|-------|-------------|
| `minLength` / `maxLength` | Allowed bare-name length (Zelf ID paid plans use 1–5 and 6–27) |
| `allowedChars` | Character pattern |
| `reserved` | Blocked names (`www`, `api`, …) |
| `customRules` | Extra validators |
| `payment.methods` | `"crypto"` and/or `"stripe"` |
| `payment.networks` | Per-chain `enabled`, `nativeCurrency`, `altCoins` |
| `payment.currencies` | Optional list (`ETH`, `SOL`, `BTC`, `USDC`, …) |
| `payment.discounts` | `yearly`, `lifetime` (0–1) |
| `payment.rewardPrice` | Referral reward divisor (default `10`) |
| `payment.whitelist` | Referral map: `"friend.zelf": "100%"` or a flat USD amount |
| `payment.pricingTable` | Yearly prices by length (or `6-15`) and duration |
| `storage` | `keyPrefix` (usually `tagName`), `ipfsEnabled`, `arweaveEnabled`, `walrusEnabled` |
| `wallet.networks` | Which chains a lease may create |

Zelf ID leases always pin IPFS and never Walrus, even if `walrusEnabled` is true on the license.

### `pricingTable` example

Keys are name length (`"1"` … `"5"`, `"16"` …) or a range (`"6-15"`). Nested keys are subscription years.

```json
{
  "1": { "1": 99, "2": 178, "3": 252, "4": 316, "5": 376, "lifetime": 1485 },
  "2": { "1": 79, "2": 142, "3": 201, "4": 252, "5": 300, "lifetime": 1185 },
  "3": { "1": 59, "2": 106, "3": 150, "4": 188, "5": 224, "lifetime": 885 },
  "4": { "1": 49, "2": 88, "3": 125, "4": 156, "5": 186, "lifetime": 735 },
  "5": { "1": 39, "2": 70, "3": 99, "4": 124, "5": 148, "lifetime": 585 },
  "6-15": { "1": 24, "2": 43.2, "3": 60, "4": 76.8, "5": 91.2, "lifetime": 210 }
}
```

Those numbers are **examples**. Each license sets its own table. Do not assume `$99` or `$24` on every TLD.

## Read endpoints

The same license object is exposed on Zelf ID and Tags. Prefer `/api/zelf-ids/domains` for v4 clients.

```
GET https://v4.zelf.world/api/zelf-ids/domains
GET https://v4.zelf.world/api/zelf-ids/domains/:domain
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/tags/domains
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/tags/domains/:domain
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/license
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/license/my-license
```

### Authentication

Domain list and detail on `/api/zelf-ids` and `/api/tags` require a JWT from `POST /api/sessions`. License search and create use the same protected JWT flow (see each license page).

### Query parameters

| Parameter | Endpoints | Description |
|-----------|-----------|-------------|
| `includeThemeSettings` | list and detail | `1` / `true` merges `themeSettingsUrl` into `themeSettings`. See [Include theme settings](/docs/api/licenses/include-theme-settings). |
| `includeNonPaid` | list | `true` includes licenses that have not paid Stripe. Production defaults to paid-only; development defaults to all. |
| `domain` | `GET /api/license` | Filter the license pin list to one TLD. |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-list" label="200 OK - List" default>

The list is an **object keyed by TLD**, not a flat `{ domain, pricing }` array. Each value is the license object for that TLD.

```json
{
  "data": {
    "zelf": {
      "name": "zelf",
      "type": "official",
      "holdSuffix": ".hold",
      "status": "active",
      "owner": "miguel@zelf.world",
      "description": "Zelf names",
      "tags": {
        "minLength": 1,
        "maxLength": 27,
        "reserved": ["www", "api", "admin"],
        "payment": {
          "methods": ["crypto", "stripe"],
          "rewardPrice": 10,
          "whitelist": {},
          "pricingTable": {
            "1": { "1": 99, "2": 178, "lifetime": 1485 },
            "5": { "1": 39, "2": 70, "lifetime": 585 },
            "6-15": { "1": 24, "2": 43.2, "lifetime": 210 }
          }
        },
        "storage": {
          "keyPrefix": "tagName",
          "ipfsEnabled": true,
          "arweaveEnabled": true,
          "walrusEnabled": false
        }
      },
      "limits": { "tags": 100, "zelfkeys": 100, "zelfProofs": 100 },
      "metadata": { "support": "standard" }
    },
    "avax": {
      "name": "avax",
      "type": "official",
      "holdSuffix": ".hold",
      "status": "active",
      "tags": {
        "minLength": 3,
        "maxLength": 20,
        "payment": {
          "pricingTable": {
            "6-15": { "1": 18 }
          }
        }
      }
    }
  }
}
```

</TabItem>
<TabItem value="200-detail" label="200 OK - License object">

`GET /api/zelf-ids/domains/zelf` returns the same license object (not wrapped in a TLD map).

```json
{
  "data": {
    "name": "zelf",
    "type": "official",
    "holdSuffix": ".hold",
    "status": "active",
    "owner": "miguel@zelf.world",
    "description": "Zelf names",
    "startDate": "2026-01-01 00:00:00",
    "endDate": "2027-01-01 00:00:00",
    "features": [],
    "tags": {
      "minLength": 1,
      "maxLength": 27,
      "allowedChars": {},
      "reserved": [],
      "customRules": [],
      "payment": {
        "methods": ["crypto", "stripe"],
        "networks": {
          "ethereum": {
            "enabled": true,
            "nativeCurrency": { "enabled": true, "code": "ETH" }
          }
        },
        "discounts": { "yearly": 0.1, "lifetime": 0.2 },
        "rewardPrice": 10,
        "whitelist": {},
        "pricingTable": {
          "1": { "1": 99, "2": 178, "3": 252, "4": 316, "5": 376, "lifetime": 1485 },
          "6-15": { "1": 24, "2": 43.2, "3": 60, "4": 76.8, "5": 91.2, "lifetime": 210 }
        }
      },
      "storage": {
        "keyPrefix": "tagName",
        "ipfsEnabled": true,
        "arweaveEnabled": true,
        "walrusEnabled": false
      },
      "wallet": {
        "networks": { "ethereum": { "enabled": true }, "solana": { "enabled": true } }
      }
    },
    "zelfkeys": {
      "plans": [],
      "payment": { "whitelist": {}, "pricingTable": {} },
      "storage": { "keyPrefix": "tagName", "ipfsEnabled": true }
    },
    "stripe": { "productId": "", "priceId": "", "amountPaid": 0, "paidAt": "" },
    "limits": { "tags": 100, "zelfkeys": 100, "zelfProofs": 100 },
    "metadata": { "support": "standard" },
    "themeSettings": {}
  }
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "code": "NotFound",
  "message": "domain_not_found"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
</Tabs>

### Response fields (detail)

| Field | Type | Description |
|-------|------|-------------|
| `data.name` | string | TLD |
| `data.holdSuffix` | string | Reservation suffix (`.hold`) |
| `data.status` | string | `"active"` when names can be leased |
| `data.tags.minLength` / `maxLength` | number | Name length bounds |
| `data.tags.payment.pricingTable` | object | Yearly prices by length and duration |
| `data.tags.payment.whitelist` | object | Referral discounts |
| `data.tags.storage` | object | IPFS / Arweave / Walrus flags |
| `data.limits` | object | License quotas |
| `data.themeSettings` | object | Theme; richer when `includeThemeSettings=1` |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/domains" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

curl -X GET "https://v4.zelf.world/api/zelf-ids/domains/zelf?includeThemeSettings=1" \
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

const { data: list } = await axios.get(
  "https://v4.zelf.world/api/zelf-ids/domains",
  { headers }
);

const tlds = Object.keys(list.data);
const zelfTable = list.data.zelf?.tags?.payment?.pricingTable;

const { data: zelf } = await axios.get(
  "https://v4.zelf.world/api/zelf-ids/domains/zelf",
  { headers }
);

console.log(tlds, zelfTable, zelf.data.holdSuffix);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

headers = {
    "Authorization": f"Bearer {token}",
    "Origin": "https://test.example.com",
}

domains = requests.get(
    "https://v4.zelf.world/api/zelf-ids/domains",
    headers=headers,
).json()["data"]

zelf = requests.get(
    "https://v4.zelf.world/api/zelf-ids/domains/zelf",
    headers=headers,
).json()["data"]

print(list(domains.keys()), zelf["tags"]["payment"]["pricingTable"])
```

</TabItem>
<TabItem value="php" label="PHP">

```php
$ch = curl_init("https://v4.zelf.world/api/zelf-ids/domains/zelf");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer $token",
        "Origin: https://test.example.com",
    ],
]);
$domain = json_decode(curl_exec($ch), true)["data"];
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
let client = reqwest::Client::new();
let domains = client
    .get("https://v4.zelf.world/api/zelf-ids/domains")
    .header("Authorization", format!("Bearer {token}"))
    .header("Origin", "https://test.example.com")
    .send()
    .await?
    .json::<serde_json::Value>()
    .await?;
```

</TabItem>
</Tabs>

## Related

- [Create license](/docs/api/licenses/create-license) — write `domainConfig` / `pricingTable`
- [Search licenses](/docs/api/licenses/get-licenses) — list license pins
- [Get my license](/docs/api/licenses/get-my-license) — caller’s license object
- [Include theme settings](/docs/api/licenses/include-theme-settings)
- [Lease Zelf ID](/docs/api/zelf-ids/lease) — how plans use this table
- [Payment options](/docs/api/zelf-ids/payment-options)
