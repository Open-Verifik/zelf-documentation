# Lawyer Verification

### Endpoint

```
https://api.verifik.co/v2/co/rama/abogados
```

The Lawyer Verification service offers a comprehensive solution to validate the professional credentials of lawyers in Colombia. By providing the lawyer's document number and type, users can access essential information about their professional status and credentials.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="82">Type</th><th width="110">Required?</th><th width="241">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, NIT, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person from whom you want to seek legal proceedings.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/abogados',
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
conn.request("GET", "/v2/co/rama/abogados?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=123456789');
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
  "value": {
    "data": {
      "documentType": "CC",
      "documentNumber": "123456789",
      "fullName": "MATEO VERIFIK",
      "firstName": "MATEO",
      "lastName": "VERIFIK",
      "arrayName": [
        "MATEO",
        "VERIFIK"
      ],
      "results": [
        {
          "contactId": "71199f81-d172-e511-80f1-0012345676432b17",
          "documentNumber": "123456789",
          "documentTypeId": "1",
          "documentTypeName": "Cédula de ciudadanía",
          "firstName": "MATEO",
          "lastName": "VERIFIK",
          "nonValidityReason": " - ",
          "numberOfRecords": 1,
          "personalEmail": "-",
          "statusName": "Vigente",
          "tarcarliceNumber": "123456"
        }
      ]
    },
    "signature": {
      "dateTime": "May 24, 2023 4:25 PM",
      "message": "Certified by Verifik.co"
    }
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
<strong>    }
</strong>}
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
    "message": "documentType must be one of: [CC,NIT,CE]"
}
```

{% endtab %}
{% endtabs %}
