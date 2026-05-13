---
title: Search by Domain
description: Search all Zelf IDs registered under a specific domain.
keywords: [search by domain, domain zelf ids, list domain names]
image: /img/social-card.png
---

# Search by Domain

Search all Zelf IDs registered under a specific domain and storage system.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search-by-domain
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`, `"avax"`, `"bdag"`) |
| `storage` | string | Yes | Storage system (`"IPFS"`, `"Arweave"`, `"Walrus"`) |
| `name` | string | No | Optional filter by name |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": [
    {
      "id": "019981a4-1b2c-7d3e-8f4a-5b6c7d8e9f0a",
      "ipfs_pin_hash": "bafkreicmi63...",
      "cid": "bafkreicmi63...",
      "size": 20238,
      "date_pinned": "2026-05-13T12:00:00.000Z",
      "publicData": {
        "tagName": "user1.zelf",
        "domain": "zelf",
        "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
        "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
        "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb"
      }
    }
  ]
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing domain\n. missing storage\n"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search-by-domain?domain=zelf&storage=IPFS" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search-by-domain', {
  params: { domain: 'zelf', storage: 'IPFS' },
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Found:', response.data.data.length, 'Zelf IDs');
```

</TabItem>
</Tabs>
