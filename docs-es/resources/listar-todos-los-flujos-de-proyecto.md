---
id: listar-todos-los-flujos-de-proyecto
title: Listar Todos los Flujos de Proyecto
description: Recuperar una lista de todos los flujos de proyecto con filtrado opcional y paginación
slug: /doc-es/recursos/listar-todos-los-flujos-de-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Listar Todos los Flujos de Proyecto

## Endpoint

```
GET https://api.verifik.co/v2/project-flows
```

Este endpoint te permite recuperar una lista de todos los flujos de proyecto dentro de tu cuenta Verifik. Puedes filtrar por proyecto, tipo, estado y otros parámetros.

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
| `project`     | string  | Filtrar por ID de proyecto específico                                                          |
| `type`        | string  | Filtrar por tipo de flujo: `login`, `onboarding`                                             |
| `status`      | string  | Filtrar por estado: `draft`, `active`, `paused`                                              |
| `populates[]` | string  | Array opcional de datos relacionados para incluir. Opciones disponibles: `project`, `client`. |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/project-flows',
  params: {
    page: 1,
    limit: 10,
    type: 'onboarding',
    status: 'active',
    'populates[]': ['project']
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

conn.request("GET", "/v2/project-flows?page=1&limit=10&type=onboarding&status=active&populates[]=project", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/project-flows', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'type' => 'onboarding',
    'status' => 'active',
    'populates[]' => ['project']
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/project-flows?page=1&limit=10&type=onboarding&status=active&populates[]=project")! as URL,
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
      "_id": "project_flow_123456789",
      "project": {
        "_id": "project_123456789",
        "name": "Proyecto de Ejemplo",
        "status": "active"
      },
      "type": "onboarding",
      "status": "active",
      "version": 1,
      "name": "Flujo de Onboarding Completo",
      "description": "Flujo completo de onboarding con verificación de email, teléfono y biométrica",
      "client": "client_123456789",
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

- **Listado Completo**: Recupera todos los flujos de proyecto de tu cuenta
- **Paginación**: Soporte para paginación con control de página y límite
- **Filtrado Avanzado**: Filtra por proyecto, tipo y estado
- **Población de Datos**: Incluye información relacionada como datos del proyecto
- **Múltiples Lenguajes**: Soporte para JavaScript, Python, PHP y Swift
- **Información Detallada**: Incluye estado, versión y configuraciones del flujo
