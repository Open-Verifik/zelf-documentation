# Colombian Foreigner ID (CE)

## Endpoint

```
https://api.verifik.co/v2/co/foreigner-id/ce
```

Verify the Cédula de Extranjería (CE), the official identification document for foreigners residing in Colombia. This API endpoint allows you to retrieve authenticated details, including the holder’s first name, last name, document number, and expiration date, streamlining identity verification for compliance and data processing.

#### Key Use Case

\
Perfect for businesses and organizations needing to validate the residency status of foreigners in Colombia, such as for employment, financial services, or legal compliance.

#### Important Notes

* The Cédula de Extranjería (CE) is issued by Migración Colombia for foreigners residing in the country. For other document types, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities or direct permission from the end-user. The data provided is subject to Colombian privacy laws and should be handled responsibly.
* Always cross-check with the physical CE document to confirm the information retrieved.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="182">Name</th><th width="84">Type</th><th width="115">Required?</th><th width="228">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or periods.</td><td><code>123456789</code></td></tr><tr><td>expeditionDate</td><td>String</td><td><code>True</code></td><td>Expedition date of the document. Valid format: DD/MM/YYYY.</td><td><code>10/10/2022</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/foreigner-id/ce>',
  params: {documentNumber: '123456789', expeditionDate: '10/10/2024'},
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
conn.request("GET", "/v2/co/foreigner-id/ce?documentNumber=123456789&expeditionDate=10/10/2022", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/foreigner-id/ce?documentNumber=123456789&expeditionDate=10%2F10%2F2022")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/foreigner-id/ce?documentNumber=123456789&expeditionDate=10/10/2022');
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
    "documentType": "CE",
    "expirationDate": "07/03/2017",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "lastName": "VERIFIK",
    "status": "VENCIDO"
  },
  "signature": {
    "dateTime": "August 22, 2023 5:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "har4z"
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

```json
{
    "code": "MissingParameter",
    "message": "missing expeditionDate\n. missing documentNumber\n"
}
```

{% endtab %}
{% endtabs %}
