# Bolivia

### Endpoint

```
https://api.verifik.co/v2/bo/company
```

The Bolivian Companies Information service provides essential details about companies registered in Bolivia. By providing the company's document type and number, such as NIT (Tax Identification Number), users can access key information including the NIT number, trade name, status (active/inactive), and the date of the last status change.

This service is valuable for verifying company details and ensuring compliance with local regulations.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="80">Type</th><th width="106">Required?</th><th width="239">Description</th><th>Example</th></tr></thead><tbody><tr><td><strong>documentType</strong></td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: NIT.</td><td><code>NIT</code></td></tr><tr><td><strong>documentNumber</strong></td><td>String</td><td><code>True</code></td><td>Document number of the company to be queried.</td><td><code>5287278014</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/bo/company>',
  params: {documentType: 'NIT', documentNumber: '5287278014'},
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
conn.request("GET", "/v2/bo/company?documentType=NIT&documentNumber=null", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber=null")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber');
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
    "responseCompany": {
      "NIT": "5287278014",
      "businessName": "JIMMY WILSON ORELLANA CALVI",
      "dateLastState": "04/03/2016",
      "documentNumber": "5287278014",
      "documentType": "NIT",
      "status": "ACTIVO"
    }
  },
  "signature": {
    "dateTime": "February 21, 2024 8:08 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "B5JNK"
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
"message": "documentType must be one of: [NIT]." 
}
```

{% endtab %}
{% endtabs %}
