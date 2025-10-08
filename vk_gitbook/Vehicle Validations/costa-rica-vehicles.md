# Costa Rica

## Costa Rica Vehicle Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/cr/vehicle`</mark>

This service provides detailed information about a vehicle in Costa Rica using its license plate number. The response includes comprehensive data such as the current owner's name, vehicle details (engine displacement, fiscal value, gross and net weight, occupant capacity, power, and traction), as well as the infraction history and previous owner history.

This information is useful for various purposes, including vehicle verification, historical checks, and compliance monitoring.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="97">Name</th><th width="87">Type</th><th width="111">Required?</th><th width="337">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate to consult without spaces or points.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/cr/vehicle>',
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
conn.request("GET", "/v2/cr/vehicle?plate=null", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cr/vehicle?plate=null")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cr/vehicle?plate');
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

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "currentOwner": "GUILLERMO RODRIGUEZ SOLIS",
        "dataVehicle": {
            "engineDisplacement": "2389 c.c.",
            "estateValue": "CRC 530,000",
            "grossWeight": "1550  kgrms.",
            "netWeight": "1100  kgrms.",
            "noVin": "",
            "occupants": "5",
            "power": "85 KW. (114 HP)",
            "traction": "NO APLICA"
        },
        "infractions": [
            {
                "judicialAuthority": "JUZGADO DE TRANSITO DEL II CIRCUITO JUDICIAL DE SAN JOSE",
                "summaryNumber": "18-003179-0174-TR",
                "ticketNumber": "2018243000156",
                "type": "COLISIONES"
            },
            {
                "judicialAuthority": "JUZGADO DE TRANSITO DEL II CIRCUITO JUDICIAL DE SAN JOSE",
                "summaryNumber": "17-008609-0174-TR",
                "ticketNumber": "2017202000461",
                "type": "COLISIONES"
            }
        ],
        "ownerHistory": [
            {
                "date": "12/10/2016",
                "fullName": "RODRIGUEZ GUILLERMO SOLIS"
            },
            {
                "date": "15/02/2007",
                "fullName": "RODRIGUEZ AGUSTIN SOLIS"
            },
            {
                "date": "29/04/1991",
                "fullName": "LAFUENTE ANDRES BARQUERO"
            },
            {
                "date": "29/04/1991",
                "fullName": "SALAS ANA EUGENIA VASQUEZ"
            }
        ],
        "plate": "123456",
        "vehicle": "1987 NISSAN D21 GRIS"
    },
    "signature": {
        "dateTime": "June 24, 2024 7:39 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "OJBUG"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "Record not found.",
"signature": {
"dateTime": "June 24, 2024 7:40 PM",
"message": "Certified by Verifik.co"
}
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "missing plate\n."
}
```

{% endtab %}
{% endtabs %}
