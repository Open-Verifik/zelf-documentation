---
id: update-a-document-validation
title: Update a Document Validation
description: Update an existing document validation record
---

# Update a Document Validation

**PUT** `https://api.verifik.co/v2/document-validations/{id}`

Method for updating an existing Document Validation. To make the service work, the `_id` parameter is required, which is generated when a Document Validation is created correctly.

:::warning
The Document Validation update functionality is currently not implemented in the system. This endpoint will return a "method_not_set" error if called.
:::

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the document validation to update.      |

## Body

| Name           | Type   | Required | Description                                    |
| -------------- | ------ | -------- | ---------------------------------------------- |
| `status`       | string | No       | Update the validation status                   |
| `documentData` | object | No       | Update document data fields                    |
| `riskScore`    | number | No       | Update risk assessment score                   |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "put",
  url: "https://api.verifik.co/v2/document-validations/document_validation_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    status: "ACTIVE",
    documentData: {
      firstName: "John",
      lastName: "Doe"
    },
    riskScore: 0.05
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
  "error": "Method not allowed",
  "message": "method_not_set"
}
```

## Important Notes

* **Update Not Available**: The Document Validation update functionality is currently not implemented in the system.
* **Alternative Methods**: To modify document validation data, you may need to:
  * Create a new Document Validation record
  * Use the name validation endpoint (`PUT /document-validations/{id}/validate`) for specific validation updates
  * Contact support for manual updates if required
