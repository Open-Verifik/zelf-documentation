# 2. Create a session

### Endpoint \[POST]

```
https://api.zelf.world/api/sessions
```

This endpoint is used to create a new session for a device using a unique identifier. The response includes a token that can be used for subsequent authenticated requests.

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cURL" label="cURL">

```bash
curl --location --request POST 'https://api.zelf.world/api/sessions' \
--header 'origin: postman' \
--header 'Content-Type: application/json' \
--data '{
}'
```

</TabItem>

<TabItem value="Node.js" label="Node.js">

```javascript
const axios = require('axios');
let data = JSON.stringify({
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/sessions',
  headers: { 
    'origin': 'postman', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```

</TabItem>

<TabItem value="Rust" label="Rust">

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("origin", "postman".parse()?);

    let data = "";

    let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/sessions")
        .headers(headers)
        .body(data);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

</TabItem>

<TabItem value="Swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.zelf.world/api/sessions")!,timeoutInterval: Double.infinity)
request.addValue("postman", forHTTPHeaderField: "origin")

request.httpMethod = "POST"

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
</Tabs>

### Response

<Tabs>
<TabItem value="200" label="200">

```json
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXN...wC4ktLdSKUeb79EE",
        "activatedAt": 1749743895,
        "expiresAt": 1749744495
    }
}
```

</TabItem>
</Tabs>

#### Response Details

* **token**: `string` - The session token that will be used for authenticating future API requests.
