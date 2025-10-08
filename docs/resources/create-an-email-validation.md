---
id: create-an-email-validation
title: Create an Email Validation
description: Create a new email validation request
---

# Create an Email Validation

**POST** `https://api.verifik.co/v2/email-validations`

An Email Validation is an instance within Verifik's system that allows you to process and validate email addresses during authentication and registration processes. This process ensures the authenticity of user email addresses and provides secure verification through email delivery methods.

## Headers

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

## Body

| Name               | Type    | Required | Description                                                                                                 |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`          | string  | **Yes**  | The unique identifier for the project where this email validation will be used.                             |
| `validationMethod` | string  | **Yes**  | The validation method, set to `verificationCode`.                                                           |
| `email`            | string  | **Yes**  | The email address that will be validated (spaces will be automatically removed and converted to lowercase). |
| `type`             | string  | **Yes**  | Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink`.                                  |
| `expiresAt`        | string  | No       | Optional expiration date for the validation code.                                                           |
| `redirectUrl`      | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`       | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `identityUrl`      | string  | No       | Optional identity verification URL.                                                                         |
| `requires2FA`      | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`        | string  | No       | Optional IP address of the user.                                                                            |

## `validationMethod` Values

| Value              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `verificationCode` | Sends a 6-digit OTP code to the email address                        |
| `oneTimeLink`      | Sends a single-use link to the email address                          |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/email-validations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    validationMethod: "verificationCode",
    email: "user@example.com",
    type: "validation",
    expiresAt: "2024-01-15T11:30:00Z",
    redirectUrl: "https://example.com/success",
    webhookUrl: "https://example.com/webhook",
    requires2FA: false,
    ipAddress: "192.168.1.1"
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
    "_id": "email_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "sent",
    "email": "user@example.com",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 0,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Invalid email address",
  "code": "INVALID_EMAIL"
}
```
