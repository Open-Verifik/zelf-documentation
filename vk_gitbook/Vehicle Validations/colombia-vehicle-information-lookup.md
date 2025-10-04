# Vehicle Information Lookup

## Vehicle Information Lookup

<mark style="color:green;">`GET - https://api.verifik.co/v2/ec/vehiculo/placa`</mark>

With the Vehicle Information Lookup service for Ecuadorian license plates, you can easily retrieve valuable information about a vehicle by entering its license plate number. Obtain details such as the vehicle's make, model, year of manufacture, and date of last registration. You can also check the expiration date of its registration, its service status, and any restrictions on its sale. Additionally, the service provides information on the vehicle's cylinders, color, and brand.

This service is ideal for anyone looking to buy or sell a used car in Ecuador, or for businesses needing to verify vehicle information for their operations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="99">Name</th><th width="78">Type</th><th width="115">Required?</th><th width="328">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate number to consult, without spaces or points.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ec/vehiculo/placa>',
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
conn.request("GET", "/v2/ec/vehiculo/placa?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ec/vehiculo/placa?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ec/vehiculo/placa?plate=');
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
    "placa": "ABC1234",
    "camvCpn": "B0123456",
    "color1": "-",
    "color2": "-",
    "cylinders": 1600,
    "class": "AUTOMOVIL",
    "brand": "CHEVROLET",
    "model": "AVEO ACTIVO 1.6L 4P AC",
    "year": 2011,
    "country": "ECUADOR",
    "dateLastMatricula": "10/11/2022",
    "dateExpirationMatricula": "31/10/2026",
    "purchaseDate": "28/10/2010",
    "revisionDate": "30/11/2021",
    "canton": "LA LIBERTAD",
    "service": "ALQUILER",
    "lastYearPaid": 2021,
    "prohibidoEnajenar": "-",
    "exonerationStatus": "-",
    "observation": "string"
  },
  "signature": {
    "dateTime": "August 24, 2022 10:35 AM",
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
