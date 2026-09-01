---
title: Pin zSend Ciphertext
description: Pin an already-encrypted zSend payload up to 5 MB and get an IPFS pointer.
keywords: [zsend, pin ciphertext, ipfs, encrypted blob]
image: /img/social-card.png
---

# Pin zSend Ciphertext

Pins an **already-encrypted** payload and returns a pointer for [`cipher`](./create-envelope#cipher).

This is a convenience for small payloads. The bytes you send are ciphertext, so zSend cannot read them — but they still transit the API, so for anything substantial upload directly to storage and pass your own `cipher.cid` or `cipher.url` instead.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/blobs
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cipherBase64` | string | Yes | Base64 ciphertext, up to 5 MB after decoding |
| `filename` | string | No | Pin name. Defaults to a generated value |

Encrypt before calling this. Sending plaintext here would publish it to IPFS in the clear.

Pin metadata is public and searchable, so zSend attaches only a fixed marker and never your filename or recipient.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "cid": "bafybeigd...",
    "url": "https://gateway.example/ipfs/bafybeigd...",
    "byteLength": 184320,
    "sha256": "bjQLnP+zepicpUTmu3gKLHiQHT+zNzh2hRGjBhevoB0="
  }
}
```

Pass `cid`, `url`, and `sha256` straight into `cipher` on [`POST /api/my-zsend/envelopes`](./create-envelope).

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing cipherBase64\n"
}
```

</TabItem>
<TabItem value="413" label="413 Payload Too Large">

```json
{
  "message": "cipher_too_large_upload_directly",
  "code": "PayloadTooLarge"
}
```

</TabItem>
<TabItem value="502" label="502 Bad Gateway">

```json
{
  "message": "ipfs_pin_failed",
  "code": "BadGateway"
}
```

</TabItem>
</Tabs>

## Shortcut

Passing `cipherBase64` directly to [`POST /api/my-zsend/envelopes`](./create-envelope) pins it and records the envelope in one call. zSend then owns the pin and unpins it when the envelope is revoked or expires. Pinning separately gives you the CID before committing to an envelope, but the pin is yours to clean up.

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/blobs" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"cipherBase64":"[CIPHERTEXT_BASE64]","filename":"contract.pdf.enc"}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/blobs",
  { cipherBase64: "[CIPHERTEXT_BASE64]", filename: "contract.pdf.enc" },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.data.cid);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/blobs",
    json={"cipherBase64": "[CIPHERTEXT_BASE64]", "filename": "contract.pdf.enc"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/blobs";
$data = array("cipherBase64" => "[CIPHERTEXT_BASE64]", "filename" => "contract.pdf.enc");
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/blobs")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "cipherBase64": "[CIPHERTEXT_BASE64]",
            "filename": "contract.pdf.enc"
        }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
