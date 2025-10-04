---
id: list-all-app-registrations
title: List All App Registrations
description: Retrieve a list of all app registrations with optional filtering and pagination
---

# List All App Registrations

**GET** `https://api.verifik.co/v2/app-registrations`

This endpoint allows you to retrieve a list of all App Registrations within the Verifik API. You can use this to get a detailed overview of multiple app registrations, including their status, associated project, validation statuses, and more.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Parameter     | Type   | Description                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `page`        | number | Specifies the page number for pagination, starting from 1.                                    |
| `perPage`     | number | Defines the number of items per page for pagination.                                          |
| `populates[]` | string | Populates the specified field, transforming ObjectId references into full objects. Available options: `emailValidation`, `phoneValidation`, `informationValidation`, `biometricValidation`, `documentValidation`, `documentFace`, `failedBiometricValidations`, `project`, `projectFlow` |
| `where_status` | string | Where condition to filter by status. Options: `STARTED`, `ONGOING`, `COMPLETED_WITHOUT_KYC`, `COMPLETED`, `FAILED`, `NEEDS_MANUAL_VERIFICATION`, `EXPIRED` |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/app-registrations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 10,
    "populates[]": ["project", "projectFlow", "emailValidation", "phoneValidation"],
    where_status: "COMPLETED"
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
      "_id": "app_registration_123456789",
      "client": "client_123456789",
      "project": {
        "_id": "project_123456789",
        "name": "Example Project",
        "description": "Example project description"
      },
      "projectFlow": {
        "_id": "flow_123456789",
        "name": "Example Flow",
        "type": "onboarding"
      },
      "status": "COMPLETED",
      "email": "user@example.com",
      "phone": "1234567890",
      "countryCode": "+1",
      "fullName": "John Doe",
      "language": "en",
      "emailValidation": {
        "_id": "email_validation_123456789",
        "email": "user@example.com",
        "status": "validated"
      },
      "phoneValidation": {
        "_id": "phone_validation_123456789",
        "phone": "1234567890",
        "status": "validated"
      },
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
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
