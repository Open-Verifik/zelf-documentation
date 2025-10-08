# Ontario Driver license

## Endpoint

```
https://api.verifik.co/v2/ca/ontario/driver-license 
```

The Ontario Driver's License service allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this service to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this service provides accurate and up-to-date license information.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

<table><thead><tr><th width="188">Name</th><th width="87">Type</th><th width="120">¿Required?</th><th width="216">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Driver's license to consult, all data must be entered exactly as found in this document.</td><td><code>S123456789123456</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ca/ontario/driver-license>',
  params: {documentNumber: 'S123456789123456'},
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
import requests

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456');
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

### Response

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
    "signature": {
        "dateTime": "March 12, 2024 3:47 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8X9FD"
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
    "message": "missing documentNumber\n"
}
```

{% endtab %}
{% endtabs %}
