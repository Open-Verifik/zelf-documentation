# Peru

### Endpoint

```
https://api.verifik.co/v2/pe/empresa
```

This service allows users to retrieve detailed information about companies in Peru by providing a RUC (Unique Taxpayer Registry) number. The response includes key data such as the company name, tax status, and other relevant details.

This service is useful for businesses, researchers, or individuals needing to verify company information and status in Peru.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="158">Name</th><th width="78">Type</th><th width="105">Required?</th><th width="270">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: RUC.</td><td><code>RUC</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Unique Taxpayer Registry (RUC) to be queried, without spaces, periods, and must be 11 digits.</td><td><code>201340512231248910</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/empresa',
  params: {documentType: 'RUC', documentNumber: '201340512231248910'},
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
conn.request("GET", "/v2/pe/empresa?documentType=RUC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/empresa?documentType=RUC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/pe/empresa?documentType=RUC&documentNumber=');
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
    "documentType": "RUC",
    "documentNumber": "201340512231248910",
    "ubigeo": "150107",
    "numero": "450",
    "interior": "-",
    "lote": "-",
    "dpto": "-",
    "manzana": "-",
    "kilometro": "-",
    "distrito": "CHACLACAYO",
    "provincia": "LIMA",
    "departamento": "LIMA",
    "direccion": "CAL. LAS PALMERAS NRO. 450 - LIMA LIMA CHACLACAYO",
    "nombre": "ADMINISTRADORA DE PANADERIAS E.I.R.L.",
    "estadoContribuyente": "BAJA DE OFICIO",
    "condicionDomicilio": "NO HABIDO",
    "tipoVia": "CAL.",
    "nombreVia": "LAS PALMERAS",
    "codigoZona": "-",
    "tipoZona": "-",
    "direccionSimple": "CAL. LAS PALMERAS NRO. 450",
    "actualizado": "2023-05-03 06:30:02"
  },
  "signature": {
    "dateTime": "May 3, 2023 8:51 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la RUT ingresada",
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
"message": "documentType must be one of: [RUC]"
}
```

{% endtab %}
{% endtabs %}
