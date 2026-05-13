---
title: Crear Zelf Key
description: Almacena datos confidenciales como contraseñas, notas, ZOTP y tarjetas de crédito de forma segura.
keywords: [zelf keys, almacenar contraseñas, almacenar tarjetas de credito, almacenar notas, zotp]
---

# Crear Zelf Key

Almacena de forma segura datos confidenciales en tu Zelf ID. Los datos se cifran utilizando tu ZelfProof y se almacenan de forma redundante en redes de almacenamiento descentralizadas.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/:type
```

### Parámetros de Ruta

- `type`: El tipo de registro a almacenar. Debe ser uno de `password`, `notes`, `zotp`, o `credit-card`.

## Autenticación

Requiere un token JWT obtenido mediante `POST /api/sessions`.

## Cuerpo de la Solicitud

El cuerpo de la solicitud requiere campos comunes de validación biométrica junto con la carga útil de datos específica para el `type` elegido.

### Campos Comunes (Requeridos para todos los tipos)

- `faceBase64` (string, requerido): Imagen de selfie codificada en Base64 para validación biométrica de propiedad.
- `masterPassword` (string, requerido): La contraseña maestra asociada con tu Zelf ID.

### Carga de Contraseña (`/store/password`)

- `website` (string, requerido): URL del sitio web.
- `username` (string, requerido): El nombre de usuario o correo electrónico.
- `password` (string, requerido): La contraseña a almacenar.
- `notes` (string, opcional): Notas de texto adicionales.

### Carga de Notas (`/store/notes`)

- `keyValuePairs` (object, requerido): Un objeto JSON de hasta 10 pares clave-valor. Las claves deben tener menos de 50 caracteres y los valores menos de 1000 caracteres.

### Carga de ZOTP (`/store/zotp`)

- `website` (string, requerido): URL del sitio web.
- `username` (string, requerido): El nombre de usuario o correo electrónico.
- `secret` (string, requerido): La clave secreta TOTP para generar códigos.

### Carga de Tarjeta de Crédito (`/store/credit-card`)

- `cardNumber` (string, requerido): El número completo de la tarjeta de crédito. Debe pasar la validación de Luhn.
- `cvv` (string, requerido): El código de seguridad de la tarjeta.
- `expiryMonth` (string, requerido): Mes de vencimiento de 2 dígitos.
- `expiryYear` (string, requerido): Año de vencimiento de 4 dígitos.
- `cardName` (string, requerido): Nombre en la tarjeta.
- `bankName` (string, requerido): Nombre del banco emisor.

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "identifier": "miguel.zelf",
    "zelfProof": "eyJhbGciOiJSUzI1NiIsI...",
    "zelfProofQRCode": "data:image/png;base64,...",
    "ipfs": {
      "id": "019e21ec-8051-7300-975a-4a17acd151aa",
      "url": "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "ipfs_pin_hash": "bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "ipfsHash": "bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "cid": "bafkreiaca6bbkajifk6fzvgh2b4jhbeiq4ovrkg55zeuykxacdfk3z2xnu",
      "size": 21328,
      "user_id": "0e3eb3c3-b09c-47e5-aa47-4bdb96d22ceb",
      "date_pinned": "2026-05-13T15:20:08.420Z",
      "publicData": {
        "category": "miguel.zelf_password",
        "keyOwner": "miguel.zelf",
        "timestamp": "2026-05-13T15:20:06.602Z",
        "type": "password",
        "username": "testuser@zelf.world",
        "website": "https://github.com"
      },
      "network": "public",
      "pinned": true,
      "saved": true,
      "web3": true,
      "name": "miguel.zelf_H10M20",
      "created_at": "2026-05-13T15:20:08.420Z",
      "updated_at": "2026-05-13T15:20:08.420Z"
    },
    "NFT": null,
    "type": "password",
    "message": "Data stored successfully"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Devuelto si faltan campos obligatorios, si falla la validación (p. ej., tarjeta de crédito vencida, Luhn no válido) o si falla la validación de propiedad biométrica.

```json
{
  "error": "invalid_credit_card_number"
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

## Ejemplos

<Tabs>
<TabItem value="nodejs-password" label="Node.js (Contraseña)" default>

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/password', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  website: 'https://github.com',
  username: 'testuser@zelf.world',
  password: 'mySecretGitHub!123',
  notes: 'Work account'
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="nodejs-notes" label="Node.js (Notas)">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/notes', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  keyValuePairs: {
    "SSH Key": "ssh-rsa AAAAB3NzaC1yc2E...",
    "Environment": "Production"
  }
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Notes stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="nodejs-zotp" label="Node.js (ZOTP)">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/zotp', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  website: 'https://google.com',
  username: 'miguel@zelf.world',
  secret: 'JBSWY3DPEHPK3PXP'
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('ZOTP stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="nodejs-cc" label="Node.js (Tarjeta)">

```javascript
const axios = require('axios');

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/credit-card', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  cardName: 'Miguel A.',
  cardNumber: '4111111111111111',
  expiryMonth: '12',
  expiryYear: '2028',
  cvv: '123',
  bankName: 'Global Bank'
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Card stored successfully:', response.data.data.zelfProof);
```

</TabItem>

<TabItem value="curl-password" label="cURL (Contraseña)">

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/store/password" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "data:image/jpeg;base64,...",
    "masterPassword": "myStrongPassword123!",
    "website": "https://github.com",
    "username": "testuser@zelf.world",
    "password": "mySecretGitHub!123",
    "notes": "Work account"
  }'
```

</TabItem>
</Tabs>
