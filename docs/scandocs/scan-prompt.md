---
id: scan-prompt
title: Scan Prompt
description: OCR API with prompt-based text extraction
---

# Scan Prompt

Scan Prompt is our flexible OCR API that uses prompt-based extraction to handle any document type with customizable field extraction.

## Overview

Scan Prompt provides versatile OCR capabilities that can extract text from any document type using natural language prompts to specify what information you want to extract.

## API Endpoint

```http
POST https://api.verifik.co/v2/scan/prompt
```

## Request Parameters

| Parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| image     | File   | Yes      | Document image to process      |
| prompt    | String | Yes      | Natural language prompt describing what to extract |

## Response

```json
{
  "success": true,
  "data": {
    "extractedText": "Extracted text content",
    "confidence": 0.85,
    "fields": {
      "field1": "value1",
      "field2": "value2"
    }
  }
}
```

## Example Prompts

- "Extract the name, date of birth, and ID number from this document"
- "Find all monetary amounts and dates in this invoice"
- "Extract the company name, address, and registration number"

## Features

- **Flexible**: Works with any document type
- **Prompt-Based**: Use natural language to specify extraction needs
- **No Training Required**: Ready to use immediately
- **Customizable**: Extract any fields you specify
