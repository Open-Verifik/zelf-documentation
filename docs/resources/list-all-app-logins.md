---
id: list-all-app-logins
title: List All App Logins
description: Retrieve a list of all app login records with optional filtering and pagination
---

# List All App Logins

**GET** `https://api.verifik.co/v2/app-logins`

This endpoint retrieves a list of all app login records with optional filtering and pagination. You can filter by project, status, type, and other parameters to find specific app logins.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Query Parameters

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Page number for pagination (default: 1)                                                       |
| `limit`       | number  | Number of records per page (default: 10, max: 100)                                            |
| `project`     | string  | Filter by project ID                                                                           |
| `status`      | string  | Filter by status: `pending`, `completed`, `failed`                                            |
| `type`        | string  | Filter by type: `email`, `phone`, `biometric`                                               |
| `populates[]` | string  | Optional array of related data to include. Available options: `emailValidation`, `phoneValidation`, `biometricValidation`. |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/app-logins",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    project: "project_123456789",
    status: "completed",
    type: "email",
    "populates[]": ["emailValidation"]
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
      "_id": "app_login_123456789",
      "client": "client_123456789",
      "name": "User Login Session",
      "status": "completed",
      "project": "project_123456789",
      "projectFlow": "flow_123456789",
      "type": "email",
      "emailValidation": {
        "_id": "email_validation_123456789",
        "email": "user@example.com",
        "status": "validated"
      },
      "identifier": "user@example.com",
      "ipAddress": "192.168.1.1",
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
