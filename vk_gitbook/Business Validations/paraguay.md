# Paraguay

## Endpoint

```
https://api.verifik.co/v2/py/company
```

The Paraguayan Business Query service provides detailed information about Paraguayan companies. When making a query, the response provides key data such as the business name, document number and type (RUC - Unique Taxpayer Registry), full RUC, the group it belongs to, whether it is an invoicer, and the mandatory date from which certain requirements apply.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="182">Name</th><th width="78">Type</th><th width="111">Required?</th><th width="241">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Company document number to consult.</td><td><code>80033331</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: RUC.</td><td><code>RUC</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/py/company>',
  params: {documentNumber: '1234567', documentType:'RUC'},
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
conn.request("GET", "/v2/py/company?documentNumber=null&documentType=null", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/py/company?documentNumber=null&documentType=null")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/py/company?documentNumber&documentType');
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
        "businessName": "CONDOMINIO MANUEL ADOLFO FERREIRA BRUSQUETTI Y OTRO",
        "documentNumber": "80033331",
        "documentType": "RUC",
        "fullRuc": "80033331-4",
        "group": null,
        "invoicer": "N",
        "mandatoryDate": null
    },
    "signature": {
        "dateTime": "April 5, 2024 2:46 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "ESKV4"
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
{% endtabs %}
