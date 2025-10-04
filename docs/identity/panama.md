---
id: panama
title: Panama
description: Verify Panamanian citizen identities using CCPA (Cédula de Identidad Personal)
---

# Panama

## Endpoint

```
https://api.verifik.co/v2/pa/cedula
```

Validate identity documents for both Panamanian citizens and permanent residents using the Cédula de Identidad Personal. This API endpoint provides accurate and reliable data, including the document number, full name, first name, last name, and an array of name components. With broad applicability, it supports a wide range of identity verification needs in Panama.

### Key Use Case
Ideal for businesses and organizations conducting identity verification for Panamanian citizens and permanent residents, such as for KYC processes, financial services, or legal compliance.

### Important Notes

* This service validates the Cédula de Identidad Personal for both Panamanian citizens and permanent residents. For other document types or nationalities, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities. The data provided is subject to Panamanian privacy laws and should be handled responsibly.
* Always cross-check with the physical document to confirm the information retrieved.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required | Description                                    | Example      |
| -------------- | ------ | -------- | ---------------------------------------------- | ------------ |
| documentType   | String | True     | Document type. Allowed value: CCPA.           | `CCPA`       |
| documentNumber | String | True     | Document number of the person to be queried.  | `123456789`  |
| dateOfBirth    | String | True     | Date of birth of the owner of the document. in the following format DD/MM/YYYY | `02/03/1992` |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pa/cedula',
  params: {
    documentType: 'CCPA',
    documentNumber: '123456789',
    dateOfBirth: '02/03/1992'
  },
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
    "documentType": "CCPA",
    "documentNumber": "123456789",
    "firstName": "Roberto",
    "lastName": "Martínez",
    "fullName": "Roberto Martínez",
    "dateOfBirth": "02/03/1992",
    "status": "valid"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

## Use Cases

- **Government Services**: Verify citizen identity for public services
- **Financial Services**: KYC compliance for banking and financial institutions
- **Employment Verification**: Validate employee identity documents
- **Tourism Services**: Verify identity for travel and hospitality services
