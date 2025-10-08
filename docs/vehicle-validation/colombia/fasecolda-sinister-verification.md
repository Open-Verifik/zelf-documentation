---
id: vehicle-validation-colombia-fasecolda-sinister-verification
title: Sinister Verification - Fasecolda
description: Accident history verification
sidebar_label: Sinister Verification
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sinister Verification - Fasecolda

## Sinister Verification - Fasecolda

<mark>`GET - https://api.verifik.co/v2/co/fasecolda/sinister`</mark>

The Fasecolda Sinister Verification service provides a detailed digital platform for checking the insurance claim history of vehicles in Colombia. By entering a vehicle's license plate, users can access comprehensive information about any registered insurance claims associated with that vehicle.

The service returns a unique request identifier, the vehicle's license plate number, and a list of insurance claim records. Each record includes the claim ID, accident date, and the type of protection applied, indicating the severity of the loss. This service is essential for assessing a vehicle's insurance history and understanding any potential risks or issues.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| plate | String | `True` | Plate of the vehicle to consult, without spaces or periods. | `ABC123` |

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/fasecolda/sinister',
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
conn.request("GET", "/v2/co/fasecolda/sinister?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/fasecolda/sinister?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/fasecolda/sinister?plate=');
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
    "plate": "KDK605",
    "sinister": [
      {
        "id": "1",
        "accidentDate": "20/01/2015",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "2",
        "accidentDate": "17/08/2012",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "3",
        "accidentDate": "16/01/2017",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "4",
        "accidentDate": "14/03/2014",
        "protection": "Pérdida Menor Cuantía"
      },
      {
        "id": "5",
        "accidentDate": "13/08/2019",
        "protection": "Pérdida Menor Cuantía"
      }
    ]
  },
  "signature": {
    "dateTime": "February 9, 2024 7:43 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "PFDB2"
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
