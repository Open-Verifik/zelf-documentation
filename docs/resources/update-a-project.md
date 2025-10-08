---
id: update-a-project
title: Update a Project
description: Update an existing project record
---

# Update a Project

**PUT** `https://api.verifik.co/v2/projects/{id}`

This endpoint allows you to update an existing project record. You can modify project settings, branding, allowed countries, and other project-specific configurations.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the project to update.                 |

## Body

| Name                      | Type                | Required | Description                                                                                    |
| ------------------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| `name`                    | string              | No       | Name of the project.                                                                           |
| `allowedCountries`        | Array of string     | No       | Countries where your project will be used.                                                     |
| `contactEmail`            | string              | No       | Primary email address of the project owner                                                    |
| `privacyUrl`              | string              | No       | Link to your privacy policy                                                                    |
| `termsAndConditionsUrl`  | string              | No       | Link to your terms and conditions                                                              |
| `status`                  | string              | No       | Status of the project: `active`, `inactive`, `pending`                                        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "put",
  url: "https://api.verifik.co/v2/projects/project_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    name: "Updated Project Name",
    allowedCountries: ["Colombia", "United States", "Mexico"],
    contactEmail: "updated@verifik.co",
    status: "active"
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
    "name": "Updated Project Name",
    "allowedCountries": ["Colombia", "United States", "Mexico"],
    "contactEmail": "updated@verifik.co",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "client": "client_123456789",
    "status": "active",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:35:00Z"
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
  "error": "Invalid country code",
  "message": "INVALID_COUNTRY_CODE"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
