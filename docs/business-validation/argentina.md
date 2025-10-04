---
id: argentina
title: Argentina
description: Verify Argentine companies using CUIT (Unique Tax Identification Code)
---

# Argentina

## Endpoint

```
https://api.verifik.co/v2/ar/company
```

The Argentine Companies Information service provides detailed information about companies registered in Argentina.

Users can query the service using the type and number of the company's document, such as CUIT (Unique Tax Identification Code), along with its corresponding number.

The response includes essential details such as the CUIT number, trade name, legal form, and the date of the articles of association. Additionally, the service provides information about the company's economic activities, including primary and secondary activities, along with their start dates.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Allowed value: CUIT.          | `CUIT`       |
| documentNumber | String | True      | Document number of the company to be queried, without spaces or dots, and must be 11 digits. | `33516727409` |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/company',
  params: {documentType: 'CUIT', documentNumber: '33516727409'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
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
    "documentType": "CUIT",
    "documentNumber": "33516727409",
    "tradeName": "Empresa Ejemplo S.A.",
    "legalForm": "Sociedad Anónima",
    "cuit": "33-51672740-9",
    "articlesOfAssociationDate": "15/03/2020",
    "primaryActivity": "Comercio al por mayor",
    "secondaryActivities": ["Servicios de consultoría"],
    "status": "active"
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
- **Supply Chain Verification**: Confirm supplier legitimacy
- **Investment Research**: Analyze potential investment targets
