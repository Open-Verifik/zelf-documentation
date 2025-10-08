# Sync App Registration Status

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/app-registrations/{appRegistrationId}/sync`

The `App Registration Sync` endpoint updates the status and step of an app registration process. This endpoint is useful for syncing the registration status, especially when specific conditions or criteria have been met.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when running the `Sync` is provided from the [`App Registration`](https://docs.verifik.co/resources/app-registrations/create-an-app-registration).
{% endhint %}

### **Query Parameters**

<table><thead><tr><th width="193.44140625">Name</th><th width="138.921875">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>appRegistrationId</code></td><td>string</td><td>ID for the App Registration record you would like to sync</td></tr></tbody></table>

### **Body**

<table><thead><tr><th width="119.1171875">Name</th><th width="113">Type</th><th width="104.8984375">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>step</code></td><td>string</td><td><strong>Yes</strong></td><td>Specifies the step to update, e.g., skipKYC.</td></tr><tr><td><code>status</code></td><td>string</td><td><strong>Yes</strong></td><td>The new status of the registration, e.g., COMPLETED_WITHOUT_KYC.</td></tr></tbody></table>

### **Step Options and Status Combinations**

#### **`skipKYC` Step**

<table><thead><tr><th width="221.09375">Status</th><th width="193.71484375">Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>COMPLETED_WITHOUT_KYC</code></td><td>Skip KYC verification</td><td>- Validates sign-up form requirements<br>- Updates status to ONGOING if KYC steps are not mandatory<br>- Sends data to HubSpot integration<br>- Returns sign-up form response with token</td></tr></tbody></table>

**Note**: This step only works if all mandatory KYC steps (basicInformation, document, form, liveness) are not set to "mandatory" in the project flow configuration.

{% hint style="warning" %}
**IMPORTANT**: The `skipKYC` step is crucial for `onboarding` type flows as it provides the authentication token that users need to login to your system. This will provide your users with the token for accessing your application.
{% endhint %}

#### **`instructions` Step**

<table><thead><tr><th width="144.02734375">Status</th><th width="246.76953125">Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>ONGOING</code></td><td>Continue with instructions</td><td>- Updates status to ONGOING<br>- Moves to next step in the flow</td></tr></tbody></table>

#### **`signUpForm` Step**

<table><thead><tr><th width="135.76953125">Status</th><th width="255.1015625">Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>ONGOING</code></td><td>Continue with sign-up form</td><td>- Validates sign-up form requirements<br>- Updates status to ONGOING<br>- Returns sign-up form response with token</td></tr></tbody></table>

#### **`basicInformation` Step**

<table><thead><tr><th width="132.33203125">Status</th><th>Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>ONGOING</code></td><td>Continue with basic information</td><td>- Updates status to ONGOING<br>- Moves to next step in the flow</td></tr></tbody></table>

#### **`document` Step**

<table><thead><tr><th width="124.6640625">Status</th><th width="307.81640625">Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>ONGOING</code></td><td>Continue with document verification</td><td>- Updates status to ONGOING<br>- Returns sign-up form response with token</td></tr></tbody></table>

#### **`liveness` Step**

<table><thead><tr><th width="110.65234375">Status</th><th>Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>ONGOING</code></td><td>Continue with liveness verification</td><td>- Updates status to ONGOING<br>- Returns liveness response with token</td></tr></tbody></table>

#### **`form` Step**

<table><thead><tr><th width="128.1796875">Status</th><th>Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>ONGOING</code></td><td>Continue with form completion</td><td>- Updates status to ONGOING<br>- Moves to next step in the flow</td></tr></tbody></table>

#### **`end` Step** ⭐ **CRUCIAL FOR ONBOARDING FLOWS**

<table><thead><tr><th width="253.40234375">Status</th><th width="194.890625">Description</th><th>What Happens</th></tr></thead><tbody><tr><td><code>COMPLETED</code></td><td>Complete registration successfully</td><td>- <strong>Validates all required fields and verifications</strong><br>- <strong>Updates status to COMPLETED</strong><br>- <strong>Returns authentication token for user login</strong><br>- Sends completion data to HubSpot integration<br>- Triggers webhook events</td></tr><tr><td><code>FAILED</code></td><td>Mark registration as failed</td><td>- Updates status to FAILED<br>- Returns authentication token for user login<br>- Triggers webhook events</td></tr><tr><td><code>NEEDS_MANUAL_VERIFICATION</code></td><td>Require manual review</td><td>- Updates status to NEEDS_MANUAL_VERIFICATION<br>- Returns authentication token for user login<br>- Triggers webhook events</td></tr></tbody></table>

{% hint style="warning" %}
**IMPORTANT**: The `end` step is crucial for `onboarding` type flows as it provides the authentication token that users need to login to your system. Without completing this step, users cannot access their accounts.
{% endhint %}

### **Example Body**

#### **Skip KYC Example**

```json
{
  "step": "skipKYC",
  "status": "COMPLETED_WITHOUT_KYC"
}
```

#### **Complete Registration Example**

```json
{
  "step": "end",
  "status": "COMPLETED"
}
```

#### **Mark as Failed Example**

```json
{
  "step": "end",
  "status": "FAILED"
}
```

#### **Require Manual Verification Example**

```json
{
  "step": "end",
  "status": "NEEDS_MANUAL_VERIFICATION"
}
```

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X PUT 'https://api.verifik.co/v2/app-registrations/{appRegistrationId}/sync' \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "step": "end",
    "status": "COMPLETED"
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let data = JSON.stringify({
  "step": "end",
  "status": "COMPLETED"
});

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/app-registrations/{appRegistrationId}/sync',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  },
  data: data
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/app-registrations/{appRegistrationId}/sync")!
var request = URLRequest(url: url)
request.httpMethod = "PUT"
request.addValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let jsonData: [String: Any] = [
  "step": "end",
  "status": "COMPLETED"
]

request.httpBody = try? JSONSerialization.data(withJSONObject: jsonData)

let task = URLSession.shared.dataTask(with: request) { data, response, error in
  guard let data = data, error == nil else {
    print("Error:", error ?? "Unknown error")
    return
  }
  
  if let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 {
    print("Sync successful:", String(data: data, encoding: .utf8) ?? "")
  } else {
    print("Error:", String(data: data, encoding: .utf8) ?? "")
  }
}
task.resume()
```

{% endtab %}

{% tab title="Kotlin" %}

```kotlin
import okhttp3.*
import org.json.JSONObject
import java.io.IOException

val client = OkHttpClient()

val json = JSONObject()
json.put("step", "end")
json.put("status", "COMPLETED")

val requestBody = RequestBody.create(
  MediaType.parse("application/json; charset=utf-8"),
  json.toString()
)

val request = Request.Builder()
  .url("https://api.verifik.co/v2/app-registrations/{appRegistrationId}/sync")
  .put(requestBody)
  .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
  .addHeader("Content-Type", "application/json")
  .build()

client.newCall(request).enqueue(object : Callback {
  override fun onFailure(call: Call, e: IOException) {
    e.printStackTrace()
  }
  
  override fun onResponse(call: Call, response: Response) {
    if (response.isSuccessful) {
      println("Sync successful: ${response.body()?.string()}")
    } else {
      println("Error: ${response.body()?.string()}")
    }
  }
})
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe",
    "step": "signUpForm",
    "steps": {
      "signUpForm": "mandatory",
      "basicInformation": "skip",
      "document": "mandatory",
      "liveness": "mandatory",
      "form": "skip"
    },
    "appRegistrationId": "507f1f77bcf86cd799439011",
    "status": "ONGOING"
  }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "Conflict",
  "message": "signUpForm_validation_not_passed"
}
```

{% endtab %}
{% endtabs %}

### **What Happens After Each Step**

#### **Validation and Status Updates**

* **skipKYC**: Validates sign-up form requirements before allowing KYC skip
* **signUpForm**: Ensures all mandatory sign-up information is complete
* **end**: Performs comprehensive validation of all required fields and verifications

#### **Integration Points**

* **Webhook Events**: Triggers webhook notifications for status changes
* **Token Generation**: Provides authentication tokens for user access

#### **Status Flow Control**

* **ONGOING**: Continues the registration process to the next step
* **COMPLETED**: Finalizes registration and provides full access
* **FAILED**: Marks registration as unsuccessful but still provides access token
* **NEEDS\_MANUAL\_VERIFICATION**: Requires human review before completion

### **Important Notes**

1. **Token Generation**: The `end` step is the only step that guarantees token generation for user authentication
2. **Validation Requirements**: Each step may have specific validation requirements that must be met
3. **KYC Skip Logic**: Skipping KYC only works if no mandatory verification steps are configured
4. **Webhook Integration**: All status changes trigger webhook events if configured in the project flow

### **Common Use Cases**

* **Complete Registration**: Use `end` step with `COMPLETED` status to finalize user registration
* **Skip Verification**: Use `skipKYC` step to bypass verification requirements when appropriate
* **Manual Review**: Use `end` step with `NEEDS_MANUAL_VERIFICATION` status for flagged registrations
* **Step Progression**: Use intermediate steps to move users through the registration flow

This endpoint provides comprehensive control over the app registration process, allowing you to manage user progression, handle edge cases, and ensure proper authentication token generation for onboarding flows.
