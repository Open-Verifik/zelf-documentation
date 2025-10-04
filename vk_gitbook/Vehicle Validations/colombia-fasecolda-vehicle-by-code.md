# Fasecolda - Vehicle by Code

## Vehicle Values by Code - Fasecolda

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/fasecolda/values-by-code`</mark>

The Fasecolda Vehicle Value Inquiry service provides comprehensive information about vehicles registered in Colombia. By using either the vehicle's license plate number or the Fasecolda code, you can access detailed data including the vehicle's class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### Query Parameters

<table><thead><tr><th width="165">Name</th><th width="87">Type</th><th width="110">Required?</th><th width="266">Description</th><th>Example</th></tr></thead><tbody><tr><td>codeFasecolda</td><td>String</td><td><code>True</code></td><td>Specific code that Fasecolda has to identify vehicles and their characteristics, it must be written as provided by this entity.</td><td><code>08032036</code></td></tr></tbody></table>

#### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/fasecolda/values-by-code>',
  params: {codeFasecolda: '08032036'},
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
conn.request("GET", "/v2/co/fasecolda/values-by-code?codeFasecolda=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/fasecolda/values-by-code?codeFasecolda=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/fasecolda/values-by-code?codeFasecolda=');
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

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "absShow": "NO",
    "airbags": "0",
    "airconditioningShow": "SI",
    "axles": "2",
    "bcpp": "64200",
    "brakes": "DISCO/TAMBOR",
    "capacityLoad": "0",
    "capacityPassengers": "5",
    "category": "LIVIANO PASAJEROS",
    "class": "AUTOMOVIL",
    "country": "COL",
    "cylinderCapacity": "1598",
    "doors": "5",
    "electricChairs": "0",
    "electricGlasses": "0",
    "electricMirrors": "0",
    "explorersShow": "NO",
    "foodSystem": "NO APLICA",
    "fuel": "GASOLINA",
    "groupUpdate": "1",
    "homoloCode": "08001151",
    "importedShow": "NO",
    "line1": "SANDERO [FL]",
    "line2": "AUTHENTIQUE",
    "line3": "MT 1600CC 8V AA",
    "long": "4057",
    "marke": "RENAULT",
    "novelty": "A",
    "observation": "",
    "plate": "ABC123",
    "power": "90",
    "rearSuspension": "NO APLICA",
    "reverseCameraShow": "NO",
    "segmentCylinder": "L",
    "segmentSize": "B",
    "sensorsShow": "NO",
    "service": "PARTICULAR",
    "sunroofShow": "NO",
    "tachometer": "NO APLICA",
    "traction": "DELANTERA",
    "transmission": "4X2",
    "typeAddress": "HIDRÁULICA",
    "typeAirConditioning": "MANUAL",
    "typeBox": "MECANICA",
    "typeHeadlights": "HALOGENO",
    "typology": "HATCHBACK",
    "upholsteryLeatherShow": "NO",
    "valueModel": [
      {
        "modelo": "2016",
        "valor": 34500,
        "estado": "USADO",
        "modeloId": 47,
        "idEstado": 1
      },
      {
        "modelo": "2015",
        "valor": 32800,
        "estado": "USADO",
        "modeloId": 46,
        "idEstado": 1
      },
      {
        "modelo": "2014",
        "valor": 31800,
        "estado": "USADO",
        "modeloId": 45,
        "idEstado": 1
      },
      {
        "modelo": "2013",
        "valor": 31100,
        "estado": "USADO",
        "modeloId": 44,
        "idEstado": 1
      }
    ],
    "weight": "1108"
  },
  "signature": {
    "dateTime": "October 12, 2023 7:38 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "mhlt7"
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
