# Create a Name Validation

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/document-validations/{id}/validate`

This endpoint performs name validation by comparing the names extracted from a user's document with official government records. It validates that the user's provided names match their official identity records through government API integrations.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
**Prerequisites**: Users must complete both the `signUpForm` step and the `document` step before name validation can be performed.
{% endhint %}

{% hint style="warning" %}
**Additional Feature**: Name Validations are an additional feature and are subject to charges. Each validation request will incur a fee based on your plan.
{% endhint %}

### **Path Parameters**

| Name | Type   | Required | Description                                                          |
| ---- | ------ | -------- | -------------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the document validation record to validate. |

### **Query Parameters**

| Parameter | Type    | Description                                    | Example      |
| --------- | ------- | ---------------------------------------------- | ------------ |
| `force`   | boolean | Force re-validation even if already validated. | `force=true` |

### **Body**

This endpoint does not require a request body. All necessary information is automatically retrieved from the document validation record.

### **Supported Regions and Document Types**

Name validation is currently supported for the following regions and document types:

| Region       | Document Type | Description                  |
| ------------ | ------------- | ---------------------------- |
| **Panama**   | `CCPA`        | Panama National ID Card      |
| **Colombia** | `CC`          | Colombian National ID Card   |
| **Colombia** | `DRCC`        | Colombian Diplomatic ID Card |
| **Chile**    | `CL`          | Chilean National ID Card     |

{% hint style="info" %}
**Note**: Support for additional regions and document types may be available. Contact your account manager for the most up-to-date list of supported countries and document types.
{% endhint %}

### **Request Examples**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X PUT "https://api.verifik.co/v2/document-validations/674de8df21c72be3cc42b8a8/validate" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Force Re-validation" %}

```bash
curl -X PUT "https://api.verifik.co/v2/document-validations/674de8df21c72be3cc42b8a8/validate?force=true" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

axios.put('https://api.verifik.co/v2/document-validations/674de8df21c72be3cc42b8a8/validate', {}, {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error.response ? error.response.data : error.message);
});
```

{% endtab %}
{% endtabs %}

### **Response**

The response will contain detailed information about the name validation results, including match percentages and validation status.

{% tabs %}
{% tab title="200 - Success" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a8",
    "documentType": "CC",
    "documentNumber": "12345678",
    "country": "CO",
    "namesMatch": true,
    "fullNameMatchPercentage": 95,
    "firstNameMatchPercentage": 92,
    "lastNameMatchPercentage": 98,
    "imageValidated": true,
    "infoValidationSupported": true,
    "scoreValidation": {
      "fullName": "Juan Carlos Rodriguez",
      "firstName": "Juan Carlos",
      "lastName": "Rodriguez",
      "validatedAt": "2024-12-02T17:15:36.788Z"
    },
    "status": "ACTIVE",
    "createdAt": "2024-12-02T17:05:36.788Z",
    "updatedAt": "2024-12-02T17:15:36.788Z"
  }
}
```

{% endtab %}

{% tab title="200 - Not Supported" %}

```json
{
  "data": {
    "isSupported": false,
    "notSupportedData": {
      "documentType": "PASSPORT",
      "validated": false,
      "infoValidationSupported: false,
      "infoValidationSupportedReason": "document_not_supported"
    },
    "infoValidationSupportedReason": "document_not_supported"
  }
}
```

{% endtab %}

{% tab title="400" %}

```json
{
  "code": "missing_ocr_extraction_data",
  "message": "400:missing_ocr_extraction_data"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "document_validation_not_found",
  "message": "404:document_validation_not_found"
}
```

{% endtab %}
{% endtabs %}

### **Response Fields**

#### **Successful Validation**

| Field                      | Type    | Description                                                  |
| -------------------------- | ------- | ------------------------------------------------------------ |
| `_id`                      | string  | Unique identifier of the document validation record.         |
| `documentType`             | string  | Type of document being validated.                            |
| `documentNumber`           | string  | Document number from the validation.                         |
| `country`                  | string  | Country code for the document.                               |
| `namesMatch`               | boolean | Whether the names match the official records.                |
| `fullNameMatchPercentage`  | number  | Percentage match for the full name (0-100).                  |
| `firstNameMatchPercentage` | number  | Percentage match for the first name (0-100).                 |
| `lastNameMatchPercentage`  | number  | Percentage match for the last name (0-100).                  |
| `imageValidated`           | boolean | Whether the image validation has been completed.             |
| `infoValidationSupported`  | boolean | Whether name validation is supported for this document type. |
| `scoreValidation`          | object  | Detailed validation results from the government API.         |
| `status`                   | string  | Current status of the document validation.                   |

#### **Not Supported Response**

| Field                           | Type    | Description                                    |
| ------------------------------- | ------- | ---------------------------------------------- |
| `isSupported`                   | boolean | Always false for unsupported document types.   |
| `notSupportedData`              | object  | Details about why validation is not supported. |
| `infoValidationSupportedReason` | string  | Reason why validation is not supported.        |

### **How Name Validation Works**

1. **Document Analysis**: Extracts names from the uploaded document using OCR technology
2. **Government API Integration**: Queries official government databases for identity verification
3. **Name Comparison**: Compares extracted names with official records using string similarity algorithms
4. **Score Calculation**: Calculates match percentages for full name, first name, and last name
5. **Validation Result**: Determines if names match based on configurable thresholds (default: 90% for full name)

### **Prerequisites and Requirements**

#### **App Registration Steps**

* **signUpForm**: Must be completed to provide user information
* **document**: Must be completed to upload and process identity documents

#### **Document Requirements**

* Document must have valid OCR extraction data
* Document type must be supported for name validation
* Document must be in an active validation status

#### **Feature Availability**

* Client must have the name validation feature enabled
* Feature must be available for the specific document type
* Account must have sufficient credits for validation

### **Validation Thresholds**

* **Full Name Match**: 90% threshold for successful validation
* **Individual Names**: Separate scoring for first and last names
* **Overall Result**: Names are considered matching if full name score exceeds 90%

### **Common Use Cases**

* **Identity Verification**: Confirm user identity against official government records
* **Fraud Prevention**: Detect identity theft or document forgery
* **Compliance Requirements**: Meet KYC and regulatory verification standards
* **User Onboarding**: Enhance security during account creation
* **Document Authentication**: Verify the authenticity of identity documents

### **Error Scenarios**

* **Unsupported Document Type**: Document type not supported for name validation
* **Feature Not Available**: Name validation feature not enabled for the client
* **Missing OCR Data**: Document OCR extraction data is incomplete
* **API Unavailable**: Government API service temporarily unavailable
* **Insufficient Credits**: Account does not have sufficient validation credits

### **Cost and Billing**

* **Per-Validation Charge**: Each name validation request incurs a fee
* **Credit System**: Uses your account's validation credits
* **Billing Cycle**: Charges are applied immediately upon validation
* **Plan Limits**: Subject to your current plan's validation limits

### **Integration Notes**

* **Webhook Events**: Triggers `document_validation_source_lookup` webhook events
* **Real-time Updates**: Provides immediate validation results
* **Data Persistence**: All validation results are stored for audit purposes
* **Re-validation**: Can be forced to re-validate previously processed documents

This endpoint provides comprehensive name validation capabilities for supported regions, ensuring the highest level of identity verification through government API integrations.
