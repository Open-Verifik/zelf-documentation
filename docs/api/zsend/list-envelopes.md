---
title: List zSend Envelopes
description: List your zSend inbox or outbox without exposing wrapped key material.
keywords: [zsend, list envelopes, inbox, outbox]
image: /img/social-card.png
---

# List zSend Envelopes

Lists envelopes you sent or received. Summaries omit `encryptedKey` and the ciphertext pointer, so an inbox can render without handling key material. Fetch [one envelope](./get-envelope) when the user acts on it.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `box` | string | No | `outbox` (default) or `inbox` |
| `kind` | string | No | `file` or `message` |

Newest first, capped at 200.

**`outbox`** returns envelopes your session sent.

**`inbox`** returns envelopes addressed to names your session claimed by [publishing a certificate](./publish-certificate). Publishing is what creates an inbox, so a session that has never published gets **409**.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": [
    {
      "envelopeId": "6f1c9d54-2b7a-4f61-9c33-8e2b7a4f6190",
      "kind": "file",
      "fromTagName": "bob.zelf",
      "toTagName": "alice.zelf",
      "toDomain": "zelf",
      "purposeId": "zsend:alice.zelf",
      "filename": "contract.pdf",
      "mimeType": "application/pdf",
      "byteLength": 184320,
      "hasSenderProof": true,
      "status": "pending",
      "expiresAt": "2026-08-22T18:22:41.510Z",
      "openedAt": null,
      "createdAt": "2026-08-19T18:22:41.510Z"
    }
  ]
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

No certificate published, so there is no inbox yet.

```json
{
  "message": "no_published_certificate_for_inbox",
  "code": "Conflict"
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

## Status values

| Status | Meaning |
|--------|---------|
| `pending` | Sent and not yet opened |
| `opened` | Recipient confirmed opening it |
| `expired` | TTL lapsed. The wrapped key has been cleared |
| `revoked` | Sender revoked it. The wrapped key has been cleared |

`status` is computed against the current time, so an envelope whose TTL lapsed since the last write reads as `expired` here even before the sweep runs.

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes?box=inbox" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.get(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes",
  {
    params: { box: "inbox" },
    headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" },
  }
);
console.log(data.data.length);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.get(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes",
    params={"box": "inbox"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes?box=inbox";
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
        .get("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes")
        .query(&[("box", "inbox")])
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
