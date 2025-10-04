---
id: list-all-phone-validations
title: List All Phone Validations
description: Retrieve a list of all phone validations with optional filtering and pagination
---

# List All Phone Validations

**GET** `https://api.verifik.co/v2/phone-validations`

This service retrieves a list of all phone validations with optional filtering and pagination. You can filter by project, status, type, and other parameters to find specific phone validations.

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
| `status`      | string  | Filter by status: `new`, `sent`, `validated`, `failed`                                       |
| `type`        | string  | Filter by type: `validation`, `login`, `onboarding`                                           |
| `countryCode` | string  | Filter by country code                                                                         |
| `phone`       | string  | Filter by phone number                                                                         |
| `populates[]` | string  | Optional array of related data to include. Available options: `client`, `project`, `projectFlow`. |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/phone-validations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "validated",
    type: "validation",
    countryCode: "+1",
    "populates[]": ["client", "project"]
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
      "_id": "phone_validation_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "project": {
        "_id": "project_123456789",
        "name": "Example Project",
        "description": "Example project description"
      },
      "status": "validated",
      "countryCode": "+1",
      "phone": "1234567890",
      "type": "validation",
      "validationMethod": "verificationCode",
      "expiresAt": "2024-01-15T11:30:00Z",
      "attempts": 1,
      "maxAttempts": 3,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "validatedAt": "2024-01-15T10:32:00Z"
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
