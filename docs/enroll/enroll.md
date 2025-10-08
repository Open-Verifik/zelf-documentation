---
id: enroll
title: Enroll
description: This solution includes everything that SmartEnroll does but on the API level
---

# Enroll

This solution includes everything that SmartEnroll does but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Overview

The Enroll API provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Key Features

- **Document Verification API**: Validate government-issued IDs and documents
- **Biometric Registration API**: Face recognition and liveness detection for enrollment
- **Background Check API**: Criminal records and watchlist verification
- **Database Integration**: Connect with your existing user database
- **Webhook Support**: Real-time notifications for enrollment events
- **Custom Branding**: Maintain your brand identity throughout the process

## Getting Started

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Base URL

```
https://api.verifik.co/v2/enroll
```

## API Endpoints

### Document Verification

#### Scan Document
```http
POST /documents/scan
```

#### Validate Document
```http
POST /documents/validate
```

#### Extract Data
```http
POST /documents/extract
```

### Biometric Registration

#### Register Face
```http
POST /biometric/register
```

#### Verify Face
```http
POST /biometric/verify
```

#### Liveness Check
```http
POST /biometric/liveness
```

### Background Checks

#### Criminal Record Check
```http
POST /background/criminal-check
```

#### Watchlist Check
```http
POST /background/watchlist-check
```

### User Management

#### Create User
```http
POST /users/create
```

#### Update User
```http
PUT /users/{userId}
```

#### Get User Status
```http
GET /users/{userId}/status
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

- **Document Verification**: 20 requests per minute per user
- **Biometric Registration**: 10 requests per minute per user
- **Background Checks**: 5 requests per minute per user

## Support

For technical support and API documentation, contact our support team or visit our developer portal.
