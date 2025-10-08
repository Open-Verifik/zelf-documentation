---
id: retrieve-a-webhook
title: Retrieve a Webhook
description: Retrieve a specific webhook using its unique identifier
---

# Retrieve a Webhook

**GET** `https://api.verifik.co/v2/webhooks/{id}`

This endpoint allows you to retrieve a specific webhook by its unique identifier, including all its configuration details and statistics.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the webhook to retrieve.               |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/webhooks/webhook_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
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
    "_id": "webhook_123456789",
    "client": "client_123456789",
    "projectFlow": ["project_flow_123456789"],
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
    "secret": "webhook_secret_key_123456789",
    "retryPolicy": {
      "maxRetries": 3,
      "retryDelay": 5000,
      "timeout": 30000
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Webhook not found",
  "message": "WEBHOOK_NOT_FOUND"
}
```
