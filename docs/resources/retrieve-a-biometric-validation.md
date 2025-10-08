---
id: retrieve-a-biometric-validation
title: Retrieve a Biometric Validation
description: Retrieve a specific biometric validation record using its unique identifier
---

# Retrieve a Biometric Validation

**GET** `https://api.verifik.co/v2/biometric-validations/{id}`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint retrieves a specific biometric validation record by its unique identifier, including all associated data and relationships.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                    |
| ---- | ------ | -------- | ---------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the biometric validation to retrieve. |

## Query Parameters

### Basic Query Parameters

| Parameter    | Type  | Description                        | Example                                    |
| ------------ | ----- | ---------------------------------- | ------------------------------------------ |
| `populates[]` | array | Fields to populate with related data. | `populates[]=client&populates[]=project` |

### Advanced Query Parameters

| Parameter | Type   | Description                                                                 | Example           |
| --------- | ------ | --------------------------------------------------------------------------- | ----------------- |
| `sort`    | string | Sort order for results. Prefix with `-` for descending.                   | `sort=-createdAt` |
| `limit`   | number | Maximum number of results to return.                                       | `limit=10`        |

### Filter Query Parameters

| Parameter              | Type   | Description              | Example                                    |
| ---------------------- | ------ | ------------------------ | ------------------------------------------ |
| `where_client`         | string | Filter by client ID.     | `where_client=507f1f77bcf86cd799439013`    |
| `where_project`        | string | Filter by project ID.    | `where_project=507f1f77bcf86cd799439011`   |
| `where_projectFlow`    | string | Filter by project flow ID. | `where_projectFlow=507f1f77bcf86cd799439015` |
| `where_status`         | string | Filter by validation status. | `where_status=validated`               |
| `where_type`           | string | Filter by validation type. | `where_type=login`                     |
| `where_livenessSession` | string | Filter by liveness session ID. | `where_livenessSession=674de8df21c72be3cc42b8a7` |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["client", "project", "projectFlow"],
    "sort": "-createdAt",
    "limit": 10
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
    "livenessSession": "liveness_123456789",
    "appRegistration": "reg_123456789",
    "status": "completed",
    "identifier": "user@example.com",
    "type": "validation",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en",
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
      "quality": "good",
      "livenessScore": 0.95
    },
    "verificationResults": {
      "livenessDetection": "passed",
      "identityMatch": "passed",
      "qualityScore": 0.95,
      "antiSpoofing": "passed"
    },
    "riskScore": 0.05,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Biometric validation not found",
  "code": "BIOMETRIC_VALIDATION_NOT_FOUND"
}
```
