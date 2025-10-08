---
id: create-a-name-validation
title: Create a Name Validation
description: Perform name validation by comparing names extracted from documents with official government records
---

# Create a Name Validation

**PUT** `https://api.verifik.co/v2/document-validations/{id}/validate`

This endpoint performs name validation by comparing the names extracted from a user's document with official government records. It validates that the user's provided names match their official identity records through government API integrations.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
**Prerequisites**: Users must complete both the `signUpForm` step and the `document` step before name validation can be performed.
:::

:::warning
**Additional Feature**: Name Validations are an additional feature and are subject to charges. Each validation request will incur a fee based on your plan.
:::

## Path Parameters

| Name | Type   | Required | Description                                                          |
| ---- | ------ | -------- | -------------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the document validation record to validate. |

## Query Parameters

| Parameter | Type    | Description                                    | Example      |
| --------- | ------- | ---------------------------------------------- | ------------ |
| `force`   | boolean | Force re-validation even if already validated. | `force=true` |

## Body

This endpoint does not require a request body. All necessary information is automatically retrieved from the document validation record.

## Supported Regions and Document Types

Name validation is currently supported for the following regions and document types:

| Region       | Document Type | Description                  |
| ------------ | ------------- | ---------------------------- |
| **Panama**   | `CCPA`        | Panama National ID Card      |
| **Colombia** | `CC`          | Colombian National ID Card   |
| **Colombia** | `DRCC`        | Colombian Diplomatic ID Card |
| **Chile**    | `CL`          | Chilean National ID Card     |

:::info
**Note**: Support for additional regions and document types may be available. Contact your account manager for the most up-to-date list of supported countries and document types.
:::

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "put",
  url: "https://api.verifik.co/v2/document-validations/document_validation_123456789/validate",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    force: false
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
    "_id": "document_validation_123456789",
    "status": "ACTIVE",
    "nameValidation": {
      "firstName": {
        "provided": "John",
        "official": "John",
        "match": true,
        "confidence": 0.95
      },
      "lastName": {
        "provided": "Doe",
        "official": "Doe",
        "match": true,
        "confidence": 0.95
      },
      "overallMatch": true,
      "validationDate": "2024-01-15T10:32:00Z"
    },
    "updatedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Name validation not supported for this document type",
  "message": "UNSUPPORTED_DOCUMENT_TYPE"
}
```

```json
{
  "error": "Prerequisites not met",
  "message": "MISSING_PREREQUISITES"
}
```

```json
{
  "error": "Insufficient credits",
  "message": "INSUFFICIENT_CREDITS"
}
```
