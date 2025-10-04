---
id: bolivia
title: Bolivia
description: Verify Bolivian citizen identities using CI (Cédula de Identidad)
---

# Bolivia

## Endpoint

```
https://api.verifik.co/v2/bo/cedula
```

The Bolivian Citizen Identification service allows you to retrieve basic information about a Bolivian citizen based on their national ID number and date of birth. The service returns the name of the person associated with the provided document, helping to verify the authenticity of the identity information provided.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type   | Required | Description                                    |
| -------------- | ------ | -------- | ---------------------------------------------- |
| documentType   | String | True     | Document type. Valid parameter: CI.           |
| documentNumber | String | True     | Document number of the person to consult.      |
| dateOfBirth    | String | True     | Date of birth of the person to consult, valid format: dd/mm/yyyy. |

### Request

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://api.verifik.co/v2/bo/cedula',
  params: {
    documentType: 'CI',
    documentNumber: '123456789',
    dateOfBirth: '15/03/1990'
  },
  headers: {
    'Authorization': 'Bearer <your_token>'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

### Response

```json
{
  "success": true,
  "data": {
    "documentType": "CI",
    "documentNumber": "123456789",
    "firstName": "María",
    "lastName": "González",
    "fullName": "María González",
    "dateOfBirth": "15/03/1990",
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
- **Healthcare**: Verify patient identity in medical services
