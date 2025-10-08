# Paraguay

## Paraguayan Vehicle Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/py/vehicle`</mark>

This service provides detailed information about a vehicle in Paraguay using its license plate number. The response includes vehicle details such as the brand, chassis, type, year, number of axles, the owner's name, the type of service, the current status of the vehicle, and the license plate number.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="92">Name</th><th width="87">Type</th><th width="116">Required?</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate number to consult.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/py/vehicle>',
  params: { plate:'ABC123'},
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
conn.request("GET", "/v2/py/vehicle?plate=null", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/py/vehicle?plate=null")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/py/vehicle?plate');
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
        "axles": "3",
        "brand": "MERCEDES BENZ",
        "chassis": "9BM958207GB012345",
        "owner": "CI086-COOPERATIVA CHORTITZER LTDA.",
        "plate": "ABC123",
        "service": "CARGA NACIONAL",
        "situation": "VENCIDA",
        "type": "CAMION CISTERNA",
        "year": "2023"
    },
    "signature": {
        "dateTime": "June 24, 2024 7:34 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "Z4ALR"
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
