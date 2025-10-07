---
sidebar_position: 2
---

# Crear ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/encrypt
```

## Descripción

Crea un nuevo ZelfProof (prueba biométrica de conocimiento cero) usando una imagen facial en vivo. La petición acepta `publicData` y `metadata` como objetos planos con claves y valores tipo string. La respuesta devuelve el ZelfProof codificado en base64.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `livenessDetectionPriorCreation` | boolean | No | Si es true, requiere rostro vivo antes de crear |
| `publicData` | object | No | Objeto plano con valores string almacenados en claro |
| `faceBase64` | string | Sí | Imagen facial en base64 |
| `livenessLevel` | string | Sí | Nivel de liveness: "HIGH" | "MEDIUM" | "REGULAR" |
| `metadata` | object | Sí | Objeto plano con valores string (sin anidación) |
| `os` | string | Sí | "DESKTOP" | "ANDROID" | "IOS" |
| `password` | string | No | Capa de contraseña opcional |
| `identifier` | string | Sí | Identificador definido por la app |
| `referenceFaceBase64` | string | No | Rostro de referencia para comparación |
| `requireLiveness` | boolean | No | Si es true, aplica liveness durante la creación |
| `tolerance` | string | No | "REGULAR" | "SOFT" | "HARDENED" |
| `verifierKey` | string | No | Clave de verificación para vista previa/descifrado |

## Encabezados

| Encabezado | Requerido | Descripción |
|-----------|-----------|-------------|
| `Origin` | Sí | Validación CORS |
| `Authorization` | Sí | Bearer JWT del cliente |
| `Content-Type` | Sí | `application/json` |

## Ejemplos de petición

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt" \
  -H "Origin: https://tudominio.com" \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{
    "publicData": { "email": "john.doe@example.com" },
    "metadata": { "appVersion": "2.1.0" },
    "faceBase64": "[FACE_BASE64]",
    "livenessLevel": "HIGH",
    "os": "DESKTOP",
    "identifier": "ABC-123",
    "requireLiveness": true,
    "tolerance": "REGULAR"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  publicData: { email: 'john.doe@example.com' },
  metadata: { appVersion: '2.1.0' },
  faceBase64: '[FACE_BASE64]',
  livenessLevel: 'HIGH',
  os: 'DESKTOP',
  identifier: 'ABC-123',
  requireLiveness: true,
  tolerance: 'REGULAR'
};

const res = await axios.post('https://api.zelf.world/api/zelf-proof/encrypt', data, {
  headers: {
    Origin: 'https://tudominio.com',
    Authorization: `Bearer <JWT>`,
    'Content-Type': 'application/json'
  }
});
console.log(res.data);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

payload = {
  "publicData": {"email": "john.doe@example.com"},
  "metadata": {"appVersion": "2.1.0"},
  "faceBase64": "[FACE_BASE64]",
  "livenessLevel": "HIGH",
  "os": "DESKTOP",
  "identifier": "ABC-123",
  "requireLiveness": True,
  "tolerance": "REGULAR"
}
headers = {"Origin": "https://tudominio.com", "Authorization": "Bearer <JWT>", "Content-Type": "application/json"}
print(requests.post("https://api.zelf.world/api/zelf-proof/encrypt", json=payload, headers=headers).json())
```

</TabItem>
</Tabs>

## Ejemplos de respuesta

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "zelfProof": "BASE64_STRING"
}
```

</TabItem>
<TabItem value="409" label="409 Conflicto - Error de validación">

```json
{
  "validationError": "missing metadata\n. missing publicData\n. ..."
}
```

</TabItem>
</Tabs>

## Campos de respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `zelfProof` | string | Bytes del ZelfProof en base64 |

## Notas

- `publicData` y `metadata` deben ser objetos planos con valores de tipo string.
- El JWT debe incluir el email del cliente (middleware de autenticación).
