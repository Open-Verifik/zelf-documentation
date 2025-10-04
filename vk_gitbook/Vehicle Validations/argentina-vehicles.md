# Argentina

## Argentinian Vehicle Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/ar/vehicle`</mark>

The Argentine Companies Search service by CUIT provides the possibility to obtain detailed information about a company in Argentina using its CUIT number (Unique Tax Identification Key). This functionality is particularly useful for accessing relevant data about the entity, such as its name, economic activity, legal form, and date of constitution, among other details.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="98">Name</th><th width="87">Type</th><th width="111">Required?</th><th width="302">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>License plate to be queried, without spaces or dots.</td><td><code>ABC123</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ar/vehicle>',
  params: {plate: 'ABC123'},
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
conn.request("GET", "/v2/ar/vehicle?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ar/vehicle?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ar/vehicle?plate=');
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
    "brand": "FORD",
    "chassis": "",
    "codeRegistrySectional": "13003",
    "headlines": null,
    "isPlateMercosur": "false",
    "model": "FOCUSEXE TREND 1.6L NAFTA",
    "plate": "ABC123",
    "recordAddress": "ALBUERA 554",
    "registrationDenomination": "GENERAL SAN MARTIN N° 1",
    "registrationLocality": "GRAL.SAN MARTIN",
    "registrationProvince": "",
    "type": "MOTOVEHICULO",
    "year": "2011"
  },
  "signature": {
    "dateTime": "December 18, 2023 10:17 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "HYD15"
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
"message": "missing plate\n"
}
```

{% endtab %}
{% endtabs %}
