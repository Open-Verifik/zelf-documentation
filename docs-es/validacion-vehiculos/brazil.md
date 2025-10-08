---
id: brazil
title: Brasil
description: Verificar información de vehículos brasileños usando placa de matrícula
---

# Brasil

## Endpoint

```
https://api.verifik.co/v2/br/vehicle
```

El servicio de información de vehículos brasileños te permite verificar la autenticidad de la información de vehículos brasileños proporcionando el número de placa de matrícula del vehículo. El servicio devuelve información detallada sobre el vehículo, incluyendo su marca, modelo, año de fabricación, motor, transmisión, tipo de combustible y más.

Este servicio es útil para concesionarios de autos, compañías de seguros y cualquier negocio o individuo que busque verificar información de vehículos brasileños.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Consulta

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Placa a consultar, sin espacios ni puntos.  | `ABC0123`    |

### Solicitud

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

### Respuesta

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
