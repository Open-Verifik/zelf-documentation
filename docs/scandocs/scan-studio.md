---
id: scan-studio
title: Scan Studio
description: OCR API with trained models for high accuracy text extraction
---

# Scan Studio

Scan Studio is our advanced OCR API that uses trained models to achieve high accuracy text extraction from various document types.

## Overview

Scan Studio provides specialized OCR capabilities with pre-trained models for specific document types, ensuring high accuracy and reliable text extraction.

## API Endpoint

```http
POST https://api.verifik.co/v2/scan/studio
```

## Request Parameters

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| image     | File   | Yes      | Document image to process      |
| model     | String | Yes      | Trained model to use            |

## Response

```json
{
  "success": true,
  "data": {
    "extractedText": "Extracted text content",
    "confidence": 0.95,
    "fields": {
      "field1": "value1",
      "field2": "value2"
    }
  }
}
```

## Available Models

- **ID Documents**: Government-issued identification cards
- **Driver's Licenses**: Various country driver's licenses
- **Passports**: International passport documents
- **Business Documents**: Invoices, contracts, and business forms

## Features

- **High Accuracy**: Trained models provide superior accuracy
- **Structured Data**: Returns organized field data
- **Multiple Languages**: Support for various languages
- **Custom Models**: Available upon request
