---
title: Create Zelf Key
description: Store sensitive data like passwords, notes, ZOTP, and credit cards securely.
keywords: [zelf keys, store passwords, store credit cards, store notes, zotp]
---

# Create Zelf Key

Securely store sensitive data on your Zelf ID. The data is encrypted using your ZelfProof and stored redundantly across decentralized storage networks.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/:type
```

### Path Parameters

- `type`: The type of record to store. Must be one of `password`, `notes`, `zotp`, or `credit-card`.

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Request Body

The request body requires common biometric validation fields alongside the specific data payload for the chosen `type`.

### Common Fields (Required for all types)

- `faceBase64` (string, required): Base64 encoded selfie image for biometric ownership validation.
- `masterPassword` (string, required): The master password associated with your Zelf ID.

### Password Payload (`/store/password`)

- `website` (string, required): URL of the website.
- `username` (string, required): The username or email.
- `password` (string, required): The password to store.
- `notes` (string, optional): Additional text notes.

### Notes Payload (`/store/notes`)

- `keyValuePairs` (object, required): A JSON object of up to 10 key-value pairs. Keys must be under 50 characters, and values under 1000 characters.

### ZOTP Payload (`/store/zotp`)

- `website` (string, required): URL of the website.
- `username` (string, required): The username or email.
- `secret` (string, required): The TOTP secret key for generating codes.

### Credit Card Payload (`/store/credit-card`)

- `cardNumber` (string, required): The full credit card number. Must pass Luhn validation.
- `cvv` (string, required): The card security code.
- `expiryMonth` (string, required): 2-digit expiration month.
- `expiryYear` (string, required): 4-digit expiration year.
- `cardName` (string, required): Name on the card.
- `bankName` (string, required): Issuing bank name.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "identifier": "miguel.zelf",
    "zelfProof": "eyJhbGciOiJSUzI1NiIsI...",
    "zelfProofQRCode": "data:image/png;base64,...",
    "ipfs": {
      "id": "019e21ec-8051-7300-975a-4a17acd151aa",
      "url": "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "ipfs_pin_hash": "bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "ipfsHash": "bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "cid": "bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "size": 21328,
      "user_id": "0e3eb3c3-b09c-47e5-aa47-4bdb96d22ceb",
      "date_pinned": "2026-05-13T15:20:08.420Z",
      "publicData": {
        "category": "miguel.zelf_password",
        "keyOwner": "miguel.zelf",
        "timestamp": "2026-05-13T15:20:06.602Z",
        "type": "password",
        "username": "testuser@zelf.world",
        "website": "https://github.com"
      },
      "network": "public",
      "pinned": true,
      "saved": true,
      "web3": true,
      "name": "miguel.zelf_H10M20",
      "created_at": "2026-05-13T15:20:08.420Z",
      "updated_at": "2026-05-13T15:20:08.420Z"
    },
    "NFT": null,
    "type": "password",
    "message": "Data stored successfully"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Returned if required fields are missing, if validation fails (e.g., expired credit card, invalid Luhn), or if biometric ownership validation fails.

```json
{
  "error": "invalid_credit_card_number"
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
<TabItem value="nodejs-password" label="Node.js (Password)" default>

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/password', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  website: 'https://github.com',
  username: 'testuser@zelf.world',
  password: 'mySecretGitHub!123',
  notes: 'Work account'
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="nodejs-notes" label="Node.js (Notes)">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/notes', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  keyValuePairs: {
    "SSH Key": "ssh-rsa AAAAB3NzaC1yc2E...",
    "Environment": "Production"
  }
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Notes stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="nodejs-zotp" label="Node.js (ZOTP)">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/zotp', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  website: 'https://google.com',
  username: 'miguel@zelf.world',
  secret: 'JBSWY3DPEHPK3PXP'
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('ZOTP stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="nodejs-cc" label="Node.js (Credit Card)">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/credit-card', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  cardName: 'Miguel A.',
  cardNumber: '4111111111111111',
  expiryMonth: '12',
  expiryYear: '2028',
  cvv: '123',
  bankName: 'Global Bank'
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Card stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="curl-password" label="cURL (Password)">

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/password" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "data:image/jpeg;base64,...",
    "masterPassword": "myStrongPassword123!",
    "website": "https://github.com",
    "username": "testuser@zelf.world",
    "password": "mySecretGitHub!123",
    "notes": "Work account"
  }'
```

</TabItem>
</Tabs>
