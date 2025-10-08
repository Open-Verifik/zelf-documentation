# Brazil

### Endpoint

```
https://api.verifik.co/v2/br/cedula
```

The Brazilian citizen information service allows users to verify the validity of Brazilian CPF (Cadastro de Pessoas Físicas) numbers. The service returns a response that includes the document type, document number, full name, first name, last name, and an array with the individual's first and last names.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="198">Name</th><th width="82">Type</th><th width="108">¿Required?</th><th width="221">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameter: CPF.</td><td><code>CPF</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth of the person to consult, valid format: dd/mm/yyyy.</td><td><code>20/05/2022</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/br/cedula>',
  params: {
    documentType: 'CPF',
    documentNumber: '012.345.678-01',
    dateOfBirth: '17/02/2002'
  },
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
import requests

url = "https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=123456789&dateOfBirth=20/05/2022"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=123456789&dateOfBirth=20%2F05%2F2022")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=123456789&dateOfBirth=20/05/2022');
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
    "documentType": "CPF",
    "documentNumber": "012.345.678-01",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "dateOfBirth": "2002-02-17T00:00:00.000Z"
  },
  "signature": {
    "dateTime": "March 10, 2023 7:22 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "error": "Invalid request"
}
```

{% endtab %}
{% endtabs %}
