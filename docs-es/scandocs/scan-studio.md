---
id: escaneo-estudio
title: Escaneo Estudio
description: API OCR con modelos entrenados para extracción de texto de alta precisión
slug: /escaneo-estudio
---

# Escaneo Estudio

Escaneo Estudio es nuestra API OCR avanzada que utiliza modelos entrenados para lograr una extracción de texto de alta precisión desde varios tipos de documentos.

## Resumen

Escaneo Estudio proporciona capacidades OCR especializadas con modelos pre-entrenados para tipos específicos de documentos, asegurando alta precisión y extracción de texto confiable.

## Endpoint de API

```http
POST https://api.verifik.co/v2/scan/studio
```

## Parámetros de Solicitud

| Parámetro | Tipo   | Requerido | Descripción                    |
| --------- | ------ | --------- | ------------------------------ |
| image     | File   | Sí        | Imagen del documento a procesar |
| model     | String | Sí        | Modelo entrenado a usar        |

## Respuesta

```json
{
  "success": true,
  "data": {
    "extractedText": "Contenido de texto extraído",
    "confidence": 0.95,
    "fields": {
      "field1": "value1",
      "field2": "value2"
    }
  }
}
```

## Modelos Disponibles

- **Documentos de Identidad**: Tarjetas de identificación emitidas por el gobierno
- **Licencias de Conducir**: Licencias de conducir de varios países
- **Pasaportes**: Documentos de pasaporte internacional
- **Documentos Empresariales**: Facturas, contratos y formularios empresariales

## Características

- **Alta Precisión**: Los modelos entrenados proporcionan precisión superior
- **Datos Estructurados**: Retorna datos de campos organizados
- **Múltiples Idiomas**: Soporte para varios idiomas
- **Modelos Personalizados**: Disponibles bajo solicitud

