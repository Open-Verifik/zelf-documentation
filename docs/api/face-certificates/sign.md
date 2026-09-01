---
title: Sign with Face Certificate
description: Sign a SHA-256 digest with a face-derived key for a purpose id.
keywords: [face certificate, sign, face pki, signature]
image: /img/social-card.png
---

# Sign with Face Certificate

Creates a signature over a SHA-256 digest using a key derived from the face, ZelfProof, and `purposeId`. Use a signing `keyType`: `Secp256k1`, `MlDsa44`, `MlDsa65`, or `MlDsa87`.

`dataSha256` is the SHA-256 of the payload, encoded as base64 — not the raw payload.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/sign
```

JWT (no payment):

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/sign
```

## Authentication

- Paid path: payment headers or subscription. Cost: 0.05 ZNS.
- JWT path: `Authorization: Bearer <token>` after `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `faceBase64` | string | Yes | Face image (raw base64 or data URL) |
| `zelfProof` | string | Yes | ZelfProof used when the certificate was issued |
| `purposeId` | string | Yes | Same purpose id as generate |
| `dataSha256` | string | Yes | SHA-256 digest of the data, base64 |
| `keyType` | string | No | `Secp256k1` (default), `MlDsa44`, `MlDsa65`, `MlDsa87` |
| `os` | string | No | `DESKTOP`, `ANDROID`, `IOS` |
| `password` | string | No | Proof password if one was set |
| `verifierKey` | string | No | Verifier auth key if the proof used one |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "signature": "MHQCAQEEIKu0Xuf...."
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
<TabItem value="402" label="402 Payment Required">

```json
{
  "error": "Payment Required"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing dataSha256"
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "error": "NO FACE DETECTED",
  "code": "ERR_NO_FACE_DETECTED"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/sign" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "[FACE_BASE64]",
    "zelfProof": "[ZELFPROOF_BASE64]",
    "purposeId": "login:www.example.com",
    "dataSha256": "[SHA256_BASE64]",
    "keyType": "Secp256k1",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/sign",
  {
    faceBase64: "[FACE_BASE64]",
    zelfProof: "[ZELFPROOF_BASE64]",
    purposeId: "login:www.example.com",
    dataSha256: "[SHA256_BASE64]",
    keyType: "Secp256k1",
    os: "DESKTOP",
  },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.signature);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/sign",
    json={
        "faceBase64": "[FACE_BASE64]",
        "zelfProof": "[ZELFPROOF_BASE64]",
        "purposeId": "login:www.example.com",
        "dataSha256": "[SHA256_BASE64]",
        "keyType": "Secp256k1",
        "os": "DESKTOP",
    },
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/sign";
$data = array(
    "faceBase64" => "[FACE_BASE64]",
    "zelfProof" => "[ZELFPROOF_BASE64]",
    "purposeId" => "login:www.example.com",
    "dataSha256" => "[SHA256_BASE64]",
    "keyType" => "Secp256k1",
    "os" => "DESKTOP"
);
$options = array("http" => array(
    "header" => "Content-Type: application/json\r\nAuthorization: Bearer YOUR_JWT_TOKEN\r\nOrigin: https://yourdomain.com\r\n",
    "method" => "POST",
    "content" => json_encode($data)
));
echo file_get_contents($url, false, stream_context_create($options));
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let body = reqwest::Client::new()
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/sign")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "faceBase64": "[FACE_BASE64]",
            "zelfProof": "[ZELFPROOF_BASE64]",
            "purposeId": "login:www.example.com",
            "dataSha256": "[SHA256_BASE64]",
            "keyType": "Secp256k1",
            "os": "DESKTOP"
        }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
