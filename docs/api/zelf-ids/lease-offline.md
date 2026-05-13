---
title: Lease Offline
description: Register a pre-built ZelfProof as a Zelf ID without biometric processing.
keywords: [lease offline, offline zelf id, zelfproof registration]
image: /img/social-card.png
---

# Lease Offline

Register a pre-built ZelfProof as a Zelf ID. This is used when the ZelfProof was already created offline (e.g., via the mobile app or browser extension) and needs to be pinned to IPFS under a domain name.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease-offline
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name to register (e.g., `"myname"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`) |
| `zelfProof` | string | No | Base64-encoded ZelfProof data |
| `zelfProofQRCode` | string | No | Base64-encoded ZelfProof QR code |

:::note
At least one of `zelfProof` or `zelfProofQRCode` should be provided.
:::

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
        "id": "019981b2-3c4d-5e6f-7a8b-9c0d1e2f3a4b",
        "cid": "bafkreiexample...",
        "size": 20443,
        "date_pinned": "2026-05-13T12:00:00.000Z",
        "publicData": {
          "tagName": "myname.zelf",
          "domain": "zelf",
          "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
          "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
          "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb"
        }
      }
    ],
    "available": false,
    "name": "myname.zelf",
    "domain": "zelf"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing tagName\n. missing domain\n"
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

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease-offline" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/lease-offline', {
  tagName: 'myname',
  domain: 'zelf',
  zelfProof: '[ZELFPROOF_BASE64_DATA]'
}, {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Registered:', response.data.data.name);
```

</TabItem>
</Tabs>
