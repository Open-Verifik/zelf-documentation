---
id: validate-an-app-login-biometric-validation
title: Validate an App Login Biometric Validation
description: Process biometric data submitted by users to verify their identity and complete the validation process
---

# Validate an App Login Biometric Validation

**POST** `https://api.verifik.co/v2/biometric-validations/validate`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint processes the biometric data submitted by users to verify their identity and complete the validation process. This is typically used after a user has completed their liveness detection session.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
The JWT Token you should use when validating biometric validations must contain a valid `livenessSession` token that was provided during the creation of the biometric validation.

The token provided in this response is the token you can pass to your own application for signing into your application. In the no-code solution, this token is appended to the `redirectUrl` of your `projectFlow`.

E.g., `https://verifik.co?token={token}`
:::

## Body

| Name    | Type   | Required | Description                                                      |
| ------- | ------ | -------- | ---------------------------------------------------------------- |
| `image` | string | **Yes**  | Base64 encoded image of the user's face for biometric validation. |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/biometric-validations/validate",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    image: "base64_encoded_image_data"
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
    "_id": "biometric_validation_123456789",
    "status": "completed",
    "verificationResults": {
      "livenessDetection": "passed",
      "identityMatch": "passed",
      "qualityScore": 0.95,
      "antiSpoofing": "passed"
    },
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
      "quality": "good",
      "livenessScore": 0.95
    },
    "riskScore": 0.05,
    "completedAt": "2024-01-15T10:32:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## Error Responses

```json
{
  "error": "Invalid biometric data",
  "message": "INVALID_BIOMETRIC_DATA"
}
```

```json
{
  "error": "Liveness detection failed",
  "message": "LIVENESS_DETECTION_FAILED"
}
```

```json
{
  "error": "Identity verification failed",
  "message": "IDENTITY_VERIFICATION_FAILED"
}
```

## Important Notes

* **Image Quality**: Ensure the submitted image is clear and well-lit for optimal validation results.
* **Liveness Session**: The JWT token must contain a valid liveness session token.
* **Response Token**: The token in the response can be used for application authentication.
