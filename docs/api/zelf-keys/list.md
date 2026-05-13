---
title: List Zelf Keys
description: Retrieve a list of stored ZelfKeys records.
keywords: [zelf keys, list passwords, get passwords, list notes]
---

# List Zelf Keys

Retrieve your stored ZelfKeys records. You can either list records filtered by a specific category, or retrieve a unified list of all your stored data.

## Endpoints

### List By Category

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=:category
```

### List All Categories

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list-all
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Query Parameters

### For `/list` Endpoint
- `category` (string, required): The category of records to fetch. Valid options include `password`, `notes`, `zotp`, and `credit_card`.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-category" label="200 OK (By Category)" default>

```json
{
  "data": {
    "success": true,
    "message": "Found 1 items in category: password",
    "category": "password",
    "totalCount": 1,
    "fullTagName": "miguel.zelf",
    "searchCategory": "miguel.zelf_password",
    "timestamp": "2026-05-13T15:22:09.590Z",
    "data": [
      {
        "id": "password_bafy...",
        "cid": "bafy...",
        "url": "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafy...",
        "publicData": {
          "website": "https://github.com",
          "username": "testuser@zelf.world",
          "timestamp": "2026-05-13T15:23:04.010Z",
          "type": "password"
        },
        "zelfProofQRCode": "data:image/png;base64,...",
        "zelfProof": "eyJhbGciOiJSUzI1NiIsI...",
        "createdAt": "2026-05-13T15:23:05.666Z",
        "updatedAt": "2026-05-13T15:23:05.666Z"
      }
    ]
  }
}
```

</TabItem>
<TabItem value="200-all" label="200 OK (All)">

```json
{
  "data": {
    "success": true,
    "totalCount": 4,
    "data": {
      "password": [
        {
          "id": "password_bafy...",
          "publicData": { "website": "https://github.com", "username": "testuser@zelf.world" },
          "zelfProof": "eyJhbGciOiJ..."
        }
      ],
      "notes": [],
      "zotp": [],
      "credit_card": []
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Returned if the `category` query parameter is missing on the `/list` endpoint.

```json
{
  "validationError": "category is required"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="nodejs" label="Node.js" default>

```javascript
const axios = require('axios');

// List passwords
const passwordsResponse = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=password', {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Stored passwords:', passwordsResponse.data.data.data);

// List all records
const allRecords = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list-all', {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('All Vault Records (Passwords):', allRecords.data.data.data.password);
```

</TabItem>

<TabItem value="curl" label="cURL">

```bash
# List passwords
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=password" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# List all records
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list-all" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
</Tabs>
