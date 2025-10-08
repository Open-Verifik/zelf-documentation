---
id: brazil
title: Brazil
description: Verify Brazilian vehicle information using license plate
---

# Brazil

## Endpoint

```
https://api.verifik.co/v2/br/vehicle
```

The Brazilian Vehicle information service allows you to verify the authenticity of Brazilian vehicle information by providing the vehicle's license plate number. The service returns detailed information about the vehicle, including its brand, model, year of manufacture, engine, transmission, fuel type, and more.

This service is useful for car dealerships, insurance companies, and any business or individual looking to verify Brazilian vehicle information.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Plate to consult, without spaces or points.  | `ABC0123`    |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/vehicle',
  params: {plate: 'ABC1D345'},
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
    "plate": "ABC1D345",
    "make": "Volkswagen",
    "model": "Golf",
    "year": "2019",
    "engine": "1.4L TSI",
    "transmission": "Manual",
    "fuelType": "Gasoline",
    "vin": "WVWZZZ1KZ9W386752",
    "registrationDate": "20/05/2019",
    "status": "active",
    "owner": "Maria Silva",
    "state": "São Paulo",
    "city": "São Paulo"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Vehicle not found",
  "code": "VEHICLE_NOT_FOUND"
}
```

## Use Cases

- **Insurance Verification**: Verify vehicle details for insurance purposes
- **Car Dealerships**: Validate vehicle information before purchase
- **Fleet Management**: Track company vehicle information
- **Law Enforcement**: Verify vehicle registration and ownership
- **Due Diligence**: Verify vehicle information for transactions
