# Create an Email Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/email-validations`

An Email Validation is an instance within Verifik's system that allows you to process and validate email addresses during authentication and registration processes. This process ensures the authenticity of user email addresses and provides secure verification through email delivery methods.

### **Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

### **Body**

| Name               | Type    | Required | Description                                                                                                 |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`          | string  | **Yes**  | The unique identifier for the project where this email validation will be used.                             |
| `validationMethod` | string  | **Yes**  | The validation method, set to `verificationCode`.                                                           |
| `email`            | string  | **Yes**  | The email address that will be validated (spaces will be automatically removed and converted to lowercase). |
| `type`             | string  | **Yes**  | Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink`.                                  |
| `expiresAt`        | string  | No       | Optional expiration date for the validation code.                                                           |
| `redirectUrl`      | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`       | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `identityUrl`      | string  | No       | Optional identity verification URL.                                                                         |
| `requires2FA`      | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`        | string  | No       | Optional IP address of the user.                                                                            |

#### **`validationMethod` Values**

| Value              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `verificationCode` | Sends a one-time password (OTP) to the email address for verification. |
| `manual`           | Manual verification process without OTP.                               |

#### **`type` Values**

| Value        | Description                                                                                                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validation` | General email address validation.                                                                                                                                                                                                       |
| `login`      | Email verification during user login.                                                                                                                                                                                                   |
| `onboarding` | Email verification during user registration. **For onboarding - you must use** [create-an-app-registration-email-validation](https://docs.verifik.co/resources/email-validations/create-an-app-registration-email-validation "mention") |

### **Body Examples**

#### **Basic Email Validation**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "validationMethod": "verificationCode",
  "email": "user@example.com",
  "type": "validation"
}
```

#### **Advanced Email Validation**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "validationMethod": "verificationCode",
  "email": "user@example.com",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://yourapp.com/success",
  "webhookUrl": "https://yourapp.com/webhook",
  "identityUrl": "https://yourapp.com/identity",
  "requires2FA": false,
  "ipAddress": "192.168.1.1"
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/email-validations \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project": "507f1f77bcf86cd799439011",
    "validationMethod": "verificationCode",
    "email": "user@example.com",
    "type": "validation"
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  project: "507f1f77bcf86cd799439011",
  validationMethod: "verificationCode",
  email: "user@example.com",
  type: "validation"
};

axios.post('https://api.verifik.co/v2/email-validations', data, {
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

fun createEmailValidation() {
    val url = URL("https://api.verifik.co/v2/email-validations")
    val jsonBody = """
        {
          "project": "507f1f77bcf86cd799439011",
          "validationMethod": "verificationCode",
          "email": "user@example.com",
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

func createEmailValidation() {
    let url = URL(string: "https://api.verifik.co/v2/email-validations")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "project": "507f1f77bcf86cd799439011",
        "validationMethod": "verificationCode",
        "email": "user@example.com",
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

The response will contain information about the new `Email Validation` instance. Important fields include the unique identifier `_id`, the `status` of the validation process, and the encrypted OTP that was sent to the user.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "client": "507f1f77bcf86cd799439013",
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "status": "sent",
    "validationMethod": "verificationCode",
    "email": "user@example.com",
    "emailData": {},
    "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
    "expiresAt": "2024-12-02T17:15:35.000Z",
    "name": null,
    "extraParams": [],
    "type": "validation",
    "redirectUrl": null,
    "webhookUrl": null,
    "requires2FA": false,
    "ipAddress": "172.17.0.1",
    "_id": "674de8df21c72be3cc42b8a7",
    "updatedAt": "2024-12-02T17:05:36.788Z",
    "createdAt": "2024-12-02T17:05:36.788Z",
    "__v": 0,
    "new": true
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
{% endtabs %}

### **Notes**

* **Email Formatting**: Email addresses are automatically converted to lowercase and have spaces removed during processing.
* **OTP Security**: The OTP is encrypted using bcrypt before storage for security.
* **Project Flow**: This endpoint automatically determines the appropriate project flow based on the project and type parameters.
* **Credit System**: This endpoint automatically reduces credits from your account for each email validation created.
* **Validation Types**: Use `validation` or `login` types for general authentication purposes. For onboarding flows, use the App Registration Email Validation endpoint instead.

Once your **Email Validation** is created, you can use the `_id` field to validate the OTP sent to the user's email address using the Validate Email Validation endpoint.
