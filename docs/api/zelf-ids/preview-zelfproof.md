---
title: Preview ZelfProof
description: Preview a raw ZelfProof to inspect its public data without a domain lookup.
keywords: [preview zelfproof, zelfproof data, inspect zelf proof]
image: /img/social-card.png
---

# Preview ZelfProof

Preview a raw ZelfProof string to inspect its public data without performing a domain lookup. Useful for validating a ZelfProof before registering it.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview-zelfproof
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zelfProof` | string | Yes | Base64-encoded ZelfProof data to preview |
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
    "publicData": {
      "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
      "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
      "hasPassword": "true"
    },
    "passwordLayer": true,
    "zelfProof": "[ZELFPROOF_BASE64]"
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
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview-zelfproof" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "zelfProof": "[ZELFPROOF_BASE64_DATA]",
    "os": "DESKTOP"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview-zelfproof', {
  zelfProof: '[ZELFPROOF_BASE64_DATA]',
  os: 'DESKTOP'
}, {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Public Data:', response.data.data.publicData);
console.log('Has Password:', response.data.data.passwordLayer);
```

</TabItem>
</Tabs>
