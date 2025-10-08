---
id: retrieve-a-credit-record
title: Retrieve a Credit Record
description: Retrieve a specific credit record using its unique identifier
---

# Retrieve a Credit Record

**GET** `https://api.verifik.co/v2/credits/{id}`

Retrieve a specific credit record by its unique identifier. This endpoint returns detailed information about a single credit transaction including its status, amount, and associated client information.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the credit record you want to retrieve. |

## Query Parameters

| Name          | Type  | Description                                                                                    |
| ------------- | ----- | ---------------------------------------------------------------------------------------------- |
| `populates[]` | array | Optional array of related data to include. Available options: `client`, `superAdmin`. |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/credits/credit_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["client", "superAdmin"]
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
    "_id": "credit_123456789",
    "amount": 1000,
    "status": "approved",
    "category": "purchase",
    "client": {
      "_id": "client_123456789",
      "name": "Example Client",
      "email": "client@example.com"
    },
    "superAdmin": {
      "_id": "admin_123456789",
      "name": "Admin User",
      "email": "admin@verifik.co"
    },
    "description": "Credit purchase for API usage",
    "transactionId": "txn_123456789",
    "paymentMethod": "credit_card",
    "currency": "USD",
    "exchangeRate": 1.0,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Credit record not found",
  "message": "CREDIT_RECORD_NOT_FOUND"
}
```

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
