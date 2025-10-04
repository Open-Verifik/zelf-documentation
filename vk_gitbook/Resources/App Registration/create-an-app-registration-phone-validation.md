# Create an App Registration Phone Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/phone-validations/app-registration`

A Phone Validation is an instance within Verifik's system that allows you to process and validate phone numbers during the app registration process. This process ensures the authenticity of user phone numbers and provides secure verification through SMS or WhatsApp delivery methods.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

{% hint style="warning" %}
The JWT Token you should use when creating `App Registration Phone Validations` is provided from the [`App Registration`](https://docs.verifik.co/resources/app-registrations/create-an-app-registration) in creation.
{% endhint %}

### **Body**

<table><thead><tr><th width="194.1007080078125">Name</th><th width="116.8228759765625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>project</code></td><td>string</td><td>The unique identifier for the project where this phone validation will be used.</td></tr><tr><td><code>validationMethod</code></td><td>string</td><td>The validation method, set to <code>verificationCode</code>.</td></tr><tr><td><code>phone</code></td><td>string</td><td>The phone number that will be validated (spaces will be automatically removed).</td></tr><tr><td><code>countryCode</code></td><td>string</td><td>The country code of the phone number in format <code>+XXX</code> (e.g., <code>+507</code> for Panama).</td></tr><tr><td><code>type</code></td><td>string</td><td>Type of validation: <code>validation</code>, <code>login</code>, <code>onboarding</code>, or <code>oneTimeLink</code>.</td></tr><tr><td><code>expiresAt</code></td><td>string</td><td>Optional expiration date for the validation code.</td></tr><tr><td><code>redirectUrl</code></td><td>string</td><td>Optional URL for redirect after validation.</td></tr><tr><td><code>webhookUrl</code></td><td>string</td><td>Optional webhook URL for validation notifications.</td></tr><tr><td><code>identityUrl</code></td><td>string</td><td>Optional identity verification URL.</td></tr><tr><td><code>requires2FA</code></td><td>boolean</td><td>Optional flag indicating if two-factor authentication is required.</td></tr><tr><td><code>ipAddress</code></td><td>string</td><td>Optional IP address of the user.</td></tr></tbody></table>

#### **`validationMethod` Values**

| Value              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `verificationCode` | Sends a one-time password (OTP) to the phone number for verification. |

#### **`type` Values**

| Value        | Description                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validation` | <p>General phone number validation.<br><br><strong>For general phone validations - you must use</strong> <a data-mention href="create-a-phone-validation">create-a-phone-validation</a></p>    |
| `login`      | <p>Phone verification during user login.<br><br><strong>For login phone validations - you must use</strong> <a data-mention href="create-a-phone-validation">create-a-phone-validation</a></p> |
| `onboarding` | Phone verification during user registration.                                                                                                                                                   |

### **Minimal Body Data**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "validationMethod": "verificationCode",
  "phone": "62647737",
  "countryCode": "+507",
  "type": "onboarding"
}
```

### **Full Body Data**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "validationMethod": "verificationCode",
  "phone": "62647737",
  "countryCode": "+507",
  "type": "validation",
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
curl -X POST https://api.verifik.co/v2/phone-validations/app-registration \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project": "507f1f77bcf86cd799439011",
    "validationMethod": "verificationCode",
    "phone": "62647737",
    "countryCode": "+507",
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
  phone: "62647737",
  countryCode: "+507",
  type: "validation"
};

axios.post('https://api.verifik.co/v2/phone-validations/app-registration', data, {
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

fun createPhoneValidation() {
    val url = URL("https://api.verifik.co/v2/phone-validations/app-registration")
    val jsonBody = """
        {
          "project": "507f1f77bcf86cd799439011",
          "validationMethod": "verificationCode",
          "phone": "62647737",
          "countryCode": "+507",
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

func createPhoneValidation() {
    let url = URL(string: "https://api.verifik.co/v2/phone-validations/app-registration")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // JSON body
    let jsonBody: [String: Any] = [
        "project": "507f1f77bcf86cd799439011",
        "validationMethod": "verificationCode",
        "phone": "62647737",
        "countryCode": "+507",
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

The response will contain information about the new `Phone Validation` instance. Important fields include the unique identifier `_id`, the `status` of the validation process, and the encrypted OTP that was sent to the user.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "client": "507f1f77bcf86cd799439013",
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "status": "sent",
    "countryCode": "+507",
    "phone": "62647737",
    "phoneGateway": "whatsapp",
    "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
    "expiresAt": "2024-12-02T17:15:35.000Z",
    "phoneData": {},
    "type": "validation",
    "redirectUrl": "https://api.verifik.co",
    "requires2FA": false,
    "ipAddress": "172.17.0.1",
    "language": "en",
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
  "message": "Invalid countryCode format. CountryCode should be in the format + followed by 1 to 3 digits."
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Country Code Format**: The `countryCode` must be in the format `+XXX` where X are digits (1-3 digits maximum).
* **Phone Number**: Spaces in phone numbers are automatically removed during processing.
* **OTP Security**: The OTP is encrypted using bcrypt before storage for security.
* **Default Gateway**: Phone validations default to WhatsApp delivery method.
* **Automatic Linking**: When created through the app-registration endpoint, the phone validation is automatically linked to the user's app registration record.
