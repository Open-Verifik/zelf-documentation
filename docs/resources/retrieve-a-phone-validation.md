---
id: retrieve-a-phone-validation
title: Retrieve a Phone Validation
description: Retrieve a specific phone validation record using its unique identifier
---

# Retrieve a Phone Validation

**GET** `https://api.verifik.co/v2/phone-validations/{id}`

This service retrieves a specific phone validation record using its unique identifier. The response includes all the details about the phone validation process, including status, OTP information, and associated project data. This endpoint is useful for checking the current status of a phone validation or retrieving details for audit purposes.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | The unique identifier of the Phone Validation you want to retrieve. |

## Query Parameters

| Name          | Type   | Description                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `populates[]` | string | Optional. A list of related objects to include in the response. Available options: `client`, `project`, `projectFlow`. |

## Request Example

```bash
curl -X GET https://api.verifik.co/v2/phone-validations/674de8df21c72be3cc42b8a7 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/phone-validations/phone_validation_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["client", "project", "projectFlow"]
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
    "_id": "phone_validation_123456789",
    "client": {
      "_id": "client_123456789",
      "name": "Example Client",
      "email": "client@example.com"
    },
    "project": {
      "_id": "project_123456789",
      "name": "Example Project",
      "description": "Example project description"
    },
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "validated",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 1,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validatedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Phone validation not found",
  "code": "PHONE_VALIDATION_NOT_FOUND"
}
```
