---
title: Delete Zelf Key
description: Delete a specific ZelfKeys record.
keywords: [zelf keys, delete password, remove record]
---

# Delete Zelf Key

Permanently delete a stored ZelfKeys record. Since records are cryptographically tied to the user's Zelf ID, deletion requires biometric validation matching the original creator.

## Endpoint

```
PUT {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/delete/:id
```

### Path Parameters

- `id`: The unique identifier string of the ZelfKey record to delete (retrieved from the `list` endpoints).

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Request Body

- `faceBase64` (string, required): Base64 encoded selfie image for biometric ownership validation.
- `masterPassword` (string, required): The master password associated with your Zelf ID.
- `removePGP` (boolean, optional): Set to `true` if you are sending raw `faceBase64` and `masterPassword` directly without PGP wrapping.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "success": true,
    "message": "ZelfKey deleted successfully",
    "result": {
      "deleted": [
        "bafy..."
      ],
      "message": "IPFS files deleted successfully"
    }
  }
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

Returned if biometric or password validation fails.

```json
{
  "message": "ERR_LIVENESS_FAILED",
  "code": "Bad Request"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Returned if the requested ID does not exist.

```json
{
  "message": "not_found",
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

const response = await axios.put('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/delete/password_12345', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  removePGP: true
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log(response.data.data.message); // "ZelfKey deleted successfully"
```

</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PUT "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/delete/password_12345" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "data:image/jpeg;base64,...",
    "masterPassword": "myStrongPassword123!",
    "removePGP": true
  }'
```

</TabItem>
</Tabs>
