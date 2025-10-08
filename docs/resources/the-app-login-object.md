---
id: the-app-login-object
title: The App Login Object
description: The App Login object represents login sessions within your Verifik projects
---

# The App Login Object

The App Login object represents login sessions within your Verifik projects. This object contains all the information needed to track and manage user login attempts and authentication processes.

## Attributes

**`client`** - ObjectId - Required

Client ID associated with this login request. It must be defined properly, as this links the login to a specific client.

**`name`** - String - Optional

Optional name for the login session.

**`status`** - String - Optional

Optional status of the login request (e.g., pending, completed, failed).

**`project`** - ObjectId - Required

Project ID linked to this login request. It must be defined, as this links the login to a specific project.

**`projectFlow`** - ObjectId - Required

ProjectFlow ID that defines the flow configuration for this login. This is a required field.

**`type`** - String - Required

The type of login being performed:

* `"email"` - Email-based login
* `"phone"` - Phone-based login
* `"biometric"` - Biometric-based login

**`emailValidation`** - ObjectId - Optional

Reference to the Email Validation object if login was performed via email.

**`phoneValidation`** - ObjectId - Optional

Reference to the Phone Validation object if login was performed via phone.

**`biometricValidation`** - ObjectId - Optional

Reference to the Biometric Validation object if login was performed via biometric.

**`identifier`** - String - Required

A unique identifier for the user (e.g., email, phone number).

**`ipAddress`** - String - Optional

IP address of the user performing the login.

**`userAgent`** - String - Optional

User agent string from the login request.

**`expiresAt`** - Date - Optional

Expiration date and time for the login session.

**`token`** - String - Optional

Authentication token generated for this login session.

**`createdAt`** - Date - Required

Timestamp when the app login was created.

**`updatedAt`** - Date - Required

Timestamp when the app login was last updated.

**`completedAt`** - Date - Optional

Timestamp when the login was completed successfully.

## Example Object

```json
{
  "_id": "app_login_123456789",
  "client": "client_123456789",
  "name": "User Login Session",
  "status": "completed",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "type": "email",
  "emailValidation": "email_validation_123456789",
  "identifier": "user@example.com",
  "ipAddress": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "expiresAt": "2024-01-15T11:30:00Z",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```
