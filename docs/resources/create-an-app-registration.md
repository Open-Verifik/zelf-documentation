---
id: create-an-app-registration
title: Create an App Registration
description: Create a new app registration for user authentication and validation
---

# Create an App Registration

**POST** `https://api.verifik.co/v2/app-registrations`

An App Registration is an instance within Verifik's system that allows a user to initiate the authentication and validation process using specified project flows, email, and/or phone details. This process ensures the identity of the user and provides secure validation through various verification steps.

:::warning
When creating an App Registration, a `token` is returned in the request. You must use this token to create [`document validations`](https://docs.verifik.co/resources/document-validations/create-an-app-registration-document-validation), [`email validations`](https://docs.verifik.co/resources/email-validations/create-an-app-registration-email-validation), [`phone validations`](https://docs.verifik.co/resources/phone-validations/create-an-app-registration-phone-validation) and [`biometric validations`](https://docs.verifik.co/resources/biometric-validations/create-an-app-registration-biometric-validation) **for App Registrations**. This ensures the validations are related to the app registrant.

The `token` can be recreated by entering the same information (`phone`/`email`), however, any `phone` or `email` validations previously completed will be deleted. We recommend you have your users complete the `email` and `phone` validations again to re-validate they are the original owner of the data.
:::

## Headers

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

## Body

| Name          | Type   | Required | Description                                                                                        |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------- |
| `project`     | string | **Yes**  | The unique ID of the project associated with this registration.                                    |
| `projectFlow` | string | **Yes**  | The unique ID of the project flow that defines the registration and validation process.            |
| `email`       | string | No       | The email address for the user to be registered. (Either `email` or `phone` is required).          |
| `phone`       | string | No       | The phone number for the user to be registered. (Either `email` or `phone` is required).           |
| `countryCode` | string | No       | The country code associated with the phone number. Required if `phone` is provided. Format: `+123` |
| `fullName`    | string | **Yes**  | The full name of the person being registered.                                                      |
| `language`    | string | No       | The preferred language for communication during the registration process. Default: `"en"`.         |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/app-registrations",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    projectFlow: "flow_123456789",
    email: "user@example.com",
    phone: "1234567890",
    countryCode: "+1",
    fullName: "John Doe",
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
    "_id": "app_registration_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "new",
    "email": "user@example.com",
    "phone": "1234567890",
    "countryCode": "+1",
    "fullName": "John Doe",
    "language": "en",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Either email or phone is required",
  "message": "MISSING_CONTACT_INFO"
}
```

```json
{
  "error": "Invalid project flow",
  "message": "INVALID_PROJECT_FLOW"
}
```
