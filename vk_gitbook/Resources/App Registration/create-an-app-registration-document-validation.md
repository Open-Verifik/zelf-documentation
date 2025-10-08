# Create an App Registration Document Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/document-validations/app-registration`

A Document Validation is an instance within Verifik's system that allows you to process and validate identity documents during the app registration process. This process ensures the authenticity of user documents and provides secure verification through various analysis methods.

**Headers**

| Name          | Value                                   |
| ------------- | --------------------------------------- |
| Content-Type  | `application/json`                      |
| Authorization | <p><code>Bearer \<token></code><br></p> |

{% hint style="warning" %}
The JWT Token you should use when creating `App Registration Document Validations` is provided from the [`App Registration`](https://docs.verifik.co/resources/app-registrations/create-an-app-registration).
{% endhint %}

**Body**

| Name        | Type    | Description                                                                          |
| ----------- | ------- | ------------------------------------------------------------------------------------ |
| `image`     | string  | The base64 image of the document that will be scanned and analyzed.                  |
| `backImage` | string  | The base64 image of the back side of the document that will be scanned and analyzed. |
| `force`     | boolean | Use `force` to overwrite values from previous attempts                               |

**Minimal Body Data**

```json
{
  "image": "base64_encoded_document_image"
}
```

**Full Body Data**

```json
{
  "image": "base64_encoded_document_image",
  "backImage": "base64_encoded_back_image",
  "force": true
}
```

#### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/document-validations/app-registration \
 -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
 -H "Content-Type: application/json" \
 -d '{
   "image": "base64_encoded_document_image",
   "backImage": "base64_encoded_back_image",
   "force": true
 }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  image: "base64_encoded_document_image",
  backImage: "base64_encoded_back_image",
  force: true
};

axios.post('https://api.verifik.co/v2/document-validations/app-registration', data, {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error.response ? error.response.data : error.message);
});
```

{% endtab %}

{% tab title="Kotlin" %}

```kotlin
import android.os.AsyncTask
import java.io.OutputStream
import java.net.HttpURLConnection
import java.net.URL

fun createDocumentValidation() {
    val url = URL("https://api.verifik.co/v2/document-validations/app-registration")
    val jsonBody = """
        {
          "image": "base64_encoded_document_image",
          "backImage": "base64_encoded_back_image",
          "force": true
        }
    """.trimIndent()
    
    AsyncTask.execute {
        with(url.openConnection() as HttpURLConnection) {
            requestMethod = "POST"
            setRequestProperty("Authorization", "Bearer YOUR_ACCESS_TOKEN")
            setRequestProperty("Content-Type", "application/json")
            doOutput = true
            
            // Write JSON body to the request
            outputStream.use { os: OutputStream ->
                val input = jsonBody.toByteArray(Charsets.UTF_8)
                os.write(input, 0, input.size)
            }
            
            // Read the response
            val responseCode = responseCode
            if (responseCode == HttpURLConnection.HTTP_OK) {
                inputStream.bufferedReader().use {
                    val response = it.readText()
                    println("Response: $response")
                }
            } else {
                println("Request failed with code: $responseCode")
            }
        }
    }
}
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

func createDocumentValidation() {
    let url = URL(string: "https://api.verifik.co/v2/document-validations/app-registration")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "image": "base64_encoded_document_image",
        "backImage": "base64_encoded_back_image",
        "force": true
    ]
    
    // Convert JSON to Data
    request.httpBody = try? JSONSerialization.data(withJSONObject: jsonBody, options: [])
    
    // Send request
    let task = URLSession.shared.dataTask(with: request) { data, response, error in
        if let error = error {
            print("Request error:", error)
            return
        }
        
        if let data = data, let responseString = String(data: data, encoding: .utf8) {
            print("Response data:", responseString)
        } else {
            print("Request failed with response: \(String(describing: response))")
        }
    }
    task.resume()
}
```

{% endtab %}
{% endtabs %}

#### Response

The response will contain information about the new `Document Validation` instance. Important fields include the unique identifier `_id`, the `status` of the validation process, and document analysis results.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "documentValidation": {
      "_id": "507f1f77bcf86cd799439011",
      "appRegistration": "507f1f77bcf86cd799439012",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439014",
      "projectFlow": "507f1f77bcf86cd799439015",
      "documentType": "Passport",
      "documentCategory": "ID",
      "status": "ASSESSING",
      "validationMethod": "OCR",
      "inputMethod": "FILE_UPLOAD",
      "imageValidated": false,
      "namesMatch": false,
      "fullNameMatchPercentage": 0,
      "firstNameMatchPercentage": 0,
      "lastNameMatchPercentage": 0,
      "type": "validation",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
  }
}
```

{% endtab %}

{% tab title="422" %}

```json
{
  "code": "MissingParameter",
  "message": "missing image"
}
```

{% endtab %}
{% endtabs %}
