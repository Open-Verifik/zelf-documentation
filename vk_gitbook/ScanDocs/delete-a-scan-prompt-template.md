# Delete a Scan Prompt Template

### Endpoint

<pre><code><strong>https://api.verifik.co/v2/ocr/scan-prompt/template/:id
</strong></code></pre>

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Params

| Name | Type   | Description           |
| ---- | ------ | --------------------- |
| `id` | String | Primary key to delete |

### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location --request DELETE 'https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...IkpXVCJ9.eKh_o'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsI...Kk8Tt5Kh_o'
  }
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

{% tab title="Python" %}

```python
import requests

url = "https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e"

payload = {}
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6I...dKk8Tt5Kh_o'
}

response = requests.request("DELETE", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}

{% tab title="Rust" %}

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cC...Fqa1ldKk8Tt5Kh_o".parse()?);

    let request = client.request(reqwest::Method::DELETE, "https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e")
        .headers(headers);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

{% endtab %}
{% endtabs %}

### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "684320d3ab31a00ff71f445e",
        "system": false,
        "documentTypes": [
            "RUT_FULL"
        ],
        "fields": [
            "firstName",
            "lastName",
            "fullName",
            "documentNumber",
            "nationality",
            "dateOfBirth",
            "gender",
            "expirationDate",
            "emissionDate",
            "RUT",
            "RUN",
            "NAC",
            "placeOfBirth",
            "profession",
            "barCode"
        ],
        "requiresBackSide": false,
        "client": "613a3a48f2c84b454153add7",
        "name": "Chilean ID Card Scanning (both sides)",
        "format": "json",
        "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
        "description": "Prompt to extract Chilean ID card details from both sides",
        "updatedAt": "2025-06-06T17:10:33.298Z",
        "createdAt": "2025-06-06T17:09:39.428Z",
        "__v": 2
    }
}
```

{% endtab %}

{% tab title="403" %}

```json
{
    "code": "Forbidden",
    "message": "template_system_cannot_be_deleted"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "template_not_found"
}
```

{% endtab %}
{% endtabs %}
