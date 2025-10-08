---
id: retrieve-an-app-login
title: Retrieve an App Login
description: Retrieve a specific app login record using its unique identifier
---

# Retrieve an App Login

**GET** `https://api.verifik.co/v2/app-logins/{id}`

This endpoint retrieves a single app login record by its ID, along with optional populated fields such as `emailValidation`, `phoneValidation`, or `biometricValidation`.

## Path Parameters

| Parameter Name | Type   | Description                                                 |
| -------------- | ------ | ----------------------------------------------------------- |
| `id`           | string | The unique ID of the app login record you want to retrieve. |

## Query Parameters

| Parameter Name | Type  | Description                                                                            |
| -------------- | ----- | -------------------------------------------------------------------------------------- |
| `populates[]`  | array | An array specifying which validation fields to populate (e.g., `biometricValidation`). |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/app-logins/app_login_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["emailValidation", "phoneValidation", "biometricValidation"]
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
    "_id": "app_login_123456789",
    "client": "client_123456789",
    "name": "User Login Session",
    "status": "completed",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "type": "email",
    "emailValidation": {
      "_id": "email_validation_123456789",
      "email": "user@example.com",
      "status": "validated",
      "verifiedAt": "2024-01-15T10:32:00Z"
    },
    "identifier": "user@example.com",
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "expiresAt": "2024-01-15T11:30:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "App login not found",
  "message": "APP_LOGIN_NOT_FOUND"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
