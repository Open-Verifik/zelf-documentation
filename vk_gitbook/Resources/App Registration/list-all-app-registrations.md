# List all App Registrations

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/app-registrations`

This endpoint allows you to retrieve a list of all App Registrations within the Verifik API. You can use this to get a detailed overview of multiple app registrations, including their status, associated project, validation statuses, and more.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="142.161376953125">Parameter</th><th width="136.4913330078125">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>page</code></td><td>number</td><td>Specifies the page number for pagination, starting from 1.</td></tr><tr><td><code>perPage</code></td><td>number</td><td>Defines the number of items per page for pagination.</td></tr><tr><td><code>populates[]</code></td><td>string</td><td>Populates the specified field, transforming ObjectId references into full objects. Available options:<br><br><code>emailValidation</code>, <code>phoneValidation</code>, <code>informationValidation</code>, <code>biometricValidation</code>, <code>documentValidation</code>, <code>documentFace</code>, <code>failedBiometricValidations</code>, <code>project</code>, <code>projectFlow</code></td></tr><tr><td><code>where_status</code></td><td>string</td><td>Where condition to filter by status. Options:<br><br><code>STARTED</code>, <code>ONGOING</code>, <code>COMPLETED_WITHOUT_KYC</code>, <code>COMPLETED</code>, <code>FAILED</code>, <code>NEEDS_MANUAL_VERIFICATION</code>, <code>EXPIRED</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="Python" %}

```python
import http.client

payload = ""
headers = {
  "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", "/v2/app-registrations", payload, headers)
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
  url: "https://api.verifik.co/v2/app-registrations",
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
curl -X GET "https://api.verifik.co/v2/app-registrations" \
 -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
 -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/app-registrations")!
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
    print("Failed to fetch App Registrations, Status Code:", (response as? HTTPURLResponse)?.statusCode ?? 0)
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
  .url("https://api.verifik.co/v2/app-registrations")
  .get()
  .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
  .build()

client.newCall(request).execute().use { response ->
  if (response.isSuccessful) {
    response.body?.string()?.let { println("Response JSON: $it") }
  } else {
    println("Failed to fetch App Registrations, Status Code: ${response.code}")
  }
}
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "client": "507f1f77bcf86cd799439012",
      "project": "507f1f77bcf86cd799439013",
      "projectFlow": "507f1f77bcf86cd799439014",
      "status": "ONGOING",
      "email": "user@example.com",
      "countryCode": "+57",
      "phone": "1234567890",
      "currentStep": "signUpForm",
      "redFlags": 0,
      "language": "en",
      "failedEmailValidations": [],
      "failedPhoneValidations": [],
      "failedBiometricValidations": [],
      "failedDocumentValidations": [],
      "informationValidation": "507f1f77bcf86cd799439015",
      "name": "John Doe",
      "accessControlLog": "507f1f77bcf86cd799439016",
      "updatedAt": "2025-01-01T00:00:00.000Z",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "__v": 1,
      "documentFace": "507f1f77bcf86cd799439017",
      "documentValidation": "507f1f77bcf86cd799439018"
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
      "client": "507f1f77bcf86cd799439012",
      "project": "507f1f77bcf86cd799439013",
      "projectFlow": "507f1f77bcf86cd799439014",
      "status": "ONGOING",
      "email": "user@example.com",
      "countryCode": "+57",
      "phone": "1234567890",
      "currentStep": "signUpForm",
      "redFlags": 0,
      "language": "en",
      "failedEmailValidations": [],
      "failedPhoneValidations": [],
      "failedBiometricValidations": [],
      "failedDocumentValidations": [],
      "informationValidation": "507f1f77bcf86cd799439015",
      "name": "John Doe",
      "accessControlLog": "507f1f77bcf86cd799439016",
      "updatedAt": "2025-01-01T00:00:00.000Z",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "__v": 0,
      "emailValidation": "507f1f77bcf86cd799439019",
      "phoneValidation": "507f1f77bcf86cd799439020",
      "documentFace": "507f1f77bcf86cd799439021",
      "documentValidation": "507f1f77bcf86cd799439022",
      "biometricValidation": null,
      "face": null,
      "person": null,
      "compareFaceVerification": null
    }
  ]
}
```

{% endtab %}
{% endtabs %}
