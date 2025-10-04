# SIMIT - Fines

## SIMIT Fines

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/simit/comparendos`</mark>

The Traffic Citations Service provides detailed information about traffic citations associated with a specific vehicle in Colombia. By inputting the vehicle's license plate number, users can access comprehensive details about each citation, including its status, date, location, and the type of traffic violation.

This service is useful for generating traffic reports, analyzing violation trends, and ensuring compliance with traffic regulations. It's valuable for traffic enforcement agencies, insurance companies, and any organization involved in traffic management and analysis.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="188">Name</th><th width="82">Type</th><th width="108">Required?</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, PA, CE, TI, RC.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `name` | string | Name of the user |
| `age`  | number | Age of the user  |

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/simit/comparendos>',
  params: {documentType: 'CC', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/simit/comparendos?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/simit/comparendos?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/simit/comparendos?documentType=CC&documentNumber=');
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
    "comparendos": [
      {
        "tipovehiculo": "AUTOMOVIL",
        "estadoComparendo": "Pendiente",
        "fechaComparendo": "2016/02/23",
        "fotodeteccion": false,
        "NúmeroComparendo": "2561200100015264662173",
        "placavehiculo": "AAA123",
        "secretariaComparendo": "Ricaurte",
        "total": 344730,
        "idOrganismoTransito": "25612123",
        "codigoInfraccion": "C35",
        "descripcionInfraccion": "No realizar la revisión técnico-mecánica en el plazo legal establecido o cuando el vehiculo no se encuentre en adecuadas condiciones técnico-mecánicas o de emisión de gases, aun cuando porte los certificados correspondientes.",
        "direccionComparendo": "CARRERA 9 CON CALLE 10 AGUA DE DIOS",
        "infractorComparendo": "CAR BER",
        "serviciovehiculo": "Particular"
      }
    ]
  },
  "signature": {
    "dateTime": "February 13, 2023 6:17 AM",
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
"message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}
{% endtabs %}
