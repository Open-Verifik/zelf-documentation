# Chilean

### Endpoint

```
https://api.verifik.co/v2/cl/company
```

This service allows you to retrieve information about a company in Chile by providing its document type and number. The service response will contain the name of the company, its business category, subcategory, and activity. Additionally, this service will provide you with a list of services for which the company is authorized to work.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="189">Name</th><th width="78">Type</th><th width="109">Required?</th><th width="225">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: RUT.</td><td><code>RUT</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>RUT of the company that you want to consult, enter this parameter with periods and hyphens as established by the native documentation.</td><td><code>33516727409</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

  const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/cl/company>',
  params: {documentType: 'RUT', documentNumber: '212957739'},
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
conn.request("GET", "/v2/cl/company?documentType=RUT&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=');
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
    "activities": "Contribuyente presenta Inicio de Actividades: SI",
    "currentEconomicActivities": [
      {
        "activity": "ELABORACION DE PRODUCTOS DE PANADERIA Y PASTELERIA",
        "code": "107100",
        "category": "Primera",
        "affectIVA": "Si",
        "date": "05-09-2014"
      },
      {
        "activity": "VENTA AL POR MENOR DE ALIMENTOS EN COMERCIOS ESPECIALIZADOS (ALMACENES",
        "code": "472101",
        "category": "Primera",
        "affectIVA": "Si",
        "date": "05-09-2014"
      }
    ],
    "documentNumber": "76409396",
    "documentType": "RUT",
    "fullRUT": "76409396-8",
    "name": "PANADERIA R&M SPA",
    "stampedDocuments": [],
    "startDate": "05-09-2014"
  },
  "signature": {
    "dateTime": "September 4, 2023 3:07 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "azbnj"
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
"message": "documentType must be one of: [RUT]"
}
```

{% endtab %}
{% endtabs %}
