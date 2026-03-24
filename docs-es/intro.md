---
sidebar_position: 1
title: Bienvenido a Zelf World
description: Introducción a ZELF Name Service (ZNS), ZelfProof y conceptos clave que preservan la privacidad.
keywords: [zelf, zelfproof, zns, conocimiento cero, identidad, cifrado, biometría, privacidad]
image: /img/social-card.svg
---

<div className="doc-landing">
  <div className="doc-landing__hero">
    <div className="doc-landing__eyebrow">Biometría que preserva la privacidad</div>
    <h1 className="doc-landing__title">Bienvenido a Zelf World</h1>
    <p className="doc-landing__lede">
      Aprende cómo <strong>Zelf Name Service</strong>, <strong>ZelfProof</strong> y las APIs de ZELF trabajan juntas para cifrar, almacenar y recuperar secretos sensibles sin almacenar datos biométricos.
    </p>
    <div className="doc-landing__actions">
      <a className="button button--primary" href="/docs-es/empezar/como-funciona">Empieza por la arquitectura</a>
      <a className="button button--secondary" href="/docs-es/api/etiquetas/buscar-etiqueta">Explora la API</a>
    </div>
  </div>

  <div className="doc-landing__grid">
    <div className="doc-landing__card">
      <h3>Sin almacenamiento biométrico</h3>
      <p>Tu rostro se utiliza para derivar una prueba, no para guardar una plantilla biométrica reutilizable.</p>
    </div>
    <div className="doc-landing__card">
      <h3>Diseñado para flujos de cifrado</h3>
      <p>Combina sesiones, proofs, gestión de tags y recuperación dentro de un flujo seguro de extremo a extremo.</p>
    </div>
    <div className="doc-landing__card">
      <h3>Documentación para builders</h3>
      <p>Pasa rápidamente de los conceptos del producto a requests reales, respuestas y detalles de implementación.</p>
    </div>
  </div>

  <div className="doc-landing__quick-links">
    <a className="doc-landing__quick-link" href="/docs-es/empezar/como-funciona">
      <strong>Entiende el sistema</strong>
      <span>Comienza con la arquitectura y el modelo central de privacidad.</span>
    </a>
    <a className="doc-landing__quick-link" href="/docs-es/empezar/documento-tecnico">
      <strong>Lee el documento técnico</strong>
      <span>Obtén la base conceptual detrás de ZelfProof y ZNS.</span>
    </a>
    <a className="doc-landing__quick-link" href="/docs-es/empezar/casos-uso">
      <strong>Explora casos de uso</strong>
      <span>Descubre cómo encaja en wallets, recuperación y flujos de identidad.</span>
    </a>
  </div>
</div>

Aquí aprenderás sobre la arquitectura del **Zelf Name Service** y las APIs que pueden combinarse o utilizarse como solución independiente para completar flujos exitosos de cifrado y descifrado de una Prueba Facial de Conocimiento Cero o ZK Face Proof (**"ZelfProof"**), **la primera en el mundo en ser comercializada al público.**

## ¿Qué es Zelf Name Service?

Zelf Name Service (ZNS) es una forma revolucionaria de almacenamiento de frases semilla (clave mnemónica), con un cifrado no biométrico de vanguardia que preserva la privacidad, permitiendo una gestión innovadora de billeteras para garantizar la seguridad sin almacenar o exponer datos biométricos. El rostro del usuario final genera una representación binaria única y no biométrica que llamamos **ZelfProof**, que facilita el cifrado y descifrado altamente seguro.

A diferencia de los sistemas biométricos tradicionales que almacenan plantillas y están sujetos a violaciones o mal uso, Zelf garantiza que nunca se retengan datos biométricos. Es una solución completamente preservadora de la privacidad diseñada para la próxima generación de verificación de identidad, prueba de humanidad y control de acceso seguro.

## Características Clave

1. **Sin Almacenamiento Biométrico:** Los datos biométricos **no se almacenan.** En su lugar, utilizamos reconocimiento facial _para **generar** una representación binaria cifrada, aleatorizada, **preservadora de la privacidad y no biométrica** – que es tu **ZelfProof**._
2. **Detección de Vitalidad:** Nuestro sistema puede verificar la presencia del usuario final, previniendo intentos de suplantación y asegurando que solo el usuario legítimo pueda acceder a la billetera.
3. **Capacidad Sin Conexión:** Zelf funciona tanto en línea como sin conexión, sin requerir conexión a internet para funcionar.
4. **Almacenamiento Fácil:** En lugar de almacenar la información privada en la nube, almacenamiento frío o escrita en un pedazo de papel, los usuarios ahora pueden almacenarla en un Código QR (que contiene el **ZelfProof**) y guardarla en IPFS como un almacenamiento opcional que ayudará al usuario a hacer una copia de seguridad segura y descentralizada, y posteriormente descifrarla presentando el rostro del usuario + la contraseña (opcional).

## Propiedades Clave de un ZelfProof

* **Revocable**: Los ZelfProofs son revocables en la **versión en línea**. Esto significa que si la identidad de un usuario necesita ser actualizada o revocada, se puede generar un nuevo **ZelfProof** desde el mismo rostro y metadatos, pero con una clave criptográfica diferente, invalidando efectivamente el anterior.
* **Sin Conexión y Distribuido**: El proceso de verificación puede realizarse **sin conexión**, haciendo que Zelf sea adecuado para sistemas descentralizados, libros de contabilidad distribuidos y escenarios donde el acceso a internet es limitado o no disponible. La verificación puede ocurrir sin necesidad de acceder a una base de datos centralizada, preservando la privacidad y **mejorando la seguridad.**
* **Credenciales de Múltiples Usos**: Un solo escaneo facial y conjunto de metadatos puede usarse para generar múltiples **ZelfProofs**, permitiendo diferentes claves públicas para diferentes aplicaciones, tales como:  
  * Identificación Gubernamental  
  * Tarjetas de Acceso Corporativo  
  * Prueba de Humanidad para aplicaciones descentralizadas (dApps)  
  * Billeteras
* **Arquitectura de Confianza Cero**: El sistema opera bajo un modelo de confianza cero, lo que significa que ni el verificador ni ningún intermediario obtienen acceso a los datos biométricos del usuario o atributos de identidad durante el proceso de autenticación.

## Ventajas de Zelf y los ZelfProofs

**1. Sin Almacenamiento de Datos Biométricos**

Los sistemas biométricos tradicionales almacenan plantillas que son vulnerables al robo o mal uso. Zelf garantiza que **ningún dato biométrico** sea almacenado o recuperable, eliminando riesgos de cumplimiento y mejorando la confianza del usuario.

Dado que no se almacenan datos biométricos, **no hay riesgo de que esos datos sean hackeados, filtrados o mal utilizados.** La entrada biométrica se usa solo durante la sesión y se descarta inmediatamente después.

**2. Revocabilidad**

A diferencia de las plantillas biométricas tradicionales, que no pueden ser revocadas o regeneradas, los ZelfProof son revocables y renovables. Si un ZelfProof es comprometido, se puede generar uno nuevo y invalidar el anterior, haciendo que Zelf sea adaptable y preparado para el futuro.

**3. No Vinculable**

Cada **ZelfProof** es inherentemente no vinculable, lo que significa que incluso si un usuario genera múltiples ZelfProofs a través de diferentes servicios, no pueden ser vinculados de vuelta a una sola identidad, protegiendo el anonimato y la privacidad del usuario.

**4. Sin Conexión y Distribuido**

Zelf soporta verificación completamente sin conexión, ideal para usar en entornos descentralizados, sin conexión o de baja conectividad. Puede servir como una solución de **identidad auto-soberana**, donde los usuarios mantienen control sobre sus credenciales sin depender de servidores o bases de datos de terceros.

**5. Privacidad Mejorada y Cumplimiento**

Zelf cumple con las regulaciones de privacidad de datos más estrictas, como GDPR, asegurando que nunca se exponga información personalmente identificable (PII) o datos biométricos. Esto reduce significativamente la carga regulatoria en las organizaciones que adoptan Zelf.

## ¿Qué sigue?

- Aprende [Cómo funciona](./empezar/como-funciona)
- Lee el [Documento Técnico](./empezar/documento-tecnico)
- Explora [Casos de uso](./empezar/casos-uso)
