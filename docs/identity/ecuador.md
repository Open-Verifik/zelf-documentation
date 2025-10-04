---
id: ecuador
title: Ecuador
description: Verify Ecuadorian citizen identities using CCEC (Cédula de Ciudadanía Ecuatoriana)
---

# Ecuador

## Endpoint

```
https://api.verifik.co/v2/ec/cedula
```

This service allows users to obtain basic information about an individual based on their Ecuadorian identification number. By providing the document type and number as parameters, the service returns the person's full name, first and last names separately.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Allowed parameter: CCEC.      | `CCEC`       |
| documentNumber | String | True      | Document number of the person to consult, without spaces or points. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ec/cedula',
  params: {documentType: 'CCEC', documentNumber: '123456789'},
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
    "documentType": "CCEC",
    "documentNumber": "123456789",
    "firstName": "Luis",
    "lastName": "Vega",
    "fullName": "Luis Vega",
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
