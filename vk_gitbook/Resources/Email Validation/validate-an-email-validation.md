# Validate an Email Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/email-validations/validate`

This endpoint validates a one-time password (OTP) sent to a user's email address as part of the email verification process. It ensures the user-provided OTP is correct and updates the verification status accordingly. This route is specifically designed for `validation` and `login` type email validations.

### **Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

### **Body**

<table><thead><tr><th width="142.290771484375">Name</th><th width="119.8802490234375">Type</th><th width="105.9453125">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>projectFlow</code></td><td>string</td><td><strong>Yes</strong></td><td>The unique identifier for the project flow where this email validation was created.</td></tr><tr><td><code>email</code></td><td>string</td><td><strong>Yes</strong></td><td>The email address that was used to create the email validation (spaces will be automatically removed and converted to lowercase).</td></tr><tr><td><code>otp</code></td><td>number</td><td><strong>Yes</strong></td><td>The one-time password (OTP) that was sent to the user's email address.</td></tr></tbody></table>

### **Body Examples**

#### **Basic Validation**

```json
{
  "projectFlow": "507f1f77bcf86cd799439015",
  "email": "user@example.com",
  "otp": 123456
}
```

#### **Validation with Additional Context**

```json
{
  "projectFlow": "507f1f77bcf86cd799439015",
  "email": "user@example.com",
  "otp": 123456
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/email-validations/validate \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "projectFlow": "507f1f77bcf86cd799439015",
    "email": "user@example.com",
    "otp": 123456
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  projectFlow: "507f1f77bcf86cd799439015",
  email: "user@example.com",
  otp: 123456
};

axios.post('https://api.verifik.co/v2/email-validations/validate', data, {
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

fun validateEmailValidation() {
    val url = URL("https://api.verifik.co/v2/email-validations/validate")
    val jsonBody = """
        {
          "projectFlow": "507f1f77bcf86cd799439015",
          "email": "user@example.com",
          "otp": 123456
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

func validateEmailValidation() {
    let url = URL(string: "https://api.verifik.co/v2/email-validations/validate")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "projectFlow": "507f1f77bcf86cd799439015",
        "email": "user@example.com",
        "otp": 123456
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

The response will contain information about the validated email validation, including the updated status and any additional data based on the validation type. For `validation` and `login` types, this typically includes basic validation information and potentially authentication tokens.

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "status": "validated",
    "email": "user@example.com",
    "type": "validation",
    "showFaceLivenessRecommendation": false
  }
}
```

### **Notes**

* **OTP Expiration**: OTPs have a limited lifespan (typically 10 minutes) and will expire after the predefined time. Expired OTPs cannot be validated.
* **Demo Mode**: If the project is in demo mode, special demo OTPs may be accepted for testing purposes.
* **Status Updates**: Successful validation automatically updates the email validation status to "validated".
* **Webhook Events**: Validation events trigger webhook notifications for tracking and integration purposes.
* **Face Liveness**: Some project flows may recommend face liveness verification after email validation.
* **Login Tokens**: For login-type validations, a JWT token is returned for authenticated access.
* **Email Formatting**: Email addresses are automatically converted to lowercase and have spaces removed during processing.

### **Validation Types**

#### **Validation Type**

* General email address validation
* Returns basic validation information
* No authentication tokens provided

#### **Login Type**

* Email verification during user login
* Returns authentication token for authenticated access
* May include face liveness recommendations
* Creates or updates app login records

### **Common Use Cases**

* **User Authentication**: Verify email ownership during login processes
* **Account Verification**: Confirm email addresses for general validation purposes
* **Security**: Add an extra layer of security to user authentication flows
* **Integration**: Use the returned tokens and status information to integrate with your application's authentication system

This endpoint is specifically designed for `validation` and `login` type email validations. For onboarding flows, use the App Registration Email Validation endpoint instead.
