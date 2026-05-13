---
title: Vista Previa de Zelf Key
description: Vista previa de los metadatos públicos de un registro de ZelfKeys almacenado.
keywords: [zelf keys, vista previa registro, metadatos registro]
---

# Vista Previa de Zelf Key

Obtén una vista previa de los metadatos públicos no confidenciales asociados a un registro almacenado antes de solicitar el descifrado completo.

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/preview
```

## Autenticación

Requiere un token JWT obtenido mediante `POST /api/sessions`.

## Cuerpo de la Solicitud

- `zelfProof` (string, requerido): La cadena ZelfProof cifrada del registro a previsualizar.
- `faceBase64` (string, opcional): Imagen de selfie codificada en Base64 para verificación biométrica (si es requerida por la implementación).

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "success": true,
    "publicData": {
      "website": "https://github.com",
      "username": "testuser@zelf.world",
      "timestamp": "2026-05-13T10:00:00.000Z"
    },
    "message": "Data preview successful"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Devuelto si el parámetro `zelfProof` falta o no es válido.

```json
{
  "message": "zelfProof is required",
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

const response = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/preview', {
  zelfProof: "eyJhbGciOiJ...",
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Metadatos Públicos del Registro:', response.data.data.publicData);
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/preview" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "zelfProof": "eyJhbGciOiJ..."
  }'
```

</TabItem>
</Tabs>
