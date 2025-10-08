# Create an App Registration Biometric Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/biometric-validations/app-registration`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection during the onboarding process. This process ensures the authenticity of users by verifying their unique biometric characteristics through advanced security technology. This endpoint is specifically designed for users who are in the middle of an app registration flow.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when creating `App Registration Biometric Validations` is provided from the `App Registration` in creation.
{% endhint %}

### **Body**

| Name    | Type    | Required | Description                                                                                    |
| ------- | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| `image` | string  | **Yes**  | Base64 encoded facial image that will be used for biometric validation and liveness detection. |
| `os`    | string  | **Yes**  | Operating system of the device (e.g., "DESKTOP", "IOS", "ANDROID").                            |
| `force` | boolean | No       | Optional flag to force creation even if a person already exists. Defaults to false.            |

### **Body Examples**

#### **Basic Biometric Validation**

```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  "os": "DESKTOP"
}
```

#### **Advanced Biometric Validation with Force Flag**

```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  "os": "IOS",
  "force": true
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/biometric-validations/app-registration \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "os": "DESKTOP"
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  os: "DESKTOP"
};

axios.post('https://api.verifik.co/v2/biometric-validations/app-registration', data, {
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

fun createAppRegistrationBiometricValidation() {
    val url = URL("https://api.verifik.co/v2/biometric-validations/app-registration")
    val jsonBody = """
        {
          "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
          "os": "ANDROID"
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

func createAppRegistrationBiometricValidation() {
    let url = URL(string: "https://api.verifik.co/v2/biometric-validations/app-registration")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "os": "IOS"
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

The response will contain information about the created biometric validation, including the app registration details, person information, and validation status.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "client": "507f1f77bcf86cd799439013",
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "status": "STARTED",
    "email": "user@example.com",
    "countryCode": "+1",
    "phone": "5551234567",
    "biometricValidation": "674de8df21c72be3cc42b8a8",
    "person": "674de8df21c72be3cc42b8a9",
    "informationValidation": "674de8df21c72be3cc42b8a10",
    "assignedCollection": "507f1f77bcf86cd799439016",
    "createdAt": "2024-12-02T17:05:36.788Z",
    "updatedAt": "2024-12-02T17:05:36.788Z"
  }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "person_already_set",
  "message": "409:person_already_set"
}
```

{% endtab %}

{% tab title="409 (Liveness Failed)" %}

```json
{
  "code": "liveness_failed",
  "message": "409:liveness_failed@0.45"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "appRegistration_not_found",
  "message": "404:appRegistration_not_found"
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **App Registration Required**: This endpoint requires an active app registration session with status "STARTED" or "ONGOING".
* **Liveness Detection**: Advanced anti-spoofing technology ensures the person being verified is physically present.
* **Collection Integration**: The project must have an assigned collection for biometric data storage.
* **Person Creation**: A person record is automatically created and linked to the app registration.
* **Credit Charging**: This endpoint automatically charges credits from your SmartEnroll plan.
* **Image Processing**: Facial images are processed for both biometric matching and liveness detection.
* **Force Flag**: Use the force flag to override existing person records if needed.

### **Onboarding Flow Integration**

This validation endpoint is part of the larger onboarding flow where:

1. User creates an app registration
2. User completes information validation
3. Biometric validation is initiated with facial image
4. Liveness detection and facial recognition are performed
5. Person record is created and linked
6. User can proceed to the next step in the onboarding process

### **Liveness Configuration**

The system uses the following default liveness settings from the project flow:

* **Liveness Minimum Score**: 0.6 (60% confidence)
* **Search Mode**: ACCURATE
* **Search Minimum Score**: 0.9 (90% confidence)

These settings can be customized in your project flow configuration.

### **Common Use Cases**

* **User Registration**: Verify identity during account creation with biometric data
* **KYC Processes**: Comprehensive identity verification for compliance
* **Onboarding Security**: Ensure users are who they claim to be
* **Fraud Prevention**: Advanced liveness detection prevents spoofing attacks

This endpoint is specifically designed for onboarding-type biometric validations. For general validation or login flows, use the standard biometric validation endpoint instead.
