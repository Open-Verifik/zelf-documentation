---
id: api-key-acceso-por-telefono
title: Acceso con API Key vía Teléfono
description: Obtén tu API Key mediante autenticación por teléfono
slug: /autenticacion/acceso-con-llave-por-telefono
---

# Acceso con API Key vía Teléfono

## OTP - Solicitud (Teléfono)

Métodos usados para iniciar sesión con una cuenta ya generada en Verifik. Este procedimiento es importante porque todas las consultas requieren un Access Token, que solo se genera al iniciar sesión.

Estos servicios crean una solicitud de OTP (One Time Password) necesaria para validar que el teléfono o email pertenece a un cliente de Verifik.

### Implementación

`POST - https://api.verifik.co/v2/projects/phone-login`

#### Parámetros a enviar en el cuerpo

```json
{
  "countryCode": "string",
  "phone": 0,
  "type": "login"
}
```

#### Respuesta exitosa (creación de PhoneValidation)

```json
{
    "data": {
        "client": "613375a1eab2fe08527f81e2",
        "project": "6266193db77ccc8111730c90",
        "projectFlow": "658ed28b0990f300134d7b78",
        "status": "sent",
        "countryCode": "+1",
        "phone": "1234566663",
        "phoneGateway": "whatsapp",
        "otp": "$2a$10$fdoxDgtv6J7E4nnZoCORSOiUbpCGOOE5JWghrvAUNZIoX5h81zJLq",
        "expiresAt": "2024-05-29T03:51:26.000Z",
        "phoneData": {
            "title": "Verifik Client"
        },
        "type": "login",
        "redirectUrl": "https://verifik.co",
        "requires2FA": false,
        "language": "es",
        "_id": "6656a3e6eb43abfd7146abb6",
        "updatedAt": "2024-05-29T03:41:27.009Z",
        "createdAt": "2024-05-29T03:41:27.009Z",
        "__v": 0,
        "new": true,
        "providerConfirmation": {}
    },
    "signature": {
        "dateTime": "May 29, 2024 3:41 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "Y0628"
}
```

## OTP - Confirmación (Teléfono)

Los servicios de confirmación de OTP generan un "login" validando que el OTP enviado coincida con el recibido en el teléfono. Como respuesta se obtiene el access token, que el usuario puede usar para consultas.

### Implementación

`POST - https://api.verifik.co/v2/projects/phone-login/confirm`

#### Parámetros a enviar en el cuerpo (Teléfono)

```json
{
  "countryCode": "string",
  "phone": 0,
  "otp": "string"
}
```

#### Respuesta exitosa (OTP validado correctamente)

```json
{
    "data": {
        "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
        "tokenType": "bearer"
    }
}
```

Nota: Un token generado por este medio será válido por 30 días desde la respuesta exitosa. Verifik no es responsable de la gestión del Access Token.


