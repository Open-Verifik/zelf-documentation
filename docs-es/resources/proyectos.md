---
id: proyectos
title: Proyectos
description: Los proyectos son la base de tu sistema Verifik - contienen toda la información esencial sobre tu empresa
slug: /doc-es/recursos/proyectos
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Proyectos

Los proyectos son la base de tu sistema Verifik - contienen toda la información esencial sobre tu empresa u organización que se utilizará en todos tus servicios de verificación. Piensa en ellos como el perfil de tu empresa que asegura que tu marca se represente correcta y legalmente cuando uses los servicios de Verifik.

## Cómo Funcionan los Proyectos

Cada proyecto sirve como un contenedor para la identidad, marca e información legal de tu empresa. Cuando los usuarios pasan por procesos de verificación, Verifik usa la configuración de tu proyecto para mostrar tu marca, enviar comunicaciones y asegurar el cumplimiento de los requisitos legales.

### Qué Almacenan los Proyectos

Los proyectos son perfiles empresariales completos que definen cada aspecto de cómo aparece tu marca a los usuarios:

#### Identidad de la Empresa:
* Nombre de tu empresa e información de contacto
* Direcciones legales y detalles comerciales
* Email de contacto para soporte y comunicaciones
* Enlaces a política de privacidad y términos de servicio

#### Marca y Diseño:
* Logo de la empresa e identidad visual
* Esquemas de colores para botones, texto y fondos
* Imágenes personalizadas y posicionamiento
* Apariencia general de tu interfaz de verificación

#### Legal y Cumplimiento:
* Requisitos de política de privacidad
* Enlaces a términos y condiciones
* Información del oficial de protección de datos
* Configuraciones de cumplimiento regulatorio

## Endpoints de la API

### Crear un Proyecto
```http
POST https://api.verifik.co/v2/projects
```

### Listar Todos los Proyectos
```http
GET https://api.verifik.co/v2/projects
```

### Recuperar un Proyecto
```http
GET https://api.verifik.co/v2/projects/{projectId}
```

### Actualizar un Proyecto
```http
PUT https://api.verifik.co/v2/projects/{projectId}
```

## Estructura del Objeto Proyecto

```json
{
  "id": "proj_123456789",
  "name": "Mi Empresa",
  "description": "Proyecto de verificación empresarial",
  "logo": "https://example.com/logo.png",
  "primaryColor": "#0066CC",
  "secondaryColor": "#FFFFFF",
  "contactEmail": "soporte@miempresa.com",
  "privacyPolicyUrl": "https://miempresa.com/privacy",
  "termsOfServiceUrl": "https://miempresa.com/terms",
  "dataProtectionOfficer": {
    "name": "Juan Pérez",
    "email": "dpo@miempresa.com",
    "address": "Calle Principal 123, Ciudad, Estado"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## Casos de Uso

- **Consistencia de Marca**: Asegura que tu marca aparezca correctamente en todos los flujos de verificación
- **Cumplimiento Legal**: Cumple con los requisitos regulatorios para protección de datos
- **Experiencia de Usuario**: Proporciona una experiencia fluida y con marca para tus usuarios
- **Soporte Multi-tenant**: Gestiona múltiples proyectos para diferentes unidades de negocio
