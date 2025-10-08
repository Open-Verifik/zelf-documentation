# The Document Validation Object

### **Attributes**

***

**`appRegistration` - ObjectId - Optional**

Reference to the AppRegistration object associated with this document validation.

***

**`client` - ObjectId - Optional**

Reference to the Client object associated with this document validation.

***

**`project` - ObjectId - Optional**

Reference to the Project object associated with this document validation.

***

**`projectFlow` - ObjectId - Optional**

Reference to the ProjectFlow object associated with this document validation.

***

**`documentNumber` - String - Optional**

The number associated with the document being validated.

***

**`documentType` - String - Required**

The type of document, such as ID, Passport, or Driver License.

***

**`documentCategory` - String - Optional**

Category of the document. Default: "Unknown".

***

**`customDocumentType` - String - Optional**

Custom type of document if any specific classification is required.

***

**`country` - String - Optional**

Country where the document was issued.

***

**`nationality` - String - Optional**

Nationality of the document holder.

***

**`age` - String - Optional**

Age of the document holder as recorded on the document.

***

**`gender` - String - Optional**

Gender of the document holder.

***

**`url` - String - Optional**

URL where the document can be accessed.

***

**`backUrl` - String - Optional**

URL for the back side of the document, if applicable.

***

**`status` - String - Required**

Current status of the document validation. Can be:

* `ASSESSING` - Document is being processed
* `ACTIVE` - Document is valid and active
* `FAILED` - Document validation failed
* `NEEDS_MANUAL_VERIFICATION` - Requires human review
* `NOT_FOUND` - Document could not be found
* `EXPIRED` - Document has expired
* `ACTIVE_BUT_UNVERIFIED` - Document is active but not fully verified

***

**`imageValidated` - Boolean - Optional**

Indicates if the document image has been validated. Default: false.

***

**`validationMethod` - String - Required**

Method used for validation. Can be:

* `MANUAL` - Human review
* `OCR` - Optical character recognition
* `SCAN_PROMPT` - AI-powered scanning
* `SCAN_STUDIO` - Advanced scanning studio

***

**`inputMethod` - String - Required**

Method used to input the document. Can be:

* `CAMERA` - Document captured via camera
* `FILE_UPLOAD` - Document uploaded as file
* `NOT_SET` - Input method not specified

***

**`namesMatch` - Boolean - Optional**

Indicates if the names on the document match the expected names. Default: false.

***

**`fullNameMatchPercentage` - Number - Optional**

Percentage of match for the full name. Default: 0.

***

**`firstNameMatchPercentage` - Number - Optional**

Percentage of match for the first name. Default: 0.

***

**`lastNameMatchPercentage` - Number - Optional**

Percentage of match for the last name. Default: 0.

***

**`OCRExtraction` - Object - Optional**

Object containing OCR extraction data if OCR was used.

***

**`scoreValidated` - Boolean - Optional**

Indicates if a validation score is available. Default: false.

***

**`scoreValidation` - Object - Optional**

Object to store validation scores and details.

***

**`type` - String - Required**

Type of validation process. Can be:

* `validation` - Standard document verification
* `login` - Document verification for login flows
* `signup` - Document verification for new user registration
* `ocr` - Optical character recognition processing
* `demo` - Demonstration and testing purposes

***

**`redirectUrl` - String - Optional**

URL to redirect after validation.

***

**`template` - ObjectId - Optional**

Reference to the GPTPromptTemplate object for AI-powered document analysis.

***

**`requiresBackSide` - Boolean - Optional**

Indicates if the back side of the document is required. Default: false.

***

**`infoValidationSupported` - Boolean - Optional**

Indicates if information validation is supported for this document. Default: true.

***

**`infoValidationSupportedReason` - String - Optional**

Reason why information validation is or is not supported.

***

### **The Document Validation Object**

```json
{
    "_id": "507f1f77bcf86cd799439011",
    "age": "25",
    "appRegistration": "507f1f77bcf86cd799439012",
    "backUrl": "https://example.com/back",
    "client": "507f1f77bcf86cd799439013",
    "country": "United States",
    "customDocumentType": "Enhanced Driver License",
    "documentCategory": "Government ID",
    "documentNumber": "DL123456789",
    "documentType": "driver_license",
    "firstNameMatchPercentage": 95.5,
    "fullNameMatchPercentage": 92.0,
    "gender": "Female",
    "imageValidated": true,
    "infoValidationSupported": true,
    "infoValidationSupportedReason": "Document type supported",
    "inputMethod": "CAMERA",
    "lastNameMatchPercentage": 88.5,
    "namesMatch": true,
    "nationality": "US",
    "OCRExtraction": {
        "extractedText": "Sample extracted text",
        "confidence": 0.95
    },
    "project": "507f1f77bcf86cd799439014",
    "projectFlow": "507f1f77bcf86cd799439015",
    "redirectUrl": "https://example.com/success",
    "requiresBackSide": true,
    "scoreValidated": true,
    "scoreValidation": {
        "overallScore": 0.92,
        "threshold": 0.85
    },
    "status": "ACTIVE",
    "template": "507f1f77bcf86cd799439016",
    "type": "validation",
    "url": "https://example.com/document/image",
    "validationMethod": "OCR",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
}
```
