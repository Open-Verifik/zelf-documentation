---
id: vehicle-validation-colombia-bogota-vehicle-accidentality
title: Vehicle Accidentality in Bogotá
description: Accident history in Bogotá
sidebar_label: Vehicle Accidentality
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vehicle Accidentality in Bogotá

## Vehicle accidentality in Bogota

<mark>`GET - https://api.verifik.co/v2/co/bogota/vehicle/accidentality`</mark>

This service provides detailed information about the accident history of a vehicle registered in Bogotá, Colombia, using its license plate number. The response includes an array of accidents, with each record detailing the date of the accident, the associated form number, and the severity of the accident. This information is useful for assessing the vehicle's accident history and understanding its past incidents.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| plate | String | `True` | Plate to consult, without spaces or points. | `ABC123` |

**Request**

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/bogota/vehicle/accidentality',
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
conn.request("GET", "/v2/co/bogota/vehicle/accidentality?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/bogota/vehicle/accidentality?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/bogota/vehicle/accidentality?plate=');
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
<TabItem value="200" label="200" default>

```json
{
    "data": {
        "accident": [
            {
                "date": "VIERNES, 20 FEBRERO 2015 00:00",
                "form": "A1689",
                "seriousness": "SOLO DAÑOS"
            },
            {
                "date": "LUNES, 10 FEBRERO 2014 00:00",
                "form": "A1428611",
                "seriousness": "SOLO DAÑOS"
            },
            {
                "date": "SÁBADO, 9 MARZO 2013 00:00",
                "form": "A1247163",
                "seriousness": "SOLO DAÑOS"
            },
            {
                "date": "VIERNES, 15 DICIEMBRE 2017 00:00",
                "form": "A000694418",
                "seriousness": "SOLO DAÑOS"
            },
            {
                "date": "VIERNES, 18 NOVIEMBRE 2016 00:00",
                "form": "A000472658",
                "seriousness": "SOLO DAÑOS"
            },
            {
                "date": "MIÉRCOLES, 25 DICIEMBRE 2013 00:00",
                "form": "A1422549",
                "seriousness": "SOLO DAÑOS"
            },
            {
                "date": "LUNES, 20 MAYO 2013 00:00",
                "form": "A1300406",
                "seriousness": "SOLO DAÑOS"
            }
        ],
        "plate": "TSP331"
    },
    "signature": {
        "dateTime": "July 3, 2024 3:58 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "3C9YY"
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
