---
id: united-states
title: United States
description: Verify US vehicle information using license plate and state
---

# United States

## Endpoint

```
https://api.verifik.co/v2/usa/vehicle
```

This service allows you to retrieve detailed information about a vehicle in the United States using its license plate and state. The response includes various data points such as make, model, model year, engine configuration, body class, transmission style, and more.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | License plate to be queried, without spaces or dots. | `ABC123`     |
| state  | String | True      | Abbreviation of the state where the vehicle is registered. | `AL`         |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/vehicle',
  params: {plate: 'ABC123', state: 'AL'},
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
    "state": "AL",
    "make": "Ford",
    "model": "F-150",
    "year": "2020",
    "engine": "3.5L V6",
    "transmission": "Automatic",
    "fuelType": "Gasoline",
    "vin": "1FTFW1ET5LFA12345",
    "bodyClass": "Pickup",
    "registrationDate": "15/03/2020",
    "status": "active",
    "owner": "John Smith",
    "city": "Birmingham"
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
