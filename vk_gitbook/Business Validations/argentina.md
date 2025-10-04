# Argentina

### Endpoint

```
https://api.verifik.co/v2/ar/company
```

The Argentine Companies Information service provides detailed information about companies registered in Argentina.

Users can query the service using the type and number of the company's document, such as CUIT (Unique Tax Identification Code), along with its corresponding number.

The response includes essential details such as the CUIT number, trade name, legal form, and the date of the articles of association. Additionally, the service provides information about the company's economic activities, including primary and secondary activities, along with their start dates.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="190">Name</th><th width="82">Type</th><th width="110">Required?</th><th width="219">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: CUIT.</td><td><code>CUIT</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the company to be queried, without spaces or dots, and must be 11 digits.</td><td><code>33516727409</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ar/company>',
  params: {documentType: 'CUIT', documentNumber: '33-51672740-9'},
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
conn.request("GET", "/v2/ar/company?documentType=CUIT&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ar/company?documentType=CUIT&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ar/company?documentType=CUIT&documentNumber=');
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
    "CUIT": "33-51672740-9",
    "business": "LUIS DUSSO Y CIA SOCIEDAD ANONIMA COMERCIAL AGRICOLA GANADERA",
    "documentNumber": "33516727409",
    "documentType": "CUIT",
    "economicActivities": [
      "Actividad principal:",
      "461011 (F-883)",
      "VENTA AL POR MAYOR EN COMISIÓN O CONSIGNACIÓN DE CEREALES (INCLUYE ARROZ), OLEAGINOSAS Y FORRAJERAS EXCEPTO SEMILLAS",
      "Mes deinicio:   11/2013",
      "Secundaria(s):",
      "11112 (F-883)",
      "CULTIVO DE TRIGO",
      "Mes de inicio:   11/2013",
      "",
      "11121 (F-883)",
      "CULTIVO DE MAÍZ",
      "Mes de inicio:   11/2013",
      "",
      "11129 (F-883)",
      "CULTIVO DE CEREALES DE USO FORRAJERO N.C.P.",
      "Mes de inicio:   11/2013",
      "",
      "11211 (F-883)",
      "CULTIVO DE SOJA",
      "Mes de inicio:   11/2013",
      "",
      "462131 (F-883)",
      "VENTA AL POR MAYOR DE CEREALES (INCLUYE ARROZ), OLEAGINOSAS Y FORRAJERAS EXCEPTO SEMILLAS",
      "Mes de inicio:   11/2013",
      "",
      "492221 (F-883)",
      "SERVICIO DE TRANSPORTE AUTOMOTOR DE CEREALES",
      "Mes de inicio:   04/2014",
      "Mes decierre ejercicio comercial:   10"
    ],
    "legalForm": "SOC. ANONIMA",
    "socialContractDate": "12-12-1968"
  },
  "signature": {
    "dateTime": "February 21, 2024 7:53 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "3WTK0"
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
"message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CUIT]"
}
```

{% endtab %}
{% endtabs %}
