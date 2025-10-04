---
id: retrieve-a-document-liveness
title: Retrieve a Document Liveness
description: Retrieve a specific document liveness validation record using its unique identifier
---

# Retrieve a Document Liveness

**GET** `https://api.verifik.co/v2/document-liveness/{id}`

With this service, you can bring all document liveness validations that you have processed or if you only want one, you can specify the ID of the document liveness record and the endpoint will return only the selected validation result.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | ID of the Document Liveness record that you want to bring the information. |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/document-liveness/document_liveness_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
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
  "success": true,
  "data": {
    "_id": "document_liveness_123456789",
    "client": "client_123456789",
    "appRegistration": "app_registration_123456789",
    "imageSaved": true,
    "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
    "status": "completed",
    "validationResults": {
      "screenReplay": {
        "passed": true,
        "score": 0.95,
        "details": "No screen replay detected"
      },
      "printedCopy": {
        "passed": true,
        "score": 0.90,
        "details": "No printed copy detected"
      },
      "portraitSubstitution": {
        "passed": true,
        "score": 0.88,
        "details": "No portrait substitution detected"
      },
      "digitalManipulation": {
        "passed": true,
        "score": 0.92,
        "details": "No digital manipulation detected"
      }
    },
    "calibrationSettings": {
      "screenReplayCalibration": "REGULAR",
      "printedCopyCalibration": "REGULAR",
      "portraitSubstitutionCalibration": "REGULAR"
    },
    "validationFlags": {
      "ignoreDocumentCroppedValidation": false,
      "ignoreColourLessValidation": false
    },
    "riskScore": 0.05,
    "confidence": 0.91,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Document liveness not found",
  "message": "DOCUMENT_LIVENESS_NOT_FOUND"
}
```
