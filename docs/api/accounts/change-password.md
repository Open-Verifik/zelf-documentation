---
id: change-password
title: Change Password
sidebar_label: Change Password
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
PUT /api/clients/sync/password
```

## Description

Change the master password for an existing client account. This endpoint allows clients to update their master password while maintaining the same biometric verification. The password change requires authentication via JWT token and biometric verification to ensure only the account owner can make changes.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `newPassword` | string | Yes | New master password for the account |
| `confirmPassword` | string | Yes | Confirmation of the new password (must match newPassword) |
| `faceBase64` | string | Yes | Base64 encoded face image for biometric verification |
| `masterPassword` | string | Yes | Current master password for account decryption and verification |

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
curl -X PUT "https://api.zelf.world/api/clients/sync/password" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "newPassword": "NewSecurePassword123",
    "confirmPassword": "NewSecurePassword123",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "current_master_password"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const passwordData = {
  newPassword: "NewSecurePassword123",
  confirmPassword: "NewSecurePassword123",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "current_master_password"
};

try {
  const response = await axios.put('https://api.zelf.world/api/clients/sync/password', passwordData, {
    headers: {
      'Origin': 'https://yourdomain.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Password changed successfully:', response.data);
} catch (error) {
  console.error('Password change failed:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

password_data = {
    "newPassword": "NewSecurePassword123",
    "confirmPassword": "NewSecurePassword123",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "current_master_password"
}

headers = {
    "Origin": "https://yourdomain.com",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json"
}

try:
    response = requests.put(
        "https://api.zelf.world/api/clients/sync/password",
        json=password_data,
        headers=headers
    )
    response.raise_for_status()
    print("Password changed successfully:", response.json())
except requests.exceptions.RequestException as e:
    print("Password change failed:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$passwordData = [
    'newPassword' => 'NewSecurePassword123',
    'confirmPassword' => 'NewSecurePassword123',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'current_master_password'
];

$headers = [
    'Origin: https://yourdomain.com',
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients/sync/password');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($passwordData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Password changed successfully: " . $response;
} else {
    echo "Password change failed: " . $response;
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
    let password_data = json!({
        "newPassword": "NewSecurePassword123",
        "confirmPassword": "NewSecurePassword123",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "current_master_password"
    });

    let client = reqwest::Client::new();
    let response = client
        .put("https://api.zelf.world/api/clients/sync/password")
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        .header("Content-Type", "application/json")
        .json(&password_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Password changed successfully: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Password change failed: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="success" label="200 OK - Password Changed Successfully">

```json
{
  "data": {
    "message": "Password updated successfully",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "cid": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfs_pin_hash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfsHash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "pinned": true,
      "web3": true,
      "name": "client@example.com.account",
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
        "accountName": "Test Client"
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
  "validationError": "Missing required fields: newPassword, confirmPassword, faceBase64, masterPassword"
}
```

</TabItem>
<TabItem value="passwordmismatch" label="409 Conflict - Password Mismatch">

```json
{
  "message": "passwords_do_not_match",
  "code": "Conflict"
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
| `data.message` | string | Success message confirming password update |
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
| `data.zelfAccount.publicData.accountName` | string | Client's display name |
| `data.zelfProof` | string | Updated encrypted biometric proof with new password |

## Authentication Requirements

- **JWT Token**: Must provide a valid Bearer token in the Authorization header
- **Biometric Verification**: Face image required for identity verification
- **Current Master Password**: Required for account decryption and verification
- **Owner Verification**: Only the account owner can change their password

## Security Features

- **Biometric Verification**: Face recognition ensures only the account owner can change the password
- **Current Password Verification**: Must provide current master password for security
- **Password Confirmation**: New password must be confirmed to prevent typos
- **JWT Authentication**: Secure token-based authentication
- **IPFS Storage**: Decentralized storage of updated account data
- **Zero-Knowledge Proofs**: Updated ZelfProof with new password for privacy-preserving authentication

## Error Handling

| Status Code | Description | Common Causes |
|-------------|-------------|---------------|
| 401 | Unauthorized | Missing or invalid Authorization header |
| 404 | Not Found | Client account does not exist |
| 409 | Conflict | Validation errors, missing required fields, or password mismatch |
| 500 | Internal Server Error | Invalid current password or server-side processing error |

## Notes

- The account data is updated in IPFS with the new password and a new ZelfProof is generated
- Face images must be provided as base64-encoded data URLs
- Current master password is required for account decryption and verification
- New password and confirmation password must match exactly
- All biometric data is processed securely and never stored permanently
- The updated ZelfProof enables offline verification capabilities with the new password
- Only the account owner (verified via biometrics and current password) can change the password

## Related Endpoints

- [Create Account](./create-account) - Create a new client account
- [Authenticate Account](./authenticate) - Authenticate with existing account
- [Verify Account](./verify-account) - Verify account existence
- [Update Account](./update-account) - Update account information
- [Delete Account](./delete-account) - Delete account