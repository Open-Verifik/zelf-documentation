---
id: liveness
title: Liveness Detection
description: Detect if a face is live or from a static image/video
---

# Liveness Detection

Liveness detection is a biometric security feature that determines whether a face in an image or video stream is from a live person or from a static image, video, or other spoofing attempt.

## Overview

Our liveness detection API uses advanced computer vision algorithms to analyze facial movements, texture, and other biometric characteristics to ensure that the person being verified is physically present.

## API Endpoint

```http
POST https://api.verifik.co/v2/biometric/liveness
```

## Request Parameters

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| image     | File   | Yes      | Image file to analyze          |
| threshold | Number | No       | Liveness threshold (default: 0.5) |

## Response

```json
{
  "success": true,
  "data": {
    "isLive": true,
    "confidence": 0.95,
    "score": 0.95
  }
}
```

## Use Cases

- **Authentication**: Ensure users are physically present during login
- **KYC/Onboarding**: Verify identity during account creation
- **Fraud Prevention**: Prevent spoofing attacks using photos or videos
