---
id: the-app-login-object
title: The App Login Object
description: The App Login object represents user authentication sessions
slug: /resources/the-app-login-object
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# The App Login Object

### **Attributes**

***

**client** - `ObjectId` - Required\
Client ID associated with this login request. It must be defined properly, as this links the login to a specific client.

***

**name** - `String` - Optional\
Optional name for the login session.

***

**status** - `String` - Optional\
Optional status of the login request (e.g., pending, completed, failed).

***

**project** - `ObjectId` - Required\
Project ID linked to this login request. It must be defined, as this links the login to a specific project.

***

**projectFlow** - `ObjectId` - Required\
ProjectFlow ID that defines the flow configuration for this login. This is a required field.

***

**type** - `String` - Required\
Type of login being attempted. This must be one of the following values:

* `email`
* `phone`
* `faceLiveness`

***

**emailValidation** - `ObjectId` - Optional\
Reference to the EmailValidation object if an email-based login is used.

***

**phoneValidation** - `ObjectId` - Optional\
Reference to the PhoneValidation object if a phone-based login is used.

***

**biometricValidation** - `ObjectId` - Optional\
Reference to the BiometricValidation object if a biometric login is used.

***

**face** - `ObjectId` - Optional\
Reference to the IdentityImage object, used for facial recognition or liveness checks.

***

**accessControlLog** - `ObjectId` - Optional\
Reference to the AccessControlLog object, used to log access control actions related to this login.

***

### AppLogin Object Example

```json
{
  "client": "5f43a1b5e4b0d51d5b6f3e57",
  "name": "Login for Project A",
  "status": "completed",
  "project": "5f43a1b5e4b0d51d5b6f3e58",
  "projectFlow": "5f43a1b5e4b0d51d5b6f3e59",
  "type": "email",
  "emailValidation": "5f43a1b5e4b0d51d5b6f3e60",
  "phoneValidation": null,
  "biometricValidation": null,
  "face": null,
  "accessControlLog": "5f43a1b5e4b0d51d5b6f3e61"
}
```

### Features

- **Client Association**: Links app logins to specific clients
- **Project Integration**: Connected to specific projects and project flows
- **Multiple Validation Types**: Support for email, phone, and biometric authentication
- **Validation References**: Links to specific validation objects
- **Access Control Logging**: Tracks access control actions for security
- **Status Tracking**: Monitors login attempt status (pending, completed, failed)