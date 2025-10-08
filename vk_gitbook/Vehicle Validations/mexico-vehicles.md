# Mexico

## Mexican Vehicle Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/mx/vehiculo/placa`</mark>

The Vehicle Information service provides detailed information about a vehicle in Mexico based on its license plate number. This service specifically returns information about a vehicle's make, model, year, VIN, and other related details.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="96">Name</th><th width="80">Type</th><th width="108">Required?</th><th width="285">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Vehicle license plate to consult.</td><td><code>ABC1234</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/mx/vehiculo/placa>',
  params: {plate: 'ABC1234'},
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
conn.request("GET", "/v2/mx/vehiculo/placa?plate=null", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/mx/vehiculo/placa?plate=null")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/mx/vehiculo/placa?plate');
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
        "assemblyPlant": "MMTH, TAILANDIA",
        "axlesNumber": "null",
        "brand": "MITSUBISHI",
        "complement": "CINTS DE SEGURIDAD CON AIRBAG     HATCHBACK, 5 PUERTAS     MMTH, TAILANDIA     CLASE S, M     L3, 1.2L",
        "countryOfOrigin": "THAILANDIA",
        "cylinderNumber": "L3",
        "displacement": "1.2L",
        "doorNumber": "5 PUERTAS",
        "entityId": "0",
        "importId": "0",
        "institutionId": "203",
        "institutionName": "FCA MEXICO,S.A. DE C.V. (ANTES CHRYSLER DE MEXICO, S.A. DE C.V.)",
        "issueDate": "03/01/22",
        "licenseEntity": "DISTRITO FEDERAL",
        "line": "GLX HATCHBACK MANUAL",
        "markings": "0",
        "model": "MIRAGE",
        "modelYear": "2016",
        "movement": "CAMBIOS DE PROP., DOM. E INF. DEL VEH.",
        "movementType": "9",
        "nrpv": "4CLMCPOG",
        "plate": "ABC1234",
        "registrationDate": "10/11/15",
        "registrationTime": "10:17:22",
        "rpvFolio": "22558452",
        "type": "HATCHBACK",
        "updateDate": "27/01/22",
        "vin": "ML3AA2812AVB03902"
    },
    "signature": {
        "dateTime": "June 24, 2024 7:06 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "6391I"
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
"message": "missing plate\n."
}
```

{% endtab %}
{% endtabs %}
