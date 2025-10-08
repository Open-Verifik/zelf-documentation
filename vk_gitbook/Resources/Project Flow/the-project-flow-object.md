# The Project Flow Object

### **Attributes**

***

**`project` - ObjectId - Required**

The project is the `_id` generated when creating a project correctly.

***

**`type` - String - Required**

The type determines what type of service you want to generate in this project flow. Can be "login", or "onboarding".

***

**`status` - String - Required**

The current status of the project flow. Can be "draft", "active", or "paused". Only "active" projects can be used.

***

**`version` - Number - Optional**

Version number of the project flow. Defaults to 1.

***

**`redirectUrl` - String - Optional**

URL where users will be redirected after finishing the validation process.

***

**`webhookUrl` - String - Optional**

External webhook URL for notifications.

***

**`webhook` - ObjectId - Optional**

Reference to the Webhook model.

***

**`identityUrl` - String - Optional**

URL for identity verification endpoint.

***

**`allowedCountries` - Array - Optional**

Array of countries allowed to access the project flow.

***

**`collectionCode` - String - Read-Only**

Collection identifier for the project flow.

***

**`systemForm` - ObjectId - Optional**

Reference to the Form model for system forms.

***

**`loginSettings` - Object - Optional**

Login Settings refers to all the validations that will be performed in this flow. The parameters are:

* `email` - Boolean
* `emailGateway` - String ("mailgun" or "none")
* `phone` - Boolean
* `phoneGateway` - String ("sms", "whatsapp", "both", or "none")
* `faceLiveness` - Boolean
* `showFaceLivenessRecommendation` - Boolean
* `livenessMinScore` - Number (0.51-0.9)
* `searchMode` - String ("FAST" or "ACCURATE")
* `searchMinScore` - Number (0.7-0.95)
* `steps` - Array of strings

***

**`onboardingSettings` - Object - Optional**

Onboarding Settings refers to the configuration for user onboarding flows. The parameters are:

* `steps` - Object defining step requirements ("mandatory", "optional", "skip")
* `signUpForm` - Object with form field configurations
* `basicInformation` - Object with basic info field configurations
* `document` - Object with document validation configurations
* `liveness` - Object with liveness detection configurations
* `requiresSignature` - Boolean
* `hiddenLoginOption` - Boolean

***

**`security` - Object - Optional**

Object to add all the security associated to the projectFlow. It has the following params:

* `strategy` - String ("whitelist", "blacklist", or "none")
* `source` - String ("API", "CSV", or "NONE")
* `apiUrl` - String
* `apiTestType` - String ("email" or "phone")
* `apiTestValue` - String

***

### The Project Flow Object

```json
{
    "client": "507f1f77bcf86cd799439011",
    "project": "507f1f77bcf86cd799439012",
    "type": "onboarding",
    "status": "active",
    "version": 1,
    "redirectUrl": "https://example.com",
    "webhookUrl": "https://api.client.com/webhooks/verifik",
    "webhook": "507f1f77bcf86cd799439013",
    "identityUrl": "https://identity.verifik.co/verify",
    "allowedCountries": [
        "Colombia"
    ],
    "collectionCode": "ONBOARD_2024",
    "systemForm": "507f1f77bcf86cd799439014",
    "loginSettings": {
        "email": true,
        "emailGateway": "mailgun",
        "phone": true,
        "phoneGateway": "whatsapp",
        "faceLiveness": true,
        "showFaceLivenessRecommendation": true,
        "livenessMinScore": 0.75,
        "searchMode": "FAST",
        "searchMinScore": 0.85,
        "steps": ["email", "phone", "liveness"]
    },
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
        "strategy": "blacklist",
        "source": "NONE",
        "apiTestType": "email"
    }
}
```
