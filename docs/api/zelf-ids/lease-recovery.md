---
title: Lease Recovery
description: Recover a Zelf ID by re-registering an existing ZelfProof under a new domain name.
keywords: [lease recovery, recover zelf id, zelfproof recovery]
image: /img/social-card.png
---

# Lease Recovery

Recover a Zelf ID by re-registering an existing ZelfProof under a domain name. Recovery uses the same **v4 persist path** as [Lease](/docs/api/zelf-ids/lease): names of 6+ characters confirm as `free` for one year; only names of 5 characters or fewer that still owe payment become a 5-hour `.hold`. Pins are IPFS plus Arweave when enabled — never Walrus.

## Endpoint

```
POST https://v4.zelf.world/api/zelf-ids/lease-recovery
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zelfProof` | string | Yes | Base64-encoded ZelfProof to recover |
| `tagName` | string | Yes | The name to register (e.g., `"myname"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`) |
| `faceBase64` | string | Yes | Base64-encoded face image for verification |
| `password` | string | Yes | Password used during the original encryption |
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
    "ipfs": [
      {
        "id": "019981c3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
        "cid": "bafkreirecovery...",
        "publicData": {
          "tagName": "myname.zelf",
          "domain": "zelf",
          "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
          "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
          "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
          "origin": "online",
          "v": "4"
        }
      }
    ],
    "available": false,
    "name": "myname.zelf",
    "domain": "zelf",
    "tagObject": {
      "publicData": {
        "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
        "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
        "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
        "origin": "online",
        "v": "4"
      },
      "zelfProof": "[ZELFPROOF_BASE64]",
      "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing zelfProof\n"
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
curl -X POST "https://v4.zelf.world/api/zelf-ids/lease-recovery" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "zelfProof": "[ZELFPROOF_BASE64_DATA]",
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

const response = await axios.post('https://v4.zelf.world/api/zelf-ids/lease-recovery', {
  zelfProof: '[ZELFPROOF_BASE64_DATA]',
  tagName: 'myname',
  domain: 'zelf',
  faceBase64: '[FACE_BASE64_DATA]',
  password: 'your_password',
  os: 'DESKTOP'
}, {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Recovered:', response.data.data.name);
```

</TabItem>
</Tabs>
