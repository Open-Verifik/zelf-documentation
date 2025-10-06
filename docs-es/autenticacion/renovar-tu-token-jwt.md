---
id: renovar-tu-token-jwt
title: Renovar tu token (JWT)
description: Renueva tu token de acceso para extender su periodo de validez
slug: /autenticacion/renovar-tu-token-jwt
---

# Renovar tu token (JWT)

Este método renueva el token de acceso generado con otros endpoints de login, con un periodo de validez de **30 días**. Después de este periodo, es necesario **generar** un nuevo Access Token. El único parámetro requerido para la renovación es el token anterior, siempre que no haya expirado. Este servicio solo renueva tokens aún válidos.

### Implementación

**Endpoint:**

`https://api.verifik.co/v2/auth/session`

#### Headers

Debes proporcionar un token que siga siendo válido.

```json
{
    "Authorization": "<token>"
}
```

#### Parámetros de consulta opcionales

* **origin:** Define la acción a realizar con el token. En este caso, la acción será "refresh".
* **expireIn:** Número entero que representa meses: 1 = 1 mes, 2 = 2 meses, etc.

**Ejemplo de solicitud completa:**

`https://api.verifik.co/v2/auth/session?origin=refresh&expiresIn=120`

#### Respuesta exitosa (Token renovado)

```json
{
    "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
    "tokenType": "bearer"
}
```


