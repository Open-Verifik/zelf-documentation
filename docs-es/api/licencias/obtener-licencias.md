# Buscar Licencias

Buscar y recuperar licencias del sistema.

## Endpoint

```
GET /api/license
```

## Descripción

Este endpoint permite a los usuarios autenticados buscar licencias en el sistema. Puede devolver todas las licencias o filtrar por dominio específico. La respuesta incluye información detallada de la licencia almacenada en IPFS, incluyendo datos de configuración, detalles de propiedad y metadatos.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes autenticarte usando el endpoint `/api/clients/auth` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `domain` | string | No | Filtrar licencias por nombre de dominio específico (debe coincidir con el patrón: `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$`) |

## Respuesta

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

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | array | Array de objetos de licencia |
| `data[].id` | string | Identificador único para la licencia |
| `data[].name` | string | Nombre del archivo de licencia |
| `data[].cid` | string | Identificador de contenido IPFS |
| `data[].size` | number | Tamaño de los datos de licencia en bytes |
| `data[].number_of_files` | number | Número de archivos en el almacenamiento IPFS |
| `data[].mime_type` | string | Tipo MIME de los datos de licencia |
| `data[].group_id` | string\|null | Identificador de grupo (generalmente null) |
| `data[].created_at` | string | Timestamp ISO cuando se creó la licencia |
| `data[].url` | string | URL IPFS para acceder a los datos de licencia |
| `data[].publicData` | object | Datos públicos de la licencia |
| `data[].publicData.licenseDomain` | string | Nombre de dominio para la licencia |
| `data[].publicData.licenseOwner` | string | Email del propietario de la licencia |
| `data[].publicData.licenseSubscriptionId` | string | Tipo de suscripción (siempre "free") |
| `data[].publicData.type` | string | Tipo de licencia (siempre "license") |

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

# Luego buscar licencias
curl -X GET "https://api.zelf.world/api/license" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"

# Buscar por dominio específico
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

    // Luego buscar licencias
    const licensesResponse = await axios.get('https://api.zelf.world/api/license', {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Todas las Licencias:', licensesResponse.data);

    // Buscar por dominio específico
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

    console.log('Licencias del Dominio:', domainResponse.data);
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
    
    # Luego buscar licencias
    licenses_url = "https://api.zelf.world/api/license"
    licenses_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    licenses_response = requests.get(licenses_url, headers=licenses_headers)
    print("Todas las Licencias:", licenses_response.json())
    
    # Buscar por dominio específico
    domain_params = {"domain": "mydomain"}
    domain_response = requests.get(licenses_url, params=domain_params, headers=licenses_headers)
    print("Licencias del Dominio:", domain_response.json())

if __name__ == "__main__":
    search_licenses()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function searchLicenses() {
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
    
    // Luego buscar licencias
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
    
    echo "Todas las Licencias: " . json_encode($licensesResult, JSON_PRETTY_PRINT);
    
    // Buscar por dominio específico
    $domainUrl = 'https://api.zelf.world/api/license?domain=mydomain';
    $domainResponse = file_get_contents($domainUrl, false, $licensesContext);
    $domainResult = json_decode($domainResponse, true);
    
    echo "Licencias del Dominio: " . json_encode($domainResult, JSON_PRETTY_PRINT);
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
    
    // Luego buscar licencias
    let licenses_url = "https://api.zelf.world/api/license";
    
    let licenses_response = client
        .get(licenses_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let licenses_result: Value = licenses_response.json().await?;
    println!("Todas las Licencias: {}", serde_json::to_string_pretty(&licenses_result)?);
    
    // Buscar por dominio específico
    let domain_url = "https://api.zelf.world/api/license?domain=mydomain";
    let domain_response = client
        .get(domain_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let domain_result: Value = domain_response.json().await?;
    println!("Licencias del Dominio: {}", serde_json::to_string_pretty(&domain_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notas

- **Sin Paginación**: Este endpoint devuelve todas las licencias directamente en un array, sin paginación
- **Integración IPFS**: Los datos de licencia se almacenan en IPFS y son accesibles a través del campo `url`
- **Filtrado por Dominio**: Usa el parámetro `domain` para buscar licencias por nombre de dominio específico
- **Respuesta Simplificada**: La respuesta contiene solo información básica de la licencia (`publicData`), no la estructura completa de `domainConfig`
- **Autenticación Requerida**: Debe estar autenticado con un token JWT válido de `/api/clients/auth`
- **Validación de Dominio**: El parámetro domain debe coincidir con el patrón `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$`