# Colombia

### Endpoint

```
https://api.verifik.co/v2/co/situacion-militar
```

The Colombian Military Status Check service enables the verification of an individual's military status in Colombia. By providing a national identification number and type, users can obtain details about the individual's current military status, including rank and district military office.

This service is useful for government agencies, employers, or organizations needing to confirm an individual’s military status in Colombia.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="81">Type</th><th width="108">Required?</th><th width="243">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: CC.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/situacion-militar>',
  params: {documentType: 'CC', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/situacion-militar?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=123456789');
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
    "Name": "MATEO VERIFIK",
    "State": "Reservista - 2da Clase",
    "DateText": "stri",
    "PlaceText": "Distrito Militar No. 001",
    "AdressText": "Carrera 11B 104A - 64 Barrio Santa Paula (Bogotá, D.C. - 01 Localidad - Usaquén)"
  },
  "signature": {
    "dateTime": "June 28, 2022 10:00 AM",
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
        "message": "Certified by Verifik.co"
<strong>        }
</strong>}
</code></pre>

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong>    "message": "missing documentType\n. missing documentNumber\n"
}
</code></pre>

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
