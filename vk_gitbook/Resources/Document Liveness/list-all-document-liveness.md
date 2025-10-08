# List all Document Liveness

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/document-liveness`

With this service, you can bring all document liveness validations that you have processed.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const config = {
    method: "get",
    url: "https://api.verifik.co/v2/document-liveness",
    maxBodyLength: Infinity,
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw",
    },
};

axios
    .request(config)
    .then((response) => console.log(JSON.stringify(response.data)))
    .catch((error) => console.error(error));
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl --location 'https://api.verifik.co/v2/document-liveness' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciXVCJ9.eyJjbGllb...splt4Cw'
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ""

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGckpXVCJ9.eyJjbGllbnR...0w1splt4Cw",
}

conn.request("GET", "/v2/document-liveness", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

#### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": [
        {
            "_id": "68a8bf34d8207d5f3357b643",
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
            "updatedAt": "2025-08-22T19:04:25.503Z",
            "createdAt": "2025-08-22T19:04:25.503Z",
            "__v": 0
        },
        {
            "_id": "68a8bf34d8207d5f3357b644",
            "client": "613375a1eab2fe08527f81e2",
            "imageSaved": false,
            "imageUrl": "",
            "validateScreenReplay": true,
            "validatePrintedCopy": false,
            "validatePortraitSubstitution": false,
            "validateDigitalManipulation": true,
            "sreenReplayScore": 0.8945123,
            "printedCopyScore": 0,
            "portraitSubstitutionScore": 0,
            "digitalManipulationScore": 0.7234567,
            "screenReplayProbability": 0.000002,
            "printedCopyProbability": 0,
            "portraitSubstitutionProbability": 0,
            "digitalManipulationProbability": 0.000005,
            "sreenReplayCalibration": "HARD",
            "printedCopyCalibration": "REGULAR",
            "portraitSubstitutionCalibration": "REGULAR",
            "digitalManipulationCalibration": "SOFT",
            "ignoreDocumentCroppedValidation": false,
            "ignoreColourLessValidation": true,
            "screenReplayWarnings": [],
            "printedCopyWarnings": [],
            "portraitSubstitutionWarnings": [],
            "digitalManipulationWarnings": [
                "LOW_RESOLUTION"
            ],
            "screenReplayErrors": [],
            "printedCopyErrors": [],
            "portraitSubstitutionErrors": [],
            "digitalManipulationErrors": [],
            "aggregatedScore": 0.000003,
            "updatedAt": "2025-08-22T18:45:12.234Z",
            "createdAt": "2025-08-22T18:45:12.234Z",
            "__v": 0
        }
    ],
    "total": 2,
    "limit": 20,
    "page": 1,
    "pages": 1
}
```

{% endtab %}

{% tab title="401" %}

```json
{
    "error": "Protected resource, use Authorization header to get access"
}
```

{% endtab %}
{% endtabs %}
