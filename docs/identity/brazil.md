---
id: brazil
title: Brazil
description: Verify Brazilian citizen identities using CPF (Cadastro de Pessoas Físicas)
---

# Brazil

## Endpoint

```
https://api.verifik.co/v2/br/cedula
```

The Brazilian citizen information service allows users to verify the validity of Brazilian CPF (Cadastro de Pessoas Físicas) numbers. The service returns a response that includes the document type, document number, full name, first name, last name, and an array with the individual's first and last names.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Valid parameter: CPF.          | `CPF`        |
| documentNumber | String | True      | Document number of the person to consult.     | `123456789`  |
| dateOfBirth    | String | True      | Date of birth of the person to consult, valid format: dd/mm/yyyy. | `20/05/2022` |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/cedula',
  params: {
    documentType: 'CPF',
    documentNumber: '012.345.678-01',
    dateOfBirth: '17/02/2002'
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
    "documentType": "CPF",
    "documentNumber": "012.345.678-01",
    "firstName": "João",
    "lastName": "Silva",
    "fullName": "João Silva",
    "dateOfBirth": "17/02/2002",
    "status": "valid"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid CPF number",
  "code": "INVALID_CPF"
}
```

## Use Cases

- **KYC/AML Compliance**: Verify customer identity for financial services
- **Employment Verification**: Validate employee identity documents
- **E-commerce**: Prevent fraud in online transactions
- **Government Services**: Verify citizen identity for public services
