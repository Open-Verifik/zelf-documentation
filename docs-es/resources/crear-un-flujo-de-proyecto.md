---
id: crear-un-flujo-de-proyecto
title: Crear un Flujo de Proyecto
description: Crear una nueva configuración de flujo de proyecto
slug: /doc-es/recursos/crear-un-flujo-de-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear un Flujo de Proyecto

## Endpoint

```
POST https://api.verifik.co/v2/project-flows
```

Los Flujos de Proyecto definen configuraciones para un Proyecto en Verifik. En este contexto, definiremos varios puntos de datos que Verifik usará para realizar validaciones usando tecnologías sin contraseña y detección de vida.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Parámetros del Cuerpo

| Name            | Type   | Required | Description                                                                                    |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| `project`       | string | **Sí**   | El identificador único del proyecto al que pertenece este flujo.                               |
| `type`          | string | **Sí**   | Tipo de flujo: `login` o `onboarding`.                                                         |
| `name`          | string | **Sí**   | Nombre del flujo de proyecto para propósitos de identificación.                              |
| `description`   | string | No       | Descripción del flujo de proyecto y su propósito.                                              |
| `configuration` | object | **Sí**   | Objeto de configuración que contiene configuraciones específicas del flujo.                    |
| `steps`         | array  | **Sí**   | Array de pasos que definen la secuencia del flujo.                                             |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/project-flows',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    project: 'project_123456789',
    type: 'onboarding',
    name: 'Flujo de Onboarding Completo',
    description: 'Flujo completo de onboarding con verificación de email, teléfono y biométrica',
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
        livenessDetection: true
      }
    },
    steps: [
      {
        stepType: 'email',
        order: 1,
        required: true,
        config: {
          verificationMethod: 'verificationCode'
        }
      },
      {
        stepType: 'phone',
        order: 2,
        required: true,
        config: {
          verificationMethod: 'sms'
        }
      },
      {
        stepType: 'biometric',
        order: 3,
        required: true,
        config: {
          livenessDetection: true
        }
      }
    ]
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
  "project": "project_123456789",
  "type": "onboarding",
  "name": "Flujo de Onboarding Completo",
  "description": "Flujo completo de onboarding con verificación de email, teléfono y biométrica",
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
      "livenessDetection": True
    }
  },
  "steps": [
    {
      "stepType": "email",
      "order": 1,
      "required": True,
      "config": {
        "verificationMethod": "verificationCode"
      }
    },
    {
      "stepType": "phone",
      "order": 2,
      "required": True,
      "config": {
        "verificationMethod": "sms"
      }
    },
    {
      "stepType": "biometric",
      "order": 3,
      "required": True,
      "config": {
        "livenessDetection": True
      }
    }
  ]
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("POST", "/v2/project-flows", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/project-flows', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'project' => 'project_123456789',
    'type' => 'onboarding',
    'name' => 'Flujo de Onboarding Completo',
    'description' => 'Flujo completo de onboarding con verificación de email, teléfono y biométrica',
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
        'livenessDetection' => true
      ]
    ],
    'steps' => [
      [
        'stepType' => 'email',
        'order' => 1,
        'required' => true,
        'config' => [
          'verificationMethod' => 'verificationCode'
        ]
      ],
      [
        'stepType' => 'phone',
        'order' => 2,
        'required' => true,
        'config' => [
          'verificationMethod' => 'sms'
        ]
      ],
      [
        'stepType' => 'biometric',
        'order' => 3,
        'required' => true,
        'config' => [
          'livenessDetection' => true
        ]
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
  "project": "project_123456789",
  "type": "onboarding",
  "name": "Flujo de Onboarding Completo",
  "description": "Flujo completo de onboarding con verificación de email, teléfono y biométrica",
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
      "livenessDetection": true
    ]
  ],
  "steps": [
    [
      "stepType": "email",
      "order": 1,
      "required": true,
      "config": [
        "verificationMethod": "verificationCode"
      ]
    ],
    [
      "stepType": "phone",
      "order": 2,
      "required": true,
      "config": [
        "verificationMethod": "sms"
      ]
    ],
    [
      "stepType": "biometric",
      "order": 3,
      "required": true,
      "config": [
        "livenessDetection": true
      ]
    ]
  ]
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/project-flows")! as URL,
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
    "_id": "project_flow_123456789",
    "project": "project_123456789",
    "type": "onboarding",
    "status": "draft",
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
  <TabItem value="400" label="400">

```json
{
  "error": "ID de proyecto inválido",
  "message": "INVALID_PROJECT_ID"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "error": "Tipo de flujo inválido",
  "message": "INVALID_FLOW_TYPE"
}
```

  </TabItem>
</Tabs>

### Características

- **Creación de Flujos**: Crea nuevos flujos de proyecto con configuración completa
- **Tipos de Flujo**: Soporte para onboarding y login
- **Configuración Flexible**: Define pasos de verificación personalizados
- **Verificación Multi-factor**: Email, teléfono y biométrica
- **Detección de Vida**: Configuración de liveness detection
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error detalladas para diferentes escenarios
