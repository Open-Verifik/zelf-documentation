---
id: vehicle-validation-colombia-simit-resolutions
title: SIMIT - Resolutions
description: Traffic violation resolutions
sidebar_label: Resolutions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SIMIT - Resolutions

## SIMIT Resolutions

<mark>`GET - https://api.verifik.co/v2/co/simit/resoluciones`</mark>

The SIMIT Resolutions Service provides access to detailed information about traffic violation resolutions for a specific person or company in Colombia. This service returns data including the name of the infractor, the resolution status, the date of the resolution, and the amount owed. The information is regularly updated to ensure accuracy.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| documentType | String | `True` | Document type. Valid parameters: CC, PA, CE, TI, RC. | `CC` |
| documentNumber | String | `True` | Document number to consult, without spaces or points. | `123456789` |

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/simit/resoluciones',
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
conn.request("GET", "/v2/co/simit/resoluciones?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/simit/resoluciones?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/simit/resoluciones?documentType=CC&documentNumber=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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
    "resoluciones": [
      {
        "estadosResoluciones": "Pendiente de pago",
        "fechaComparendo": "20190503",
        "fechaResolucion": "20191001",
        "nombresInfractores": "PEPE SALGADO",
        "NúmeroComparendo": "99999999000000000936",
        "resoluciones": "S709332197",
        "secretarias": "Barrancabermeja",
        "total": "146770.0"
      }
    ],
    "signature": {
      "dateTime": "March 3, 2022 4:09 PM",
      "message": "Certified by Verifik.co"
    }
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
</Tabs>
