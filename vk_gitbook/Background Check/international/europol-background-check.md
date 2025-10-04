# Europol Background Check

### Endpoint

```
https://api.verifik.co/v2/europol
```

This API allows businesses and organizations to perform real-time checks against Europol’s criminal records database. By providing a person’s document type and document number, users can verify whether the information matches any entry in Europol’s system.

This service is ideal for companies looking to enhance their identity verification processes, prevent fraud, and ensure compliance with security regulations.

### **Use Cases:**

* **Fraud Prevention:** Identify individuals flagged in Europol’s criminal database before proceeding with sensitive transactions.
* **Identity Verification:** Ensure that personal information provided by users is accurate and legitimate.
* **Compliance:** Meet regulatory requirements for KYC (Know Your Customer) and AML (Anti-Money Laundering) checks in industries such as banking, finance, and real estate.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query via Document**

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>False</code></td><td>The <a href="documents-supported">document type</a> that you want to request.</td></tr><tr><td>documentNumber</td><td>String</td><td><code>False</code></td><td>Document number to consult, without spaces or points.</td></tr></tbody></table>

#### Query via Full Name

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>fullName</td><td>String</td><td><code>False</code></td><td>Instead of documentType and documentNumber, you can pass the name directly of the person/business.</td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
method: 'GET',
url: 'https://api.verifik.co/v2/europol',
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
conn.request("GET", "/v2/europol?fullName=Mateo%20Verifik", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/europol?fullName=Mateo%20Verifik")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/europol?fullName=Mateo Verifik');
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
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "foundInEuropol": True,
    "urlEuropol": "https://eumostwanted.eu/es#/es/node/162"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:40 PM",
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
{% endtabs %}
