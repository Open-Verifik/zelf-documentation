---
id: costa-rica
title: Costa Rica
description: Verify Costa Rican citizen identities using CCCR (Cédula de Ciudadanía)
---

# Costa Rica

## Endpoint

```
https://api.verifik.co/v2/cr/cedula
```

This service allows you to verify the authenticity of a Costa Rican National ID card (Cédula) by providing the document number. The response includes the cardholder's full name, along with their first and last names separately.

This service is useful for confirming the validity of a Costa Rican National ID for various purposes, such as identity verification and background checks.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Allowed parameter: CCCR.      | `CCCR`       |
| documentNumber | String | True      | Document number of the person to consult without spaces. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cr/cedula',
  params: {documentType: 'CCCR', documentNumber: '123456789'},
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
    "documentType": "CCCR",
    "documentNumber": "123456789",
    "firstName": "Ana",
    "lastName": "Rodríguez",
    "fullName": "Ana Rodríguez",
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
