---
id: the-app-login-object
title: El Objeto de Inicio de Sesión de Aplicación
description: El objeto de Inicio de Sesión de Aplicación representa sesiones de autenticación de usuario
slug: /recursos/el-objeto-de-inicio-de-sesion-de-aplicacion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# El Objeto de Inicio de Sesión de Aplicación

### **Atributos**

***

**client** - `ObjectId` - Requerido\
ID del cliente asociado con esta solicitud de inicio de sesión. Debe estar definido correctamente, ya que esto vincula el inicio de sesión a un cliente específico.

***

**name** - `String` - Opcional\
Nombre opcional para la sesión de inicio de sesión.

***

**status** - `String` - Opcional\
Estado opcional de la solicitud de inicio de sesión (por ejemplo, pendiente, completado, fallido).

***

**project** - `ObjectId` - Requerido\
ID del proyecto vinculado a esta solicitud de inicio de sesión. Debe estar definido, ya que esto vincula el inicio de sesión a un proyecto específico.

***

**projectFlow** - `ObjectId` - Requerido\
ID del ProjectFlow que define la configuración del flujo para este inicio de sesión. Este es un campo requerido.

***

**type** - `String` - Requerido\
Tipo de inicio de sesión que se está intentando. Debe ser uno de los siguientes valores:

* `email`
* `phone`
* `faceLiveness`

***

**emailValidation** - `ObjectId` - Opcional\
Referencia al objeto EmailValidation si se usa un inicio de sesión basado en email.

***

**phoneValidation** - `ObjectId` - Opcional\
Referencia al objeto PhoneValidation si se usa un inicio de sesión basado en teléfono.

***

**biometricValidation** - `ObjectId` - Opcional\
Referencia al objeto BiometricValidation si se usa un inicio de sesión biométrico.

***

**face** - `ObjectId` - Opcional\
Referencia al objeto IdentityImage, utilizado para reconocimiento facial o verificaciones de vida.

***

**accessControlLog** - `ObjectId` - Opcional\
Referencia al objeto AccessControlLog, utilizado para registrar acciones de control de acceso relacionadas con este inicio de sesión.

***

### Ejemplo del Objeto AppLogin

```json
{
  "client": "5f43a1b5e4b0d51d5b6f3e57",
  "name": "Inicio de Sesión para Proyecto A",
  "status": "completado",
  "project": "5f43a1b5e4b0d51d5b6f3e58",
  "projectFlow": "5f43a1b5e4b0d51d5b6f3e59",
  "type": "email",
  "emailValidation": "5f43a1b5e4b0d51d5b6f3e60",
  "phoneValidation": null,
  "biometricValidation": null,
  "face": null,
  "accessControlLog": "5f43a1b5e4b0d51d5b6f3e61"
}
```

### Características

- **Asociación de Cliente**: Vincula inicios de sesión de aplicación a clientes específicos
- **Integración de Proyecto**: Conectado a proyectos específicos y flujos de proyecto
- **Múltiples Tipos de Validación**: Soporte para autenticación por email, teléfono y biométrica
- **Referencias de Validación**: Enlaces a objetos de validación específicos
- **Registro de Control de Acceso**: Rastrea acciones de control de acceso para seguridad
- **Seguimiento de Estado**: Monitorea el estado del intento de inicio de sesión (pendiente, completado, fallido)
