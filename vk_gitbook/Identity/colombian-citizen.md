# Colombian Citizen

## Endpoint

```
https://api.verifik.co/v2/co/cedula
```

\
Verify Colombian citizen identities with ease. This API endpoint allows you to validate a Colombian government-issued ID (Cédula de Ciudadanía) and retrieve essential details, including the citizen’s full name, first name, last name, and ID number. Perfect for streamlining identity verification and background checks.

#### &#xD;Key Use Case

Ideal for businesses needing reliable identity validation for KYC processes, fraud prevention, or compliance in Colombia.

\
**Note**: This endpoint is designed exclusively for Colombian ID documents. For other countries, please explore our additional validation services.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="167.55859375">Name</th><th width="82">Type</th><th width="104.37890625">¿Required?</th><th width="227">Description</th><th width="165.3515625">Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document. Valid parameter: CC, PPT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or periods.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/cedula>',
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
import requests

url = "https://api.verifik.co/v2/co/cedula?documentType=CC&documentNumber=123456789"

payload = ""
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/cedula?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/cedula?documentType=CC&documentNumber=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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
    "documentNumber": "1234567890",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "",
      "VERIFIK",
      ""
    ],
    "expeditionDate": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686",
    "expeditionPlace": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686",
    "dateOfBirth": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686"
  },
  "signature": {
    "dateTime": "July 19, 2022 9:37 AM",
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
