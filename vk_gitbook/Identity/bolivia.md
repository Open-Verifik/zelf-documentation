# Bolivia

### Endpoint

```
https://api.verifik.co/v2/bo/cedula
```

The Bolivian Citizen Identification service allows you to retrieve basic information about a Bolivian citizen based on their national ID number and date of birth. The service returns the name of the person associated with the provided document, helping to verify the authenticity of the identity information provided.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="191">Name</th><th width="92">Type</th><th width="109">Required</th><th width="369">Description</th></tr></thead><tbody><tr><td><strong>documentType</strong></td><td>String</td><td><code>True</code></td><td>Document type. Valid parameter: CI.</td></tr><tr><td><strong>documentNumber</strong></td><td>String</td><td><code>True</code></td><td>Document number of the person to consult. Example :<code>123456789</code></td></tr><tr><td><strong>dateOfBirth</strong></td><td>String</td><td><code>True</code></td><td>Date of birth of the person to consult, valid format: dd/mm/yyyy.</td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=4511200&dateOfBirth=27/03/1978&force=true',
  headers: { 
    'Authorization': 'JWT eyJhbGcCJ9.eyJjbGllb...aJtQ'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {
  'authorization': '[[authorization-masked-secret]]'
}
conn.request("GET", "/v2/bo/cedula?documentType=CI&documentNumber=1234567&dateOfBirth=27/03/1978", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=1234567&dateOfBirth=27%2F03%2F1978")!,timeoutInterval: Double.infinity)
request.addValue("[[authorization-masked-secret]]", forHTTPHeaderField: "authorization")

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
$request->setUrl('https://api.verifik.co/v2/bo/cedula?documentType=CI&documentNumber=1234567&dateOfBirth=27/03/1978');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'authorization' => '[[authorization-masked-secret]]'
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
        "arrayName": [
            "LIDIA",
            "IRIARTE",
            "TORREZ"
        ],
        "dateOfBirth": "1978-03-27",
        "documentNumber": "1234567",
        "documentType": "CI",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "May 11, 2023 6:17 PM",
        "message": "Certified by Verifik.co"
    }
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
<strong>        "message": "Certified by Verifik.co"
</strong>        }
}
</code></pre>

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing   documentNumber\n. missing dateOfBirth\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CI]"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "dateOfBirth format required:     DD/MM/YYYY\n"
}
```

{% endtab %}
{% endtabs %}
