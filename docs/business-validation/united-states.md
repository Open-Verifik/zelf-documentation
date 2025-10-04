---
id: united-states
title: United States
description: Verify US companies using business name search
---

# United States

## Endpoint

```
https://api.verifik.co/v2/usa/company
```

This service provides detailed information about a U.S.-based company specified by the business name. It includes comprehensive data such as addresses, company identification details, stock exchange listings, and historical names. This service is ideal for conducting corporate research or verifying business information.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Request Body

| Name     | Type   | Required? | Description                                    | Example      |
| -------- | ------ | --------- | ---------------------------------------------- | ------------ |
| business | String | True      | Name of the company, you can send the partial name or the full name. | `APPLE INC`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/usa/company',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    business: 'APPLE INC'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Response

```json
{
  "success": true,
  "data": {
    "companyName": "Apple Inc.",
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "address": {
      "street": "One Apple Park Way",
      "city": "Cupertino",
      "state": "CA",
      "zipCode": "95014",
      "country": "United States"
    },
    "businessType": "Public Company",
    "industry": "Technology",
    "founded": "1976",
    "status": "active",
    "legalRepresentative": "Tim Cook",
    "website": "https://www.apple.com"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Company not found",
  "code": "COMPANY_NOT_FOUND"
}
```

## Use Cases

- **Due Diligence**: Verify business partners and suppliers
- **KYC/KYB Compliance**: Validate business entities for financial services
- **Investment Research**: Analyze potential investment targets
- **Corporate Research**: Gather comprehensive company information
- **Regulatory Compliance**: Verify business registration status
