---
id: update-a-webhook
title: Update a Webhook
description: Update an existing webhook configuration
---

# Update a Webhook

**PUT** `https://api.verifik.co/v2/webhooks/{id}`

This endpoint allows you to update an existing webhook configuration. You can modify the webhook URL, events, status, and other settings.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the webhook to update.                  |

## Body

| Name          | Type                | Required | Description                                                                                    |
| ------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `name`        | string              | No       | The name of the webhook.                                                                       |
| `url`         | string              | No       | The URL where webhook notifications will be sent. Must be a valid HTTPS URL.                 |
| `isActive`    | boolean             | No       | Indicates whether the webhook is active.                                                       |
| `description` | string              | No       | Description of the webhook and its purpose.                                                    |
| `link`        | array of string     | No       | Array of ProjectFlow IDs to associate with this webhook.                                      |
| `events`      | array of string     | No       | Array of event types that this webhook should listen for.                                     |
| `secret`      | string              | No       | Secret key used to sign webhook payloads for verification.                                    |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "put",
  url: "https://api.verifik.co/v2/webhooks/webhook_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    name: "Updated Production Webhook",
    url: "https://api.example.com/webhooks/verifik/updated",
    isActive: true,
    description: "Updated webhook for production notifications",
    events: [
      "validation.completed",
      "validation.failed",
      "registration.completed",
      "login.completed",
      "webhook.test"
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
    "name": "Updated Production Webhook",
    "url": "https://api.example.com/webhooks/verifik/updated",
    "description": "Updated webhook for production notifications",
    "events": [
      "validation.completed",
      "validation.failed",
      "registration.completed",
      "login.completed",
      "webhook.test"
    ],
    "secret": "webhook_secret_key_123456789",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:35:00Z"
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

```json
{
  "error": "Invalid webhook URL",
  "message": "INVALID_WEBHOOK_URL"
}
```
