---
id: update-a-webhook
title: Update a Webhook
description: Update an existing webhook configuration
slug: /resources/update-a-webhook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a Webhook

## Endpoint

```
PUT https://api.verifik.co/v2/webhooks/{id}
```

Method for updating an existing webhook. To make the service work, the _id parameter is required, which is generated when a webhook is created correctly.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name        | Type    | Required | Description                                                                |
| ----------- | ------- | -------- | -------------------------------------------------------------------------- |
| `name`      | string  | No       | The new name you want this webhook to have                                 |
| `url`       | string  | No       | You can update the url to where you want to receive the POST calls.        |
| `description` | string | No       | The new description you want this webhook to have                          |
| `link`      | array   | No       | Array of projectFlows that you want to **link** this webhook to.           |
| `unlink`    | array   | No       | Array of projectFlows that you want to **unlink** from this webhook.       |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    url: 'https://sandbox.verifik.co/v2/webhooks/logs',
    name: 'Updated webhook name',
    description: 'Updated description'
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
  "name": "Updated webhook name",
  "description": "Updated description"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("PUT", "/v2/webhooks/66de320d6a5c6ef0e02d4223", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'url' => 'https://sandbox.verifik.co/v2/webhooks/logs',
    'name' => 'Updated webhook name',
    'description' => 'Updated description'
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
  "name": "Updated webhook name",
  "description": "Updated description"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/webhooks/66de320d6a5c6ef0e02d4223")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
    "_id": "66de320d6a5c6ef0e02d4223",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Updated webhook name",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66de320d6a5c6ef0e02d4222"
    },
    "updatedAt": "2024-09-08T23:23:57.678Z",
    "createdAt": "2024-09-08T23:23:57.678Z",
    "__v": 0
  }
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  </TabItem>
</Tabs>

### Features

- **Flexible Updates**: Update any webhook field independently
- **Project Flow Management**: Link or unlink project flows from webhooks
- **Partial Updates**: Only send the fields you want to change
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Proper 404 responses for non-existent webhooks