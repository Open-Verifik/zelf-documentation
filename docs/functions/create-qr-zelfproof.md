---
id: create-qr-zelfproof
title: Create QR ZelfProof
sidebar_label: Create QR ZelfProof
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/encrypt-qr-code
```

## Description

Create a ZelfProof and return a ZelfQR image. Optionally include `generateZelfProof: true` to also receive the raw `zelfProof` bytes alongside the QR. `publicData` and `metadata` must be flat JSON objects with string values only.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `livenessDetectionPriorCreation` | boolean | No | Require live face prior to creation |
| `publicData` | object | No | Flat object with string values to store in cleartext |
| `faceBase64` | string | Yes | Base64-encoded face image |
| `livenessLevel` | string | Yes | "HIGH" | "MEDIUM" | "REGULAR" |
| `metadata` | object | Yes | Flat object with string values (no nesting) |
| `os` | string | Yes | "DESKTOP" | "ANDROID" | "IOS" |
| `password` | string | No | Optional password layer |
| `identifier` | string | Yes | Application-defined identifier |
| `referenceFaceBase64` | string | No | Reference face for matching |
| `requireLiveness` | boolean | No | If true, enforce liveness during creation |
| `tolerance` | string | No | "REGULAR" | "SOFT" | "HARDENED" |
| `verifierKey` | string | No | Optional verifier key used later for preview/decrypt |
| `generateZelfProof` | boolean | No | When true, response also contains `zelfProof` |

## Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Origin` | Yes | CORS origin validation |
| `Authorization` | Yes | Bearer JWT from client authentication |
| `Content-Type` | Yes | `application/json` |

## Request Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt-qr-code" \
  -H "Origin: https://yourdomain.com" \
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
    Origin: 'https://yourdomain.com',
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
headers = {"Origin": "https://yourdomain.com", "Authorization": "Bearer <JWT>", "Content-Type": "application/json"}
print(requests.post("https://api.zelf.world/api/zelf-proof/encrypt-qr-code", json=payload, headers=headers).json())
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="200" label="200 OK">

```json
{
  "zelfQR": "data:image/png;base64,....",
  "zelfProof": "BASE64_STRING_OR_OMITTED"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict - Validation Error">

```json
{
  "validationError": "missing metadata\n. missing publicData\n. ..."
}
```

</TabItem>
</Tabs>

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `zelfQR` | string | Data URL for PNG QR code |
| `zelfProof` | string | Base64 ZelfProof bytes (present when `generateZelfProof: true`) |

## Notes

- `publicData` and `metadata` must be flat objects with string values only.
- `generateZelfProof` is optional; when true, the response includes both QR and raw proof.
- JWT must include client email per authentication middleware.
