---
id: delete-a-document-validation
title: Delete a Document Validation
description: Permanently remove a specific document validation record
---

# Delete a Document Validation

**DELETE** `https://api.verifik.co/v2/document-validations/{id}`

With this service, you can permanently remove a specific Document Validation record from your Verifik account. This action cannot be undone and will completely remove the document validation data.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                                         |
| ---- | ------ | -------- | ------------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the Document Validation you want to delete |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "delete",
  url: "https://api.verifik.co/v2/document-validations/document_validation_123456789",
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
  "message": "Document validation deleted successfully"
}
```

## Error Responses

```json
{
  "error": "Document validation not found",
  "message": "DOCUMENT_VALIDATION_NOT_FOUND"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```

## Important Notes

* **Permanent Deletion**: This action cannot be undone. All document validation data will be permanently removed.
* **Associated Data**: Deleting a document validation may affect related app registrations or project flows.
* **Backup**: Consider backing up important data before deletion.
