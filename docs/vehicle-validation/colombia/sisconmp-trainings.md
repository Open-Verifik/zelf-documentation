---
id: vehicle-validation-colombia-sisconmp-trainings
title: Information System for Drivers Transporting Dangerous Goods
description: SISCONMP training records
sidebar_label: SISCONMP Training Records
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Information System for Drivers Transporting Dangerous Goods

## Information System for Drivers Transporting Dangerous Goods

<mark>`GET - https://api.verifik.co/v2/co/sisconmp/trainings`</mark>

This service allows you to retrieve training records registered in the SISCONMP (Control and Monitoring System for Personnel) in Colombia. By providing the participant's document number and document type, you can access detailed information about their training. The response includes data such as the document number, document type, participant's full name, educational institution name, training name, expedition and expiration dates, license status, and other relevant details.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| documentType | String | `True` | Document Type: Allowed values are: CC, CE, PA, RC. | `CC` |
| documentNumber | String | `True` | Driver's document number, without spaces or periods. | `123456789` |

**Request**

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/sisconmp/trainings',
  params: {documentType: 'CC', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/sisconmp/trainings?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=');
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
<TabItem value="200" label="200" default>

```json
{
  "data": {
    "DIVcodigHeadquarters": "11001000",
    "DIVnameHeadquarters": "BOGOTA",
    "NIDHeadquarters": "9131",
    "NIT_educationalInstitution": "901139908",
    "class": "",
    "dateExpedition": "2021/09/11",
    "dateExpeditionLicense": "2016/12/10",
    "descriptionClass": "",
    "documentNumber": "1030644022",
    "documentType": "CC",
    "expirationDate": "2023/09/11",
    "expirationDateLicense": "2026/12/10",
    "inactive": "No",
    "lastName": "URIBE SANCHEZ",
    "licenseNumber": "1030644022",
    "nameFile": "ejemplo",
    "nameHeadquarters": "INSTITUCION DE EDUCACION PARA EL TRABAJO Y EL DESARROLLO HUMANO CORPOIBEROAMERICANA S.A.S",
    "nameTraining": "CURSO BASICO",
    "names": "CHRISTIAN XAVIER",
    "numericalValueClass": "0",
    "typeTraining": "CURSO BASICO",
    "typeVehicle": ""
  },
  "signature": {
    "dateTime": "July 13, 2023 4:05 PM",
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
"message": "missing documentType\n. missing documentNumber\n"
}
```

</TabItem>

<TabItem value="409-2" label="409 (Document Type)">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC]"
}
```

</TabItem>
</Tabs>
