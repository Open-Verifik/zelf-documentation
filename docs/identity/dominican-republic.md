---
id: dominican-republic
title: Dominican Republic
description: Dominican Republic identity validation service
---

# Dominican Republic

## Endpoint

```
https://api.verifik.co/v2/do/cedula
```

This Dominican Republic endpoint allows you to verify the validity of a Dominican ID using the CIE document type and the document number provided.

**To use this service in a graphical interface, we invite you to enter our Verifik** [**client panel**](https://app.verifik.co/data/api/All/1)**.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="82">Type</th><th width="111">Required?</th><th width="236">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document to consult. Allowed parameter: CIE.</td><td><code>CIE</code></td></tr></tbody></table>

### **Request**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/do/cedula',
  params: { documentNumber: '123456789', documentType:'CIE'},
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
conn.request("GET", "/v2/do/cedula?documentNumber=123456789&documentType=CIE", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/do/cedula?documentNumber=123456789&documentType=CIE")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/do/cedula?documentNumber=123456789&documentType=CIE');
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
        "arrayName": [
            "MATEO",
            "VERIFIK"
        ],
        "documentNumber": "12345678909876",
        "documentType": "CIE",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "July 3, 2024 3:24 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "YOESE"
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
<TabItem value="409-1" label="409 (Missing Parameters)">

```json
{
    "code": "MissingParameter",
    "message": "missing documentType\n. missing documentNumber\n"
}
```

</TabItem>
<TabItem value="409-2" label="409 (Invalid Document Type)">

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CIE]"
}
```

</TabItem>
</Tabs>
