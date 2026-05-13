---
title: Decrypt Zelf ID
description: Decrypt a Zelf ID using biometric face verification to access wallet data.
keywords: [decrypt zelf id, zelf id wallet, biometric decrypt]
image: /img/social-card.png
---

# Decrypt Zelf ID

Decrypt a Zelf ID using biometric face verification to access wallet data, mnemonic phrases, and private keys.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/decrypt
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Name of the Zelf ID to decrypt |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`) |
| `faceBase64` | string | Yes | Base64-encoded face image (must match the original) |
| `password` | string | No | Password if one was set during creation |
| `os` | string | Yes | Operating system (`"DESKTOP"`, `"ANDROID"`, `"IOS"`) |
| `captchaToken` | string | No | CAPTCHA token for bot protection |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "id": "019981a4-1b2c-7d3e-8f4a-5b6c7d8e9f0a",
    "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreicmi63...",
    "ipfs_pin_hash": "bafkreicmi63...",
    "ipfsHash": "bafkreicmi63...",
    "cid": "bafkreicmi63...",
    "size": 20238,
    "date_pinned": "2026-05-13T12:00:00.000Z",
    "publicData": {
      "tagName": "myname.zelf",
      "domain": "zelf",
      "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
      "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
      "suiAddress": "0x6a674654...",
      "blockDAGAddress": "0x...",
      "avalancheAddress": "0x...",
      "hasPassword": "true",
      "type": "hold",
      "origin": "online",
      "registeredAt": "2026-05-13 12:00:00",
      "expiresAt": "2027-05-13 12:00:00"
    },
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]",
    "zelfProof": "[ZELFPROOF_BASE64]",
    "domain": "zelf",
    "metadata": {
      "mnemonic": "word1 word2 word3 ... word24"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing faceBase64\n"
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

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | IPFS record identifier |
| `url` | string | Direct URL to IPFS content |
| `cid` | string | IPFS content identifier |
| `publicData` | object | Public wallet addresses and metadata |
| `publicData.ethAddress` | string | Ethereum wallet address |
| `publicData.btcAddress` | string | Bitcoin wallet address |
| `publicData.solanaAddress` | string | Solana wallet address |
| `publicData.suiAddress` | string | Sui wallet address |
| `publicData.registeredAt` | string | Registration timestamp |
| `publicData.expiresAt` | string | Expiration timestamp |
| `zelfProof` | string | ZelfProof data |
| `zelfProofQRCode` | string | Base64 QR code image |
| `metadata.mnemonic` | string | BIP39 mnemonic recovery phrase |

:::caution
The `metadata.mnemonic` field contains the wallet recovery phrase. Handle with extreme care.
:::

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/decrypt" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');
const fs = require('fs');

const faceBase64 = fs.readFileSync('./selfie.jpg', 'base64');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/decrypt', {
  tagName: 'myname',
  domain: 'zelf',
  faceBase64,
  password: 'your_password',
  os: 'DESKTOP'
}, {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

const { metadata, publicData } = response.data.data;
console.log('Mnemonic:', metadata.mnemonic);
console.log('ETH:', publicData.ethAddress);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests, base64

with open("selfie.jpg", "rb") as f:
    face_base64 = base64.b64encode(f.read()).decode()

response = requests.post("{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/decrypt", json={
    "tagName": "myname",
    "domain": "zelf",
    "faceBase64": face_base64,
    "password": "your_password",
    "os": "DESKTOP"
}, headers={
    "Authorization": f"Bearer {token}",
    "Origin": "https://yourdomain.com"
})

data = response.json()["data"]
print(f"Mnemonic: {data['metadata']['mnemonic']}")
print(f"ETH: {data['publicData']['ethAddress']}")
```

</TabItem>
</Tabs>

## Security

- The `faceBase64` must match the face used during the original lease
- The `password` must match the one used during creation (if set)
- Never log or expose the `metadata.mnemonic` field
- Always use HTTPS for requests
