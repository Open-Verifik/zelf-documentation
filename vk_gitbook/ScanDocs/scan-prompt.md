# Scan Prompt

## Endpoint \[POST]

```
https://api.verifik.co/v2/ocr/scan-prompt
```

Scan Prompt Document Scanning with AI Integration is an API endpoint that works as a powerful tool designed to streamline the extraction of text from legal documents, supporting your Know Your Customer (KYC) process. This service harnesses advanced AI to automatically detect document types and utilizes proprietary technology for accurate data extraction.

**Features**

1. **AI-Powered Document Type Extraction**: Automatically identifies the type of legal document.
2. **Precise data extraction:** Employs custom technology to extract relevant information with high accuracy.
3. **Flexible prompt templates:** Uses pre-designed system prompts for efficient out-of-the-box extraction. Also allows users to create custom templates to refine logic, adjust extracted fields, or enhance the process by adding/removing data points.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Body**

| Name           | Type    | Description                                                                                              |
| -------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `image`        | string  | Image in Base64 encoded format or a URL where the image is hosted.                                       |
| `cropFace`     | Boolean | if you want to crop the face out of the document, pass this as `true`.                                   |
| `documentType` | String  | you could specify the documentType so the AI doesn't have to guess what document type are we extracting. |

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "xjicp",
  "data": {
    "__v": 0,
    "_id": "64d3ed6aed1c7d7ea391e617",
    "url": "https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1691610471704-image.jpeg",
    "type": "ocr",
    "client": "64404b1f9856cc8cebd762e7",
    "status": "ACTIVE_BUT_UNVERIFIED",
    "deleted": false,
    "createdAt": "2023-08-09T19:47:54.214Z",
    "updatedAt": "2023-08-09T19:47:54.214Z",
    "requires2FA": false,
    "documentType": "CUSTOM",
    "OCRExtraction": {
      "fullName": "Juan Miguel Rodríguez López",
      "lastName": "Rodríguez López",
      "firstName": "Juan Miguel",
      "documentNumber": "01101101 01100001"
    },
    "documentNumber": "01101101 01100001",
    "imageValidated": false,
    "validationMethod": "SCAN_GPT"
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "August 9, 2023 7:47 PM"
  }
}
```

{% endtab %}
{% endtabs %}
