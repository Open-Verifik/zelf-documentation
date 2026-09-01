---
title: Generate Face Certificate
description: Issue a Face Certificate for a purpose id from a face image and ZelfProof.
keywords: [face certificate, generate, purpose id, face pki]
image: /img/social-card.png
---

# Generate Face Certificate

Issues a Face Certificate PEM for a `purposeId`. The certificate is signed by the Face PKI root.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/generate
```

JWT (no payment):

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/generate
```

## Authentication

- Paid path: `x-payment-proof`, `x-payment-chain`, `x-payment-tx` (or a paid subscription). Cost: 0.1 ZNS.
- JWT path: `POST /api/sessions`, then `Authorization: Bearer <token>` and `Origin`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `faceBase64` | string | Yes | Face image (raw base64 or data URL) |
| `zelfProof` | string | Yes | ZelfProof created on v4 |
| `purposeId` | string | Yes | Unique purpose, e.g. `login:www.example.com` |
| `userSubjectName` | string | Yes | Subject name stored on the certificate |
| `expirationDateUtc` | string | Yes | ISO-8601 UTC expiration, e.g. `2034-10-01T00:00:00Z` |
| `keyType` | string | No | `Secp256k1` (default), `MlKem512`, `MlKem768`, `MlKem1024`, `MlDsa44`, `MlDsa65`, `MlDsa87` |
| `os` | string | No | `DESKTOP`, `ANDROID`, `IOS` |
| `password` | string | No | Proof password if one was set |
| `requestedAttributes` | string[] | No | Proof attributes to copy; use `ID` for the record id |
| `attributePublicKey` | string | No | Public key used to encrypt requested attributes |
| `checkLiveFaceBeforeCreation` | boolean | No | Run a creation-time liveness check |
| `livenessLevel` | string | No | `REGULAR`, `SOFT`, `HARDENED` |
| `verifierKey` | string | No | Verifier auth key if the proof used one |

`MlDsa*` certificates cannot encrypt keys.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "certificate": "-----BEGIN CERTIFICATE-----\nMIIB...\n-----END CERTIFICATE-----\n"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

JWT path only.

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
<TabItem value="402" label="402 Payment Required">

Paid path only.

```json
{
  "error": "Payment Required",
  "message": "This endpoint requires payment to access",
  "paymentDetails": {
    "cost": 0.1,
    "token": "ZNS",
    "acceptedChains": ["solana", "avalanche", "base"]
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing faceBase64"
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

Upstream rejected the face or proof.

```json
{
  "error": "NO FACE DETECTED",
  "code": "ERR_NO_FACE_DETECTED"
}
```

</TabItem>
</Tabs>

## Examples

JWT path shown. For pay-as-you-go, use `/api/face-certificates/generate` and the payment headers instead of `Authorization`.

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/generate" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "[FACE_BASE64]",
    "zelfProof": "[ZELFPROOF_BASE64]",
    "purposeId": "login:www.example.com",
    "userSubjectName": "user@example.com",
    "expirationDateUtc": "2034-10-01T00:00:00Z",
    "keyType": "Secp256k1",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");

const response = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/generate",
  {
    faceBase64: "[FACE_BASE64]",
    zelfProof: "[ZELFPROOF_BASE64]",
    purposeId: "login:www.example.com",
    userSubjectName: "user@example.com",
    expirationDateUtc: "2034-10-01T00:00:00Z",
    keyType: "Secp256k1",
    os: "DESKTOP",
  },
  {
    headers: {
      Authorization: "Bearer YOUR_JWT_TOKEN",
      Origin: "https://yourdomain.com",
    },
  }
);

console.log(response.data.certificate);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/generate"
payload = {
    "faceBase64": "[FACE_BASE64]",
    "zelfProof": "[ZELFPROOF_BASE64]",
    "purposeId": "login:www.example.com",
    "userSubjectName": "user@example.com",
    "expirationDateUtc": "2034-10-01T00:00:00Z",
    "keyType": "Secp256k1",
    "os": "DESKTOP",
}
headers = {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "Origin": "https://yourdomain.com",
    "Content-Type": "application/json",
}
print(requests.post(url, json=payload, headers=headers).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/generate";
$data = array(
    "faceBase64" => "[FACE_BASE64]",
    "zelfProof" => "[ZELFPROOF_BASE64]",
    "purposeId" => "login:www.example.com",
    "userSubjectName" => "user@example.com",
    "expirationDateUtc" => "2034-10-01T00:00:00Z",
    "keyType" => "Secp256k1",
    "os" => "DESKTOP"
);
$options = array(
    "http" => array(
        "header" => "Content-Type: application/json\r\nAuthorization: Bearer YOUR_JWT_TOKEN\r\nOrigin: https://yourdomain.com\r\n",
        "method" => "POST",
        "content" => json_encode($data)
    )
);
echo file_get_contents($url, false, stream_context_create($options));
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let response = reqwest::Client::new()
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/generate")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "faceBase64": "[FACE_BASE64]",
            "zelfProof": "[ZELFPROOF_BASE64]",
            "purposeId": "login:www.example.com",
            "userSubjectName": "user@example.com",
            "expirationDateUtc": "2034-10-01T00:00:00Z",
            "keyType": "Secp256k1",
            "os": "DESKTOP"
        }))
        .send()
        .await?;
    println!("{}", response.text().await?);
    Ok(())
}
```

</TabItem>
</Tabs>
