# Verify Police Compliance with Corrective Measures

## Verify Police Compliance with Corrective Measures

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/policia/rnmc`</mark>

The Police RNMC service allows you to verify whether an individual has any pending corrective measures. By providing the individual's name, document type, document number, and the date of verification, you can obtain details about any corrective measures pending.

This service helps ensure that individuals comply with corrective measures and supports informed decision-making based on their compliance status.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="194">Name</th><th width="98">Type</th><th width="109">Required?</th><th width="205">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr><tr><td>date</td><td>String</td><td><code>True</code></td><td>Expedition date of the document. Valid format: DD/MM/YYYY.</td><td><code>10/10/2020</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/policia/rnmc>',
  params: {
		  documentType: 'CC', 
		  documentNumber: '123456789', 
		  date: '10/10/2020'
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
conn.request("GET", "/v2/co/policia/rnmc?documentType=CC&documentNumber=&date=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&documentNumber=&date=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/policia/rnmc?documentType=CC&documentNumber=&date=');
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
            "MATEO",
            "VERIFIK"
        ],
        "correctiveMeasures": [
            {
                "attribution": "INSPECTOR DE POLICÍA",
                "address": "KR 12 26 25",
                "status": "IMPONER O RATIFICAR MEDIDA",
                "measure": "Multa General Tipo 2",
                "referredTo": "INSPECCION PERMANENTE TURNO 3"
            }
        ],
        "date": "22/07/2005",
        "documentNumber": "123456789",
        "documentType": "CC",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK",
        "records": [
            {
                "date": "16/12/2023 01:46:37 p. m.",
                "department": "CALDAS",
                "file": "17-001-6-2023-20697",
                "format": "002",
                "identification": "123456789",
                "municipality": "MANIZALES",
                "offender": "MATEO VERIFIK"
            },
            {
                "date": "06/06/2022 05:33:02 p. m.",
                "department": "CALDAS",
                "file": "17-001-6-2022-13948",
                "format": "002",
                "identification": "123456789",
                "municipality": "MANIZALES",
                "offender": "MATEO VERIFIK"
            },
            {
                "date": "25/02/2022 11:09:17 a. m.",
                "department": "CALDAS",
                "file": "17-001-6-2022-5921",
                "format": "002",
                "identification": "123456789",
                "municipality": "MANIZALES",
                "offender": "MATEO VERIFIK"
            },
            {
                "date": "21/01/2022 05:28:13 p. m.",
                "department": "CALDAS",
                "file": "17-001-6-2022-1929",
                "format": "002",
                "identification": "123456789",
                "municipality": "MANIZALES",
                "offender": "MATEO VERIFIK"
            },
            {
                "date": "11/03/2021 01:13:45 p. m.",
                "department": "CALDAS",
                "file": "17-001-6-2021-3865",
                "format": "002",
                "identification": "123456789",
                "municipality": "MANIZALES",
                "offender": "MATEO VERIFIK"
            }
        ]
    },
    "signature": {
        "dateTime": "April 18, 2024 6:33 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "12NC7"
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
"message": "documentType must be one of: [CC,CE]"
}
```

{% endtab %}
{% endtabs %}
