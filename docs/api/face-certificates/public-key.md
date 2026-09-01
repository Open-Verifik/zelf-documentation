---
title: Face Certificate Public Key
description: Derive the face public key for a purpose id without issuing a new certificate.
keywords: [face certificate, public key, face pki]
image: /img/social-card.png
---

# Face Certificate Public Key

Derives the face public key for a `purposeId` from the face and ZelfProof. Use this when you need the PEM public key without generating a new certificate.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/public-key
```

JWT (no payment):

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/public-key
```

## Authentication

- Paid path: payment headers or subscription. Cost: 0.01 ZNS.
- JWT path: `Authorization: Bearer <token>` after `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `faceBase64` | string | Yes | Face image (raw base64 or data URL) |
| `zelfProof` | string | Yes | ZelfProof used when the certificate was issued |
| `purposeId` | string | Yes | Same purpose id as generate |
| `keyType` | string | No | `Secp256k1` (default) or another supported key type |
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
  "publicKey": "-----BEGIN PUBLIC KEY-----\nMFkw...\n-----END PUBLIC KEY-----\n"
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
  "validationError": "missing purposeId"
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
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/public-key" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "[FACE_BASE64]",
    "zelfProof": "[ZELFPROOF_BASE64]",
    "purposeId": "login:www.example.com",
    "keyType": "Secp256k1",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/public-key",
  {
    faceBase64: "[FACE_BASE64]",
    zelfProof: "[ZELFPROOF_BASE64]",
    purposeId: "login:www.example.com",
    keyType: "Secp256k1",
    os: "DESKTOP",
  },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.publicKey);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/public-key",
    json={
        "faceBase64": "[FACE_BASE64]",
        "zelfProof": "[ZELFPROOF_BASE64]",
        "purposeId": "login:www.example.com",
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
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/public-key";
$data = array(
    "faceBase64" => "[FACE_BASE64]",
    "zelfProof" => "[ZELFPROOF_BASE64]",
    "purposeId" => "login:www.example.com",
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/public-key")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "faceBase64": "[FACE_BASE64]",
            "zelfProof": "[ZELFPROOF_BASE64]",
            "purposeId": "login:www.example.com",
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
