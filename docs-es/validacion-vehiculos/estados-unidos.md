---
id: estados-unidos
title: Estados Unidos
description: Verificar información de vehículos estadounidenses usando placa de matrícula y estado
---

# Estados Unidos

## Endpoint

```
https://api.verifik.co/v2/usa/vehicle
```

Este servicio te permite recuperar información detallada sobre un vehículo en Estados Unidos usando su placa de matrícula y estado. La respuesta incluye varios puntos de datos como marca, modelo, año del modelo, configuración del motor, clase del cuerpo, estilo de transmisión y más.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Consulta

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Placa de matrícula a consultar, sin espacios ni puntos. | `ABC123`     |
| state  | String | True      | Abreviación del estado donde está registrado el vehículo. | `AL`         |

### Solicitud

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

### Respuesta

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

### Respuestas de Error

```json
{
  "success": false,
  "error": "Vehicle not found",
  "code": "VEHICLE_NOT_FOUND"
}
```

## Casos de Uso

- **Verificación de Seguros**: Verificar detalles del vehículo para fines de seguros
- **Concesionarios de Autos**: Validar información del vehículo antes de la compra
- **Gestión de Flotas**: Rastrear información de vehículos de la empresa
- **Aplicación de la Ley**: Verificar registro y propiedad del vehículo
- **Debida Diligencia**: Verificar información del vehículo para transacciones
