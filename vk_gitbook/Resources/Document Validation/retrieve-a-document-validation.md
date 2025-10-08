# Retrieve a Document Validation

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/document-validations/{id}`

With this service, you can bring all Document Validations that you have created or if you only want one, you can specify the ID of the document validation and the endpoint will return only the selected validation.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="170.9444580078125">Name</th><th width="108.9088134765625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the Document Validation that you want to bring the information.</td></tr><tr><td><code>populates[]</code></td><td>string</td><td>Options:<br><code>appRegistration</code>, <code>projectFlow</code></td></tr></tbody></table>

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "507f1f77bcf86cd799439011",
        "age": "25",
        "appRegistration": "507f1f77bcf86cd799439012",
        "backUrl": "https://example.com/back",
        "client": "507f1f77bcf86cd799439013",
        "country": "United States",
        "customDocumentType": "Enhanced Driver License",
        "documentCategory": "Government ID",
        "documentNumber": "DL123456789",
        "documentType": "driver_license",
        "firstNameMatchPercentage": 95.5,
        "fullNameMatchPercentage": 92.0,
        "gender": "Female",
        "imageValidated": true,
        "infoValidationSupported": true,
        "infoValidationSupportedReason": "Document type supported",
        "inputMethod": "CAMERA",
        "lastNameMatchPercentage": 88.5,
        "namesMatch": true,
        "nationality": "US",
        "OCRExtraction": {
            "extractedText": "Sample extracted text",
            "confidence": 0.95
        },
        "project": "507f1f77bcf86cd799439014",
        "projectFlow": "507f1f77bcf86cd799439015",
        "redirectUrl": "https://example.com/success",
        "requiresBackSide": true,
        "scoreValidated": true,
        "scoreValidation": {
            "overallScore": 0.92,
            "threshold": 0.85
        },
        "status": "ACTIVE",
        "template": "507f1f77bcf86cd799439016",
        "type": "validation",
        "url": "https://example.com/document/image",
        "validationMethod": "OCR",
        "createdAt": "2025-01-01T00:00:00.000Z",
        "updatedAt": "2025-01-01T00:00:00.000Z"
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "NotFound",
  "message": "DocumentValidation_not_found"
}
```

{% endtab %}
{% endtabs %}

| Status Code | Description                  |
| ----------- | ---------------------------- |
| 404         | DocumentValidation not found |
