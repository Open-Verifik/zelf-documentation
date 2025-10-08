# ONU Background Check

### Endpoint

```
https://api.verifik.co/v2/onu
```

This API provides a simple and efficient way to verify whether a person or entity is listed on the United Nations sanctions list. By submitting identifying information such as document type and document number, users can quickly determine if an individual or organization is subject to international sanctions.

This is especially useful for ensuring compliance with global regulations and conducting thorough due diligence in KYC (Know Your Customer) and AML (Anti-Money Laundering) processes.

### **Use Cases**

* **International Compliance:** Ensure your business operations comply with United Nations sanctions by verifying the identity of individuals and entities.
* **Risk Assessment:** Reduce financial and reputational risks by identifying sanctioned persons or organizations before engaging in transactions.
* **Regulatory Requirements:** Essential for industries such as banking, finance, and insurance to meet global KYC and AML regulatory standards.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query via Document**

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>False</code></td><td>The <a href="documents-supported">document type</a> that you want to request.</td></tr><tr><td>documentNumber</td><td>String</td><td><code>False</code></td><td>Document number to consult, without spaces or points.</td></tr></tbody></table>

#### Query via Full Name

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>fullName</td><td>String</td><td><code>False</code></td><td>Instead of documentType and documentNumber, you can pass the name directly of the person/business.</td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/onu',
  params: {documentType: 'CC', documentNumber: '80251972'},
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
conn.request("GET", "/v2/onu?fullName=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/onu?fullName=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/onu?fullName=');
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
    "documentType": "CC",
    "documentNumber": "1234567894",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "foundInONU": true
  },
  "signature": {
    "dateTime": "August 4, 2022 3:57 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

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
    "message": "documentType must be one of: [DNIAR]"
}
```

{% endtab %}
{% endtabs %}
