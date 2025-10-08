# Validate an App Registration Email Validation

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/email-validations/{id}`

This endpoint validates a one-time password (OTP) sent to a user's email address during the onboarding (app registration) process. It ensures the user-provided OTP is correct and updates the verification status accordingly. This route is specifically designed for users who are in the middle of an app registration flow.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when validating `Onboarding Email Validations` is provided from the `App Registration` in creation.
{% endhint %}

### **Path Parameters**

| Name | Type   | Description                                                         |
| ---- | ------ | ------------------------------------------------------------------- |
| `id` | string | The unique identifier of the Email Validation you want to validate. |

### **Body**

| Name    | Type   | Required | Description                                                                                                                       |
| ------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `email` | string | **Yes**  | The email address that was used to create the email validation (spaces will be automatically removed and converted to lowercase). |
| `otp`   | number | **Yes**  | The one-time password (OTP) that was sent to the user's email address.                                                            |

### **Body Examples**

#### **Basic Validation**

```json
{
  "email": "user@example.com",
  "otp": 123456
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X PUT https://api.verifik.co/v2/email-validations/674de8df21c72be3cc42b8a7 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "otp": 123456
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const emailValidationId = '674de8df21c72be3cc42b8a7';
const data = {
  email: "user@example.com",
  otp: 123456
};

axios.put(`https://api.verifik.co/v2/email-validations/${emailValidationId}`, data, {
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

fun validateOnboardingEmailValidation() {
    val emailValidationId = "674de8df21c72be3cc42b8a7"
    val url = URL("https://api.verifik.co/v2/email-validations/$emailValidationId")
    val jsonBody = """
        {
          "email": "user@example.com",
          "otp": 123456
        }
    """.trimIndent()
    
    AsyncTask.execute {
        with(url.openConnection() as HttpURLConnection) {
            requestMethod = "PUT"
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

func validateOnboardingEmailValidation() {
    let emailValidationId = "674de8df21c72be3cc42b8a7"
    let url = URL(string: "https://api.verifik.co/v2/email-validations/\(emailValidationId)")!
    var request = URLRequest(url: url)
    request.httpMethod = "PUT"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
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

The response will contain information about the validated email validation, including the updated status and any additional data based on the validation type. For onboarding flows, this typically includes basic validation information.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "status": "validated",
    "email": "user@example.com",
    "type": "onboarding",
    "showFaceLivenessRecommendation": false
  }
}
```

{% endtab %}

{% tab title="403" %}

```json
{
  "code": "otp_does_not_match",
  "message": "403:otp_does_not_match"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "email_validation_not_found",
  "message": "404:email_validation_not_found"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "missing_email_and_otp"
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Onboarding Flow**: This endpoint is specifically designed for users in the app registration process, where email validation is part of the onboarding journey.
* **OTP Expiration**: OTPs have a limited lifespan (typically 10 minutes) and will expire after the predefined time. Expired OTPs cannot be validated.
* **Status Updates**: Successful validation automatically updates the email validation status to "validated" and may trigger additional onboarding steps.
* **Webhook Events**: Validation events trigger webhook notifications for tracking and integration purposes.
* **App Registration Linking**: When validated through this endpoint, the email validation is automatically linked to the user's app registration record.
* **Email Formatting**: Email addresses are automatically converted to lowercase and have spaces removed during processing.
* **Demo Mode**: If the project is in demo mode, special demo OTPs may be accepted for testing purposes.

### **Onboarding Flow Integration**

This validation endpoint is part of the larger onboarding flow where:

1. User creates an app registration
2. Email validation is initiated
3. OTP is sent to the user's email
4. User validates the OTP using this endpoint
5. Email validation status is updated
6. User can proceed to the next step in the onboarding process

The validation ensures that users have access to the email address they provided during registration, adding an extra layer of security to the onboarding process.

### **Common Use Cases**

* **Account Verification**: Confirm email addresses during user registration
* **Onboarding Security**: Ensure users have access to their provided email addresses
* **Flow Progression**: Move users through the onboarding process after email verification
* **Audit Trail**: Track email validation success rates in onboarding flows

This endpoint is specifically designed for onboarding-type email validations. For general validation or login flows, use the public email validation endpoint instead.
