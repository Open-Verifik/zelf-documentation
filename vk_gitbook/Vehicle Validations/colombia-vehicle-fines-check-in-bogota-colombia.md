# Vehicle Fines Check in Bogotá, Colombia

## Vehicle Fines Check in Bogotá, Colombia

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/bogota/vehicle/fines`</mark>

This service allows you to check fines associated with a vehicle in Bogotá, Colombia, using its license plate number. The response provides detailed information, including the type of fine, status, fine number, date of imposition, date of notification, pending balance, interest, and other relevant details.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="94">Name</th><th width="84">Type</th><th width="111">Required?</th><th width="339">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate to consult, without spaces or points.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/bogota/vehicle/fines>',
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
conn.request("GET", "/v2/co/bogota/vehicle/fines?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/bogota/vehicle/fines?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/bogota/vehicle/fines?plate=');
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
        "fines": [
            {
                "type": "Comparendo - comparendera",
                "status": "vigente",
                "number": "11001000000035429360",
                "plate": "ABC123",
                "impositionDate": "14/11/2022",
                "notificationDate": "14/11/2022",
                "balance": "468500",
                "discountValue": "0",
                "pendingBalance": "549500",
                "interest": "81000",
                "total": "549500",
                "totalCollections": "0",
                "impositionMedium": "Control en vía apoyado en dispositivos móviles",
                "courseAttendanceMessage": null,
                "installmentNumber": "0",
                "installmentStatus": null,
                "installmentCount": "0",
                "documentType": "C",
                "documentNumber": "123456789",
                "name": "MATEO VERIFIK",
                "moratoryInterest": "0"
            }
        ],
        "plate": "ABC123"
    },
    "signature": {
        "dateTime": "July 3, 2024 4:03 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "Y5GS6"
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
