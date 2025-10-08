# Spain Citizen

## Spanish Resident Information for DNI or NIE

<mark style="color:green;">`GET - https://api.verifik.co/v2/es/cedula`</mark>

The Spanish resident information service you can easily verify the validity of Spanish Identity Cards (DNI/NIE) by providing the document number and the expiration date. The response includes the document type, document number, full name, first name, last name, and an array of names.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="186">Name</th><th width="89">Type</th><th width="109">Required?</th><th width="223">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: DNIES, NIE.</td><td><code>DNIES</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult without spaces.</td><td><code>123456789</code></td></tr><tr><td>date</td><td>String</td><td><code>True</code></td><td>The date on which the document to be consulted expires. Valid format: DD/MM/YYYY.</td><td><code>17/07/2024</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/es/cedula>',
  params: {
		  documentType: 'DNIES', 
		  documentNumber: '12345678H', 
		  date: '17/07/2024'
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
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/es/cedula?documentType=DNIES&documentNumber=12345678H&date=17/07/2024", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/es/cedula?documentType=DNIES&documentNumber=12345678H&date=17%2F07%2F2024")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/es/cedula?documentType=DNIES&documentNumber=12345678H&date=17/07/2024');
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
        "documentType": "DNIES",
        "documentNumber": "53578667Y",
        "fullName": "CARMEN BEATRIZ ROMERO RODRIGUEZ",
        "firstName": "CARMEN BEATRIZ",
        "lastName": "ROMERO RODRIGUEZ",
        "arrayName": [
            "ROMERO",
            "RODRIGUEZ",
            "CARMEN",
            "BEATRIZ"
        ]
    },
    "signature": {
        "dateTime": "March 12, 2024 9:16 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "UCEJG"
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
    "message": "documentType must be one of: [DNIES,NIE]"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "Format incorrect: documentNumber"
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
