# Colombian Politically Exposed Persons

## Endpoint

```
https://api.verifik.co/v2/co/politically-exposed-persons
```

The Colombian Politically Exposed Persons Lookup service allows you to verify if an individual is designated as a politically exposed person (PEP) in Colombia. PEPs are individuals who hold or have held prominent public positions or functions and may pose a higher risk for corruption or money laundering.

This service provides details such as the individual's full name, document number, entity name, designation position, and dates of disassociation and entailment. Note that this service is available exclusively for Colombian individuals.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="189">Name</th><th width="88">Type</th><th width="113">Required</th><th width="228">Description</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points, the endpoint only receives a Colombian ID card for the response.</td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/politically-exposed-persons',
  params: {documentNumber: '123456789'},
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

url = "https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=123456789"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=123456789');
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

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "designationPosition": "PRESIDENTE DE LA REPÚBLICA",
        "documentNumber": "208079",
        "entailmentAt": "2023-01-26 11:44",
        "entityName": "DEPARTAMENTO ADMINISTRATIVO DE LA PRESIDENCIA DE LA REPUBLICA",
        "fullName": "GUSTAVO FRANCISCO PETRO URREGO",
        "isContractor": "NO"
    },
    "signature": {
        "dateTime": "April 11, 2024 2:36 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "CYBE4"
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
<strong>        }
</strong>}
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
