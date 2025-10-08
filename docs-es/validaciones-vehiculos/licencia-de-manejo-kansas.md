---
id: licencia-de-manejo-kansas
title: Licencia de Manejo Kansas
description: Servicio de verificación de licencia de manejo de Kansas
slug: /validaciones-vehiculos/licencia-de-manejo-kansas
---

# Verificación de Licencia de Manejo Kansas

## Crear un nuevo usuario

`GET - https://api.verifik.co/v2/usa/kansas/driver-license`

El Servicio de Validación de Licencia de Manejo de Kansas permite a los desarrolladores validar programáticamente el estado, restricciones, endosos y designaciones de las licencias de manejo de Kansas. Al proporcionar un número válido de licencia de manejo de Kansas, los usuarios pueden obtener una respuesta que incluye detalles como el estado de la licencia, fecha de vencimiento, cualquier restricción o endoso, y designaciones asociadas con la licencia.

Este servicio es esencial para verificar credenciales de manejo y asegurar el cumplimiento con las regulaciones estatales.

### Implementación

**Headers**

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Nombre           | Tipo   | Requerido | Descripción                                    | Ejemplo      |
| ---------------- | ------ | -------- | ---------------------------------------------- | ------------ |
| documentNumber   | String | Sí       | Número de documento de la persona a consultar. | `K12345678`  |
| dateOfBirth      | String | Sí       | La fecha de nacimiento del titular de la licencia (formato: DD/MM/YYYY). | `29/1/1974`  |
| firstName        | String | Sí       | Nombre del titular de la licencia.             | `MATEO`      |
| lastName         | String | Sí       | Apellido del titular de la licencia.           | `VERIFIK`    |

Para documentación completa de la API y ejemplos, por favor contacte al soporte de Verifik.
