---
title: Publish zSend Certificate
description: Publish a Face Certificate under a Zelf name so senders can encrypt to it.
keywords: [zsend, publish certificate, face certificate directory, zelf name]
image: /img/social-card.png
---

# Publish zSend Certificate

Publishes a Face Certificate to the zSend directory under a Zelf name. This is what makes a name reachable — until it is published, senders get **404** and the name has no inbox.

Every certificate is verified against the Face PKI root before it is stored. Anything the root did not sign is refused, so a sender that trusts the directory transitively trusts the root.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

Publishing is **first-write-wins**: the session that publishes a name claims it. Rotating the certificate later requires the same session identifier, and a different one gets **403**.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Zelf name, with or without the domain suffix |
| `certificate` | string | Yes | Face Certificate PEM from [`generate`](../face-certificates/generate) |
| `domain` | string | No | Defaults to `zelf` |
| `kind` | string | No | `file` (default) or `message` |
| `keyType` | string | No | Defaults to `Secp256k1` |
| `userSubjectName` | string | No | Falls back to the value on the certificate |
| `certificateExpiresAt` | string | No | ISO-8601 UTC expiry, for display |

Issue the certificate with the `purposeId` from [`GET /api/zsend/purpose-id`](./purpose-id). A certificate issued for a different purpose id is stored under that purpose id, and senders looking up the name will not find it.

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
    "userSubjectName": "alice.zelf",
    "certificateExpiresAt": null,
    "publishedAt": "2026-08-19T18:22:41.510Z",
    "status": "active",
    "revokedAt": null
  }
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

The Face PKI refused the certificate.

```json
{
  "error": "THE PROVIDED CERTIFICATE IS NOT A VALID PEM, OR IT IS NOT ISSUED BY THIS SERVER, OR IT HAS EXPIRED.",
  "code": "ERR_INVALID_CERTIFICATE"
}
```

</TabItem>
<TabItem value="403" label="403 Forbidden">

Another session already claimed this name.

```json
{
  "message": "certificate_owned_by_another_session",
  "code": "Forbidden"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "message": "invalid_certificate",
  "code": "Conflict"
}
```

</TabItem>
<TabItem value="422" label="422 Unprocessable Entity">

```json
{
  "message": "certificate_not_trusted_by_root",
  "code": "UnprocessableEntity"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tagName":"alice.zelf","certificate":"-----BEGIN CERTIFICATE-----\\n...\\n-----END CERTIFICATE-----"}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates",
  { tagName: "alice.zelf", certificate: "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----" },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.data.fingerprint);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates",
    json={"tagName": "alice.zelf", "certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"},
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates";
$data = array("tagName" => "alice.zelf", "certificate" => "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----");
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "tagName": "alice.zelf",
            "certificate": "-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"
        }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>

## List your entries

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates
```

Optional `kind` filter. Returns the entries your session published, newest first, including revoked ones.

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Revoke an entry

```
DELETE {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Zelf name |
| `domain` | string | No | Defaults to `zelf` |
| `kind` | string | No | `file` (default) or `message` |

Revoking stops new senders from looking the name up. It does **not** break envelopes already sent: the recipient still holds the face and the purpose id, and can still open them.

```bash
curl -X DELETE "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/certificates" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tagName":"alice.zelf"}'
```

Returns **404** with `certificate_not_published` when there is nothing to revoke, and **403** when another session owns the entry.

## Rotation

Publishing again with the same session replaces the stored PEM and issues a new `fingerprint`. Envelopes record the `recipientFingerprint` they were wrapped to, so a client can detect that an old envelope predates a rotation and tell the user to unlock it with the older certificate rather than showing a generic failure.
