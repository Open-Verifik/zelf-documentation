---
id: lawyer-verification
title: Lawyer Verification
description: Verify legal professionals and legal processes
---

# Lawyer Verification

### Endpoint

```
https://api.verifik.co/v2/co/rama/abogados
```

The Lawyer Verification service offers a comprehensive solution to validate the professional credentials of lawyers in Colombia. By providing the lawyer's document number and type, users can access essential information about their professional status and credentials.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Valid parameters: CC, NIT, CE. | `CC`         |
| documentNumber | String | True      | Document number of the person from whom you want to seek legal proceedings. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/abogados',
  params: {
    documentType: 'CC',
    documentNumber: '123456789'
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
    "documentType": "CC",
    "documentNumber": "123456789",
    "firstName": "María",
    "lastName": "González",
    "fullName": "María González",
    "professionalStatus": "active",
    "barNumber": "12345",
    "specialization": "Civil Law",
    "registrationDate": "15/03/2015",
    "status": "verified"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Lawyer not found",
  "code": "LAWYER_NOT_FOUND"
}
```

## Legal Process Verification

### Endpoint

```
https://api.verifik.co/v2/co/legal/process
```

Retrieve details of legal processes by process number.

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| processNumber  | String | True      | Legal process number to consult.              | `123456789`  |

### Request

```javascript
const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/legal/process',
  params: {
    processNumber: '123456789'
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};
```

### Response

```json
{
  "success": true,
  "data": {
    "processNumber": "123456789",
    "caseType": "Civil",
    "status": "active",
    "parties": [
      {
        "name": "Juan Pérez",
        "role": "Plaintiff"
      },
      {
        "name": "María González",
        "role": "Defendant"
      }
    ],
    "court": "Tribunal Superior de Bogotá",
    "filingDate": "15/03/2020",
    "lastUpdate": "20/01/2024"
  }
}
```

## Use Cases

- **Legal Professional Verification**: Verify lawyer credentials and status
- **Legal Process Tracking**: Monitor ongoing legal proceedings
- **Due Diligence**: Verify legal professionals for business partnerships
- **Compliance**: Meet regulatory requirements for legal verification
- **Court Records**: Access public legal process information
