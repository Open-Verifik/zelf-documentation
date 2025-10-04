# Retrieve a Project Flow

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/project-flows/{id}`

With this service, you can bring all Project Flow that you have created or if you only want one, you can specify the ID of the project and the endpoint will return only the selected project.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="85">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the Project Flow that you want to bring the information.</td></tr></tbody></table>

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "__v": 0,
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
