# Colombian Citizen with Extra Data

## Endpoint

```
https://api.verifik.co/v2/co/cedula/extra 
```

Access detailed information about a Colombian citizen using their government-issued ID (Cédula de Ciudadanía). This API endpoint provides core details—full name, first name, last name, and ID number—along with extended private data, including date of birth, gender, and living status, for enhanced identity verification.

#### &#xD;Key Use Case

Designed for businesses requiring in-depth identity checks for advanced KYC processes, fraud detection, or compliance in Colombia. Use responsibly due to the sensitive nature of the data returned.

\
**Note:**&#x20;This endpoint is exclusive to Colombian ID documents (Cédula de Ciudadanía). For other countries or document types, please refer to our alternative validation services.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="188">Name</th><th width="80">Type</th><th width="108">¿Required?</th><th width="230">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document. Valid parameter: CC.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or periods.</td><td><code>123456789</code></td></tr><tr><td>date</td><td>String</td><td><code>True</code></td><td>Document issue date. Valid format: DD/MM/YYYY.</td><td><code>10/10/2020</code></td></tr></tbody></table>

#### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula/extra',
  params: {documentType: 'CC', documentNumber: '123456789', date: '10/10/2020'},
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
conn.request("GET", "/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10/10/2020", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10%2F10%2F2020")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10/10/2020');
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
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "expeditionDate": "2022-05-10T00:00:00.000Z",
    "expeditionPlace": {
      "municipio": "BOGOTA D.C.",
      "departamento": "BOGOTA"
    },
    "dateOfBirth": "1999-05-07T00:00:00.000Z",
    "gender": "HOMBRE",
    "isAlive": true
  },
  "signature": {
    "dateTime": "August 23, 2022 11:42 AM",
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
    "message": "documentType must be one of: [CC]"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "date format required: DD/MM/YYYY\n"
}
```

{% endtab %}
{% endtabs %}
