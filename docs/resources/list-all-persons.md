---
id: list-all-persons
title: List All Persons
description: Retrieve a list of all persons in the facial recognition system
---

# List All Persons

**GET** `https://api.verifik.co/v2/face-recognition/persons`

This endpoint allows you to bring all the people stored in Verifik for all the collections.

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
| `collection`  | string  | Filter by specific collection ID                                                               |
| `status`      | string  | Filter by status: `active`, `inactive`, `pending`                                            |
| `populates[]` | string  | Optional array of related data to include. Available options: `collections`, `client`.        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/face-recognition/persons",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    limit: 10,
    status: "active",
    "populates[]": ["collections"]
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
      "_id": "person_123456789",
      "name": "John Doe",
      "gender": "M",
      "date_of_birth": {
        "year": 1990,
        "month": 1,
        "day": 15
      },
      "nationality": "US",
      "images": [
        "base64_encoded_image_1",
        "base64_encoded_image_2"
      ],
      "collections": [
        {
          "_id": "collection_123456789",
          "name": "VIP Customers",
          "description": "High-value customers"
        }
      ],
      "notes": "VIP customer",
      "client": "client_123456789",
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
