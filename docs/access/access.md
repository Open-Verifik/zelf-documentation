---
id: access
title: Access
description: Everything that Smart Access has to offer but on the API level
---

# Access

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Overview

The Access API provides programmatic access to all SmartAccess functionality, allowing you to build custom authentication flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate authentication into their existing applications.

## Key Features

- **Email Verification API**: Send and verify OTP codes via email
- **Phone Verification API**: Send and verify OTP codes via SMS and WhatsApp
- **Biometric Authentication API**: Face recognition and liveness detection
- **Database Integration**: Connect with your existing user database
- **Webhook Support**: Real-time notifications for authentication events
- **Custom Branding**: Maintain your brand identity throughout the process

## Getting Started

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Base URL

```
https://api.verifik.co/v2/access
```

## API Endpoints

### Email Verification

#### Send OTP
```http
POST /email/send-otp
```

#### Verify OTP
```http
POST /email/verify-otp
```

### Phone Verification

#### Send SMS OTP
```http
POST /phone/send-sms
```

#### Send WhatsApp OTP
```http
POST /phone/send-whatsapp
```

#### Verify Phone OTP
```http
POST /phone/verify-otp
```

### Biometric Authentication

#### Register Face
```http
POST /biometric/register-face
```

#### Verify Face
```http
POST /biometric/verify-face
```

#### Liveness Check
```http
POST /biometric/liveness-check
```

## Response Format

All API responses follow a consistent format:

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation completed successfully"
}
```

## Error Handling

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Rate Limits

- **Email OTP**: 5 requests per minute per email
- **Phone OTP**: 3 requests per minute per phone number
- **Biometric**: 10 requests per minute per user

## Support

For technical support and API documentation, contact our support team or visit our developer portal.
