---
title: Get zSend Purpose Id
description: Resolve the canonical Face Certificate purpose id and crypto parameters for a Zelf name.
keywords: [zsend, purpose id, face certificate, zelf name]
image: /img/social-card.png
---

# Get zSend Purpose Id

Returns the purpose id a Face Certificate must be issued for, plus the crypto parameters zSend accepts.

Read this instead of building `zsend:<name>` yourself. The convention is versioned server-side, and a client that hardcodes it will break silently when it changes — a certificate issued for the wrong purpose id produces a certificate the recipient cannot decrypt with.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/purpose-id
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Zelf name, with or without the domain suffix (`alice` or `alice.zelf`) |
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
    "kind": "file",
    "purposeId": "zsend:alice.zelf",
    "keyTypeDefault": "Secp256k1",
    "contentKeyMinBytes": 32,
    "contentKeyMaxBytes": 512,
    "cipherAlgorithms": ["AES-GCM-256"]
  }
}
```

</TabItem>
<TabItem value="200-message" label="200 OK (message)" default>

```json
{
  "data": {
    "tagName": "alice.zelf",
    "domain": "zelf",
    "kind": "message",
    "purposeId": "zmail:alice.zelf",
    "keyTypeDefault": "Secp256k1",
    "contentKeyMinBytes": 32,
    "contentKeyMaxBytes": 512,
    "cipherAlgorithms": ["AES-GCM-256"]
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
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing tagName\n"
}
```

</TabItem>
</Tabs>

## Response fields

| Field | Description |
|-------|-------------|
| `purposeId` | Pass this as `purposeId` to Face Certificate `generate`, `encrypt`, `decrypt`, and `sign` |
| `keyTypeDefault` | Recommended `keyType`. `MlDsa*` types cannot encrypt, so they are unusable for zSend wrapping |
| `contentKeyMinBytes` / `contentKeyMaxBytes` | The window Face Certificate `encrypt` accepts. A 32-byte AES-256 key sits at the minimum |
| `cipherAlgorithms` | Payload ciphers the envelope accepts. AEAD only |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/purpose-id?tagName=alice.zelf" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.get(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/purpose-id",
  {
    params: { tagName: "alice.zelf" },
    headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" },
  }
);
console.log(data.data.purposeId);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.get(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/purpose-id",
    params={"tagName": "alice.zelf"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/purpose-id?tagName=alice.zelf";
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
        .get("{{ZELF_PUBLIC_API_ORIGIN}}/api/zsend/purpose-id")
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
