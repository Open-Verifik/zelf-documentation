# Mexican

## Endpoint

```
https://api.verifik.co/v2/mx/curp
```

The CURP service allows you to easily verify the identity of Mexican citizens by their CURP number. With this service, you can obtain important personal information such as the full name, date of birth, nationality, and document proof for a given CURP number.

The returned data also includes details about the place of registration and other relevant information, making it an essential tool for identity verification and fraud prevention purposes.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="192">Name</th><th width="82">Type</th><th width="110">Required?</th><th width="228">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameter: CURP.</td><td><code>CURP</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document of the person to consult, without spaces or periods.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/mx/curp',
  params: {documentNumber: 'ABCD890513ABCDEF09', documentType: 'CURP'},
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
conn.request("GET", "/v2/mx/curp?documentType=CURP&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/mx/curp?documentType=CURP&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/mx/curp?documentType=CURP&documentNumber=123456789');
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
    "documentType": "CURP",
    "documentNumber": "ABCD890513ABCDEF09",
    "curp": "ABCD890513ABCDEF09",
    "dateOfBirth": "13/05/1989",
    "names": "MATEO VERIFIK",
    "secondSurname": "VERIFIK",
    "sex": "MASCULINO",
    "surname": "VERIFIK"
  },
  "signature": {
    "dateTime": "December 29, 2023 1:58 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "DB78U"
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
    "message": "documentType must be one of: [CURP]"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentNumber maximum length: 18\n"
}
```

{% endtab %}
{% endtabs %}
