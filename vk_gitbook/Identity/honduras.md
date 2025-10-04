# Honduras

## Endpoint

```
https://api.verifik.co/v2/hn/cedula
```

This service allows you to verify the validity of a Honduran ID card by providing the document type DNIHN and the document number. The response confirms the validity of the ID and provides relevant details associated with the document.

**To use this service in a graphical interface, we invite you to enter our Verifik** [**client panel**](https://app.verifik.co/data/api/All/1)**.**

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="190">Name</th><th width="79">Type</th><th width="110">Required?</th><th width="239">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document to consult. Allowed parameter: DNIHN.</td><td><code>DNIHN</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/hn/cedula>',
  params: { documentNumber: '123456789', documentType:'DNIHN'},
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
conn.request("GET", "/v2/hn/cedula?documentNumber=123456789&documentType=DNIHN", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/hn/cedula?documentNumber=123456789&documentType=DNIHN")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/hn/cedula?documentNumber=123456789&documentType=DNIHN');
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
        "documentNumber": "1234567899876",
        "documentType": "DNIHN",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "July 10, 2024 5:16 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "303NP"
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [DNIHN]"
}
```

{% endtab %}
{% endtabs %}
