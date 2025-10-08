# Canada

### Endpoint

```
https://api.verifik.co/v2/ca/company
```

The Canadian Company Information provide detailed information about businesses registered in Canada. While the example provided pertains to a business in the province of British Columbia (BC), this service can be used for businesses in most provinces of Canada. It is a valuable resource for obtaining essential details about businesses, including their names and locations.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="113">Name</th><th width="83">Type</th><th width="110">Required?</th><th width="299">Description</th><th>Example</th></tr></thead><tbody><tr><td>business</td><td>String</td><td><code>True</code></td><td>Name of the business, It must be as accurate as possible.</td><td><code>AIR CANADA</code></td></tr><tr><td>province</td><td>String</td><td><code>True</code></td><td>Acronym of the province where the business is from. Valid params: [AB, BC, MB, NS, ON, QC, SK]</td><td><code>BC</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ca/company>',
  params: {business: 'AIR CANADA', province: 'BC'},
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
conn.request("GET", "/v2/ca/company?business=&province=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/company?business=&province=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ca/company?business=&province=');
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
    "business": "AIR CANADA",
    "businessNumber": "779824879",
    "businessType": "BC Company",
    "compayName": "AA CANADA AIR CARGO INC.",
    "country": [
      "CA"
    ],
    "province": "BC",
    "regOfficeCity": "Vancouver",
    "regOfficeProvince": "BC",
    "registryId": "BC1217527",
    "status": "Active",
    "statusDate": "2019-07-25"
  },
  "signature": {
    "dateTime": "September 19, 2023 5:17 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "niq5c"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la CUIT ingresada",
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
"message": "missing business\n. missing province\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "province must be one of: [AB, BC, MB, NS, ON, QC, SK]"
}
```

{% endtab %}
{% endtabs %}
