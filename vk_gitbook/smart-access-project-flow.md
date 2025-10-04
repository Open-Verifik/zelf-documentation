# Smart Access Project Flow

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/project-flows`

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="163.459228515625">Property</th><th width="116.1744384765625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>project</code></td><td>ObjectId</td><td>(Required) Reference to the associated Project</td></tr><tr><td><code>type</code></td><td>String</td><td>(Required) Flow type - Must be: "login"</td></tr><tr><td><code>collectionCode</code></td><td>String</td><td>Collection identifier for the project flow</td></tr><tr><td><code>identityUrl</code></td><td>String</td><td>URL for identity verification endpoint</td></tr><tr><td><code>redirectUrl</code></td><td>String</td><td>URL to redirect users after completion</td></tr><tr><td><code>status</code></td><td>String</td><td>Current status: "draft", "active", or "paused"</td></tr><tr><td><code>systemForm</code></td><td>ObjectId</td><td>Reference to the Form model for system forms</td></tr><tr><td><code>webhook</code></td><td>ObjectId</td><td>Reference to the Webhook model</td></tr><tr><td><code>webhookUrl</code></td><td>String</td><td>External webhook URL for notifications</td></tr><tr><td><a href="#loginsettings-sub-document"><code>loginSettings</code></a></td><td>Object</td><td>Sub-document containing settings pertaining to the login options</td></tr><tr><td><a href="#security-sub-document"><code>systemSettings</code></a></td><td>Object</td><td>Sub-document containing system settings for this flow</td></tr></tbody></table>

### `loginSettings` Sub-document

<table><thead><tr><th width="285.3428955078125">Property</th><th width="117.90625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>email</code></td><td>Boolean</td><td>Whether email login is enabled</td></tr><tr><td><code>emailGateway</code></td><td>String</td><td>Email gateway: "mailgun" or "none"</td></tr><tr><td><code>faceLiveness</code></td><td>Boolean</td><td>Whether face liveness detection is enabled</td></tr><tr><td><code>livenessMinScore</code></td><td>Number</td><td>Minimum liveness score (0.51-0.9)</td></tr><tr><td><code>phone</code></td><td>Boolean</td><td>Whether phone login is enabled</td></tr><tr><td><code>phoneGateway</code></td><td>String</td><td>Phone gateway: "sms", "whatsapp", "both", or "none"</td></tr><tr><td><code>searchMinScore</code></td><td>Number</td><td>Minimum search score (0.7-0.95)</td></tr><tr><td><code>searchMode</code></td><td>String</td><td>Search mode: "FAST" or "ACCURATE"</td></tr><tr><td><code>showFaceLivenessRecommendation</code></td><td>Boolean</td><td>Whether to show liveness recommendations</td></tr><tr><td><code>steps</code></td><td>Array</td><td>Array of login flow steps</td></tr></tbody></table>

### `security` Sub-document

<table><thead><tr><th width="177.111083984375">Property</th><th width="114.021728515625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>apiTestType</code></td><td>String</td><td>Type of API test: "email" or "phone"</td></tr><tr><td><code>apiTestValue</code></td><td>String</td><td>Test value for API verification</td></tr><tr><td><code>apiUrl</code></td><td>String</td><td>Security API endpoint URL</td></tr><tr><td><code>source</code></td><td>String</td><td>Security source: "API", "CSV", or "NONE"</td></tr><tr><td><code>strategy</code></td><td>String</td><td>Security strategy: "<strong>whitelist</strong>", or "<strong>none</strong>"</td></tr></tbody></table>

**More information on `security` can be found here:**

{% content-ref url="security-settings" %}
[security-settings](https://docs.verifik.co/resources/project-flows/create-a-project-flow/security-settings)
{% endcontent-ref %}

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location --request POST 'https://api.verifik.co/v2/project-flows' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsIn...ldKk8Tt5Kh_o' \
    --data-raw '{
        "identityUrl": "https://identity.verifik.co/verify",
        "project": "507f1f77bcf86cd799439012",
        "redirectUrl": "https://app.verifik.co/onboarding/success",
        "status": "active",
        "systemForm": "507f1f77bcf86cd799439022",
        "type": "login",
        "webhook": "507f1f77bcf86cd799439013",
        "webhookUrl": "https://api.client.com/webhooks/verifik",
        "loginSettings": {
            "email": true,
            "emailGateway": "mailgun",
            "faceLiveness": true,
            "livenessMinScore": 0.75,
            "phone": true,
            "phoneGateway": "both",
            "searchMinScore": 0.85,
            "searchMode": "ACCURATE",
            "showFaceLivenessRecommendation": true,
            "steps": ["email", "phone", "liveness"]
        },
        "security": {
            "apiTestType": "email",
            "apiTestValue": "test@client.com",
            "apiUrl": "https://security.client.com/api/verify",
            "source": "API",
            "strategy": "whitelist"
        }
    }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/project-flows',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsIn...a1ldKk8Tt5Kh_o',
    'Content-Type': 'application/json', 
  },
  data: {
      "collectionCode": "ONBOARD_2024",
      "identityUrl": "https://identity.verifik.co/verify",
      "project": "507f1f77bcf86cd799439012",
      "redirectUrl": "https://app.verifik.co/onboarding/success",
      "status": "active",
      "systemForm": "507f1f77bcf86cd799439022",
      "type": "login",
      "webhook": "507f1f77bcf86cd799439013",
      "webhookUrl": "https://api.client.com/webhooks/verifik",
      "loginSettings": {
          "email": true,
          "emailGateway": "mailgun",
          "faceLiveness": true,
          "livenessMinScore": 0.75,
          "phone": true,
          "phoneGateway": "both",
          "searchMinScore": 0.85,
          "searchMode": "ACCURATE",
          "showFaceLivenessRecommendation": true,
          "steps": ["email", "phone", "liveness"]
      },
      "security": {
          "apiTestType": "email",
          "apiTestValue": "test@client.com",
          "apiUrl": "https://security.client.com/api/verify",
          "source": "API",
          "strategy": "whitelist"
      }
  }
};

axios.request(config)
    .then((response) => response.data)
    .catch((error) => error);
```

{% endtab %}

{% tab title="Rust" %}

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Content-Type", "application/json".parse()?);
    headers.insert("Authorization", "Bearer eyJhbGciOiJ...GdD1Ww4AFqFqa1ldKk8Tt5Kh_o".parse()?);

    let data = r#"{
        "collectionCode": "ONBOARD_2024",
        "identityUrl": "https://identity.verifik.co/verify",
        "project": "507f1f77bcf86cd799439012",
        "redirectUrl": "https://app.verifik.co/onboarding/success",
        "status": "active",
        "systemForm": "507f1f77bcf86cd799439022",
        "type": "login",
        "webhook": "507f1f77bcf86cd799439013",
        "webhookUrl": "https://api.client.com/webhooks/verifik",
        "loginSettings": {
            "email": true,
            "emailGateway": "mailgun",
            "faceLiveness": true,
            "livenessMinScore": 0.75,
            "phone": true,
            "phoneGateway": "both",
            "searchMinScore": 0.85,
            "searchMode": "ACCURATE",
            "showFaceLivenessRecommendation": true,
            "steps": ["email", "phone", "liveness"]
        },
        "security": {
            "apiTestType": "email",
            "apiTestValue": "test@client.com",
            "apiUrl": "https://security.client.com/api/verify",
            "source": "API",
            "strategy": "whitelist"
        }
    }"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client
        .request(reqwest::Method::POST, "https://api.verifik.co/v2/project-flows")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}

```

{% endtab %}

{% tab title="Python" %}

```python
import requests
import json

url = "https://api.verifik.co/v2/project-flows"

payload = json.dumps(
    {
        "collectionCode": "ONBOARD_2024",
        "identityUrl": "https://identity.verifik.co/verify",
        "project": "507f1f77bcf86cd799439012",
        "redirectUrl": "https://app.verifik.co/onboarding/success",
        "status": "active",
        "systemForm": "507f1f77bcf86cd799439022",
        "type": "login",
        "webhook": "507f1f77bcf86cd799439013",
        "webhookUrl": "https://api.client.com/webhooks/verifik",
        "loginSettings": {
            "email": true,
            "emailGateway": "mailgun",
            "faceLiveness": true,
            "livenessMinScore": 0.75,
            "phone": true,
            "phoneGateway": "both",
            "searchMinScore": 0.85,
            "searchMode": "ACCURATE",
            "showFaceLivenessRecommendation": true,
            "steps": ["email", "phone", "liveness"],
        },
        "security": {
            "apiTestType": "email",
            "apiTestValue": "test@client.com",
            "apiUrl": "https://security.client.com/api/verify",
            "source": "API",
            "strategy": "whitelist",
        },
    }
)

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1N...Kk8Tt5Kh_o",
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "__v": 0,
    "_id": "67996c2606c23de3bc785a23",
    "allowedCountries": [],
    "client": "67054dc629a00e8b1ce73c51",
    "createdAt": "2025-01-28T23:45:42.007Z",
    "linkSettings": null,
    "onboardingSettings": null,
    "project": "67054e609e2c794b78e02af8",
    "redirectUrl": "https://verifik.co",
    "status": "active",
    "type": "login",
    "updatedAt": "2025-06-26T21:40:25.053Z",
    "version": 1,
    "webhook": "68a63328cba3c7dac2896950",
    "loginSettings": {
        "email": true,
        "emailGateway": "mailgun",
        "faceLiveness": true,
        "livenessMinScore": 0.65,
        "phone": true,
        "phoneGateway": "both",
        "searchMinScore": 0.85,
        "searchMode": "FAST",
        "showFaceLivenessRecommendation": true,
        "steps": []
    },
    "security": {
        "_id": "67996c6d06c23de3bc785a30",
        "apiTestType": "email",
        "source": "CSV",
        "strategy": "whitelist",
    }
}
```

{% endtab %}

{% tab title="400" %}

```json
{
  "error": "Invalid request"
}

```

{% endtab %}
{% endtabs %}

{% content-ref url="" %}
[](https://docs.verifik.co/resources/project-flows/create-a-project-flow)
{% endcontent-ref %}
