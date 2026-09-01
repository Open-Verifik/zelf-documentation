---
title: Preview Zelf ID QR
description: Preview a Zelf ID QR image on ZelfEncrypt v4 without a domain lookup.
keywords: [preview zelf id qr, zelfproof qr, v4 preview]
image: /img/social-card.png
---

# Preview Zelf ID QR

Extract the ZelfProof from a QR image and preview its public data on **ZelfEncrypt v4**. For a raw proof string, use [Preview ZelfProof](/docs/api/zelf-ids/preview-zelfproof).

## Endpoint

```
POST https://v4.zelf.world/api/zelf-ids/preview-zelf-id-qr
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zelfProofQRCode` | string | Yes | PNG QR as a data URL or raw base64 |
| `os` | string | Yes | `"DESKTOP"`, `"ANDROID"`, or `"IOS"` |
| `captchaToken` | string | No | CAPTCHA token for bot protection |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "publicData": {
      "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
      "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
      "hasPassword": "true",
      "origin": "online",
      "v": "4"
    },
    "passwordLayer": true,
    "zelfProof": "[ZELFPROOF_BASE64]"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing zelfProofQRCode\n"
}
```

```json
{
  "message": "incorrect_zelf_proof",
  "code": "incorrect_zelf_proof"
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
curl -X POST "https://v4.zelf.world/api/zelf-ids/preview-zelf-id-qr" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post(
  'https://v4.zelf.world/api/zelf-ids/preview-zelf-id-qr',
  { zelfProofQRCode: 'data:image/png;base64,[QR_CODE_BASE64]', os: 'DESKTOP' },
  { headers: { Authorization: `Bearer ${token}`, Origin: 'https://yourdomain.com' } }
);

console.log(response.data.data.publicData);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://v4.zelf.world/api/zelf-ids/preview-zelf-id-qr",
    json={"zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]", "os": "DESKTOP"},
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"},
)
print(response.json()["data"]["publicData"])
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$ch = curl_init('https://v4.zelf.world/api/zelf-ids/preview-zelf-id-qr');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token,
        'Origin: https://yourdomain.com',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'zelfProofQRCode' => 'data:image/png;base64,[QR_CODE_BASE64]',
        'os' => 'DESKTOP',
    ]),
]);
$result = json_decode(curl_exec($ch), true);
print_r($result['data']['publicData']);
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
        .post("https://v4.zelf.world/api/zelf-ids/preview-zelf-id-qr")
        .json(&json!({
            "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]",
            "os": "DESKTOP"
        }))
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    let body: Value = response.json().await?;
    println!("{}", body["data"]["publicData"]);
    Ok(())
}
```

</TabItem>
</Tabs>
