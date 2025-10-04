---
id: compare
title: Face Comparison
description: Compare two faces to verify identity
---

# Face Comparison

Face comparison (1:1 verification) compares two facial images to determine if they belong to the same person.

## Overview

Our face comparison API uses state-of-the-art facial recognition technology to compare two images and provide a similarity score indicating the likelihood that both images show the same person.

## API Endpoint

```http
POST https://api.verifik.co/v2/biometric/compare
```

## Request Parameters

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| image1    | File   | Yes      | First image to compare         |
| image2    | File   | Yes      | Second image to compare        |
| threshold | Number | No       | Similarity threshold (default: 0.85) |

## Response

```json
{
  "success": true,
  "data": {
    "isMatch": true,
    "confidence": 0.92,
    "score": 0.92
  }
}
```

## Use Cases

- **Identity Verification**: Compare ID photo with selfie
- **Access Control**: Verify user against stored photo
- **Document Verification**: Match document photo with live capture
