# Obtener Mi Licencia

Recuperar la información de licencia del usuario actual y detalles de la cuenta.

## Endpoint

```
GET /api/license/my-license
```

## Descripción

Este endpoint permite a los usuarios autenticados recuperar su propia información de licencia y detalles de la cuenta. Devuelve tanto los datos de licencia del usuario (si tienen uno) como su información de cuenta. Si el usuario aún no tiene una licencia, el campo `myLicense` será `null`.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes autenticarte usando el endpoint `/api/clients/auth` para obtener un token JWT.

## Parámetros

Este endpoint no requiere ningún parámetro.

## Respuesta

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
<TabItem value="200-license" label="200 OK (Con Licencia)">

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

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | object | Objeto de datos de respuesta |
| `data.myLicense` | object\|null | Información de licencia del usuario (null si no existe licencia) |
| `data.myLicense.id` | string | Identificador único para la licencia |
| `data.myLicense.name` | string | Nombre del archivo de licencia |
| `data.myLicense.cid` | string | Identificador de contenido IPFS |
| `data.myLicense.url` | string | URL IPFS para acceder a los datos de licencia |
| `data.myLicense.publicData` | object | Datos de configuración de licencia |
| `data.myLicense.publicData.name` | string | Nombre para mostrar del dominio |
| `data.myLicense.publicData.domain` | string | Nombre del dominio |
| `data.myLicense.publicData.owner` | string | Email del propietario de la licencia |
| `data.myLicense.publicData.subscriptionId` | string | Tipo de suscripción (siempre "free") |
| `data.myLicense.publicData.expiresAt` | string | Timestamp ISO cuando expira la licencia |
| `data.myLicense.publicData.limits` | object | Configuración de límites de recursos |
| `data.myLicense.publicData.features` | array | Array de características habilitadas |
| `data.myLicense.publicData.validation` | object | Reglas de validación del dominio |
| `data.myLicense.publicData.storage` | object | Configuración de almacenamiento |
| `data.myLicense.publicData.tagPaymentSettings` | object | Configuraciones de pago para etiquetas |
| `data.myLicense.publicData.metadata` | object | Metadatos adicionales |
| `data.zelfAccount` | object | Información de cuenta del usuario |
| `data.zelfAccount.id` | string | Identificador único para la cuenta |
| `data.zelfAccount.name` | string | Nombre del archivo de cuenta |
| `data.zelfAccount.cid` | string | Identificador de contenido IPFS |
| `data.zelfAccount.url` | string | URL IPFS para acceder a los datos de cuenta |
| `data.zelfAccount.publicData` | object | Datos públicos de la cuenta |
| `data.zelfAccount.publicData.accountEmail` | string | Dirección de email del usuario |
| `data.zelfAccount.publicData.accountPhone` | string | Número de teléfono del usuario |
| `data.zelfAccount.publicData.accountCompany` | string | Nombre de la empresa del usuario |
| `data.zelfAccount.publicData.accountCountryCode` | string | Código de país del usuario |
| `data.zelfAccount.publicData.accountType` | string | Tipo de cuenta (siempre "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Tipo de suscripción (siempre "free") |

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Primero, autenticarse para obtener el token JWT
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "faceBase64": "your_face_base64_data"
  }'

# Luego obtener mi licencia
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
    // Primero, autenticarse
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

    // Luego obtener mi licencia
    const licenseResponse = await axios.get('https://api.zelf.world/api/license/my-license', {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Mi Licencia:', licenseResponse.data);
    
    if (licenseResponse.data.data.myLicense) {
      console.log('Licencia encontrada:', licenseResponse.data.data.myLicense.publicData.name);
    } else {
      console.log('No se encontró licencia para este usuario');
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
    # Primero, autenticarse
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
    
    # Luego obtener mi licencia
    license_url = "https://api.zelf.world/api/license/my-license"
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.get(license_url, headers=license_headers)
    result = license_response.json()
    
    print("Mi Licencia:", result)
    
    if result["data"]["myLicense"]:
        print("Licencia encontrada:", result["data"]["myLicense"]["publicData"]["name"])
    else:
        print("No se encontró licencia para este usuario")

if __name__ == "__main__":
    get_my_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function getMyLicense() {
    // Primero, autenticarse
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
    
    // Luego obtener mi licencia
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
    
    echo "Mi Licencia: " . json_encode($licenseResult, JSON_PRETTY_PRINT);
    
    if ($licenseResult['data']['myLicense']) {
        echo "Licencia encontrada: " . $licenseResult['data']['myLicense']['publicData']['name'];
    } else {
        echo "No se encontró licencia para este usuario";
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
    
    // Primero, autenticarse
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
    
    // Luego obtener mi licencia
    let license_url = "https://api.zelf.world/api/license/my-license";
    
    let license_response = client
        .get(license_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("Mi Licencia: {}", serde_json::to_string_pretty(&license_result)?);
    
    if license_result["data"]["myLicense"].is_null() {
        println!("No se encontró licencia para este usuario");
    } else {
        let license_name = license_result["data"]["myLicense"]["publicData"]["name"].as_str().unwrap();
        println!("Licencia encontrada: {}", license_name);
    }
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notas

- **Sin Parámetros Requeridos**: Este endpoint no requiere ningún parámetro de consulta
- **Estado de Licencia**: El campo `myLicense` será `null` si el usuario aún no tiene una licencia
- **Información de Cuenta**: Siempre devuelve la información de cuenta del usuario en `zelfAccount`
- **Integración IPFS**: Tanto los datos de licencia como de cuenta se almacenan en IPFS
- **Autenticación Requerida**: Debe estar autenticado con un token JWT válido
- **Sin Verificación Biométrica**: Este endpoint no requiere verificación biométrica (a diferencia de las operaciones de crear/eliminar)