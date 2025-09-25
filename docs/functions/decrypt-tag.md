# Decrypt Tag

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Endpoint

```
https://api.zelf.world/api/tags/decrypt
```

This endpoint allows you to decrypt a **ZelfProof** using biometric face verification to access the original wallet data, including mnemonic phrases and private keys. The decryption process verifies the user's identity through face recognition before providing access to sensitive information.

[Watch the video](https://youtu.be/WPTtR7Jtung)

### Request

* **Endpoint**: `/api/tags/decrypt`
* **Method**: POST
* **Content-Type**: `application/json`

**Request Body**

The request body should be a JSON object containing the following fields:

```json
{
  "tagName": "mytag",
  "domain": "zelf",
  "faceBase64": "[FACE_BASE64_DATA]",
  "password": "your_password"
}
```

#### Fields:

* **tagName**: `string` (*Required*) - The name of the tag to decrypt (without domain suffix).
* **domain**: `string` (*Required*) - The domain of the tag (e.g., "zelf", "avax", "bdag").
* **faceBase64**: `string` (*Required*) - Base64-encoded face image for biometric verification.
* **password**: `string` (*Required*) - Password used during the original encryption.

<Tabs>
<TabItem value="Node.js" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  tagName: "mytag",
  domain: "zelf",
  faceBase64: "[FACE_BASE64_DATA]",
  password: "your_password"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/tags/decrypt',
  headers: { 
    'Authorization': 'Bearer YOUR_JWT_TOKEN', 
    'Content-Type': 'application/json'
  },
  data: data
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

<TabItem value="Go" label="Go">

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.zelf.world/api/tags/decrypt"
  method := "POST"

  payload := strings.NewReader(`{
    "tagName": "mytag",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password"
  }`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Authorization", "Bearer YOUR_JWT_TOKEN")
  req.Header.Add("Content-Type", "application/json")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := io.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="Rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    let data = json!({
        "tagName": "mytag",
        "domain": "zelf",
        "faceBase64": "[FACE_BASE64_DATA]",
        "password": "your_password"
    });
    
    let response = client
        .post("https://api.zelf.world/api/tags/decrypt")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```

</TabItem>
</Tabs>

### Responses

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": {
    "id": "0199819c-37b8-7e23-a6f7-3033156b356a",
    "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "ipfsHash": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "cid": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "size": 20238,
    "date_pinned": "2025-09-25T16:02:03.083Z",
    "publicData": {
      "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
      "domain": "zelf",
      "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
      "suiAddress": "0x6a67465417c8feca9d0787bd5aac77eced8f31f7d4aba664ec778b65e47526bd",
      "zelfName": "testcarlos35.zelf.hold",
      "hasPassword": "true",
      "type": "hold",
      "origin": "online",
      "registeredAt": "2025-09-25 11:02:02",
      "expiresAt": "2025-10-25 11:02:02"
    },
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]",
    "zelfProof": "[ZELFPROOF_BASE64_DATA]",
    "domain": "zelf",
    "metadata": {
      "mnemonic": "street stairs earn fiscal impose sad document next tube word oblige print bitter home yellow allow between will fatal sorry ancient cushion frown dirt"
    }
  }
}
```

</TabItem>

<TabItem value="409" label="409">

```json
{
  "validationError": "Missing required field: tagName"
}
```

</TabItem>

<TabItem value="500" label="500">

```json
{
  "error": "Decryption failed: Invalid credentials"
}
```

</TabItem>
</Tabs>
