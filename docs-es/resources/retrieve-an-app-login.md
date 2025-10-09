---
id: retrieve-an-app-login
title: Recuperar un Inicio de Sesión de Aplicación
description: Recuperar un registro de inicio de sesión de aplicación específico por su ID con campos poblados opcionales
slug: /recursos/recuperar-un-inicio-de-sesion-de-aplicacion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recuperar un Inicio de Sesión de Aplicación

## Endpoint

```
GET https://api.verifik.co/v2/app-logins/{id}
```

Este endpoint recupera un registro de inicio de sesión de aplicación específico por su ID, junto con campos poblados opcionales como `emailValidation`, `phoneValidation` o `biometricValidation`.

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer <token>`   |

### Parámetros

| Nombre | Tipo   | Requerido | Descripción                                                 |
| ------ | ------ | --------- | ----------------------------------------------------------- |
| `id`   | string | Sí        | El ID único del registro de inicio de sesión de aplicación que deseas recuperar. |

### Parámetros de Consulta

| Nombre         | Tipo  | Requerido | Descripción                                                                            |
| -------------- | ----- | --------- | -------------------------------------------------------------------------------------- |
| `populates[]`  | array | No        | Una matriz que especifica qué campos de validación poblar (por ejemplo, `biometricValidation`). |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f',
  params: {
    'populates[]': ['biometricValidation']
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

conn.request("GET", "/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation")! as URL,
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
  "data": {
    "_id": "66e464acbad79f3a380d408f",
    "client": "613375a1eab2fe08527f81e2",
    "name": "",
    "status": "pendiente",
    "project": "6266193db77ccc8111730c90",
    "projectFlow": "658ed28b0990f300134d7b78",
    "type": "faceliveness",
    "biometricValidation": "66e464acbad79f3a380d408d",
    "accessControlLog": "66e464acbad79f3a380d4090",
    "updatedAt": "2024-09-13T16:13:32.942Z",
    "createdAt": "2024-09-13T16:13:32.942Z",
    "__v": 0
  }
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  </TabItem>
</Tabs>

### Características

- **Recuperación de Inicio de Sesión Individual**: Obtener información detallada sobre un intento de inicio de sesión específico
- **Población de Validación**: Incluir objetos de validación poblados (email, teléfono, biométrico)
- **Datos Completos de Inicio de Sesión**: Acceder a todos los detalles del inicio de sesión incluyendo estado y timestamps
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas 404 apropiadas para registros de inicio de sesión inexistentes
- **Población Flexible**: Elegir qué campos de validación poblar
