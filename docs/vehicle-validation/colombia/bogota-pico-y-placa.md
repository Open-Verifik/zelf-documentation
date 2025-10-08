---
id: vehicle-validation-colombia-bogota-pico-y-placa
title: Pico y Placa for Bogotá
description: Peak and plate restriction exemptions
sidebar_label: Pico y Placa
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pico y Placa for Bogotá

## Verifik Pico y Placa for Bogota

<mark>`GET - https://api.verifik.co/v2/co/vehiculo/pico-y-placa`</mark>

The Verifik Pico y Placa API for Bogotá provides real-time information on the Pico y Placa schedule for vehicles registered in Bogotá, Colombia. Pico y Placa is a traffic restriction policy that limits vehicle circulation based on the last digit of the license plate. This API allows developers to query the Pico y Placa schedule for a given license plate and retrieve information on any exceptions or special conditions that may apply.

Please note that this service only works for vehicles registered in Bogotá and is intended for informational purposes only.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| plate | String | `True` | Vehicle plate to consult. | `ABC123` |

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/vehiculo/pico-y-placa',
  params: {plate: 'ABC123'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
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
payload = ''
headers = {}
conn.request("GET", "/v2/co/vehiculo/pico-y-placa?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/vehiculo/pico-y-placa?plate=")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/vehiculo/pico-y-placa?plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```

</TabItem>
</Tabs>

**Response**

<Tabs>
<TabItem value="200" label="200" default>

```json
{
  "data": {
    "placa": "ABC123",
    "causalExcepcion": "Discapacidad - Documento #: 12345678",
    "activoDesde": "16-06-2022 07:00:28 PM",
    "estado": "ACTIVO",
    "detalles": {
      "informaciónDeLaExcepcion": [
        "Tipo Excepción: Discapacidad",
        "Descripción: vehiculos de personas con discapacidad.Automotores que transporten o sean conducidos por personas con discapacidad permanente, cuya condición motora, sensorial o mental limite su movilidad, siempre y cuando cumplan las normas establecidas.",
        "Fecha Registro: 16-06-2022 05:25:29 PM"
      ],
      "observaciones": [
        "Información validada ante en RUNT. "
      ],
      "informaciónDeLaPersonaEnCondicionDeDiscapacidad": [
        "Nombres: MATEO VERIFIK",
        "No. Documento: 1112345678"
      ],
      "informaciónDelvehiculo": [
        "Placa: EHO820",
        "ACTIVO"
      ]
    }
  },
  "signature": {
    "dateTime": "August 23, 2022 10:55 AM",
    "message": "Certified by Verifik.co"
  }
}
```

</TabItem>

<TabItem value="404" label="404">

```json
{
"code": "NotFound",
"message": "Record not found.",
"signature": {
"dateTime": "August 31, 2022 3:24 PM",
"message": "Certified by Verifik.co"
}
}
```

</TabItem>

<TabItem value="409" label="409">

```json
{
"code": "MissingParameter",
"message": "missing plate\n"
}
```

</TabItem>
</Tabs>
