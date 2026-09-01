---
title: Verify Face Certificate Signature
description: Verify a face signature using the Face Certificate PEM.
keywords: [face certificate, verify signature, face pki]
image: /img/social-card.png
---

# Verify Face Certificate Signature

Verifies a signature produced by [Sign](./sign) against the Face Certificate.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/verify-signature
```

JWT (no payment):

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature
```

## Authentication

- Paid path: payment headers or subscription. Cost: 0.01 ZNS.
- JWT path: `Authorization: Bearer <token>` after `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dataSha256` | string | Yes | SHA-256 digest that was signed, base64 |
| `signature` | string | Yes | Signature from sign, base64 |
| `certificate` | string | Yes | Face Certificate PEM |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "valid": true
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
  "validationError": "missing signature"
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
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "dataSha256": "[SHA256_BASE64]",
    "signature": "[SIGNATURE_BASE64]",
    "certificate": "-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature",
  {
    dataSha256: "[SHA256_BASE64]",
    signature: "[SIGNATURE_BASE64]",
    certificate: "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----",
  },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.valid);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature",
    json={
        "dataSha256": "[SHA256_BASE64]",
        "signature": "[SIGNATURE_BASE64]",
        "certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----",
    },
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature";
$data = array(
    "dataSha256" => "[SHA256_BASE64]",
    "signature" => "[SIGNATURE_BASE64]",
    "certificate" => "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "dataSha256": "[SHA256_BASE64]",
            "signature": "[SIGNATURE_BASE64]",
            "certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"
        }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
