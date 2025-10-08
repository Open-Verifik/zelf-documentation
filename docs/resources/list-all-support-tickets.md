---
id: list-all-support-tickets
title: List All Support Tickets
description: Retrieve a list of all support tickets with optional filtering and pagination
---

# List All Support Tickets

**GET** `https://api.verifik.co/v2/support-tickets`

Retrieve a list of support tickets with optional filtering and pagination.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Name            | Type    | Description                       | Example   |
| --------------- | ------- | --------------------------------- | --------- |
| `page`          | number  | Page number for pagination        | `1`       |
| `limit`         | number  | Number of items per page          | `10`      |
| `status`        | string  | Filter by ticket status           | `pending` |
| `category`      | string  | Filter by ticket category         | `billing` |
| `priority`      | string  | Filter by ticket priority         | `high`    |
| `countByStatus` | boolean | Include status counts in response | `true`    |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/support-tickets",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "open",
    category: "technical",
    priority: "high",
    countByStatus: true
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
      "_id": "support_ticket_123456789",
      "title": "API Integration Issue",
      "description": "Having trouble integrating the biometric validation API...",
      "status": "open",
      "priority": "high",
      "category": "technical",
      "client": "client_123456789",
      "assignedTo": null,
      "tags": ["api", "authentication", "biometric"],
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "counts": {
    "open": 5,
    "pending": 3,
    "in_progress": 2,
    "resolved": 10,
    "closed": 8
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
