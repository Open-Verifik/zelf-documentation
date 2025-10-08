---
id: argentina
title: Argentina
description: Verify Argentine vehicle information using license plate
---

# Argentina

## Endpoint

```
https://api.verifik.co/v2/ar/vehicle
```

The Argentine Vehicle Information service provides detailed information about vehicles registered in Argentina using their license plate number. This service returns comprehensive vehicle data including make, model, year, engine specifications, and registration details.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | License plate to be queried, without spaces or dots. | `ABC123`     |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/vehicle',
  params: {plate: 'ABC123'},
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
    "plate": "ABC123",
    "make": "Toyota",
    "model": "Corolla",
    "year": "2020",
    "engine": "1.8L",
    "transmission": "Automatic",
    "fuelType": "Gasoline",
    "vin": "1HGBH41JXMN109186",
    "registrationDate": "15/03/2020",
    "status": "active",
    "owner": "Juan Pérez",
    "province": "Buenos Aires"
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
