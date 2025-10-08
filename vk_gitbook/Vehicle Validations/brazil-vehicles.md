# Brazil

## Brazilian Company Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/br/company`</mark>

The Brazilian Vehicle information service allows you to verify the authenticity of Brazilian vehicle information by providing the vehicle's license plate number. The service returns detailed information about the vehicle, including its brand, model, year of manufacture, engine, transmission, fuel type, and more.

This service is useful for car dealerships, insurance companies, and any business or individual looking to verify Brazilian vehicle information.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="101">Name</th><th width="84">Type</th><th width="111">Required?</th><th width="276">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate to consult, without spaces or points.</td><td><code>ABC0123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/br/vehicle>',
  params: {plate: 'ABC1D345'},
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
conn.request("GET", "/v2/br/vehicle?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/br/vehicle?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/br/vehicle?plate=');
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
    "bodyType": "Sedan",
    "brand": "TOYOTA",
    "chassis": "12345678987654321",
    "color": "PRETA",
    "country": "Brasil",
    "denatranWarning": "",
    "doors": 4,
    "engine": "1.8 16V VVT-i",
    "factory": "Indaiatuba - SP",
    "fipeCodes": [
      "002027-3",
      "002062-1"
    ],
    "fuelType": "Flexivel Alcool/Gasolina",
    "irregularitiesCount": 0,
    "irregularityCode": "",
    "manufacturer": "TOYOTA",
    "model": "Corolla XLi 1.8 16V VVT-i Flex 4P",
    "modelYear": 2011,
    "plate": "ABC1D345",
    "transmission": "",
    "vehicle": "Corolla",
    "version": "XLi",
    "yearOfManufacture": 2010
  },
  "signature": {
    "dateTime": "April 3, 2023 2:21 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "brazilian_vehicle_not_found",
"signature": {
"dateTime": "April 3, 2023 2:26 PM",
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
