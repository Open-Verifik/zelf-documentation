---
sidebar_position: 3
---

# Crear un QR-Code ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/encrypt-qr-code
```

## Descripción

Crear un ZelfProof y devolver una imagen ZelfQR. Opcionalmente incluir `generateZelfProof: true` para también recibir los bytes `zelfProof` junto con el QR. `publicData` y `metadata` deben ser objetos JSON planos con valores string únicamente.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `livenessDetectionPriorCreation` | boolean | No | Requerir rostro vivo antes de la creación |
| `publicData` | object | No | Objeto plano con valores string para almacenar en texto claro |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 |
| `livenessLevel` | string | Sí | "HIGH" | "MEDIUM" | "REGULAR" |
| `metadata` | object | Sí | Objeto plano con valores string (sin anidación) |
| `os` | string | Sí | "DESKTOP" | "ANDROID" | "IOS" |
| `password` | string | No | Capa de contraseña opcional |
| `identifier` | string | Sí | Identificador definido por la aplicación |
| `referenceFaceBase64` | string | No | Rostro de referencia para coincidir |
| `requireLiveness` | boolean | No | Si es true, aplicar liveness durante la creación |
| `tolerance` | string | No | "REGULAR" | "SOFT" | "HARDENED" |
| `verifierKey` | string | No | Clave de verificación opcional usada después para vista previa/descifrado |
| `generateZelfProof` | boolean | No | Cuando es true, la respuesta también contiene `zelfProof` |

## Encabezados

| Encabezado | Requerido | Descripción |
|-----------|-----------|-------------|
| `Origin` | Sí | Validación CORS |
| `Authorization` | Sí | Bearer JWT de autenticación del cliente |
| `Content-Type` | Sí | `application/json` |

## Ejemplos de petición

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt-qr-code" \
  -H "Origin: https://tudominio.com" \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{
    "publicData": { "qrType": "verification", "qrId": "qr-123" },
    "metadata": { "appVersion": "2.1.0" },
    "faceBase64": "[FACE_BASE64]",
    "livenessLevel": "HIGH",
    "os": "DESKTOP",
    "identifier": "QR-ABC-123",
    "requireLiveness": true,
    "tolerance": "REGULAR",
    "generateZelfProof": true
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  publicData: { qrType: 'verification', qrId: 'qr-123' },
  metadata: { appVersion: '2.1.0' },
  faceBase64: '[FACE_BASE64]',
  livenessLevel: 'HIGH',
  os: 'DESKTOP',
  identifier: 'QR-ABC-123',
  requireLiveness: true,
  tolerance: 'REGULAR',
  generateZelfProof: true
};

const res = await axios.post('https://api.zelf.world/api/zelf-proof/encrypt-qr-code', data, {
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
  "publicData": {"qrType": "verification", "qrId": "qr-123"},
  "metadata": {"appVersion": "2.1.0"},
  "faceBase64": "[FACE_BASE64]",
  "livenessLevel": "HIGH",
  "os": "DESKTOP",
  "identifier": "QR-ABC-123",
  "requireLiveness": True,
  "tolerance": "REGULAR",
  "generateZelfProof": True
}
headers = {"Origin": "https://tudominio.com", "Authorization": "Bearer <JWT>", "Content-Type": "application/json"}
print(requests.post("https://api.zelf.world/api/zelf-proof/encrypt-qr-code", json=payload, headers=headers).json())
```

</TabItem>
</Tabs>

## Ejemplos de respuesta

<Tabs>
<TabItem value="200" label="200 OK">

```json
{
  "zelfQR": "data:image/png;base64,....",
  "zelfProof": "BASE64_STRING_OR_OMITTED"
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
| `zelfQR` | string | Data URL para código QR PNG |
| `zelfProof` | string | Bytes ZelfProof en base64 (presente cuando `generateZelfProof: true`) |

## Notas

- `publicData` y `metadata` deben ser objetos planos con valores string únicamente.
- `generateZelfProof` es opcional; cuando es true, la respuesta incluye tanto QR como prueba en bruto.
- El JWT debe incluir el email del cliente según el middleware de autenticación.