---
id: list-all-webhooks
title: List All Webhooks
description: Retrieve a list of all webhooks with optional filtering and pagination
slug: /resources/list-all-webhooks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List All Webhooks

## Endpoint

```
GET https://api.verifik.co/v2/webhooks
```

With this service, you can bring all Webhooks that you have created.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name       | Type    | Required | Description                                                  |
| ---------- | ------- | -------- | ------------------------------------------------------------ |
| `page`     | number  | No       | You can define the page number if you have too many records. |
| `perPage`  | number  | No       | How many records you need per page.                          |
| `like_name` | string | No       | You can query a 'like' condition                             |
| `where_url` | string | No       | You can do an exact comparison inside a field.               |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/webhooks',
  params: {
    page: 1,
    perPage: 20,
    like_name: 'Postman'
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
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

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("GET", "/v2/webhooks?page=1&perPage=20&like_name=Postman", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/webhooks?page=1&perPage=20&like_name=Postman', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/webhooks?page=1&perPage=20&like_name=Postman")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

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
  "data": [
    {
      "_id": "66de320d6a5c6ef0e02d4223",
      "client": "613375a1eab2fe08527f81e2",
      "projectFlow": [],
      "isActive": true,
      "name": "Postman sample",
      "url": "https://sandbox.verifik.co/v2/webhooks/logs",
      "notification": {
        "success": false,
        "fail": true,
        "_id": "66de320d6a5c6ef0e02d4222"
      },
      "updatedAt": "2024-09-08T23:23:57.678Z",
      "createdAt": "2024-09-08T23:23:57.678Z",
      "__v": 0
    },
    {
      "_id": "66de30d20be3dcde0bf1defb",
      "client": "613375a1eab2fe08527f81e2",
      "projectFlow": [],
      "isActive": true,
      "name": "Postman sample",
      "url": "https://sandbox.verifik.co/v2/webhooks/logs",
      "notification": {
        "success": false,
        "fail": true,
        "_id": "66de30d20be3dcde0bf1defa"
      },
      "updatedAt": "2024-09-08T23:18:42.142Z",
      "createdAt": "2024-09-08T23:18:42.142Z",
      "__v": 0
    }
  ]
}
```

  </TabItem>
</Tabs>

### Features

- **Pagination Support**: Navigate through large lists of webhooks
- **Search Functionality**: Filter webhooks by name or URL
- **Complete Webhook Data**: Returns all webhook details including configuration
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Flexible Querying**: Use like conditions and exact matches for filtering