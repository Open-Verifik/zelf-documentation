# Retrieve a Document Liveness

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/document-liveness/{id}`

With this service, you can bring all document liveness validations that you have processed or if you only want one, you can specify the ID of the document liveness record and the endpoint will return only the selected validation result.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="91.9140625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>string</code></td><td>ID of the Document Liveness record that you want to bring the information.</td></tr></tbody></table>

#### **Request**

{% tabs %}
{% tab title="Python" %}

```python
import http.client

payload = ""
headers = {"Authorization": "Bearer eyJhbGciOiJIXVCJ9.eyJjbGllbn...lt4Cw"}

conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", "/v2/document-liveness/<id>", payload, headers)

res = conn.getresponse()

data = res.read()

print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const config = {
    method: "get",
    url: "https://api.verifik.co/v2/document-liveness/<id>",
    maxBodyLength: Infinity,
    headers: {
        Authorization: "Bearer eyJhbGciOiXVCJ9.eyJjbGllbnR...w1splt4Cw",
    },
};

axios
    .request(config)
    .then((response) => console.log(JSON.stringify(response.data)))
    .catch((error) => console.error(error));
```

{% endtab %}
{% endtabs %}

#### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
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
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "message": "Record not found.",
    "code": "NotFound"
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
