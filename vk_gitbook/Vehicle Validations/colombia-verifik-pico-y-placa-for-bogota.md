# Verifik Pico y Placa for Bogotá

## Verifik Pico y Placa for Bogota

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/vehiculo/pico-y-placa`</mark>

The Verifik Pico y Placa API for Bogotá provides real-time information on the Pico y Placa schedule for vehicles registered in Bogotá, Colombia. Pico y Placa is a traffic restriction policy that limits vehicle circulation based on the last digit of the license plate. This API allows developers to query the Pico y Placa schedule for a given license plate and retrieve information on any exceptions or special conditions that may apply.

Please note that this service only works for vehicles registered in Bogotá and is intended for informational purposes only.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="105">Name</th><th width="94">Type</th><th>Required?</th><th width="220">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Vehicle plate to consult.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/vehiculo/pico-y-placa>',
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

{% endtab %}

{% tab title="Python" %}

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

{% endtab %}

{% tab title="Swift" %}

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

{% endtab %}

{% tab title="PHP" %}

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

{% endtab %}
{% endtabs %}

**Response**

{% tabs %}
{% tab title="200" %}

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

{% endtab %}

{% tab title="404" %}

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

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "missing plate\n"
}
```

{% endtab %}
{% endtabs %}
