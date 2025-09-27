---
id: update-account
title: Update Account
sidebar_label: Update Account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
PUT /api/clients/sync
```

## Description

Update an existing client account with new information. This endpoint allows clients to modify their account details such as name, language, and other profile information. The update requires authentication via JWT token and biometric verification to ensure only the account owner can make changes.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Updated display name for the client |
| `language` | string | No | Language preference (e.g., "en", "es") |
| `faceBase64` | string | Yes | Base64 encoded face image for biometric verification |
| `masterPassword` | string | Yes | Master password for account decryption and verification |

## Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Origin` | Yes | Origin header for CORS validation |
| `Authorization` | Yes | Bearer token for authentication (JWT) |
| `Content-Type` | Yes | Must be `application/json` |

## Request Examples

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl -X PUT "https://api.zelf.world/api/clients/sync" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Client Name",
    "language": "es",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "your_master_password"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const updateData = {
  name: "Updated Client Name",
  language: "es",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "your_master_password"
};

try {
  const response = await axios.put('https://api.zelf.world/api/clients/sync', updateData, {
    headers: {
      'Origin': 'https://yourdomain.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Account updated successfully:', response.data);
} catch (error) {
  console.error('Update failed:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

update_data = {
    "name": "Updated Client Name",
    "language": "es",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "your_master_password"
}

headers = {
    "Origin": "https://yourdomain.com",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json"
}

try:
    response = requests.put(
        "https://api.zelf.world/api/clients/sync",
        json=update_data,
        headers=headers
    )
    response.raise_for_status()
    print("Account updated successfully:", response.json())
except requests.exceptions.RequestException as e:
    print("Update failed:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$updateData = [
    'name' => 'Updated Client Name',
    'language' => 'es',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'your_master_password'
];

$headers = [
    'Origin: https://yourdomain.com',
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients/sync');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($updateData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Account updated successfully: " . $response;
} else {
    echo "Update failed: " . $response;
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
    let update_data = json!({
        "name": "Updated Client Name",
        "language": "es",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "your_master_password"
    });

    let client = reqwest::Client::new();
    let response = client
        .put("https://api.zelf.world/api/clients/sync")
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        .header("Content-Type", "application/json")
        .json(&update_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Account updated successfully: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Update failed: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="success" label="200 OK - Account Updated Successfully">

```json
{
  "data": {
    "message": "Account updated successfully",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "cid": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfs_pin_hash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfsHash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "pinned": true,
      "web3": true,
      "name": "updated_client@example.com.account",
      "created_at": "2025-09-27T03:59:26.295Z",
      "group_id": null,
      "id": "01998953-5d53-7fa5-8891-0cfa37be61fb",
      "mime_type": "text/plain; charset=UTF-8",
      "number_of_files": 1,
      "size": 1538,
      "publicData": {
        "accountEmail": "client@example.com",
        "accountPhone": "5551234567",
        "accountCompany": "Test Company",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "accountName": "Updated Client Name"
      }
    },
    "zelfProof": "ApAdnrOCquTDdOIuOTv9Q1X7LTFt6Hsso000dxWSzfu38zCpNZ4e7eEJhc8Y1kJPgBvj1pamMVKROPklz/lIO0HJFsH3uXA530VYWiRoiFVfxzWLBmDFuvbLtmemOJEaZ+PI6qsEJp9Efv9x5FHV3vRYDRv3EsIiJuPATyZMwQ367aMWnZZ4tcdSD9ShJskd9pECkdTvh/GoGZWWQvmabmxOjDn9eCF4zpRwj4/asLihWrXGQZV8mU3HNVOYxwjwEDPzG1gNb9qlnoW6PMDIkoW3Z9MusD7U2llmj0kd6hqh+kHL66fmEUPNEHh01Hf3d1evdsAt0wifFL+LN46i0nN23tv9OWPjzjfXy7zqsyBh6Oqu1A3+7CoEZyGKD0FFT5nGelPn3IK8voFkgEhUqGbTBh1gaEXq5F+Mn3LliIxyGQXTFlr6oQ+OpRdXmwx8xfATdUAJA6wKSmE38OD4+OzqpPFp3/Yo9EeOjY8G3G91pqVpqRmQd3/CZMN8z7Pq/hOKD3v/0RwqC1Wk9CAp1S2r80P4Lofbn30yPIcZBoU+7wVdFkfLIGnmv/M5fMdr0v0ubHLSGl60TFnhor5lN7rm0PpZmGfXBgxDssY/GMINWvIlckfK5yCt/+4GtEMbuHa9X8IiYqW4z+Kt4ab73aoVxSK8dtaHTG3BXT4/NF/DJbVTRQnBoEtSniZktysmvmFWxWFi3t5+HhQ5IOj0+GBy6Lzhl2bDkCfdtivVqlHXFjOpdrUY10hwU5++TXoTMeoWdCOSQ3iciHBfN78tOccGCa6oY3VHvH8s6qsTvZWYvC/f+7qIHvmRZdqmON6yGBlCvtU0XbcpC5huNMeMxi2dR5KrbFwlcjrK35pAHGgFymbLN0bHOxisNIhstlt2yYxTQyrlJ3ZKuVKfI8tPU+fs9naMoP8ZcdhRcW99w/tENXYh61GPMKu9Q2oARcB6CP9Qs+DQxMN3BU+xbGZIva7wHoRg+aIVOAqoD1W5572I2U8sYpeNgd6TTbDpttMb0C5wdCGuRtYnbfQgqEY+TaBJhGIr7rIJEATimr2oeGwUjzHsOF1YI5gMf1Bxcz9vsdrT2k+5X7JKTOFs0jr0pfakWlgowaUtFFhzVOKSrGY+0y3YYEKJ+tkXPvi2Hz6iB8jUxKZ3xLpkfk1Mm7F0qCRYmzmlhCouvDDTKFviXDM2agGnXCIFJ8llM4KgvXUUbK5omK5TxFcrxtFqjdLurbO9V+xAhg=="
  }
}
```

</TabItem>
<TabItem value="unauthorized" label="401 Unauthorized - Missing Authorization">

```json
{
  "error": "Protected resource, use Authorization header to get access"
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
  "validationError": "Missing required fields: faceBase64, masterPassword"
}
```

</TabItem>
<TabItem value="invalidpassword" label="500 Internal Server Error - Invalid Password">

```json
{
  "code": "InternalServerError",
  "message": "THE PROVIDED PASSWORD IS INVALID."
}
```

</TabItem>
</Tabs>

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.message` | string | Success message confirming account update |
| `data.zelfAccount.url` | string | IPFS URL where the updated account data is stored |
| `data.zelfAccount.cid` | string | Content identifier for the IPFS-stored account |
| `data.zelfAccount.ipfsHash` | string | IPFS hash of the updated account data |
| `data.zelfAccount.pinned` | boolean | Whether the account is pinned in IPFS |
| `data.zelfAccount.web3` | boolean | Whether the account supports Web3 features |
| `data.zelfAccount.name` | string | Account filename in IPFS |
| `data.zelfAccount.created_at` | string | Timestamp when the account was created |
| `data.zelfAccount.id` | string | Unique identifier for the account |
| `data.zelfAccount.size` | number | Size of the stored account data in bytes |
| `data.zelfAccount.publicData.accountEmail` | string | Client's email address |
| `data.zelfAccount.publicData.accountPhone` | string | Client's phone number |
| `data.zelfAccount.publicData.accountCompany` | string | Client's company name |
| `data.zelfAccount.publicData.accountCountryCode` | string | Client's country code |
| `data.zelfAccount.publicData.accountType` | string | Type of account (always "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Subscription tier (e.g., "free") |
| `data.zelfAccount.publicData.accountName` | string | Client's updated display name |
| `data.zelfProof` | string | Updated encrypted biometric proof |

## Authentication Requirements

- **JWT Token**: Must provide a valid Bearer token in the Authorization header
- **Biometric Verification**: Face image required for identity verification
- **Master Password**: Required for account decryption and verification
- **Owner Verification**: Only the account owner can update their information

## Security Features

- **Biometric Verification**: Face recognition ensures only the account owner can make updates
- **Master Password**: Additional security layer for account decryption
- **JWT Authentication**: Secure token-based authentication
- **IPFS Storage**: Decentralized storage of updated account data
- **Zero-Knowledge Proofs**: Updated ZelfProof for privacy-preserving authentication

## Error Handling

| Status Code | Description | Common Causes |
|-------------|-------------|---------------|
| 401 | Unauthorized | Missing or invalid Authorization header |
| 404 | Not Found | Client account does not exist |
| 409 | Conflict | Validation errors or missing required fields |
| 500 | Internal Server Error | Invalid password or server-side processing error |

## Notes

- The account data is updated in IPFS and a new ZelfProof is generated
- Face images must be provided as base64-encoded data URLs
- Master password is required for account decryption and verification
- All biometric data is processed securely and never stored permanently
- The updated ZelfProof enables offline verification capabilities
- Only the account owner (verified via biometrics and password) can update the account

## Related Endpoints

- [Create Account](./create-account) - Create a new client account
- [Authenticate Account](./authenticate) - Authenticate with existing account
- [Verify Account](./verify-account) - Verify account existence
- [Delete Account](./delete-account) - Delete account