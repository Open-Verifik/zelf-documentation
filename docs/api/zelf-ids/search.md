---
title: Search Zelf ID
description: Search for a Zelf ID by name across supported domains.
keywords: [search zelf id, zelf id api, find zelf name]
image: /img/social-card.png
---

# Search Zelf ID

Search for a Zelf ID across any supported domain (Zelf, Avax, BDAG, or other licensed domains).

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search
```

## Description

This endpoint allows you to search for a Zelf ID across multiple domains and storage systems (IPFS and Arweave). The system supports multiple domains including Zelf, Avax, BDAG, and other licensed domains.

**Response Types:**
1. **Zelf ID Found**: Returns the object with public wallet data and storage references
2. **Zelf ID Available**: Returns pricing information for leasing the name

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name to search for (e.g., `"username"`) |
| `domain` | string | Yes | Domain TLD (e.g., `"zelf"`, `"avax"`, `"bdag"`) |
| `os` | string | No | Operating system (`"DESKTOP"`, `"ANDROID"`, `"IOS"`) |
| `duration` | string | No | Duration for pricing (`"1"`, `"2"`, `"3"`, `"4"`, `"5"`, `"lifetime"`) |
| `captchaToken` | string | No | CAPTCHA token for bot protection |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-found" label="200 OK - Found" default>

```json
{
  "data": {
    "ipfs": [
      {
        "id": "0ee38476-9465-4431-9448-af82ab8156a9",
        "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibv4c2...",
        "ipfs_pin_hash": "bafkreibv4c2...",
        "ipfsHash": "bafkreibv4c2...",
        "cid": "bafkreibv4c2...",
        "size": 20443,
        "date_pinned": "2025-04-11T15:25:31.984Z",
        "publicData": {
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "hasPassword": "true",
          "type": "mainnet",
          "tagName": "migueltrevino.zelf",
          "registeredAt": "2025-01-15 01:31:07",
          "expiresAt": "2026-01-15 01:31:07"
        }
      }
    ],
    "arweave": [
      {
        "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "publicData": {
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "zelfName": "migueltrevino.zelf",
          "hasPassword": "true",
          "leaseExpiresAt": "2026-01-15 01:31:07"
        },
        "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]",
        "zelfProof": "[ZELFPROOF_BASE64]"
      }
    ],
    "available": false,
    "tagName": "migueltrevino.zelf",
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "zelfName": "migueltrevino.zelf",
        "hasPassword": "true",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]",
      "zelfProof": "[ZELFPROOF_BASE64]"
    }
  }
}
```

</TabItem>
<TabItem value="200-available" label="200 OK - Available">

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
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
  "validationError": "missing tagName or key or value"
}
```

```json
{
  "validationError": "Domain 'sui' is not supported or inactive"
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

### Response Fields (Found)

| Field | Type | Description |
|-------|------|-------------|
| `available` | boolean | `false` when the Zelf ID exists |
| `tagName` | string | The searched name with domain |
| `tagObject` | object | Main record with storage data |
| `tagObject.publicData.ethAddress` | string | Ethereum wallet address |
| `tagObject.publicData.btcAddress` | string | Bitcoin wallet address |
| `tagObject.publicData.solanaAddress` | string | Solana wallet address |
| `tagObject.publicData.hasPassword` | string | Whether password-protected |
| `tagObject.publicData.leaseExpiresAt` | string | Lease expiration date |
| `tagObject.zelfProof` | string | ZelfProof data |
| `tagObject.zelfProofQRCode` | string | Base64 QR code image |

### Response Fields (Available)

| Field | Type | Description |
|-------|------|-------------|
| `available` | boolean | `true` when the name is available |
| `price.price` | number | Lease price in USD |
| `price.currency` | string | Currency (`"USD"`) |
| `price.reward` | number | Referral reward amount |
| `price.discount` | number | Discount applied |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# First, create a session to get JWT token
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -d '{
    "identifier": "my_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Search for a Zelf ID
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search?tagName=username&domain=zelf&os=DESKTOP" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function searchZelfId() {
  // Create a session
  const session = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/sessions', {
    identifier: 'my_session_123',
    type: 'createWallet',
    isWebExtension: false
  }, { headers: { 'Origin': 'https://yourdomain.com' } });

  const token = session.data.data.token;

  // Search for a Zelf ID
  const response = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search', {
    params: { tagName: 'username', domain: 'zelf', os: 'DESKTOP' },
    headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
  });

  if (response.data.data.available) {
    console.log('Available at:', response.data.data.price.price, 'USD');
  } else {
    console.log('Taken:', response.data.data.tagObject.publicData.ethAddress);
  }
}

searchZelfId();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

# Create session
session = requests.post("{{ZELF_PUBLIC_API_ORIGIN}}/api/sessions", json={
    "identifier": "my_session_123",
    "type": "createWallet",
    "isWebExtension": False
}, headers={"Origin": "https://yourdomain.com"})

token = session.json()["data"]["token"]

# Search for a Zelf ID
response = requests.get("{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-ids/search",
    params={"tagName": "username", "domain": "zelf", "os": "DESKTOP"},
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"}
)

result = response.json()
if result["data"]["available"]:
    print(f"Available at: {result['data']['price']['price']} USD")
else:
    print(f"Taken: {result['data']['tagObject']['publicData']['ethAddress']}")
```

</TabItem>
</Tabs>
