---
id: peru-vehicle-insurance
title: Vehicle Insurance
description: Peruvian vehicle insurance service
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Peru

## Peru Vehicle Insurance Information

<mark >`GET - https://api.verifik.co/v2/pe/vehiculo/soat`</mark>

This service provides information on the insurance status of a vehicle in Peru. It returns details including the insurance company name, policy start and end dates, vehicle plate number, policy number, usage type, vehicle class, and policy status.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="95">Name</th><th width="79">Type</th><th width="114">Required?</th><th width="332">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate number to consult, without spaces or points.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/pe/vehiculo/soat>',
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

</TabItem>
<TabItem value="python" label="Python">

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/pe/vehiculo/soat?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/soat?plate=")!,timeoutInterval: Double.infinity)
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

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/pe/vehiculo/soat?plate=');
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

</TabItem>
</Tabs>

### **Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": {
    "plate": "ABC123",
    "soat": {
      "ConsultarSoatResult": {
        "NombreCompania": "Interseguro",
        "FechaInicio": "27/04/2022",
        "FechaFin": "27/04/2023",
        "Placa": "ABC123",
        "NúmeroPoliza": "000000000000000000001",
        "NombreUsovehiculo": "PARTICULAR",
        "NombreClasevehiculo": "AUTOMOVIL",
        "Estado": "VIGENTE",
        "CodigoUnicoPoliza": "0000000000000000000000008",
        "CodigoSBSAseguradora": "001",
        "FechaControlPolicial": "26/04/2022"
      }
    }
  },
  "signature": {
    "dateTime": "July 19, 2022 3:08 PM",
    "message": "Certified by Verifik.co"
  }
}
```

</TabItem>
<TabItem value="404" label="404">

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

</TabItem>
<TabItem value="409" label="409">

```json
{
"code": "MissingParameter",
"message": "missing plate\n"
}
```

</TabItem>
</Tabs>
