# Create a ZelfProof

### Endpoint

```
https://api.zelf.world/api/zelf-proof/encrypt 
```

This endpoint allows the creation of a new Zero Knowledge Face Proof "**ZelfProof"** as raw bytes encoded in base64. These are the same bytes used to generate the ZelfQR code.

{% embed url="<https://youtu.be/WPTtR7Jtung>" %}

### Request

* **Endpoint**: `/api/zelf-proof/encrypt`
* **Method**: POST
* **Content-Type**: `application/json`

#### **Body**

The request body should be a JSON object containing the following fields:

```json
{
  "livenessDetectionPriorCreation": false,
  "publicData": {
    "ethAddress": "0x13901AE0F17E2875E86C86721f9943598601b0C4"
  },
  "faceBase64": "face_image_bytes_as_base64",
  "livenessLevel": "REGULAR",
  "metadata": {
    "mnemonic": "pistol cloth equal legend category dry wine enjoy rookie artwork portion december"
  },
  "os": "DESKTOP",
  "password": "optional",
  "identifier": "A0123453",
  "referenceFaceBase64": "optional_base64_encoded_reference_face_image",
  "requireLiveness": true,
  "tolerance": "REGULAR",
  "verifierKey": "optional_auth_key"
}
```

#### Fields:

* **livenessDetectionPriorCreation**: `Boolean` (Optional) - If true, the face must be live to create the ZelfProof.
* **publicData**: `object` (Optional) - Cleartext data associated with the record, such as `masked_id`.
* **faceBase64**: `string` (Required) - Base64 encoded face image data.
* **livenessLevel**: `string` (Optional) - Specifies the tolerance for face liveness checks. E.g., `"REGULAR"`.
* **metadata**: `object` (Optional) - Additional metadata in JSON format associated with the ZelfProof.
* **os**: `string` (Optional) - The operating system where the request originates, e.g., `"DESKTOP"`.
* **password**: `string` (Optional) - A password for additional security.
* **identifier**: `string` (Optional) - An ID associated with the record.
* **referenceFaceBase64**: `string` (Optional) - Base64 encoded reference face image. Used for matching with the `faceBase64`.
* **requireLiveness**: `Boolean` (Optional) - If true, the face must be live.
* **tolerance**: `string` (Optional) - Specifies the tolerance for face matching. E.g., `"REGULAR"`.
* **verifierKey**: `string` (Optional) - An authentication key required for decrypting the ZelfProof if specified.

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "livenessDetectionPriorCreation": false,
  "publicData": {
    "name": "Miguel",
    "key": "123",
    "key2": "ABC",
    "randomKey": "ABC"
  },
  "livenessLevel": "REGULAR",
  "metadata": {
    "zelfName": "randomtext982.zelf",
    "email": "miguel@verifik.co",
    "secret": "238289372983",
    "secret2": "K3M9D1P4",
  },
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "faceBase64": "/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX...AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9AImAhgDASIAAhEBAxEB/8QAH",
 "requireLiveness": true,
  "tolerance": "REGULAR"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/zelf-proof/encrypt',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cC...1do_A06aSTrcoSI', 
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

{% endtab %}

{% tab title="Rust" %}

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIs...1YEfi1do_A06aSTrcoSI".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
    "livenessDetectionPriorCreation": false,
    "publicData": {
        "name": "Miguel",
        "instruction": "123939",
        "instruction2": "efjidjfidjf",
        "test": "ABC"
    },
    "livenessLevel": "REGULAR",
    "metadata": {
        "zelfName": "randomtext982.zelf",
        "name": "Miguel",
        "email": "miguel@verifik.co",
        "secret": "238289372983"
    },
    "os": "DESKTOP",
    "password": "123456",
    "identifier": "133445",
    "faceBase64": "/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1a4Mawd1lrku6KHSSOdGyOMWY053P5k9Sp8uNU7pogIvzUZ9W/rFJJyeyIqVnALysHitBijslHIOtgDZA0G3PQlMkl7wsdenRDLwBrm6vORnkN0PjWuDYWUbTv3nfcyO617Bo35J7Rc2smgj8CnNOlgfMqhosQUuyjewCiVEmV2YvNvBGeTlAVbUytexzCef7hVjFdfvqdTu0CrzoVKgeLAdFAFtC82upVxI3VQIHC4F1JY+xtcKl8hQ2WJvQfIgujhztzklw5W3Uw5SNxdR5CA4dfBFBOcW6WYRZNon9xx/tH60ySXI3Y/KhUMg9zAnmT9aYhs+Dnl2NkdIHfWFykcEYfN2smISMcyMsyR5h63Mny0XLr9MmsSs5PUNPI6Nko8tDSTuzS0sMjurmAlcuV7ipcopTa4GDC8Pabiipwf2YTjh9ETc0kJP7MLlyXtw9IOuXs73tof1OD+GEnvbQ/qcH8MLlyHbh6RNcvZ3vZQfqcH8MLvevD/1KD+GFy5Ttw9ImuXsT3qw79Rp/4YXe9WHfqNP/AAguXI9uHpB1z9ie9GG/qFN/CCT3nwz+r6b+E38Fy5Ttw9Incn7F96MN/UK...E1S9k8ANADQABsAuXLkwp/9k=",
    "requireLiveness": true,
    "tolerance": "REGULAR"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.zelf.world/api/zelf-proof/encrypt")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

{% endtab %}

{% tab title="Go" %}

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "https://api.zelf.world/api/zelf-proof/encrypt"
  method := "POST"

  payload := strings.NewReader(`{
    "livenessDetectionPriorCreation": false,
    "publicData": {
        "publicKeyA": "ABC",
        "publicKeyB": "DEF",
        "publicKeyC": "XYZ"
    },
    "livenessLevel": "REGULAR",
    "metadata": {
        "secretA": "123456",
        "secretB": "789456",
        "secretC": "121336" 
    },
    "os": "DESKTOP",
    "password": "123456",
    "identifier": "133445",
    "faceBase64": "/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAA",
    "requireLiveness": true,
    "tolerance": "REGULAR"
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Authorization", "Bearer eyJhbGciOiJIUzI1N...J9.eyJjbGllbnRJZCI1do_A06aSTrcoSI")
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

{% endtab %}

{% tab title="Python" %}

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.zelf.world")
payload = json.dumps({
  "livenessDetectionPriorCreation": False,
  "publicData": {
    "publicKeyA": "ABC",
    "publicKeyB": "DEF",
    "publicKeyC": "XYZ"
  },
  "livenessLevel": "REGULAR",
  "metadata": {
    "secretA": "123456",
    "secretB": "789456",
    "secretC": "121336"
  },
  "os": "DESKTOP",
  "password": "123456",
  "identifier": "133445",
  "faceBase64": "/9j/4AAQSkZJRgABAQEASABIAAD.../4gHYSUNDX1BST0ZJTEUAAQEAAAHIA",
  "requireLiveness": True,
  "tolerance": "REGULAR"
})
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5c...8n31YEfi1do_A06aSTrcoSI',
  'Content-Type': 'application/json'
}
conn.request("POST", "/api/zelf-proof/encrypt", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

### Responses

{% tabs %}
{% tab title="200" %}

```json
{
  "zelfProof": "ApCvClE+z5yu2fKvayvzQ0zEDZ+/jdzPd3ZhiQ+GdH363JQOGHLyia7Ia4Yf+yD5CMJDfACjoroVt5UJl453KZ/7uqG01eAV+8B5lRc2lV96R2mIAVH5YedAY2r7AIwVPHqSinCIOMqUVlaWJxzjSy0bleYhM4y+vEifQEdaumt1CwhOW1KAU8MFGzW2cFZqppmeKBHz5NlVvcFEmlRkVVgy03LnddibSjVhQ+uaC/TH+aWmejZGx4wYvCtuFGISQsvpJ5aP0WdNlrD45PDxpE2WnpQ2S/XBAFM6jrm6CBEbh1asisH/8T+GAG+VSqZR2/GITzgRFmzfN8gUgPHks4eZX+bvjrFkgbyUc96WaQdyGDu5r4mTVm2H/wrLE/6/bh7EE+skajgDNwhp5oWRNDOzr0GSIaQYX/hP0faF4qL/MUQkCpqzA82KjBGzjoc7q+O3u/4Ym71E2cVvY7f6aNda+C/CMH8wwEbI05WupNTYcZ1MfeViMFcb/t2SVFpI4WtbpmTuR6C1fZ7FtwTMCnN1vif5P5ZceOLUVdYqHjEifKpAi1Jl0Ww9yyRxhLMRzAjfDV/b6tdWc5gJgGSIHylASv+O9TIAf9Alv4uKSuf/nvUlsjdXfjC7DHC58NFXYAcpwWsa4wvbqRUWOnYSwQ6pec7ZFGLntbl4sSRjHeScb3P0yhqYN8XKSO2KpeXXQTIVowqnw5I6sUNOveMvPSEQlMdUS1iMbdLE1RFc6mIkkihiqEi8pKcfMuaG/OtXIr0d6Y8qaP0vZaVWtW5jZLcGbaXN0EvckmiGxXg3dqlockr2RrEz3PlGyZ+1RRxzjXLmo2qVXl3LdCqbx2DFqu04REH4uzqS4n3Aw2HtuCXm5i3vykXxAlZPUiXrHhEy1PiixklP9+wYUTNsot80926RoH94IrCsrfAqbwGeOFq1sPOPFv8f3UXRfhWrZvbYWzlOTiCk1EYRJocjOzeiy7Myd8nROG6cyxMxSGzeWcO/qvkeAqBqAehDMJZfcM63TAPk7OQ73oPPhPRKiM7hjVE0XSD1ZJT3mDcruJiu9dPtFep+pA=="
}
```

{% endtab %}

{% tab title="400" %}

```json
{
    "error": "Provided face image could not be decoded as a base64 string."
}
```

{% endtab %}

{% tab title="401" %}

```json
{
    "error": "Protected resource, use Authorization header to get access"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "validationError": "missing metadata\n"
}
```

{% endtab %}

{% tab title="413" %}

```
request entity too large
```

{% endtab %}
{% endtabs %}

#### Error Codes

Here are some specific error codes that might be returned:

* **ERR\_INVALID\_IMAGE**: Invalid base64 string for the face image.
* **ERR\_NO\_FACE\_DETECTED**: No face detected in the image.
* **ERR\_MULTIPLE\_FACES\_DETECTED**: Multiple faces detected in the image.
* **ERR\_REF\_FACE\_NOT\_MATCHED**: Reference face does not match the input face.
* **ERR\_LIVENESS\_FAILED**: Liveness check failed for the input face.
* **ERR\_LIVENESS\_FACE\_ANGLE\_TOO\_LARGE**: The face angle is too large, making liveness check impossible.
* **ERR\_LIVENESS\_FACE\_IS\_OCCLUDED**: The face is occluded (e.g., by a mask).
* **ERR\_LIVENESS\_FACE\_CLOSE\_TO\_BORDER**: The face is too close to the border of the image.
* **ERR\_LIVENESS\_FACE\_TOO\_SMALL**: The face is too small in the image.
* **ERR\_LIVENESS\_EYES\_CLOSED**: The eyes are closed in the image.
