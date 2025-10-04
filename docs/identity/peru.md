---
id: peru
title: Peru
description: Verify Peruvian citizen identities using DNI (Documento Nacional de Identidad)
---

# Peru

## Endpoint

```
https://api.verifik.co/v2/pe/cedula
```

The Peruvian Citizen ID Verification service allows you to verify the identity of a citizen in Peru using their DNI ID number. This service returns personal information, such as full name, date of birth, and some other basic details that is used to verify the identity of someone in Peru.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Allowed value: DNI.           | `DNI`        |
| documentNumber | String | True      | Document number of the person to be queried.  | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/cedula',
  params: {documentType: 'DNI', documentNumber: '123456789'},
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
    "documentType": "DNI",
    "documentNumber": "123456789",
    "firstName": "Carlos",
    "lastName": "Mendoza",
    "fullName": "Carlos Mendoza",
    "dateOfBirth": "10/08/1985",
    "status": "valid"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid DNI number",
  "code": "INVALID_DNI"
}
```

## Use Cases

- **Government Services**: Verify citizen identity for public services
- **Financial Services**: KYC compliance for banking and financial institutions
- **Employment Verification**: Validate employee identity documents
- **Healthcare**: Verify patient identity in medical services
- **E-commerce**: Prevent fraud in online transactions
