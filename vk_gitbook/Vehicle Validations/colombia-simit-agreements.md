# SIMIT - Agreements

## SIMIT Agreements

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/simit/acuerdos`</mark>

The SIMIT Agreements Service provides an efficient method for retrieving payment agreements related to traffic violations in Colombia's SIMIT system. By querying the service with relevant details, users can obtain a response containing comprehensive information about the agreement.

The response includes details such as the infractor's name, the resolution number, the issuing secretariat, and the total amount due.

This service is particularly useful for developers and organizations that need to automate the retrieval and integration of traffic violation payment agreements into their systems and applications.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="187">Name</th><th width="82">Type</th><th width="109">Required?</th><th width="240">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, PA, CE, TI, RC.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

**Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/simit/acuerdos>',
  params: {documentType: 'CC', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/simit/acuerdos?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=');
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
    "acuerdosPagos": [
      {
        "estadosResoluciones": "Acuerdo de pago",
        "fechaComparendo": "1900/01/01",
        "fechaResolucion": "2018/07/05",
        "noComparendo": "NO REPORTADO",
        "nombresInfractores": "PEPE SALGADO",
        "permitePago": "N",
        "resoluciones": "0003030",
        "secretarias": "Barrancabermeja",
        "total": "558864.0"
      }
    ],
    "signature": {
      "dateTime": "March 3, 2022 12:11 PM",
      "message": "Certified by Verifik.co"
    }
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
{% endtabs %}
