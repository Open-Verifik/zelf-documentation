---
id: recuperar-un-flujo-de-proyecto
title: Recuperar un Flujo de Proyecto
description: Recuperar un flujo de proyecto específico usando su identificador único
slug: /recursos/recuperar-un-flujo-de-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recuperar un Flujo de Proyecto

## Endpoint

```
GET https://api.verifik.co/v2/project-flows/{id}
```

Este endpoint te permite recuperar un flujo de proyecto específico por su identificador único, incluyendo todos sus detalles de configuración y pasos.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Ruta

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Sí**   | El identificador único del flujo de proyecto a recuperar.       |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/project-flows/project_flow_123456789',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
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

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
}

conn.request("GET", "/v2/project-flows/project_flow_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/project-flows/project_flow_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/project-flows/project_flow_123456789")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

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
    "_id": "project_flow_123456789",
    "project": "project_123456789",
    "type": "onboarding",
    "status": "active",
    "version": 1,
    "name": "Flujo de Onboarding Completo",
    "description": "Flujo completo de onboarding con verificación de email, teléfono y biométrica",
    "configuration": {
      "emailVerification": {
        "enabled": true,
        "required": true,
        "method": "verificationCode"
      },
      "phoneVerification": {
        "enabled": true,
        "required": true,
        "method": "sms"
      },
      "biometricVerification": {
        "enabled": true,
        "required": true,
        "livenessDetection": true
      }
    },
    "steps": [
      {
        "stepType": "email",
        "order": 1,
        "required": true,
        "config": {
          "verificationMethod": "verificationCode"
        }
      },
      {
        "stepType": "phone",
        "order": 2,
        "required": true,
        "config": {
          "verificationMethod": "sms"
        }
      },
      {
        "stepType": "biometric",
        "order": 3,
        "required": true,
        "config": {
          "livenessDetection": true
        }
      }
    ],
    "client": "client_123456789",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "error": "Flujo de proyecto no encontrado",
  "message": "PROJECT_FLOW_NOT_FOUND"
}
```

  </TabItem>
</Tabs>

### Características

- **Recuperación por ID**: Obtén un flujo de proyecto específico usando su ID único
- **Información Completa**: Incluye todos los detalles del flujo incluyendo configuración y pasos
- **Configuración Detallada**: Información completa de verificación de email, teléfono y biométrica
- **Pasos del Flujo**: Secuencia completa de pasos con configuraciones específicas
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error detalladas para diferentes escenarios
