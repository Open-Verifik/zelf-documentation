# Paraguay

## Endpoint

```
https://api.verifik.co/v2/py/cic
```

Validate the Cédula de Identidad Civil (CIC) for Paraguayan citizens. This API endpoint provides accurate and reliable data, including the document number, full name, first name, last name, and an array of name components, enabling efficient identity verification for a wide range of applications in Paraguay.

**Key Use Case**\
Ideal for businesses and organizations needing to verify the identity of Paraguayan citizens, such as for KYC processes, financial services, or legal compliance.

**Important Notes**

* This service validates the Cédula de Identidad Civil (CIC) for Paraguayan citizens. For other document types or nationalities, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities. The data provided is subject to Paraguayan privacy laws and should be handled responsibly.
* Always cross-check with the physical CIC document to confirm the information retrieved.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="188">Name</th><th width="85">Type</th><th width="115">Required?</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>1234567</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/py/cic>',
  params: {documentNumber: '1234567'},
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
conn.request("GET", "/v2/py/cic?documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/py/cic?documentNumber=1234567")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/py/cic?documentNumber=1234567');
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
        "documentNumber": "123456789",
        "documentType": "CICPY",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "May 29, 2024 3:09 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "6BJW5"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "NotFound",
</strong>    "message": "Record not found.",
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
    "message": "missing documentNumber\n"
}
```

{% endtab %}
{% endtabs %}
