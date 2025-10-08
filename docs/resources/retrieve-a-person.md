---
id: retrieve-a-person
title: Retrieve a Person
description: Retrieve a specific person record using its unique identifier
---

# Retrieve a Person

**GET** `https://api.verifik.co/v2/face-recognition/persons/{id}`

This endpoint allows you to query a person stored by the primary key.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Path Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | ID of the person that you want to bring the information.        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/face-recognition/persons/person_123456789",
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
    "collections": ["collection_123456789"],
    "notes": "VIP customer",
    "client": "client_123456789",
    "status": "active",
    "faceEncodings": [
      "face_encoding_1",
      "face_encoding_2"
    ],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Person not found",
  "message": "PERSON_NOT_FOUND"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
