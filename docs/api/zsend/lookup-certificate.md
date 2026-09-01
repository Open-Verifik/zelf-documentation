---
title: Look Up zSend Certificate
description: Resolve a Zelf name to the Face Certificate a sender should encrypt to.
keywords: [zsend, certificate lookup, zelf name resolution, face certificate]
image: /img/social-card.png
---

# Look Up zSend Certificate

Resolves a Zelf name to the active Face Certificate published for it. This is the sender's first call: it returns the PEM to wrap a content key to.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/certificates
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Zelf name, with or without the domain suffix |
| `domain` | string | No | Defaults to `zelf` |
| `kind` | string | No | `file` (default) or `message` |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "tagName": "alice.zelf",
    "domain": "zelf",
    "purposeId": "zsend:alice.zelf",
    "kind": "file",
    "certificate": "-----BEGIN CERTIFICATE-----\nMIIB...\n-----END CERTIFICATE-----\n",
    "fingerprint": "9f2c...",
    "publicKey": "BFq3...",
    "keyType": "Secp256k1",
    "certificateExpiresAt": null,
    "publishedAt": "2026-08-19T18:22:41.510Z",
    "status": "active"
  }
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
<TabItem value="404" label="404 Not Found">

The name has not published a certificate for this `kind`, or the entry was revoked.

```json
{
  "message": "certificate_not_published",
  "code": "NotFound"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing tagName\n"
}
```

</TabItem>
</Tabs>

## Before you encrypt to it

Check two things, in this order:

1. **`purposeId` matches** the value from [`GET /api/zsend/purpose-id`](./purpose-id) for the name you typed. This is what ties the certificate to the intended recipient.
2. **`status` is `active`.**

Only the directory entry is returned here — the API already verified the certificate against the Face PKI root when it was published. To check independently, call [`POST /api/my-face-certificates/verify`](../face-certificates/verify) and compare against the root you pinned from [`GET /api/face-certificates/root-certificate`](../face-certificates/root-certificate).

Record the `fingerprint`. Envelopes carry it as `recipientFingerprint`, which is how a client detects that the recipient rotated their certificate after an envelope was sent.

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/certificates?tagName=alice.zelf" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.get(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/certificates",
  {
    params: { tagName: "alice.zelf" },
    headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" },
  }
);
console.log(data.data.certificate);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.get(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/certificates",
    params={"tagName": "alice.zelf"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/certificates?tagName=alice.zelf";
$options = array("http" => array(
    "header" => "Authorization: Bearer YOUR_JWT_TOKEN\r\nOrigin: https://yourdomain.com\r\n",
    "method" => "GET"
));
echo file_get_contents($url, false, stream_context_create($options));
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let body = reqwest::Client::new()
        .get("{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/certificates")
        .query(&[("tagName", "alice.zelf")])
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
