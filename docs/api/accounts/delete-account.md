---
id: delete-account
title: Delete Account
sidebar_label: Delete Account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
DELETE /api/clients
```

## Description

Permanently delete a client account and all associated data. This endpoint requires authentication via JWT token and biometric verification to ensure only the account owner can delete their account. The deletion process removes the account from IPFS storage and returns information about the deleted files and account data.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `accountEmail` | string | Yes | Email address of the account to delete |
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
curl -X DELETE "https://api.zelf.world/api/clients" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "accountEmail": "client@example.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "your_master_password"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const deleteData = {
  accountEmail: "client@example.com",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "your_master_password"
};

try {
  const response = await axios.delete('https://api.zelf.world/api/clients', {
    headers: {
      'Origin': 'https://yourdomain.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json'
    },
    data: deleteData
  });
  
  console.log('Account deleted successfully:', response.data);
} catch (error) {
  console.error('Delete failed:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

delete_data = {
    "accountEmail": "client@example.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "your_master_password"
}

headers = {
    "Origin": "https://yourdomain.com",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json"
}

try:
    response = requests.delete(
        "https://api.zelf.world/api/clients",
        json=delete_data,
        headers=headers
    )
    response.raise_for_status()
    print("Account deleted successfully:", response.json())
except requests.exceptions.RequestException as e:
    print("Delete failed:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$deleteData = [
    'accountEmail' => 'client@example.com',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'your_master_password'
];

$headers = [
    'Origin: https://yourdomain.com',
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($deleteData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Account deleted successfully: " . $response;
} else {
    echo "Delete failed: " . $response;
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
    let delete_data = json!({
        "accountEmail": "client@example.com",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "your_master_password"
    });

    let client = reqwest::Client::new();
    let response = client
        .delete("https://api.zelf.world/api/clients")
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        .header("Content-Type", "application/json")
        .json(&delete_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Account deleted successfully: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Delete failed: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="success" label="200 OK - Account Deleted Successfully">

```json
{
  "data": {
    "message": "Client deleted successfully",
    "deletedFiles": [
      "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e"
    ],
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "client@example.com.account",
      "publicData": {
        "accountEmail": "client@example.com",
        "accountPhone": "5551234567",
        "accountCompany": "Test Company",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "name": "Test Client"
      }
    }
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
| `data.message` | string | Success message confirming account deletion |
| `data.deletedFiles` | array | Array of IPFS hashes that were unpinned/deleted |
| `data.zelfAccount.url` | string | IPFS URL where the account data was stored |
| `data.zelfAccount.cid` | string | Content identifier for the deleted account |
| `data.zelfAccount.ipfsHash` | string | IPFS hash of the deleted account data |
| `data.zelfAccount.pinned` | boolean | Whether the account was pinned in IPFS |
| `data.zelfAccount.web3` | boolean | Whether the account supported Web3 features |
| `data.zelfAccount.name` | string | Account filename that was deleted |
| `data.zelfAccount.publicData.accountEmail` | string | Deleted client's email address |
| `data.zelfAccount.publicData.accountPhone` | string | Deleted client's phone number |
| `data.zelfAccount.publicData.accountCompany` | string | Deleted client's company name |
| `data.zelfAccount.publicData.accountCountryCode` | string | Deleted client's country code |
| `data.zelfAccount.publicData.accountType` | string | Type of account (always "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Subscription tier (e.g., "free") |
| `data.zelfAccount.publicData.name` | string | Deleted client's display name |

## Authentication Requirements

- **JWT Token**: Must provide a valid Bearer token in the Authorization header
- **Biometric Verification**: Face image required for identity verification
- **Master Password**: Required for account decryption and verification
- **Owner Verification**: Only the account owner can delete their account
- **Account Email**: Must specify the exact email of the account to delete

## Security Features

- **Biometric Verification**: Face recognition ensures only the account owner can delete
- **Master Password**: Additional security layer for account decryption
- **JWT Authentication**: Secure token-based authentication
- **IPFS Cleanup**: Automatic unpinning of account data from IPFS
- **Owner Validation**: Verifies the requesting user owns the account being deleted

## Error Handling

| Status Code | Description | Common Causes |
|-------------|-------------|---------------|
| 401 | Unauthorized | Missing or invalid Authorization header |
| 404 | Not Found | Client account does not exist |
| 500 | Internal Server Error | Invalid password or server-side processing error |

## Deletion Process

1. **Authentication**: Verify JWT token and biometric data
2. **Account Lookup**: Find the account by email address
3. **Owner Verification**: Confirm the requesting user owns the account
4. **Password Validation**: Verify master password for account decryption
5. **IPFS Cleanup**: Unpin and remove account data from IPFS
6. **Response**: Return deletion confirmation with deleted file information

## Important Notes

- **Permanent Deletion**: This action cannot be undone
- **Data Removal**: All account data is permanently removed from IPFS
- **Biometric Security**: Face images must be provided as base64-encoded data URLs
- **Master Password**: Required for account decryption and verification
- **Owner Only**: Only the account owner can delete their account
- **IPFS Cleanup**: The system automatically handles IPFS unpinning

## Related Endpoints

- [Create Account](./create-account) - Create a new client account
- [Authenticate Account](./authenticate) - Authenticate with existing account
- [Update Account](./update-account) - Update account information
- [Verify Account](./verify-account) - Verify account existence