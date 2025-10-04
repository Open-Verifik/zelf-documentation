---
id: search
title: Face Search
description: Search for a face in a database of enrolled users
---

# Face Search

Face search (1:N identification) searches for a face in a database of enrolled users to find potential matches.

## Overview

Our face search API allows you to search for a face within a database of enrolled users, returning potential matches ranked by similarity score.

## API Endpoint

```http
POST https://api.verifik.co/v2/biometric/search
```

## Request Parameters

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| image     | File   | Yes      | Image to search for            |
| threshold | Number | No       | Similarity threshold (default: 0.85) |
| limit     | Number | No       | Maximum number of results (default: 10) |

## Response

```json
{
  "success": true,
  "data": {
    "matches": [
      {
        "userId": "user123",
        "confidence": 0.95,
        "score": 0.95
      }
    ],
    "totalMatches": 1
  }
}
```

## Use Cases

- **Duplicate Detection**: Find if user is already enrolled
- **Access Control**: Identify users without explicit login
- **Security Monitoring**: Detect unauthorized access attempts
