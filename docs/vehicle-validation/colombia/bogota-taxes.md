---
id: vehicle-validation-colombia-bogota-taxes
title: Taxes in Bogotá
description: Bogotá vehicle tax service
sidebar_label: Taxes in Bogotá
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Taxes in Bogotá

## Taxes in Bogotá

<mark>`GET - https://api.verifik.co/v2/co/bogota/vehicle/tax`</mark>

This service provides information about the tax obligations for a vehicle registered in Bogotá. To access the details, you need to provide the owner's document type and number, along with the vehicle's license plate. The response includes information such as the vehicle's brand, model, and year, as well as the status of tax obligations for specific fiscal years. If the status is Moroso, it indicates that there are outstanding taxes that need to be paid.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="187">Name</th><th width="85">Type</th><th width="113">Required?</th><th width="240">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate to consult, without spaces or points.</td><td><code>ABC123</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number to consult, without space or points.</td><td><code>123456789</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameters: CC, NIT.</td><td><code>CC</code></td></tr></tbody></table>

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/bogota/vehicle/tax>',
  params: {plate: 'ABC123', documentType:'CC', documentNumber:'123456789'},
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
conn.request("GET", "/v2/co/bogota/vehicle/tax?documentType=&documentNumber=&plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/bogota/vehicle/tax?documentType=&documentNumber=&plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/bogota/vehicle/tax?documentType=&documentNumber=&plate=');
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

**Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
    "data": {
        "details": "",
        "documentNumber": "123456789",
        "documentType": "CC",
        "obligation": {
            "vehicle": [
                {
                    "brand": "MAZDA",
                    "form": "2020003010100010240",
                    "linea": "050365",
                    "model": "2021",
                    "obligation": "1.080.000",
                    "obligationStatus": "Moroso",
                    "plate": "ABC123",
                    "reference": "0000020034588543",
                    "taxableYear": "2020",
                    "totalToPay": "1.080.000"
                },
                {
                    "brand": "MAZDA",
                    "form": "2021203041643246796",
                    "linea": "050365",
                    "model": "2021",
                    "obligation": "3.459.000",
                    "obligationStatus": "Moroso",
                    "plate": "JMU866",
                    "reference": "0000021037595180",
                    "taxableYear": "2021",
                    "totalToPay": "3.459.000"
                }
            ]
        },
        "plate": "JMU866"
    },
    "signature": {
        "dateTime": "July 3, 2024 3:59 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "5P20N"
}
```

</TabItem>
<TabItem value="400" label="400">

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
<TabItem value="409-2" label="409 (Document Type)">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC,NIT]"
}
```

</TabItem>
</Tabs>
