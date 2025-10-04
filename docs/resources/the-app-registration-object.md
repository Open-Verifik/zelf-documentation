---
id: the-app-registration-object
title: The App Registration Object
description: The App Registration object represents user registration processes within your Verifik projects
---

# The App Registration Object

The App Registration object represents user registration processes within your Verifik projects. This object contains all the information needed to track and manage user registration requests and their associated validation processes.

## Attributes

**`client`** - ObjectId - Required

The client associated with this registration.

**`project`** - ObjectId - Required

The project this registration belongs to.

**`projectFlow`** - ObjectId - Required

The specific flow configuration for this registration.

**`smartLink`** - ObjectId - Optional

A single-use link for this registration.

**`status`** - String - Required

The current status of the registration process. Can be:

* `"new"` - Registration request created but not yet processed (default)
* `"pending"` - Registration is in progress
* `"completed"` - Registration completed successfully
* `"failed"` - Registration failed
* `"expired"` - Registration session has expired

**`email`** - String - Optional

The email address for the user to be registered. Either `email` or `phone` is required.

**`phone`** - String - Optional

The phone number for the user to be registered. Either `email` or `phone` is required.

**`countryCode`** - String - Optional

The country code associated with the phone number. Required if `phone` is provided. Format: `+123`

**`fullName`** - String - Required

The full name of the person being registered.

**`language`** - String - Optional

The preferred language for communication during the registration process. Default: `"en"`

**`token`** - String - Required

Authentication token generated for this registration session. This token is used for creating related validations.

**`emailValidation`** - ObjectId - Optional

Reference to the Email Validation object if email validation was performed.

**`phoneValidation`** - ObjectId - Optional

Reference to the Phone Validation object if phone validation was performed.

**`biometricValidation`** - ObjectId - Optional

Reference to the Biometric Validation object if biometric validation was performed.

**`documentValidation`** - ObjectId - Optional

Reference to the Document Validation object if document validation was performed.

**`ipAddress`** - String - Optional

IP address of the user performing the registration.

**`userAgent`** - String - Optional

User agent string from the registration request.

**`expiresAt`** - Date - Optional

Expiration date and time for the registration session.

**`createdAt`** - Date - Required

Timestamp when the app registration was created.

**`updatedAt`** - Date - Required

Timestamp when the app registration was last updated.

**`completedAt`** - Date - Optional

Timestamp when the registration was completed successfully.

## Example Object

```json
{
  "_id": "app_registration_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "smartLink": "smart_link_123456789",
  "status": "completed",
  "email": "user@example.com",
  "phone": "1234567890",
  "countryCode": "+1",
  "fullName": "John Doe",
  "language": "en",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "emailValidation": "email_validation_123456789",
  "phoneValidation": "phone_validation_123456789",
  "biometricValidation": "biometric_validation_123456789",
  "documentValidation": "document_validation_123456789",
  "ipAddress": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "expiresAt": "2024-01-15T11:30:00Z",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```
