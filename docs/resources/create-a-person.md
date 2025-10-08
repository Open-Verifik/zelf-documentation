---
id: create-a-person
title: Create a Person
description: Create a new person in the facial recognition system
---

# Create a Person

**POST** `https://api.verifik.co/v2/face-recognition/persons`

The Create Person API allows you to create a new person within the facial recognition system. You can associate a person with their name, images, gender, date of birth, nationality, collections, and additional notes.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Body Parameters

| Key                   | Type                | Required | Description                                     |
| --------------------- | ------------------- | -------- | ----------------------------------------------- |
| `name`                | `string`            | **Yes**  | Full name of the person.                        |
| `images`              | `array` of `string` | **Yes**  | Base64-encoded images for recognition.          |
| `gender`              | `string`            | No       | Gender of the person (`M` or `F`).              |
| `date_of_birth`       | `string` (ISO8601)  | No       | Date of birth of the person.                    |
| `nationality`         | `string`            | No       | Nationality of the person.                      |
| `collections`         | `array` of `string` | No       | Array of collection IDs related to this person. |
| `notes`               | `string`            | No       | Additional notes about the person.              |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/face-recognition/persons",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    name: "John Doe",
    images: [
      "base64_encoded_image_1",
      "base64_encoded_image_2"
    ],
    gender: "M",
    date_of_birth: "1990-01-15",
    nationality: "US",
    collections: ["collection_123456789"],
    notes: "VIP customer"
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
  "error": "Invalid image format",
  "message": "INVALID_IMAGE_FORMAT"
}
```

```json
{
  "error": "Person name is required",
  "message": "NAME_REQUIRED"
}
```
