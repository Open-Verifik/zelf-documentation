---
title: Delete Zelf ID
description: Delete a Zelf ID by verifying ownership with biometric face data.
keywords: [delete zelf id, remove zelf name, unpin zelf id]
image: /img/social-card.png
---

# Delete Zelf ID

Delete a Zelf ID by verifying ownership through biometric face verification. This unpins the data from IPFS.

## Endpoint

```
DELETE {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/delete
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Name of the Zelf ID to delete |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`) |
| `faceBase64` | string | Yes | Base64-encoded face image (must match the original) |
| `password` | string | No | Password if one was set during creation |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "tagObject": {
      "id": "019981a4-1b2c-7d3e-8f4a-5b6c7d8e9f0a",
      "publicData": {
        "tagName": "myname.zelf",
        "domain": "zelf",
        "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5"
      }
    },
    "deletedFiles": [
      {
        "status": "unpinned"
      }
    ]
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing domain\n. missing tagName\n. missing faceBase64\n"
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
curl -X DELETE "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/delete" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.delete('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/delete', {
  data: {
    tagName: 'myname',
    domain: 'zelf',
    faceBase64: '[FACE_BASE64_DATA]',
    password: 'your_password'
  },
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Deleted:', response.data.data.tagObject.publicData.tagName);
```

</TabItem>
</Tabs>

## Notes

- The `faceBase64` must match the face used during the original lease
- Deletion unpins the data from IPFS — the data may still be accessible via cached gateways for a short period
- Arweave data is permanent and cannot be deleted
