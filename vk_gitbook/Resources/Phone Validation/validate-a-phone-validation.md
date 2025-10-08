# Validate a Phone Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/phone-validations/validate`

This endpoint validates a one-time password (OTP) sent to a user's phone number as part of the phone verification process. It ensures the user-provided OTP is correct and updates the verification status accordingly.

### **Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

### **Body**

<table><thead><tr><th width="153.658935546875">Name</th><th width="112.3211669921875">Type</th><th width="124.048583984375">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>phone</code></td><td>string</td><td><strong>Yes</strong></td><td>The phone number that was used to create the phone validation.</td></tr><tr><td><code>countryCode</code></td><td>string</td><td><strong>Yes</strong></td><td>The country code of the phone number in format <code>+XXX</code> (e.g., <code>+507</code> for Panama).</td></tr><tr><td><code>otp</code></td><td>number</td><td><strong>Yes</strong></td><td>The one-time password (OTP) that was sent to the user's phone number.</td></tr><tr><td><code>project</code></td><td>string</td><td>No</td><td>The unique identifier for the project (optional, helps narrow down the validation).</td></tr><tr><td><code>projectFlow</code></td><td>string</td><td>No</td><td>The unique identifier for the project flow (optional, helps narrow down the validation).</td></tr><tr><td><code>phoneGateway</code></td><td>string</td><td>No</td><td>The delivery method used: <code>sms</code>, <code>whatsapp</code>, or <code>none</code>.</td></tr></tbody></table>

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
curl -X POST https://api.verifik.co/v2/phone-validations/validate \
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

axios.post('https://api.verifik.co/v2/phone-validations/validate', data, {
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

fun validatePhoneValidation() {
    val url = URL("https://api.verifik.co/v2/phone-validations/validate")
    val jsonBody = """
        {
          "phone": "62647737",
          "countryCode": "+507",
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

func validatePhoneValidation() {
    let url = URL(string: "https://api.verifik.co/v2/phone-validations/validate")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
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

The response will contain information about the validated phone validation, including the updated status and any additional data based on the validation type.

{% tabs %}
{% tab title="200" %}

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

{% tab title="200 (Login Type)" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "status": "validated",
    "countryCode": "+507",
    "phone": "62647737",
    "type": "login",
    "showFaceLivenessRecommendation": true,
    "appLogin": {
      "id": "app-login-id",
      "status": "validated"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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

* **OTP Expiration**: OTPs have a limited lifespan and will expire after a predefined time. Expired OTPs cannot be validated.
* **Demo Mode**: If the project is in demo mode, special demo OTPs may be accepted for testing purposes.
* **Status Updates**: Successful validation automatically updates the phone validation status to "validated".
* **Webhook Events**: Validation events trigger webhook notifications for tracking and integration purposes.
* **Login Tokens**: For login-type validations, a JWT token is returned for authenticated access.
* **Face Liveness**: Some project flows may recommend face liveness verification after phone validation.
