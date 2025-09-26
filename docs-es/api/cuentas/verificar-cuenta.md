# Verificar Cuenta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Verificar si existe una cuenta de cliente en el sistema Zelf y recuperar información de la cuenta. Este endpoint te permite verificar la disponibilidad de cuentas por email o número de teléfono, o recuperar todas las cuentas con paginación.

## Endpoint

```
GET /api/clients
```

## Descripción

Este endpoint te permite verificar si existe una cuenta de cliente y recuperar información de la cuenta. Puedes buscar por dirección de email o número de teléfono, o recuperar todas las cuentas con paginación. Los datos de la cuenta se almacenan en IPFS e incluyen información pública de la cuenta.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `email` | string | No* | Dirección de email para verificar (debe tener formato de email válido) |
| `countryCode` | string | No* | Código de país (ej., "+1", "+44") |
| `phone` | string | No* | Número de teléfono para verificar |

**Nota**: Debe proporcionarse `email` O (`countryCode` + `phone`). Si no se proporcionan parámetros, devuelve todas las cuentas con paginación.

## Respuesta

<Tabs>
<TabItem value="200-found" label="200 OK - Cuenta Encontrada" default>

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

<TabItem value="200-not-found" label="200 OK - Cuenta No Encontrada">

```json
{
  "data": null
}
```

</TabItem>

<TabItem value="200-all" label="200 OK - Todas las Cuentas">

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

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | object\|null | Objeto de datos de cuenta o null si no se encuentra |
| `data.id` | string | Identificador único de la cuenta |
| `data.name` | string | Nombre de la cuenta (basado en email) |
| `data.cid` | string | Identificador de Contenido IPFS |
| `data.size` | number | Tamaño de los datos de la cuenta en bytes |
| `data.number_of_files` | number | Número de archivos en la cuenta |
| `data.mime_type` | string | Tipo MIME de los datos de la cuenta |
| `data.group_id` | string\|null | Identificador de grupo (si aplica) |
| `data.created_at` | string | Marca de tiempo de creación de la cuenta (ISO 8601) |
| `data.url` | string | URL IPFS para acceder a los datos de la cuenta |
| `data.publicData` | object | Información pública de la cuenta |
| `data.publicData.accountEmail` | string | Dirección de email de la cuenta |
| `data.publicData.accountPhone` | string | Número de teléfono de la cuenta |
| `data.publicData.accountCompany` | string | Nombre de la empresa |
| `data.publicData.accountCountryCode` | string | Código de país |
| `data.publicData.accountSubscriptionId` | string | Tipo de suscripción (ej., "free") |
| `data.publicData.accountType` | string | Tipo de cuenta (ej., "client_account") |

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Verificar por email
curl -X GET "https://api.zelf.world/api/clients?email=usuario@ejemplo.com" \
  -H "Content-Type: application/json"

# Verificar por teléfono
curl -X GET "https://api.zelf.world/api/clients?countryCode=%2B1&phone=5551234567" \
  -H "Content-Type: application/json"

# Obtener todas las cuentas
curl -X GET "https://api.zelf.world/api/clients" \
  -H "Content-Type: application/json"
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

// Verificar por email
async function verificarPorEmail(email) {
  try {
    const response = await axios.get(`https://api.zelf.world/api/clients`, {
      params: { email }
    });
    
    if (response.data.data) {
      console.log('Cuenta encontrada:', response.data.data.publicData);
      return response.data.data;
    } else {
      console.log('Cuenta no encontrada');
      return null;
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Verificar por teléfono
async function verificarPorTelefono(countryCode, phone) {
  try {
    const response = await axios.get(`https://api.zelf.world/api/clients`, {
      params: { countryCode, phone }
    });
    
    if (response.data.data) {
      console.log('Cuenta encontrada:', response.data.data.publicData);
      return response.data.data;
    } else {
      console.log('Cuenta no encontrada');
      return null;
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Obtener todas las cuentas con paginación
async function obtenerTodasLasCuentas(page = 1, limit = 10) {
  try {
    const response = await axios.get(`https://api.zelf.world/api/clients`, {
      params: { page, limit }
    });
    
    console.log('Cuentas:', response.data.data.data);
    console.log('Paginación:', response.data.data.pagination);
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

def verificar_por_email(email):
    """Verificar cuenta por dirección de email"""
    try:
        response = requests.get(
            "https://api.zelf.world/api/clients",
            params={"email": email}
        )
        response.raise_for_status()
        
        if response.json()["data"]:
            print("Cuenta encontrada:", response.json()["data"]["publicData"])
            return response.json()["data"]
        else:
            print("Cuenta no encontrada")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

def verificar_por_telefono(country_code, phone):
    """Verificar cuenta por número de teléfono"""
    try:
        response = requests.get(
            "https://api.zelf.world/api/clients",
            params={"countryCode": country_code, "phone": phone}
        )
        response.raise_for_status()
        
        if response.json()["data"]:
            print("Cuenta encontrada:", response.json()["data"]["publicData"])
            return response.json()["data"]
        else:
            print("Cuenta no encontrada")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")

def obtener_todas_las_cuentas(page=1, limit=10):
    """Obtener todas las cuentas con paginación"""
    try:
        response = requests.get(
            "https://api.zelf.world/api/clients",
            params={"page": page, "limit": limit}
        )
        response.raise_for_status()
        
        data = response.json()["data"]
        print("Cuentas:", data["data"])
        print("Paginación:", data["pagination"])
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php

function verificarPorEmail($email) {
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
            echo "Cuenta encontrada: " . json_encode($data['data']['publicData']) . "\n";
            return $data['data'];
        } else {
            echo "Cuenta no encontrada\n";
            return null;
        }
    } else {
        echo "Error: HTTP $httpCode\n";
        return null;
    }
}

function verificarPorTelefono($countryCode, $phone) {
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
            echo "Cuenta encontrada: " . json_encode($data['data']['publicData']) . "\n";
            return $data['data'];
        } else {
            echo "Cuenta no encontrada\n";
            return null;
        }
    } else {
        echo "Error: HTTP $httpCode\n";
        return null;
    }
}

function obtenerTodasLasCuentas($page = 1, $limit = 10) {
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
        echo "Cuentas: " . json_encode($data['data']['data']) . "\n";
        echo "Paginación: " . json_encode($data['data']['pagination']) . "\n";
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
    
    // Verificar por email
    let email = "usuario@ejemplo.com";
    let url = format!("https://api.zelf.world/api/clients?email={}", email);
    let response = client.get(&url).send().await?;
    
    if response.status().is_success() {
        let data: serde_json::Value = response.json().await?;
        if data["data"].is_null() {
            println!("Cuenta no encontrada");
        } else {
            println!("Cuenta encontrada: {:?}", data["data"]["publicData"]);
        }
    }
    
    // Verificar por teléfono
    let country_code = "+1";
    let phone = "5551234567";
    let url = format!("https://api.zelf.world/api/clients?countryCode={}&phone={}", 
                     country_code, phone);
    let response = client.get(&url).send().await?;
    
    if response.status().is_success() {
        let data: serde_json::Value = response.json().await?;
        if data["data"].is_null() {
            println!("Cuenta no encontrada");
        } else {
            println!("Cuenta encontrada: {:?}", data["data"]["publicData"]);
        }
    }
    
    // Obtener todas las cuentas
    let url = "https://api.zelf.world/api/clients";
    let response = client.get(url).send().await?;
    
    if response.status().is_success() {
        let data: serde_json::Value = response.json().await?;
        println!("Cuentas: {:?}", data["data"]["data"]);
        println!("Paginación: {:?}", data["data"]["pagination"]);
    }
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notas

- **Integración IPFS**: Los datos de la cuenta se almacenan en IPFS (Sistema de Archivos Interplanetario) para almacenamiento descentralizado
- **Validación de Email**: Las direcciones de email se validan usando validación de email Joi
- **Formato de Teléfono**: Los números de teléfono deben proporcionarse sin espacios o caracteres especiales
- **Códigos de País**: Usar formato internacional (ej., "+1" para EE.UU., "+44" para Reino Unido)
- **Paginación**: Cuando no se proporcionan parámetros, los resultados se paginan con límite por defecto de 10
- **Estructura de Respuesta**: Todas las respuestas envuelven los datos en una propiedad `data` para consistencia
- **Tipos de Cuenta**: Actualmente soporta tipo "client_account"
- **Tipos de Suscripción**: Actualmente soporta nivel de suscripción "free"
- **Marcas de Tiempo**: Todas las marcas de tiempo están en formato ISO 8601 (UTC)
- **Tipos MIME**: Los datos de la cuenta pueden almacenarse como "text/plain" o "application/json"