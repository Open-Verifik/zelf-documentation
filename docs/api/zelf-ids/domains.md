---
title: Domains
description: List all supported domains and their configuration.
keywords: [zelf domains, supported domains, domain config]
image: /img/social-card.png
---

# Domains

Retrieve the list of all supported domains and their configuration, or get details for a specific domain.

## List All Domains

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/domains
```

## Get Domain Details

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/domains/:domain
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-list" label="200 OK - List" default>

```json
{
  "data": [
    {
      "domain": "zelf",
      "status": "active",
      "pricing": {
        "1": 24,
        "2": 43.2,
        "3": 60,
        "4": 76.8,
        "5": 91.2,
        "lifetime": 210
      },
      "currency": "USD"
    },
    {
      "domain": "avax",
      "status": "active",
      "pricing": {
        "1": 18
      },
      "currency": "USD"
    }
  ]
}
```

</TabItem>
<TabItem value="200-detail" label="200 OK - Domain Detail">

```json
{
  "data": {
    "domain": "zelf",
    "status": "active",
    "pricing": {
      "1": 24,
      "lifetime": 210
    },
    "currency": "USD",
    "maxLength": 20,
    "minLength": 3
  }
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
# List all domains
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/domains" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Get specific domain
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/domains/zelf" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

// List all domains
const domains = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/domains', {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Available domains:', domains.data.data.map(d => d.domain));

// Get specific domain config
const zelf = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/domains/zelf', {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Zelf pricing:', zelf.data.data.pricing);
```

</TabItem>
</Tabs>
