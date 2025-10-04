---
id: brazil
title: Brazil
description: Verify Brazilian companies using CNPJ (Cadastro Nacional da Pessoa Jurídica)
---

# Brazil

## Endpoint

```
https://api.verifik.co/v2/br/company
```

The Brazilian Company Information service provides information on Brazilian companies, including their legal nature, main and secondary activities, share capital, shareholders, status, and more. The service returns responses that include the company's name, tax ID, address, phone number, email, and other details.

This service is useful for businesses looking to verify information about potential partners or customers in Brazil, or for researchers looking to study the Brazilian business landscape.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Allowed value: CNPJ.          | `CNPJ`       |
| documentNumber | String | True      | Document number of the company to be queried. The number must be 14 digits, without spaces, dashes, or special characters. | `09159197000180` |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/company',
  params: {documentType: 'CNPJ', documentNumber: '09159197000180'},
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
    "documentType": "CNPJ",
    "documentNumber": "09159197000180",
    "companyName": "Empresa Exemplo Ltda",
    "tradeName": "Empresa Exemplo",
    "legalNature": "Sociedade Empresária Limitada",
    "cnpj": "09.159.197/0001-80",
    "address": {
      "street": "Rua das Flores, 123",
      "neighborhood": "Centro",
      "city": "São Paulo",
      "state": "SP",
      "zipCode": "01234-567"
    },
    "phone": "(11) 1234-5678",
    "email": "contato@empresaexemplo.com.br",
    "status": "active",
    "shareCapital": "100000.00",
    "primaryActivity": "Comércio varejista",
    "secondaryActivities": ["Serviços de consultoria"]
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Company not found",
  "code": "COMPANY_NOT_FOUND"
}
```

## Use Cases

- **Due Diligence**: Verify business partners and suppliers
- **KYC/KYB Compliance**: Validate business entities for financial services
- **Supply Chain Verification**: Confirm supplier legitimacy
- **Investment Research**: Analyze potential investment targets
- **Tax Compliance**: Verify tax registration status
