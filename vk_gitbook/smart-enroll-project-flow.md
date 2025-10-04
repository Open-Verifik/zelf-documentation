# Smart Enroll Project Flow

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/project-flows`

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="218.4896240234375">Property</th><th width="126.947021484375">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>project</code></td><td>ObjectId</td><td>(Required) Reference to the associated Project</td></tr><tr><td><code>type</code></td><td>String</td><td>(Required) Flow type must be "onboarding"</td></tr><tr><td><code>redirectUrl</code></td><td>String</td><td>URL to redirect users after completion</td></tr><tr><td><code>status</code></td><td>String</td><td>Current status: "draft", "active", or "paused"</td></tr><tr><td><code>systemForm</code></td><td>ObjectId</td><td>Reference to the Form model for system forms</td></tr><tr><td><code>version</code></td><td>Number</td><td>Version number of the project flow</td></tr><tr><td><code>webhook</code></td><td>ObjectId</td><td>Reference to the Webhook model</td></tr><tr><td><a href="#onboardingsettings-sub-document"><code>onboardingSettings</code></a></td><td>Object</td><td>General settings for fields for storing options for your onboarding</td></tr><tr><td><a href="#signupform-sub-document"><code>signUpForm</code></a></td><td>Object</td><td>General settings for your sign-up form configurations</td></tr><tr><td><a href="#basicinformation-sub-document"><code>basicInformation</code></a></td><td>Object</td><td>Options for what fields you wish to capture</td></tr><tr><td><a href="#document-sub-document"><code>document</code></a></td><td>Object</td><td>Document validation settings</td></tr><tr><td><a href="#liveness-sub-document"><code>liveness</code></a></td><td>Object</td><td>Biometric validation settings</td></tr><tr><td><a href="#security-sub-document"><code>security</code></a></td><td>Object</td><td>Security settings</td></tr></tbody></table>

#### `onboardingSettings` Sub-document

<table><thead><tr><th width="224.5599365234375">Property</th><th width="126.7073974609375">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>hiddenLoginOption</code></td><td>Boolean</td><td>Whether to hide the login option</td></tr><tr><td><code>requiresSignature</code></td><td>Boolean</td><td>Whether signature is required</td></tr><tr><td><code>steps.basicInformation</code></td><td>String</td><td>Step requirement: "mandatory", "optional", or "skip"</td></tr><tr><td><code>steps.document</code></td><td>String</td><td>Step requirement: "mandatory", "optional", or "skip"</td></tr><tr><td><code>steps.form</code></td><td>String</td><td>Step requirement: "mandatory", "optional", or "skip"</td></tr><tr><td><code>steps.liveness</code></td><td>String</td><td>Step requirement: "mandatory", "optional", or "skip"</td></tr><tr><td><code>steps.signUpForm</code></td><td>String</td><td>Step requirement: "mandatory", "optional", or "skip"</td></tr></tbody></table>

#### `signUpForm` Sub-document

<table><thead><tr><th width="213.4879150390625">Property</th><th width="121.21875">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>email</code></td><td>Boolean</td><td>Whether email field is enabled</td></tr><tr><td><code>emailGateway</code></td><td>String</td><td>Email gateway: "mailgun" or "none"</td></tr><tr><td><code>extraFields</code></td><td>Array</td><td>Additional custom fields</td></tr><tr><td><code>firstName</code></td><td>Boolean</td><td>Whether first name field is enabled</td></tr><tr><td><code>fullName</code></td><td>Boolean</td><td>Whether full name field is enabled</td></tr><tr><td><code>lastName</code></td><td>Boolean</td><td>Whether last name field is enabled</td></tr><tr><td><code>phone</code></td><td>Boolean</td><td>Whether phone field is enabled</td></tr><tr><td><code>phoneGateway</code></td><td>String</td><td>Phone gateway: "sms", "whatsapp", "both", or "none"</td></tr><tr><td><code>showPrivacyNotice</code></td><td>Boolean</td><td>Whether to show privacy notice</td></tr><tr><td><code>showTermsAndConditions</code></td><td>Boolean</td><td>Whether to show terms and conditions</td></tr></tbody></table>

#### `basicInformation` Sub-document

<table><thead><tr><th width="185.115478515625">Property</th><th width="112.1632080078125">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>address</code></td><td>Boolean</td><td>Whether address field is enabled</td></tr><tr><td><code>age</code></td><td>Boolean</td><td>Whether age field is enabled</td></tr><tr><td><code>dateOfBirth</code></td><td>Boolean</td><td>Whether date of birth field is enabled</td></tr><tr><td><code>gender</code></td><td>Boolean</td><td>Whether gender field is enabled</td></tr><tr><td><code>postalCode</code></td><td>Boolean</td><td>Whether postal code field is enabled</td></tr></tbody></table>

#### `document` Sub-document

<table><thead><tr><th width="247.6136474609375">Property</th><th width="100.0504150390625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>compareMinScore</code></td><td>Number</td><td>Minimum comparison score (0.5-1.0)</td></tr><tr><td><code>fallbackValidationMethod</code></td><td>String</td><td>Fallback validation method: "SCAN_ZERO", "SCAN_PROMPT", or "SCAN_STUDIO"</td></tr><tr><td><code>maxAttempts</code></td><td>Number</td><td>Maximum attempts allowed (3-10)</td></tr><tr><td><code>scanDocumentAllowed</code></td><td>Boolean</td><td>Whether document scanning is allowed</td></tr><tr><td><code>uploadDocumentAllowed</code></td><td>Boolean</td><td>Whether document upload is allowed</td></tr><tr><td><code>useGovernmentID</code></td><td>Boolean</td><td>Whether government ID is enabled</td></tr><tr><td><code>useLicense</code></td><td>Boolean</td><td>Whether license is enabled</td></tr><tr><td><code>usePassport</code></td><td>Boolean</td><td>Whether passport is enabled</td></tr><tr><td><code>validationMethod</code></td><td>String</td><td>Primary validation method: "SCAN_ZERO", "SCAN_PROMPT", or "SCAN_STUDIO"</td></tr><tr><td><code>verifyCriminalHistory</code></td><td>Boolean</td><td>Whether to verify criminal history</td></tr><tr><td><code>verifyNames</code></td><td>Boolean</td><td>Whether to verify names</td></tr></tbody></table>

#### `liveness` Sub-document

<table><thead><tr><th width="179.3515625">Property</th><th width="135.1414794921875">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>livenessMinScore</code></td><td>Number</td><td>Minimum liveness score (0.5-1.0)</td></tr><tr><td><code>maxAttempts</code></td><td>Number</td><td>Maximum attempts allowed (3-10)</td></tr><tr><td><code>searchMinScore</code></td><td>Number</td><td>Minimum search score (0.3-1.0)</td></tr><tr><td><code>searchMode</code></td><td>String</td><td>Search mode: "FAST" or "ACCURATE"</td></tr></tbody></table>

#### `security` Sub-document

<table><thead><tr><th width="167.6875">Property</th><th width="111.5390625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>apiTestType</code></td><td>String</td><td>Type of API test: "email" or "phone"</td></tr><tr><td><code>source</code></td><td>String</td><td>Security source: "API", "CSV", or "NONE"</td></tr><tr><td><code>strategy</code></td><td>String</td><td>Security strategy: "<strong>blacklist</strong>", or "<strong>none</strong>"</td></tr></tbody></table>

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
        "project": "507f1f77bcf86cd799439013",
        "redirectUrl": "https://google.com",
        "status": "active",
        "systemForm": "507f1f77bcf86cd799439014",
        "type": "onboarding",
        "webhook": "507f1f77bcf86cd799439015",
        "onboardingSettings": {
            "hiddenLoginOption": false,
            "requiresSignature": false,
            "steps": {
                "basicInformation": "optional",
                "document": "optional",
                "form": "optional",
                "liveness": "optional",
                "signUpForm": "mandatory"
            },
            "signUpForm": {
                "email": true,
                "emailGateway": "mailgun",
                "extraFields": [],
                "firstName": true,
                "fullName": true,
                "lastName": true,
                "phone": true,
                "phoneGateway": "whatsapp",
                "showPrivacyNotice": false,
                "showTermsAndConditions": false
            },
            "basicInformation": {
                "address": false,
                "age": false,
                "dateOfBirth": false,
                "gender": false,
                "postalCode": false
            },
            "document": {
                "compareMinScore": 0.67,
                "fallbackValidationMethod": "SCAN_PROMPT",
                "maxAttempts": 10,
                "scanDocumentAllowed": true,
                "uploadDocumentAllowed": true,
                "useGovernmentID": true,
                "useLicense": true,
                "usePassport": true,
                "validationMethod": "SCAN_PROMPT",
                "verifyCriminalHistory": false,
                "verifyNames": false
            },
            "liveness": {
                "livenessMinScore": 0.65,
                "maxAttempts": 10,
                "searchMinScore": 0.85,
                "searchMode": "FAST"
            }
        },
        "security": {
            "apiTestType": "email",
            "source": "NONE",
            "strategy": "blacklist"
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
      "project": "507f1f77bcf86cd799439013",
      "redirectUrl": "https://google.com",
      "status": "active",
      "systemForm": "507f1f77bcf86cd799439014",
      "type": "onboarding",
      "webhook": "507f1f77bcf86cd799439015",
      "onboardingSettings": {
          "hiddenLoginOption": false,
          "requiresSignature": false,
          "steps": {
              "basicInformation": "optional",
              "document": "optional",
              "form": "optional",
              "liveness": "optional",
              "signUpForm": "mandatory"
          },
          "signUpForm": {
              "email": true,
              "emailGateway": "mailgun",
              "extraFields": [],
              "firstName": true,
              "fullName": true,
              "lastName": true,
              "phone": true,
              "phoneGateway": "whatsapp",
              "showPrivacyNotice": false,
              "showTermsAndConditions": false
          },
          "basicInformation": {
              "address": false,
              "age": false,
              "dateOfBirth": false,
              "gender": false,
              "postalCode": false
          },
          "document": {
              "compareMinScore": 0.67,
              "fallbackValidationMethod": "SCAN_PROMPT",
              "maxAttempts": 10,
              "scanDocumentAllowed": true,
              "uploadDocumentAllowed": true,
              "useGovernmentID": true,
              "useLicense": true,
              "usePassport": true,
              "validationMethod": "SCAN_PROMPT",
              "verifyCriminalHistory": false,
              "verifyNames": false
          },
          "liveness": {
              "livenessMinScore": 0.65,
              "maxAttempts": 10,
              "searchMinScore": 0.85,
              "searchMode": "FAST"
          }
      },
      "security": {
          "apiTestType": "email",
          "source": "NONE",
          "strategy": "blacklist"
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
        "project": "507f1f77bcf86cd799439013",
        "redirectUrl": "https://google.com",
        "status": "active",
        "systemForm": "507f1f77bcf86cd799439014",
        "type": "onboarding",
        "webhook": "507f1f77bcf86cd799439015",
        "onboardingSettings": {
            "hiddenLoginOption": false,
            "requiresSignature": false,
            "steps": {
                "basicInformation": "optional",
                "document": "optional",
                "form": "optional",
                "liveness": "optional",
                "signUpForm": "mandatory"
            },
            "signUpForm": {
                "email": true,
                "emailGateway": "mailgun",
                "extraFields": [],
                "firstName": true,
                "fullName": true,
                "lastName": true,
                "phone": true,
                "phoneGateway": "whatsapp",
                "showPrivacyNotice": false,
                "showTermsAndConditions": false
            },
            "basicInformation": {
                "address": false,
                "age": false,
                "dateOfBirth": false,
                "gender": false,
                "postalCode": false
            },
            "document": {
                "compareMinScore": 0.67,
                "fallbackValidationMethod": "SCAN_PROMPT",
                "maxAttempts": 10,
                "scanDocumentAllowed": true,
                "uploadDocumentAllowed": true,
                "useGovernmentID": true,
                "useLicense": true,
                "usePassport": true,
                "validationMethod": "SCAN_PROMPT",
                "verifyCriminalHistory": false,
                "verifyNames": false
            },
            "liveness": {
                "livenessMinScore": 0.65,
                "maxAttempts": 10,
                "searchMinScore": 0.85,
                "searchMode": "FAST"
            }
        },
        "security": {
            "apiTestType": "email",
            "source": "NONE",
            "strategy": "blacklist"
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
        "project": "507f1f77bcf86cd799439013",
        "redirectUrl": "https://google.com",
        "status": "active",
        "systemForm": "507f1f77bcf86cd799439014",
        "type": "onboarding",
        "webhook": "507f1f77bcf86cd799439015",
        "onboardingSettings": {
            "hiddenLoginOption": false,
            "requiresSignature": false,
            "steps": {
                "basicInformation": "optional",
                "document": "optional",
                "form": "optional",
                "liveness": "optional",
                "signUpForm": "mandatory"
            },
            "signUpForm": {
                "email": true,
                "emailGateway": "mailgun",
                "extraFields": [],
                "firstName": true,
                "fullName": true,
                "lastName": true,
                "phone": true,
                "phoneGateway": "whatsapp",
                "showPrivacyNotice": false,
                "showTermsAndConditions": false
            },
            "basicInformation": {
                "address": false,
                "age": false,
                "dateOfBirth": false,
                "gender": false,
                "postalCode": false
            },
            "document": {
                "compareMinScore": 0.67,
                "fallbackValidationMethod": "SCAN_PROMPT",
                "maxAttempts": 10,
                "scanDocumentAllowed": true,
                "uploadDocumentAllowed": true,
                "useGovernmentID": true,
                "useLicense": true,
                "usePassport": true,
                "validationMethod": "SCAN_PROMPT",
                "verifyCriminalHistory": false,
                "verifyNames": false
            },
            "liveness": {
                "livenessMinScore": 0.65,
                "maxAttempts": 10,
                "searchMinScore": 0.85,
                "searchMode": "FAST"
            }
        },
        "security": {
            "apiTestType": "email",
            "source": "NONE",
            "strategy": "blacklist"
        }
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

<pre class="language-json"><code class="lang-json"><strong>{
</strong>    "__v": 0,
    "_id": "507f1f77bcf86cd799439011",
    "allowedCountries": [],
    "client": "507f1f77bcf86cd799439012",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "linkSettings": null,
    "loginSettings": null,
    "project": "507f1f77bcf86cd799439013",
    "redirectUrl": "",
    "status": "active",
    "systemForm": "507f1f77bcf86cd799439014",
    "type": "onboarding",
    "updatedAt": "2025-01-01T00:00:00.000Z",
    "version": 1,
    "webhook": "507f1f77bcf86cd799439015",
    "onboardingSettings": {
        "hiddenLoginOption": false,
        "requiresSignature": false,
        "steps": {
            "basicInformation": "optional",
            "document": "optional",
            "form": "optional",
            "liveness": "optional",
            "signUpForm": "mandatory"
        },
        "signUpForm": {
            "email": true,
            "emailGateway": "mailgun",
            "extraFields": [],
            "firstName": true,
            "fullName": true,
            "lastName": true,
            "phone": true,
            "phoneGateway": "whatsapp",
            "showPrivacyNotice": false,
            "showTermsAndConditions": false
        },
        "basicInformation": {
            "address": false,
            "age": false,
            "dateOfBirth": false,
            "gender": false,
            "postalCode": false
        },
        "document": {
            "compareMinScore": 0.67,
            "fallbackValidationMethod": "SCAN_PROMPT",
            "idPrompt": "507f1f77bcf86cd799439016",
            "licensePrompt": "507f1f77bcf86cd799439017",
            "maxAttempts": 10,
            "passportPrompt": "507f1f77bcf86cd799439018",
            "scanDocumentAllowed": true,
            "uploadDocumentAllowed": true,
            "useGovernmentID": true,
            "useLicense": true,
            "usePassport": true,
            "validationMethod": "SCAN_PROMPT",
            "verifyCriminalHistory": false,
            "verifyNames": false
        },
        "liveness": {
            "livenessMinScore": 0.65,
            "maxAttempts": 10,
            "searchMinScore": 0.85,
            "searchMode": "FAST"
        }
    },
    "security": {
        "_id": "507f1f77bcf86cd799439019",
        "apiTestType": "email",
        "source": "NONE",
        "strategy": "blacklist"
    }
}
</code></pre>

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
