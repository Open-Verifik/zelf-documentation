# Verify Account

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Verify if a client account exists in the Zelf system and retrieve account information. This endpoint allows you to check account availability by email or phone number, or retrieve all accounts with pagination.

## Endpoint

```
GET /api/clients
```

## Description

This endpoint allows you to verify if a client account exists and retrieve account information. You can search by email address or phone number, or retrieve all accounts with pagination. Account data is stored on IPFS and includes public account information.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No* | Email address to verify (must be valid email format) |
| `countryCode` | string | No* | Country code (e.g., "+1", "+44") |
| `phone` | string | No* | Phone number to verify |

**Note**: Either `email` OR (`countryCode` + `phone`) must be provided. If no parameters are provided, returns all accounts with pagination.

## Response

<Tabs>
<TabItem value="200-found" label="200 OK - Account Found" default>

```json
{
  "data": {
    "id": "019983ff-99c0-78d0-ad25-0d7226626881",
    "name": "testclient_1758856189255_o78kg@example.com.account",
    "cid": "bafkreifb2bfqp6s57eaq4qf5wnyhvrw7ixq2x7lx2gca2txt665bl6iggy",
    "size": 1534,
    "number_of_files": 1,
    "mime_type": "text/plain; charset=UTF-8",
    "group_id": null,
    "created_at": "2025-09-26T03:09:50.704Z",
    "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreifb2bfqp6s57eaq4qf5wnyhvrw7ixq2x7lx2gca2txt665bl6iggy",
    "publicData": {
      "accountCompany": "Test Company",
      "accountCountryCode": "+1",
      "accountEmail": "testclient_1758856189255_o78kg@example.com",
      "accountPhone": "5556189255",
      "accountSubscriptionId": "free",
      "accountType": "client_account"
    }
  }
}
```

</TabItem>

<TabItem value="200-not-found" label="200 OK - Account Not Found">

```json
{
  "data": null
}
```

</TabItem>

<TabItem value="200-all" label="200 OK - All Accounts">

```json
{
  "data": {
    "data": [
      {
        "id": "019983ff-99c0-78d0-ad25-0d7226626881",
        "name": "testclient_1758856189255_o78kg@example.com.account",
        "cid": "bafkreifb2bfqp6s57eaq4qf5wnyhvrw7ixq2x7lx2gca2txt665bl6iggy",
        "size": 1534,
        "number_of_files": 1,
        "mime_type": "text/plain; charset=UTF-8",
        "group_id": null,
        "created_at": "2025-09-26T03:09:50.704Z",
        "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreifb2bfqp6s57eaq4qf5wnyhvrw7ixq2x7lx2gca2txt665bl6iggy",
        "publicData": {
          "accountCompany": "Test Company",
          "accountCountryCode": "+1",
          "accountEmail": "testclient_1758856189255_o78kg@example.com",
          "accountPhone": "5556189255",
          "accountSubscriptionId": "free",
          "accountType": "client_account"
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 10,
      "totalPages": 1,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

</TabItem>
</Tabs>

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | object\|null | Account data object or null if not found |
| `data.id` | string | Unique account identifier |
| `data.name` | string | Account name (email-based) |
| `data.cid` | string | IPFS Content Identifier |
| `data.size` | number | Account data size in bytes |
| `data.number_of_files` | number | Number of files in the account |
| `data.mime_type` | string | MIME type of the account data |
| `data.group_id` | string\|null | Group identifier (if applicable) |
| `data.created_at` | string | Account creation timestamp (ISO 8601) |
| `data.url` | string | IPFS URL for accessing account data |
| `data.publicData` | object | Public account information |
| `data.publicData.accountEmail` | string | Account email address |
| `data.publicData.accountPhone` | string | Account phone number |
| `data.publicData.accountCompany` | string | Company name |
| `data.publicData.accountCountryCode` | string | Country code |
| `data.publicData.accountSubscriptionId` | string | Subscription type (e.g., "free") |
| `data.publicData.accountType` | string | Account type (e.g., "client_account") |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Verify by email
curl -X GET "https://api.zelf.world/api/clients?email=user@example.com" \
  -H "Content-Type: application/json"

# Verify by phone
curl -X GET "https://api.zelf.world/api/clients?countryCode=%2B1&phone=5551234567" \
  -H "Content-Type: application/json"

# Get all accounts
curl -X GET "https://api.zelf.world/api/clients" \
  -H "Content-Type: application/json"
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

// Verify by email
async function verifyByEmail(email) {
  try {
    const response = await axios.get(`https://api.zelf.world/api/clients`, {
      params: { email }
    });
    
    if (response.data.data) {
      console.log('Account found:', response.data.data.publicData);
      return response.data.data;
    } else {
      console.log('Account not found');
      return null;
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Verify by phone
async function verifyByPhone(countryCode, phone) {
  try {
    const response = await axios.get(`https://api.zelf.world/api/clients`, {
      params: { countryCode, phone }
    });
    
    if (response.data.data) {
      console.log('Account found:', response.data.data.publicData);
      return response.data.data;
    } else {
      console.log('Account not found');
      return null;
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Get all accounts with pagination
async function getAllAccounts(page = 1, limit = 10) {
  try {
    const response = await axios.get(`https://api.zelf.world/api/clients`, {
      params: { page, limit }
    });
    
    console.log('Accounts:', response.data.data.data);
    console.log('Pagination:', response.data.data.pagination);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

def verify_by_email(email):
    """Verify account by email address"""
    try:
        response = requests.get(
            "https://api.zelf.world/api/clients",
            params={"email": email}
        )
        response.raise_for_status()
        
        if response.json()["data"]:
            print("Account found:", response.json()["data"]["publicData"])
            return response.json()["data"]
        else:
            print("Account not found")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

def verify_by_phone(country_code, phone):
    """Verify account by phone number"""
    try:
        response = requests.get(
            "https://api.zelf.world/api/clients",
            params={"countryCode": country_code, "phone": phone}
        )
        response.raise_for_status()
        
        if response.json()["data"]:
            print("Account found:", response.json()["data"]["publicData"])
            return response.json()["data"]
        else:
            print("Account not found")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

def get_all_accounts(page=1, limit=10):
    """Get all accounts with pagination"""
    try:
        response = requests.get(
            "https://api.zelf.world/api/clients",
            params={"page": page, "limit": limit}
        )
        response.raise_for_status()
        
        data = response.json()["data"]
        print("Accounts:", data["data"])
        print("Pagination:", data["pagination"])
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php

function verifyByEmail($email) {
    $url = "https://api.zelf.world/api/clients?" . http_build_query(['email' => $email]);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200) {
        $data = json_decode($response, true);
        if ($data['data']) {
            echo "Account found: " . json_encode($data['data']['publicData']) . "\n";
            return $data['data'];
        } else {
            echo "Account not found\n";
            return null;
        }
    } else {
        echo "Error: HTTP $httpCode\n";
        return null;
    }
}

function verifyByPhone($countryCode, $phone) {
    $url = "https://api.zelf.world/api/clients?" . http_build_query([
        'countryCode' => $countryCode,
        'phone' => $phone
    ]);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200) {
        $data = json_decode($response, true);
        if ($data['data']) {
            echo "Account found: " . json_encode($data['data']['publicData']) . "\n";
            return $data['data'];
        } else {
            echo "Account not found\n";
            return null;
        }
    } else {
        echo "Error: HTTP $httpCode\n";
        return null;
    }
}

function getAllAccounts($page = 1, $limit = 10) {
    $url = "https://api.zelf.world/api/clients?" . http_build_query([
        'page' => $page,
        'limit' => $limit
    ]);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200) {
        $data = json_decode($response, true);
        echo "Accounts: " . json_encode($data['data']['data']) . "\n";
        echo "Pagination: " . json_encode($data['data']['pagination']) . "\n";
        return $data['data'];
    } else {
        echo "Error: HTTP $httpCode\n";
        return null;
    }
}
?>
```

</TabItem>

<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // Verify by email
    let email = "user@example.com";
    let url = format!("https://api.zelf.world/api/clients?email={}", email);
    let response = client.get(&url).send().await?;
    
    if response.status().is_success() {
        let data: serde_json::Value = response.json().await?;
        if data["data"].is_null() {
            println!("Account not found");
        } else {
            println!("Account found: {:?}", data["data"]["publicData"]);
        }
    }
    
    // Verify by phone
    let country_code = "+1";
    let phone = "5551234567";
    let url = format!("https://api.zelf.world/api/clients?countryCode={}&phone={}", 
                     country_code, phone);
    let response = client.get(&url).send().await?;
    
    if response.status().is_success() {
        let data: serde_json::Value = response.json().await?;
        if data["data"].is_null() {
            println!("Account not found");
        } else {
            println!("Account found: {:?}", data["data"]["publicData"]);
        }
    }
    
    // Get all accounts
    let url = "https://api.zelf.world/api/clients";
    let response = client.get(url).send().await?;
    
    if response.status().is_success() {
        let data: serde_json::Value = response.json().await?;
        println!("Accounts: {:?}", data["data"]["data"]);
        println!("Pagination: {:?}", data["data"]["pagination"]);
    }
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- **IPFS Integration**: Account data is stored on IPFS (InterPlanetary File System) for decentralized storage
- **Email Validation**: Email addresses are validated using Joi email validation
- **Phone Format**: Phone numbers should be provided without spaces or special characters
- **Country Codes**: Use international format (e.g., "+1" for US, "+44" for UK)
- **Pagination**: When no parameters are provided, results are paginated with default limit of 10
- **Response Structure**: All responses wrap data in a `data` property for consistency
- **Account Types**: Currently supports "client_account" type
- **Subscription Types**: Currently supports "free" subscription tier
- **Timestamps**: All timestamps are in ISO 8601 format (UTC)
- **MIME Types**: Account data can be stored as "text/plain" or "application/json"