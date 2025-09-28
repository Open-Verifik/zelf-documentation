# Eliminar Licencia

Eliminar una licencia existente con verificación biométrica.

## Endpoint

```
DELETE /api/license
```

## Descripción

Este endpoint permite a los usuarios autenticados eliminar su licencia existente. La operación requiere verificación biométrica usando datos faciales y contraseña maestra. Una vez eliminada, los datos de la licencia se desfijan de IPFS y se revocan todos los permisos asociados. Esta operación es irreversible y debe usarse con precaución.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes autenticarte usando el endpoint `/api/clients/auth` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `faceBase64` | string | Sí | Datos biométricos faciales codificados en Base64 para autenticación |
| `masterPassword` | string | No | Contraseña maestra para seguridad adicional (puede ser cadena vacía) |

## Respuesta

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

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | object | Objeto de datos de respuesta |
| `data.success` | boolean | Si la eliminación fue exitosa |
| `data.message` | string | Mensaje de éxito confirmando la eliminación de la licencia |
| `data.deletedFiles` | array | Array de archivos que fueron desfijados de IPFS |
| `data.deletedFiles[].IpfsHash` | string | Hash IPFS del archivo eliminado |
| `data.deletedFiles[].Status` | string | Estado de la operación de desfijado |

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

# Luego eliminar la licencia
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

    // Luego eliminar la licencia
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

    console.log('Licencia eliminada:', deleteResponse.data);
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
    
    # Luego eliminar la licencia
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
    print("Licencia eliminada:", delete_response.json())

if __name__ == "__main__":
    delete_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function deleteLicense() {
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
    
    // Luego eliminar la licencia
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
    
    echo "Licencia eliminada: " . json_encode($deleteResult, JSON_PRETTY_PRINT);
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
    
    // Luego eliminar la licencia
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
    println!("Licencia eliminada: {}", serde_json::to_string_pretty(&delete_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Manejo de Errores

### Escenarios de Error Comunes

1. **No se Encontró Licencia (404)**: El usuario no tiene una licencia existente para eliminar
2. **Credenciales Inválidas (500)**: La contraseña maestra proporcionada es incorrecta
3. **Autenticación Faltante (401)**: No se proporcionó un token JWT válido
4. **Error de Validación (409)**: Formato de faceBase64 inválido o campos requeridos faltantes

### Mejores Prácticas

- Siempre verificar que el usuario tenga una licencia existente antes de intentar eliminarla
- Asegurar que los datos biométricos (`faceBase64`) estén correctamente codificados
- Manejar la naturaleza irreversible de la eliminación de licencias en tu UI
- Considerar implementar diálogos de confirmación para la eliminación de licencias

## Notas

- **Verificación Biométrica**: La eliminación de licencias requiere verificación biométrica usando datos `faceBase64`
- **Limpieza IPFS**: Los datos de licencia eliminados se desfijan automáticamente de IPFS
- **Operación Irreversible**: Una vez eliminada, la licencia no se puede recuperar
- **Verificación de Propietario**: Solo el propietario de la licencia puede eliminar su propia licencia
- **Contraseña Maestra**: Requerida para verificación de seguridad adicional