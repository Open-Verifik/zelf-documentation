# Chilean Citizen Information

## Chilean Citizen Information

```
https://api.verifik.co/v2/cl/cedula
```

This service allows you to verify the authenticity of the Chilean RUN (National Unique Role) document. Simply enter the RUN number, and you will receive a response with the full name, first name, last name, and name array of the cardholder, along with the verification signature.

This service can be used by companies or individuals to ensure the validity of the Chilean RUN for various purposes, such as employment, financial transactions, or legal requirements.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="187">Name</th><th width="78">Type</th><th width="117">¿Required?</th><th width="231">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: RUN.</td><td><code>RUN</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult without spaces.</td><td><code>212957739</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/cl/cedula>',
  params: {documentType: 'RUN', documentNumber: '212957739'},
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
conn.request("GET", "/v2/cl/cedula?documentType=RUN&documentNumber=212957739", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/cedula?documentType=RUN&documentNumber=212957739")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cl/cedula?documentType=RUN&documentNumber=212957739');
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
        "documentNumber": "12.345.678-9",
        "documentType": "RUN",
        "fullName": "MATEO VERIFIK",
        "firstName": "MATEO",
        "lastName": "VERIFIK",
    },
    "signature": {
        "dateTime": "March 12, 2024 4:39 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "QS1JN"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
<strong>    "message": "Record not found.",
</strong>        "signature": {
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

{% tab title="Untitled" %}

<pre class="language-json"><code class="lang-json">{
    "code": "MissingParameter",
<strong>    "message": "documentType must be one of: [RUN]"
</strong>}
</code></pre>

{% endtab %}
{% endtabs %}
