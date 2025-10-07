# Create ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/encrypt
```

## Description

Create a new ZelfProof (zero-knowledge biometric proof) using a live face image. The request can include flat string key-value `publicData` and `metadata`. The response returns a base64 ZelfProof.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `livenessDetectionPriorCreation` | boolean | No | If true, requires live face prior to creation |
| `publicData` | object | No | Flat object with string values to store in cleartext |
| `faceBase64` | string | Yes | Base64-encoded face image |
| `livenessLevel` | string | Yes | Liveness level: "HIGH" | "MEDIUM" | "REGULAR" |
| `metadata` | object | Yes | Flat object with string values (no nesting) |
| `os` | string | Yes | "DESKTOP" | "ANDROID" | "IOS" |
| `password` | string | No | Optional password layer |
| `identifier` | string | Yes | Application-defined identifier |
| `referenceFaceBase64` | string | No | Reference face for matching |
| `requireLiveness` | boolean | No | If true, enforce liveness during creation |
| `tolerance` | string | No | "REGULAR" | "SOFT" | "HARDENED" |
| `verifierKey` | string | No | Optional verifier key used later for preview/decrypt |

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
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt" \
  -H "Origin: https://yourdomain.com" \
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
  "publicData": {"email": "john.doe@example.com"},
  "metadata": {"appVersion": "2.1.0"},
  "faceBase64": "[FACE_BASE64]",
  "livenessLevel": "HIGH",
  "os": "DESKTOP",
  "identifier": "ABC-123",
  "requireLiveness": True,
  "tolerance": "REGULAR"
}
headers = {"Origin": "https://yourdomain.com", "Authorization": "Bearer <JWT>", "Content-Type": "application/json"}
print(requests.post("https://api.zelf.world/api/zelf-proof/encrypt", json=payload, headers=headers).json())
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "zelfProof": "BASE64_STRING"
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
| `zelfProof` | string | Base64 ZelfProof bytes |

## Notes

- `publicData` and `metadata` must be flat objects with string values only.
- JWT must include client email per authentication middleware.
