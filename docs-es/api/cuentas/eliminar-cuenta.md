---
id: eliminar-cuenta
title: Eliminar Cuenta
sidebar_label: Eliminar Cuenta
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
DELETE /api/clients
```

## Descripción

Eliminar permanentemente una cuenta de cliente y todos los datos asociados. Este endpoint requiere autenticación mediante token JWT y verificación biométrica para asegurar que solo el propietario de la cuenta pueda eliminar su cuenta. El proceso de eliminación remueve la cuenta del almacenamiento IPFS y devuelve información sobre los archivos eliminados y los datos de la cuenta.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `accountEmail` | string | Sí | Dirección de correo electrónico de la cuenta a eliminar |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `masterPassword` | string | Sí | Contraseña maestra para descifrado y verificación de cuenta |

## Headers

| Header | Requerido | Descripción |
|--------|-----------|-------------|
| `Origin` | Sí | Header de origen para validación CORS |
| `Authorization` | Sí | Token Bearer para autenticación (JWT) |
| `Content-Type` | Sí | Debe ser `application/json` |

## Ejemplos de Solicitud

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl -X DELETE "https://api.zelf.world/api/clients" \
  -H "Origin: https://tudominio.com" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "accountEmail": "cliente@ejemplo.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "tu_contraseña_maestra"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const deleteData = {
  accountEmail: "cliente@ejemplo.com",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "tu_contraseña_maestra"
};

try {
  const response = await axios.delete('https://api.zelf.world/api/clients', {
    headers: {
      'Origin': 'https://tudominio.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json'
    },
    data: deleteData
  });
  
  console.log('Cuenta eliminada exitosamente:', response.data);
} catch (error) {
  console.error('Eliminación fallida:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

delete_data = {
    "accountEmail": "cliente@ejemplo.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "tu_contraseña_maestra"
}

headers = {
    "Origin": "https://tudominio.com",
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
    print("Cuenta eliminada exitosamente:", response.json())
except requests.exceptions.RequestException as e:
    print("Eliminación fallida:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$deleteData = [
    'accountEmail' => 'cliente@ejemplo.com',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'tu_contraseña_maestra'
];

$headers = [
    'Origin: https://tudominio.com',
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
    echo "Cuenta eliminada exitosamente: " . $response;
} else {
    echo "Eliminación fallida: " . $response;
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
        "accountEmail": "cliente@ejemplo.com",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "tu_contraseña_maestra"
    });

    let client = reqwest::Client::new();
    let response = client
        .delete("https://api.zelf.world/api/clients")
        .header("Origin", "https://tudominio.com")
        .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        .header("Content-Type", "application/json")
        .json(&delete_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Cuenta eliminada exitosamente: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Eliminación fallida: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Ejemplos de Respuesta

<Tabs>
<TabItem value="success" label="200 OK - Cuenta Eliminada Exitosamente">

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
      "name": "cliente@ejemplo.com.account",
      "publicData": {
        "accountEmail": "cliente@ejemplo.com",
        "accountPhone": "5551234567",
        "accountCompany": "Empresa de Prueba",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "name": "Cliente de Prueba"
      }
    }
  }
}
```

</TabItem>
<TabItem value="unauthorized" label="401 No Autorizado - Authorization Faltante">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
<TabItem value="notfound" label="404 No Encontrado - Cliente No Encontrado">

```json
{
  "code": "NotFound",
  "message": "client_not_found"
}
```

</TabItem>
<TabItem value="invalidpassword" label="500 Error Interno del Servidor - Contraseña Inválida">

```json
{
  "code": "InternalServerError",
  "message": "THE PROVIDED PASSWORD IS INVALID."
}
```

</TabItem>
</Tabs>

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data.message` | string | Mensaje de éxito confirmando la eliminación de cuenta |
| `data.deletedFiles` | array | Array de hashes IPFS que fueron desanclados/eliminados |
| `data.zelfAccount.url` | string | URL de IPFS donde se almacenaban los datos de cuenta |
| `data.zelfAccount.cid` | string | Identificador de contenido para la cuenta eliminada |
| `data.zelfAccount.ipfsHash` | string | Hash IPFS de los datos de cuenta eliminados |
| `data.zelfAccount.pinned` | boolean | Si la cuenta estaba fijada en IPFS |
| `data.zelfAccount.web3` | boolean | Si la cuenta soportaba características Web3 |
| `data.zelfAccount.name` | string | Nombre del archivo de cuenta que fue eliminado |
| `data.zelfAccount.publicData.accountEmail` | string | Dirección de correo electrónico del cliente eliminado |
| `data.zelfAccount.publicData.accountPhone` | string | Número de teléfono del cliente eliminado |
| `data.zelfAccount.publicData.accountCompany` | string | Nombre de la empresa del cliente eliminado |
| `data.zelfAccount.publicData.accountCountryCode` | string | Código de país del cliente eliminado |
| `data.zelfAccount.publicData.accountType` | string | Tipo de cuenta (siempre "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Nivel de suscripción (ej., "free") |
| `data.zelfAccount.publicData.name` | string | Nombre para mostrar del cliente eliminado |

## Requisitos de Autenticación

- **Token JWT**: Debe proporcionar un token Bearer válido en el header Authorization
- **Verificación Biométrica**: Imagen facial requerida para verificación de identidad
- **Contraseña Maestra**: Requerida para descifrado y verificación de cuenta
- **Verificación de Propietario**: Solo el propietario de la cuenta puede eliminar su cuenta
- **Correo Electrónico de Cuenta**: Debe especificar el correo exacto de la cuenta a eliminar

## Características de Seguridad

- **Verificación Biométrica**: El reconocimiento facial asegura que solo el propietario de la cuenta pueda eliminar
- **Contraseña Maestra**: Capa adicional de seguridad para descifrado de cuenta
- **Autenticación JWT**: Autenticación segura basada en tokens
- **Limpieza IPFS**: Desanclado automático de datos de cuenta de IPFS
- **Validación de Propietario**: Verifica que el usuario solicitante sea propietario de la cuenta a eliminar

## Manejo de Errores

| Código de Estado | Descripción | Causas Comunes |
|------------------|-------------|----------------|
| 401 | No Autorizado | Header Authorization faltante o inválido |
| 404 | No Encontrado | La cuenta de cliente no existe |
| 500 | Error Interno del Servidor | Contraseña inválida o error de procesamiento del lado del servidor |

## Proceso de Eliminación

1. **Autenticación**: Verificar token JWT y datos biométricos
2. **Búsqueda de Cuenta**: Encontrar la cuenta por dirección de correo electrónico
3. **Verificación de Propietario**: Confirmar que el usuario solicitante es propietario de la cuenta
4. **Validación de Contraseña**: Verificar contraseña maestra para descifrado de cuenta
5. **Limpieza IPFS**: Desanclar y remover datos de cuenta de IPFS
6. **Respuesta**: Devolver confirmación de eliminación con información de archivos eliminados

## Notas Importantes

- **Eliminación Permanente**: Esta acción no se puede deshacer
- **Remoción de Datos**: Todos los datos de cuenta se eliminan permanentemente de IPFS
- **Seguridad Biométrica**: Las imágenes faciales deben proporcionarse como datos URL codificados en base64
- **Contraseña Maestra**: Requerida para descifrado y verificación de cuenta
- **Solo Propietario**: Solo el propietario de la cuenta puede eliminar su cuenta
- **Limpieza IPFS**: El sistema maneja automáticamente el desanclado de IPFS

## Endpoints Relacionados

- [Crear Cuenta](./crear-cuenta) - Crear una nueva cuenta de cliente
- [Autenticar Cuenta](./autenticar) - Autenticarse con cuenta existente
- [Actualizar Cuenta](./actualizar-cuenta) - Actualizar información de cuenta
- [Verificar Cuenta](./verificar-cuenta) - Verificar existencia de cuenta