---
id: el-objeto-flujo-de-proyecto
title: El Objeto Flujo de Proyecto
description: El objeto Flujo de Proyecto representa configuraciones de flujo para proyectos en Verifik
slug: /doc-es/recursos/el-objeto-flujo-de-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# El Objeto Flujo de Proyecto

El objeto Flujo de Proyecto representa configuraciones de flujo para proyectos en Verifik. Los Flujos de Proyecto definen varios puntos de datos que Verifik usará para realizar validaciones usando tecnologías sin contraseña y detección de vida.

## Atributos

**`project`** - ObjectId - Requerido

El proyecto es el `_id` generado cuando se crea un proyecto correctamente.

**`type`** - String - Requerido

El tipo determina qué tipo de servicio quieres generar en este flujo de proyecto. Puede ser:

* `"login"` - Para usuarios existentes para acceder a tu sistema
* `"onboarding"` - Para nuevos usuarios para inscribirse y crear cuentas

**`status`** - String - Requerido

El estado actual del flujo de proyecto. Puede ser:

* `"draft"` - El flujo de proyecto está en modo borrador
* `"active"` - El flujo de proyecto está activo y puede ser usado
* `"paused"` - El flujo de proyecto está pausado

Solo los proyectos "active" pueden ser usados.

**`version`** - Number - Opcional

Número de versión del flujo de proyecto. Por defecto es 1.

**`name`** - String - Requerido

Nombre del flujo de proyecto para propósitos de identificación.

**`description`** - String - Opcional

Descripción del flujo de proyecto y su propósito.

**`configuration`** - Object - Requerido

Objeto de configuración que contiene configuraciones específicas del flujo:

* `emailVerification` - Configuraciones de verificación de email
* `phoneVerification` - Configuraciones de verificación de teléfono
* `biometricVerification` - Configuraciones de verificación biométrica
* `documentVerification` - Configuraciones de verificación de documentos
* `securityThresholds` - Configuraciones de umbrales de seguridad
* `searchModes` - Configuraciones de modos de búsqueda

**`steps`** - Array - Requerido

Array de pasos que definen la secuencia del flujo:

* `stepType` - Tipo de paso (ej., "email", "phone", "biometric", "document")
* `order` - Orden del paso en el flujo
* `required` - Si el paso es requerido
* `config` - Configuración específica del paso

**`client`** - ObjectId - Requerido

Referencia al cliente que posee este flujo de proyecto.

**`createdAt`** - Date - Requerido

Marca de tiempo cuando se creó el flujo de proyecto.

**`updatedAt`** - Date - Requerido

Marca de tiempo cuando se actualizó por última vez el flujo de proyecto.

## Ejemplo de Objeto

```json
{
  "_id": "project_flow_123456789",
  "project": "project_123456789",
  "type": "onboarding",
  "status": "active",
  "version": 1,
  "name": "Flujo de Onboarding Completo",
  "description": "Flujo completo de onboarding con verificación de email, teléfono y biométrica",
  "configuration": {
    "emailVerification": {
      "enabled": true,
      "required": true,
      "method": "verificationCode"
    },
    "phoneVerification": {
      "enabled": true,
      "required": true,
      "method": "sms",
      "countryCode": "+1"
    },
    "biometricVerification": {
      "enabled": true,
      "required": true,
      "livenessDetection": true,
      "antiSpoofing": true
    },
    "documentVerification": {
      "enabled": true,
      "required": true,
      "documentTypes": ["id", "passport", "driver_license"]
    },
    "securityThresholds": {
      "livenessScore": 0.8,
      "biometricScore": 0.85,
      "documentScore": 0.9
    }
  },
  "steps": [
    {
      "stepType": "email",
      "order": 1,
      "required": true,
      "config": {
        "verificationMethod": "verificationCode"
      }
    },
    {
      "stepType": "phone",
      "order": 2,
      "required": true,
      "config": {
        "verificationMethod": "sms"
      }
    },
    {
      "stepType": "biometric",
      "order": 3,
      "required": true,
      "config": {
        "livenessDetection": true
      }
    },
    {
      "stepType": "document",
      "order": 4,
      "required": true,
      "config": {
        "documentTypes": ["id", "passport"]
      }
    }
  ],
  "client": "client_123456789",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Características

- **Configuración Completa**: Información completa del flujo y configuraciones
- **Tipos de Flujo**: Soporte para onboarding y login
- **Estados del Flujo**: Control de estado (borrador, activo, pausado)
- **Configuración Avanzada**: Verificación multi-factor con umbrales de seguridad
- **Pasos Personalizables**: Secuencia de pasos con configuraciones específicas
- **Referencias**: Vinculación con el proyecto y cliente propietario
