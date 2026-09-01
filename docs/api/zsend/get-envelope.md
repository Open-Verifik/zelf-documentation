---
title: Get zSend Envelope
description: Fetch a zSend envelope's wrapped key and ciphertext pointer, then open it with your face.
keywords: [zsend, get envelope, open encrypted file, face decrypt]
image: /img/social-card.png
---

# Get zSend Envelope

Returns the wrapped content key, the AEAD parameters, and the ciphertext pointer for one envelope.

This is not the step that opens the payload. The wrapped key is inert until [`POST /api/my-face-certificates/decrypt`](../face-certificates/decrypt) unwraps it with a live face.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/:envelopeId
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

Accessible to the sender and to the recipient. Recipient access is granted to the session that published the recipient's directory entry, not to anyone who claims the name.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "envelopeId": "6f1c9d54-2b7a-4f61-9c33-8e2b7a4f6190",
    "kind": "file",
    "fromTagName": "bob.zelf",
    "toTagName": "alice.zelf",
    "toDomain": "zelf",
    "purposeId": "zsend:alice.zelf",
    "recipientFingerprint": "9f2c...",
    "encryptedKey": "MHQCAQEEIKu0Xuf...",
    "filename": "contract.pdf",
    "mimeType": "application/pdf",
    "byteLength": 184320,
    "hasSenderProof": true,
    "status": "pending",
    "expiresAt": "2026-08-22T18:22:41.510Z",
    "openedAt": null,
    "createdAt": "2026-08-19T18:22:41.510Z",
    "cipher": {
      "algorithm": "AES-GCM-256",
      "iv": "T3BlbkFJR0NNbm9u",
      "authTag": null,
      "cid": "bafybeigd...",
      "url": "https://gateway.example/ipfs/bafybeigd...",
      "sha256": "bjQLnP+zepicpUTmu3gKLHiQHT+zNzh2hRGjBhevoB0=",
      "byteLength": 184320
    },
    "senderProof": {
      "signature": "MEUCIQD...",
      "purposeId": "zsend:bob.zelf",
      "certificate": "-----BEGIN CERTIFICATE-----\nMIIB...\n-----END CERTIFICATE-----\n",
      "publicKey": null,
      "keyType": "Secp256k1"
    }
  }
}
```

</TabItem>
<TabItem value="403" label="403 Forbidden">

You are neither the sender nor the recipient.

```json
{
  "message": "envelope_not_accessible",
  "code": "Forbidden"
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

Unknown, expired, or revoked. Expiry and revocation clear the wrapped key, so the envelope is genuinely gone rather than hidden.

```json
{
  "message": "envelope_expired",
  "code": "NotFound"
}
```

Other `404` reasons: `envelope_not_found`, `envelope_revoked`.

</TabItem>
</Tabs>

## Opening the payload

```javascript
// 1. Fetch the envelope.
const { data: { data: envelope } } = await axios.get(
  `{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/${envelopeId}`,
  { headers: { Authorization: `Bearer ${token}`, Origin: "https://yourdomain.com" } }
);

// 2. Recover the content key. This requires the live face.
const { data: { keyBase64 } } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/decrypt",
  { faceBase64, zelfProof, purposeId: envelope.purposeId, encryptedKey: envelope.encryptedKey },
  { headers: { Authorization: `Bearer ${token}`, Origin: "https://yourdomain.com" } }
);

// 3. Verify the sender when a proof is attached.
if (envelope.senderProof) {
  const { data: { valid } } = await axios.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-face-certificates/verify-signature",
    {
      dataSha256: envelope.cipher.sha256,
      signature: envelope.senderProof.signature,
      certificate: envelope.senderProof.certificate,
    },
    { headers: { Authorization: `Bearer ${token}`, Origin: "https://yourdomain.com" } }
  );

  if (!valid) throw new Error("sender_signature_invalid");
}

// 4. Download and open locally with AES-GCM-256.
const ciphertext = await fetch(envelope.cipher.url).then((response) => response.arrayBuffer());

const key = await crypto.subtle.importKey("raw", Buffer.from(keyBase64, "base64"), "AES-GCM", false, ["decrypt"]);

const payload = await crypto.subtle.decrypt(
  { name: "AES-GCM", iv: Buffer.from(envelope.cipher.iv, "base64"), tagLength: 128 },
  key,
  ciphertext
);
```

GCM authenticates both the ciphertext and the nonce, so a tampered blob throws instead of producing garbage. Verify `cipher.sha256` against what you downloaded if you want to distinguish "wrong bytes" from "wrong key" before attempting to decrypt.

An unsigned envelope proves nothing about who sent it. Surface that difference to the user rather than implying the sender is verified.

## Mark as opened

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/:envelopeId/opened
```

Recipient only, and idempotent. Sets `status` to `opened` and stamps `openedAt`.

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/6f1c9d54-2b7a-4f61-9c33-8e2b7a4f6190/opened" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

Returns **403** `only_recipient_can_open` for the sender, and **404** when the envelope is unknown, expired, or revoked.

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/6f1c9d54-2b7a-4f61-9c33-8e2b7a4f6190" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.get(
  `{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/${envelopeId}`,
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.data.encryptedKey);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.get(
    f"{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/{envelope_id}",
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/" . $envelopeId;
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
    let envelope_id = "6f1c9d54-2b7a-4f61-9c33-8e2b7a4f6190";
    let body = reqwest::Client::new()
        .get(format!("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/{}", envelope_id))
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
