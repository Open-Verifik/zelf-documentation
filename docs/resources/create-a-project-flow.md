---
id: create-a-project-flow
title: Create a Project Flow
description: Create a new project flow configuration
---

# Create a Project Flow

**POST** `https://api.verifik.co/v2/project-flows`

Project Flows define configurations for a Project in Verifik. In this context, we will define various data points that Verifik will use to perform validations using passwordless and liveness detection technologies.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Body

| Name            | Type   | Required | Description                                                                                    |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| `project`       | string | **Yes**  | The unique identifier of the project this flow belongs to.                                    |
| `type`          | string | **Yes**  | Type of flow: `login` or `onboarding`.                                                         |
| `name`          | string | **Yes**  | Name of the project flow for identification purposes.                                        |
| `description`   | string | No       | Description of the project flow and its purpose.                                              |
| `configuration` | object | **Yes**  | Configuration object containing flow-specific settings.                                      |
| `steps`         | array  | **Yes**  | Array of steps that define the flow sequence.                                                 |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/project-flows",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    type: "onboarding",
    name: "Complete Onboarding Flow",
    description: "Full onboarding flow with email, phone, and biometric verification",
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
        livenessDetection: true
      }
    },
    steps: [
      {
        stepType: "email",
        order: 1,
        required: true,
        config: {
          verificationMethod: "verificationCode"
        }
      },
      {
        stepType: "phone",
        order: 2,
        required: true,
        config: {
          verificationMethod: "sms"
        }
      },
      {
        stepType: "biometric",
        order: 3,
        required: true,
        config: {
          livenessDetection: true
        }
      }
    ]
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
    "status": "draft",
    "version": 1,
    "name": "Complete Onboarding Flow",
    "description": "Full onboarding flow with email, phone, and biometric verification",
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
        "livenessDetection": true
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
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Invalid project ID",
  "message": "INVALID_PROJECT_ID"
}
```

```json
{
  "error": "Invalid flow type",
  "message": "INVALID_FLOW_TYPE"
}
```
