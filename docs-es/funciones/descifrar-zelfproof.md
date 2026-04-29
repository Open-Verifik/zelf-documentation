---
sidebar_position: 4
---

# Descifrar un ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint

```
POST {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-proof/decrypt
```

## Descripción

Descifrar un ZelfProof verificando contra una imagen facial en vivo. Opcionalmente proporcionar una contraseña o verifierKey si es requerida por la prueba. Devuelve el `publicData` claro, `metadata`, y detalles adicionales.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `faceBase64` | string | Sí | Imagen facial codificada en base64 |
| `livenessLevel` | string | Sí | "HIGH" | "MEDIUM" | "REGULAR" |
| `os` | string | Sí | "DESKTOP" | "ANDROID" | "IOS" |
| `password` | string | No | Contraseña si la prueba estaba protegida por contraseña |
| `zelfProof` | string | Sí | ZelfProof en base64 para descifrar |
| `verifierKey` | string | No | Clave de verificación si es requerida |

## Encabezados

| Encabezado | Requerido | Descripción |
|-----------|-----------|-------------|
| `Origin` | Sí | Validación CORS |
| `Authorization` | Sí | Bearer JWT de autenticación del cliente |
| `Content-Type` | Sí | `application/json` |

## Ejemplos de petición

<Tabs>
<TabItem value="python" label="Python" default>

```python
import requests
import json

url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-proof/decrypt"

payload = json.dumps({
  "faceBase64": "[FACE_BASE64]",
  "livenessLevel": "REGULAR",
  "os": "DESKTOP",
  "password": "optional_password",
  "zelfProof": "[ZELFPROOF_BASE64]"
})
headers = {
  'Origin': 'https://tudominio.com',
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

const res = await axios.post('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-proof/decrypt', data, {
  headers: {
    Origin: 'https://tudominio.com',
    Authorization: `Bearer <JWT>`,
    'Content-Type': 'application/json'
  }
});
console.log(res.data);
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder().build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Origin", "https://tudominio.com".parse()?);
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
        .post("{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-proof/decrypt")
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

## Ejemplos de respuesta

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
<TabItem value="409" label="409 Conflicto - Error de validación">

```json
{
  "validationError": "missing zelfProof\n"
}
```

</TabItem>
</Tabs>

## Códigos de error

- `ERR_INVALID_IMAGE`
- `ERR_NO_FACE_DETECTED`
- `ERR_MULTIPLE_FACES_DETECTED`
- `ERR_INVALID_ZELFPROOF_BYTES`
- `ERR_PARSE_FAILED`
- `ERR_PASSWORD_REQUIRED`
- `ERR_INVALID_PASSWORD`
- `ERR_LIVENESS_FAILED`
- `ERR_VERIFICATION_FAILED`

## Notas

- `publicData` y `metadata` devueltos son objetos planos de clave-valor con strings.
- Asegúrate de que el `faceBase64` proporcionado sea la misma persona usada durante el cifrado (o la contraseña/verifierKey si aplica).