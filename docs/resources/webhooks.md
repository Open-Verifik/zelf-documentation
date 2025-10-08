---
id: webhooks
title: Webhooks
description: Webhooks are used to send information from our backend to your backend via an URL
---

# Webhooks

Webhooks are used to send information from our backend to your backend via an URL that you can set up during the creation of a project/projectFlow. They provide real-time notifications about events that occur in your verification processes.

## How Webhooks Work

When specific events occur in your verification system (such as a successful verification, failed attempt, or status change), Verifik will send an HTTP POST request to your configured webhook URL with relevant data about the event.

## API Endpoints

### Create a Webhook
```http
POST https://api.verifik.co/v2/webhooks
```

### List All Webhooks
```http
GET https://api.verifik.co/v2/webhooks
```

### Retrieve a Webhook
```http
GET https://api.verifik.co/v2/webhooks/{webhookId}
```

### Update a Webhook
```http
PUT https://api.verifik.co/v2/webhooks/{webhookId}
```

### Delete a Webhook
```http
DELETE https://api.verifik.co/v2/webhooks/{webhookId}
```

## Webhook Object Structure

```json
{
  "id": "webhook_123456789",
  "url": "https://your-domain.com/webhook",
  "events": [
    "verification.completed",
    "verification.failed",
    "verification.started"
  ],
  "secret": "whsec_1234567890abcdef",
  "active": true,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## Supported Events

- `verification.started` - When a verification process begins
- `verification.completed` - When a verification is successfully completed
- `verification.failed` - When a verification fails
- `verification.expired` - When a verification expires
- `document.uploaded` - When a document is uploaded
- `biometric.captured` - When biometric data is captured

## Webhook Payload Example

```json
{
  "id": "evt_123456789",
  "type": "verification.completed",
  "data": {
    "verificationId": "ver_123456789",
    "userId": "user_123456789",
    "projectId": "proj_123456789",
    "status": "completed",
    "timestamp": "2024-01-15T10:30:00Z",
    "metadata": {
      "documentType": "passport",
      "country": "US"
    }
  }
}
```

## Security

Webhooks include a signature header that you can use to verify the authenticity of the request:

```http
X-Verifik-Signature: sha256=1234567890abcdef...
```

## Use Cases

- **Real-time Notifications**: Get instant updates about verification status
- **Integration**: Sync verification data with your internal systems
- **Audit Trail**: Track all verification events for compliance
- **Automation**: Trigger automated workflows based on verification results
