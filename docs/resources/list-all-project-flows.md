---
id: list-all-project-flows
title: List All Project Flows
description: Retrieve a list of all project flows with optional filtering and pagination
---

# List All Project Flows

**GET** `https://api.verifik.co/v2/project-flows`

This endpoint allows you to retrieve a list of all project flows within your Verifik account. You can filter by project, type, status, and other parameters.

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
| `project`     | string  | Filter by specific project ID                                                                  |
| `type`        | string  | Filter by flow type: `login`, `onboarding`                                                   |
| `status`      | string  | Filter by status: `draft`, `active`, `paused`                                                |
| `populates[]` | string  | Optional array of related data to include. Available options: `project`, `client`.             |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/project-flows",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    type: "onboarding",
    status: "active",
    "populates[]": ["project"]
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
      "_id": "project_flow_123456789",
      "project": {
        "_id": "project_123456789",
        "name": "Example Project",
        "status": "active"
      },
      "type": "onboarding",
      "status": "active",
      "version": 1,
      "name": "Complete Onboarding Flow",
      "description": "Full onboarding flow with email, phone, and biometric verification",
      "client": "client_123456789",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
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
