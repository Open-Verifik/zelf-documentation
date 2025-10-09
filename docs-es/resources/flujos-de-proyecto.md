---
id: flujos-de-proyecto
title: Flujos de Proyecto
description: Los Flujos de Proyecto son los planos que definen cómo los usuarios verificarán su identidad en tu sistema
slug: /doc-es/recursos/flujos-de-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flujos de Proyecto

Los Flujos de Proyecto son los planos que definen cómo los usuarios verificarán su identidad en tu sistema. Piensa en ellos como el manual de instrucciones que le dice a Verifik exactamente qué pasos seguir, qué información recopilar y qué tan estricto ser durante el proceso de verificación.

## Cómo Funcionan los Flujos de Proyecto

Cada Flujo de Proyecto es una plantilla de configuración que define el viaje completo de verificación del usuario. Cuando alguien quiere usar tu sistema, Verifik sigue tu Flujo de Proyecto paso a paso para asegurar que cumplan con tus requisitos de seguridad y cumplimiento.

Actualmente, los Flujos de Proyecto soportan estos tipos:

* **onboarding** - Para nuevos usuarios para inscribirse y crear cuentas
* **login** - Para usuarios existentes para acceder a tu sistema

## Qué Configuran los Flujos de Proyecto

Los Flujos de Proyecto son sistemas de configuración completos que definen cada aspecto de tu proceso de verificación:

### Experiencia de Usuario:
* Qué formularios mostrar y en qué orden
* Qué información es requerida vs. opcional
* Cómo los usuarios pueden enviar documentos
* Si se necesitan firmas

### Configuraciones de Seguridad:
* Quién puede acceder a tu sistema (lista blanca/lista negra)
* Qué tan estricto ser con la verificación de identidad
* Qué verificaciones de seguridad realizar
* Cómo manejar actividad sospechosa

### Opciones de Integración:
* Qué bases de datos verificar
* Qué servicios externos usar
* Cómo manejar fallas de verificación
* Lógica de negocio personalizada y reglas

## Endpoints de la API

### Crear un Flujo de Proyecto
```http
POST https://api.verifik.co/v2/project-flows
```

### Listar Todos los Flujos de Proyecto
```http
GET https://api.verifik.co/v2/project-flows
```

### Recuperar un Flujo de Proyecto
```http
GET https://api.verifik.co/v2/project-flows/{flowId}
```

### Actualizar un Flujo de Proyecto
```http
PUT https://api.verifik.co/v2/project-flows/{flowId}
```

## Estructura del Objeto Flujo de Proyecto

```json
{
  "id": "flow_123456789",
  "name": "Flujo de Onboarding Estándar",
  "type": "onboarding",
  "projectId": "proj_123456789",
  "steps": [
    {
      "type": "form",
      "name": "informacion_personal",
      "required": true,
      "fields": ["firstName", "lastName", "email", "phone"]
    },
    {
      "type": "document_verification",
      "name": "verificacion_id",
      "required": true,
      "documentTypes": ["passport", "drivers_license"]
    },
    {
      "type": "biometric_verification",
      "name": "verificacion_selfie",
      "required": true,
      "livenessDetection": true
    }
  ],
  "securitySettings": {
    "whitelistEnabled": false,
    "blacklistEnabled": true,
    "strictMode": true
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## Casos de Uso

- **Onboarding Personalizado**: Define pasos de verificación específicos para nuevos usuarios
- **Requisitos de Cumplimiento**: Cumple con requisitos regulatorios para verificación de identidad
- **Gestión de Riesgos**: Configura diferentes niveles de seguridad basados en el tipo de usuario
- **Flexibilidad de Integración**: Personaliza flujos de verificación para diferentes necesidades de negocio
