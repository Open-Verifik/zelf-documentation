# Create an App Registration

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/app-registrations`

An App Registration is an instance within Verifik's system that allows a user to initiate the authentication and validation process using specified project flows, email, and/or phone details. This process ensures the identity of the user and provides secure validation through various verification steps.

{% hint style="warning" %}
When creating an App Registration, a `token` is returned in the request. You must use this token to create [`document validations`](https://docs.verifik.co/resources/document-validations/create-an-app-registration-document-validation), [`email validations`](https://docs.verifik.co/resources/email-validations/create-an-app-registration-email-validation), [`phone validations`](https://docs.verifik.co/resources/phone-validations/create-an-app-registration-phone-validation) and [`biometric validations`](https://docs.verifik.co/resources/biometric-validations/create-an-app-registration-biometric-validation) **for App Registrations**. This ensures the validations are related to the app registrant.\
\
The `token` can be recreated by entering the same information (`phone`/`email`), however, any `phone` or `email` validations previously completed will be deleted. We recommend you have your users complete the `email` and `phone` validations again to re-validate they are the original owner of the data.
{% endhint %}

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

**Body**

| Name          | Type   | Description                                                                                        |
| ------------- | ------ | -------------------------------------------------------------------------------------------------- |
| `project`     | string | The unique ID of the project associated with this registration.                                    |
| `projectFlow` | string | The unique ID of the project flow that defines the registration and validation process.            |
| `email`       | string | The email address for the user to be registered. (Either `email` or `phone` is required).          |
| `phone`       | string | The phone number for the user to be registered. (Either `email` or `phone` is required).           |
| `countryCode` | string | The country code associated with the phone number. Required if `phone` is provided. Format: `+123` |
| `fullName`    | string | The full name of the person being registered.                                                      |
| `language`    | string | The preferred language for communication during the registration process. Default: `"en"`.         |

**Minimal Body Data**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439012",
  "email": "user@example.com"
}
```

**Full Body Data**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439012",
  "email": "user@example.com",
  "phone": "1234567890",
  "countryCode": "+1",
  "fullName": "John Doe",
  "language": "es"
}
```

### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/app-registrations \
 -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
 -H "Content-Type: application/json" \
 -d '{
   "project": "507f1f77bcf86cd799439011",
   "projectFlow": "507f1f77bcf86cd799439012",
   "email": "user@example.com",
   "phone": "1234567890",
   "countryCode": "+1",
   "fullName": "John Doe",
   "language": "es"
 }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  project: "507f1f77bcf86cd799439011",
  projectFlow: "507f1f77bcf86cd799439012",
  email: "user@example.com",
  phone: "1234567890",
  countryCode: "+1",
  fullName: "John Doe",
  language: "es"
};

axios.post('https://api.verifik.co/v2/app-registrations', data, {
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

fun createAppRegistration() {
    val url = URL("https://api.verifik.co/v2/app-registrations")
    val jsonBody = """
        {
          "project": "507f1f77bcf86cd799439011",
          "projectFlow": "507f1f77bcf86cd799439012",
          "email": "user@example.com",
          "phone": "1234567890",
          "countryCode": "+1",
          "fullName": "John Doe",
          "language": "es"
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

func createAppRegistration() {
    let url = URL(string: "https://api.verifik.co/v2/app-registrations")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "project": "507f1f77bcf86cd799439011",
        "projectFlow": "507f1f77bcf86cd799439012",
        "email": "user@example.com",
        "phone": "1234567890",
        "countryCode": "+1",
        "fullName": "John Doe",
        "language": "es"
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

### Response

The response will contain information about the new `App Registration` instance. Important fields include the unique identifier `_id`, the `status` of the registration process, and a `token` to use for subsequent requests to enroll the user.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "appRegistration": {
      "_id": "507f1f77bcf86cd799439013",
      "client": "507f1f77bcf86cd799439014",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439012",
      "status": "STARTED",
      "email": "user@example.com",
      "countryCode": "+1",
      "phone": "1234567890",
      "fullName": "John Doe",
      "language": "es",
      "currentStep": "Document Verification",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    },
    "informationValidation": {
      "_id": "507f1f77bcf86cd799439015"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

{% endtab %}

{% tab title="412" %}

```json
{
  "code": "PreconditionFailed",
  "message": "email domain not allowed"
}
```

```json
{
  "code": "Conflict",
  "message": "email_is_registered_already"
}
```

{% endtab %}

{% tab title="422" %}

```json
{
  "code": "MissingParameter",
  "message": "missing project"
}
```

```json
{
  "code": "MissingParameter",
  "message": "email domain not allowed"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing countryCode"
}
```

{% endtab %}
{% endtabs %}
