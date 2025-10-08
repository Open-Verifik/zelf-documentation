# Delinquent debtors

### Endpoint

```
https://api.verifik.co/v2/co/deudoresmorosos
```

The Delinquent Debtors Service allows users to query their debt status with the Colombian government. By providing a NIT or citizen ID number, users can access detailed information on any outstanding debts, including the type, object, year, period, and date of the debt.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="183">Name</th><th width="81">Type</th><th width="108">Required?</th><th width="242">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document to consult, allowed values: CC, TI, NIT, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person or company to consult, without spaces or dots and in case of being a company, without verification code.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/deudoresmorosos>',
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
conn.request("GET", "/v2/co/deudoresmorosos?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/deudoresmorosos?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/deudoresmorosos?documentType=CC&documentNumber=123456789');
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
      "impuesto": "PREDIAL",
      "objeto": "BBN1234",
      "vigencia": "2019",
      "periodo": "0",
      "fecha": "10-06-2022"
    },
    {
      "impuesto": "vehiculoS",
      "objeto": "ABC123",
      "vigencia": "2020",
      "periodo": "0",
      "fecha": "10-06-2022"
    }
  ],
  "signature": {
    "dateTime": "June 10, 2022 10:02 AM",
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
    "message": "documentType must be one of: [ CC, , NIT, CE]"
}
```

{% endtab %}
{% endtabs %}
