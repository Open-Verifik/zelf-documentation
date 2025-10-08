---
id: list-all-document-liveness
title: List All Document Liveness
description: Retrieve a list of all document liveness validations with optional filtering and pagination
---

# List All Document Liveness

**GET** `https://api.verifik.co/v2/document-liveness`

With this service, you can bring all document liveness validations that you have processed.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Page number for pagination (default: 1)                                                       |
| `limit`       | number  | Number of records per page (default: 10, max: 100)                                            |
| `status`      | string  | Filter by status: `new`, `processing`, `completed`, `failed`                                  |
| `populates[]` | string  | Optional array of related data to include. Available options: `client`, `appRegistration`.    |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/document-liveness",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "completed",
    "populates[]": ["client", "appRegistration"]
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
  "data": [
    {
      "_id": "document_liveness_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "appRegistration": {
        "_id": "app_registration_123456789",
        "fullName": "John Doe",
        "email": "user@example.com",
        "status": "completed"
      },
      "imageSaved": true,
      "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
      "status": "completed",
      "validationResults": {
        "screenReplay": {
          "passed": true,
          "score": 0.95
        },
        "printedCopy": {
          "passed": true,
          "score": 0.90
        },
        "portraitSubstitution": {
          "passed": true,
          "score": 0.88
        },
        "digitalManipulation": {
          "passed": true,
          "score": 0.92
        }
      },
      "riskScore": 0.05,
      "confidence": 0.91,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```
