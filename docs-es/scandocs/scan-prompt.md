---
id: escaneo-prompt
title: Escaneo Prompt
description: API OCR con extracción de texto basada en prompts
slug: /escaneo-prompt
---

# Escaneo Prompt

Escaneo Prompt es nuestra API OCR flexible que utiliza extracción basada en prompts para manejar cualquier tipo de documento con extracción de campos personalizable.

## Resumen

Escaneo Prompt proporciona capacidades OCR versátiles que pueden extraer texto de cualquier tipo de documento usando prompts de lenguaje natural para especificar qué información quieres extraer.

## Endpoint de API

```http
POST https://api.verifik.co/v2/scan/prompt
```

## Parámetros de Solicitud

| Parámetro | Tipo   | Requerido | Descripción                    |
| --------- | ------ | --------- | ------------------------------ |
| image     | File   | Sí        | Imagen del documento a procesar |
| prompt    | String | Sí        | Prompt de lenguaje natural describiendo qué extraer |

## Respuesta

```json
{
  "success": true,
  "data": {
    "extractedText": "Contenido de texto extraído",
    "confidence": 0.85,
    "fields": {
      "field1": "value1",
      "field2": "value2"
    }
  }
}
```

## Ejemplos de Prompts

- "Extrae el nombre, fecha de nacimiento y número de identificación de este documento"
- "Encuentra todas las cantidades monetarias y fechas en esta factura"
- "Extrae el nombre de la empresa, dirección y número de registro"

## Características

- **Flexible**: Funciona con cualquier tipo de documento
- **Basado en Prompts**: Usa lenguaje natural para especificar necesidades de extracción
- **Sin Entrenamiento Requerido**: Listo para usar inmediatamente
- **Personalizable**: Extrae cualquier campo que especifiques

