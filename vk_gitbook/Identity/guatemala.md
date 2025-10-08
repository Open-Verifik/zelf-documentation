# Guatemala

## Endpoint

```
https://api.verifik.co/v2/gt/cedula
```

This endpoint allows you to verify the validity of a Guatemalan ID by providing the CUI document type and the document number. The response confirms whether the ID is valid and provides details related to the document.

**To use this service in a graphical interface, we invite you to enter our Verifik** [**client panel**](https://app.verifik.co/data/api/All/1)**.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="189">Name</th><th width="89">Type</th><th width="118">Required?</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document to consult. Allowed parameter: CUI.</td><td><code>CUI</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/gt/cedula>',
  params: { documentNumber: '123456789', documentType:'CUI'},
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
conn.request("GET", "/v2/gt/cedula?documentNumber=123456789&documentType=CUI", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/gt/cedula?documentNumber=123456789&documentType=CUI")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/gt/cedula?documentNumber=123456789&documentType=CUI');
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
        "arrayName": [
            "MATEO",
            "VERIFIK"
        ],
        "documentNumber": "12345678909876",
        "documentType": "CUI",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "July 3, 2024 3:24 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "YOESE"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
<strong>    "message": "Record not found.",
</strong>    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
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
    "message": "documentType must be one of: [CUI]"
}
```

{% endtab %}
{% endtabs %}
