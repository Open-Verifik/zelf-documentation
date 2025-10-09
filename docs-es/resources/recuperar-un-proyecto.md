---
id: recuperar-un-proyecto
title: Recuperar un Proyecto
description: Recuperar un proyecto específico usando su identificador único
slug: /doc-es/recursos/recuperar-un-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recuperar un Proyecto

## Endpoint

```
GET https://api.verifik.co/v2/projects/{id}
```

Con este servicio, puedes traer todos los proyectos que has creado o si solo quieres uno, puedes especificar el ID del proyecto y el endpoint devolverá solo el proyecto seleccionado.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Ruta

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Sí**   | ID del Proyecto del que quieres obtener la información.        |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/projects/project_123456789',
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

conn.request("GET", "/v2/projects/project_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/projects/project_123456789', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects/project_123456789")! as URL,
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
    "_id": "project_123456789",
    "name": "Proyecto de Ejemplo",
    "allowedCountries": ["Colombia", "Estados Unidos"],
    "contactEmail": "test@verifik.co",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "client": "client_123456789",
    "status": "active",
    "branding": {
      "logo": "https://example.com/logo.png",
      "primaryColor": "#007bff",
      "secondaryColor": "#6c757d",
      "customDomain": "auth.example.com"
    },
    "settings": {
      "defaultLanguage": "en",
      "timezone": "UTC",
      "webhookUrl": "https://example.com/webhook"
    },
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
  "error": "Proyecto no encontrado",
  "message": "PROJECT_NOT_FOUND"
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

- **Recuperación por ID**: Obtén un proyecto específico usando su ID único
- **Información Completa**: Incluye todos los detalles del proyecto incluyendo marca y configuraciones
- **Datos de Marca**: Información de branding como logo, colores y dominio personalizado
- **Configuraciones**: Configuraciones específicas del proyecto como idioma y zona horaria
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error detalladas para diferentes escenarios
