---
sidebar_position: 5
---

# Vista Previa ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/preview
```

## Descripción

Vista previa de un ZelfProof sin verificación facial. Esto devuelve información limitada como `publicData` y si está presente una capa de contraseña. Si la prueba requiere una `verifierKey`, inclúyela.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `zelfProof` | string | Sí | ZelfProof en base64 para vista previa |
| `verifierKey` | string | No | Clave de verificación si es requerida |

## Encabezados

| Encabezado | Requerido | Descripción |
|-----------|-----------|-------------|
| `Origin` | Sí | Validación CORS |
| `Authorization` | Sí | Bearer JWT de autenticación del cliente |
| `Content-Type` | Sí | `application/json` |

## Ejemplos de petición

<Tabs>
<TabItem value="nodejs" label="Node.js" default>

```javascript
const axios = require('axios');

const data = {
  zelfProof: '[ZELFPROOF_BASE64]'
};

const res = await axios.post('https://api.zelf.world/api/zelf-proof/preview', data, {
  headers: {
    Origin: 'https://tudominio.com',
    Authorization: `Bearer <JWT>`,
    'Content-Type': 'application/json'
  }
});
console.log(res.data);
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/preview" \
  -H "Origin: https://tudominio.com" \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{
    "zelfProof": "[ZELFPROOF_BASE64]"
  }'
```

</TabItem>
</Tabs>

## Ejemplos de respuesta

<Tabs>
<TabItem value="200" label="200 OK">

```json
{
  "passwordLayer": "WithPassword",
  "publicData": {
    "ethAddress": "0x123...",
    "btcAddress": "bc1q..."
  },
  "requireLiveness": true
}
```

</TabItem>
<TabItem value="500" label="500 - Error de parseo">

```json
{
  "error": "PROVIDED ZELFPROOF BYTES COULD NOT BE DECODED AS A BASE64 STRING."
}
```

</TabItem>
</Tabs>

## Notas

- Este endpoint no valida el rostro ni descifra metadatos privados.
- Usa `decrypt` cuando se requiera acceso completo a los datos.
- Si la prueba fue creada con una `verifierKey`, puede ser requerida aquí también.