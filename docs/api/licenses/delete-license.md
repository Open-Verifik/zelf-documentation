# Delete License

Delete an existing license with biometric verification.

## Endpoint

```
DELETE /api/license
```

## Description

This endpoint allows authenticated users to delete their existing license. The operation requires biometric verification using face data and master password. Once deleted, the license data is unpinned from IPFS and all associated permissions are revoked. This operation is irreversible and should be used with caution.

## Authentication

This endpoint requires authentication via JWT token. You must first authenticate using the `/api/clients/auth` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `faceBase64` | string | Yes | Base64-encoded face biometric data for authentication |
| `masterPassword` | string | No | Master password for additional security (can be empty string) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "success": true,
    "message": "License deleted successfully",
    "deletedFiles": [
      {
        "IpfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
        "Status": "unpinned"
      }
    ]
  }
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "code": "NotFound",
  "message": "license_not_found"
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
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Format incorrect: faceBase64"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "code": "InternalServerError",
  "message": "THE PROVIDED PASSWORD IS INVALID."
}
```

</TabItem>
</Tabs>

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Response data object |
| `data.success` | boolean | Whether the deletion was successful |
| `data.message` | string | Success message confirming license deletion |
| `data.deletedFiles` | array | Array of files that were unpinned from IPFS |
| `data.deletedFiles[].IpfsHash` | string | IPFS hash of the deleted file |
| `data.deletedFiles[].Status` | string | Status of the unpinning operation |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# First, authenticate to get JWT token
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "faceBase64": "your_face_base64_data"
  }'

# Then delete the license
curl -X DELETE "https://api.zelf.world/api/license" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "faceBase64": "your_face_base64_data",
    "masterPassword": "your_master_password"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function deleteLicense() {
  try {
    // First, authenticate
    const authResponse = await axios.post('https://api.zelf.world/api/clients/auth', {
      email: 'user@example.com',
      password: 'your_password',
      faceBase64: 'your_face_base64_data'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = authResponse.data.data.token;

    // Then delete the license
    const deleteResponse = await axios.delete('https://api.zelf.world/api/license', {
      data: {
        faceBase64: 'your_face_base64_data',
        masterPassword: 'your_master_password'
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('License deleted:', deleteResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

deleteLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def delete_license():
    # First, authenticate
    auth_url = "https://api.zelf.world/api/clients/auth"
    auth_data = {
        "email": "user@example.com",
        "password": "your_password",
        "faceBase64": "your_face_base64_data"
    }
    auth_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    auth_response = requests.post(auth_url, json=auth_data, headers=auth_headers)
    token = auth_response.json()["data"]["token"]
    
    # Then delete the license
    delete_url = "https://api.zelf.world/api/license"
    delete_data = {
        "faceBase64": "your_face_base64_data",
        "masterPassword": "your_master_password"
    }
    delete_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    delete_response = requests.delete(delete_url, json=delete_data, headers=delete_headers)
    print("License deleted:", delete_response.json())

if __name__ == "__main__":
    delete_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function deleteLicense() {
    // First, authenticate
    $authUrl = 'https://api.zelf.world/api/clients/auth';
    $authData = [
        'email' => 'user@example.com',
        'password' => 'your_password',
        'faceBase64' => 'your_face_base64_data'
    ];
    
    $authOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\n",
            'method' => 'POST',
            'content' => json_encode($authData)
        ]
    ];
    
    $authContext = stream_context_create($authOptions);
    $authResponse = file_get_contents($authUrl, false, $authContext);
    $authResult = json_decode($authResponse, true);
    $token = $authResult['data']['token'];
    
    // Then delete the license
    $deleteUrl = 'https://api.zelf.world/api/license';
    $deleteData = [
        'faceBase64' => 'your_face_base64_data',
        'masterPassword' => 'your_master_password'
    ];
    
    $deleteOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'DELETE',
            'content' => json_encode($deleteData)
        ]
    ];
    
    $deleteContext = stream_context_create($deleteOptions);
    $deleteResponse = file_get_contents($deleteUrl, false, $deleteContext);
    $deleteResult = json_decode($deleteResponse, true);
    
    echo "License deleted: " . json_encode($deleteResult, JSON_PRETTY_PRINT);
}

deleteLicense();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn delete_license() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // First, authenticate
    let auth_url = "https://api.zelf.world/api/clients/auth";
    let auth_data = json!({
        "email": "user@example.com",
        "password": "your_password",
        "faceBase64": "your_face_base64_data"
    });
    
    let auth_response = client
        .post(auth_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .json(&auth_data)
        .send()
        .await?;
    
    let auth_result: Value = auth_response.json().await?;
    let token = auth_result["data"]["token"].as_str().unwrap();
    
    // Then delete the license
    let delete_url = "https://api.zelf.world/api/license";
    let delete_data = json!({
        "faceBase64": "your_face_base64_data",
        "masterPassword": "your_master_password"
    });
    
    let delete_response = client
        .delete(delete_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&delete_data)
        .send()
        .await?;
    
    let delete_result: Value = delete_response.json().await?;
    println!("License deleted: {}", serde_json::to_string_pretty(&delete_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Error Handling

### Common Error Scenarios

1. **No License Found (404)**: The user doesn't have an existing license to delete
2. **Invalid Credentials (500)**: The provided master password is incorrect
3. **Missing Authentication (401)**: No valid JWT token provided
4. **Validation Error (409)**: Invalid faceBase64 format or missing required fields

### Best Practices

- Always verify the user has an existing license before attempting deletion
- Ensure biometric data (`faceBase64`) is properly encoded
- Handle the irreversible nature of license deletion in your UI
- Consider implementing confirmation dialogs for license deletion

## Notes

- **Biometric Verification**: License deletion requires biometric verification using `faceBase64` data
- **IPFS Cleanup**: Deleted license data is automatically unpinned from IPFS
- **Irreversible Operation**: Once deleted, the license cannot be recovered
- **Owner Verification**: Only the license owner can delete their own license
- **Master Password**: Required for additional security verification