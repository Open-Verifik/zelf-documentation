---
id: brazil
title: Brazil
description: Conduct background checks on Brazilian individuals using CPF
---

# Brazil

## Endpoint

```
https://api.verifik.co/v2/br/background-check
```

The Brazil Background service provides detailed information about Brazilian individuals. When making a query, the response includes relevant data such as associated names, ability to issue reports, certification number, document number, document type, first name, full name, last name, and a base64-encoded PDF file.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

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
  url: 'https://api.verifik.co/v2/br/background-check',
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
    "certificationNumber": "123456789",
    "canIssueReports": true,
    "associatedNames": ["João Silva Santos"],
    "pdfReport": "base64_encoded_pdf_content",
    "status": "clear"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Person not found",
  "code": "PERSON_NOT_FOUND"
}
```

## Use Cases

- **Employment Screening**: Verify candidate background for hiring
- **Due Diligence**: Conduct background checks for business partnerships
- **Compliance**: Meet regulatory requirements for KYC processes
- **Security**: Verify individuals for access to sensitive areas
- **Fraud Prevention**: Detect potential fraudulent activities
