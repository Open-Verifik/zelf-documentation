---
id: autenticar
title: Autenticar Cuenta
sidebar_label: Autenticar Cuenta
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/clients/auth
```

## Descripción

Autenticar una cuenta de cliente utilizando verificación biométrica (reconocimiento facial) y contraseña maestra. Este endpoint soporta autenticación mediante correo electrónico o número de teléfono y devuelve un token JWT junto con el ZelfProof del cliente y los datos de la cuenta.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `email` | string | No* | Dirección de correo electrónico del cliente (requerido si no se proporciona teléfono) |
| `countryCode` | string | No* | Código de país (requerido si se proporciona teléfono) |
| `phone` | string | No* | Número de teléfono (requerido si no se proporciona correo electrónico) |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `masterPassword` | string | Sí | Contraseña maestra para descifrado de cuenta |
| `identificationMethod` | string | Sí | Método de identificación: "email" o "phone" |

*Se debe proporcionar `email` O (`countryCode` + `phone`).

## Headers

| Header | Requerido | Descripción |
|--------|-----------|-------------|
| `Origin` | Sí | Header de origen para validación CORS |
| `Content-Type` | Sí | Debe ser `application/json` |

## Ejemplos de Solicitud

<Tabs>
<TabItem value="curl" label="cURL">

```bash
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Origin: https://tudominio.com" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan.perez@ejemplo.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "tu_contraseña_maestra",
    "identificationMethod": "email"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const authData = {
  email: "juan.perez@ejemplo.com",
  faceBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  masterPassword: "tu_contraseña_maestra",
  identificationMethod: "email"
};

try {
  const response = await axios.post('https://api.zelf.world/api/clients/auth', authData, {
    headers: {
      'Origin': 'https://tudominio.com',
      'Content-Type': 'application/json'
    }
  });
  
  console.log('Autenticación exitosa:', response.data);
} catch (error) {
  console.error('Autenticación fallida:', error.response.data);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

auth_data = {
    "email": "juan.perez@ejemplo.com",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "masterPassword": "tu_contraseña_maestra",
    "identificationMethod": "email"
}

headers = {
    "Origin": "https://tudominio.com",
    "Content-Type": "application/json"
}

try:
    response = requests.post(
        "https://api.zelf.world/api/clients/auth",
        json=auth_data,
        headers=headers
    )
    response.raise_for_status()
    print("Autenticación exitosa:", response.json())
except requests.exceptions.RequestException as e:
    print("Autenticación fallida:", e.response.json())
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$authData = [
    'email' => 'juan.perez@ejemplo.com',
    'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
    'masterPassword' => 'tu_contraseña_maestra',
    'identificationMethod' => 'email'
];

$headers = [
    'Origin: https://tudominio.com',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.zelf.world/api/clients/auth');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($authData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Autenticación exitosa: " . $response;
} else {
    echo "Autenticación fallida: " . $response;
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
    let auth_data = json!({
        "email": "juan.perez@ejemplo.com",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "masterPassword": "tu_contraseña_maestra",
        "identificationMethod": "email"
    });

    let client = reqwest::Client::new();
    let response = client
        .post("https://api.zelf.world/api/clients/auth")
        .header("Origin", "https://tudominio.com")
        .header("Content-Type", "application/json")
        .json(&auth_data)
        .send()
        .await?;

    if response.status().is_success() {
        let result: serde_json::Value = response.json().await?;
        println!("Autenticación exitosa: {:?}", result);
    } else {
        let error: serde_json::Value = response.json().await?;
        println!("Autenticación fallida: {:?}", error);
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Ejemplos de Respuesta

<Tabs>
<TabItem value="success" label="200 OK - Autenticación Exitosa">

```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "zelfProof": "ApAdnrOCquTDdOIuOTv9Q1X7LTFt6Hsso000dxWSzfu38zCpNZ4e7eEJhc8Y1kJPgBvj1pamMVKROPklz/lIO0HJFsH3uXA530VYWiRoiFVfxzWLBmDFuvbLtmemOJEaZ+PI6qsEJp9Efv9x5FHV3vRYDRv3EsIiJuPATyZMwQ367aMWnZZ4tcdSD9ShJskd9pECkdTvh/GoGZWWQvmabmxOjDn9eCF4zpRwj4/asLihWrXGQZV8mU3HNVOYxwjwEDPzG1gNb9qlnoW6PMDIkoW3Z9MusD7U2llmj0kd6hqh+kHL66fmEUPNEHh01Hf3d1evdsAt0wifFL+LN46i0nN23tv9OWPjzjfXy7zqsyBh6Oqu1A3+7CoEZyGKD0FFT5nGelPn3IK8voFkgEhUqGbTBh1gaEXq5F+Mn3LliIxyGQXTFlr6oQ+OpRdXmwx8xfATdUAJA6wKSmE38OD4+OzqpPFp3/Yo9EeOjY8G3G91pqVpqRmQd3/CZMN8z7Pq/hOKD3v/0RwqC1Wk9CAp1S2r80P4Lofbn30yPIcZBoU+7wVdFkfLIGnmv/M5fMdr0v0ubHLSGl60TFnhor5lN7rm0PpZmGfXBgxDssY/GMINWvIlckfK5yCt/+4GtEMbuHa9X8IiYqW4z+Kt4ab73aoVxSK8dtaHTG3BXT4/NF/DJbVTRQnBoEtSniZktysmvmFWxWFi3t5+HhQ5IOj0+GBy6Lzhl2bDkCfdtivVqlHXFjOpdrUY10hwU5++TXoTMeoWdCOSQ3iciHBfN78tOccGCa6oY3VHvH8s6qsTvZWYvC/f+7qIHvmRZdqmON6yGBlCvtU0XbcpC5huNMeMxi2dR5KrbFwlcjrK35pAHGgFymbLN0bHOxisNIhstlt2yYxTQyrlJ3ZKuVKfI8tPU+fs9naMoP8ZcdhRcW99w/tENXYh61GPMKu9Q2oARcB6CP9Qs+DQxMN3BU+xbGZIva7wHoRg+aIVOAqoD1W5572I2U8sYpeNgd6TTbDpttMb0C5wdCGuRtYnbfQgqEY+TaBJhGIr7rIJEATimr2oeGwUjzHsOF1YI5gMf1Bxcz9vsdrT2k+5X7JKTOFs0jr0pfakWlgowaUtFFhzVOKSrGY+0y3YYEKJ+tkXPvi2Hz6iB8jUxKZ3xLpkfk1Mm7F0qCRYmzmlhCouvDDTKFviXDM2agGnXCIFJ8llM4KgvXUUbK5omK5TxFcrxtFqjdLurbO9V+xAhg==",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "juan.perez@ejemplo.com.account",
      "publicData": {
        "accountEmail": "juan.perez@ejemplo.com",
        "accountPhone": "5551234567",
        "accountCompany": "Empresa Ejemplo",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "name": "Juan Pérez"
      }
    }
  }
}
```

</TabItem>
<TabItem value="error" label="400 Bad Request - Credenciales Inválidas">

```json
{
  "code": "BadRequest",
  "message": "invalid_credentials"
}
```

</TabItem>
<TabItem value="notfound" label="404 Not Found - Cliente No Encontrado">

```json
{
  "code": "NotFound",
  "message": "client_not_found"
}
```

</TabItem>
<TabItem value="validation" label="409 Conflict - Error de Validación">

```json
{
  "validationError": "Campos requeridos faltantes: faceBase64, masterPassword, identificationMethod"
}
```

</TabItem>
<TabItem value="zelfproof" label="409 Conflict - Cuenta Sin ZelfProof">

```json
{
  "code": "Conflict",
  "message": "account_doesnt_contain_zelf_proof"
}
```

</TabItem>
</Tabs>

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data.token` | string | Token de autenticación JWT para llamadas API posteriores |
| `data.zelfProof` | string | Prueba biométrica cifrada para autenticación segura |
| `data.zelfAccount.url` | string | URL de IPFS donde se almacenan los datos de la cuenta |
| `data.zelfAccount.cid` | string | Identificador de contenido para la cuenta almacenada en IPFS |
| `data.zelfAccount.ipfsHash` | string | Hash IPFS de los datos de cuenta almacenados |
| `data.zelfAccount.pinned` | boolean | Si la cuenta está fijada en IPFS |
| `data.zelfAccount.web3` | boolean | Si la cuenta soporta características Web3 |
| `data.zelfAccount.name` | string | Nombre del archivo de cuenta en IPFS |
| `data.zelfAccount.publicData.accountEmail` | string | Dirección de correo electrónico del cliente |
| `data.zelfAccount.publicData.accountPhone` | string | Número de teléfono del cliente |
| `data.zelfAccount.publicData.accountCompany` | string | Nombre de la empresa del cliente |
| `data.zelfAccount.publicData.accountCountryCode` | string | Código de país del cliente |
| `data.zelfAccount.publicData.accountType` | string | Tipo de cuenta (siempre "client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Nivel de suscripción (ej., "free") |
| `data.zelfAccount.publicData.name` | string | Nombre para mostrar del cliente |

## Métodos de Autenticación

### Autenticación por Correo Electrónico
Usar la dirección de correo electrónico del cliente para autenticación:

```json
{
  "email": "cliente@ejemplo.com",
  "faceBase64": "data:image/jpeg;base64,...",
  "masterPassword": "contraseña123",
  "identificationMethod": "email"
}
```

### Autenticación por Teléfono
Usar el número de teléfono del cliente para autenticación:

```json
{
  "countryCode": "+1",
  "phone": "5551234567",
  "faceBase64": "data:image/jpeg;base64,...",
  "masterPassword": "contraseña123",
  "identificationMethod": "phone"
}
```

## Características de Seguridad

- **Verificación Biométrica**: El reconocimiento facial asegura que solo el propietario de la cuenta pueda autenticarse
- **Contraseña Maestra**: Capa adicional de seguridad para descifrado de cuenta
- **Tokens JWT**: Tokens de autenticación seguros y sin estado
- **Almacenamiento IPFS**: Almacenamiento descentralizado de datos de cuenta
- **Pruebas de Conocimiento Cero**: Tecnología ZelfProof para autenticación que preserva la privacidad

## Manejo de Errores

| Código de Estado | Descripción | Causas Comunes |
|------------------|-------------|----------------|
| 400 | Solicitud Incorrecta | Formato de solicitud inválido o campos requeridos faltantes |
| 401 | No Autorizado | Credenciales inválidas o falla de autenticación |
| 404 | No Encontrado | La cuenta de cliente no existe |
| 409 | Conflicto | Errores de validación, solicitudes duplicadas, o cuenta sin ZelfProof |
| 500 | Error Interno del Servidor | Error de procesamiento del lado del servidor |

## Notas

- El token JWT devuelto puede usarse para llamadas API autenticadas posteriores
- Las imágenes faciales deben proporcionarse como datos URL codificados en base64
- El `identificationMethod` debe coincidir con las credenciales proporcionadas (email o teléfono)
- La contraseña maestra es requerida para descifrado y verificación de cuenta
- Todos los datos biométricos se procesan de forma segura y nunca se almacenan permanentemente
- El ZelfProof permite capacidades de verificación sin conexión

## Endpoints Relacionados

- [Crear Cuenta](./crear-cuenta) - Crear una nueva cuenta de cliente
- [Verificar Cuenta](./verificar-cuenta) - Verificar existencia de cuenta
- [Actualizar Cuenta](./actualizar-cuenta) - Actualizar información de cuenta
- [Eliminar Cuenta](./eliminar-cuenta) - Eliminar cuenta