---
id: preview-zelfproof
title: Preview ZelfProof
sidebar_label: Preview ZelfProof
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/preview
```

## Description

Preview a ZelfProof without face verification. This returns limited information such as `publicData` and whether a password layer is present. If the proof requires a `verifierKey`, include it.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zelfProof` | string | Yes | Base64 ZelfProof to preview |
| `verifierKey` | string | No | Verifier key if required |

## Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Origin` | Yes | CORS origin validation |
| `Authorization` | Yes | Bearer JWT from client authentication |
| `Content-Type` | Yes | `application/json` |

## Request Examples

<Tabs>
<TabItem value="nodejs" label="Node.js" default>

```javascript
const axios = require('axios');

const data = {
  zelfProof: '[ZELFPROOF_BASE64]'
};

const res = await axios.post('https://api.zelf.world/api/zelf-proof/preview', data, {
  headers: {
    Origin: 'https://yourdomain.com',
    Authorization: `Bearer <JWT>`,
    'Content-Type': 'application/json'
  }
});
console.log(res.data);
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/preview" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{
    "zelfProof": "[ZELFPROOF_BASE64]"
  }'
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="200" label="200 OK">

```json
{
  "passwordLayer": "WithPassword",
  "publicData": {
    "ethAddress": "0x123...",
    "btcAddress": "bc1q..."
  },
  "requireLiveness": true
}
```

</TabItem>
<TabItem value="500" label="500 - Parse Error">

```json
{
  "error": "PROVIDED ZELFPROOF BYTES COULD NOT BE DECODED AS A BASE64 STRING."
}
```

</TabItem>
</Tabs>

## Notes

- This endpoint does not validate the face or decrypt private metadata.
- Use `decrypt` when full data access is required.
- If the proof was created with a `verifierKey`, it may be required here too.
