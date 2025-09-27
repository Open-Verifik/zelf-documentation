---
id: actualizar-cuenta
title: Actualizar Cuenta
sidebar_label: Actualizar Cuenta
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
PUT /api/clients/sync
```

## Descripción

Actualizar una cuenta de cliente existente con nueva información. Este endpoint permite a los clientes modificar los detalles de su cuenta como nombre, idioma y otra información del perfil. La actualización requiere autenticación mediante token JWT y verificación biométrica para asegurar que solo el propietario de la cuenta pueda realizar cambios.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `name` | string | No | Nombre para mostrar actualizado del cliente |
| `language` | string | No | Preferencia de idioma (ej., "en", "es") |
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
curl -X PUT "https://api.zelf.world/api/clients/sync" \
  -H "Origin: https://tudominio.com" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nombre de Cliente Actualizado",
    "language": "es",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "tu_contraseña_maestra"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const updateData = {
  name: "Nombre de Cliente Actualizado",
  language: "es",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "tu_contraseña_maestra"
};

try {
  const response = await axios.put('https://api.zelf.world/api/clients/sync', updateData, {
    headers: {
      'Origin': 'https://tudominio.com',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Cuenta actualizada exitosamente:', response.data);
} catch (error) {
  console.error('Actualización fallida:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

update_data = {
    "name": "Nombre de Cliente Actualizado",
    "language": "es",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "tu_contraseña_maestra"
}

headers = {
    "Origin": "https://tudominio.com",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json"
}

try:
    response = requests.put(
        "https://api.zelf.world/api/clients/sync",
        json=update_data,
        headers=headers
    )
    response.raise_for_status()
    print("Cuenta actualizada exitosamente:", response.json())
except requests.exceptions.RequestException as e:
    print("Actualización fallida:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$updateData = [
    'name' => 'Nombre de Cliente Actualizado',
    'language' => 'es',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'tu_contraseña_maestra'
];

$headers = [
    'Origin: https://tudominio.com',
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients/sync');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($updateData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Cuenta actualizada exitosamente: " . $response;
} else {
    echo "Actualización fallida: " . $response;
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
    let update_data = json!({
        "name": "Nombre de Cliente Actualizado",
        "language": "es",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "tu_contraseña_maestra"
    });

    let client = reqwest::Client::new();
    let response = client
        .put("https://api.zelf.world/api/clients/sync")
        .header("Origin", "https://tudominio.com")
        .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        .header("Content-Type", "application/json")
        .json(&update_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Cuenta actualizada exitosamente: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Actualización fallida: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Ejemplos de Respuesta

<Tabs>
<TabItem value="success" label="200 OK - Cuenta Actualizada Exitosamente">

```json
{
  "data": {
    "message": "Account updated successfully",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "cid": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfs_pin_hash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "ipfsHash": "bafkreih5oxrgohsvgscaxxxcynxqh2p6m2zehoc2suvoveypyoqgmmo5om",
      "pinned": true,
      "web3": true,
      "name": "cliente_actualizado@ejemplo.com.account",
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
        "accountName": "Nombre de Cliente Actualizado"
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
  "validationError": "Campos requeridos faltantes: faceBase64, masterPassword"
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
| `data.message` | string | Mensaje de éxito confirmando la actualización de cuenta |
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
| `data.zelfAccount.publicData.accountName` | string | Nombre para mostrar actualizado del cliente |
| `data.zelfProof` | string | Prueba biométrica cifrada actualizada |

## Requisitos de Autenticación

- **Token JWT**: Debe proporcionar un token Bearer válido en el header Authorization
- **Verificación Biométrica**: Imagen facial requerida para verificación de identidad
- **Contraseña Maestra**: Requerida para descifrado y verificación de cuenta
- **Verificación de Propietario**: Solo el propietario de la cuenta puede actualizar su información

## Características de Seguridad

- **Verificación Biométrica**: El reconocimiento facial asegura que solo el propietario de la cuenta pueda realizar actualizaciones
- **Contraseña Maestra**: Capa adicional de seguridad para descifrado de cuenta
- **Autenticación JWT**: Autenticación segura basada en tokens
- **Almacenamiento IPFS**: Almacenamiento descentralizado de datos de cuenta actualizados
- **Pruebas de Conocimiento Cero**: ZelfProof actualizado para autenticación que preserva la privacidad

## Manejo de Errores

| Código de Estado | Descripción | Causas Comunes |
|------------------|-------------|----------------|
| 401 | No Autorizado | Header Authorization faltante o inválido |
| 404 | No Encontrado | La cuenta de cliente no existe |
| 409 | Conflicto | Errores de validación o campos requeridos faltantes |
| 500 | Error Interno del Servidor | Contraseña inválida o error de procesamiento del lado del servidor |

## Notas

- Los datos de la cuenta se actualizan en IPFS y se genera un nuevo ZelfProof
- Las imágenes faciales deben proporcionarse como datos URL codificados en base64
- La contraseña maestra es requerida para descifrado y verificación de cuenta
- Todos los datos biométricos se procesan de forma segura y nunca se almacenan permanentemente
- El ZelfProof actualizado permite capacidades de verificación sin conexión
- Solo el propietario de la cuenta (verificado mediante biométricos y contraseña) puede actualizar la cuenta

## Endpoints Relacionados

- [Crear Cuenta](./crear-cuenta) - Crear una nueva cuenta de cliente
- [Autenticar Cuenta](./autenticar) - Autenticarse con cuenta existente
- [Verificar Cuenta](./verificar-cuenta) - Verificar existencia de cuenta
- [Eliminar Cuenta](./eliminar-cuenta) - Eliminar cuenta