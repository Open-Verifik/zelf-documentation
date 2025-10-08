---
id: the-webhook-object
title: The Webhook Object
description: The Webhook object represents webhook configurations for receiving notifications
---

# The Webhook Object

The Webhook object represents webhook configurations for receiving notifications from Verifik. Webhooks allow you to receive real-time notifications about events that occur in your Verifik account.

## Attributes

**`client`** - ObjectId - Required

Reference to the client associated with the webhook. This is a required field that links the webhook to a specific client.

**`projectFlow`** - Array of ObjectId - Optional

Array of references to `ProjectFlow` objects. If no project flows are provided, this field defaults to an empty array.

**`statistics`** - Object - Optional

Stores statistical data related to the webhook. By default, this field is an empty object `{}`.

**`isActive`** - Boolean - Required

Indicates whether the webhook is active. This is a required field and must be set to either `true` or `false`.

**`name`** - String - Required

The name of the webhook. This is a required field and must be provided as a string.

**`url`** - String - Required

The URL where webhook notifications will be sent. This must be a valid HTTPS URL.

**`description`** - String - Optional

Description of the webhook and its purpose.

**`events`** - Array of String - Optional

Array of event types that this webhook should listen for. Available events:

* `validation.completed` - When a validation is completed
* `validation.failed` - When a validation fails
* `registration.completed` - When a registration is completed
* `login.completed` - When a login is completed
* `webhook.test` - Test webhook event

**`secret`** - String - Optional

Secret key used to sign webhook payloads for verification.

**`retryPolicy`** - Object - Optional

Configuration for webhook retry behavior:

* `maxRetries` - Maximum number of retry attempts
* `retryDelay` - Delay between retry attempts (in milliseconds)
* `timeout` - Request timeout (in milliseconds)

**`headers`** - Object - Optional

Custom headers to include with webhook requests.

**`createdAt`** - Date - Required

Timestamp when the webhook was created.

**`updatedAt`** - Date - Required

Timestamp when the webhook was last updated.

## Example Object

```json
{
  "_id": "webhook_123456789",
  "client": "client_123456789",
  "projectFlow": ["project_flow_123456789", "project_flow_987654321"],
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
  "headers": {
    "X-Custom-Header": "custom-value",
    "User-Agent": "Verifik-Webhook/1.0"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```
