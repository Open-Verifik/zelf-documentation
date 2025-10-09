---
id: crear-un-proyecto
title: Crear un Proyecto
description: Crear un nuevo proyecto para servicios de autenticación y validación
slug: /doc-es/recursos/crear-un-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear un Proyecto

## Endpoint

```
POST https://api.verifik.co/v2/projects
```

Un Proyecto es donde se almacena toda la información relacionada con la empresa o entidad que utilizará los servicios de autenticación y validación generados por Verifik. Esto se hace para asegurar que tu marca se represente correctamente cuando uses los servicios de Verifik.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros del Cuerpo

| Name                      | Type                | Required | Description                                                                                    |
| ------------------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `name`                    | string              | **Sí**   | Nombre del proyecto.                                                                           |
| `allowedCountries`        | Array of string     | **Sí**   | Países donde se utilizará tu proyecto, deben estar definidos correctamente, de lo contrario Verifik no puede enviar OTP a estos países. |
| `contactEmail`            | string              | **Sí**   | Dirección de email principal del propietario del proyecto                                      |
| `privacyUrl`              | string              | **Sí**   | Enlace a tu política de privacidad                                                             |
| `termsAndConditionsUrl`  | string              | **Sí**   | Enlace a tus términos y condiciones                                                            |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/projects',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    name: 'Proyecto de Ejemplo',
    allowedCountries: ['Colombia', 'Estados Unidos'],
    contactEmail: 'test@verifik.co',
    privacyUrl: 'https://example.com/privacy',
    termsAndConditionsUrl: 'https://example.com/terms'
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
  "name": "Proyecto de Ejemplo",
  "allowedCountries": ["Colombia", "Estados Unidos"],
  "contactEmail": "test@verifik.co",
  "privacyUrl": "https://example.com/privacy",
  "termsAndConditionsUrl": "https://example.com/terms"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("POST", "/v2/projects", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/projects', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'name' => 'Proyecto de Ejemplo',
    'allowedCountries' => ['Colombia', 'Estados Unidos'],
    'contactEmail' => 'test@verifik.co',
    'privacyUrl' => 'https://example.com/privacy',
    'termsAndConditionsUrl' => 'https://example.com/terms'
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
  "name": "Proyecto de Ejemplo",
  "allowedCountries": ["Colombia", "Estados Unidos"],
  "contactEmail": "test@verifik.co",
  "privacyUrl": "https://example.com/privacy",
  "termsAndConditionsUrl": "https://example.com/terms"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects")! as URL,
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
    "_id": "project_123456789",
    "name": "Proyecto de Ejemplo",
    "allowedCountries": ["Colombia", "Estados Unidos"],
    "contactEmail": "test@verifik.co",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "client": "client_123456789",
    "status": "active",
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
  "error": "Código de país inválido",
  "message": "INVALID_COUNTRY_CODE"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "error": "El nombre del proyecto ya existe",
  "message": "PROJECT_NAME_EXISTS"
}
```

  </TabItem>
</Tabs>

### Características

- **Creación de Proyectos**: Crea nuevos proyectos con configuración completa
- **Países Permitidos**: Define países donde se puede usar el proyecto
- **Información de Contacto**: Establece email de contacto para soporte
- **Enlaces Legales**: Configura políticas de privacidad y términos de servicio
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error detalladas para diferentes escenarios
