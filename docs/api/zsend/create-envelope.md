---
title: Create zSend Envelope
description: Record a zSend transfer with a Face Certificate wrapped content key and an AES-GCM ciphertext pointer.
keywords: [zsend, create envelope, send encrypted file, aes-gcm, wrapped key]
image: /img/social-card.png
---

# Create zSend Envelope

Records a transfer. The request carries the **wrapped** content key, the AEAD parameters, and a pointer to the ciphertext.

There is deliberately no parameter for the plaintext or the raw content key. zSend cannot open what it stores.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes
```

## Authentication

`Authorization: Bearer <token>` after `POST /api/sessions`, plus `Origin`.

## Before calling this

1. [Look up the recipient](./lookup-certificate) and confirm the `purposeId` matches the name you typed.
2. Generate a fresh 32-byte content key and encrypt the payload locally with **AES-GCM-256** and a fresh 12-byte nonce.
3. Wrap the content key with [`POST /api/my-face-certificates/encrypt`](../face-certificates/encrypt) to get `encryptedKey`.
4. Optionally sign `cipher.sha256` with [`POST /api/my-face-certificates/sign`](../face-certificates/sign).
5. Upload the ciphertext, either yourself or through [`POST /api/my-zsend/blobs`](./pin-blob) for payloads up to 5 MB.

Never reuse a nonce under the same content key, and never reuse a content key across envelopes.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `toTagName` | string | Yes | Recipient Zelf name |
| `encryptedKey` | string | Yes | Wrapped content key from Face Certificate `encrypt` |
| `cipher` | object | Yes | AEAD parameters and ciphertext pointer |
| `domain` | string | No | Defaults to `zelf` |
| `kind` | string | No | `file` (default) or `message` |
| `cipherBase64` | string | No | Ciphertext for zSend to pin, up to 5 MB. Mutually exclusive with supplying your own pointer |
| `senderProof` | object | No | Signature proving who sent it |
| `filename` | string | No | Server-visible, for the recipient's inbox |
| `mimeType` | string | No | Server-visible |
| `expiresInHours` | number | No | 1 to 720. Defaults to 72 |

### `cipher`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `iv` | string | Yes | Base64 nonce, 12 bytes |
| `algorithm` | string | No | `AES-GCM-256` (default and the only accepted value) |
| `authTag` | string | No | Base64 GCM tag, only when your AEAD returns it separately from the ciphertext |
| `cid` | string | No | IPFS CID of the ciphertext |
| `url` | string | No | URL of the ciphertext |
| `sha256` | string | No | Base64 SHA-256 of the ciphertext. Required when sending `senderProof` |
| `byteLength` | number | No | Ciphertext size, for the inbox |

One of `cid`, `url`, or `cipherBase64` is required, otherwise the envelope has no payload to point at.

### `senderProof`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `signature` | string | Yes | Base64 signature over `cipher.sha256` |
| `purposeId` | string | No | Sender's purpose id |
| `certificate` | string | No | Sender PEM, so the recipient can verify without a directory lookup |
| `publicKey` | string | No | Alternative to the PEM |
| `keyType` | string | No | Defaults to `Secp256k1` |

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
<TabItem value="404" label="404 Not Found">

The recipient has not published a certificate, so there is nothing to encrypt to.

```json
{
  "message": "recipient_certificate_not_published",
  "code": "NotFound"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing iv\n"
}
```

Other `409` reasons: `missing_encryptedKey`, `missing_cipher_pointer`, `unsupported_cipher_algorithm`, `senderProof_requires_cipher_sha256`.

</TabItem>
<TabItem value="413" label="413 Payload Too Large">

`cipherBase64` exceeded 5 MB. Upload the ciphertext yourself and pass `cipher.cid` or `cipher.url`.

```json
{
  "message": "cipher_too_large_upload_directly",
  "code": "PayloadTooLarge"
}
```

`encryptedKey` over 8 KB is also refused with `encryptedKey_too_large`. Real wrapped output is far smaller — hundreds of bytes for `Secp256k1`, a few KB for `MlKem*`.

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"toTagName":"alice.zelf","encryptedKey":"[ENCRYPTED_KEY]","cipher":{"iv":"[IV_BASE64]","cid":"[CID]","sha256":"[SHA256_BASE64]"},"filename":"contract.pdf","expiresInHours":72}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");
const { data } = await axios.post(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes",
  {
    toTagName: "alice.zelf",
    encryptedKey: "[ENCRYPTED_KEY]",
    cipher: { algorithm: "AES-GCM-256", iv: "[IV_BASE64]", cid: "[CID]", sha256: "[SHA256_BASE64]" },
    filename: "contract.pdf",
    expiresInHours: 72,
  },
  { headers: { Authorization: "Bearer YOUR_JWT_TOKEN", Origin: "https://yourdomain.com" } }
);
console.log(data.data.envelopeId);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
print(requests.post(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes",
    json={
        "toTagName": "alice.zelf",
        "encryptedKey": "[ENCRYPTED_KEY]",
        "cipher": {"algorithm": "AES-GCM-256", "iv": "[IV_BASE64]", "cid": "[CID]", "sha256": "[SHA256_BASE64]"},
        "filename": "contract.pdf",
        "expiresInHours": 72,
    },
    headers={"Authorization": "Bearer YOUR_JWT_TOKEN", "Origin": "https://yourdomain.com"},
).json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes";
$data = array(
    "toTagName" => "alice.zelf",
    "encryptedKey" => "[ENCRYPTED_KEY]",
    "cipher" => array("algorithm" => "AES-GCM-256", "iv" => "[IV_BASE64]", "cid" => "[CID]", "sha256" => "[SHA256_BASE64]"),
    "filename" => "contract.pdf",
    "expiresInHours" => 72
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "toTagName": "alice.zelf",
            "encryptedKey": "[ENCRYPTED_KEY]",
            "cipher": { "algorithm": "AES-GCM-256", "iv": "[IV_BASE64]", "cid": "[CID]", "sha256": "[SHA256_BASE64]" },
            "filename": "contract.pdf",
            "expiresInHours": 72
        }))
        .send().await?.text().await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>

## Revoke an envelope

```
DELETE {{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/:envelopeId
```

Sender only. Clears the wrapped key, drops the pointer, and unpins the blob when zSend pinned it. A recipient who already downloaded the ciphertext and recovered the key cannot be un-sent, so treat this as "stop future access", not a recall.

```bash
curl -X DELETE "{{ZELF_PUBLIC_API_ORIGIN}}/api/my-zsend/envelopes/6f1c9d54-2b7a-4f61-9c33-8e2b7a4f6190" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

Returns **403** `only_sender_can_revoke` for anyone else, and **404** when the envelope does not exist.
