---
title: Eliminar Zelf Key
description: Eliminar un registro específico de ZelfKeys.
keywords: [zelf keys, eliminar contraseña, remover registro]
---

# Eliminar Zelf Key

Elimina de forma permanente un registro de ZelfKeys almacenado. Debido a que los registros están vinculados criptográficamente al Zelf ID del usuario, la eliminación requiere validación biométrica que coincida con el creador original.

## Endpoint

```
PUT {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/delete/:id
```

### Parámetros de Ruta

- `id`: La cadena de identificación única del registro de ZelfKey a eliminar (obtenida de los endpoints de `list`).

## Autenticación

Requiere un token JWT obtenido mediante `POST /api/sessions`.

## Cuerpo de la Solicitud

- `faceBase64` (string, requerido): Imagen de selfie codificada en Base64 para validación biométrica de propiedad.
- `masterPassword` (string, requerido): La contraseña maestra asociada con tu Zelf ID.
- `removePGP` (boolean, opcional): Establecer en `true` si se envían `faceBase64` y `masterPassword` sin procesar y sin envoltura PGP.

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "success": true,
    "message": "ZelfKey deleted successfully",
    "result": {
      "deleted": [
        "bafy..."
      ],
      "message": "IPFS files deleted successfully"
    }
  }
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

Devuelto si falla la validación biométrica o de contraseña.

```json
{
  "message": "ERR_LIVENESS_FAILED",
  "code": "Bad Request"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Devuelto si el ID solicitado no existe.

```json
{
  "message": "not_found",
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

const response = await axios.put('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/delete/password_12345', {
  faceBase64: 'data:image/jpeg;base64,...',
  masterPassword: 'myStrongPassword123!',
  removePGP: true
}, {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log(response.data.data.message); // "ZelfKey deleted successfully"
```

</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X PUT "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/delete/password_12345" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "data:image/jpeg;base64,...",
    "masterPassword": "myStrongPassword123!",
    "removePGP": true
  }'
```

</TabItem>
</Tabs>
