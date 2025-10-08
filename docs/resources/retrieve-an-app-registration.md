---
id: retrieve-an-app-registration
title: Retrieve an App Registration
description: Retrieve a specific app registration record using its unique identifier
---

# Retrieve an App Registration

**GET** `https://api.verifik.co/v2/app-registrations/{id}`

With this service, you can bring all app registrations that you have created or if you only want one, you can specify the ID of the app registration and the endpoint will return only the selected registration.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Name          | Type   | Description                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `id`          | string | ID of the App Registration that you want to bring the information.                             |
| `populates[]` | string | Use this to populate additional related data. Available options: `project`, `projectFlow`, `emailValidation`, `phoneValidation`, `biometricValidation`, `documentValidation`, `informationValidation`, `person`, `face`, `documentFace`, `compareFaceVerification`, `cryptoValidation`, `formSubmission`, `signature`, `accessControlLog` |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/app-registrations/app_registration_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["project", "projectFlow", "emailValidation", "phoneValidation", "biometricValidation", "documentValidation"]
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
    "project": {
      "_id": "project_123456789",
      "name": "Example Project",
      "description": "Example project description"
    },
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "completed",
    "email": "user@example.com",
    "phone": "1234567890",
    "countryCode": "+1",
    "fullName": "John Doe",
    "language": "en",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "emailValidation": {
      "_id": "email_validation_123456789",
      "email": "user@example.com",
      "status": "validated",
      "verifiedAt": "2024-01-15T10:32:00Z"
    },
    "phoneValidation": {
      "_id": "phone_validation_123456789",
      "phone": "1234567890",
      "status": "validated",
      "verifiedAt": "2024-01-15T10:32:00Z"
    },
    "biometricValidation": {
      "_id": "biometric_validation_123456789",
      "status": "completed",
      "completedAt": "2024-01-15T10:32:00Z"
    },
    "documentValidation": {
      "_id": "document_validation_123456789",
      "status": "completed",
      "completedAt": "2024-01-15T10:32:00Z"
    },
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "App registration not found",
  "message": "APP_REGISTRATION_NOT_FOUND"
}
```
