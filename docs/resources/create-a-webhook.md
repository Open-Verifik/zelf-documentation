---
id: create-a-webhook
title: Create a Webhook
description: Create a new webhook for receiving notifications
slug: /resources/create-a-webhook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Webhook

## Endpoint

```
POST https://api.verifik.co/v2/webhooks
```

This API allows you to create a new webhook within your account. You can associate a webhook with project Flows in this step or when you update the webhook.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name        | Type    | Required | Description                                                     |
| ----------- | ------- | -------- | --------------------------------------------------------------- |
| `url`       | string  | Yes      | The url where we will send the information via POST.            |
| `name`      | string  | Yes      | The name of your webhook to identify it easily.                 |
| `isActive`  | boolean | Yes      | This boolean will enable/disable it whenever you require it.    |
| `description` | string | No      | Description to know what information you will be sending there. |
| `link`      | array   | No      | Array of projectFlows that you want to link this webhook to.    |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/webhooks',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    url: 'https://sandbox.verifik.co/v2/webhooks/logs',
    name: 'Postman sample',
    isActive: true,
    description: 'This is an example',
    link: ['66df24f4c80823e06a348019']
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
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "url": "https://sandbox.verifik.co/v2/webhooks/logs",
  "name": "Postman sample",
  "isActive": True,
  "description": "This is an example",
  "link": ["66df24f4c80823e06a348019"]
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/webhooks", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/webhooks', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'url' => 'https://sandbox.verifik.co/v2/webhooks/logs',
    'name' => 'Postman sample',
    'isActive' => true,
    'description' => 'This is an example',
    'link' => ['66df24f4c80823e06a348019']
  ]
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <your_token>"
]

let parameters = [
  "url": "https://sandbox.verifik.co/v2/webhooks/logs",
  "name": "Postman sample",
  "isActive": true,
  "description": "This is an example",
  "link": ["66df24f4c80823e06a348019"]
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/webhooks")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [
      "66df24f4c80823e06a348019"
    ],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66df272bf82f3bfab17dea9a"
    },
    "_id": "66df272bf82f3bfab17dea9b",
    "updatedAt": "2024-09-09T16:49:47.373Z",
    "createdAt": "2024-09-09T16:49:47.373Z",
    "__v": 0
  }
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing url\n"
}
```

  </TabItem>
</Tabs>

### Features

- **Webhook Creation**: Create webhooks to receive real-time notifications
- **Project Flow Integration**: Link webhooks to specific project flows
- **Flexible Configuration**: Set custom URLs, names, and descriptions
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Comprehensive error responses for various scenarios