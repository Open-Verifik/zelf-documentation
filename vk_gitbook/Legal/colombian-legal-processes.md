# Colombian Legal Processes

### Endpoint

```
https://api.verifik.co/v2/co/rama/procesos
```

The Colombian Legal Processes service provides detailed information about legal processes associated with a Colombian citizen or company. By supplying a valid Colombian document number, users can access a list of legal processes related to the individual or entity. The response includes information such as the date of the process, the last date of action, the office where it was processed, and the subjects involved.

**Note:** The Judicial Branch queries are made using names rather than exact identification card data. As a result, Verifik cannot guarantee a 100% successful response due to this limitation in the data source.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="183">Name</th><th width="80">Type</th><th width="107">Required?</th><th width="247">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, NIT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person from whom you want to seek legal proceedings.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/procesos',
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
conn.request("GET", "/v2/co/rama/procesos?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=123456789');
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
    "documentNumber": "123456789",
    "consultedSubject": "MATEO VERIFIK",
    "list": [
      {
        "idProceso": 123456789,
        "idConexion": 262,
        "llaveProceso": "110014003XXXXXXXXX",
        "fechaProceso": "2007-09-21T00:00:00",
        "fechaUltimaActuacion": "2010-11-27T00:00:00",
        "despacho": "JUZGADO XXX CIVIL MUNICIPAL DE BOGOTÁ ",
        "departamento": "BOGOTÁ",
        "sujetosProcesales": [
          "Demandante: XXXXXX  XXXXX XXXX ",
          "Demandado: XXXX XXXX XXXX XXXX "
        ],
        "esPrivado": false
      }
    ],
    "pagination": {
      "records": 21,
      "recordsPerPage": 20,
      "pages": 2,
      "page": 1
    },
    "signature": {
      "dateTime": "March 3, 2022 3:55 PM",
      "message": "Certified by Verifik.co"
    }
  }
}
```

{% endtab %}

{% tab title="200" %}

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "consultedSubject": "MATEO VERIFIK",
    "list": [],
    "pagination": {
      "records": 0,
      "recordsPerPage": 20,
      "pages": 0,
      "page": 1
    }
  },
  "signature": {
    "dateTime": "August 31, 2022 3:31 PM",
    "message": "Certified by Verifik.co"
  }
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
</strong>    }
}
</code></pre>

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

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong>    "message": "documentType must be one of: [CC, NIT]"
}
</code></pre>

{% endtab %}
{% endtabs %}
