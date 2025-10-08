# Colombian Company DIAN Verification

## Colombian Company DIAN Verification

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/company/dian`</mark>

The Colombian Company DIAN Verification service allows you to confirm the registration status and details of companies registered with DIAN (Dirección de Impuestos y Aduanas Nacionales). By providing the NIT (Número de Identificación Tributaria) and the document type, you can retrieve the company's registration date, current status, and name or business name. This service is useful for verifying the tax registration and legitimacy of businesses in Colombia.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="183">Name</th><th width="81">Type</th><th width="110">Required?</th><th width="245">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Valid parameter: NIT</td><td><code>NIT</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>NIT of the company, without spaces, points and without verification number.</td><td><code>901331380</code></td></tr></tbody></table>

**Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/company/dian>',
  params: {documentType: 'NIT', documentNumber: '901331380'},
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
conn.request("GET", "/v2/co/company/dian?documentType=NIT&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/company/dian?documentType=NIT&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/company/dian?documentType=NIT&documentNumber=');
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
    "date": "2022-07-15T21:47:00Z",
    "descripcion": "Los datos de la persona estan activos, es decir tiene vigentes sus responsabilidades ",
    "estado": "REGISTRO ACTIVO",
    "nombreRazon": "VERIFIK SAS",
    "nit": "901331380"
  },
  "signature": {
    "dateTime": "July 15, 2022 4:48 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la NIT ingresada",
"signature": {
"dateTime": "February 21, 2024 7:52 PM",
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
"message": "documentType must be one of: [NIT]"
}
```

{% endtab %}
{% endtabs %}
