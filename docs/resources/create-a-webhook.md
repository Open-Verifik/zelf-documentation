---
id: create-a-webhook
title: Create a Webhook
description: Create a new webhook for receiving notifications
---

# Create a Webhook

**POST** `https://api.verifik.co/v2/webhooks`

This API allows you to create a new webhook within your account. You can associate a webhook with project Flows in this step or when you update the webhook.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Body

| Name          | Type                | Required | Description                                                                                    |
| ------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `url`         | string              | **Yes**  | The URL where webhook notifications will be sent. Must be a valid HTTPS URL.                 |
| `name`        | string              | **Yes**  | The name of the webhook.                                                                       |
| `isActive`    | boolean             | **Yes**  | Indicates whether the webhook is active.                                                       |
| `description` | string              | No       | Description of the webhook and its purpose.                                                    |
| `link`        | array of string     | No       | Array of ProjectFlow IDs to associate with this webhook.                                      |
| `events`      | array of string     | No       | Array of event types that this webhook should listen for.                                     |
| `secret`      | string              | No       | Secret key used to sign webhook payloads for verification.                                    |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/webhooks",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    url: "https://api.example.com/webhooks/verifik",
    name: "Production Webhook",
    isActive: true,
    description: "Main webhook for production notifications",
    link: ["project_flow_123456789"],
    events: [
      "validation.completed",
      "validation.failed",
      "registration.completed",
      "login.completed"
    ],
    secret: "webhook_secret_key_123456789"
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
    "statistics": {},
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
  "error": "Invalid webhook URL",
  "message": "INVALID_WEBHOOK_URL"
}
```

```json
{
  "error": "Webhook name already exists",
  "message": "WEBHOOK_NAME_EXISTS"
}
```
