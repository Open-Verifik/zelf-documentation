---
id: inscripcion
title: Enroll
description: Esta solución incluye todo lo que Inscripción Inteligente hace pero a nivel de API
slug: /inscripcion
---

# Enroll

Esta solución incluye todo lo que Inscripción Inteligente hace pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Resumen

La API de Inscripción proporciona acceso programático a toda la funcionalidad de Inscripción Inteligente, permitiéndote construir flujos KYC e incorporación personalizados que se integren perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o quieren integrar incorporación en sus aplicaciones existentes.

## Características Principales

- **API de Verificación de Documentos**: Valida IDs y documentos emitidos por el gobierno
- **API de Registro Biométrico**: Reconocimiento facial y detección de vida para inscripción
- **API de Verificación de Antecedentes**: Verificación de antecedentes penales y listas de vigilancia
- **Integración de Base de Datos**: Conecta con tu base de datos de usuarios existente
- **Soporte de Webhook**: Notificaciones en tiempo real para eventos de inscripción
- **Marca Personalizada**: Mantén la identidad de tu marca durante todo el proceso

## Comenzando

### Autenticación

Todas las solicitudes de API requieren un token JWT válido. Incluye el token en el header de Authorization:

```
Authorization: Bearer <your_jwt_token>
```

### URL Base

```
https://api.verifik.co/v2/enroll
```

## Endpoints de API

### Verificación de Documentos

#### Escanear Documento
```http
POST /documents/scan
```

#### Validar Documento
```http
POST /documents/validate
```

#### Extraer Datos
```http
POST /documents/extract
```

### Registro Biométrico

#### Registrar Rostro
```http
POST /biometric/register
```

#### Verificar Rostro
```http
POST /biometric/verify
```

#### Verificación de Vida
```http
POST /biometric/liveness
```

### Verificaciones de Antecedentes

#### Verificación de Antecedentes Penales
```http
POST /background/criminal-check
```

#### Verificación de Lista de Vigilancia
```http
POST /background/watchlist-check
```

### Gestión de Usuarios

#### Crear Usuario
```http
POST /users/create
```

#### Actualizar Usuario
```http
PUT /users/{userId}
```

#### Obtener Estado del Usuario
```http
GET /users/{userId}/status
```

## Formato de Respuesta

Todas las respuestas de API siguen un formato consistente:

```json
{
  "success": true,
  "data": {
    // Datos de respuesta
  },
  "message": "Operación completada exitosamente"
}
```

## Manejo de Errores

```json
{
  "success": false,
  "error": "Mensaje de error",
  "code": "CODIGO_ERROR"
}
```

## Límites de Velocidad

- **Verificación de Documentos**: 20 solicitudes por minuto por usuario
- **Registro Biométrico**: 10 solicitudes por minuto por usuario
- **Verificaciones de Antecedentes**: 5 solicitudes por minuto por usuario

## Soporte

Para soporte técnico y documentación de API, contacta a nuestro equipo de soporte o visita nuestro portal de desarrolladores.
