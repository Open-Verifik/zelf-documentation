# Costa Rica

## Endpoint

```
https://api.verifik.co/v2/cr/cedula 
```

This service allows you to verify the authenticity of a Costa Rican National ID card (Cédula) by providing the document number. The response includes the cardholder's full name, along with their first and last names separately.

This service is useful for confirming the validity of a Costa Rican National ID for various purposes, such as identity verification and background checks.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

<table><thead><tr><th width="185">Name</th><th width="92">Type</th><th width="117">¿Required?</th><th width="224">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: CCCR.</td><td><code>CCCR</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult without spaces.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cr/cedula',
  params: {documentType: 'CCCR', documentNumber: '123456789'},
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
conn.request("GET", "/v2/cr/cedula?documentType=CCCR&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=123456789');
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
    "documentType": "CCCR",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ]
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "NotFound",
</strong>    "message": "Record not found.",
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CCCR]"
}
```

{% endtab %}
{% endtabs %}
