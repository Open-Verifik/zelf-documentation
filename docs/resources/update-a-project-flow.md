---
id: update-a-project-flow
title: Update a Project Flow
description: Update an existing project flow configuration
---

# Update a Project Flow

**PUT** `https://api.verifik.co/v2/project-flows/{id}`

This endpoint allows you to update an existing project flow configuration. You can modify the flow steps, configuration settings, and other flow-specific parameters.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the project flow to update.            |

## Body

| Name            | Type   | Required | Description                                                                                    |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| `name`          | string | No       | Name of the project flow for identification purposes.                                        |
| `description`   | string | No       | Description of the project flow and its purpose.                                              |
| `status`        | string | No       | Status of the project flow: `draft`, `active`, `paused`                                       |
| `configuration` | object | No       | Configuration object containing flow-specific settings.                                      |
| `steps`         | array  | No       | Array of steps that define the flow sequence.                                                 |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "put",
  url: "https://api.verifik.co/v2/project-flows/project_flow_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    name: "Updated Onboarding Flow",
    description: "Updated description for the onboarding flow",
    status: "active",
    configuration: {
      emailVerification: {
        enabled: true,
        required: true,
        method: "verificationCode"
      },
      phoneVerification: {
        enabled: true,
        required: true,
        method: "sms"
      },
      biometricVerification: {
        enabled: true,
        required: true,
        livenessDetection: true,
        antiSpoofing: true
      }
    }
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
    "_id": "project_flow_123456789",
    "project": "project_123456789",
    "type": "onboarding",
    "status": "active",
    "version": 1,
    "name": "Updated Onboarding Flow",
    "description": "Updated description for the onboarding flow",
    "configuration": {
      "emailVerification": {
        "enabled": true,
        "required": true,
        "method": "verificationCode"
      },
      "phoneVerification": {
        "enabled": true,
        "required": true,
        "method": "sms"
      },
      "biometricVerification": {
        "enabled": true,
        "required": true,
        "livenessDetection": true,
        "antiSpoofing": true
      }
    },
    "steps": [
      {
        "stepType": "email",
        "order": 1,
        "required": true,
        "config": {
          "verificationMethod": "verificationCode"
        }
      },
      {
        "stepType": "phone",
        "order": 2,
        "required": true,
        "config": {
          "verificationMethod": "sms"
        }
      },
      {
        "stepType": "biometric",
        "order": 3,
        "required": true,
        "config": {
          "livenessDetection": true
        }
      }
    ],
    "client": "client_123456789",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:35:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Project flow not found",
  "message": "PROJECT_FLOW_NOT_FOUND"
}
```

```json
{
  "error": "Invalid configuration",
  "message": "INVALID_CONFIGURATION"
}
```
