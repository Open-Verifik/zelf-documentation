# Colombian RETHUS Verification Data

### Endpoint

```
https://api.verifik.co/v2/co/cedula/rethus
```

This service allows you to verify the authenticity of a Colombian ID (Cédula) and access information from the National Unique Registry of Human Talent in Health (RETHUS). By providing the document type and number, you can retrieve details such as the individual's full name, RETHUS status, and their academic and Social Security data. The RETHUS data includes information about the healthcare professional's academic degrees and Social Security affiliation, including benefits and modalities.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="191">Name</th><th width="81">Type</th><th width="117">Required?</th><th width="230">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameter: CC.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/cedula/rethus>',
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
conn.request("GET", "/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789');
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
    "rethus": {
      "status": "Vigente",
      "academic": [
        {
          "type": "UNV",
          "originDegree": "Local",
          "profession": "MEDICINA",
          "startDate": "2021-02-01",
          "administrativeAct": "12345",
          "entity": "COLEGIO MEDICO COLOMBIANO"
        }
      ],
      "dataSSO": [
        {
          "typeBenefit": "Exonerado del SSO",
          "typePlaceBenefit": "Local",
          "placeBenefit": "COLOMBIA|BOGOTÁ, D.C.|BOGOTÁ, D.C.",
          "startDate": "1900-01-01",
          "endDate": "1900-01-01",
          "modalityBenefit": "Sin Modalidad",
          "programBenefit": "Medicina",
          "entity": "COLEGIO MEDICO COLOMBIANO"
        }
      ]
    }
  },
  "signature": {
    "dateTime": "August 23, 2022 10:14 AM",
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
"message": "documentType must be one of: [CC]"
}
```

{% endtab %}
{% endtabs %}
