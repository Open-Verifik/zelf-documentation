# \[v3] Peruvian Citizen

## Endpoint

```
https://api.verifik.co/v3/pe/cedula
```

The Peruvian Citizen ID Verification service allows you to verify the identity of a citizen in Peru using their DNI. This service returns personal information, such as full name, date of birth and some other details that are required to validate the identity of someone in Peru with just the DNI Document Number.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="193">Name</th><th width="82">Type</th><th width="124">Required?</th><th width="217">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: DNI.</td><td><code>DNI</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v3/pe/cedula>',
  params: {documentType: 'DNI', documentNumber: '1234567'},
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
conn.request("GET", "/v3/pe/cedula?documentType=DNI&documentNumber=1234567", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```ruby
var request = URLRequest(url: URL(string: "https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567")!,timeoutInterval: Double.infinity)
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

```
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567');
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
        "address": "CARACALLA",
        "arrayName": [
            "FELIPE",
            "TRUJILLO",
            "HERNANDEZ"
        ],
        "civilStatus": "SOLTERO",
        "dateOfBirth": "19-12-1995",
        "documentNumber": "71647369",
        "documentType": "DNI",
        "firstName": "FELIPE",
        "fullName": "FELIPE TRUJILLO HERNANDEZ",
        "lastName": "TRUJILLO HERNANDEZ",
        "sex": "M",
        "ubigeoReniec": "070101",
        "verificationDigit": "2"
    },
    "signature": {
        "dateTime": "April 16, 2025 2:43 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "FHBCC"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentNumber maximum length: 8\n"
}
```

{% endtab %}
{% endtabs %}
