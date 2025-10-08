---
id: list-all-credit-records
title: List All Credit Records
description: Retrieve a list of all credit records with optional filtering and pagination
---

# List All Credit Records

**GET** `https://api.verifik.co/v2/credits`

Retrieve a list of Credit records in Verifik's system. This endpoint returns an array of credit objects, each containing detailed information about credit transactions, balances, and associated client accounts.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Query Parameters

| Parameter     | Type   | Description                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `page`        | number | Specifies the page number for pagination, starting from 1.                                    |
| `perPage`     | number | Defines the number of items per page for pagination.                                          |
| `populates[]` | string | Populates the specified field, transforming ObjectId references into full objects. Available options: `client`, `superAdmin` |
| `where_status` | string | Where condition to filter by status. Options: `approved`, `pending`, `failed`, `postPaid` |
| `where_category` | string | Where condition to filter by category. Options: `purchase`, `usage` |
| `where_client` | string | Filter by specific client ID |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/credits",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 20,
    "populates[]": ["client"],
    where_status: "approved",
    where_category: "purchase"
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
  "data": [
    {
      "_id": "credit_123456789",
      "amount": 1000,
      "status": "approved",
      "category": "purchase",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "description": "Credit purchase for API usage",
      "transactionId": "txn_123456789",
      "paymentMethod": "credit_card",
      "currency": "USD",
      "exchangeRate": 1.0,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 1,
    "pages": 1
  }
}
```

## Error Responses

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```
