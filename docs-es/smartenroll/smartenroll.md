---
id: inscripcion-inteligente
title: SmartEnroll
description: Una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para usuarios
slug: /inscripcion-inteligente
---

# SmartEnroll

**Inscripción Inteligente** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para usuarios. Esta plataforma permite a las empresas ofrecer varias verificaciones de incorporación, incluyendo verificación por correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas esas características están integradas en nuestro proyecto asegurando una experiencia amigable y segura para el usuario. Con Inscripción Inteligente, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## Resumen

Inscripción Inteligente proporciona una solución KYC (Conoce a Tu Cliente) integral que agiliza el proceso de incorporación de usuarios mientras mantiene los más altos estándares de seguridad. La plataforma ofrece un conjunto completo de herramientas de verificación que pueden ser personalizadas para cumplir con tus requisitos específicos de negocio.

## Características Principales

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📧 Verificación de Correo</h3>
      </div>
      <div className="card__body">
        <p>Valida direcciones de correo electrónico con verificación OTP para asegurar registro de usuario auténtico.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📱 Verificación de Teléfono</h3>
      </div>
      <div className="card__body">
        <p>Verifica números de teléfono vía SMS y WhatsApp para autenticación segura de usuarios.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>👤 Verificación Biométrica</h3>
      </div>
      <div className="card__body">
        <p>Reconocimiento facial avanzado y detección de vida para verificación segura de identidad.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📄 Escaneo de Documentos</h3>
      </div>
      <div className="card__body">
        <p>Escanea y verifica documentos emitidos por el gobierno con detección de manipulación.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>🔍 Verificación de Base de Datos</h3>
      </div>
      <div className="card__body">
        <p>Verificaciones de antecedentes integrales contra bases de datos gubernamentales y listas negras.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>🎨 Marca Personalizada</h3>
      </div>
      <div className="card__body">
        <p>Interfaz completamente personalizable para coincidir con la identidad de tu marca y requisitos.</p>
      </div>
    </div>
  </div>
</div>

---

## Guía de Configuración

Sigue estos 7 pasos para configurar tu proyecto de Inscripción Inteligente:

### 1. Configuración Básica

<img src="/img/smartenroll/basic-configuration.png" alt="Configuración Básica" />

#### Información del Proyecto

Esta sección es donde se configuran las configuraciones principales del proyecto. Cada campo sirve un propósito específico:

* **Nombre del Proyecto**: Este es un campo requerido donde el usuario ingresa el nombre de su proyecto. Se usará en todas las referencias al proyecto dentro del ecosistema Verifik.
* **Países Permitidos**: Aquí es donde los usuarios especifican a qué países será aplicable su proceso KYC. Pueden seleccionar de una lista predefinida (Canadá, Colombia, México, Panamá y Estados Unidos). Se pueden agregar países adicionales escribiendo el nombre del país en el campo de entrada.
* **Correo Electrónico**: La dirección de correo electrónico asociada con el proyecto. Este es el punto de contacto para toda correspondencia relacionada con este proyecto.
* **Política de Privacidad (URL)**: Un campo obligatorio donde los usuarios proporcionan un enlace a su documento de Política de Privacidad. Esto asegura el cumplimiento con las leyes de protección de datos locales e internacionales.
* **Términos y Condiciones (URL)**: Un campo donde el usuario proporciona una URL a sus Términos y Condiciones, que se mostrará a los usuarios finales durante el proceso KYC.

#### Información de Contacto del Oficial de Protección de Datos (OPD):

* **Nombre del Propietario**: El representante legal del proyecto o el nombre del Oficial de Protección de Datos designado.
* **Correo Electrónico**: La dirección de correo electrónico de la persona responsable de la protección de datos y cumplimiento.
* **Dirección**: La dirección principal (opcional).
* **País, Ciudad, Código Postal**: Detalles de ubicación para el Oficial de Protección de Datos, que pueden ser requeridos para propósitos regulatorios.

:::tip Nota Clave
Esta fase de configuración asegura que todas las configuraciones legales y básicas estén alineadas antes de que el proyecto pueda proceder al siguiente paso.
:::

---

### 2. Formulario de Registro

<img src="/img/smartenroll/signup-form.png" alt="Configuración de Formulario de Registro" />

En este paso, los usuarios configuran los campos que quieren recopilar de los usuarios finales durante el proceso de registro.

* **Nombre Completo**: El sistema permite flexibilidad en cómo se capturan los nombres. Los usuarios pueden elegir entre:
  * Nombres y apellidos juntos (un solo campo de entrada).
  * Nombres y apellidos separados (dos campos de entrada distintos para cada parte del nombre).
* **Correo Electrónico**: Puedes optar por validar la dirección de correo electrónico alternando entre "Validar" o "No validar."
* **Teléfono**: Los usuarios pueden decidir si la verificación de teléfono se hará vía:
  * WhatsApp
  * SMS
  * Ambos (WhatsApp y SMS)
  * No validar (omitir validación de número de teléfono).
* **Mostrar Términos y Condiciones**: Un interruptor para mostrar Términos y Condiciones a los usuarios finales durante el proceso de registro.
* **Mostrar Políticas de Privacidad**: Similar a los Términos y Condiciones, este interruptor mostrará políticas de privacidad en la etapa de registro.
* **Rol y Empresa**: La plataforma permite a los usuarios solicitar campos opcionales adicionales como información de Rol y Empresa. Estos campos se activan o desactivan basados en las necesidades del negocio.

:::tip Nota Clave
Este paso proporciona flexibilidad en la recopilación de datos mientras asegura que los acuerdos legales necesarios (Términos y Políticas de Privacidad) se presenten al usuario.
:::

---

### 3. Escaneo de Documentos

<img src="/img/smartenroll/document-scanning.png" alt="Configuración de Escaneo de Documentos" />

En este paso, el usuario puede configurar la verificación de documentos para validación de identidad.

* **Documentos Válidos**: La plataforma soporta escaneo y verificación de varios documentos emitidos por el gobierno. Los usuarios pueden seleccionar qué tipos de documentos son aceptables para su proceso KYC. Las opciones típicamente incluyen:
  * Documento de Identidad Gubernamental
  * Pasaporte
  * Licencia de Conducir
* **Establecer un Límite de Intentos**: Esto permite a los usuarios definir cuántos escaneos de documentos fallidos se permiten antes de que el proceso se bloquee. El rango es personalizable, desde 3 hasta 10 intentos. Esto es crítico para controlar intentos fraudulentos potenciales y asegurar uso eficiente de recursos.

<img src="/img/smartenroll/document-verification-methods.png" alt="Métodos de Verificación de Documentos" />

* **Métodos de Verificación de ID**:
  * **Opción 1**: Subir una copia digital de un documento de ID.
  * **Opción 2**: Usar la cámara del dispositivo para escanear el ID físico para verificación en tiempo real.
* **Verificación de Base de Datos**: Se pueden hacer verificaciones adicionales contra bases de datos gubernamentales. Los usuarios pueden agregar:
  * **Verificación de ID con Fuentes Gubernamentales**: Compara la información extraída con registros oficiales para verificar la autenticidad del documento.
  * **Verificación de Antecedentes Penales**: Consulta bases de datos para ver si el individuo tiene antecedentes penales.

:::tip Nota Clave
Este paso es donde el usuario configura métodos de verificación para autenticar documentos con una capa adicional de seguridad vía verificaciones externas.
:::

---

### 4. Registro Biométrico

<img src="/img/smartenroll/biometric-registration.png" alt="Configuración de Registro Biométrico" />

**Registro Biométrico:** Esta es la parte de verificación biométrica del flujo, donde se verifica el rostro de un usuario para confirmar su presencia durante el proceso de incorporación.

* **Establecer un Límite de Intentos**: Especifica cuántas veces puede fallar un usuario en la detección de vida antes de ser bloqueado de continuar. Los intentos permitidos pueden ser personalizados de 3 a 10.
* **Puntuación de Vida:** Personaliza el umbral para detección de vida. Esta puntuación determina qué tan estricto es el sistema en verificar que la entrada biométrica es de una persona viva, no de una imagen estática o video. La recomendación por defecto es 50%, lo que asegura que la verificación de vida funcione óptimamente en la mayoría de dispositivos.
* **Puntuación de Comparación:** Esta puntuación establece la precisión de comparar (1:1) el rostro del usuario final con el documento proporcionado. Una puntuación más alta significa más seguridad, criterios de coincidencia más estrictos, y demanda una mayor semejanza al usuario para obtener acceso. La puntuación recomendada para rendimiento óptimo es 85%.

:::warning Aviso de Seguridad
Puntuaciones más altas proporcionan mejor seguridad pero pueden aumentar las tasas de rechazo falso. Prueba con tu base de usuarios para encontrar el equilibrio óptimo.
:::

---

### 5. Conectar Base de Datos

Este paso es crítico para integrar tu proceso KYC con bases de datos externas o usar archivos CSV para listas, como listas negras. Este paso ofrece flexibilidad basada en el tamaño, tipo y frecuencia de actualizaciones a tus datos.

#### Gestión de Lista Negra: Subir un CSV o Conectar vía API

##### 1. Subir una Lista Negra (CSV)

<img src="/img/smartenroll/csv-blacklist.png" alt="Subida de Lista Negra CSV" />

* **Cuándo Usar un CSV**:
  * **Listas Estáticas o Pequeñas**: Los archivos CSV son ideales cuando tienes una lista negra fija y más pequeña que no cambia frecuentemente. Esto puede incluir casos donde tu lista negra está compuesta de unos cientos de entradas, como individuos fraudulentos conocidos, o entidades bloqueadas, cuyos datos no cambiarán con el tiempo.
  * **Sin Base de Datos o Sistema Simple**: Si tu organización no mantiene una base de datos dinámica o prefiere no lidiar con la complejidad de integración de base de datos, una subida CSV proporciona una alternativa fácil de usar. Esto es especialmente útil para pequeñas empresas o aquellas con recursos técnicos limitados.
  * **Mantenimiento Sin Conexión**: En entornos donde el acceso a internet puede ser limitado, o para negocios que rastrean manualmente sus listas (ej., usando Excel u otras herramientas sin conexión), subir un CSV permite actualizaciones periódicas sin la necesidad de una solución conectada, siempre en línea.

* **Cómo Funciona**:
  * Los usuarios pueden subir un archivo CSV conteniendo hasta **500 entradas por carga**. Estas entradas representan los individuos o entidades que quieres bloquear de acceder a tu sistema.
  * Una vez subido, la plataforma usa esta lista negra para **restringir acceso** a cualquiera en la lista, previniendo que completen el proceso KYC.

* **Beneficios Clave**:
  * **Simplicidad**: No hay necesidad de configuración de API o una base de datos constantemente actualizada. Los usuarios pueden gestionar y subir CSVs según sea necesario.
  * **Bajo Mantenimiento**: Apropiado para organizaciones que no esperan cambios o actualizaciones frecuentes a sus listas negras.
  * **Costo-Efectivo**: No hay necesidad de invertir en infraestructura adicional o servicios para gestionar bases de datos dinámicamente.

##### 2. Conectar con API: Gestión Dinámica de Lista Negra

<img src="/img/smartenroll/api-blacklist.png" alt="Conexión de Lista Negra API" />

* **Cuándo Usar una API**:
  * **Listas Dinámicas y Frecuentemente Actualizadas**: Las APIs son ideales para listas negras más grandes y dinámicas que están cambiando constantemente o necesitan actualizaciones en tiempo real. Esto podría ser el caso para organizaciones que manejan un gran volumen de datos de clientes o quieren sincronizar automáticamente con sistemas de terceros para asegurar que su lista negra esté siempre actualizada.
  * **Base de Datos Centralizada**: Para negocios que ya mantienen una base de datos centralizada o desean conectar sus sistemas para validación en tiempo real, la integración API asegura que los datos de lista negra se extraigan y apliquen en tiempo real durante el proceso KYC.
  * **Múltiples Fuentes**: Si la lista negra necesita ser compilada de múltiples fuentes externas o bases de datos, una API te permite integrar esos sistemas perfectamente.

* **Cómo Funciona**:
  * Los usuarios proporcionan un **endpoint de API** que el sistema usará para extraer dinámicamente datos de lista negra.
  * Esto asegura que cada vez que un usuario intenta registrarse o completar el proceso KYC, el sistema consulta la API para verificar si ese individuo está en la lista negra.
  * La conexión API asegura que cualquier cambio hecho a tu lista negra (adiciones o eliminaciones) se refleje inmediatamente en el proceso KYC sin requerir intervención manual.

* **Beneficios Clave**:
  * **Actualizaciones en Tiempo Real**: Las conexiones API aseguran que tu lista negra esté siempre actualizada, reflejando cualquier cambio o nueva entrada tan pronto como suceda.
  * **Eficiencia**: Para negocios que necesitan gestionar listas negras a gran escala o que cambian frecuentemente, las APIs agilizan el proceso, reduciendo trabajo manual y errores potenciales.
  * **Escalabilidad**: A medida que tu negocio crece, la conexión API puede escalar para acomodar conjuntos de datos más grandes e integrar con otros sistemas, haciéndola ideal para entornos más complejos.

#### Conexiones de Proyecto

<img src="/img/smartenroll/project-connections.png" alt="Configuración de Conexiones de Proyecto" />

**Integración de Webhook:**

* Los usuarios también pueden configurar un **Webhook** para recibir notificaciones cada vez que se agrega una nueva entrada, o alguien intenta acceder al sistema que está en la lista negra. Esto mejora la capacidad del sistema para alertas y monitoreo en tiempo real.

**URL de Redirección:**

* Después de completar el proceso KYC, los usuarios serán redirigidos a una URL específica que configuras. Esta URL puede ser personalizada basada en tu flujo (ej., redirección a un panel de control, acciones adicionales, o simplemente una página de agradecimiento).

---

### 6. Personalizar el Estilo

<img src="/img/smartenroll/customize-style.png" alt="Personalización de Estilo" />

Esta sección permite personalización completa de los elementos visuales del flujo KYC:

* **Logo**: Los usuarios pueden subir el logo de su empresa, que se mostrará durante todo el proceso KYC.
* **Imagen**: Los usuarios pueden subir imágenes adicionales para acompañar el flujo KYC para una experiencia más personalizada.
* **Colores**: La interfaz permite a los usuarios seleccionar un esquema de colores para coincidir con la identidad de su marca. Las personalizaciones incluyen:
  * Color del Título
  * Color del Texto
  * Color del Botón
  * Color de Fondo
  * Color de Fondo Derecho (para componentes específicos de UI).

:::tip Nota Clave
La personalización asegura que la App Cliente Verifik se alinee perfectamente con las pautas de marca del usuario.
:::

---

### 7. Invitar a Tu Personal

<img src="/img/smartenroll/invite-staff.png" alt="Invitación de Personal" />

* **Miembros del Proyecto**: Los usuarios pueden gestionar su equipo invitando miembros del equipo a colaborar en el proyecto. Cada miembro puede ser asignado un rol específico, como "editor," permitiéndoles ciertos permisos dentro del proyecto.
* **Invitar Miembros**: Este campo permite a los usuarios buscar e invitar nuevos miembros de su espacio de trabajo para unirse al proyecto.

:::tip Nota Clave
Esta característica proporciona colaboración de equipo y gestión de roles para mejorar la eficiencia del proyecto.
:::

---

## Mejores Prácticas

### Recomendaciones de Seguridad

1. **Establecer Límites de Intentos Apropiados**: Configura límites de intentos basados en tus requisitos de seguridad y necesidades de experiencia del usuario.
2. **Usar Puntuaciones Recomendadas**: Comienza con las puntuaciones biométricas recomendadas y ajusta basado en tus resultados de prueba.
3. **Actualizaciones Regulares de Lista Negra**: Mantén tus listas negras actuales para mantener la efectividad de seguridad.
4. **Monitorear Alertas de Webhook**: Configura monitoreo apropiado para notificaciones de webhook para responder rápidamente a eventos de seguridad.

### Consejos de Experiencia del Usuario

1. **Instrucciones Claras**: Proporciona instrucciones claras a los usuarios sobre qué documentos son aceptables.
2. **Optimización Móvil**: Asegura que tu flujo KYC funcione bien en dispositivos móviles ya que muchos usuarios completan la incorporación en sus teléfonos.
3. **Consistencia de Marca**: Usa opciones de personalización para mantener la identidad de tu marca durante todo el proceso.
4. **Probar a Fondo**: Prueba el flujo completo con diferentes escenarios de usuario antes de ir en vivo.

### Consideraciones de Cumplimiento

1. **Protección de Datos**: Asegura que tu política de privacidad y términos sean integrales y cumplan con las regulaciones locales.
2. **Documentación**: Mantén registros de tu configuración de proceso KYC para propósitos de auditoría.
3. **Revisiones Regulares**: Revisa y actualiza periódicamente tu proceso KYC para mantener el cumplimiento.

---

## Soporte

Para soporte técnico y asistencia de implementación, contacta a nuestro equipo de soporte o visita nuestro portal de desarrolladores.

:::tip Consejo Pro
Comienza con la configuración básica y gradualmente agrega más pasos de verificación a medida que te familiarizas con la plataforma.
:::

:::warning Importante
Siempre prueba tu flujo KYC a fondo en un entorno sandbox antes de desplegar a producción.
:::
