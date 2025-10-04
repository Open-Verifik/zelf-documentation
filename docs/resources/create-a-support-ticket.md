---
id: create-a-support-ticket
title: Create a Support Ticket
description: Create a new support ticket for customer support
---

# Create a Support Ticket

**POST** `https://api.verifik.co/v2/support-tickets`

This endpoint allows you to create a new support ticket for customer support and issue tracking.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Body

| Name          | Type                | Required | Description                                                                                    |
| ------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `title`       | string              | **Yes**  | The title or subject of the support ticket.                                                    |
| `description` | string              | **Yes**  | Detailed description of the issue or request.                                                  |
| `priority`    | string              | **Yes**  | Priority level: `low`, `medium`, `high`, `urgent`                                              |
| `category`    | string              | **Yes**  | Category: `technical`, `billing`, `account`, `feature_request`, `general`                     |
| `tags`        | array of string     | No       | Array of tags for categorizing the ticket.                                                     |
| `attachments` | array of object     | No       | Array of file attachments.                                                                    |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/support-tickets",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    title: "API Integration Issue",
    description: "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
    priority: "high",
    category: "technical",
    tags: ["api", "authentication", "biometric"],
    attachments: [
      {
        filename: "error_logs.txt",
        url: "https://storage.verifik.co/attachments/error_logs.txt",
        size: 1024,
        type: "text/plain"
      }
    ]
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
    "_id": "support_ticket_123456789",
    "title": "API Integration Issue",
    "description": "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
    "status": "open",
    "priority": "high",
    "category": "technical",
    "client": "client_123456789",
    "assignedTo": null,
    "threads": [
      {
        "author": "client_123456789",
        "message": "Having trouble integrating the biometric validation API. Getting 401 errors when trying to authenticate.",
        "timestamp": "2024-01-15T10:30:00Z",
        "type": "user"
      }
    ],
    "attachments": [
      {
        "filename": "error_logs.txt",
        "url": "https://storage.verifik.co/attachments/error_logs.txt",
        "size": 1024,
        "type": "text/plain"
      }
    ],
    "tags": ["api", "authentication", "biometric"],
    "resolution": null,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "resolvedAt": null
  }
}
```

## Error Responses

```json
{
  "error": "Title is required",
  "message": "TITLE_REQUIRED"
}
```

```json
{
  "error": "Invalid priority level",
  "message": "INVALID_PRIORITY"
}
```
