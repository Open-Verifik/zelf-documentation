---
id: mexico
title: Mexico
description: Verify Mexican companies using FME (Folio Mercantil Electrónico)
---

# Mexico

## Endpoint

```
https://api.verifik.co/v2/mx/company
```

The Mexican Company Information service allows you to retrieve essential details about registered companies in Mexico. This service provides access to information such as the business name and city. It is a valuable resource for obtaining crucial data on Mexican companies for various purposes, including verification and research.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Valid parameter: FME.          | `FME`        |
| documentNumber | String | True      | Document of the Company to consult, without spaces or periods. | `N-2021007300` |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/mx/company',
  params: {documentType: 'FME', documentNumber: 'N-2021007300'},
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
    "documentType": "FME",
    "documentNumber": "N-2021007300",
    "companyName": "Empresa Ejemplo S.A. de C.V.",
    "city": "Ciudad de México",
    "state": "CDMX",
    "status": "active",
    "registrationDate": "15/03/2020",
    "legalRepresentative": "María González",
    "businessActivity": "Comercio al por mayor"
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
- **Government Contracts**: Verify contractor legitimacy
- **Investment Research**: Analyze potential investment targets
- **Cross-border Business**: Verify Mexican business partners
