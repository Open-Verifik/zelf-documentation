# The DocumentLiveness Object

**Attributes**

***

**`client` - ObjectId - Required**

Reference to the client who owns this document liveness record.

***

**`appRegistration` - ObjectId - Required**

Reference to the app registration associated with this document liveness validation.

***

**`imageSaved` - Boolean - Optional - Default: false**

Indicates whether the processed document image has been saved to storage.

***

**`imageUrl` - String - Optional - Default: ""**

URL where the processed document image is stored (when imageSaved is true).

***

**`validateScreenReplay` - Boolean - Optional - Default: false**

Enable screen replay detection to identify documents displayed on screens or monitors.

***

**`validatePrintedCopy` - Boolean - Optional - Default: false**

Enable printed copy detection to identify photocopied or printed versions of documents.

***

**`validatePortraitSubstitution` - Boolean - Optional - Default: false**

Enable portrait substitution detection to identify when photos on documents have been replaced.

***

**`validateDigitalManipulation` - Boolean - Optional - Default: false**

Enable digital manipulation detection to identify digitally altered or edited documents.

***

**`sreenReplayScore` - Number - Optional - Default: 0**

Liveness score for screen replay detection (0-1 scale, where 1 indicates authentic document).

***

**`printedCopyScore` - Number - Optional - Default: 0**

Liveness score for printed copy detection (0-1 scale, where 1 indicates authentic document).

***

**`portraitSubstitutionScore` - Number - Optional - Default: 0**

Liveness score for portrait substitution detection (0-1 scale, where 1 indicates authentic document).

***

**`digitalManipulationScore` - Number - Optional - Default: 0**

Liveness score for digital manipulation detection (0-1 scale, where 1 indicates authentic document).

***

**`screenReplayProbability` - Number - Optional - Default: 0**

Probability score indicating likelihood of screen replay fraud (0-1 scale, where 0 indicates authentic).

***

**`printedCopyProbability` - Number - Optional - Default: 0**

Probability score indicating likelihood of printed copy fraud (0-1 scale, where 0 indicates authentic).

***

**`portraitSubstitutionProbability` - Number - Optional - Default: 0**

Probability score indicating likelihood of portrait substitution fraud (0-1 scale, where 0 indicates authentic).

***

**`digitalManipulationProbability` - Number - Optional - Default: 0**

Probability score indicating likelihood of digital manipulation fraud (0-1 scale, where 0 indicates authentic).

***

**`sreenReplayCalibration` - String - Required - Default: "REGULAR"**

Calibration setting for screen replay detection. Can be "REGULAR", "SOFT", or "HARD".

***

**`printedCopyCalibration` - String - Required - Default: "REGULAR"**

Calibration setting for printed copy detection. Can be "REGULAR", "SOFT", or "HARD".

***

**`portraitSubstitutionCalibration` - String - Required - Default: "REGULAR"**

Calibration setting for portrait substitution detection. Can be "REGULAR", "SOFT", or "HARD".

***

**`digitalManipulationCalibration` - String - Required - Default: "REGULAR"**

Calibration setting for digital manipulation detection. Can be "REGULAR", "SOFT", or "HARD".

***

**`ignoreDocumentCroppedValidation` - Boolean - Optional - Default: false**

Skip validation checks for cropped document images.

***

**`ignoreColourLessValidation` - Boolean - Optional - Default: false**

Skip validation checks for black and white or grayscale document images.

***

**`screenReplayWarnings` - Array - Optional - Default: \[]**

Array of image quality warnings related to screen replay detection.

***

**`printedCopyWarnings` - Array - Optional - Default: \[]**

Array of image quality warnings related to printed copy detection.

***

**`portraitSubstitutionWarnings` - Array - Optional - Default: \[]**

Array of image quality warnings related to portrait substitution detection.

***

**`digitalManipulationWarnings` - Array - Optional - Default: \[]**

Array of image quality warnings related to digital manipulation detection.

***

**`screenReplayErrors` - Array - Optional - Default: \[]**

Array of errors encountered during screen replay detection processing.

***

**`printedCopyErrors` - Array - Optional - Default: \[]**

Array of errors encountered during printed copy detection processing.

***

**`portraitSubstitutionErrors` - Array - Optional - Default: \[]**

Array of errors encountered during portrait substitution detection processing.

***

**`digitalManipulationErrors` - Array - Optional - Default: \[]**

Array of errors encountered during digital manipulation detection processing.

***

**`aggregatedScore` - Number - Optional - Default: 0**

Overall aggregated liveness probability score combining all enabled validation types (0-1 scale, where 0 indicates authentic).

***

#### The Document Liveness Object

```json
{
    "data": {
        "client": "613375a1eab2fe08527f81e2",
        "imageSaved": true,
        "imageUrl": "https://cdn.verifik.co/document-liveness/document-liveness-1755889460500",
        "validateScreenReplay": true,
        "validatePrintedCopy": true,
        "validatePortraitSubstitution": true,
        "validateDigitalManipulation": true,
        "sreenReplayScore": 0.4201007,
        "printedCopyScore": 2.7406464,
        "portraitSubstitutionScore": 10.7250834,
        "digitalManipulationScore": -0.124236,
        "screenReplayProbability": 0.0019733,
        "printedCopyProbability": 0.000001,
        "portraitSubstitutionProbability": 0.948844,
        "digitalManipulationProbability": 0.3582724,
        "sreenReplayCalibration": "REGULAR",
        "printedCopyCalibration": "REGULAR",
        "portraitSubstitutionCalibration": "REGULAR",
        "digitalManipulationCalibration": "REGULAR",
        "ignoreDocumentCroppedValidation": false,
        "ignoreColourLessValidation": false,
        "screenReplayWarnings": [
            "GLARE_ON_IMAGE"
        ],
        "printedCopyWarnings": [
            "GLARE_ON_IMAGE"
        ],
        "portraitSubstitutionWarnings": [
            "GLARE_ON_IMAGE"
        ],
        "digitalManipulationWarnings": [
            "GLARE_ON_IMAGE"
        ],
        "screenReplayErrors": [],
        "printedCopyErrors": [],
        "portraitSubstitutionErrors": [],
        "digitalManipulationErrors": [],
        "aggregatedScore": 0.000001,
        "_id": "68a8bf34d8207d5f3357b643",
        "updatedAt": "2025-08-22T19:04:25.503Z",
        "createdAt": "2025-08-22T19:04:25.503Z",
        "__v": 0,
        "chargesCount": 4
    },
    "signature": {
        "dateTime": "August 22, 2025 7:04 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "08S7B"
}
```
