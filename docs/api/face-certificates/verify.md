---
title: Verify Face Certificate
description: Verify a Face Certificate against the Face PKI root and return its public key.
keywords: [face certificate, verify, face pki, public key]
image: /img/social-card.png
---

# Verify Face Certificate

Checks that a Face Certificate was issued by the Face PKI root and returns the subject public key.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/verify
```

JWT (no payment):

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify
```

## Authentication

- Paid path: payment headers or subscription. Cost: 0.01 ZNS.
- JWT path: `Authorization: Bearer <token>` after `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `certificate` | string | Yes | Face Certificate PEM |
| `attributePrivateKey` | string | No | Private key to decrypt attributes stored on the certificate |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "publicKey": "AtyPD0RDGMeGZzZce7h1FgJLg9LnChxyJl/MYTfBb++3",
  "metadata": null
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
  "validationError": "missing certificate"
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
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"certificate":"-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----"}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify",
  { certificate: "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----" },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.publicKey);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify",
    json={"certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify";
$data = array("certificate" => "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----");
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({ "certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----" }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
