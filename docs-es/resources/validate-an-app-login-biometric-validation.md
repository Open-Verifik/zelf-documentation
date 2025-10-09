---
id: validate-an-app-login-biometric-validation
title: Validar una Validación Biométrica de Inicio de Sesión de Aplicación
description: Procesar datos biométricos enviados por usuarios para verificar su identidad y completar el proceso de validación
slug: /recursos/validar-una-validacion-biometrica-de-inicio-de-sesion-de-aplicacion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validar una Validación Biométrica de Inicio de Sesión de Aplicación

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/validate
```

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuario a través de reconocimiento facial y detección de vida. Este endpoint procesa los datos biométricos enviados por usuarios para verificar su identidad y completar el proceso de validación. Esto se usa típicamente después de que un usuario ha completado su sesión de detección de vida.

### Headers

| Nombre         | Valor                        |
| -------------- | ---------------------------- |
| Content-Type   | `application/json`           |
| Authorization  | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
El Token JWT que debes usar al validar validaciones biométricas debe contener un token `livenessSession` válido que se proporcionó durante la creación de la validación biométrica.

El token proporcionado en esta respuesta es el token que puedes pasar a tu propia aplicación para iniciar sesión en tu aplicación. En la solución sin código, este token se adjunta a la `redirectUrl` de tu `projectFlow`.

Por ejemplo, `https://verifik.co?token={token}`
:::

### Parámetros

| Nombre | Tipo   | Requerido | Descripción                                                      |
| ------ | ------ | --------- | ---------------------------------------------------------------- |
| `image` | string | Sí        | Imagen codificada en base64 del rostro del usuario para validación biométrica. |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/biometric-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    image: 'datos_de_imagen_codificados_en_base64'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "image": "datos_de_imagen_codificados_en_base64"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("POST", "/v2/biometric-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/biometric-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'image' => 'datos_de_imagen_codificados_en_base64'
  ]
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <tu_token>"
]

let parameters = [
  "image": "datos_de_imagen_codificados_en_base64"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/validate")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

  </TabItem>
</Tabs>

### Respuesta

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "success": true,
  "data": {
    "_id": "biometric_validation_123456789",
    "status": "completado",
    "verificationResults": {
      "livenessDetection": "aprobado",
      "identityMatch": "aprobado",
      "qualityScore": 0.95,
      "antiSpoofing": "aprobado"
    },
    "biometricData": {
      "faceImage": "imagen_codificada_en_base64",
      "template": "datos_de_plantilla_biometrica",
      "quality": "buena",
      "livenessScore": 0.95
    },
    "riskScore": 0.05,
    "completedAt": "2024-01-15T10:32:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "error": "Datos biométricos inválidos",
  "message": "INVALID_BIOMETRIC_DATA"
}
```

  </TabItem>
  <TabItem value="400-2" label="400 (Detección de Vida Fallida)">

```json
{
  "error": "La detección de vida falló",
  "message": "LIVENESS_DETECTION_FAILED"
}
```

  </TabItem>
  <TabItem value="400-3" label="400 (Verificación de Identidad Fallida)">

```json
{
  "error": "La verificación de identidad falló",
  "message": "IDENTITY_VERIFICATION_FAILED"
}
```

  </TabItem>
</Tabs>

### Características

- **Verificación Biométrica**: Procesar reconocimiento facial y detección de vida
- **Evaluación de Calidad**: Analizar calidad de imagen y calidad de plantilla biométrica
- **Protección Anti-Spoofing**: Seguridad avanzada contra intentos biométricos falsos
- **Puntuación de Riesgo**: Calcular puntuaciones de riesgo para decisiones de autenticación
- **Token de Autenticación**: Generar tokens seguros para acceso a la aplicación
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Resultados Completos**: Resultados detallados de verificación y datos biométricos
- **Características de Seguridad**: Validación de sesión de vida y generación de token seguro
