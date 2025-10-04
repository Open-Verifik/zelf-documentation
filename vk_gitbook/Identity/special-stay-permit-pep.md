# Special Stay Permit (PEP)

## Endpoint

```
https://api.verifik.co/v2/co/foreigner-id/pep
```

\
Validate the Special Stay Permit (PEP - Permiso Especial de Permanencia) for Venezuelan citizens in Colombia. This API endpoint retrieves authenticated PEP data, including the permit holder’s full name, document number, expiration date, and status, simplifying identity verification for compliance, eligibility checks, or service provision.

#### Key Use Case

\
Ideal for organizations needing to verify the legal status of Venezuelan nationals in Colombia, such as for employment, financial services, or humanitarian programs.

#### Important Notes

* The PEP is a special permit issued by Migración Colombia exclusively for Venezuelan citizens. For other nationalities or document types, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities or with the permission of the end-user. The data provided is subject to Colombian privacy laws and should be handled responsibly.
* Always cross-check with the physical PEP document to confirm the information retrieved.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

<table><thead><tr><th width="160.83203125">Name</th><th width="78.7265625">Type</th><th width="102.6875">¿Required?</th><th width="215">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number without spaces or periods</td><td><code>123456789</code></td></tr><tr><td>expeditionDate</td><td>String</td><td><code>True</code></td><td>Date when the document was generated</td><td><code>10/10/2024</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/foreigner-id/pep',
  params: {expeditionDate: '10/10/2024', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/foreigner-id/pep?documentNumber=123456789&expeditionDate=10/10/2024", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/foreigner-id/pep?documentNumber=123456789&expeditionDate=10%2F10%2F2024")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/foreigner-id/pep?documentNumber=123456789&expeditionDate=10/10/2024');
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
    "documentNumber": "123456789012345",
    "documentType": "PEP",
    "expirationDate": "08/08/2018",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "identification": "17609583",
    "lastName": "VERIFIK",
    "status": "VENCIDO"
  },
  "signature": {
    "dateTime": "August 22, 2023 8:02 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "tnlkb"
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
  "message": "missing date\n. missing documentNumber\n"
}
```

{% endtab %}
{% endtabs %}
