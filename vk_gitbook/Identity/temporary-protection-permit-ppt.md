# Temporary Protection Permit  (PPT)

## Endpoint

```
https://api.verifik.co/v2/co/foreigner-id/ppt
```

\
Verify the status of a Permiso por Protección Temporal (PPT) issued by Migración Colombia. This API service allows you to confirm whether a PPT is approved and ready for delivery at a Centro Facilitador de Servicios Migratorios, ensuring the document holder can access required services. Ideal for businesses and organizations needing to validate migration status for compliance, eligibility checks, or service provision in Colombia.

#### Key Use Case

\
Perfect for organizations conducting migration status verification, such as for employment, financial services, or humanitarian aid programs, particularly for Venezuelan migrants in Colombia.Important&#x20;

#### Notes

* The PPT is a temporary protection permit issued by Migración Colombia, often for Venezuelan nationals. For other document types, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities. The data provided is subject to Colombian privacy laws and should be handled responsibly.
* Always consult the physical PPT document to confirm the information retrieved via this API.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

<table><thead><tr><th width="160.83203125">Name</th><th width="78.7265625">Type</th><th width="102.6875">Required</th><th width="215">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number without spaces or periods</td><td><code>123456789</code></td></tr><tr><td>expeditionDate</td><td>String</td><td><code>True</code></td><td>Date when the document was generated</td><td><code>07/03/2022</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/foreigner-id/ppt',
  params: {expeditionDate: '07/03/2022', documentNumber: '123456789'},
    headers: {
    Accept: 'application/json',
    Authorization: 'jwt <your_verifik_token>'
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
conn.request("GET", "/v2/co/foreigner-id/ppt?documentNumber=123456789&expeditionDate=10/10/2024", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/foreigner-id/ppt?documentNumber=123456789&expeditionDate=10%2F10%2F2024")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/foreigner-id/ppt?documentNumber=123456789&expeditionDate=10/10/2024');
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

### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "arrayName": [
            "JUAN",
            "MIGUEL",
            "CAMERO",
            "MORALES"
        ],
        "documentNumber": "2081381",
        "documentType": "PPT",
        "expeditionDate": "07/03/2022",
        "expirationDate": "30/05/2031",
        "firstName": "JUAN MIGUEL",
        "fullName": "JUAN MIGUEL CAMERO MORALES",
        "lastName": "CAMERO MORALES",
        "status": "VIGENTE"
    },
    "signature": {
        "dateTime": "May 13, 2025 11:52 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "JD24J"
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
    "message": "missing expeditionDate\n"
}
```

{% endtab %}
{% endtabs %}
