# Create a Document Liveness

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/document-liveness`

A Document Liveness is the result of all the validations performed on the document passed via a base64 image. We have four types of validations that we perform to the document: ***Screen Replay, Printed Copy, Portrait Substitution, Digital Manipulation.** You can also decide to store the base64 into our CDN so you can retrieve the image that you tested.*

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### **Body**

<table><thead><tr><th width="291.7109375">Name</th><th width="121.66015625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>image</code></td><td><code>blob</code></td><td>The document to test in base64 format.</td></tr><tr><td><code>saveImage</code></td><td><code>Boolean</code></td><td>This boolean will define if we save the image or not for further inspection.</td></tr><tr><td><code>validateScreenReplay</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a screen replay</td></tr><tr><td><code>validatePrintedCopy</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a printed copy</td></tr><tr><td><code>validatePortraitSubstitution</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a portrait substitution</td></tr><tr><td><code>validateDigitalManipulation</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a digital manipulation</td></tr><tr><td><code>screenReplayCalibration</code></td><td><code>String</code></td><td><p>You can adjust the calibration from <code>SOFT</code>, <code>REGULAR</code> or <code>HARD</code></p><p>default value is <code>REGULAR</code>.</p></td></tr><tr><td><code>printedCopyCalibration</code></td><td><code>String</code></td><td><p>You can adjust the calibration from <code>SOFT</code>, <code>REGULAR</code> or <code>HARD</code></p><p>default value is <code>REGULAR</code>.</p></td></tr><tr><td><code>portraitSubstitutionCalibration</code></td><td><code>Strnig</code></td><td><p>You can adjust the calibration from <code>SOFT</code>, <code>REGULAR</code> or <code>HARD</code></p><p>default value is <code>REGULAR</code>.</p></td></tr><tr><td><code>ignoreDocumentCroppedValidation</code></td><td><code>Boolean</code></td><td>it will ignore if the document was cropped.</td></tr><tr><td><code>ignoreColourLessValidation</code></td><td><code>Boolean</code></td><td>it will ignore the lack of color in the document.</td></tr></tbody></table>

#### Body example

```json
{
    "image": "{{documentoDeAnuar}}",
    "saveImage": true,
    "validatePrintedCopy": true,
    "validateScreenReplay": true,
    "validatePortraitSubstitution": true,
    "validateDigitalManipulation": true
}
```

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "client": "613375a1eab2fe08527f81e2",
        "imageSaved": true,
        "imageUrl": "https://cdn.verifik.co/document-liveness/document-liveness-1755887332482",
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
        "_id": "68a8b6e4d8207d5f3357b630",
        "updatedAt": "2025-08-22T18:28:57.736Z",
        "createdAt": "2025-08-22T18:28:57.736Z",
        "__v": 0,
        "chargesCount": 4
    },
    "signature": {
        "dateTime": "August 22, 2025 6:28 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "A73ZL"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "message": "At least one validation must be selected. Please enable one of: validateScreenReplay, validatePrintedCopy, validatePortraitSubstitution, or validateDigitalManipulation",
    "code": "MissingParameter"
}
```

{% endtab %}
{% endtabs %}
