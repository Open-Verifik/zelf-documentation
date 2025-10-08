# SSN Verification (Social Security Number)

## SSN Verification (Social Security Number)

<mark style="color:green;">`GET - https://api.verifik.co/v2/usa/ssn`</mark>

The SSN Verification Service is a robust tool designed to verify Social Security Numbers (SSN) issued in the United States. This service allows users to quickly validate an SSN by providing details such as the issuing state and the first year of issuance. The response includes the SSN itself, the year it was first issued, the issuing state, and the validity status of the SSN. This tool is essential for ensuring the accuracy and authenticity of Social Security Numbers.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="182">Name</th><th width="79">Type</th><th width="117">Required?</th><th width="227">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>SSN to be queried, it must be written exactly as it appears on the document.</td><td><code>123-45-678</code></td></tr></tbody></table>

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `name` | string | Name of the user |
| `age`  | number | Age of the user  |

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/usa/ssn>',
  params: {documentNumber: '123-45-678'},
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
conn.request("GET", "/v2/usa/ssn?documentNumber=123-45-678", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/ssn?documentNumber=123-45-678")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/ssn?documentNumber=123-45-678');
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
    "firstYearIssued": "1936",
    "issuingState": "Oklahoma (OK)",
    "SSN": "123-45-678",
    "valid": true
  },
  "signature": {
    "dateTime": "April 11, 2023 3:42 PM",
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
  "message": "missing documentNumber\n
}
```

{% endtab %}
{% endtabs %}
