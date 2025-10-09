---
id: el-objeto-proyecto
title: El Objeto Proyecto
description: El objeto Proyecto representa proyectos dentro de tu cuenta Verifik
slug: /doc-es/recursos/el-objeto-proyecto
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# El Objeto Proyecto

El objeto Proyecto representa proyectos dentro de tu cuenta Verifik. Un Proyecto es donde se almacena toda la información relacionada con la empresa o entidad que utilizará los servicios de autenticación y validación generados por Verifik. Esto se hace para asegurar que tu marca se represente correctamente cuando uses los servicios de Verifik.

## Atributos

**`name`** - String - Requerido

Nombre del proyecto.

**`allowedCountries`** - Array de String - Requerido

Países donde se utilizará tu proyecto. Deben estar definidos correctamente, de lo contrario Verifik no puede enviar OTP a estos países.

**`contactEmail`** - String - Requerido

Dirección de email principal del propietario del proyecto.

**`privacyUrl`** - String - Requerido

Enlace a tu política de privacidad.

**`termsAndConditionsUrl`** - String - Requerido

Enlace a tus términos y condiciones.

**`client`** - ObjectId - Requerido

Referencia al cliente que posee este proyecto.

**`status`** - String - Opcional

Estado del proyecto. Puede ser:

* `active` - El proyecto está activo
* `inactive` - El proyecto está inactivo
* `pending` - El proyecto está pendiente de aprobación

**`branding`** - Object - Opcional

Información de marca para el proyecto:

* `logo` - URL del logo del proyecto
* `primaryColor` - Color principal de la marca
* `secondaryColor` - Color secundario de la marca
* `customDomain` - Dominio personalizado para el proyecto

**`settings`** - Object - Opcional

Configuraciones específicas del proyecto:

* `defaultLanguage` - Idioma por defecto para el proyecto
* `timezone` - Zona horaria del proyecto
* `webhookUrl` - URL de webhook por defecto para notificaciones

**`createdAt`** - Date - Requerido

Marca de tiempo cuando se creó el proyecto.

**`updatedAt`** - Date - Requerido

Marca de tiempo cuando se actualizó por última vez el proyecto.

## Países Permitidos

Los siguientes países son compatibles para `allowedCountries`:

| País | País | País |
|------|------|------|
| "Argentina" | "Alemania" | "Portugal" |
| "Australia" | "Guatemala" | "Puerto Rico" |
| "Austria" | "Honduras" | "Rusia" |
| "Bélgica" | "Irlanda" | "España" |
| "Brasil" | "Italia" | "Suecia" |
| "Canadá" | "México" | "Suiza" |
| "Chile" | "Países Bajos" | "Trinidad y Tobago" |
| "Colombia" | "Nicaragua" | "Reino Unido" |
| "Costa Rica" | "Noruega" | "Estados Unidos" |
| "Ecuador" | "Panamá" | "Uruguay" |
| "El Salvador" | "Paraguay" | "Venezuela" |
| "Francia" | "Perú" | "Vietnam" |
| "Yemen" | "Uzbekistán" | |

## Ejemplo de Objeto

```json
{
  "_id": "project_123456789",
  "name": "Proyecto de Ejemplo",
  "allowedCountries": ["Colombia", "Estados Unidos"],
  "contactEmail": "test@verifik.co",
  "privacyUrl": "https://example.com/privacy",
  "termsAndConditionsUrl": "https://example.com/terms",
  "client": "client_123456789",
  "status": "active",
  "branding": {
    "logo": "https://example.com/logo.png",
    "primaryColor": "#007bff",
    "secondaryColor": "#6c757d",
    "customDomain": "auth.example.com"
  },
  "settings": {
    "defaultLanguage": "en",
    "timezone": "UTC",
    "webhookUrl": "https://example.com/webhook"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Características

- **Identidad Completa**: Información completa de la empresa y configuración
- **Países Permitidos**: Lista completa de países compatibles para OTP
- **Información de Marca**: Configuración de logo, colores y dominio personalizado
- **Configuraciones Avanzadas**: Idioma, zona horaria y webhooks
- **Estados del Proyecto**: Control de estado del proyecto (activo, inactivo, pendiente)
- **Referencias**: Vinculación con el cliente propietario del proyecto
