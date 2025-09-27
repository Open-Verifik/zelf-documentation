---
id: authenticate
title: Authenticate Account
sidebar_label: Authenticate Account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/clients/auth
```

## Description

Authenticate a client account using biometric verification (face recognition) and master password. This endpoint supports authentication via email or phone number and returns a JWT token along with the client's ZelfProof and account data.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No* | Client email address (required if phone not provided) |
| `countryCode` | string | No* | Country code (required if phone provided) |
| `phone` | string | No* | Phone number (required if email not provided) |
| `faceBase64` | string | Yes | Base64 encoded face image for biometric verification |
| `masterPassword` | string | Yes | Master password for account decryption |
| `identificationMethod` | string | Yes | Identification method: "email" or "phone" |

*Either `email` OR (`countryCode` + `phone`) must be provided.

## Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Origin` | Yes | Origin header for CORS validation |
| `Content-Type` | Yes | Must be `application/json` |

## Request Examples

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Origin: https://yourdomain.com" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "your_master_password",
    "identificationMethod": "email"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const authData = {
  email: "john.doe@example.com",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "your_master_password",
  identificationMethod: "email"
};

try {
  const response = await axios.post('https://api.zelf.world/api/clients/auth', authData, {
    headers: {
      'Origin': 'https://yourdomain.com',
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Authentication successful:', response.data);
} catch (error) {
  console.error('Authentication failed:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

auth_data = {
    "email": "john.doe@example.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "your_master_password",
    "identificationMethod": "email"
}

headers = {
    "Origin": "https://yourdomain.com",
    "Content-Type": "application/json"
}

try:
    response = requests.post(
        "https://api.zelf.world/api/clients/auth",
        json=auth_data,
        headers=headers
    )
    response.raise_for_status()
    print("Authentication successful:", response.json())
except requests.exceptions.RequestException as e:
    print("Authentication failed:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$authData = [
    'email' => 'john.doe@example.com',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'your_master_password',
    'identificationMethod' => 'email'
];

$headers = [
    'Origin: https://yourdomain.com',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients/auth');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($authData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Authentication successful: " . $response;
} else {
    echo "Authentication failed: " . $response;
}
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let auth_data = json!({
        "email": "john.doe@example.com",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "your_master_password",
        "identificationMethod": "email"
    });

    let client = reqwest::Client::new();
    let response = client
        .post("https://api.zelf.world/api/clients/auth")
        .header("Origin", "https://yourdomain.com")
        .header("Content-Type", "application/json")
        .json(&auth_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Authentication successful: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Authentication failed: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="success" label="200 OK - Authentication Successful">

```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "zelfProof": "ApAdnrOCquTDdOIuOTv9Q1X7LTFt6Hsso000dxWSzfu38zCpNZ4e7eEJhc8Y1kJPgBvj1pamMVKROPklz/lIO0HJFsH3uXA530VYWiRoiFVfxzWLBmDFuvbLtmemOJEaZ+PI6qsEJp9Efv9x5FHV3vRYDRv3EsIiJuPATyZMwQ367aMWnZZ4tcdSD9ShJskd9pECkdTvh/GoGZWWQvmabmxOjDn9eCF4zpRwj4/asLihWrXGQZV8mU3HNVOYxwjwEDPzG1gNb9qlnoW6PMDIkoW3Z9MusD7U2llmj0kd6hqh+kHL66fmEUPNEHh01Hf3d1evdsAt0wifFL+LN46i0nN23tv9OWPjzjfXy7zqsyBh6Oqu1A3+7CoEZyGKD0FFT5nGelPn3IK8voFkgEhUqGbTBh1gaEXq5F+Mn3LliIxyGQXTFlr6oQ+OpRdXmwx8xfATdUAJA6wKSmE38OD4+OzqpPFp3/Yo9EeOjY8G3G91pqVpqRmQd3/CZMN8z7Pq/hOKD3v/0RwqC1Wk9CAp1S2r80P4Lofbn30yPIcZBoU+7wVdFkfLIGnmv/M5fMdr0v0ubHLSGl60TFnhor5lN7rm0PpZmGfXBgxDssY/GMINWvIlckfK5yCt/+4GtEMbuHa9X8IiYqW4z+Kt4ab73aoVxSK8dtaHTG3BXT4/NF/DJbVTRQnBoEtSniZktysmvmFWxWFi3t5+HhQ5IOj0+GBy6Lzhl2bDkCfdtivVqlHXFjOpdrUY10hwU5++TXoTMeoWdCOSQ3iciHBfN78tOccGCa6oY3VHvH8s6qsTvZWYvC/f+7qIHvmRZdqmON6yGBlCvtU0XbcpC5huNMeMxi2dR5KrbFwlcjrK35pAHGgFymbLN0bHOxisNIhstlt2yYxTQyrlJ3ZKuVKfI8tPU+fs9naMoP8ZcdhRcW99w/tENXYh61GPMKu9Q2oARcB6CP9Qs+DQxMN3BU+xbGZIva7wHoRg+aIVOAqoD1W5572I2U8sYpeNgd6TTbDpttMb0C5wdCGuRtYnbfQgqEY+TaBJhGIr7rIJEATimr2oeGwUjzHsOF1YI5gMf1Bxcz9vsdrT2k+5X7JKTOFs0jr0pfakWlgowaUtFFhzVOKSrGY+0y3YYEKJ+tkXPvi2Hz6iB8jUxKZ3xLpkfk1Mm7F0qCRYmzmlhCouvDDTKFviXDM2agGnXCIFJ8llM4KgvXUUbK5omK5TxFcrxtFqjdLurbO9V+xAhg==",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "john.doe@example.com.account",
      "publicData": {
        "accountEmail": "john.doe@example.com",
        "accountPhone": "5551234567",
        "accountCompany": "Example Company",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "name": "John Doe"
      }
    }
  }
}
```

</TabItem>
<TabItem value="error" label="400 Bad Request - Invalid Credentials">

```json
{
  "code": "BadRequest",
  "message": "invalid_credentials"
}
```

</TabItem>
<TabItem value="notfound" label="404 Not Found - Client Not Found">

```json
{
  "code": "NotFound",
  "message": "client_not_found"
}
```

</TabItem>
<TabItem value="validation" label="409 Conflict - Validation Error">

```json
{
  "validationError": "Missing required fields: faceBase64, masterPassword, identificationMethod"
}
```

</TabItem>
<TabItem value="zelfproof" label="409 Conflict - Account Missing ZelfProof">

```json
{
  "code": "Conflict",
  "message": "account_doesnt_contain_zelf_proof"
}
```

</TabItem>
</Tabs>

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.token` | string | JWT authentication token for subsequent API calls |
| `data.zelfProof` | string | Encrypted biometric proof for secure authentication |
| `data.zelfAccount.url` | string | IPFS URL where the account data is stored |
| `data.zelfAccount.cid` | string | Content identifier for the IPFS-stored account |
| `data.zelfAccount.ipfsHash` | string | IPFS hash of the stored account data |
| `data.zelfAccount.pinned` | boolean | Whether the account is pinned in IPFS |
| `data.zelfAccount.web3` | boolean | Whether the account supports Web3 features |
| `data.zelfAccount.name` | string | Account filename in IPFS |
| `data.zelfAccount.publicData.accountEmail` | string | Client's email address |
| `data.zelfAccount.publicData.accountPhone` | string | Client's phone number |
| `data.zelfAccount.publicData.accountCompany` | string | Client's company name |
| `data.zelfAccount.publicData.accountCountryCode` | string | Client's country code |
| `data.zelfAccount.publicData.accountType` | string | Type of account (always "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Subscription tier (e.g., "free") |
| `data.zelfAccount.publicData.name` | string | Client's display name |

## Authentication Methods

### Email Authentication
Use the client's email address for authentication:

```json
{
  "email": "client@example.com",
  "faceBase64": "data:image/jpeg;base64,...",
  "masterPassword": "password123",
  "identificationMethod": "email"
}
```

### Phone Authentication
Use the client's phone number for authentication:

```json
{
  "countryCode": "+1",
  "phone": "5551234567",
  "faceBase64": "data:image/jpeg;base64,...",
  "masterPassword": "password123",
  "identificationMethod": "phone"
}
```

## Security Features

- **Biometric Verification**: Face recognition ensures only the account owner can authenticate
- **Master Password**: Additional security layer for account decryption
- **JWT Tokens**: Secure, stateless authentication tokens
- **IPFS Storage**: Decentralized storage of account data
- **Zero-Knowledge Proofs**: ZelfProof technology for privacy-preserving authentication

## Error Handling

| Status Code | Description | Common Causes |
|-------------|-------------|---------------|
| 400 | Bad Request | Invalid request format or missing required fields |
| 401 | Unauthorized | Invalid credentials or authentication failure |
| 404 | Not Found | Client account does not exist |
| 409 | Conflict | Validation errors, duplicate requests, or account missing ZelfProof |
| 500 | Internal Server Error | Server-side processing error |

## Notes

- The JWT token returned can be used for subsequent authenticated API calls
- Face images must be provided as base64-encoded data URLs
- The `identificationMethod` must match the provided credentials (email or phone)
- Master password is required for account decryption and verification
- All biometric data is processed securely and never stored permanently
- The ZelfProof enables offline verification capabilities

## Related Endpoints

- [Create Account](./create-account) - Create a new client account
- [Verify Account](./verify-account) - Verify account existence
- [Update Account](./update-account) - Update account information
- [Delete Account](./delete-account) - Delete account