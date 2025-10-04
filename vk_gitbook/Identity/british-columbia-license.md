# British Columbia license

## Endpoint

```
https://api.verifik.co/v2/ca/british-columbia/driver-license 
```

The British Columbia Driver License Verification service offers a straightforward method to verify the authenticity and validity of a driver's license in the province of British Columbia, Canada. By utilizing this service, you can quickly validate a driver's license based on the provided document number and last name.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="189">Name</th><th width="87">Type</th><th width="117">¿Required?</th><th width="253">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Driver's license to consult, all data must be entered exactly as found in this document.</td><td><code>1123456</code></td></tr><tr><td>lastName</td><td>String</td><td><code>True</code></td><td>Last name that appears in the Driver License.</td><td><code>HELLO</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ca/british-columbia/driver-license>',
  params: {documentNumber: '7793458', lastName: 'JIWA'},
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
conn.request("GET", "/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO');
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
    "documentNumber": "1123456",
    "lastName": "HELLO",
    "valid": true
  },
  "signature": {
    "dateTime": "August 8, 2023 10:56 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1234567"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
<strong>        "dateTime": "August 31, 2022 3:24 PM",
</strong>        "message": "Certified by Verifik.co"
    }
}
</code></pre>

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing lastName\n missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong>    "message": "documentNumber maximum length: 15\n"
}
</code></pre>

{% endtab %}
{% endtabs %}
