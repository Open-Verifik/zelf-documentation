---
sidebar_position: 3
---

# BlockDAG Hito 1: Fundación

## Resumen

**Duración**: Semanas 1-4

**Fecha límite**: 30 de septiembre de 2025

**Fase**: Fundación  

**Enfoque**: Infraestructura central y configuración básica de integración

Este hito establece la base técnica fundamental para la integración BlockDAG x Zelf, enfocándose en la integración central de encriptación, desarrollo de API, y adaptación de ZK Face Proof.

---

## Entregables

### 1. Integración de Billetera BlockDAG

**Objetivo**: Generar direcciones nativas de BlockDAG y establecer compatibilidad de billeteras

**Tareas**:
- [x] Investigar formato de direcciones BlockDAG y métodos de generación
- [x] Implementar generación de billeteras compatibles con BlockDAG en SDK Zelf
- [x] Crear funciones de validación de direcciones BlockDAG
- [x] Probar generación de etiquetas en diferentes configuraciones de red BlockDAG
- [x] Documentar endpoints de API para creación de etiquetas

**Criterios de Aceptación**:
- Generar exitosamente direcciones válidas de BlockDAG
- Validación de formato de direcciones funcionando correctamente
- Integración con testnet de BlockDAG funcional
- Documentación completa para generación de billeteras

**Esfuerzo Estimado**: 2 semanas

---

### 2. Desarrollo de API Central

**Objetivo**: Construir endpoints esenciales de API para operaciones del servicio de nombres con soporte multi-dominio (.blockdag | .bdag)

**Tareas**:
- [x] Diseñar arquitectura de API para servicio de nombres BlockDAG
- [x] Implementar endpoint Lease
- [x] Implementar endpoint Lease Offline
- [x] Implementar endpoint Search por TAG específico .blockdag
- [x] Implementar endpoint Search todas las registraciones de tag .blockdag
- [x] Implementar endpoint Decryption
- [x] Implementar endpoint Preview ZelfProof
- [x] Implementar endpoint Preview tag .blockdag
- [x] Implementar compra de dominios tag con crypto > primero con Coinbase commerce
- [x] Crear documentación de API y ejemplos con Docusaurus open source (archivos markdown)

**Criterios de Aceptación**:
- Todos los tres endpoints centrales funcionales
- Manejo adecuado de errores y validación
- Límites de velocidad implementados
- Documentación de API completa
- Pruebas unitarias pasando

**Esfuerzo Estimado**: 2 semanas

---

### 3. Configuración de Pagos

**Objetivo**: Optimizar configuraciones de pagos Multi Dominio. Para aceptar pagos con billeteras Blockchain

**Tareas**:
- [x] Crear el ZelfProof de pago
- [x] Generar y calcular la dirección de pago con precios para los pagos crypto permitidos y sus redes
- [x] Optimizar pagos con ETH, SOL, BTC, BDAG
- [x] Escribir pruebas para pagos con crypto
- [x] Actualizar detalles de pago de Licencia con las opciones de pago crypto permitidas

**Requisitos Técnicos**:
- Optimización de tamaño de pruebas para transacciones BlockDAG
- Compatibilidad con estándares criptográficos de BlockDAG
- Evaluaciones de rendimiento vs implementación actual
- Auditoría de seguridad de algoritmos adaptados

**Criterios de Aceptación**:
- ZK Face Proofs generan correctamente para direcciones BlockDAG
- Tiempo de verificación de pruebas <200ms
- Tamaño de pruebas optimizado para transacciones BlockDAG
- Auditoría de seguridad completada
- Evaluaciones de rendimiento documentadas

**Esfuerzo Estimado**: 1.5 semanas

---

### 4. Configuración de Almacenamiento IPFS

**Objetivo**: Configurar almacenamiento distribuido para metadatos de nombres BlockDAG

**Tareas**:
- [x] Configurar nodo IPFS para integración BlockDAG
- [x] Diseñar esquema de metadatos para nombres BlockDAG
- [x] Implementar cliente de almacenamiento IPFS para ZelfProofs
- [x] Crear sistema de indexación de metadatos
- [x] Probar rendimiento de almacenamiento y recuperación
- [x] Implementar sistemas de respaldo y redundancia (Arweave)

**Criterios de Aceptación**:
- Nodo IPFS operacional y accesible
- Esquema de metadatos finalizado y documentado
- Almacenamiento y recuperación funcionando correctamente
- Sistema de indexación funcional
- Sistemas de respaldo probados y operacionales

**Esfuerzo Estimado**: 1 semana

---

## Arquitectura Técnica

### Componentes del Sistema

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 1                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   SDK Zelf       │     │                 Integración BlockDAG                     │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Gen Billetera│ │────▶│ │ Generación  │  │ Formato     │  │ Funciones       │   │
│ │ (BlockDAG)   │ │     │ │ Direcciones │  │ Direcciones │  │ Validación      │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ ZK Face      │ │────▶│ │ Adaptación  │  │ Compatibilidad│ │ Motor           │   │
│ │ Proof Gen    │ │     │ │ Pruebas     │  │ BlockDAG    │  │ Optimización    │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Capa API                             │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Endpoint    │  │ Endpoint    │  │ Endpoint        │   │
                         │ │ Búsqueda    │  │ Arrendamiento│  │ Desencriptación │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Capa Almacenamiento                     │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Configuración│  │ Esquema     │  │ Sistema         │   │
                         │ │ Nodo IPFS   │  │ Metadatos   │  │ Indexación      │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---

## Mitigación de Riesgos

Nada aún en este Hito

### Riesgos Técnicos

Nada aún en este Hito

### Riesgos de Cronograma

---

## Resumen de Entregables

| Entregable | Duración | Esfuerzo | Prioridad |
|------------|----------|----------|-----------|
| Integración Billetera BlockDAG | 2 semanas | Alto | Crítico |
| Desarrollo API Central | 2 semanas | Alto | Crítico |
| Configuración de Pagos | 1.5 semanas | Medio | Alto |
| Configuración Almacenamiento IPFS | 1 semana | Medio | Alto |

**Duración Total Estimada**: 4 semanas  
**Esfuerzo Total del Equipo**: 3 personas

---

## Próximos Pasos

Al completar el Hito 1, la fundación estará establecida para:

- **Hito 2**: Implementación del servicio de nombres con resolución de dominios
- **Hito 3**: Características avanzadas incluyendo autenticación 2FA y marco DID
- **Hito 4**: Despliegue de producción con herramientas comunitarias y analíticas

La fase de fundación asegura que todos los componentes técnicos centrales funcionen correctamente antes de construir características avanzadas sobre esta infraestructura.