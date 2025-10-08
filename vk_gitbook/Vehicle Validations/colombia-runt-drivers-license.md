# RUNT - Driver's License

## Endpoint

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/runt/conductor`</mark>

The Driver License Information service provides comprehensive details about driver's license holders in Colombia. By using this service, you can access information such as the document type and number, full name, expiration date, status, and category of the license. It also allows you to verify whether the license is active, suspended, or canceled, and includes details about any transit taxes and related information.

This service is particularly useful for organizations that need to validate driver's license information for purposes such as insurance, employment, and regulatory compliance.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="81">Type</th><th width="107">Required?</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document Type: Allowed values are: CC, CE, PPT, PA, NIT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Driver's document number, without spaces or periods.</td><td><code>123456789</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/runt/conductor>',
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
conn.request("GET", "/v2/co/runt/conductor?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/conductor?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/runt/conductor?documentType=CC&documentNumber=');
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
    "citizenStatus": "ACTIVA",
    "consultationDateTime": "2024-04-16T19:15:42.893Z",
    "documentNumber": "1234345456",
    "documentType": "CC",
    "driverStatus": "ACTIVO",
    "fullName": "MATEO VERIFIK",
    "inscriptionDate": "18/12/2009",
    "inscriptionNumber": "5597541",
    "licenses": [
      {
        "category": "B1",
        "dueDate": "04/11/2033",
        "expeditionDate": "04/11/2023",
        "licenceNumber": "1234345456",
        "status": "ACTIVA",
        "substratum": "LC03006724131"
      },
      {
        "category": "A2",
        "dueDate": "20/09/2024",
        "expeditionDate": "20/09/2014",
        "licenceNumber": "1234345456",
        "status": "ACTIVA",
        "substratum": "LC03006724131"
      }
    ],
    "totalLicenses": "2",
    "transitTaxes": {
      "paceAndSafe": "NO"
    },
    "firstName": "MATEO",
    "lastName": "VERIFIK ",
    "arrayName": [
      "MATEO",
      "VERIFIK",
    ]
  },
  "signature": {
    "dateTime": "September 16, 2024 4:50 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "UIQ26"
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
{% endtabs %}
