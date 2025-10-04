---
id: list-all-biometric-validations
title: List All Biometric Validations
description: Retrieve a list of biometric validation records based on specified filters and parameters
---

# List All Biometric Validations

**GET** `https://api.verifik.co/v2/biometric-validations`

Retrieves a list of biometric validation records based on specified filters and parameters.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Query Parameters

### Pagination

| Parameter | Type   | Description                    | Example      |
| --------- | ------ | ------------------------------ | ------------ |
| `page`    | number | Page number (starts at 1).     | `page=1`     |
| `perPage` | number | Items per page (default: 20).  | `perPage=10` |
| `offset`  | number | Alternative to page for skipping records. | `offset=20` |

### Data Selection

| Parameter    | Type  | Description                        | Example                                    |
| ------------ | ----- | ---------------------------------- | ------------------------------------------ |
| `populates[]` | array | Fields to populate with related data. | `populates[]=client&populates[]=project` |

### Filtering

| Parameter           | Type   | Description                        | Example                                    |
| ------------------- | ------ | ---------------------------------- | ------------------------------------------ |
| `where_client`      | string | Filter by client ID.               | `where_client=507f1f77bcf86cd799439013`    |
| `where_status`      | string | Filter by validation status.       | `where_status=validated`                   |
| `where_type`        | string | Filter by validation type.         | `where_type=login`                        |
| `where_livenessSession` | string | Filter by liveness session ID. | `where_livenessSession=674de8df21c72be3cc42b8a7` |
| `in_status`         | array  | Filter by multiple statuses.      | `in_status[]=validated&in_status[]=failed` |
| `where>_createdAt`  | string | Filter records created after date. | `where>_createdAt=2024-12-01`              |

### Sorting

| Parameter | Type   | Description                                                                 | Example           |
| --------- | ------ | --------------------------------------------------------------------------- | ----------------- |
| `sort`    | string | Sort order (prefix with `-` for descending).                               | `sort=-createdAt` |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/biometric-validations",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 10,
    "populates[]": ["client", "project"],
    where_status: "validated",
    where_type: "login",
    sort: "-createdAt"
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
      "_id": "biometric_validation_123456789",
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
      "status": "completed",
      "identifier": "user@example.com",
      "type": "login",
      "expiresAt": "2024-01-15T11:30:00Z",
      "requires2FA": false,
      "ipAddress": "192.168.1.1",
      "biometricData": {
        "quality": "good",
        "livenessScore": 0.95
      },
      "verificationResults": {
        "livenessDetection": "passed",
        "identityMatch": "passed",
        "qualityScore": 0.95,
        "antiSpoofing": "passed"
      },
      "riskScore": 0.05,
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
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```
