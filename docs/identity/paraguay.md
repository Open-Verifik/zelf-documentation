---
id: paraguay
title: Paraguay
description: Verify Paraguayan citizen identities using CIC (Cédula de Identidad Civil)
---

# Paraguay

## Endpoint

```
https://api.verifik.co/v2/py/cic
```

Validate the Cédula de Identidad Civil (CIC) for Paraguayan citizens. This API endpoint provides accurate and reliable data, including the document number, full name, first name, last name, and an array of name components, enabling efficient identity verification for a wide range of applications in Paraguay.

### Key Use Case
Ideal for businesses and organizations needing to verify the identity of Paraguayan citizens, such as for KYC processes, financial services, or legal compliance.

### Important Notes

* This service validates the Cédula de Identidad Civil (CIC) for Paraguayan citizens. For other document types or nationalities, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities. The data provided is subject to Paraguayan privacy laws and should be handled responsibly.
* Always cross-check with the physical CIC document to confirm the information retrieved.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentNumber | String | True      | Document number of the person to be queried.  | `1234567`    |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/py/cic',
  params: {documentNumber: '1234567'},
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
    "documentNumber": "1234567",
    "firstName": "Fernando",
    "lastName": "Silva",
    "fullName": "Fernando Silva",
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
