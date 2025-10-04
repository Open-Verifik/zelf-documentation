# Information System for Drivers Transporting Dangerous Goods

## Information System for Drivers Transporting Dangerous Goods

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/sisconmp/trainings`</mark>

This service allows you to retrieve training records registered in the SISCONMP (Control and Monitoring System for Personnel) in Colombia. By providing the participant's document number and document type, you can access detailed information about their training. The response includes data such as the document number, document type, participant's full name, educational institution name, training name, expedition and expiration dates, license status, and other relevant details.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="84">Type</th><th width="109">Required?</th><th width="235">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document Type: Allowed values are: CC, CE, PA, RC.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Driver's document number, without spaces or periods.</td><td><code>123456789</code></td></tr></tbody></table>

**Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/sisconmp/trainings>',
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
conn.request("GET", "/v2/co/sisconmp/trainings?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=');
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
    "DIVcodigHeadquarters": "11001000",
    "DIVnameHeadquarters": "BOGOTA",
    "NIDHeadquarters": "9131",
    "NIT_educationalInstitution": "901139908",
    "class": "",
    "dateExpedition": "2021/09/11",
    "dateExpeditionLicense": "2016/12/10",
    "descriptionClass": "",
    "documentNumber": "1030644022",
    "documentType": "CC",
    "expirationDate": "2023/09/11",
    "expirationDateLicense": "2026/12/10",
    "inactive": "No",
    "lastName": "URIBE SANCHEZ",
    "licenseNumber": "1030644022",
    "nameFile": "ejemplo",
    "nameHeadquarters": "INSTITUCION DE EDUCACION PARA EL TRABAJO Y EL DESARROLLO HUMANO CORPOIBEROAMERICANA S.A.S",
    "nameTraining": "CURSO BASICO",
    "names": "CHRISTIAN XAVIER",
    "numericalValueClass": "0",
    "typeTraining": "CURSO BASICO",
    "typeVehicle": ""
  },
  "signature": {
    "dateTime": "July 13, 2023 4:05 PM",
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
