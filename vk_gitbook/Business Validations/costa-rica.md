# Costa Rica

### Endpoint

```
https://api.verifik.co/v2/cr/company
```

The Costa Rican Companies Information service provides essential details about companies registered in Costa Rica. By providing the type and number of the company's document, such as the NITE (Foreigner Tax Identification Number), users can access fundamental information about the company.

This service is valuable for verifying company details and conducting business-related checks in Costa Rica.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="188">Name</th><th width="84">Type</th><th width="112">Required?</th><th width="216">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: NITE.</td><td><code>NITE</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number to be queried, without spaces or dots, and must be more than 5 digits.</td><td><code>33516727409</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/cr/company>',
  params: {documentType: 'NITE', documentNumber: '3101122876'},
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
conn.request("GET", "/v2/cr/company?documentType=NITE&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=');
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
    "businessName": "ENLACES CASUALES COSTA RICA SOCIEDAD ANONIMA",
    "documentNumber": "3101122876",
    "documentType": "RUCEC"
  },
  "signature": {
    "dateTime": "February 21, 2024 8:35 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "2PWJ0"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la NITE ingresada",
"signature": {
"dateTime": "February 21, 2024 7:52 PM",
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
"message": "documentType must be one of: [NITE]"
}
```

{% endtab %}
{% endtabs %}
