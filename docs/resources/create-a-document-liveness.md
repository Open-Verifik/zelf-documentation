---
id: create-a-document-liveness
title: Create a Document Liveness
description: Create a document liveness validation to check for document authenticity
---

# Create a Document Liveness

**POST** `https://api.verifik.co/v2/document-liveness`

A Document Liveness is the result of all the validations performed on the document passed via a base64 image. We have four types of validations that we perform to the document: **Screen Replay, Printed Copy, Portrait Substitution, Digital Manipulation.** You can also decide to store the base64 into our CDN so you can retrieve the image that you tested.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Body

| Name                               | Type    | Description                                                                                    |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `image`                            | blob    | The document to test in base64 format.                                                        |
| `saveImage`                        | Boolean | This boolean will define if we save the image or not for further inspection.                 |
| `validateScreenReplay`             | Boolean | Perform a validation to check if the attack came from a screen replay                         |
| `validatePrintedCopy`              | Boolean | Perform a validation to check if the attack came from a printed copy                          |
| `validatePortraitSubstitution`    | Boolean | Perform a validation to check if the attack came from a portrait substitution                 |
| `validateDigitalManipulation`     | Boolean | Perform a validation to check if the attack came from a digital manipulation                  |
| `screenReplayCalibration`          | String  | You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`. |
| `printedCopyCalibration`          | String  | You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`. |
| `portraitSubstitutionCalibration` | String  | You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`. |
| `ignoreDocumentCroppedValidation` | Boolean | It will ignore if the document was cropped.                                                   |
| `ignoreColourLessValidation`      | Boolean | It will ignore the lack of color in the document.                                            |

## Request Example

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/document-liveness",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    image: "base64_encoded_document_image",
    saveImage: true,
    validatePrintedCopy: true,
    validateScreenReplay: true,
    validatePortraitSubstitution: true,
    validateDigitalManipulation: true,
    screenReplayCalibration: "REGULAR",
    printedCopyCalibration: "REGULAR",
    portraitSubstitutionCalibration: "REGULAR",
    ignoreDocumentCroppedValidation: false,
    ignoreColourLessValidation: false
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

## Response Example

```json
{
  "success": true,
  "data": {
    "_id": "document_liveness_123456789",
    "client": "client_123456789",
    "appRegistration": "app_registration_123456789",
    "imageSaved": true,
    "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
    "status": "completed",
    "validationResults": {
      "screenReplay": {
        "passed": true,
        "score": 0.95,
        "details": "No screen replay detected"
      },
      "printedCopy": {
        "passed": true,
        "score": 0.90,
        "details": "No printed copy detected"
      },
      "portraitSubstitution": {
        "passed": true,
        "score": 0.88,
        "details": "No portrait substitution detected"
      },
      "digitalManipulation": {
        "passed": true,
        "score": 0.92,
        "details": "No digital manipulation detected"
      }
    },
    "riskScore": 0.05,
    "confidence": 0.91,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  }
}
```

## Error Responses

```json
{
  "error": "Invalid image format",
  "message": "INVALID_IMAGE_FORMAT"
}
```

```json
{
  "error": "Image too large",
  "message": "IMAGE_TOO_LARGE"
}
```
