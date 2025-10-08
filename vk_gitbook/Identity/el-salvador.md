# El Salvador

## Endpoint

```
https://api.verifik.co/v2/sv/dui
```

The El Salvador DUI Information Lookup service allows you to effortlessly retrieve personal information associated with a DUI (Unique Identity Document) by using the document number. This service provides reliable and efficient access to essential details related to an individual's identity.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="190">Name</th><th width="90">Type</th><th width="117">Required?</th><th width="207">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth of the requested person. Valid format: DD/MM/YYYY</td><td><code>01/12/1995</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/sv/dui',
  params: {documentNumber: '123456789',dateOfBirth:'01/12/1995'},
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
conn.request("GET", "/v2/sv/dui?documentNumber=123456789&dateOfBirth=01/12/1995", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/sv/dui?documentNumber=123456789&dateOfBirth=01%2F12%2F1995")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/sv/dui?documentNumber=123456789&dateOfBirth=01/12/1995');
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
        "dateOfBirth": "1996-08-06",
        "documentNumber": "1234567890",
        "documentType": "DUISV",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "May 29, 2024 3:11 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "2Z9GQ"
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

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong>    "message": "missing documentNumber\n"
}
</code></pre>

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong><strong>    "message": "dateOfBirth format required: DD/MM/YYYY\n"
</strong>}
</code></pre>

{% endtab %}
{% endtabs %}
