# Validate an App Login Biometric Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/biometric-validations/validate`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint processes the biometric data submitted by users to verify their identity and complete the validation process. This is typically used after a user has completed their liveness detection session.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when validating biometric validations must contain a valid `livenessSession` token that was provided during the creation of the biometric validation.\
\
The token provided in this response is the token you can pass to your own application for signing into your application. In the no-code solution, this token is appended to the `redirectUrl` of your `projectFlow`.\
\
E.g., `https://verifik.co?token={token}`&#x20;
{% endhint %}

### **Body**

<table><thead><tr><th width="103.0850830078125">Name</th><th width="114.5078125">Type</th><th width="106.158935546875">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>image</code></td><td>string</td><td><strong>Yes</strong></td><td>Base64 encoded image of the user's face for biometric validation.</td></tr></tbody></table>

### **Body Examples**

#### **Basic Biometric Validation**

```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/biometric-validations/validate \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
};

axios.post('https://api.verifik.co/v2/biometric-validations/validate', data, {
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

fun validateBiometricValidation() {
    val url = URL("https://api.verifik.co/v2/biometric-validations/validate")
    val jsonBody = """
        {
          "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
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

func validateBiometricValidation() {
    let url = URL(string: "https://api.verifik.co/v2/biometric-validations/validate")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
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
            print("Response data:", responseString")
        } else {
            print("Request failed with response: \(String(describing: response))")
        }
    }
    task.resume()
}
```

{% endtab %}
{% endtabs %}

### **Response**

The response will contain information about the validation result, including the person identified, liveness session details, and authentication token.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "appLogin": {
      "_id": "674de8df21c72be3cc42b8a9",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "client": "507f1f77bcf86cd799439013",
      "status": "validated",
      "type": "faceLiveness",
      "biometricValidation": "674de8df21c72be3cc42b8a8",
      "face": "674de8df21c72be3cc42b8aa",
      "name": "John Doe",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:15:36.788Z"
    },
    "livenessSession": {
      "_id": "674de8df21c72be3cc42b8a7",
      "identifier": "user@example.com",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "completed",
      "expiresAt": "2024-12-02T17:15:35.000Z",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:15:36.788Z"
    },
    "person": "674de8df21c72be3cc42b8ab",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "signature": "abc123def456",
  "id": "xyz789"
}
```

{% endtab %}

{% tab title="403" %}

```json
{
  "code": "liveness_session_token_missing",
  "message": "liveness_session_token_missing"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "biometric_validation_not_found",
  "message": "404:biometric_validation_not_found"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "liveness_failed",
  "message": "409:liveness_failed@0.45"
}
```

{% endtab %}
{% endtabs %}

### **Response Fields**

| Field       | Type   | Description                                                     |
| ----------- | ------ | --------------------------------------------------------------- |
| `data`      | object | The validation result data containing all relevant information. |
| `signature` | string | A unique signature for the validation result.                   |
| `id`        | string | A unique identifier for the validation response.                |

#### **Data Fields**

| Field             | Type   | Description                                           |
| ----------------- | ------ | ----------------------------------------------------- |
| `appLogin`        | object | The app login record associated with this validation. |
| `livenessSession` | object | The liveness detection session details.               |
| `person`          | string | The unique identifier of the person identified.       |
| `token`           | string | JWT token for authenticated access.                   |

#### **App Login Fields**

| Field    | Type   | Description                                               |
| -------- | ------ | --------------------------------------------------------- |
| `_id`    | string | Unique identifier of the app login record.                |
| `status` | string | Current status of the login (pending, validated, failed). |
| `type`   | string | Type of authentication (faceLiveness).                    |
| `face`   | string | Reference to the identity image created.                  |
| `name`   | string | Name of the person identified.                            |

#### **Liveness Session Fields**

| Field       | Type   | Description                                             |
| ----------- | ------ | ------------------------------------------------------- |
| `_id`       | string | Unique identifier of the liveness session.              |
| `status`    | string | Session status (active, completed, expired, cancelled). |
| `expiresAt` | string | When the session expires.                               |

### **Notes**

* **Liveness Session Required**: Users must have a valid liveness session token to validate biometric data.
* **Image Processing**: The submitted image is processed through advanced facial recognition algorithms.
* **Liveness Detection**: The system verifies that the submitted image is from a live person, not a photo or video.
* **Score Thresholds**: Liveness validation uses configurable minimum scores (default: 0.55) and search scores (default: 0.85).
* **Person Identification**: The system searches for matching persons in the assigned collection.
* **Automatic Status Updates**: The biometric validation status is automatically updated based on liveness scores and search results.
* **Credit Charging**: For login-type validations, the system may charge credits based on the client's smart access plan.
* **Webhook Events**: Various webhook events are triggered during the validation process for integration purposes.

### **Validation Process**

The validation process follows these steps:

1. **Session Verification**: Validates the liveness session token and checks session status.
2. **Image Analysis**: Processes the submitted facial image through liveness detection.
3. **Person Search**: Searches for matching persons in the assigned collection.
4. **Score Evaluation**: Compares liveness scores against minimum thresholds.
5. **Status Update**: Updates the biometric validation status based on results.
6. **Response Generation**: Returns authentication tokens and person information.

### **Liveness Score Thresholds**

* **Default Liveness Score**: 0.55 (configurable per project flow)
* **Default Search Score**: 0.85 (configurable per project flow)
* **Score Range**: 0.0 to 1.0 (higher is better)
* **Failure Handling**: Scores below threshold result in validation failure

### **Error Scenarios**

* **Liveness Failure**: When the liveness score is below the minimum threshold
* **Person Not Found**: When no matching person is found in the collection
* **Session Expired**: When the liveness session has expired or been completed
* **Collection Issues**: When the assigned collection is not properly configured

### **Common Use Cases**

* **User Authentication**: Verify user identity during login processes
* **Access Control**: Control access to secure applications or areas
* **Fraud Prevention**: Prevent unauthorized access through biometric verification
* **Compliance**: Meet regulatory requirements for user authentication
* **Multi-Factor Authentication**: Add biometric verification to existing security flows

This endpoint is essential for completing the biometric validation process and should be called after users have completed their liveness detection session.
