---
id: list-all-document-validations
title: List All Document Validations
description: Retrieve a list of all document validations with optional filtering and pagination
---

# List All Document Validations

**GET** `https://api.verifik.co/v2/document-validations`

This endpoint allows you to retrieve a list of all Document Validations within the Verifik API. You can use this to get a detailed overview of multiple document validations, including their status, associated project, validation methods, and more.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Parameter                | Type   | Description                                                                                                                                                                 |
| ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`                   | number | Specifies the page number for pagination, starting from 1.                                                                                                                  |
| `perPage`                | number | Defines the number of items per page for pagination.                                                                                                                        |
| `populates[]`            | string | Populates the specified field, transforming ObjectId references into full objects. Available options: `appRegistration`, `projectFlow` |
| `where_status`           | string | Where condition to filter by status. Options: ASSESSING, ACTIVE, FAILED, NEEDS_MANUAL_VERIFICATION, NOT_FOUND, EXPIRED, ACTIVE_BUT_UNVERIFIED |
| `where_documentType`     | string | Filter by document type (e.g., "driver_license", "passport", "national_id")                                                                                               |
| `where_validationMethod` | string | Filter by validation method. Options: MANUAL, OCR, SCAN_PROMPT, SCAN_STUDIO                                                                                               |
| `where_type`             | string | Filter by validation type. Options: validation, login, signup, ocr, demo                                                                                                    |
| `where_inputMethod`      | string | Filter by input method. Options: CAMERA, FILE_UPLOAD, NOT_SET                                                                                                             |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/document-validations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 10,
    "populates[]": ["appRegistration", "projectFlow"],
    where_status: "ACTIVE",
    where_documentType: "driver_license",
    where_validationMethod: "OCR"
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
  "data": [
    {
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
      "documentType": "driver_license",
      "frontUrl": "https://example.com/front",
      "project": "project_123456789",
      "projectFlow": {
        "_id": "flow_123456789",
        "name": "Example Flow",
        "type": "onboarding"
      },
      "status": "ACTIVE",
      "updatedAt": "2024-01-15T10:32:00Z",
      "validationResults": {
        "documentAuthenticity": "passed",
        "dataConsistency": "passed"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 1,
    "pages": 1
  }
}
```

## Error Responses

```json
{
  "error": "Invalid query parameters",
  "message": "INVALID_PARAMETERS"
}
```
