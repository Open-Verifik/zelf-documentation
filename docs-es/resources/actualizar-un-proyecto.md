---
id: actualizar-un-proyecto
title: Actualizar un Proyecto
description: Actualizar un registro de proyecto existente
slug: /doc-es/recursos/actualizar-un-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Actualizar un Proyecto

## Endpoint

```
PUT https://api.verifik.co/v2/projects/{id}
```

Este endpoint te permite actualizar un registro de proyecto existente. Puedes modificar la configuración del proyecto, marca, países permitidos y otras configuraciones específicas del proyecto.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Parámetros de Ruta

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Sí**   | El identificador único del proyecto a actualizar.               |

### Parámetros del Cuerpo

| Name                      | Type                | Required | Description                                                                                    |
| ------------------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `name`                    | string              | No       | Nombre del proyecto.                                                                           |
| `allowedCountries`        | Array of string     | No       | Países donde se utilizará tu proyecto.                                                         |
| `contactEmail`            | string              | No       | Dirección de email principal del propietario del proyecto                                      |
| `privacyUrl`              | string              | No       | Enlace a tu política de privacidad                                                             |
| `termsAndConditionsUrl`  | string              | No       | Enlace a tus términos y condiciones                                                            |
| `status`                  | string              | No       | Estado del proyecto: `active`, `inactive`, `pending`                                          |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/v2/projects/project_123456789',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    name: 'Nombre de Proyecto Actualizado',
    allowedCountries: ['Colombia', 'Estados Unidos', 'México'],
    contactEmail: 'actualizado@verifik.co',
    status: 'active'
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
  "name": "Nombre de Proyecto Actualizado",
  "allowedCountries": ["Colombia", "Estados Unidos", "México"],
  "contactEmail": "actualizado@verifik.co",
  "status": "active"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("PUT", "/v2/projects/project_123456789", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://api.verifik.co/v2/projects/project_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'name' => 'Nombre de Proyecto Actualizado',
    'allowedCountries' => ['Colombia', 'Estados Unidos', 'México'],
    'contactEmail' => 'actualizado@verifik.co',
    'status' => 'active'
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
  "name": "Nombre de Proyecto Actualizado",
  "allowedCountries": ["Colombia", "Estados Unidos", "México"],
  "contactEmail": "actualizado@verifik.co",
  "status": "active"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects/project_123456789")! as URL,
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
    "_id": "project_123456789",
    "name": "Nombre de Proyecto Actualizado",
    "allowedCountries": ["Colombia", "Estados Unidos", "México"],
    "contactEmail": "actualizado@verifik.co",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "client": "client_123456789",
    "status": "active",
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
  "error": "Proyecto no encontrado",
  "message": "PROJECT_NOT_FOUND"
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
  <TabItem value="401" label="401">

```json
{
  "error": "No autorizado",
  "message": "UNAUTHORIZED"
}
```

  </TabItem>
</Tabs>

### Características

- **Actualización Flexible**: Actualiza solo los campos que necesites cambiar
- **Países Permitidos**: Modifica los países donde se puede usar el proyecto
- **Información de Contacto**: Actualiza el email de contacto del proyecto
- **Estado del Proyecto**: Cambia el estado del proyecto (activo, inactivo, pendiente)
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error detalladas para diferentes escenarios
