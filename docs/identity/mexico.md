---
id: mexico
title: Mexico
description: Verify Mexican citizen identities using CURP (Clave Única de Registro de Población)
---

# Mexico

## Endpoint

```
https://api.verifik.co/v2/mx/curp
```

The CURP service allows you to easily verify the identity of Mexican citizens by their CURP number. With this service, you can obtain important personal information such as the full name, date of birth, nationality, and document proof for a given CURP number.

The returned data also includes details about the place of registration and other relevant information, making it an essential tool for identity verification and fraud prevention purposes.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Valid parameter: CURP.        | `CURP`       |
| documentNumber | String | True      | Document of the person to consult, without spaces or periods. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/mx/curp',
  params: {documentNumber: 'ABCD890513ABCDEF09', documentType: 'CURP'},
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
    "documentType": "CURP",
    "documentNumber": "ABCD890513ABCDEF09",
    "firstName": "Juan",
    "lastName": "Pérez",
    "fullName": "Juan Pérez",
    "dateOfBirth": "13/05/1989",
    "nationality": "Mexican",
    "status": "valid"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid CURP number",
  "code": "INVALID_CURP"
}
```

## Use Cases

- **Government Services**: Verify citizen identity for public services
- **Financial Services**: KYC compliance for banking and financial institutions
- **Employment Verification**: Validate employee identity documents
- **Healthcare**: Verify patient identity in medical services
- **E-commerce**: Prevent fraud in online transactions
