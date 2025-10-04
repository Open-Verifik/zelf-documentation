# List all Document Validations

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/document-validations`

This endpoint allows you to retrieve a list of all Document Validations within the Verifik API. You can use this to get a detailed overview of multiple document validations, including their status, associated project, validation methods, and more.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Parameter                | Type   | Description                                                                                                                                                                 |
| ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`                   | number | Specifies the page number for pagination, starting from 1.                                                                                                                  |
| `perPage`                | number | Defines the number of items per page for pagination.                                                                                                                        |
| `populates[]`            | string | <p>Populates the specified field, transforming ObjectId references into full objects. Available options: <br><br><code>appRegistration</code>, <code>projectFlow</code></p> |
| `where_status`           | string | Where condition to filter by status. Options: ASSESSING, ACTIVE, FAILED, NEEDS\_MANUAL\_VERIFICATION, NOT\_FOUND, EXPIRED, ACTIVE\_BUT\_UNVERIFIED                          |
| `where_documentType`     | string | Filter by document type (e.g., "driver\_license", "passport", "national\_id")                                                                                               |
| `where_validationMethod` | string | Filter by validation method. Options: MANUAL, OCR, SCAN\_PROMPT, SCAN\_STUDIO                                                                                               |
| `where_type`             | string | Filter by validation type. Options: validation, login, signup, ocr, demo                                                                                                    |
| `where_inputMethod`      | string | Filter by input method. Options: CAMERA, FILE\_UPLOAD, NOT\_SET                                                                                                             |

#### **Request**

{% tabs %}
{% tab title="Python" %}

```python
import http.client

payload = ""
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", "/v2/document-validations", payload, headers)
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
    url: "https://api.verifik.co/v2/document-validations",
    maxBodyLength: Infinity,
    headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
    },
};

axios
    .request(config)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl -X GET "https://api.verifik.co/v2/document-validations" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/document-validations")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    guard let data = data, error == nil else {
        print("Error:", error ?? "Unknown error")
        return
    }
    
    if let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 {
        do {
            let jsonResponse = try JSONSerialization.jsonObject(with: data, options: [])
            print("Response JSON:", jsonResponse)
        } catch {
            print("Error parsing JSON:", error)
        }
    } else {
        print("Failed to fetch Document Validations, Status Code:", (response as? HTTPURLResponse)?.statusCode ?? 0)
    }
}
task.resume()
```

{% endtab %}

{% tab title="Kotlin" %}

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request

val client = OkHttpClient()
val request = Request.Builder()
    .url("https://api.verifik.co/v2/document-validations")
    .get()
    .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
    .build()

client.newCall(request).execute().use { response ->
    if (response.isSuccessful) {
        response.body?.string()?.let { println("Response JSON: $it") }
    } else {
        println("Failed to fetch Document Validations, Status Code: ${response.code}")
    }
}
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
    ]
}
```

{% endtab %}

{% tab title="200 - Paginated" %}

```json
{
    "total": 12,
    "limit": 20,
    "page": 1,
    "pages": 1,
    "data": [
        {
            "_id": "507f1f77bcf86cd799439011",
            "age": "25",
            "appRegistration": "507f1f77bcf86cd799439012",
            "client": "507f1f77bcf86cd799439013",
            "country": "United States",
            "documentType": "driver_license",
            "documentNumber": "DL123456789",
            "status": "ACTIVE",
            "type": "validation",
            "validationMethod": "OCR",
            "inputMethod": "CAMERA",
            "imageValidated": true,
            "namesMatch": true,
            "firstNameMatchPercentage": 95.5,
            "lastNameMatchPercentage": 88.5,
            "fullNameMatchPercentage": 92.0,
            "project": "507f1f77bcf86cd799439014",
            "projectFlow": "507f1f77bcf86cd799439015",
            "createdAt": "2025-01-01T00:00:00.000Z",
            "updatedAt": "2025-01-01T00:00:00.000Z"
        }
    ]
}
```

{% endtab %}
{% endtabs %}
