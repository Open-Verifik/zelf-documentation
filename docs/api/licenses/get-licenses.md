# Search Licenses

Search and retrieve licenses from the system.

## Endpoint

```
GET /api/license
```

## Description

This endpoint allows authenticated users to search for licenses in the system. It can return all licenses or filter by specific domain. The response includes detailed license information stored in IPFS, including configuration data, ownership details, and metadata.

## Authentication

This endpoint requires authentication via JWT token. You must first authenticate using the `/api/clients/auth` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | No | Filter licenses by specific domain name (must match pattern: `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$`) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": [
    {
      "id": "01998e08-f623-797e-bbd5-55870070b2b8",
      "name": "testdomain1759024572176-updated.license",
      "cid": "bafkreiewzujw2522ppmsm6oqlftjkpcqwxeg7yuhmyk75u3vrjirms6t3q",
      "size": 3287,
      "number_of_files": 1,
      "mime_type": "application/json",
      "group_id": null,
      "created_at": "2025-09-28T01:56:16.247Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreiewzujw2522ppmsm6oqlftjkpcqwxeg7yuhmyk75u3vrjirms6t3q",
      "publicData": {
        "licenseDomain": "testdomain1759024572176-updated",
        "licenseOwner": "testclient_1759024569820_q6pokd@example.com",
        "licenseSubscriptionId": "free",
        "type": "license"
      }
    },
    {
      "id": "01998778-469b-7bb1-8d96-a2bced86503c",
      "name": "zelf.license",
      "cid": "bafkreiebbvapfj246fv6hirfwv6g4z5z7p6op7jfsyj65gdfxabm6kq55a",
      "size": 5021,
      "number_of_files": 1,
      "mime_type": "text/plain; charset=UTF-8",
      "group_id": null,
      "created_at": "2025-09-26T19:20:30.854Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreiebbvapfj246fv6hirfwv6g4z5z7p6op7jfsyj65gdfxabm6kq55a",
      "publicData": {
        "licenseDomain": "zelf",
        "licenseOwner": "miguel@zelf.world",
        "licenseSubscriptionId": "free",
        "type": "license"
      }
    }
  ]
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
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Format incorrect: domain"
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
| `data` | array | Array of license objects |
| `data[].id` | string | Unique identifier for the license |
| `data[].name` | string | License file name |
| `data[].cid` | string | IPFS content identifier |
| `data[].size` | number | Size of the license data in bytes |
| `data[].number_of_files` | number | Number of files in the IPFS storage |
| `data[].mime_type` | string | MIME type of the license data |
| `data[].group_id` | string\|null | Group identifier (usually null) |
| `data[].created_at` | string | ISO timestamp when license was created |
| `data[].url` | string | IPFS URL for accessing license data |
| `data[].publicData` | object | License public data |
| `data[].publicData.licenseDomain` | string | Domain name for the license |
| `data[].publicData.licenseOwner` | string | Email of the license owner |
| `data[].publicData.licenseSubscriptionId` | string | Subscription type (always "free") |
| `data[].publicData.type` | string | License type (always "license") |

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

# Then search for licenses
curl -X GET "https://api.zelf.world/api/license" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"

# Search for specific domain
curl -X GET "https://api.zelf.world/api/license?domain=mydomain" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function searchLicenses() {
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

    // Then search for licenses
    const licensesResponse = await axios.get('https://api.zelf.world/api/license', {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('All Licenses:', licensesResponse.data);

    // Search for specific domain
    const domainResponse = await axios.get('https://api.zelf.world/api/license', {
      params: {
        domain: 'mydomain'
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Domain Licenses:', domainResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchLicenses();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def search_licenses():
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
    
    # Then search for licenses
    licenses_url = "https://api.zelf.world/api/license"
    licenses_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    licenses_response = requests.get(licenses_url, headers=licenses_headers)
    print("All Licenses:", licenses_response.json())
    
    # Search for specific domain
    domain_params = {"domain": "mydomain"}
    domain_response = requests.get(licenses_url, params=domain_params, headers=licenses_headers)
    print("Domain Licenses:", domain_response.json())

if __name__ == "__main__":
    search_licenses()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function searchLicenses() {
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
    
    // Then search for licenses
    $licensesUrl = 'https://api.zelf.world/api/license';
    
    $licensesOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $licensesContext = stream_context_create($licensesOptions);
    $licensesResponse = file_get_contents($licensesUrl, false, $licensesContext);
    $licensesResult = json_decode($licensesResponse, true);
    
    echo "All Licenses: " . json_encode($licensesResult, JSON_PRETTY_PRINT);
    
    // Search for specific domain
    $domainUrl = 'https://api.zelf.world/api/license?domain=mydomain';
    $domainResponse = file_get_contents($domainUrl, false, $licensesContext);
    $domainResult = json_decode($domainResponse, true);
    
    echo "Domain Licenses: " . json_encode($domainResult, JSON_PRETTY_PRINT);
}

searchLicenses();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn search_licenses() -> Result<(), Box<dyn std::error::Error>> {
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
    
    // Then search for licenses
    let licenses_url = "https://api.zelf.world/api/license";
    
    let licenses_response = client
        .get(licenses_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let licenses_result: Value = licenses_response.json().await?;
    println!("All Licenses: {}", serde_json::to_string_pretty(&licenses_result)?);
    
    // Search for specific domain
    let domain_url = "https://api.zelf.world/api/license?domain=mydomain";
    let domain_response = client
        .get(domain_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let domain_result: Value = domain_response.json().await?;
    println!("Domain Licenses: {}", serde_json::to_string_pretty(&domain_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- **No Pagination**: This endpoint returns all licenses directly in an array, without pagination
- **IPFS Integration**: License data is stored in IPFS and accessible via the `url` field
- **Domain Filtering**: Use the `domain` parameter to search for licenses by specific domain name
- **Simplified Response**: The response contains only basic license information (`publicData`), not the full `domainConfig` structure
- **Authentication Required**: Must be authenticated with a valid JWT token from `/api/clients/auth`
- **Domain Validation**: Domain parameter must match pattern `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$`
