# Retrieve a Phone Validation

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/phone-validations/{id}`

This service retrieves a specific phone validation record using its unique identifier. The response includes all the details about the phone validation process, including status, OTP information, and associated project data. This endpoint is useful for checking the current status of a phone validation or retrieving details for audit purposes.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### **Path Parameters**

<table><thead><tr><th width="114.8724365234375">Name</th><th width="120.3143310546875">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>The unique identifier of the Phone Validation you want to retrieve.</td></tr></tbody></table>

### **Query Parameters**

<table><thead><tr><th width="142.541748046875">Name</th><th width="89.34716796875">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>populates[]</code></td><td>string</td><td>Optional. A list of related objects to include in the response. Available options: <code>client</code>, <code>project</code>, <code>projectFlow</code>.</td></tr></tbody></table>

### **Request Examples**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X GET https://api.verifik.co/v2/phone-validations/674de8df21c72be3cc42b8a7 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const phoneValidationId = '674de8df21c72be3cc42b8a7';

axios.get(`https://api.verifik.co/v2/phone-validations/${phoneValidationId}`, {
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
import java.net.HttpURLConnection
import java.net.URL

fun retrievePhoneValidation() {
    val phoneValidationId = "674de8df21c72be3cc42b8a7"
    val url = URL("https://api.verifik.co/v2/phone-validations/$phoneValidationId")
    
    AsyncTask.execute {
        with(url.openConnection() as HttpURLConnection) {
            requestMethod = "GET"
            setRequestProperty("Authorization", "Bearer YOUR_ACCESS_TOKEN")
            setRequestProperty("Content-Type", "application/json")
            
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

func retrievePhoneValidation() {
    let phoneValidationId = "674de8df21c72be3cc42b8a7"
    let url = URL(string: "https://api.verifik.co/v2/phone-validations/\(phoneValidationId)")!
    var request = URLRequest(url: url)
    request.httpMethod = "GET"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
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

The response will contain detailed information about the requested Phone Validation, including its current status, OTP details, and associated project information.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "client": "507f1f77bcf86cd799439013",
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "status": "sent",
    "countryCode": "+507",
    "phone": "62647737",
    "phoneGateway": "whatsapp",
    "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
    "expiresAt": "2024-12-02T17:15:35.000Z",
    "name": "John Doe",
    "phoneData": {
      "title": "Verifik Client"
    },
    "extraParams": {},
    "type": "validation",
    "redirectUrl": "https://api.verifik.co",
    "webhookUrl": "https://yourapp.com/webhook",
    "requires2FA": false,
    "ipAddress": "172.17.0.1",
    "language": "en",
    "createdAt": "2024-12-02T17:05:36.788Z",
    "updatedAt": "2024-12-02T17:05:36.788Z",
    "__v": 0
  }
}
```

{% endtab %}

{% tab title="200 (With Populated Relations)" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a7",
    "client": {
      "_id": "507f1f77bcf86cd799439013",
      "name": "Example Client",
      "status": "active"
    },
    "project": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Example Project",
      "status": "active"
    },
    "projectFlow": {
      "_id": "507f1f77bcf86cd799439015",
      "type": "onboarding",
      "status": "active"
    },
    "status": "sent",
    "countryCode": "+507",
    "phone": "62647737",
    "phoneGateway": "whatsapp",
    "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
    "expiresAt": "2024-12-02T17:15:35.000Z",
    "name": "John Doe",
    "phoneData": {
      "title": "Verifik Client"
    },
    "extraParams": {},
    "type": "validation",
    "redirectUrl": "https://api.verifik.co",
    "webhookUrl": "https://yourapp.com/webhook",
    "requires2FA": false,
    "ipAddress": "172.17.0.1",
    "language": "en",
    "createdAt": "2024-12-02T17:05:36.788Z",
    "updatedAt": "2024-12-02T17:05:36.788Z",
    "__v": 0
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "404",
  "message": "404"
}
```

{% endtab %}

{% tab title="403" %}

```json
{
  "code": "Forbidden",
  "message": "Access denied"
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Access Control**: This endpoint respects client-based access control. Users can only retrieve phone validations associated with their client account.
* **Data Population**: By default, related objects (client, project, projectFlow) are populated to provide comprehensive information.
* **Security**: The OTP field is encrypted and cannot be used directly for validation purposes.
* **Status Tracking**: Use this endpoint to monitor the progress of phone validations through their lifecycle.
* **Audit Trail**: The `createdAt` and `updatedAt` fields provide a complete audit trail of the validation process.

### **Common Use Cases**

* **Status Checking**: Verify the current status of a phone validation (sent, validated, failed, expired).
* **Audit Purposes**: Retrieve complete information about a phone validation for compliance or debugging.
* **Integration**: Use the populated project and projectFlow data to understand the validation context.
* **Monitoring**: Track phone validation success rates and identify potential issues in your verification flow.
