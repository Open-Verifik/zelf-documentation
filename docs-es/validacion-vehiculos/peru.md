---
id: peru
title: Perú
description: Verificar información de vehículos peruanos usando placa de matrícula
---

# Perú

## Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/placa
```

El servicio de información de vehículos peruanos proporciona datos detallados sobre vehículos registrados en Perú basado en su número de placa de matrícula. La respuesta incluye detalles clave como la marca, modelo, año, números de serie del motor y chasis, capacidad de asientos y tipo de uso del vehículo.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Consulta

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Número de placa a consultar, sin espacios ni puntos. | `ABC123`     |

### Solicitud

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

### Respuesta

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
