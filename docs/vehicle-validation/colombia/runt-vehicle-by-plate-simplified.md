---
id: vehicle-validation-colombia-runt-vehicle-by-plate-simplified
title: RUNT - Vehicle records by plate number (simplified)
description: Simplified vehicle query using owner data and plate
sidebar_label: Vehicle records by plate number (simplified)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RUNT - Vehicle records by plate number (simplified)

## Simplified Vehicle Information Lookup

<Tabs>
<TabItem value="endpoint" label="Endpoint" default>

`GET - https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified`

The Vehicle Information Lookup API allows you to retrieve comprehensive details about a vehicle registered in Colombia using its license plate. By providing the license plate number along with the document type and number of the owner, you can access essential information about the vehicle, including its make, model, year, color, fuel type, and more.

This API provides a valuable resource for businesses and individuals looking to access accurate and up-to-date vehicle information in Colombia.

</TabItem>
</Tabs>

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| documentType | String | `True` | Document type. Allowed values are: CC, CE, PA, RC, NIT. | `CC` |
| documentNumber | String | `True` | Document number of the owner of the vehicle, without spaces or periods | `123456789` |
| plate | String | `True` | Vehicle plate to consult. | `ABC123` |

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified',
  params: {documentType: 'CC', documentNumber: '123456789', plate: 'ABC123'}, 
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
payload = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
headers = {
  'Content-Type': 'text/plain'
}
conn.request("GET", "/v2/co/runt/vehicle-by-plate-simplified?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
let parameters = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
request.addValue("text/plain", forHTTPHeaderField: "Content-Type")

request.httpMethod = "GET"
request.httpBody = postData

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
$request->setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified?documentType=CC&documentNumber=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'text/plain'
));
$request->setBody('https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003');
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

**Response**

<Tabs>
<TabItem value="200" label="200" default>

```json
{
    "data": {
        "vehicle": {
            "claseVehiculo": "AUTOMOVIL",
            "color": "ROJO COBRE",
            "estadoDelVehiculo": "ACTIVO",
            "homologaciones": [],
            "linea": "3 ALL NEW",
            "marca": "MAZDA",
            "modelo": "2014",
            "noChasis": "9FCBL86L2E1123424",
            "noMotor": "LF11517487",
            "noPlaca": "HSY802",
            "noVin": "9FCBL86L2E11022344",
            "organismoTransito": "SDM - BOGOTA D.C.",
            "tipoCarroceria": "SEDAN",
            "tipoCombustible": "GASOLINA",
            "tipoServicio": "Particular",
            "toneladas": "0.00"
        },
        "plate": "ABC123",
        "documentNumber": "123456789",
        "documentType": "CC"
    },
    "signature": {
        "dateTime": "March 14, 2024 2:11 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "9S7J6"
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
"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

</TabItem>

<TabItem value="409b" label="409 - Invalid Document Type">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC]"
}
```

</TabItem>
</Tabs>
