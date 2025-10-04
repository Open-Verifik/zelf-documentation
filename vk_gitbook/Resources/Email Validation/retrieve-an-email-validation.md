# Retrieve an Email Validation

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/email-validations/{id}`

This service retrieves a specific email validation record using its unique identifier. The response includes all the details about the email validation process, including status, OTP information, and associated project data.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### **Path Parameters**

<table><thead><tr><th width="115.65625">Name</th><th width="81.1527099609375">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>The unique identifier of the email validation record you want to retrieve.</td></tr></tbody></table>

### **Query Parameters**

<table><thead><tr><th width="160.6953125">Name</th><th width="100.0416259765625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>populates[]</code></td><td>string</td><td>Optional array of related data to include. Available options: <code>client</code>, <code>project</code>, <code>projectFlow</code>.</td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const config = {
    method: "get",
    url: "https://api.verifik.co/v2/email-validations/{id}",
    headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN"
    }
};

axios.request(config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl -X GET "https://api.verifik.co/v2/email-validations/{id}" \
    -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

payload = ""
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", "/v2/email-validations/{id}", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/email-validations/{id}")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    guard let data = data, error == nil else {
        print("Error:", error ?? "Unknown error")
        return
    }
    
    if let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 {
        do {
            let jsonResponse = try JSONSerialization.jsonObject(with: data, options: [])
            print("Response JSON:", jsonResponse)
        } catch {
            print("Error parsing JSON:", error)
        }
    } else {
        print("Failed to retrieve Email Validation, Status Code:", (response as? HTTPURLResponse)?.statusCode ?? 0)
    }
}
task.resume()
```

{% endtab %}

{% tab title="Kotlin" %}

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request

val client = OkHttpClient()
val request = Request.Builder()
    .url("https://api.verifik.co/v2/email-validations/{id}")
    .get()
    .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
    .build()

client.newCall(request).execute().use { response ->
    if (response.isSuccessful) {
        response.body?.string()?.let { println("Response JSON: $it") }
    } else {
        println("Failed to retrieve Email Validation, Status Code: ${response.code}")
    }
}
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "63505a2cf61d5a8d0f812317d",
        "client": "623b6317fe5fd118be9f566",
        "project": "635047538c4cca6fdbd09237",
        "projectFlow": "635059838c4cca6fdbd01828",
        "status": "validated",
        "validationMethod": "verificationCode",
        "email": "user@example.com",
        "type": "onboarding",
        "otp": "$2a$45$zSS9ubgb2jGtHlPPjrkareD8k2clcplqB7a4T3.98D4idumUOiJ4.",
        "expiresAt": "2024-12-19T20:27:28.000Z",
        "redirectUrl": "https://example.com/success",
        "webhookUrl": "https://api.client.com/webhooks/verifik",
        "requires2FA": false,
        "ipAddress": "192.168.1.1",
        "extraParams": [],
        "emailData": {
            "projectName": "Example Project",
            "contactEmail": "support@example.com",
            "template": "onboarding",
            "firstName": "John",
            "logo": "https://cdn.verifik.co/access/projectlogo.png",
            "authLink": "https://access.verifik.co/sign-up/635047538c4cca6fdbd09237?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&otp="
        },
        "deleted": false,
        "createdAt": "2024-12-19T20:12:28.613Z",
        "updatedAt": "2024-12-19T20:13:14.199Z",
        "__v": 0
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Email validation not found"
}
```

{% endtab %}

{% tab title="403" %}

```json
{
    "code": "Forbidden",
    "message": "Access forbidden"
}
```

{% endtab %}
{% endtabs %}

### **Response Body**

| Parameter          | Type    | Description                                                               |
| ------------------ | ------- | ------------------------------------------------------------------------- |
| `_id`              | String  | Unique identifier of the email validation record                          |
| `client`           | Object  | Client information (populated if requested)                               |
| `project`          | Object  | Project information (populated if requested)                              |
| `projectFlow`      | String  | Unique identifier of the project flow                                     |
| `status`           | String  | Current status: `new`, `sent`, `validated`, or `failed`                   |
| `validationMethod` | String  | Method used: `verificationCode` or `manual`                               |
| `email`            | String  | Email address being validated                                             |
| `type`             | String  | Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink` |
| `otp`              | String  | Hashed one-time password (for security)                                   |
| `expiresAt`        | String  | Timestamp when the OTP expires                                            |
| `redirectUrl`      | String  | URL for redirect after validation                                         |
| `webhookUrl`       | String  | Webhook URL for notifications                                             |
| `requires2FA`      | Boolean | Whether two-factor authentication is required                             |
| `ipAddress`        | String  | IP address of the validation request                                      |
| `extraParams`      | Array   | Additional parameters passed during creation                              |
| `emailData`        | Object  | Email template and project-specific data                                  |
| `deleted`          | Boolean | Whether the record has been deleted                                       |
| `createdAt`        | String  | Timestamp when the record was created                                     |
| `updatedAt`        | String  | Timestamp when the record was last updated                                |

### **Important Notes**

* **Authentication Required**: You must provide a valid Bearer token to access this endpoint
* **Client Isolation**: The system automatically filters results based on your client ID for security
* **Data Population**: Use query parameters to include related client and project information
* **Security**: OTP values are returned as hashed strings for security purposes
* **Status Tracking**: The status field provides real-time information about the validation process
* **Expiration**: Check the `expiresAt` field to determine if the OTP is still valid

### **Error Responses**

| Status Code | Description                                 |
| ----------- | ------------------------------------------- |
| 404         | Email validation record not found           |
| 403         | Access forbidden (insufficient permissions) |
| 500         | Internal server error                       |

This endpoint is useful for checking the current status of email validations, retrieving OTP expiration times, and monitoring the progress of user verification processes.
