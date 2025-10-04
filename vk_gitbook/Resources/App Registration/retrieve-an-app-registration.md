# Retrieve an App Registration

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/app-registrations/{id}`

With this service, you can bring all app registrations that you have created or if you only want one, you can specify the ID of the app registration and the endpoint will return only the selected registration.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="110.8897705078125">Name</th><th width="137.029541015625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the App Registration that you want to bring the information.</td></tr></tbody></table>

**Optional Query Parameters**

<table><thead><tr><th width="133.373291015625">Name</th><th width="158.0018310546875">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>populates[]</code></td><td>string</td><td>Use this to populate additional related data. Available options:<br><br><code>project</code>, <code>projectFlow</code>, <code>emailValidation</code>, <code>phoneValidation</code>, <code>biometricValidation</code>, <code>documentValidation</code>, <code>informationValidation</code>, <code>person</code>, <code>face</code>, <code>documentFace</code>, <code>compareFaceVerification</code>, <code>cryptoValidation</code>, <code>formSubmission</code>, <code>signature</code>, <code>accessControlLog</code></td></tr></tbody></table>

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
conn.request("GET", "/v2/app-registrations/{id}", payload, headers)
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
  url: "https://api.verifik.co/v2/app-registrations/{id}",
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
curl -X GET "https://api.verifik.co/v2/app-registrations/{id}" \
 -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
 -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/app-registrations/{id}")!
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
    print("Failed to fetch App Registration, Status Code:", (response as? HTTPURLResponse)?.statusCode ?? 0)
  }
}
task.resume()
```

{% endtab %}

{% tab title="Kotlin" %}

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response

val client = OkHttpClient()

val request = Request.Builder()
  .url("https://api.verifik.co/v2/app-registrations/{id}")
  .get()
  .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
  .build()

client.newCall(request).execute().use { response ->
  if (response.isSuccessful) {
    response.body?.string()?.let { println("Response JSON: $it") }
  } else {
    println("Failed to fetch App Registration, Status Code: ${response.code}")
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
  "data": {
    "__v": 0,
    "_id": "507f1f77bcf86cd799439011",
    "client": "507f1f77bcf86cd799439012",
    "project": "507f1f77bcf86cd799439013",
    "projectFlow": "507f1f77bcf86cd799439014",
    "smartLink": "507f1f77bcf86cd799439015",
    "status": "STARTED",
    "email": "user@example.com",
    "countryCode": "+1",
    "phone": "1234567890",
    "name": "John Doe",
    "currentStep": "Document Verification",
    "informationValidation": "507f1f77bcf86cd799439016",
    "emailValidation": "507f1f77bcf86cd799439017",
    "phoneValidation": "507f1f77bcf86cd799439018",
    "biometricValidation": "507f1f77bcf86cd799439019",
    "person": "507f1f77bcf86cd799439020",
    "assignedCollection": "507f1f77bcf86cd799439021",
    "documentValidation": "507f1f77bcf86cd799439022",
    "face": "507f1f77bcf86cd799439023",
    "documentFace": "507f1f77bcf86cd799439024",
    "compareFaceVerification": "507f1f77bcf86cd799439025",
    "cryptoValidation": "507f1f77bcf86cd799439026",
    "formSubmission": "507f1f77bcf86cd799439027",
    "signature": "507f1f77bcf86cd799439028",
    "redFlags": 0,
    "redFlagsDetails": {},
    "language": "en",
    "accessControlLog": "507f1f77bcf86cd799439029",
    "failedEmailValidations": [],
    "failedPhoneValidations": [],
    "failedBiometricValidations": [],
    "failedDocumentValidations": [],
    "notes": "Additional verification required.",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
}
```

{% endtab %}
{% endtabs %}
