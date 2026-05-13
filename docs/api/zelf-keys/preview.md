---
title: Preview Zelf Key
description: Preview public metadata of a stored ZelfKeys record.
keywords: [zelf keys, preview record, record metadata]
---

# Preview Zelf Key

Preview the non-sensitive public metadata associated with a stored record before requesting full decryption.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/preview
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Request Body

- `zelfProof` (string, required): The encrypted ZelfProof string of the record to preview.
- `faceBase64` (string, optional): Base64 encoded selfie image for biometric verification (if required by implementation).

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "success": true,
    "publicData": {
      "website": "https://github.com",
      "username": "testuser@zelf.world",
      "timestamp": "2026-05-13T10:00:00.000Z"
    },
    "message": "Data preview successful"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Returned if the `zelfProof` parameter is missing or invalid.

```json
{
  "message": "zelfProof is required",
  "code": "Conflict"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="nodejs" label="Node.js" default>

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/preview', {
  zelfProof: "eyJhbGciOiJ...",
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Record Public Metadata:', response.data.data.publicData);
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/preview" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "zelfProof": "eyJhbGciOiJ..."
  }'
```

</TabItem>
</Tabs>
