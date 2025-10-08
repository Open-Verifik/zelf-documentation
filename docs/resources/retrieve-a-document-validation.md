---
id: retrieve-a-document-validation
title: Retrieve a Document Validation
description: Retrieve a specific document validation record using its unique identifier
---

# Retrieve a Document Validation

**GET** `https://api.verifik.co/v2/document-validations/{id}`

With this service, you can bring all Document Validations that you have created or if you only want one, you can specify the ID of the document validation and the endpoint will return only the selected validation.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Name          | Type   | Description                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `id`          | string | ID of the Document Validation that you want to bring the information.                         |
| `populates[]` | string | Options: `appRegistration`, `projectFlow`                                                     |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/document-validations/document_validation_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["appRegistration", "projectFlow"]
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

## Response Example

```json
{
  "data": {
    "_id": "document_validation_123456789",
    "age": "25",
    "appRegistration": {
      "_id": "reg_123456789",
      "email": "user@example.com",
      "status": "completed"
    },
    "backUrl": "https://example.com/back",
    "client": "client_123456789",
    "country": "US",
    "createdAt": "2024-01-15T10:30:00Z",
    "documentData": {
      "firstName": "John",
      "lastName": "Doe",
      "documentNumber": "123456789",
      "birthDate": "1999-01-15"
    },
    "documentType": "id",
    "frontUrl": "https://example.com/front",
    "images": {
      "frontImage": "base64_encoded_image",
      "backImage": "base64_encoded_image"
    },
    "ocrResults": {
      "confidence": 0.95,
      "rawText": "US DRIVER LICENSE..."
    },
    "project": "project_123456789",
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "completed",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validationResults": {
      "documentAuthenticity": "passed",
      "dataConsistency": "passed"
    }
  }
}
```

## Error Responses

```json
{
  "error": "Document validation not found",
  "message": "DOCUMENT_VALIDATION_NOT_FOUND"
}
```
