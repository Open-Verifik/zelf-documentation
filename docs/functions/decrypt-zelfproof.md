---
id: decrypt-zelfproof
title: Decrypt ZelfProof
sidebar_label: Decrypt ZelfProof
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST /api/zelf-proof/decrypt
```

## Description

Decrypt a ZelfProof by verifying against a live face image. Optionally provide a password or verifierKey if required by the proof. Returns the clear `publicData`, `metadata`, and additional details.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `faceBase64` | string | Yes | Base64-encoded face image |
| `livenessLevel` | string | Yes | "HIGH" | "MEDIUM" | "REGULAR" |
| `os` | string | Yes | "DESKTOP" | "ANDROID" | "IOS" |
| `password` | string | No | Password if proof was password-protected |
| `zelfProof` | string | Yes | Base64 ZelfProof to decrypt |
| `verifierKey` | string | No | Verifier key if required |

## Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Origin` | Yes | CORS origin validation |
| `Authorization` | Yes | Bearer JWT from client authentication |
| `Content-Type` | Yes | `application/json` |

## Request Examples

<Tabs>
<TabItem value="python" label="Python" default>

```python
import requests
import json

url = "https://api.zelf.world/api/zelf-proof/decrypt"

payload = json.dumps({
  "faceBase64": "[FACE_BASE64]",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "optional_password",
  "zelfProof": "[ZELFPROOF_BASE64]"
})
headers = {
  'Origin': 'https://yourdomain.com',
  'Authorization': 'Bearer <JWT>',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)
print(response.json())
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  faceBase64: '[FACE_BASE64]',
  livenessLevel: 'REGULAR',
  os: 'DESKTOP',
  password: 'optional_password',
  zelfProof: '[ZELFPROOF_BASE64]'
};

const res = await axios.post('https://api.zelf.world/api/zelf-proof/decrypt', data, {
  headers: {
    Origin: 'https://yourdomain.com',
    Authorization: `Bearer <JWT>`,
    'Content-Type': 'application/json'
  }
});
console.log(res.data);
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
# [tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder().build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Origin", "https://yourdomain.com".parse()?);
    headers.insert("Authorization", "Bearer <JWT>".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
      "faceBase64": "[FACE_BASE64]",
      "livenessLevel": "REGULAR",
      "os": "DESKTOP",
      "password": "optional_password",
      "zelfProof": "[ZELFPROOF_BASE64]"
    }"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let response = client
        .post("https://api.zelf.world/api/zelf-proof/decrypt")
        .headers(headers)
        .json(&json)
        .send()
        .await?;

    let body = response.text().await?;
    println!("{}", body);

    Ok(())
}
```

</TabItem>
</Tabs>

## Response Examples

<Tabs>
<TabItem value="200" label="200 OK">

```json
{
  "identifier": "ABC-123",
  "publicData": { "name": "John" },
  "metadata": { "appVersion": "2.1.0" },
  "faceCropBase64": "[BASE64]",
  "difficulty": "EASY"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict - Validation Error">

```json
{
  "validationError": "missing zelfProof\n"
}
```

</TabItem>
</Tabs>

## Error Codes

- `ERR_INVALID_IMAGE`
- `ERR_NO_FACE_DETECTED`
- `ERR_MULTIPLE_FACES_DETECTED`
- `ERR_INVALID_ZELFPROOF_BYTES`
- `ERR_PARSE_FAILED`
- `ERR_PASSWORD_REQUIRED`
- `ERR_INVALID_PASSWORD`
- `ERR_LIVENESS_FAILED`
- `ERR_VERIFICATION_FAILED`

## Notes

- `publicData` and `metadata` returned are flat key-value objects of strings.
- Ensure the provided `faceBase64` is the same person used during encryption (or the password/verifierKey if applicable).
