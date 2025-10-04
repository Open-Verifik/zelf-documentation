# SENA Certificates

## Endpoint

```
https://api.verifik.co/v2/co/sena/certificados
```

The Sena Certificates service allows developers to access certification data for individuals who have completed courses with the Servicio Nacional de Aprendizaje (SENA) in Colombia. By providing the document type and number of the individual, this service returns detailed information about their certificates. The response includes the title, type, program, certification date, and a download link for each certificate obtained by the individual.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="191">Name</th><th width="87">Type</th><th width="109">Required?</th><th width="227">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, TI, CE, PA, RC, PEP.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `name` | string | Name of the user |
| `age`  | number | Age of the user  |

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/sena/certificados',
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
conn.request("GET", "/v2/co/sena/certificados?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/sena/certificados?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/sena/certificados?documentType=CC&documentNumber=123456789');
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
  "data": [
    {
      "record": "9214001680795CC1023942104C",
      "title": "CURSO ESPECIAL EN",
      "type": "Certificado Aprobación",
      "program": "SOLDADURA CON PROCESO GMAW EN UNIONES 1F Y 2F",
      "certificationDate": "25 Junio, 2018",
      "certificationSignature": "27 Junio, 2018",
      "certificateDownload": "<https://certificados.sena.edu.co/guardar.asp?var1=url>"
    },
    {
      "record": "9214001680795CC1023942104E",
      "title": "CURSO ESPECIAL EN",
      "type": "Certificado de Notas",
      "program": "SOLDADURA CON PROCESO GMAW EN UNIONES 1F Y 2F",
      "certificationDate": "25 Junio, 2018",
      "certificationSignature": "27 Junio, 2018",
      "certificateDownload": "<https://certificados.sena.edu.co/guardar.asp?var1=url>"
    }
  ]
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
