---
title: Payment Options
description: Get unique pay addresses, crypto quotes, and a signed JWT for a reserved Zelf ID.
keywords: [zelf id payment options, zelf id pay, signedDataPrice]
image: /img/social-card.png
---

# Payment Options

Return unique payment addresses, per-network quotes, and a JWT (`signedDataPrice`) for a Zelf ID that is already leased. Quotes use the **domain license** yearly pricing table. Use this after a **short-name 5-hour hold** (unlimited only), or to buy **premium** or **unlimited** on a 6–27 character name. Pass `plan=premium` or `plan=unlimited` for long names. Short names cannot be quoted as `premium`. Do not call `/api/my-tags/payment-options` for v4 names.

## Endpoint

```
GET https://v4.zelf.world/api/zelf-ids/payment-options
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Bare name of the reserved Zelf ID (e.g., `"myname"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`) |
| `duration` | string | Yes | `"1"`, `"2"`, `"3"`, `"4"`, `"5"`, or `"lifetime"` (years of a yearly subscription) |
| `plan` | string | No | `"premium"` or `"unlimited"`. Required intent for 6–27 character names. Short names are always `unlimited`. |

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
    "duration": 1,
    "initiatedAt": 1756663200,
    "ttl": 1756670400,
    "expiresAt": "2026-08-31 17:00:00",
    "paymentAddress": {
      "btcAddress": "bc1q...",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb"
    },
    "prices": {
      "ETH": { "amountToSend": 0.00812, "price": 24, "ratePriceInUSD": 2950.12, "tokenPriceString": "2950.12" },
      "SOL": { "amountToSend": 0.152, "price": 24, "ratePriceInUSD": 158.2, "tokenPriceString": "158.2" },
      "BTC": { "amountToSend": 0.00021, "price": 24, "ratePriceInUSD": 112000, "tokenPriceString": "112000" }
    },
    "signedDataPrice": "[JWT]"
  }
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "message": "tag_not_found",
  "code": "tag_not_found"
}
```

The name is available or was never leased. Lease it first.

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "\"tagName\" is required"
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

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `tagName` | string | Full name (`name.domain`) |
| `tagPayName` | string | Unique pay-record name (`name.domainpay`) |
| `paymentAddress` | object | Unique BTC / SOL (and ETH when not moved onto a contract quote) |
| `prices` | object | Per-network `amountToSend` for the billable USD |
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
