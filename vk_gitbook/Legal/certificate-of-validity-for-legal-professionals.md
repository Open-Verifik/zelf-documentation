# Certificate of Validity for Legal Professionals

### Endpoint

```
https://api.verifik.co/v2/co/rama/certificado/vigencia
```

The Certificate of Validity for Legal Professionals service allows users to verify the current status of legal professionals in Colombia. By providing the document type and number (e.g., CC for Cédula de Ciudadanía) along with the desired quality parameter, users can access detailed information about the professional’s certification. The response includes the professional’s quality (e.g., Abogado for lawyer), current status (e.g., Vigente for active), creation and issuance dates, a unique identifier for the professional’s resume, and other relevant details.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="182">Name</th><th width="82">Type</th><th width="108">Required?</th><th width="240">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, NIT, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr><tr><td>quality</td><td>String</td><td><code>True</code></td><td>Type of professional to consult. Valid parameters: ABG, JUEZPAZ, LT.</td><td><code>ABG</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/certificado/vigencia',
  params: {documentType: 'CC', documentNumber: '123456789',Quality:'ABG'},
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
conn.request("GET", "/v2/co/rama/certificado/vigencia?documentType=&documentNumber=&quality=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=&documentNumber=&quality=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=&documentNumber=&quality=');
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
        "certificado": "",
        "documentNumber": "123456789",
        "documentType": "CC",
        "encalidad": "Abogado",
        "estado": "Vigente",
        "fechaCreacion": "30/05/2014",
        "fechaExpedicion": "2014/05/30",
        "idHojaDeVida": "5757153a-0e73-e123-80f1-001234b16b17",
        "motivoNoVigencia": " - ",
        "numeroTarCarLice": "123456",
        "observacionesPenaAccesoria": null
    },
    "signature": {
        "dateTime": "April 5, 2024 2:17 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "CHKEH"
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
    "message": "missing documentType\n. missing documentNumber\n. missing Quality\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CC,NIT,CE]"
}
```

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
    "code": "MissingParameter",
<strong>    "message": "Quality must be one of: [ABG,JUEZPAZ,LT]"
</strong>}
</code></pre>

{% endtab %}
{% endtabs %}
