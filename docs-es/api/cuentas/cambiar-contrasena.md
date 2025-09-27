---
id: cambiar-contrasena
title: Cambiar Contraseña
sidebar_label: Cambiar Contraseña
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
PUT /api/clients/sync/password
```

## Descripción

Cambiar la contraseña maestra de una cuenta de cliente existente. Este endpoint permite a los clientes actualizar su contraseña maestra manteniendo la misma verificación biométrica. El cambio de contraseña requiere autenticación mediante token JWT y verificación biométrica para asegurar que solo el propietario de la cuenta pueda realizar cambios.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `newPassword` | string | Sí | Nueva contraseña maestra para la cuenta |
| `confirmPassword` | string | Sí | Confirmación de la nueva contraseña (debe coincidir con newPassword) |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `masterPassword` | string | Sí | Contraseña maestra actual para descifrado y verificación de cuenta |

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
curl -X PUT "https://api.zelf.world/api/clients/sync/password" \
  -H "Origin: https://tudominio.com" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "newPassword": "NuevaContraseñaSegura123",
    "confirmPassword": "NuevaContraseñaSegura123",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "contraseña_maestra_actual"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const passwordData = {
  newPassword: "NuevaContraseñaSegura123",
  confirmPassword: "NuevaContraseñaSegura123",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "contraseña_maestra_actual"
};

try {
  const response = await axios.put('https://api.zelf.world/api/clients/sync/password', passwordData, {
    headers: {
      'Origin': 'https://tudominio.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Contraseña cambiada exitosamente:', response.data);
} catch (error) {
  console.error('Cambio de contraseña fallido:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

password_data = {
    "newPassword": "NuevaContraseñaSegura123",
    "confirmPassword": "NuevaContraseñaSegura123",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "contraseña_maestra_actual"
}

headers = {
    "Origin": "https://tudominio.com",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json"
}

try:
    response = requests.put(
        "https://api.zelf.world/api/clients/sync/password",
        json=password_data,
        headers=headers
    )
    response.raise_for_status()
    print("Contraseña cambiada exitosamente:", response.json())
except requests.exceptions.RequestException as e:
    print("Cambio de contraseña fallido:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$passwordData = [
    'newPassword' => 'NuevaContraseñaSegura123',
    'confirmPassword' => 'NuevaContraseñaSegura123',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'contraseña_maestra_actual'
];

$headers = [
    'Origin: https://tudominio.com',
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients/sync/password');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($passwordData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Contraseña cambiada exitosamente: " . $response;
} else {
    echo "Cambio de contraseña fallido: " . $response;
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
    let password_data = json!({
        "newPassword": "NuevaContraseñaSegura123",
        "confirmPassword": "NuevaContraseñaSegura123",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "contraseña_maestra_actual"
    });

    let client = reqwest::Client::new();
    let response = client
        .put("https://api.zelf.world/api/clients/sync/password")
        .header("Origin", "https://tudominio.com")
        .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        .header("Content-Type", "application/json")
        .json(&password_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Contraseña cambiada exitosamente: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Cambio de contraseña fallido: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Ejemplos de Respuesta

<Tabs>
<TabItem value="success" label="200 OK - Contraseña Cambiada Exitosamente">

```json
{
  "data": {
    "message": "Password updated successfully",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "cid": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfs_pin_hash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfsHash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "pinned": true,
      "web3": true,
      "name": "cliente@ejemplo.com.account",
      "created_at": "2025-09-27T03:59:26.295Z",
      "group_id": null,
      "id": "01998953-5d53-7fa5-8891-0cfa37be61fb",
      "mime_type": "text/plain; charset=UTF-8",
      "number_of_files": 1,
      "size": 1538,
      "publicData": {
        "accountEmail": "cliente@ejemplo.com",
        "accountPhone": "5551234567",
        "accountCompany": "Empresa de Prueba",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "accountName": "Cliente de Prueba"
      }
    },
    "zelfProof": "ApAdnrOCquTDdOIuOTv9Q1X7LTFt6Hsso000dxWSzfu38zCpNZ4e7eEJhc8Y1kJPgBvj1pamMVKROPklz/lIO0HJFsH3uXA530VYWiRoiFVfxzWLBmDFuvbLtmemOJEaZ+PI6qsEJp9Efv9x5FHV3vRYDRv3EsIiJuPATyZMwQ367aMWnZZ4tcdSD9ShJskd9pECkdTvh/GoGZWWQvmabmxOjDn9eCF4zpRwj4/asLihWrXGQZV8mU3HNVOYxwjwEDPzG1gNb9qlnoW6PMDIkoW3Z9MusD7U2llmj0kd6hqh+kHL66fmEUPNEHh01Hf3d1evdsAt0wifFL+LN46i0nN23tv9OWPjzjfXy7zqsyBh6Oqu1A3+7CoEZyGKD0FFT5nGelPn3IK8voFkgEhUqGbTBh1gaEXq5F+Mn3LliIxyGQXTFlr6oQ+OpRdXmwx8xfATdUAJA6wKSmE38OD4+OzqpPFp3/Yo9EeOjY8G3G91pqVpqRmQd3/CZMN8z7Pq/hOKD3v/0RwqC1Wk9CAp1S2r80P4Lofbn30yPIcZBoU+7wVdFkfLIGnmv/M5fMdr0v0ubHLSGl60TFnhor5lN7rm0PpZmGfXBgxDssY/GMINWvIlckfK5yCt/+4GtEMbuHa9X8IiYqW4z+Kt4ab73aoVxSK8dtaHTG3BXT4/NF/DJbVTRQnBoEtSniZktysmvmFWxWFi3t5+HhQ5IOj0+GBy6Lzhl2bDkCfdtivVqlHXFjOpdrUY10hwU5++TXoTMeoWdCOSQ3iciHBfN78tOccGCa6oY3VHvH8s6qsTvZWYvC/f+7qIHvmRZdqmON6yGBlCvtU0XbcpC5huNMeMxi2dR5KrbFwlcjrK35pAHGgFymbLN0bHOxisNIhstlt2yYxTQyrlJ3ZKuVKfI8tPU+fs9naMoP8ZcdhRcW99w/tENXYh61GPMKu9Q2oARcB6CP9Qs+DQxMN3BU+xbGZIva7wHoRg+aIVOAqoD1W5572I2U8sYpeNgd6TTbDpttMb0C5wdCGuRtYnbfQgqEY+TaBJhGIr7rIJEATimr2oeGwUjzHsOF1YI5gMf1Bxcz9vsdrT2k+5X7JKTOFs0jr0pfakWlgowaUtFFhzVOKSrGY+0y3YYEKJ+tkXPvi2Hz6iB8jUxKZ3xLpkfk1Mm7F0qCRYmzmlhCouvDDTKFviXDM2agGnXCIFJ8llM4KgvXUUbK5omK5TxFcrxtFqjdLurbO9V+xAhg=="
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
<TabItem value="validation" label="409 Conflicto - Error de Validación">

```json
{
  "validationError": "Campos requeridos faltantes: newPassword, confirmPassword, faceBase64, masterPassword"
}
```

</TabItem>
<TabItem value="passwordmismatch" label="409 Conflicto - Contraseñas No Coinciden">

```json
{
  "message": "passwords_do_not_match",
  "code": "Conflict"
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
| `data.message` | string | Mensaje de éxito confirmando la actualización de contraseña |
| `data.zelfAccount.url` | string | URL de IPFS donde se almacenan los datos de cuenta actualizados |
| `data.zelfAccount.cid` | string | Identificador de contenido para la cuenta almacenada en IPFS |
| `data.zelfAccount.ipfsHash` | string | Hash IPFS de los datos de cuenta actualizados |
| `data.zelfAccount.pinned` | boolean | Si la cuenta está fijada en IPFS |
| `data.zelfAccount.web3` | boolean | Si la cuenta soporta características Web3 |
| `data.zelfAccount.name` | string | Nombre del archivo de cuenta en IPFS |
| `data.zelfAccount.created_at` | string | Marca de tiempo cuando se creó la cuenta |
| `data.zelfAccount.id` | string | Identificador único para la cuenta |
| `data.zelfAccount.size` | number | Tamaño de los datos de cuenta almacenados en bytes |
| `data.zelfAccount.publicData.accountEmail` | string | Dirección de correo electrónico del cliente |
| `data.zelfAccount.publicData.accountPhone` | string | Número de teléfono del cliente |
| `data.zelfAccount.publicData.accountCompany` | string | Nombre de la empresa del cliente |
| `data.zelfAccount.publicData.accountCountryCode` | string | Código de país del cliente |
| `data.zelfAccount.publicData.accountType` | string | Tipo de cuenta (siempre "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Nivel de suscripción (ej., "free") |
| `data.zelfAccount.publicData.accountName` | string | Nombre para mostrar del cliente |
| `data.zelfProof` | string | Prueba biométrica cifrada actualizada con nueva contraseña |

## Requisitos de Autenticación

- **Token JWT**: Debe proporcionar un token Bearer válido en el header Authorization
- **Verificación Biométrica**: Imagen facial requerida para verificación de identidad
- **Contraseña Maestra Actual**: Requerida para descifrado y verificación de cuenta
- **Verificación de Propietario**: Solo el propietario de la cuenta puede cambiar su contraseña

## Características de Seguridad

- **Verificación Biométrica**: El reconocimiento facial asegura que solo el propietario de la cuenta pueda cambiar la contraseña
- **Verificación de Contraseña Actual**: Debe proporcionar la contraseña maestra actual para seguridad
- **Confirmación de Contraseña**: La nueva contraseña debe ser confirmada para prevenir errores tipográficos
- **Autenticación JWT**: Autenticación segura basada en tokens
- **Almacenamiento IPFS**: Almacenamiento descentralizado de datos de cuenta actualizados
- **Pruebas de Conocimiento Cero**: ZelfProof actualizado con nueva contraseña para autenticación que preserva la privacidad

## Manejo de Errores

| Código de Estado | Descripción | Causas Comunes |
|------------------|-------------|----------------|
| 401 | No Autorizado | Header Authorization faltante o inválido |
| 404 | No Encontrado | La cuenta de cliente no existe |
| 409 | Conflicto | Errores de validación, campos requeridos faltantes, o contraseñas no coinciden |
| 500 | Error Interno del Servidor | Contraseña actual inválida o error de procesamiento del lado del servidor |

## Notas

- Los datos de la cuenta se actualizan en IPFS con la nueva contraseña y se genera un nuevo ZelfProof
- Las imágenes faciales deben proporcionarse como datos URL codificados en base64
- La contraseña maestra actual es requerida para descifrado y verificación de cuenta
- La nueva contraseña y la contraseña de confirmación deben coincidir exactamente
- Todos los datos biométricos se procesan de forma segura y nunca se almacenan permanentemente
- El ZelfProof actualizado permite capacidades de verificación sin conexión con la nueva contraseña
- Solo el propietario de la cuenta (verificado mediante biométricos y contraseña actual) puede cambiar la contraseña

## Endpoints Relacionados

- [Crear Cuenta](./crear-cuenta) - Crear una nueva cuenta de cliente
- [Autenticar Cuenta](./autenticar) - Autenticarse con cuenta existente
- [Verificar Cuenta](./verificar-cuenta) - Verificar existencia de cuenta
- [Actualizar Cuenta](./actualizar-cuenta) - Actualizar información de cuenta
- [Eliminar Cuenta](./eliminar-cuenta) - Eliminar cuenta