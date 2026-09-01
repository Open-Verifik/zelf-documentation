---
title: Encrypt with Face Certificate
description: Encrypt a 32–512 byte key using a Face Certificate public key.
keywords: [face certificate, encrypt key, face pki]
image: /img/social-card.png
---

# Encrypt with Face Certificate

Encrypts a caller-supplied key (32–512 bytes after base64 decode) with the Face Certificate public key. Decrypt later with the same face, ZelfProof, and purpose id.

Use `Secp256k1` or `MlKem*` certificates. `MlDsa*` cannot encrypt.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/encrypt
```

JWT (no payment):

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/encrypt
```

## Authentication

- Paid path: payment headers or subscription. Cost: 0.1 ZNS.
- JWT path: `Authorization: Bearer <token>` after `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `certificate` | string | Yes | Face Certificate PEM |
| `keyBase64` | string | Yes | Key bytes as base64 (32–512 bytes after decode) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "encryptedKey": "MHQCAQEEIKu0Xuf...."
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
  "validationError": "missing keyBase64"
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "error": "INVALID CERTIFICATE",
  "code": "ERR_INVALID_CERTIFICATE"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/encrypt" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"certificate":"-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----","keyBase64":"[KEY_BASE64]"}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/encrypt",
  { certificate: "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----", keyBase64: "[KEY_BASE64]" },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.encryptedKey);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/encrypt",
    json={"certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----", "keyBase64": "[KEY_BASE64]"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/encrypt";
$data = array("certificate" => "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----", "keyBase64" => "[KEY_BASE64]");
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/encrypt")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----",
            "keyBase64": "[KEY_BASE64]"
        }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
