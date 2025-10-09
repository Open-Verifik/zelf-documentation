---
id: list-all-app-logins
title: Listar Todos los Inicios de Sesión de Aplicación
description: Recuperar una lista de todos los intentos de inicio de sesión de aplicación con información detallada de validación
slug: /recursos/listar-todos-los-inicios-de-sesion-de-aplicacion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Listar Todos los Inicios de Sesión de Aplicación

## Endpoint

```
GET https://api.verifik.co/v2/app-logins
```

Este endpoint recupera una lista de intentos de inicio de sesión de aplicación con información detallada de validación para email, teléfono y biometría. La respuesta incluye una matriz de datos que contiene información sobre los intentos de inicio de sesión y tipos de validación asociados (email, teléfono, biométrico).

### Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization  | `Bearer <token>`   |

### Parámetros

| Nombre de Parámetro                     | Tipo   | Requerido | Descripción                                                                                                           |
| ---------------------------------------- | ------ | --------- | --------------------------------------------------------------------------------------------------------------------- |
| `page`                                   | number | No        | Especifica la página de los resultados a recuperar. El valor por defecto es `1`.                                     |
| `populates[]`                            | array  | No        | Una matriz que especifica qué validaciones incluir (por ejemplo, `emailValidation`, `phoneValidation`, `biometricValidation`). |
| `sort`                                   | string | No        | Campo por el cual ordenar los resultados. El valor por defecto es por fecha de creación (`-createdAt`).               |
| `where-exists_emailValidation`           | number | No        | Filtrar resultados donde existe validación de email (`1` para incluir).                                             |
| `where-exists_phoneValidation`           | number | No        | Filtrar resultados donde existe validación de teléfono (`1` para incluir).                                          |
| `where-exists_biometricValidation`       | number | No        | Filtrar resultados donde existe validación biométrica (`1` para incluir).                                            |
| `like_name`                              | string | No        | Buscar resultados por nombre (soporta coincidencia parcial).                                                          |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins',
  params: {
    page: 1,
    'populates[]': ['emailValidation', 'phoneValidation', 'biometricValidation'],
    sort: '-createdAt'
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

conn.request("GET", "/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt")! as URL,
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
  "data": [
    {
      "_id": "66e49e46dbfa9731ceb9d477",
      "client": "613375a1eab2fe08527f81e2",
      "name": "Cuenta Principal de Verifik",
      "status": "validado",
      "project": "6266193db77ccc8111730c90",
      "projectFlow": "658ed28b0990f300134d7b78",
      "type": "email",
      "emailValidation": {
        "_id": "66e49e45dbfa9731ceb9d475",
        "client": "613375a1eab2fe08527f81e2",
        "project": "6266193db77ccc8111730c90",
        "projectFlow": "658ed28b0990f300134d7b78",
        "status": "validado",
        "validationMethod": "verificationCode",
        "email": "miguel.trevinom@gmail.com",
        "emailData": {
          "firstName": "Cuenta Principal de Verifik",
          "title": "Aplicación Cliente Verifik",
          "projectName": "Aplicación Cliente Verifik",
          "contactEmail": "miguel@verifik.co",
          "logo": "https://cdn.verifik.co/projects/VerifikClientApp_1726146056389-image.png",
          "authLink": "http://localhost:4400/sign-in/6266193db77ccc8111730c90?email=miguel.trevinom@gmail.com&otp=",
          "buttonColor": "#14AE5C",
          "buttonTxtColor": "#FFF"
        },
        "otp": "$2a$10$mMYT2vE6sx3J898UOPDeFeADuXYE3Gktkx9DwVUmDr0uiAu1qdp.y",
        "expiresAt": "2024-09-13T20:29:17.000Z",
        "extraParams": [],
        "type": "login",
        "redirectUrl": "https://verifik.app",
        "requires2FA": false,
        "ipAddress": "::ffff:172.17.0.1",
        "updatedAt": "2024-09-13T20:19:47.927Z",
        "createdAt": "2024-09-13T20:19:18.660Z",
        "__v": 0
      }
    }
  ]
}
```

  </TabItem>
</Tabs>

### Características

- **Datos Completos de Inicio de Sesión**: Recuperar información detallada sobre todos los intentos de inicio de sesión
- **Población de Validación**: Incluir detalles de validación de email, teléfono y biométrica
- **Filtrado Avanzado**: Filtrar por existencia de tipo de validación y coincidencia de nombre
- **Soporte de Paginación**: Navegar a través de grandes listas de intentos de inicio de sesión
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Opciones de Ordenamiento**: Ordenar resultados por fecha de creación u otros campos
