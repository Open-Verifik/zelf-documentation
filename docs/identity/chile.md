---
id: chile
title: Chile
description: Verify Chilean citizen identities using RUN (National Unique Role)
---

# Chile

## Endpoint

```
https://api.verifik.co/v2/cl/cedula
```

This service allows you to verify the authenticity of the Chilean RUN (National Unique Role) document. Simply enter the RUN number, and you will receive a response with the full name, first name, last name, and name array of the cardholder, along with the verification signature.

This service can be used by companies or individuals to ensure the validity of the Chilean RUN for various purposes, such as employment, financial transactions, or legal requirements.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Allowed parameter: RUN.       | `RUN`        |
| documentNumber | String | True      | Document number of the person to consult without spaces. | `212957739`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/cedula',
  params: {documentType: 'RUN', documentNumber: '212957739'},
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
    "documentType": "RUN",
    "documentNumber": "212957739",
    "firstName": "Carlos",
    "lastName": "Rodríguez",
    "fullName": "Carlos Rodríguez",
    "status": "valid"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid RUN number",
  "code": "INVALID_RUN"
}
```

## Use Cases

- **Employment Verification**: Validate employee identity documents
- **Financial Services**: KYC compliance for banking and financial institutions
- **Government Services**: Verify citizen identity for public services
- **E-commerce**: Prevent fraud in online transactions
