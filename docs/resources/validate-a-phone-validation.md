---
id: validate-a-phone-validation
title: Validate a Phone Validation
description: Validate a phone validation by providing the verification code
---

# Validate a Phone Validation

**POST** `https://api.verifik.co/v2/phone-validations/{id}/validate`

This service validates a phone validation by providing the verification code. The system will check the code against the stored verification code and update the validation status accordingly.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | The unique identifier of the phone validation record you want to validate. |

## Body

| Name               | Type   | Required | Description                                    |
| ------------------ | ------ | -------- | ---------------------------------------------- |
| `verificationCode` | string | **Yes**  | The verification code received via SMS        |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/phone-validations/phone_validation_123456789/validate",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    verificationCode: "123456"
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
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "validated",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
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
  "error": "Invalid verification code",
  "code": "INVALID_CODE"
}
```

```json
{
  "success": false,
  "error": "Verification code expired",
  "code": "CODE_EXPIRED"
}
```

```json
{
  "success": false,
  "error": "Maximum attempts exceeded",
  "code": "MAX_ATTEMPTS_EXCEEDED"
}
```
