---
title: Payment Confirmation
description: Confirm a unique-address payment and stamp one year of the next plan on a Zelf ID.
keywords: [zelf id payment confirmation, confirm zelf id pay, signedDataPrice]
image: /img/social-card.png
---

# Payment Confirmation

Confirm that the unique-address payment landed, then stamp **one year** of the chosen plan. Short names (5 characters or fewer) are **unlimited only** at the license yearly price — they go from `.hold` to `unlimited` and cannot be `premium`. Longer names stamp the `plan` from the payment-options JWT (`premium` or `unlimited`). When that year ends, the name stays and the plan reads as `free` — not a hold. Do not call `/api/my-tags/payment-confirmation` for v4 names.

AVAX unique-address confirmation is rejected (`409`). Use the Avalanche smart-contract quote from [Payment Options](/docs/api/zelf-ids/payment-options) instead.

## Endpoint

```
POST https://v4.zelf.world/api/zelf-ids/payment-confirmation
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Bare name of the reserved Zelf ID |
| `domain` | string | No | Domain TLD (e.g., `"zelf"`) |
| `network` | string | Yes | `"ETH"`, `"SOL"`, `"BTC"`, `"AVAX"`, `"BNB"`, `"POL"`, `"BASE"`, or `"BDAG"` |
| `token` | string | Yes | `signedDataPrice` JWT from payment-options |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-unpaid" label="200 OK - Unpaid" default>

```json
{
  "data": {
    "confirmed": false,
    "amountReceived": 0
  }
}
```

No matching transfer yet. A short-name reservation stays a 5-hour hold. A long name stays on its current plan.

</TabItem>
<TabItem value="200-paid" label="200 OK - Confirmed">

```json
{
  "data": {
    "confirmed": true,
    "amountReceived": 0.00812,
    "tagObject": {
      "publicData": {
        "type": "mainnet",
        "origin": "online",
        "v": "4",
        "plan": "premium",
        "expiresAt": "2027-08-31 12:00:00"
      }
    }
  }
}
```

</TabItem>
<TabItem value="409-avax" label="409 AVAX">

```json
{
  "message": "avax_use_smart_contract_confirmation",
  "code": "avax_use_smart_contract_confirmation"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "\"token\" is required"
}
```

```json
{
  "validationError": "token_expired"
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

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://v4.zelf.world/api/zelf-ids/payment-confirmation" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "network": "ETH",
    "token": "[SIGNED_DATA_PRICE_JWT]"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post(
  'https://v4.zelf.world/api/zelf-ids/payment-confirmation',
  {
    tagName: 'myname',
    domain: 'zelf',
    network: 'ETH',
    token: signedDataPrice
  },
  { headers: { Authorization: `Bearer ${token}`, Origin: 'https://yourdomain.com' } }
);

console.log(response.data.data.confirmed);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://v4.zelf.world/api/zelf-ids/payment-confirmation",
    json={
        "tagName": "myname",
        "domain": "zelf",
        "network": "ETH",
        "token": signed_data_price,
    },
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"},
)
print(response.json()["data"]["confirmed"])
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$ch = curl_init('https://v4.zelf.world/api/zelf-ids/payment-confirmation');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token,
        'Origin: https://yourdomain.com',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'tagName' => 'myname',
        'domain' => 'zelf',
        'network' => 'ETH',
        'token' => $signedDataPrice,
    ]),
]);
$result = json_decode(curl_exec($ch), true);
echo $result['data']['confirmed'] ? 'yes' : 'no';
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let response = client
        .post("https://v4.zelf.world/api/zelf-ids/payment-confirmation")
        .json(&json!({
            "tagName": "myname",
            "domain": "zelf",
            "network": "ETH",
            "token": signed_data_price
        }))
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    let body: Value = response.json().await?;
    println!("{}", body["data"]["confirmed"]);
    Ok(())
}
```

</TabItem>
</Tabs>
