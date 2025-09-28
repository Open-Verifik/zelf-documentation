# Create License

Create or update a license for a domain with comprehensive configuration settings.

## Endpoint

```
POST /api/license
```

## Description

This endpoint allows authenticated users to create a new license or update an existing one for a specific domain. The license contains detailed configuration for domain management, including features, limits, validation rules, storage settings, payment configurations, and metadata. The system automatically detects if a license already exists and updates it accordingly.

## Authentication

This endpoint requires authentication via JWT token. You must first authenticate using the `/api/clients/auth` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name for the license (must match pattern: `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$`) |
| `faceBase64` | string | Yes | Base64-encoded face biometric data for authentication |
| `masterPassword` | string | No | Master password for additional security (can be empty string) |
| `os` | string | No | Operating system type ("DESKTOP", "ANDROID", "IOS") |
| `domainConfig` | object | Yes | Comprehensive domain configuration object |

### DomainConfig Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Display name for the domain |
| `holdSuffix` | string | No | Suffix for hold domains (default: ".hold") |
| `status` | string | No | Domain status ("active", "inactive", "suspended") |
| `description` | string | No | Description of the domain |
| `limits` | object | Yes | Resource limits configuration |
| `features` | array | Yes | Array of enabled features |
| `validation` | object | Yes | Domain validation rules |
| `storage` | object | Yes | Storage configuration |
| `tagPaymentSettings` | object | Yes | Payment settings for tags |
| `metadata` | object | No | Additional metadata |

#### Limits Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tags` | number | Yes | Maximum number of tags allowed |
| `zelfkeys` | number | Yes | Maximum number of zelfkeys allowed |

#### Features Array

Each feature object contains:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Feature display name |
| `code` | string | Yes | Feature code identifier |
| `description` | string | Yes | Feature description |
| `enabled` | boolean | Yes | Whether feature is enabled |

#### Validation Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `minLength` | number | Yes | Minimum domain name length |
| `maxLength` | number | Yes | Maximum domain name length |
| `allowedChars` | object | No | Allowed character patterns |
| `reserved` | array | No | Reserved domain names |
| `customRules` | array | No | Custom validation rules |

#### Storage Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `keyPrefix` | string | Yes | Prefix for storage keys |
| `ipfsEnabled` | boolean | No | Enable IPFS storage (default: true) |
| `arweaveEnabled` | boolean | No | Enable Arweave storage (default: false) |
| `walrusEnabled` | boolean | No | Enable Walrus storage (default: false) |

#### TagPaymentSettings Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `methods` | array | Yes | Payment methods ("coinbase", "crypto", "stripe", "paypal") |
| `currencies` | array | Yes | Supported currencies ("BTC", "ETH", "SOL", "USD", "EUR", "GBP") |
| `whitelist` | object | No | Payment whitelist configuration |
| `pricingTable` | object | Yes | Pricing configuration for different tag lengths |

#### Metadata Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `launchDate` | string | No | ISO date string for launch date |
| `version` | string | No | Version number |
| `documentation` | string | No | Documentation URL |
| `support` | string | No | Support level ("standard", "premium", "enterprise") |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "ipfs": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "testdomain1759017343950.account",
      "size": 1511,
      "number_of_files": 1,
      "mime_type": "text/plain; charset=UTF-8",
      "group_id": null,
      "created_at": "2025-09-27T23:55:45.131Z"
    },
    "name": "testdomain1759017343950",
    "holdSuffix": ".hold",
    "status": "active",
    "description": "Test domain for license creation",
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
      },
      {
        "name": "Zelf Keys",
        "code": "zelfkeys",
        "description": "Zelf Keys: Passwords, Notes, Credit Cards, etc.",
        "enabled": true
      }
    ],
    "validation": {
      "minLength": 3,
      "maxLength": 50,
      "allowedChars": {},
      "reserved": ["www", "api", "admin", "support", "help"],
      "customRules": []
    },
    "storage": {
      "keyPrefix": "testName",
      "ipfsEnabled": true,
      "arweaveEnabled": false,
      "walrusEnabled": false
    },
    "tagPaymentSettings": {
      "methods": ["coinbase", "crypto", "stripe"],
      "currencies": ["BTC", "ETH", "SOL", "USD"],
      "whitelist": {},
      "pricingTable": {
        "1": {
          "1": 240,
          "2": 432,
          "3": 612,
          "4": 768,
          "5": 900,
          "lifetime": 3600
        },
        "2": {
          "1": 120,
          "2": 216,
          "3": 306,
          "4": 384,
          "5": 450,
          "lifetime": 1800
        }
      }
    },
    "metadata": {
      "launchDate": "2025-01-01",
      "version": "1.0.0",
      "documentation": "https://docs.testdomain.com",
      "support": "standard"
    },
    "subscriptionId": "free",
    "previousDomain": "",
    "domain": "testdomain1759017343950",
    "owner": "testclient_1759017341663_0lxyth@example.com",
    "zelfProof": "Aph3wt3bkFwAA3XxFNqnI28/NDqYjzMqY+HG98PCYDEEEFw1BJDCqJdIczE7x9GV+0inoxg9CORXRBax8DqgAqq6LNztctKhBbTzX4OhbQn5BwQOx/r4BUrTJwn5UyZ/E4qcGitq3RD5o8sI7DJT6DAXQt7z8Bz8IL2tlH4Wy2RVgMLrwieMhmdF3MFlYhg6bR4R22xcm7obK7TrpGEujRAGHN+Lv48ryfUHPlZh9H+uaNFjyOF8qwVHirwtv1qTF4jOQ+kxaOaV0sy3MgOgznX5WlX5DiEBPtlI+ZpNrFpJJCRQCtvvyJPAJxWstRCQbZM/76w3Mw/wzKNXnWbrHX4xFUbq+afTJPACVwBVa1Sc3f7WypV5hLwQDMsJdq+csXLBFuabYWFPBABXxt6NfKRj5aQGv+e+bfDKjxrqdhqkyi7DR6i41AsfwPtbuPmm8qHUa9TgLLfFobR2I2IxQAZMGlFweOn2M2hAX1jII6tvoU8Yj124bJ+tN7V4jsteBRqZcSbUtSm8m4RuIgU/02BlQ5Bi+uwblLhJTd+z211+qCx3f329JcHZWQzcvlGWdw5Frxwh9YoztfDgTJxWlyL3MYlnhMKHi8zFIpzm5QD90JmzUqm8YcBMoi8KasfSPfEOAyWcav4iWkVv5IKgkU5et47G4XTkeD1GYjT9Fr9UTDaeapFinQBkr/WX5oD4e9Eh3/2ROJabnvkTZoJCwlNffKNmY5evsnpB9a9bVyFkmW5zU8U9Ihdgk0ClsrN5x8lzrPi4lhFY7pPpi8Y3MJcJ4skrhvmr9zsF3Fg6br9aBMHJ/ipw9ZNAJEl7bsDn2t0LMDg5frHE+l6FuAYEY7qe9+KZUoROs+SdQvGtjlTZok66eZVA9IjYqvMJdWwaBPmbCqFMdgv0uqBfhtrTmo6oC2BP6abJmI5WZndep4kyQLOEnD9sHX8sAtWBifynbbyZOrkNboyyJCqlXWIU2drYEQGgpyazM6OM/jZem0WOvB64cPHanmiNWUQsa6G1OhtnBu1UmBjc/1dPR5hVyZ6pJoE+E08vYpSxrq29DavroQg3WztkpvLzfytHLgYy0U4c2i240Czw4LnlZlfGEEH8TX+/PHMopadGXvR6aolQLRN5WFDf4TryzPRvC6O7Ab31TKS1rSgeUtuHEOa9yyC/zlKtAk/xtDnzpdNCnA5MQw2NaNhEnoerorEZ20FfmZ6EWFn+2Am7EoOozxTwieNW1BiAgg==",
    "expiresAt": "2026-09-27T23:55:45.131Z"
  }
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
| `data` | object | License data object |
| `data.ipfs` | object | IPFS storage information |
| `data.ipfs.url` | string | IPFS URL for accessing the license data |
| `data.ipfs.cid` | string | Content identifier for IPFS |
| `data.ipfs.pinned` | boolean | Whether the data is pinned in IPFS |
| `data.ipfs.web3` | boolean | Whether Web3 storage is enabled |
| `data.name` | string | Domain display name |
| `data.domain` | string | Domain name |
| `data.owner` | string | Email of the license owner |
| `data.subscriptionId` | string | Subscription type (always "free") |
| `data.expiresAt` | string | ISO timestamp when license expires |
| `data.zelfProof` | string | Encrypted ZelfProof for biometric verification |
| `data.limits` | object | Resource limits configuration |
| `data.features` | array | Array of enabled features |
| `data.validation` | object | Domain validation rules |
| `data.storage` | object | Storage configuration |
| `data.tagPaymentSettings` | object | Payment settings for tags |
| `data.metadata` | object | Additional metadata |

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

# Then create a license
curl -X POST "https://api.zelf.world/api/license" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "domain": "mydomain",
    "faceBase64": "your_face_base64_data",
    "masterPassword": "your_master_password",
    "domainConfig": {
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
      }
    }
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function createLicense() {
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

    // Then create a license
    const licenseResponse = await axios.post('https://api.zelf.world/api/license', {
      domain: 'mydomain',
      faceBase64: 'your_face_base64_data',
      masterPassword: 'your_master_password',
      domainConfig: {
        name: 'mydomain',
        holdSuffix: '.hold',
        status: 'active',
        description: 'My custom domain',
        limits: {
          tags: 1000,
          zelfkeys: 5000
        },
        features: [
          {
            name: 'Zelf Name System',
            code: 'zns',
            description: 'Encryptions, Decryptions, previews of ZelfProofs',
            enabled: true
          }
        ],
        validation: {
          minLength: 3,
          maxLength: 50,
          allowedChars: {},
          reserved: ['www', 'api', 'admin'],
          customRules: []
        },
        storage: {
          keyPrefix: 'mydomain',
          ipfsEnabled: true,
          arweaveEnabled: false,
          walrusEnabled: false
        },
        tagPaymentSettings: {
          methods: ['coinbase', 'crypto'],
          currencies: ['BTC', 'ETH'],
          whitelist: {},
          pricingTable: {
            1: {
              1: 240,
              2: 432,
              3: 612,
              4: 768,
              5: 900,
              lifetime: 3600
            }
          }
        },
        metadata: {
          version: '1.0.0',
          support: 'standard'
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('License created:', licenseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

createLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def create_license():
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
    
    # Then create a license
    license_url = "https://api.zelf.world/api/license"
    license_data = {
        "domain": "mydomain",
        "faceBase64": "your_face_base64_data",
        "masterPassword": "your_master_password",
        "domainConfig": {
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
                    "enabled": True
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
                "ipfsEnabled": True,
                "arweaveEnabled": False,
                "walrusEnabled": False
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
            }
        }
    }
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.post(license_url, json=license_data, headers=license_headers)
    print("License created:", license_response.json())

if __name__ == "__main__":
    create_license()
```

</TabItem>
</Tabs>

## Notes

- **Biometric Authentication**: All license operations require biometric verification using `faceBase64` data
- **Domain Validation**: Domain names must follow the pattern `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$` (alphanumeric with hyphens, no underscores)
- **IPFS Storage**: License data is automatically stored in IPFS for decentralized access
- **Update Behavior**: The same endpoint handles both creation and updates - the system automatically detects existing licenses
- **ZelfProof Integration**: Each license includes encrypted ZelfProof data for secure biometric verification
- **Expiration**: Licenses expire after 1 year from creation/update