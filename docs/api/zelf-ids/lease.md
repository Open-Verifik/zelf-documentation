---
title: Lease Zelf ID
description: Lease a new Zelf ID with biometric face encryption.
keywords: [lease zelf id, create zelf id, register zelf name]
image: /img/social-card.png
---

# Lease Zelf ID

Lease (register) a new Zelf ID. The system generates multi-chain wallet addresses and encrypts them with your biometric face data into a ZelfProof stored on IPFS and Arweave.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name to lease (e.g., `"myname"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`, `"avax"`, `"bdag"`) |
| `faceBase64` | string | Yes | Base64-encoded face image for biometric encryption |
| `type` | string | Yes | `"create"` (new wallet) or `"import"` (existing mnemonic) |
| `os` | string | Yes | Operating system (`"DESKTOP"`, `"ANDROID"`, `"IOS"`) |
| `password` | string | No | Optional password for an extra encryption layer |
| `captchaToken` | string | No | CAPTCHA token for bot protection |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "ipfs": [
      {
        "id": "019981a4-1b2c-7d3e-8f4a-5b6c7d8e9f0a",
        "ipfs_pin_hash": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
        "cid": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
        "size": 20238,
        "date_pinned": "2026-05-13T12:00:00.000Z"
      }
    ],
    "arweave": [],
    "available": false,
    "name": "myname.zelf",
    "tagName": "myname.zelf.zelf",
    "domain": "zelf",
    "tagObject": {
      "id": "019981a4-1b2c-7d3e-8f4a-5b6c7d8e9f0a",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreicmi63...",
      "ipfs_pin_hash": "bafkreicmi63...",
      "cid": "bafkreicmi63...",
      "size": 20238,
      "date_pinned": "2026-05-13T12:00:00.000Z",
      "publicData": {
        "tagName": "myname.zelf",
        "domain": "zelf",
        "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
        "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
        "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
        "suiAddress": "0x6a67465417c8feca9d0787bd5aac77eced8f31f7d4aba664ec778b65e47526bd",
        "blockDAGAddress": "0x...",
        "avalancheAddress": "0x...",
        "hasPassword": "true",
        "type": "hold",
        "origin": "online",
        "registeredAt": "2026-05-13 12:00:00",
        "expiresAt": "2027-05-13 12:00:00"
      },
      "zelfProof": "[ZELFPROOF_BASE64]",
      "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]"
    },
    "pgp": {
      "publicKey": "[PGP_PUBLIC_KEY]",
      "privateKey": "[PGP_PRIVATE_KEY]"
    },
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
  "validationError": "missing tagName\n"
}
```

```json
{
  "validationError": "Name must be no more than 20 characters"
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
| `name` | string | Full Zelf ID name with domain |
| `domain` | string | Domain TLD |
| `tagObject` | object | IPFS record with all stored data |
| `tagObject.publicData.ethAddress` | string | Ethereum address |
| `tagObject.publicData.btcAddress` | string | Bitcoin address |
| `tagObject.publicData.solanaAddress` | string | Solana address |
| `tagObject.publicData.suiAddress` | string | Sui address |
| `tagObject.publicData.blockDAGAddress` | string | BlockDAG address |
| `tagObject.publicData.avalancheAddress` | string | Avalanche address |
| `tagObject.publicData.registeredAt` | string | Registration timestamp |
| `tagObject.publicData.expiresAt` | string | Expiration timestamp |
| `tagObject.zelfProof` | string | ZelfProof data (biometric-encrypted) |
| `tagObject.zelfProofQRCode` | string | Base64 QR code image |
| `pgp` | object | PGP key pair (if not removed) |
| `metadata.mnemonic` | string | 24-word BIP39 mnemonic (sensitive) |

:::caution
The `metadata.mnemonic` field contains the wallet recovery phrase. Never log, store, or transmit this value insecurely.
:::

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_secure_password",
    "type": "create",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');
const fs = require('fs');

// Convert face image to base64
const faceBase64 = fs.readFileSync('./selfie.jpg', 'base64');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease', {
  tagName: 'myname',
  domain: 'zelf',
  faceBase64,
  password: 'your_secure_password',
  type: 'create',
  os: 'DESKTOP'
}, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Origin': 'https://yourdomain.com'
  }
});

console.log('Zelf ID created:', response.data.data.name);
console.log('ETH Address:', response.data.data.tagObject.publicData.ethAddress);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import base64

# Convert face image to base64
with open("selfie.jpg", "rb") as f:
    face_base64 = base64.b64encode(f.read()).decode()

response = requests.post("{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease", json={
    "tagName": "myname",
    "domain": "zelf",
    "faceBase64": face_base64,
    "password": "your_secure_password",
    "type": "create",
    "os": "DESKTOP"
}, headers={
    "Authorization": f"Bearer {token}",
    "Origin": "https://yourdomain.com"
})

data = response.json()["data"]
print(f"Zelf ID created: {data['name']}")
print(f"ETH: {data['tagObject']['publicData']['ethAddress']}")
```

</TabItem>
</Tabs>
