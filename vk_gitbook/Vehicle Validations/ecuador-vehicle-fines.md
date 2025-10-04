# Ecuador Vehicle Fines

## Ecuador Vehicle Fines

<mark style="color:green;">`GET - https://api.verifik.co/v2/ec/vehiculo/placa/multas`</mark>

The Ecuador Vehicle License Plate Fines service allows you to retrieve information about fines associated with a vehicle's license plate in Ecuador. You can access details such as the vehicle's registration information, including the plate number, class, and model. The service also provides the current status, service type, and registration expiration date, along with any outstanding fines linked to the license plate.

This service is useful for individuals and businesses aiming to stay informed about fines associated with their vehicles and ensure compliance with Ecuadorian traffic laws.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="97">Name</th><th width="82">Type</th><th width="111">Required?</th><th width="342">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate number to consult, without spaces or points.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ec/vehiculo/placa/multas>',
  params: {plate: 'ABC1234'},
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
conn.request("GET", "/v2/ec/vehiculo/placa/multas?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=');
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
        "camvCpn": "T00950479",
        "class": "AUTOMOVIL",
        "cylinderCapacity": "1600",
        "information": null,
        "lastCheckUpDate": "2023/08/31",
        "lastPaymentYear": "2023",
        "lastRegistrationDate": "2019/03/21",
        "manufactureCountry": "MEXICO",
        "model": "SENTRA 1.6 M/T",
        "plate": "ABC1234",
        "purchaseDate": "2010/06/09",
        "reasonMessage": null,
        "registrationCanton": "IBARRA",
        "registrationExpirationDate": "2024/03/19",
        "remission": null,
        "service": "PARTICULAR",
        "status": "ASIGNADO",
        "total": "76.72",
        "usageType": "NO APLICA",
        "year": "2010",
        "multas": [
            {
                "id": "1",
                "infraccion": "92507343",
                "entidad": "MNO-MANCOMUNIDAD DEL NORTE",
                "citacion": "N-ACT0349-00184",
                "placa": "ABC1234",
                "documento": "VEH - 1801442417",
                "fechaDeEmision": "2024-03-11 09:43:26.0",
                "fechaNotificacion": "2024-03-11 09:43:26.0",
                "fechaLimiteDePago": "21-03-2024 09:43:26",
                "puntos": "0",
                "pag": "N",
                "anu": "N",
                "imp": "N",
                "sancion": "46",
                "multa": "0",
                "remision": "0",
                "totalAPagar": "23",
                "articuloliteral": "Art. 391 - Lit. 05.  COND. ESTACIONE EN SITIOS PROHIBIDOS POR LA LEY Y REGLAM",
                "tamanoImagen": "0",
                "bloqueo": "N"
            }
        ]
    },
    "signature": {
        "dateTime": "March 12, 2024 7:50 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "OB2YV"
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
