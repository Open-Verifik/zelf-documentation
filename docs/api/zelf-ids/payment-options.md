---
title: Payment Options
description: Get unique pay addresses, crypto quotes, and a signed JWT to buy Premium or Unlimited for a leased Zelf ID.
keywords: [zelf id payment options, zelf id pay, signedDataPrice]
image: /img/social-card.png
---

# Payment Options

Return unique payment addresses, per-network quotes, and a JWT (`signedDataPrice`) to buy **Premium** or **Unlimited** for a Zelf ID that is already leased. Prices come only from the **domain license** plan pricing (`planPricing`), and the license also decides which terms are offered. Pass `plan=premium` or `plan=unlimited` for names of 6–27 characters. Names of 1–5 characters can only buy `unlimited`, and a `premium` quote for them is refused. New leases no longer create `.hold` reservations; an older unpaid `.hold` still converts when it is paid. Pass `coupon` to apply a percent-off [coupon](/docs/api/zelf-ids/coupons). A rejected code comes back on this quote with `coupon.reason`, and the license price stays the amount due. Do not call `/api/my-tags/payment-options` for v4 names.

For a 6+ character `.zelf` name the license currently offers these terms:

| `duration` | Premium | Unlimited |
|------------|---------|-----------|
| `"1"` | $29.00 | $99.00 |
| `"2"` | $43.49 | $148.99 |
| `"3"` | $56.99 | $192.99 |
| `"lifetime"` | $144.99 | $494.99 |

These are a snapshot. Always show the `amountDue` of a fresh quote.

For what Free, Premium and Unlimited include, upgrade credit, renewal and lapse, see [Plans: Free, Premium and Unlimited](/docs/api/zelf-ids/plans).

## Endpoint

```
GET https://v4.zelf.world/api/zelf-ids/payment-options
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Bare name of the leased Zelf ID (e.g., `"myname"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`) |
| `duration` | string | Yes | A term the license offers for this plan and name length. Today `"1"`, `"2"`, `"3"` (years) or `"lifetime"`. `"999"` is accepted as `"lifetime"`. Any other term, such as `"4"` or `"5"`, returns `409` `PLAN_DURATION_NOT_OFFERED_BY_LICENSE`. |
| `plan` | string | No | `"premium"` or `"unlimited"`. Send it for 6–27 character names. Names of 1–5 characters are always `unlimited`. |
| `coupon` | string | No | Coupon code. Case-insensitive. See [Coupons](/docs/api/zelf-ids/coupons). |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "tagName": "myname.zelf",
    "tagPayName": "myname.zelfpay",
    "plan": "premium",
    "allowedPlans": ["premium", "unlimited"],
    "duration": 1,
    "initiatedAt": 1793034000,
    "ttl": 1793041200,
    "expiresAt": "2126-10-26 17:00:00",
    "newExpiresAt": "2027-10-26 17:00:00",
    "listPrice": 29,
    "upgradeCredit": 0,
    "amountDue": 29,
    "freeCheckout": false,
    "paymentAddress": {
      "btcAddress": "bc1q...",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb"
    },
    "prices": {
      "ETH": { "amountToSend": 0.00983, "price": 29, "ratePriceInUSD": 2950.12, "tokenPriceString": "2950.12" },
      "SOL": { "amountToSend": 0.1833, "price": 29, "ratePriceInUSD": 158.2, "tokenPriceString": "158.2" },
      "BTC": { "amountToSend": 0.00026, "price": 29, "ratePriceInUSD": 112000, "tokenPriceString": "112000" }
    },
    "signedDataPrice": "[JWT]"
  }
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "message": "TAG_NOT_FOUND",
  "code": "TAG_NOT_FOUND"
}
```

`message` and `code` are both `TAG_NOT_FOUND`. `GET /api/zelf-ids/my-plan` uses this same body. The name is available or was never leased. Lease it first.

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "\"tagName\" is required"
}
```

A term or plan the license does not offer, or a license with no plan pricing, is checked before the quote is built. It returns `409` with the code in `validationError`:

```json
{ "validationError": "PLAN_DURATION_NOT_OFFERED_BY_LICENSE" }
```

```json
{ "validationError": "PLAN_NOT_OFFERED_FOR_NAME" }
```

```json
{ "validationError": "LICENSE_PRICE_REQUIRED" }
```

A downgrade while the paid term is open returns `409` with the code in both `message` and `code`:

```json
{ "message": "PLAN_DOWNGRADE_NOT_ALLOWED", "code": "PLAN_DOWNGRADE_NOT_ALLOWED" }
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

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `tagName` | string | Full name (`name.domain`) |
| `tagPayName` | string | Unique pay-record name (`name.domainpay`) |
| `plan` | string | Plan this payment applies: `premium` or `unlimited` |
| `allowedPlans` | string[] | Plans the license offers for this name length |
| `duration` | number or string | Term in years, or `"lifetime"` |
| `expiresAt` | string | Current expiration stored on the name |
| `newExpiresAt` | string | Expiration this purchase would stamp |
| `listPrice` | number | License price in USD for this plan and term, before upgrade credit and coupon |
| `upgradeCredit` | number | USD credit from an open Premium term when upgrading to Unlimited. `0` otherwise. See [Upgrading](/docs/api/zelf-ids/plans#upgrading) |
| `amountDue` | number | USD to pay after upgrade credit and coupon. Show this to the user |
| `freeCheckout` | boolean | `true` when a coupon or whitelist brings the total to $0. Confirm with network `FREE` |
| `paymentAddress` | object | Unique BTC / SOL (and ETH when not moved onto a contract quote) |
| `prices` | object | Per-network `amountToSend` for `amountDue`. `price` is that USD amount |
| `signedDataPrice` | string | JWT to send as `token` on [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation) |
| `ttl` | number | Unix time when the quote expires (2 hours) |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/payment-options?tagName=myname&domain=zelf&duration=1" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.get('https://v4.zelf.world/api/zelf-ids/payment-options', {
  params: { tagName: 'myname', domain: 'zelf', duration: '1' },
  headers: { Authorization: `Bearer ${token}`, Origin: 'https://yourdomain.com' }
});

console.log(response.data.data.signedDataPrice);
console.log(response.data.data.paymentAddress.solanaAddress);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.get(
    "https://v4.zelf.world/api/zelf-ids/payment-options",
    params={"tagName": "myname", "domain": "zelf", "duration": "1"},
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"},
)
quote = response.json()["data"]
print(quote["signedDataPrice"])
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$ch = curl_init('https://v4.zelf.world/api/zelf-ids/payment-options?tagName=myname&domain=zelf&duration=1');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $token,
        'Origin: https://yourdomain.com',
    ],
]);
$result = json_decode(curl_exec($ch), true);
echo $result['data']['signedDataPrice'];
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let response = client
        .get("https://v4.zelf.world/api/zelf-ids/payment-options")
        .query(&[("tagName", "myname"), ("domain", "zelf"), ("duration", "1")])
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    let body: Value = response.json().await?;
    println!("{}", body["data"]["signedDataPrice"]);
    Ok(())
}
```

</TabItem>
</Tabs>

## Related

- [Monthly access](/docs/api/zelf-ids/monthly-access) is the Free-plan ZNS quote for opening the vault. It is a separate call from this name-plan quote.
- [Proposal: Monthly ZNS access for Free accounts](/docs/api/zelf-ids/monthly-zns-access-proposal)
