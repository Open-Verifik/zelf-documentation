---
id: peru
title: Peru
description: Verify Peruvian vehicle information using license plate
---

# Peru

## Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/placa
```

The Peruvian Vehicle Information service provides detailed data about registered vehicles in Peru based on their license plate number. The response includes key details such as the vehicle's make, model, year, engine and chassis serial numbers, seating capacity, and usage type.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Plate number to consult, without spaces or points. | `ABC123`     |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/vehiculo/placa',
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
    "model": "Hilux",
    "year": "2019",
    "engine": "2.8L Diesel",
    "transmission": "Manual",
    "fuelType": "Diesel",
    "vin": "MR0EW8BB5K1234567",
    "chassisNumber": "MR0EW8BB5K1234567",
    "seatingCapacity": "5",
    "usageType": "Particular",
    "registrationDate": "20/06/2019",
    "status": "active",
    "owner": "Luis Mendoza",
    "province": "Lima"
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
