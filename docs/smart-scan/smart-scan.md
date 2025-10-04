---
id: smart-scan
title: Smart Scan
description: OCR technology for document scanning and text extraction
---

# Smart Scan

**OCR** stands for **Optical Character Recognition**. It is a technology that converts different types of documents, such as scanned paper documents, PDF files, or images captured by a digital camera, into editable and searchable data. The primary purpose of OCR is to recognize and extract text from these non-editable formats so that it can be electronically stored, manipulated, and searched.

## How OCR Works

Here's how OCR typically works:

1. **Image acquisition:** The process begins with capturing the document or image using a scanner, camera, or other imaging devices.
2. **Preprocessing:** Before OCR can be applied, the captured image is preprocessed to enhance its quality. This may involve tasks like noise reduction, contrast adjustment, and image straightening to ensure optimal recognition accuracy.
3. **Text recognition:** OCR software analyzes the preprocessed image and attempts to identify patterns and shapes that correspond to individual characters. It compares these patterns to a vast database of known characters and fonts.
4. **Character identification:** The OCR software then matches the recognized patterns with the closest matches in its database and identifies the characters.
5. **Text output:** Once the characters are identified, the OCR software reconstructs the recognized characters into editable and searchable text. This output can be saved in various formats like plain text, Word documents, or PDFs with embedded text.

OCR technology has become an essential tool for digitizing large volumes of printed documents, automating data entry processes, and enabling text-based searches within scanned documents. It is widely used in industries like finance, healthcare, legal, and administrative sectors to improve efficiency and accessibility of information.

## Verifik OCR Solutions

### Scan Prompt
Test our **ScanPrompt** API with any document you have

### Scan Studio
Test our ScanStudio API with the trained models we have

## Specifications

In the following table you will find some considerations of each service, this will help you to make a choice in which specific service it's right for you and your project:

| Properties                          | **SCANPROMPT**   | **SCANSTUDIO**           |
| ----------------------------------- | ---------------- | ------------------------ |
| Accuracy                            | Medium           | High                     |
| Number of Scan fields               | Unlimited Fields | Unlimited Fields         |
| Prompt compatible                   | ✓                | ✗                        |
| Training required from Verifik Team | ✗                | ✓                        |
| No-code Solution                    | ✗                | ✗                        |
| Supported Documents                 | Global           | Global (Need training)   |

## Getting Started

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Base URL

```
https://api.verifik.co/v2/scan
```

## API Endpoints

### Scan Prompt

#### Extract Text with Prompt
```http
POST /prompt/extract
```

### Scan Studio

#### Extract Text with Trained Model
```http
POST /studio/extract
```

## Response Format

All API responses follow a consistent format:

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
  },
  "message": "Text extraction completed successfully"
}
```

## Error Handling

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Rate Limits

- **Scan Prompt**: 50 requests per minute
- **Scan Studio**: 30 requests per minute

## Support

For technical support and API documentation, contact our support team or visit our developer portal.
