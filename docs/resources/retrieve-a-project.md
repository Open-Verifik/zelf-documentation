---
id: retrieve-a-project
title: Retrieve a Project
description: Retrieve a specific project using its unique identifier
---

# Retrieve a Project

**GET** `https://api.verifik.co/v2/projects/{id}`

With this service, you can bring all projects that you have created or if you only want one, you can specify the ID of the project and the endpoint will return only the selected project.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | ID of the Project that you want to bring the information.        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/projects/project_123456789",
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
    "_id": "project_123456789",
    "name": "Example Project",
    "allowedCountries": ["Colombia", "United States"],
    "contactEmail": "test@verifik.co",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "client": "client_123456789",
    "status": "active",
    "branding": {
      "logo": "https://example.com/logo.png",
      "primaryColor": "#007bff",
      "secondaryColor": "#6c757d",
      "customDomain": "auth.example.com"
    },
    "settings": {
      "defaultLanguage": "en",
      "timezone": "UTC",
      "webhookUrl": "https://example.com/webhook"
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Project not found",
  "message": "PROJECT_NOT_FOUND"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
