# RUNT - Vehicle's SOAT and RTM

## Colombian Vehicle Information Service

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/runt/vehiculo`</mark>

The Colombian Vehicle Information service provides real-time access to details about a registered vehicle in Colombia. By using this service, you can obtain information such as the owner's name and identification, vehicle color, make and model, registration status, and expiration dates for the SOAT (mandatory vehicle insurance) and technical review.

This service is ideal for businesses in the automotive industry, insurance companies, and government agencies that need to verify vehicle information and ensure compliance with regulations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="191">Name</th><th width="87">Type</th><th width="107">Required?</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed values are: CC, CE, PA, RC, NIT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the owner of the vehicle, without spaces or periods.</td><td><code>123456789</code></td></tr><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Vehicle plate to consult.</td><td><code>ABC123</code></td></tr></tbody></table>

**Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/runt/vehiculo>',
  params: {documentType: 'CC', documentNumber: '123456789', plate: 'ABC123'},
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
payload = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
headers = {
  'Content-Type': 'text/plain'
}
conn.request("GET", "/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
let parameters = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=")!,timeoutInterval: Double.infinity)
request.addValue("text/plain", forHTTPHeaderField: "Content-Type")

request.httpMethod = "GET"
request.httpBody = postData

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
$request->setUrl('https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'text/plain'
));
$request->setBody('https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003');
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
    "documentType": "CC",
    "documentNumber": "123456789",
    "plate": "XXXXX",
    "vehicleInformation": {
      "color": "PLATEADO",
      "brand": "CHERY",
      "line": "QQ3 SQR7080 S116",
      "status": "ACTIVO",
      "enrollmentDate": "07/10/2010",
      "plate": "XXXXX"
    },
    "soat": {
      "valid": true,
      "expeditionDate": "10/09/2021",
      "dueDate": "11/09/2022",
      "coverageStartDate": "12/09/2021",
      "soatNumber": "XXXXXX"
    },
    "techReview": {
      "valid": true,
      "reviewNumber": "XXXXX",
      "expeditionDate": "12/09/2021",
      "dueDate": "12/09/2022",
      "requireTechReview": true
    },
    "consultationDateTime": "2022-03-03T17:10:00.568Z"
  },
  "signature": {
    "dateTime": "March 3, 2022 12:10 PM",
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
"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC]"
}
```

{% endtab %}
{% endtabs %}
