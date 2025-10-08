# Update a Scan Prompt Template

## Endpoint \[PUT]

```
https://api.verifik.co/v2/ocr/scan-prompt/template/:id
```

This API endpoint allows you to update a specific OCR template. OCR templates are used to extract structured data from documents. When you update a template, you can modify its settings, such as the fields to extract and the document types it applies to.

This API endpoint is used for managing OCR templates, allowing you to tailor data extraction according to specific document types and requirements. By updating the templates, you can adapt them to changing needs, ensuring accurate data extraction from documents.

**Note** When updating templates, ensure that the changes align with your OCR data extraction requirements, and test the updated template with sample documents to confirm its effectiveness.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Body**

| Name               | Type             | Description                                                                |
| ------------------ | ---------------- | -------------------------------------------------------------------------- |
| `fields`           | Array of Strings | List the fields you want to extract from the document provided.            |
| `documentTypes`    | Array of Strings | List of the documentTypes you want to set from our system or a custom one. |
| `requiresBackSide` | Boolean          | Specify if you require to scan also the back side for the Scan  Prompt API |
| `name`             | String           | It's the name of the template                                              |
| `format`           | String           | you can export this in `json` or `xml`                                     |
| `prompt`           | String           | The prompt that you specify                                                |
| `description`      | String           | Description about this scan prompt template.                               |

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location --request PUT 'https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiI...Fqa1ldKk8Tt5Kh_o' \
--header 'Content-Type: application/json' \
--data '{
    "fields": [   "firstName",
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
            "barCode"]
}'
```

{% endtab %}

{% tab title="Rust" %}

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1Ni...Fqa1ldKk8Tt5Kh_o".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
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
    ]
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::PUT, "https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
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
  ]
});

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-prompt/template/684320d3ab31a00ff71f445e',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI...Kk8Tt5Kh_o', 
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
{% endtabs %}

### **Response**

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
{% endtabs %}
