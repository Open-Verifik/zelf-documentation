---
id: listar-todos-los-proyectos
title: Listar Todos los Proyectos
description: Recuperar una lista de todos los proyectos con filtrado opcional y paginación
slug: /recursos/listar-todos-los-proyectos
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Listar Todos los Proyectos

## Endpoint

```
GET https://api.verifik.co/v2/projects
```

Este endpoint te permite recuperar una lista de todos los proyectos dentro de tu cuenta Verifik. Puedes usar esto para obtener una vista detallada de múltiples proyectos, incluyendo su estado, países permitidos y configuraciones.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Consulta

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Número de página para paginación (por defecto: 1)                                             |
| `limit`       | number  | Número de registros por página (por defecto: 10, máximo: 100)                                |
| `status`      | string  | Filtrar por estado: `active`, `inactive`, `pending`                                          |
| `populates[]` | string  | Array opcional de datos relacionados para incluir. Opciones disponibles: `client`.          |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/projects',
  params: {
    page: 1,
    limit: 10,
    status: 'active',
    'populates[]': ['client']
  },
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

conn.request("GET", "/v2/projects?page=1&limit=10&status=active&populates[]=client", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/projects', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'active',
    'populates[]' => ['client']
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects?page=1&limit=10&status=active&populates[]=client")! as URL,
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
  "data": [
    {
      "_id": "project_123456789",
      "name": "Proyecto de Ejemplo",
      "allowedCountries": ["Colombia", "Estados Unidos"],
      "contactEmail": "test@verifik.co",
      "privacyUrl": "https://example.com/privacy",
      "termsAndConditionsUrl": "https://example.com/terms",
      "client": {
        "_id": "client_123456789",
        "name": "Cliente de Ejemplo",
        "email": "cliente@example.com"
      },
      "status": "active",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
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
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```

  </TabItem>
</Tabs>

### Características

- **Listado Completo**: Recupera todos los proyectos de tu cuenta
- **Paginación**: Soporte para paginación con control de página y límite
- **Filtrado**: Filtra proyectos por estado (activo, inactivo, pendiente)
- **Población de Datos**: Incluye información relacionada como datos del cliente
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Información Detallada**: Incluye estado, países permitidos y configuraciones
