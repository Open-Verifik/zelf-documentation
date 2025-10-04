---
id: colombia
title: Colombian Citizen
description: Verify Colombian citizen identities with ease using government-issued ID
---

# Colombian Citizen

## Endpoint

```
https://api.verifik.co/v2/co/cedula
```

Verify Colombian citizen identities with ease. This API endpoint allows you to validate a Colombian government-issued ID (Cédula de Ciudadanía) and retrieve essential details, including the citizen's full name, first name, last name, and ID number. Perfect for streamlining identity verification and background checks.

### Key Use Case

Ideal for businesses needing reliable identity validation for KYC processes, fraud prevention, or compliance in Colombia.

**Note**: This endpoint is designed exclusively for Colombian ID documents. For other countries, please explore our additional validation services.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                                                 | Example      |
| -------------- | ------ | --------- | --------------------------------------------------------------------------- | ------------ |
| documentType   | String | True      | Type of document. Valid parameter: CC, PPT.                                 | `CC`         |
| documentNumber | String | True      | Document number of the person to consult, without spaces or periods.       | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula',
  params: {documentType: 'CC', documentNumber: '123456789'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
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
    "documentType": "CC",
    "documentNumber": "123456789",
    "firstName": "Juan",
    "lastName": "Pérez",
    "fullName": "Juan Pérez",
    "status": "valid"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Document not found",
  "code": "DOCUMENT_NOT_FOUND"
}
```
