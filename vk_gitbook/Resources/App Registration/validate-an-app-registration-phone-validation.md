# Validate an App Registration Phone Validation

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/phone-validations`

This endpoint validates a one-time password (OTP) sent to a user's phone number during the app registration (onboarding) process. It ensures the user-provided OTP is correct and updates the verification status accordingly. This route is specifically designed for users who are in the middle of an app registration flow.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when validating `App Registration Phone Validations` is provided from the [`App Registration`](https://docs.verifik.co/resources/app-registrations/create-an-app-registration) in creation.
{% endhint %}

### **Body**

<table><thead><tr><th width="139.064208984375">Name</th><th width="112.5078125">Type</th><th width="116.4417724609375">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>phone</code></td><td>string</td><td><strong>Yes</strong></td><td>The phone number that was used to create the phone validation.</td></tr><tr><td><code>countryCode</code></td><td>string</td><td><strong>Yes</strong></td><td>The country code of the phone number in format <code>+XXX</code> (e.g., <code>+507</code> for Panama).</td></tr><tr><td><code>otp</code></td><td>number</td><td><strong>Yes</strong></td><td>The one-time password (OTP) that was sent to the user's phone number.</td></tr><tr><td><code>project</code></td><td>string</td><td>No</td><td>The unique identifier for the project (optional, helps narrow down the validation).</td></tr><tr><td><code>projectFlow</code></td><td>string</td><td>No</td><td>The unique identifier for the project flow (optional, helps narrow down the validation).</td></tr><tr><td><code>phoneGateway</code></td><td>string</td><td>No</td><td>The delivery method used: <code>sms</code>, <code>whatsapp</code>, or <code>none</code>.</td></tr></tbody></table>

### **Body Examples**

#### **Basic Validation**

```json
{
  "phone": "62647737",
  "countryCode": "+507",
  "otp": 123456
}
```

#### **Advanced Validation with Project Details**

```json
{
  "phone": "62647737",
  "countryCode": "+507",
  "otp": 123456,
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "phoneGateway": "whatsapp"
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X PUT https://api.verifik.co/v2/phone-validations \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "62647737",
    "countryCode": "+507",
    "otp": 123456
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const data = {
  phone: "62647737",
  countryCode: "+507",
  otp: 123456
};

axios.put('https://api.verifik.co/v2/phone-validations', data, {
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

fun validateAppRegistrationPhoneValidation() {
    val url = URL("https://api.verifik.co/v2/phone-validations")
    val jsonBody = """
        {
          "phone": "62647737",
          "countryCode": "+507",
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

func validateAppRegistrationPhoneValidation() {
    let url = URL(string: "https://api.verifik.co/v2/phone-validations")!
    var request = URLRequest(url: url)
    request.httpMethod = "PUT"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "phone": "62647737",
        "countryCode": "+507",
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

The response will contain information about the validated phone validation, including the updated status and any additional data based on the validation type. For onboarding flows, this typically includes basic validation information.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "status": "validated",
    "countryCode": "+507",
    "phone": "62647737",
    "type": "onboarding",
    "showFaceLivenessRecommendation": false
  }
}
```

{% endtab %}

{% tab title="200 (Validation Type)" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "status": "validated",
    "countryCode": "+507",
    "phone": "62647737",
    "type": "validation",
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
  "code": "phone_validation_not_found",
  "message": "404:phone_validation_not_found"
}
```

{% endtab %}

{% tab title="412" %}

```json
{
  "code": "phoneValidation_has_expired",
  "message": "412:phoneValidation_has_expired"
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Onboarding Flow**: This endpoint is specifically designed for users in the app registration process, where phone validation is part of the onboarding journey.
* **OTP Expiration**: OTPs have a limited lifespan (typically 10 minutes) and will expire after the predefined time. Expired OTPs cannot be validated.
* **Status Updates**: Successful validation automatically updates the phone validation status to "validated" and may trigger additional onboarding steps.
* **Webhook Events**: Validation events trigger webhook notifications for tracking and integration purposes.
* **Face Liveness**: Some project flows may recommend face liveness verification after phone validation as part of the onboarding process.
* **App Registration Linking**: When validated through this endpoint, the phone validation is automatically linked to the user's app registration record.

### **Onboarding Flow Integration**

This validation endpoint is part of the larger onboarding flow where:

1. User creates an app registration
2. Phone validation is initiated
3. OTP is sent to the user's phone
4. User validates the OTP using this endpoint
5. Phone validation status is updated
6. User can proceed to the next step in the onboarding process

The validation ensures that users have access to the phone number they provided during registration, adding an extra layer of security to the onboarding process.
