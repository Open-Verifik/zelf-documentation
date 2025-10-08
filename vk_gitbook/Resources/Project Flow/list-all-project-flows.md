# List all Project Flows

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/project-flows`

With this service, you can bring all Project Flows that you have created.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": [
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
                "strategy": "whitelist"
            }
        },
        {
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
    ]
}
```

{% endtab %}
{% endtabs %}
