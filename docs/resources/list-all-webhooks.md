---
id: list-all-webhooks
title: List All Webhooks
description: Retrieve a list of all webhooks with optional filtering and pagination
---

# List All Webhooks

**GET** `https://api.verifik.co/v2/webhooks`

This endpoint allows you to retrieve a list of all webhooks within your Verifik account. You can filter by status, project flow, and other parameters.

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
| `isActive`    | boolean | Filter by active status                                                                        |
| `projectFlow` | string  | Filter by specific project flow ID                                                             |
| `populates[]` | string  | Optional array of related data to include. Available options: `client`, `projectFlow`.          |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/webhooks",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    isActive: true,
    "populates[]": ["client", "projectFlow"]
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
      "_id": "webhook_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "projectFlow": [
        {
          "_id": "project_flow_123456789",
          "name": "Example Flow",
          "type": "onboarding"
        }
      ],
      "statistics": {
        "totalRequests": 150,
        "successfulRequests": 145,
        "failedRequests": 5,
        "lastTriggered": "2024-01-15T10:30:00Z"
      },
      "isActive": true,
      "name": "Production Webhook",
      "url": "https://api.example.com/webhooks/verifik",
      "description": "Main webhook for production notifications",
      "events": [
        "validation.completed",
        "validation.failed",
        "registration.completed",
        "login.completed"
      ],
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
