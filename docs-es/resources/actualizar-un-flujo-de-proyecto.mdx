---
id: actualizar-un-flujo-de-proyecto
title: Actualizar un Flujo de Proyecto
description: Actualizar una configuración de flujo de proyecto existente
slug: /recursos/actualizar-un-flujo-de-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Actualizar un Flujo de Proyecto

## Endpoint

```
PUT https://api.verifik.co/v2/project-flows/{id}
```

Este endpoint te permite actualizar una configuración de flujo de proyecto existente. Puedes modificar los pasos del flujo, configuraciones y otros parámetros específicos del flujo.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Parámetros de Ruta

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Sí**   | El identificador único del flujo de proyecto a actualizar.     |

### Parámetros del Cuerpo

| Name            | Type   | Required | Description                                                                                    |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| `name`          | string | No       | Nombre del flujo de proyecto para propósitos de identificación.                              |
| `description`   | string | No       | Descripción del flujo de proyecto y su propósito.                                              |
| `status`        | string | No       | Estado del flujo de proyecto: `draft`, `active`, `paused`                                     |
| `configuration` | object | No       | Objeto de configuración que contiene configuraciones específicas del flujo.                  |
| `steps`         | array  | No       | Array de pasos que definen la secuencia del flujo.                                             |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/v2/project-flows/project_flow_123456789',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    name: 'Flujo de Onboarding Actualizado',
    description: 'Descripción actualizada para el flujo de onboarding',
    status: 'active',
    configuration: {
      emailVerification: {
        enabled: true,
        required: true,
        method: 'verificationCode'
      },
      phoneVerification: {
        enabled: true,
        required: true,
        method: 'sms'
      },
      biometricVerification: {
        enabled: true,
        required: true,
        livenessDetection: true,
        antiSpoofing: true
      }
    }
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
  "name": "Flujo de Onboarding Actualizado",
  "description": "Descripción actualizada para el flujo de onboarding",
  "status": "active",
  "configuration": {
    "emailVerification": {
      "enabled": True,
      "required": True,
      "method": "verificationCode"
    },
    "phoneVerification": {
      "enabled": True,
      "required": True,
      "method": "sms"
    },
    "biometricVerification": {
      "enabled": True,
      "required": True,
      "livenessDetection": True,
      "antiSpoofing": True
    }
  }
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("PUT", "/v2/project-flows/project_flow_123456789", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://api.verifik.co/v2/project-flows/project_flow_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'name' => 'Flujo de Onboarding Actualizado',
    'description' => 'Descripción actualizada para el flujo de onboarding',
    'status' => 'active',
    'configuration' => [
      'emailVerification' => [
        'enabled' => true,
        'required' => true,
        'method' => 'verificationCode'
      ],
      'phoneVerification' => [
        'enabled' => true,
        'required' => true,
        'method' => 'sms'
      ],
      'biometricVerification' => [
        'enabled' => true,
        'required' => true,
        'livenessDetection' => true,
        'antiSpoofing' => true
      ]
    ]
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
  "name": "Flujo de Onboarding Actualizado",
  "description": "Descripción actualizada para el flujo de onboarding",
  "status": "active",
  "configuration": [
    "emailVerification": [
      "enabled": true,
      "required": true,
      "method": "verificationCode"
    ],
    "phoneVerification": [
      "enabled": true,
      "required": true,
      "method": "sms"
    ],
    "biometricVerification": [
      "enabled": true,
      "required": true,
      "livenessDetection": true,
      "antiSpoofing": true
    ]
  ]
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/project-flows/project_flow_123456789")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
    "_id": "project_flow_123456789",
    "project": "project_123456789",
    "type": "onboarding",
    "status": "active",
    "version": 1,
    "name": "Flujo de Onboarding Actualizado",
    "description": "Descripción actualizada para el flujo de onboarding",
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
        "livenessDetection": true,
        "antiSpoofing": true
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
    "updatedAt": "2024-01-15T10:35:00Z"
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
  <TabItem value="400" label="400">

```json
{
  "error": "Configuración inválida",
  "message": "INVALID_CONFIGURATION"
}
```

  </TabItem>
</Tabs>

### Características

- **Actualización Flexible**: Actualiza solo los campos que necesites cambiar
- **Configuración Avanzada**: Modifica configuraciones de verificación detalladas
- **Estado del Flujo**: Cambia el estado del flujo (borrador, activo, pausado)
- **Anti-Spoofing**: Configuración avanzada de detección de vida y anti-spoofing
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error detalladas para diferentes escenarios
