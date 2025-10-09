---
id: create-an-app-login-biometric-validation
title: Crear una Validación Biométrica de Inicio de Sesión de Aplicación
description: Crear una validación biométrica específicamente para flujo de inicio de sesión de aplicación
slug: /recursos/crear-una-validacion-biometrica-de-inicio-de-sesion-de-aplicacion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear una Validación Biométrica de Inicio de Sesión de Aplicación

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/app-login
```

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuario a través de reconocimiento facial y detección de vida durante el proceso de inicio de sesión. Este proceso asegura la autenticidad de los usuarios verificando sus características biométricas únicas a través de tecnología de seguridad avanzada. Este endpoint está específicamente diseñado para usuarios que están en medio de un flujo de inicio de sesión de aplicación.

### Headers

| Nombre         | Valor                        |
| -------------- | ---------------------------- |
| Content-Type   | `application/json`           |
| Authorization  | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
El Token JWT que debes usar al crear `Validaciones Biométricas de Inicio de Sesión de Aplicación` se proporciona desde el [`Inicio de Sesión de Aplicación`](https://docs.verifik.co/resources/app-logins/create-an-app-login) en la creación.
:::

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                                                                                 |
| ---------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `project`        | string  | Sí        | El identificador único para el proyecto donde se usará esta validación biométrica.                         |
| `projectFlow`    | string  | Sí        | El identificador único para la configuración del flujo del proyecto.                                       |
| `identifier`     | string  | Sí        | Un identificador único para el usuario o sesión (por ejemplo, email, teléfono o ID personalizado).         |
| `type`           | string  | Sí        | Debe establecerse en `login` para este endpoint.                                                            |
| `expiresAt`      | string  | No        | Fecha de expiración opcional para la sesión de validación.                                                 |
| `redirectUrl`    | string  | No        | URL opcional para redirección después de la validación.                                                     |
| `webhookUrl`     | string  | No        | URL opcional de webhook para notificaciones de validación.                                                 |
| `requires2FA`    | boolean | No        | Bandera opcional que indica si se requiere autenticación de dos factores.                                  |
| `ipAddress`      | string  | No        | Dirección IP opcional del usuario.                                                                         |
| `sendViaEmail`   | boolean | No        | Bandera opcional para enviar enlace de validación por email.                                               |
| `email`          | string  | No        | Dirección de email para enviar enlace de validación (requerido si sendViaEmail es true).                   |
| `language`       | string  | No        | Idioma para plantillas de email (en/es). Por defecto "en".                                                |

### Solicitud

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/biometric-validations/app-login',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  },
  data: {
    project: '507f1f77bcf86cd799439011',
    projectFlow: '507f1f77bcf86cd799439015',
    identifier: 'usuario@ejemplo.com',
    type: 'login',
    expiresAt: '2024-12-31T23:59:59.000Z',
    redirectUrl: 'https://tuaplicacion.com/exito',
    webhookUrl: 'https://tuaplicacion.com/webhook',
    requires2FA: false,
    ipAddress: '192.168.1.1',
    sendViaEmail: true,
    email: 'usuario@ejemplo.com',
    language: 'es'
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
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "identifier": "usuario@ejemplo.com",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://tuaplicacion.com/exito",
  "webhookUrl": "https://tuaplicacion.com/webhook",
  "requires2FA": False,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": True,
  "email": "usuario@ejemplo.com",
  "language": "es"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <tu_token>'
}

conn.request("POST", "/v2/biometric-validations/app-login", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/biometric-validations/app-login', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <tu_token>',
  ],
  'json' => [
    'project' => '507f1f77bcf86cd799439011',
    'projectFlow' => '507f1f77bcf86cd799439015',
    'identifier' => 'usuario@ejemplo.com',
    'type' => 'login',
    'expiresAt' => '2024-12-31T23:59:59.000Z',
    'redirectUrl' => 'https://tuaplicacion.com/exito',
    'webhookUrl' => 'https://tuaplicacion.com/webhook',
    'requires2FA' => false,
    'ipAddress' => '192.168.1.1',
    'sendViaEmail' => true,
    'email' => 'usuario@ejemplo.com',
    'language' => 'es'
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
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "identifier": "usuario@ejemplo.com",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://tuaplicacion.com/exito",
  "webhookUrl": "https://tuaplicacion.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": true,
  "email": "usuario@ejemplo.com",
  "language": "es"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/app-login")! as URL,
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
  "data": {
    "livenessSession": {
      "_id": "674de8df21c72be3cc42b8a7",
      "identifier": "usuario@ejemplo.com",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "activo",
      "expiresAt": "2024-12-02T17:15:35.000Z",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "biometricValidation": {
      "_id": "674de8df21c72be3cc42b8a8",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "nuevo",
      "livenessSession": "674de8df21c72be3cc42b8a7",
      "type": "login",
      "url": "https://access.verifik.co/sign-in/507f1f77bcf86cd799439011?type=liveness",
      "assignedCollection": "507f1f77bcf86cd799439016",
      "collectionCode": "col_12345",
      "redirectUrl": null,
      "webhook": null,
      "requires2FA": false,
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  </TabItem>
  <TabItem value="403" label="403">

```json
{
  "code": "token_not_right",
  "message": "403:token_not_right"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing project"
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "code": "Project_not_found_or_featured_disabled",
  "message": "404:Project_not_found_or_featured_disabled"
}
```

  </TabItem>
</Tabs>

### Características

- **Validación Específica para Inicio de Sesión**: Diseñada específicamente para flujos de validación biométrica de inicio de sesión de aplicación
- **Detección de Vida**: Reconocimiento facial avanzado con tecnología anti-spoofing
- **Sesiones Seguras**: Creación automática de sesiones de vida seguras con expiración
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Integración de Email**: Notificaciones opcionales por email con enlaces de validación
- **Soporte de Webhook**: Notificaciones en tiempo real para eventos de validación
- **Plantillas Multiidioma**: Soporte para plantillas de email en inglés y español
- **Características de Seguridad**: Seguimiento de dirección IP y soporte 2FA
