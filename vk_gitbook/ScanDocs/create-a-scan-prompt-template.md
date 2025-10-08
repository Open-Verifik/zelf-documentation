# Create a Scan Prompt Template

## Endpoint

```
https://api.verifik.co/v2/ocr/scan-prompt/template
```

This API endpoint allows you to create new Scan Prompt Template for specific document types that we don't have at the moment in Verifik database. The Scan Prompt Templates help in structuring the extraction of key data fields from documents, enabling you to capture the required information accurately. When creating a new Scan Prompt Template, it's important to emphasize the **prompt** parameter, which plays a crucial role in instructing the system on how to extract data from the provided document type.

By creating custom templates with detailed prompts, you can ensure that the API accurately extracts the required data from any document you pass to us, even when dealing with multilingual, distorted, or culturally specific text.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Prompt**

Take a look at this prompt example:

```json
{
  "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
}
```

Basically the prompt is a series of instructions and considerations about the document you desire to extract, you must define the most important aspects in the body of the prompt.&#x20;

**It's important that inside the prompt you add {{fields}} and {{format}}, this is to tell the AI what data extract and in which format return.**

### **Body**

| Name           | Type   | Description                                                        |
| -------------- | ------ | ------------------------------------------------------------------ |
| `documentType` | string | Image in Base64 encoded format or a URL where the image is hosted. |
| `fields`       | string |                                                                    |
| `name`         | string |                                                                    |
| `format`       | string |                                                                    |
| `prompt`       | string |                                                                    |
| `description`  | string |                                                                    |

**Body Example**

```json
{
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
  "name": "Chilean ID Card Scanning (both sides)",
  "format": "json",
  "code": "rut_full",
  "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
  "description": "Prompt to extract Chilean ID card details from both sides",
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location --request POST 'https://api.verifik.co/v2/ocr/scan-prompt/template' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1Ni...k8Tt5Kh_o' \
--header 'Content-Type: application/json' \
--data '{
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
  "name": "Chilean ID Card Scanning (both sides)",
  "format": "json",
  "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
  "description": "Prompt to extract Chilean ID card details from both sides",
  "code": "rut_full"
}'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
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
  "name": "Chilean ID Card Scanning (both sides)",
  "format": "json",
  "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
  "description": "Prompt to extract Chilean ID card details from both sides",
  "code": "rut_full"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-prompt/template',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1N...8Tt5Kh_o', 
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

{% tab title="Python" %}

```python
import requests
import json

url = "https://api.verifik.co/v2/ocr/scan-prompt/template"

payload = json.dumps({
  "system": False,
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
  "name": "Chilean ID Card Scanning (both sides)",
  "format": "json",
  "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
  "description": "Prompt to extract Chilean ID card details from both sides",
  "code": "rut_full"
})
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIIsInR...k8Tt5Kh_o',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

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
    headers.insert("Authorization", "Bearer eyJhbGciOi...dKk8Tt5Kh_o".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
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
    "name": "Chilean ID Card Scanning (both sides)",
    "format": "json",
    "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
    "description": "Prompt to extract Chilean ID card details from both sides",
    "code": "rut_full"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.verifik.co/v2/ocr/scan-prompt/template")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
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
        "_id": "683fcc0c701e4cc487b8f4cd",
        "client": "613a3a48f2c84b454153add7",
        "name": "Chilean ID Card Scanning (both sides)",
        "format": "json",
        "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
        "description": "Prompt to extract Chilean ID card details from both sides",
        "updatedAt": "2025-06-04T04:31:08.633Z",
        "createdAt": "2025-06-04T04:31:08.633Z",
        "__v": 0
    }
}
```

{% endtab %}
{% endtabs %}
