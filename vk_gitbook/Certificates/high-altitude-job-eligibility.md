# High Altitude Job Eligibility

### Endpoint

```
https://api.verifik.co/v2/co/ministerio-de-trabajo/certificados
```

The High Altitude Job Eligibility service allows you to verify if a citizen is qualified for jobs that involve working in high-altitude environments. By using this service, you can retrieve a list of relevant courses that the citizen has completed, along with the institutions that provided these courses. This information helps ensure that individuals are properly trained and certified for high-altitude work requirements.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="184">Name</th><th width="89">Type</th><th width="107">Required?</th><th width="219">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/ministerio-de-trabajo/certificados',
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
conn.request("GET", "/v2/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=');
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
      "program": "TRABAJO EN ALTURAS",
      "level": "REENTRENAMIENTO",
      "document": "123456678999",
      "startDate": "09/08/2019 12:00:00 a. m.",
      "endDate": "10/08/2019 12:00:00 a. m.",
      "organization": "INGENIERIA SEGURIDAD SALUD  AMBIENTE",
      "campus": "INGENIERIA SEGURIDAD SALUD AMBIENTE S.A.S."
    },
    {
      "program": "TRABAJO EN ALTURAS",
      "level": "REENTRENAMIENTO",
      "document": "1234567899",
      "startDate": "16/12/2020 12:00:00 a. m.",
      "endDate": "17/12/2020 12:00:00 a. m.",
      "organization": "CAJA DE COMPENSACION FAMILIAR DE BOYACA  COMFABOY",
      "campus": "COMFABOY CENTRO TSA SOGAMOSO"
    }
  ],
  "signature": {
    "dateTime": "March 22, 2022 4:36 AM",
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

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong>    "message": "documentType must be one of: [CC,CE]"
}
</code></pre>

{% endtab %}
{% endtabs %}
