---
id: vehicle-validation-colombia-runt-vehicle-soat-rtm
title: RUNT - Vehicle's SOAT and RTM
description: Insurance and technical inspection information
sidebar_label: Vehicle's SOAT and RTM
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RUNT - Vehicle's SOAT and RTM

## Colombian Vehicle Information Service

<Tabs>
<TabItem value="endpoint" label="Endpoint" default>

`GET - https://api.verifik.co/v2/co/runt/vehiculo`

The Colombian Vehicle Information service provides real-time access to details about a registered vehicle in Colombia. By using this service, you can obtain information such as the owner's name and identification, vehicle color, make and model, registration status, and expiration dates for the SOAT (mandatory vehicle insurance) and technical review.

This service is ideal for businesses in the automotive industry, insurance companies, and government agencies that need to verify vehicle information and ensure compliance with regulations.

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
| documentNumber | String | `True` | Document number of the owner of the vehicle, without spaces or periods. | `123456789` |
| plate | String | `True` | Vehicle plate to consult. | `ABC123` |

**Request**

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/runt/vehiculo',
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
conn.request("GET", "/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
let parameters = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=');
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

### **Response**

<Tabs>
<TabItem value="200" label="200" default>

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "plate": "XXXXX",
    "vehicleInformation": {
      "color": "PLATEADO",
      "brand": "CHERY",
      "line": "QQ3 SQR7080 S116",
      "status": "ACTIVO",
      "enrollmentDate": "07/10/2010",
      "plate": "XXXXX"
    },
    "soat": {
      "valid": true,
      "expeditionDate": "10/09/2021",
      "dueDate": "11/09/2022",
      "coverageStartDate": "12/09/2021",
      "soatNumber": "XXXXXX"
    },
    "techReview": {
      "valid": true,
      "reviewNumber": "XXXXX",
      "expeditionDate": "12/09/2021",
      "dueDate": "12/09/2022",
      "requireTechReview": true
    },
    "consultationDateTime": "2022-03-03T17:10:00.568Z"
  },
  "signature": {
    "dateTime": "March 3, 2022 12:10 PM",
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
