---
id: list-all-projects
title: List All Projects
description: Retrieve a list of all projects with optional filtering and pagination
---

# List All Projects

**GET** `https://api.verifik.co/v2/projects`

This endpoint allows you to retrieve a list of all projects within your Verifik account. You can use this to get a detailed overview of multiple projects, including their status, allowed countries, and settings.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Page number for pagination (default: 1)                                                       |
| `limit`       | number  | Number of records per page (default: 10, max: 100)                                            |
| `status`      | string  | Filter by status: `active`, `inactive`, `pending`                                            |
| `populates[]` | string  | Optional array of related data to include. Available options: `client`.                        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/projects",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "active",
    "populates[]": ["client"]
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
  "data": [
    {
      "_id": "project_123456789",
      "name": "Example Project",
      "allowedCountries": ["Colombia", "United States"],
      "contactEmail": "test@verifik.co",
      "privacyUrl": "https://example.com/privacy",
      "termsAndConditionsUrl": "https://example.com/terms",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "status": "active",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```
