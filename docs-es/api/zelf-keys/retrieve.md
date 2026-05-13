---
title: Recuperar Zelf Key
description: Recupera y descifra un registro específico de ZelfKeys.
keywords: [zelf keys, recuperar registro, descifrar contraseña, obtener contraseña]
---

# Recuperar Zelf Key

Recupera y descifra localmente un registro almacenado de ZelfKeys para revelar sus datos confidenciales.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/retrieve
```

## Autenticación

Requiere un token JWT obtenido mediante `POST /api/sessions`.

## Cuerpo de la Solicitud

- `zelfProof` (string, requerido): La cadena ZelfProof cifrada del registro que se va a recuperar. Se obtiene desde los endpoints de lista.
- `faceBase64` (string, requerido): Imagen de selfie codificada en Base64 para autorización de descifrado biométrico.
- `password` (string, requerido): La contraseña maestra asociada con tu Zelf ID.
- `type` (string, requerido): El tipo de registro (`password`, `notes`, `zotp`, `credit-card`).
- `removePGP` (boolean, opcional): Establecer en `true` si se envían `faceBase64` y `password` sin procesar y sin envoltura PGP.

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

El objeto `data` devuelto contiene los valores confidenciales descifrados envueltos en una propiedad `pgp` para seguridad de transporte (si aplica) o directamente en `metadata`.

```json
{
  "data": {
    "identifier": "miguel.zelf",
    "publicData": {
      "website": "https://github.com",
      "username": "testuser@zelf.world",
      "timestamp": "2026-05-13T15:23:04.010Z",
      "type": "password"
    },
    "metadata": {
      "password": "mySecretGitHub!123",
      "notes": "Work account"
    },
    "pgp": "-----BEGIN PGP MESSAGE-----\n...",
    "timestamp": "2026-05-13T10:00:00.000Z"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Devuelto si falta el `zelfProof` o si falla el descifrado debido a una falta de coincidencia biométrica o contraseña incorrecta.

```json
{
  "message": "failed_to_decrypt",
  "code": "Conflict"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="nodejs" label="Node.js" default>

```javascript
const axios = require('axios');

// Primero, obtenemos la lista de registros
const recordsResponse = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=password', {
  headers: { 'Authorization': `Bearer ${token}`, 'Origin': 'https://yourdomain.com' }
});

const myPasswordRecord = recordsResponse.data.data.data[0];

// Luego, recuperamos y desciframos el registro específico usando su zelfProof
const decryptedResponse = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/retrieve', {
  zelfProof: myPasswordRecord.zelfProof,
  type: "password",
  faceBase64: 'data:image/jpeg;base64,...',
  password: 'myStrongPassword123!',
  removePGP: true
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Contraseña Descifrada:', decryptedResponse.data.data.metadata.password);
```

</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/retrieve" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "zelfProof": "eyJhbGciOiJ...",
    "type": "password",
    "faceBase64": "data:image/jpeg;base64,...",
    "password": "myStrongPassword123!",
    "removePGP": true
  }'
```

</TabItem>
</Tabs>
