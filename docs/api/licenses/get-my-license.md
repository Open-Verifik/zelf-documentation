# Get My License

Retrieve the current user's license information and account details.

## Endpoint

```
GET /api/license/my-license
```

## Description

This endpoint allows authenticated users to retrieve their own license information and account details. It returns both the user's license data (if they have one) and their account information. If the user doesn't have a license yet, the `myLicense` field will be `null`.

## Authentication

This endpoint requires authentication via JWT token. You must first authenticate using the `/api/clients/auth` endpoint to obtain a JWT token.

## Parameters

This endpoint does not require any parameters.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "myLicense": null,
    "zelfAccount": {
      "id": "01998c0c-9310-7b84-8369-97015053fd5a",
      "name": "cameron.jackson@business.org.account",
      "cid": "bafkreibeipyirz5hktcdlqp5qsa5pqdmivpyydntovhoyvyryryie5nzxi",
      "size": 1511,
      "number_of_files": 1,
      "mime_type": "text/plain; charset=UTF-8",
      "group_id": null,
      "created_at": "2025-09-27T16:40:58.684Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibeipyirz5hktcdlqp5qsa5pqdmivpyydntovhoyvyryryie5nzxi",
      "publicData": {
        "accountCompany": "Decentralized Systems",
        "accountCountryCode": "+590",
        "accountEmail": "cameron.jackson@business.org",
        "accountPhone": "6206506032",
        "accountSubscriptionId": "free",
        "accountType": "client_account"
      }
    }
  }
}
```

</TabItem>
<TabItem value="200" label="200 OK (With License)">

```json
{
  "data": {
    "myLicense": {
      "id": "license_id_example",
      "name": "mydomain.account",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "size": 1511,
      "number_of_files": 1,
      "mime_type": "text/plain; charset=UTF-8",
      "group_id": null,
      "created_at": "2025-09-27T16:40:58.684Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "publicData": {
        "name": "mydomain",
        "holdSuffix": ".hold",
        "status": "active",
        "description": "My custom domain",
        "limits": {
          "tags": 1000,
          "zelfkeys": 5000
        },
        "features": [
          {
            "name": "Zelf Name System",
            "code": "zns",
            "description": "Encryptions, Decryptions, previews of ZelfProofs",
            "enabled": true
          }
        ],
        "validation": {
          "minLength": 3,
          "maxLength": 50,
          "allowedChars": {},
          "reserved": ["www", "api", "admin"],
          "customRules": []
        },
        "storage": {
          "keyPrefix": "mydomain",
          "ipfsEnabled": true,
          "arweaveEnabled": false,
          "walrusEnabled": false
        },
        "tagPaymentSettings": {
          "methods": ["coinbase", "crypto"],
          "currencies": ["BTC", "ETH"],
          "whitelist": {},
          "pricingTable": {
            "1": {
              "1": 240,
              "2": 432,
              "3": 612,
              "4": 768,
              "5": 900,
              "lifetime": 3600
            }
          }
        },
        "metadata": {
          "version": "1.0.0",
          "support": "standard"
        },
        "subscriptionId": "free",
        "previousDomain": "",
        "domain": "mydomain",
        "owner": "cameron.jackson@business.org",
        "zelfProof": "encrypted_zelfproof_data",
        "expiresAt": "2026-09-27T16:40:58.684Z"
      }
    },
    "zelfAccount": {
      "id": "01998c0c-9310-7b84-8369-97015053fd5a",
      "name": "cameron.jackson@business.org.account",
      "cid": "bafkreibeipyirz5hktcdlqp5qsa5pqdmivpyydntovhoyvyryryie5nzxi",
      "size": 1511,
      "number_of_files": 1,
      "mime_type": "text/plain; charset=UTF-8",
      "group_id": null,
      "created_at": "2025-09-27T16:40:58.684Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibeipyirz5hktcdlqp5qsa5pqdmivpyydntovhoyvyryryie5nzxi",
      "publicData": {
        "accountCompany": "Decentralized Systems",
        "accountCountryCode": "+590",
        "accountEmail": "cameron.jackson@business.org",
        "accountPhone": "6206506032",
        "accountSubscriptionId": "free",
        "accountType": "client_account"
      }
    }
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
<TabItem value="404" label="404 Not Found">

```json
{
  "code": "NotFound",
  "message": "client_not_found"
}
```

</TabItem>
</Tabs>

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object | Response data object |
| `data.myLicense` | object\|null | User's license information (null if no license exists) |
| `data.myLicense.id` | string | Unique identifier for the license |
| `data.myLicense.name` | string | License file name |
| `data.myLicense.cid` | string | IPFS content identifier |
| `data.myLicense.url` | string | IPFS URL for accessing license data |
| `data.myLicense.publicData` | object | License configuration data |
| `data.myLicense.publicData.name` | string | Domain display name |
| `data.myLicense.publicData.domain` | string | Domain name |
| `data.myLicense.publicData.owner` | string | Email of the license owner |
| `data.myLicense.publicData.subscriptionId` | string | Subscription type (always "free") |
| `data.myLicense.publicData.expiresAt` | string | ISO timestamp when license expires |
| `data.myLicense.publicData.limits` | object | Resource limits configuration |
| `data.myLicense.publicData.features` | array | Array of enabled features |
| `data.myLicense.publicData.validation` | object | Domain validation rules |
| `data.myLicense.publicData.storage` | object | Storage configuration |
| `data.myLicense.publicData.tagPaymentSettings` | object | Payment settings for tags |
| `data.myLicense.publicData.metadata` | object | Additional metadata |
| `data.zelfAccount` | object | User's account information |
| `data.zelfAccount.id` | string | Unique identifier for the account |
| `data.zelfAccount.name` | string | Account file name |
| `data.zelfAccount.cid` | string | IPFS content identifier |
| `data.zelfAccount.url` | string | IPFS URL for accessing account data |
| `data.zelfAccount.publicData` | object | Account public data |
| `data.zelfAccount.publicData.accountEmail` | string | User's email address |
| `data.zelfAccount.publicData.accountPhone` | string | User's phone number |
| `data.zelfAccount.publicData.accountCompany` | string | User's company name |
| `data.zelfAccount.publicData.accountCountryCode` | string | User's country code |
| `data.zelfAccount.publicData.accountType` | string | Account type (always "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Subscription type (always "free") |

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

# Then get my license
curl -X GET "https://api.zelf.world/api/license/my-license" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function getMyLicense() {
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

    // Then get my license
    const licenseResponse = await axios.get('https://api.zelf.world/api/license/my-license', {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('My License:', licenseResponse.data);
    
    if (licenseResponse.data.data.myLicense) {
      console.log('License found:', licenseResponse.data.data.myLicense.publicData.name);
    } else {
      console.log('No license found for this user');
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getMyLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def get_my_license():
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
    
    # Then get my license
    license_url = "https://api.zelf.world/api/license/my-license"
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.get(license_url, headers=license_headers)
    result = license_response.json()
    
    print("My License:", result)
    
    if result["data"]["myLicense"]:
        print("License found:", result["data"]["myLicense"]["publicData"]["name"])
    else:
        print("No license found for this user")

if __name__ == "__main__":
    get_my_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function getMyLicense() {
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
    
    // Then get my license
    $licenseUrl = 'https://api.zelf.world/api/license/my-license';
    
    $licenseOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $licenseContext = stream_context_create($licenseOptions);
    $licenseResponse = file_get_contents($licenseUrl, false, $licenseContext);
    $licenseResult = json_decode($licenseResponse, true);
    
    echo "My License: " . json_encode($licenseResult, JSON_PRETTY_PRINT);
    
    if ($licenseResult['data']['myLicense']) {
        echo "License found: " . $licenseResult['data']['myLicense']['publicData']['name'];
    } else {
        echo "No license found for this user";
    }
}

getMyLicense();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn get_my_license() -> Result<(), Box<dyn std::error::Error>> {
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
    
    // Then get my license
    let license_url = "https://api.zelf.world/api/license/my-license";
    
    let license_response = client
        .get(license_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("My License: {}", serde_json::to_string_pretty(&license_result)?);
    
    if license_result["data"]["myLicense"].is_null() {
        println!("No license found for this user");
    } else {
        let license_name = license_result["data"]["myLicense"]["publicData"]["name"].as_str().unwrap();
        println!("License found: {}", license_name);
    }
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- **No Parameters Required**: This endpoint doesn't require any query parameters
- **License Status**: The `myLicense` field will be `null` if the user doesn't have a license yet
- **Account Information**: Always returns the user's account information in `zelfAccount`
- **IPFS Integration**: Both license and account data are stored in IPFS
- **Authentication Required**: Must be authenticated with a valid JWT token
- **No Biometric Verification**: This endpoint doesn't require biometric verification (unlike create/delete operations)