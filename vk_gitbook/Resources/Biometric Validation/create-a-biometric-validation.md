# Create a Biometric Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/biometric-validations`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This process ensures the authenticity of users by verifying their unique biometric characteristics through advanced security technology.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### **Body**

<table><thead><tr><th width="150.4600830078125">Name</th><th width="116.53564453125">Type</th><th width="111.47998046875">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>project</code></td><td>string</td><td><strong>Yes</strong></td><td>The unique identifier for the project where this biometric validation will be used.</td></tr><tr><td><code>projectFlow</code></td><td>string</td><td><strong>Yes</strong></td><td>The unique identifier for the project flow configuration.</td></tr><tr><td><code>identifier</code></td><td>string</td><td><strong>Yes</strong></td><td>A unique identifier for the user or session (e.g., email, phone, or custom ID).</td></tr><tr><td><code>type</code></td><td>string</td><td><strong>Yes</strong></td><td>Type of validation: <code>validation</code>, <code>login</code>, <code>onboarding</code>, or <code>oneTimeLink</code>.</td></tr><tr><td><code>expiresAt</code></td><td>string</td><td>No</td><td>Optional expiration date for the validation session.</td></tr><tr><td><code>redirectUrl</code></td><td>string</td><td>No</td><td>Optional URL for redirect after validation.</td></tr><tr><td><code>webhookUrl</code></td><td>string</td><td>No</td><td>Optional webhook URL for validation notifications.</td></tr><tr><td><code>requires2FA</code></td><td>boolean</td><td>No</td><td>Optional flag indicating if two-factor authentication is required.</td></tr><tr><td><code>ipAddress</code></td><td>string</td><td>No</td><td>Optional IP address of the user.</td></tr><tr><td><code>sendViaEmail</code></td><td>boolean</td><td>No</td><td>Optional flag to send validation link via email.</td></tr><tr><td><code>email</code></td><td>string</td><td>No</td><td>Email address to send validation link to (required if sendViaEmail is true).</td></tr><tr><td><code>language</code></td><td>string</td><td>No</td><td>Language for email templates (en/es). Defaults to "en".</td></tr></tbody></table>

#### **`type` Values**

<table><thead><tr><th width="182.3507080078125">Value</th><th>Description</th></tr></thead><tbody><tr><td><code>validation</code></td><td>General biometric identity validation.</td></tr><tr><td><code>login</code></td><td>Biometric verification during user authentication.</td></tr><tr><td><code>onboarding</code></td><td>Biometric verification during user registration.</td></tr></tbody></table>

### **Body Examples**

#### **Basic Biometric Validation**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "identifier": "user@example.com",
  "type": "validation"
}
```

#### **Advanced Biometric Validation with Email**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "identifier": "user@example.com",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://yourapp.com/success",
  "webhookUrl": "https://yourapp.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": true,
  "email": "user@example.com",
  "language": "en"
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/biometric-validations \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "identifier": "user@example.com",
    "type": "validation"
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  project: "507f1f77bcf86cd799439011",
  projectFlow: "507f1f77bcf86cd799439015",
  identifier: "user@example.com",
  type: "validation"
};

axios.post('https://api.verifik.co/v2/biometric-validations', data, {
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

fun createBiometricValidation() {
    val url = URL("https://api.verifik.co/v2/biometric-validations")
    val jsonBody = """
        {
          "project": "507f1f77bcf86cd799439011",
          "projectFlow": "507f1f77bcf86cd799439015",
          "identifier": "user@example.com",
          "type": "validation"
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

func createBiometricValidation() {
    let url = URL(string: "https://api.verifik.co/v2/biometric-validations")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "project": "507f1f77bcf86cd799439011",
        "projectFlow": "507f1f77bcf86cd799439015",
        "identifier": "user@example.com",
        "type": "validation"
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

### **Response**

The response will contain information about the new `Biometric Validation` instance, including the liveness session details, validation URL, and authentication token.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "livenessSession": {
      "_id": "674de8df21c72be3cc42b8a7",
      "identifier": "user@example.com",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "active",
      "expiresAt": "2024-12-02T17:15:35.000Z",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "biometricValidation": {
      "_id": "674de8df21c72be3cc42b8a8",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "new",
      "livenessSession": "674de8df21c72be3cc42b8a7",
      "type": "validation",
      "url": "https://access.verifik.co/stand-alone/507f1f77bcf86cd799439011?type=liveness",
      "assignedCollection": "507f1f77bcf86cd799439016",
      "collectionCode": "col_12345",
      "redirectUrl": null,
      "webhook": null,
      "requires2FA": false,
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "missing project"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "Project_not_found_or_featured_disabled",
  "message": "404:Project_not_found_or_featured_disabled"
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Liveness Session**: A secure session is automatically created with a 4-minute expiration for security.
* **Collection Requirement**: The project must have an assigned collection for biometric data storage.
* **Feature Activation**: Liveness detection must be enabled in the project flow configuration.
* **URL Generation**: The validation URL is automatically generated based on the project and validation type.
* **Email Integration**: Optional email notifications can be sent with validation links in English or Spanish.
* **Security**: Each session gets a unique JWT token for secure authentication.

### **Common Use Cases**

* **User Registration**: Verify identity during account creation with biometric data
* **Login Security**: Add biometric verification to user authentication
* **KYC Processes**: Comprehensive identity verification for compliance
* **High-Security Access**: Multi-factor authentication with biometrics

Once your **Biometric Validation** is created, users can access the provided URL to complete their liveness detection and facial recognition verification. The session will remain active for 4 minutes, after which it expires for security purposes.
