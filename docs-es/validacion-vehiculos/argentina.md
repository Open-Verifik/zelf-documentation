---
id: argentina
title: Argentina
description: Verificar información de vehículos argentinos usando placa de matrícula
---

# Argentina

## Endpoint

```
https://api.verifik.co/v2/ar/vehicle
```

El servicio de información de vehículos argentinos proporciona información detallada sobre vehículos registrados en Argentina usando su número de placa de matrícula. Este servicio devuelve datos completos del vehículo incluyendo marca, modelo, año, especificaciones del motor y detalles de registro.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Placa de matrícula a consultar, sin espacios ni puntos. | `ABC123`     |

### Solicitud

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

### Respuesta

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
