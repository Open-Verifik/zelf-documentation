# Peruvian Foreigner Resident

## Peruvian foreigner resident ID

```
GET - https://api.verifik.co/v2/pe/foreigner-id/ce
```

The Peruvian ID Verification service allows you to verify the identity of an individual in Peru by their DNI (Documento Nacional de Identidad) number. The service returns the full name and other related information of the individual, along with a signature to certify the authenticity of the response.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="182">Name</th><th width="82">Type</th><th width="103">Required</th><th width="204">Description</th><th>Example</th></tr></thead><tbody><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>the date of birth of the document owner.</td><td><pre><code>16/08/1993
</code></pre></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr></tbody></table>

#### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://app.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993',
  headers: { 
    'Authorization': '••••••'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```ruby
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993');
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
        "arrayName": [
            "CORDERO",
            "SANCHEZ",
            "ANA",
            "RENE"
        ],
        "dateOfBirth": "16/08/1993",
        "documentNumber": "005015372",
        "firstName": "ANA RENE",
        "foreignerIdExpiration": "12/08/2025",
        "foreignerIdLastIssuance": "12/08/2021",
        "fullName": "ANA RENE CORDERO SANCHEZ",
        "immigrationStatus": "HUMANITARIA",
        "lastName": "CORDERO CAMPERO",
        "nationality": "VENEZOLANA",
        "residenceExpiration": "26/02/2025"
    },
    "signature": {
        "dateTime": "November 6, 2024 3:22 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "K0MMA"
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
    "message": "missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

{% endtab %}
{% endtabs %}
