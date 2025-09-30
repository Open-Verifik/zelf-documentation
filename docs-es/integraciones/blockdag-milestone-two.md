---
sidebar_position: 4
---

# BlockDAG Hito 2: Servicio de Nombres

## Resumen

**Duración**: Semanas 5-8  
**Fase**: Implementación del Servicio de Nombres  
**Enfoque**: Dashboard de licencias y analíticas de dominios

Este hito construye sobre la fundación establecida en el Hito 1 para crear un dashboard completo con capacidades de gestión de licencias y analíticas para las etiquetas registradas y ZelfKeys registradas.

---

## Entregables

### 1. Dashboard para Licencias y Analíticas de Dominios

**Objetivo**: Implementar un dashboard con todas las capacidades requeridas para impulsar el acuerdo de licencia completo y analíticas para las etiquetas registradas y ZelfKeys registradas.

**Tareas**:

Tareas generales

- [x] Implementar sistema de registro/inicio de sesión de usuarios con verificación facial/vitalidad
- [x] Agregar flujos de trabajo de recuperación de contraseña y cuenta
- [x] Construir gestión de perfil de usuario con sincronización a almacenamiento IPFS
- [x] Implementar gestión de sesiones y tokens de seguridad
- [ ] Diseñar pantallas de dominio|licencia en el dashboard
- [ ] Implementar la pantalla de Analíticas con datos reales
- [ ] Construir funcionalidad de búsqueda en todos los módulos (Analíticas, Etiquetas, ZelfKeys)
- [ ] Crear centro de notificaciones con alertas en tiempo real
- [ ] Terminar la pantalla de etiquetas con funcionalidad real > incluyendo agregar años de arrendamiento
- [ ] Implementar funcionalidad de exportación de datos (CSV, PDF, Excel)
- [ ] Construir sistema de pagos para la licencia y pagos individuales de etiquetas con crypto, coinbase commerce y Stripe

Para Dashboard ZelfKeys

- [ ] Diseñar interfaz de gestión de ZelfKeys
- [ ] Diseñar pantallas de suscripciones para miembros de Zelf Key

Configuración y Facturación

- [ ] Construir gestión de Plan y Facturación con flujos de actualización/degradación
- [ ] Implementar preferencias de notificación y gestión de canales
- [ ] Crear gestión de equipo con flujos de trabajo de invitación
- [x] Agregar gestión de claves API

**Reglas de Dominio**:
- Los nombres deben tener entre 3-63 caracteres
- Solo caracteres alfanuméricos y guiones permitidos
- No puede comenzar o terminar con guión
- Lista de nombres reservados (admin, www, api, etc.)

**Criterios de Aceptación**:
- Dashboard carga en &lt;2 segundos con todos los módulos funcionales
- Sistema de autenticación de usuarios funcionando con verificación facial/vitalidad
- Pantalla de Analíticas muestra datos en tiempo real con &lt;500ms tiempo de actualización
- Pantalla de gestión de etiquetas soporta operaciones CRUD y gestión de arrendamiento
- Funcionalidad de búsqueda funciona en todos los módulos con &lt;300ms tiempo de respuesta
- Centro de notificaciones entrega alertas en tiempo real con &lt;1 segundo latencia
- Funcionalidad de exportación de datos soporta formatos CSV, PDF y Excel
- Sistema de pagos procesa pagos crypto, Coinbase Commerce y Stripe
- Interfaz de gestión de ZelfKeys permite creación, edición y gestión de suscripciones
- Pantallas de configuración (Plan y Facturación, Notificaciones, Equipo) son completamente funcionales
- Gestión de equipo soporta permisos basados en roles (Admin, Escritura, Lectura)
- Sistema de gestión de claves API operacional con seguridad adecuada
- Diseño responsivo del dashboard funciona en escritorio, tablet y dispositivos móviles

**Esfuerzo Estimado**: 2 semanas

---

### 2. Soporte multi-dominio en la aplicación Zelf Name Service en Extensión, Android e iOS

**Objetivo**: Extender la funcionalidad del Servicio de Nombres Zelf en todas las plataformas con soporte multi-dominio

**Tareas**:
- [ ] Implementar resolución multi-dominio en extensión de navegador
- [ ] Agregar soporte de aplicación Android para múltiples dominios
- [ ] Agregar soporte de aplicación iOS para múltiples dominios
- [ ] Crear sincronización de dominios multiplataforma
- [ ] Construir interfaz de gestión de dominios unificada
- [ ] Implementar caché de dominios específico por plataforma

**Flujo de Registro**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            FLUJO DE TRABAJO DE REGISTRO                             │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. VERIFICACIÓN DE DISPONIBILIDAD DE NOMBRE
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Usuario      │───▶│ Verificar        │───▶│ Devolver         │
   │ ingresa      │    │ disponibilidad   │    │ disponible o    │
   │ nombre deseado│    │ del nombre       │    │ sugerir          │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

2. REGISTRO BIOMÉTRICO
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Captura      │───▶│ Generar          │───▶│ Crear billetera │
   │ facial       │    │ ZelfProof        │    │                  │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Almacenar    │◄───│ Generar código  │◄───│ Encriptar        │
   │ prueba       │    │ QR               │    │ metadatos        │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

3. PROCESAMIENTO DE PAGO
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Calcular     │───▶│ Procesar pago   │───▶│ Confirmar pago   │
   │ tarifa de    │    │ BDAG             │    │ y activar        │
   │ registro     │    │                  │    │ nombre            │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
```

**Criterios de Aceptación**:
- Extensión de navegador resuelve múltiples dominios con &lt;300ms tiempo de respuesta
- Aplicación Android soporta funcionalidad multi-dominio con caché offline
- Aplicación iOS soporta funcionalidad multi-dominio con caché offline
- Sincronización multiplataforma funciona perfectamente en todos los dispositivos
- Interfaz de gestión de dominios unificada consistente entre plataformas
- Caché específico por plataforma mejora rendimiento en 70%

**Esfuerzo Estimado**: 2 semanas (desarrollador móvil)

---

### 3. Integración de Pagos

**Objetivo**: Integrar pagos de tokens BDAG y soporte detallado de la cadena

**Tareas**:
- [ ] Investigar cómo aceptar pagos de BlockDAG
- [ ] Implementar procesamiento de pagos de tokens BDAG
- [ ] Crear sistema de precios dinámicos basado en longitud y popularidad del nombre
- [ ] Construir sistema de confirmación y recibo de pagos

**Características de Pago**:
- Procesamiento de pagos de tokens BDAG
- Descuentos de registro multi-año
- Emails de confirmación de pago
- Seguimiento de historial de transacciones

**Criterios de Aceptación**:
- Pagos BDAG procesándose correctamente
- Sistema de precios dinámicos funcional
- Sistema de confirmación de pagos funcionando
- Mecanismos de reembolso probados y operacionales
- Dashboard de analíticas de pagos completo

**Esfuerzo Estimado**: 1.5 semanas

---

### 4. UI de Aplicación Demo

**Objetivo**: Crear aplicación demo fácil de usar que muestre todas las características

**Tareas**:
- [ ] Diseñar UI de aplicación web responsiva
- [ ] Implementar interfaz de búsqueda y registro de nombres
- [ ] Crear UI de captura y procesamiento biométrico
- [ ] Construir dashboard de gestión de nombres
- [ ] Implementar interfaz de procesamiento de pagos
- [ ] Agregar actualizaciones de estado en tiempo real y notificaciones

**Componentes de UI**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            UI DE APLICACIÓN DEMO                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Header: Logo | Barra Búsqueda | Selector Idioma | Menú Usuario                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│ ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────────────────┐  │
│ │   Búsqueda      │    │   Registro      │    │     Dashboard Mis Nombres        │  │
│ │   Nombres       │    │                 │    │                                 │  │
│ │                 │    │                 │    │                                 │  │
│ │ • Entrada       │    │ • Entrada nombre│    │ • Lista nombres activos        │  │
│ │   búsqueda      │    │ • Captura facial│    │ • Fechas expiración             │  │
│ │ • Sugerencias   │    │ • Formulario    │    │ • Opciones renovación          │  │
│ │ • Disponibilidad│    │   pago          │    │ • Opciones transferencia        │  │
│ │ • Info precios  │    │ • Confirmación  │    │                                 │  │
│ └─────────────────┘    └─────────────────┘    └─────────────────────────────────┘  │
│                                                                                     │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │                           Progreso de Registro                                │ │
│ │                                                                                 │ │
│ │ [Paso 1: Nombre] → [Paso 2: Biométrico] → [Paso 3: Pago] → [Paso 4: Completar] │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Características**:
- Diseño responsivo para móvil y escritorio
- Verificación de disponibilidad de nombres en tiempo real
- Captura biométrica con detección de vida
- Procesamiento de pagos con tokens BDAG
- Dashboard de gestión de nombres
- Seguimiento de progreso de registro

**Criterios de Aceptación**:
- UI funciona en todos los navegadores principales y dispositivos
- Captura biométrica funcional con detección de vida
- Procesamiento de pagos integrado y funcionando
- Dashboard de gestión de nombres completo
- Pruebas de experiencia de usuario completadas con retroalimentación positiva

**Esfuerzo Estimado**: 2 semanas

---

## Arquitectura Técnica

### Sistema de Servicio de Nombres

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 2                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   UI App Demo    │     │                 Servicio Nombres Central                │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Interfaz     │ │────▶│ │ Motor       │  │ Flujo       │  │ Procesamiento   │   │
│ │ Búsqueda     │ │     │ │ Resolución  │  │ Registro    │  │ Pagos           │   │
│ │ Nombres      │ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│ └──────────────┘ │     │                                                          │
│                  │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ ┌──────────────┐ │     │ │ Verificador │  │ Captura     │  │ Integración     │   │
│ │ Dashboard    │ │────▶│ │ Disponibilidad│ │ Biométrica  │  │ Token BDAG      │   │
│ │ Registro    │ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│ └──────────────┘ │     │                                                          │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Capa Almacenamiento                  │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Registro    │  │ Almacenamiento│  │ Registros       │   │
                         │ │ Nombres     │  │ Metadatos    │  │ Pagos           │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Red BlockDAG                              │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Generación  │  │ Procesamiento│  │ Integración      │   │
                         │ │ Direcciones │  │ Transacciones│  │ Contratos        │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---

## Métricas de Éxito

### Métricas Técnicas

- **Resolución de Nombres**: &lt; 250ms tiempo promedio de resolución
- **Éxito de Registro**: &gt;95% tasa de registro exitoso
- **Procesamiento de Pagos**: &lt;30 segundos confirmación de pago
- **Rendimiento UI**: &lt;2 segundos tiempo de carga de página

### Métricas de Negocio

- **Registro de Usuarios**: 100+ registros exitosos de nombres en pruebas
- **Éxito de Pagos**: &gt;98% tasa de éxito de procesamiento de pagos
- **Satisfacción de Usuarios**: &gt;4.5/5 calificación en pruebas de usuario
- **Tiempo de Actividad del Sistema**: 99.9% disponibilidad durante período de pruebas

---

## Mitigación de Riesgos

### Riesgos Técnicos

**Riesgo**: Problemas de rendimiento de resolución de nombres  
**Mitigación**: Implementar sistema de caché y optimizar consultas de base de datos

**Riesgo**: Fallas de procesamiento de pagos  
**Mitigación**: Múltiples proveedores de pago y manejo integral de errores

**Riesgo**: Complejidad de UI/UX  
**Mitigación**: Proceso de diseño iterativo con integración de retroalimentación de usuarios

### Riesgos de Negocio

**Riesgo**: Desafíos de adopción de usuarios  
**Mitigación**: Aplicación demo integral y materiales educativos de usuarios

**Riesgo**: Complejidad de integración de pagos  
**Mitigación**: Pruebas de integración tempranas y métodos de pago de respaldo

---

## Resumen de Entregables

| Entregable | Duración | Esfuerzo | Prioridad |
|------------|----------|----------|-----------|
| Dashboard para Licencias y Analíticas de Dominios | 2 semanas | Alto | Crítico |
| Soporte multi-dominio en la aplicación Zelf Name Service en Extensión, Android e iOS | 2.5 semanas | Alto | Crítico |
| Integración Pagos | 1.5 semanas | Medio | Alto |
| UI Aplicación Demo | 2 semanas | Medio | Alto |

**Duración Total Estimada**: 4 semanas  
**Esfuerzo Total del Equipo**: 3 personas

---

## Próximos Pasos

Al completar el Hito 2, el servicio de nombres estará completamente funcional, habilitando:

- **Hito 3**: Características avanzadas incluyendo autenticación 2FA y marco DID
- **Hito 4**: Despliegue de producción con herramientas comunitarias y analíticas

La fase del servicio de nombres establece la funcionalidad central orientada al usuario que impulsará la adopción y generación de ingresos para el ecosistema BlockDAG.
