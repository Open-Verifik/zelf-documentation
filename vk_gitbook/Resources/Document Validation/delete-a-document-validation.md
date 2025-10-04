# Delete a Document Validation

<mark style="color:green;">`DELETE`</mark> `https://api.verifik.co/v2/document-validations/{id}`

With this service, you can permanently remove a specific Document Validation record from your Verifik account. This action cannot be undone and will completely remove the document validation data.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Request Parameters

| Name | Type   | Description                                                         |
| ---- | ------ | ------------------------------------------------------------------- |
| `id` | string | The unique identifier of the Document Validation you want to delete |

### Request

{% tabs %}
{% tab title="Python" %}

```python
import http.client

payload = ""
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("DELETE", "/v2/document-validations/{id}", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const config = {
    method: "delete",
    url: "https://api.verifik.co/v2/document-validations/{id}",
    headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN"
    }
};

axios.request(config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl -X DELETE "https://api.verifik.co/v2/document-validations/{id}" \
    -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/document-validations/{id}")!
var request = URLRequest(url: url)
request.httpMethod = "DELETE"
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
        print("Failed to delete Document Validation, Status Code:", (response as? HTTPURLResponse)?.statusCode ?? 0)
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
    .url("https://api.verifik.co/v2/document-validations/{id}")
    .delete()
    .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
    .build()

client.newCall(request).execute().use { response ->
    if (response.isSuccessful) {
        response.body?.string()?.let { println("Response JSON: $it") }
    } else {
        println("Failed to delete Document Validation, Status Code: ${response.code}")
    }
}
```

{% endtab %}
{% endtabs %}

### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "62a0ff1880ba4745a1a94fa1",
        "documentNumber": "123456789",
        "documentType": "DLXX",
        "project": "62ae085c963a3247fda57c4",
        "projectFlow": "62ae0b3c963a3247fda57cb",
        "url": "https://cdn.verifik.co/ocr/samples/sample-image.jpg",
        "status": "ACTIVE_BUT_UNVERIFIED",
        "imageValidated": true,
        "validationMethod": "SCAN_PROMPT",
        "inputMethod": "NOT_SET",
        "namesMatch": true,
        "fullNameMatchPercentage": 100,
        "firstNameMatchPercentage": 100,
        "lastNameMatchPercentage": 100,
        "OCRExtraction": {
            "dateOfBirth": "20-JAN-1990",
            "placeOfBirth": "SAO PAULO",
            "height": "1.72",
            "bloodType": "A+",
            "gender": "Female",
            "age": "Unknown",
            "expeditionDate": "10-FEB-2010",
            "expeditionPlace": "SAO PAULO",
            "barcodeNumber": "A-1234567-8901234-F-1234567890-20230101",
            "country": "Brazil",
            "documentType": "DLXX",
            "firstName": "MARIA CARLA",
            "lastName": "SILVA SANTOS",
            "fullName": "MARIA CARLA SILVA SANTOS",
            "documentNumber": "123456789"
        },
        "scoreValidated": true,
        "type": "signup",
        "appRegistration": "62b03bdfb541ca63ff7241f3",
        "client": "62a7f594e3bb7129d1d89af",
        "updatedAt": "2024-10-29T15:29:37.853Z",
        "createdAt": "2024-10-29T15:28:24.313Z",
        "__v": 0,
        "documentCategory": "DriverLicense",
        "requiresBackSide": false,
        "scoreValidation": {
            "arrayName": ["MARIA", "CARLA", "SILVA", "SANTOS"],
            "dateOfBirth": "20-JAN-1990",
            "documentNumber": "123456789",
            "documentType": "DLXX",
            "expeditionDate": "10-FEB-2010",
            "expeditionPlace": "SAO PAULO",
            "firstName": "MARIA CARLA",
            "fullName": "MARIA CARLA SILVA SANTOS",
            "lastName": "SILVA SANTOS",
            "validatedAt": "2024-10-29 15:29:37"
        }
    },
    "status": "completed"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "DocumentValidation_not_found"
}
```

{% endtab %}
{% endtabs %}

### Error Responses

| Status Code | Description                   |
| ----------- | ----------------------------- |
| 404         | Document Validation not found |

### Important Notes

* **Permanent Action**: Deleting a document validation permanently removes all associated data and cannot be undone
* **App Registration Impact**: If the document validation is linked to an app registration, the link will be automatically removed
* **Data Cleanup**: All OCR extraction data, validation scores, and document metadata will be permanently deleted
* **Authorization Required**: You must have appropriate permissions to delete document validations
