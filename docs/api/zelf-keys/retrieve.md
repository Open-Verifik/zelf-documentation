---
title: Retrieve Zelf Key
description: Retrieve and decrypt a specific ZelfKeys record.
keywords: [zelf keys, retrieve record, decrypt password, get password]
---

# Retrieve Zelf Key

Retrieve and locally decrypt a stored ZelfKeys record to reveal its sensitive data.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/retrieve
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Request Body

- `zelfProof` (string, required): The encrypted ZelfProof string of the record to retrieve. This is obtained from the list endpoints.
- `faceBase64` (string, required): Base64 encoded selfie image for biometric decryption authorization.
- `password` (string, required): The master password associated with your Zelf ID.
- `type` (string, required): The type of the record (`password`, `notes`, `zotp`, `credit-card`).
- `removePGP` (boolean, optional): Set to `true` if you are sending raw `faceBase64` and `password` without PGP wrapping.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

The returned `data` object contains the decrypted sensitive values wrapped in a `pgp` property for transport security (if applicable) or directly in `metadata`.

```json
{
  "data": {
    "identifier": "miguel.zelf",
    "publicData": {
      "website": "https://github.com",
      "username": "testuser@zelf.world",
      "timestamp": "2026-05-13T15:23:04.010Z",
      "type": "password"
    },
    "metadata": {
      "password": "mySecretGitHub!123",
      "notes": "Work account"
    },
    "pgp": "-----BEGIN PGP MESSAGE-----\n...",
    "timestamp": "2026-05-13T10:00:00.000Z"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Returned if the `zelfProof` is missing or decryption fails due to biometric mismatch or incorrect password.

```json
{
  "message": "failed_to_decrypt",
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

// First, fetch the records list
const recordsResponse = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=password', {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

const myPasswordRecord = recordsResponse.data.data.data[0];

// Then, retrieve and decrypt the specific record using its zelfProof
const decryptedResponse = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/retrieve', {
  zelfProof: myPasswordRecord.zelfProof,
  type: "password",
  faceBase64: 'data:image/jpeg;base64,...',
  password: 'myStrongPassword123!',
  removePGP: true
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Decrypted Password:', decryptedResponse.data.data.metadata.password);
```

</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/retrieve" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "zelfProof": "eyJhbGciOiJ...",
    "type": "password",
    "faceBase64": "data:image/jpeg;base64,...",
    "password": "myStrongPassword123!",
    "removePGP": true
  }'
```

</TabItem>
</Tabs>
