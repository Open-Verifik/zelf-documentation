---
title: Preview Zelf ID
description: Preview a Zelf ID to see its public data without decrypting.
keywords: [preview zelf id, zelf id preview, public data]
image: /img/social-card.png
---

# Preview Zelf ID

Preview a Zelf ID to see its public data — wallet addresses, password status, and lease details — without biometric decryption.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name to preview (e.g., `"username"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`, `"avax"`, `"bdag"`) |
| `os` | string | Yes | Operating system (`"DESKTOP"`, `"ANDROID"`, `"IOS"`) |
| `captchaToken` | string | No | CAPTCHA token for bot protection |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-found" label="200 OK - Found" default>

```json
{
  "data": {
    "available": false,
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "url": "https://arweave.net/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "zelfName": "migueltrevino.zelf",
        "hasPassword": "true",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "zelfProof": "[ZELFPROOF_BASE64]",
      "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]"
    },
    "preview": {
      "passwordLayer": true,
      "publicData": {
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr"
      }
    }
  }
}
```

</TabItem>
<TabItem value="200-available" label="200 OK - Available">

```json
{
  "data": {
    "available": true,
    "tagName": "newuser.zelf",
    "price": {
      "price": 24,
      "currency": "USD",
      "reward": 2.4,
      "discount": 0,
      "priceWithoutDiscount": 24,
      "discountType": "percentage"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing tagName\n"
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

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `available` | boolean | Whether the name is available |
| `tagObject` | object | Full storage record |
| `preview.passwordLayer` | boolean | Whether a password layer exists |
| `preview.publicData` | object | Subset of public wallet data |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview?tagName=username&domain=zelf&os=DESKTOP" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview', {
  params: { tagName: 'username', domain: 'zelf', os: 'DESKTOP' },
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

console.log('Preview:', response.data.data.preview);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.get("{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/preview",
    params={"tagName": "username", "domain": "zelf", "os": "DESKTOP"},
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"}
)

print(response.json()["data"]["preview"])
```

</TabItem>
</Tabs>
