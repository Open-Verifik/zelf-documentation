---
id: argentina
title: Argentina
description: Verify Argentine citizen identities using DNI (Documento Nacional de Identidad)
---

# Argentina

## Endpoint

```
https://api.verifik.co/v2/ar/cedula
```

The Argentine citizen information service allows developers to verify the authenticity of an Argentine identification card (Documento Nacional de Identidad, or DNI) by providing the DNI number. The service returns information such as the person's full name, first and last name separately, and the DNI number.

This information can be used for a variety of purposes, such as verifying the identity of a customer or validating the information provided by a user.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Description                                    | Example      |
| -------------- | ------ | ---------------------------------------------- | ------------ |
| documentType   | string | Document type. Allowed parameter: DNIAR.      | `DNIAR`      |
| documentNumber | String | Document number of the person to consult without spaces. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/cedula',
  params: {documentType: 'DNIAR', documentNumber: '123456789'},
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
    "documentType": "DNIAR",
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
