---
id: create-an-app-login-biometric-validation
title: Create an App Login Biometric Validation
description: Create a biometric validation specifically for app login flow
---

# Create an App Login Biometric Validation

**POST** `https://api.verifik.co/v2/biometric-validations/app-login`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection during the login process. This process ensures the authenticity of users by verifying their unique biometric characteristics through advanced security technology. This endpoint is specifically designed for users who are in the middle of an app login flow.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
The JWT Token you should use when creating `App Login Biometric Validations` is provided from the [`App Login`](https://docs.verifik.co/resources/app-logins/create-an-app-login) in creation.
:::

## Body

| Name           | Type    | Required | Description                                                                                                 |
| -------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`      | string  | **Yes**  | The unique identifier for the project where this biometric validation will be used.                         |
| `projectFlow`  | string  | **Yes**  | The unique identifier for the project flow configuration.                                                  |
| `identifier`   | string  | **Yes**  | A unique identifier for the user or session (e.g., email, phone, or custom ID).                             |
| `type`         | string  | **Yes**  | Must be set to `login` for this endpoint.                                                                   |
| `expiresAt`    | string  | No       | Optional expiration date for the validation session.                                                         |
| `redirectUrl`  | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`   | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `requires2FA`  | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`    | string  | No       | Optional IP address of the user.                                                                            |
| `sendViaEmail` | boolean | No       | Optional flag to send validation link via email.                                                            |
| `email`        | string  | No       | Email address to send validation link to (required if sendViaEmail is true).                              |
| `language`     | string  | No       | Language for email templates (en/es). Defaults to "en".                                                   |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/biometric-validations/app-login",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    projectFlow: "flow_123456789",
    identifier: "user@example.com",
    type: "login",
    expiresAt: "2024-01-15T11:30:00Z",
    redirectUrl: "https://example.com/success",
    webhookUrl: "https://example.com/webhook",
    requires2FA: false,
    ipAddress: "192.168.1.1",
    sendViaEmail: true,
    email: "user@example.com",
    language: "en"
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
    "_id": "biometric_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "new",
    "identifier": "user@example.com",
    "type": "login",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Invalid project flow",
  "code": "INVALID_PROJECT_FLOW"
}
```

```json
{
  "success": false,
  "error": "Invalid login token",
  "code": "INVALID_LOGIN_TOKEN"
}
```
