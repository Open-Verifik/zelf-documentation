---
id: app-logins
title: App Logins
description: Manage user login sessions and authentication flows
---

# App Logins

App Logins are individual user sessions within Verifik's system that allow people to go through the **authentication and access process** you've configured in your Project Flow. Think of them as the actual user journey through your login system.

## How App Logins Work

Every App Login represents a single user's attempt to **authenticate and access your system** using your configured Project Flow. When someone wants to **log into your system**, Verifik creates an App Login to track their progress through the authentication steps.

Currently, App Logins are designed for:

* **login** - For existing users to access your system

## What App Logins Track

App Logins are comprehensive tracking systems for user authentication processes:

### User Progress:
* Login form completion
* Authentication method verification (OTP, biometric, etc.)
* Access control validation
* Security check results

### Security Monitoring:
* Failed login attempts
* Suspicious activity detection
* Access control enforcement
* Authentication method validation

## API Endpoints

### Create an App Login
```http
POST https://api.verifik.co/v2/app-logins
```

### List All App Logins
```http
GET https://api.verifik.co/v2/app-logins
```

### Retrieve an App Login
```http
GET https://api.verifik.co/v2/app-logins/{loginId}
```

## App Login Object Structure

```json
{
  "id": "login_123456789",
  "userId": "user_123456789",
  "projectId": "proj_123456789",
  "flowId": "flow_123456789",
  "status": "completed",
  "authenticationMethod": "biometric",
  "steps": [
    {
      "type": "otp_verification",
      "status": "completed",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "type": "biometric_verification",
      "status": "completed",
      "timestamp": "2024-01-15T10:32:00Z"
    }
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

## Use Cases

- **Secure Access**: Manage user authentication for system access
- **Multi-factor Authentication**: Implement OTP and biometric verification
- **Access Control**: Enforce security policies and user permissions
- **Audit Trail**: Track user login activities for compliance
