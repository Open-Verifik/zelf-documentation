# Face Verification for App Registration

{% hint style="warning" %}
Your App Registration must include the following:

* A successful Document Validation record attached to the App Registration record
* A successful Biometric Validation record attached to the App Registration record
  {% endhint %}

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/face-recognition/compare/app-registration`

This endpoint compares a user's live facial image with their official document photo during the app registration process. It automatically retrieves the necessary images from the user's app registration and performs facial recognition comparison to verify identity.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when creating `App Registration Phone Validations` is provided from the [`App Registration`](https://docs.verifik.co/resources/app-registrations/create-an-app-registration) in creation.
{% endhint %}

### **Body**

This endpoint does not require a request body. All necessary information is automatically retrieved from the user's app registration record.

### **Request Examples**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X POST https://api.verifik.co/v2/face-recognition/compare/app-registration \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

axios.post('https://api.verifik.co/v2/face-recognition/compare/app-registration', {}, {
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

fun compareFaceVerification() {
    val url = URL("https://api.verifik.co/v2/face-recognition/compare/app-registration")
    
    AsyncTask.execute {
        with(url.openConnection() as HttpURLConnection) {
            requestMethod = "POST"
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

func compareFaceVerification() {
    let url = URL(string: "https://api.verifik.co/v2/face-recognition/compare/app-registration")!
    var request = URLRequest(url: url)
    request.httpMethod = "POST"
    request.setValue("Bearer YOUR_ACCESS_TOKEN", forHTTPHeaderField: "Authorization")
    request.setValue("application/json", forHTTPHeaderField: "Content-Type")
    
    // Send request
    let task = URLSession.shared.dataTask(with: request) { data, response, error in
        if let error = error {
            print("Request error:", error)
            return
        }
        
        if let data = data, let responseString = String(data: data, encoding: .utf8) {
            print("Response data:", responseString")
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

The response will contain information about the face verification comparison result and the updated app registration record.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "appRegistration": "674de8df21c72be3cc42b8a9",
    "compareFaceVerification": {
      "_id": "674de8df21c72be3cc42b8aa",
      "client": "507f1f77bcf86cd799439013",
      "type": "compare",
      "search_mode": "FAST",
      "gallery": ["base64_image_data"],
      "probe": ["base64_image_data"],
      "result": {
        "score": 0.85,
        "faces": [
          {
            "id": "face_1",
            "score": 0.85,
            "bbox": [100, 150, 200, 250]
          }
        ]
      },
      "comparedAt": "2024-12-02T17:15:36.788Z",
      "status": "success",
      "createdAt": "2024-12-02T17:15:36.788Z",
      "updatedAt": "2024-12-02T17:15:36.788Z"
    }
  }
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

{% tab title="404" %}

```json
{
  "code": "appRegistration_not_found",
  "message": "404:appRegistration_not_found"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "Project_not_active",
  "message": "409:Project_not_active"
}
```

{% endtab %}
{% endtabs %}

### **Response Fields**

| Field                     | Type   | Description                                           |
| ------------------------- | ------ | ----------------------------------------------------- |
| `appRegistration`         | string | The unique identifier of the app registration record. |
| `compareFaceVerification` | object | The face verification comparison result.              |

#### **Compare Face Verification Fields**

| Field         | Type   | Description                                                     |
| ------------- | ------ | --------------------------------------------------------------- |
| `_id`         | string | Unique identifier of the face verification record.              |
| `client`      | string | Reference to the client who owns this verification.             |
| `type`        | string | Type of verification (compare).                                 |
| `search_mode` | string | Search mode used for comparison (FAST or ACCURATE).             |
| `gallery`     | array  | Array of reference images from documents.                       |
| `probe`       | array  | Array of live facial images for comparison.                     |
| `result`      | object | Detailed comparison results from the facial recognition system. |
| `comparedAt`  | string | When the comparison was performed.                              |
| `status`      | string | Status of the verification (success or failed).                 |
| `createdAt`   | string | When the verification record was created.                       |
| `updatedAt`   | string | When the verification record was last updated.                  |

#### **Result Fields**

| Field   | Type   | Description                                                        |
| ------- | ------ | ------------------------------------------------------------------ |
| `score` | number | Overall similarity score between the faces (0.0 to 1.0).           |
| `faces` | array  | Array of detected faces with individual scores and bounding boxes. |

### **Notes**

* **No Request Body Required**: This endpoint automatically retrieves all necessary information from the user's app registration.
* **App Registration Required**: Users must have a valid app registration with status STARTED, ONGOING, or NEEDS\_MANUAL\_VERIFICATION.
* **Image Requirements**: Both live facial images and document photos must be available in the app registration.
* **Automatic Processing**: Images are automatically processed, optimized, and prepared for comparison.
* **Search Mode**: Uses project flow settings for search mode (defaults to FAST if not configured).
* **Webhook Integration**: Automatically triggers webhook events if configured in the project flow.
* **Data Storage**: Comparison results are stored and linked to the app registration record.

### **How It Works**

1. **Authentication**: Validates the user's app registration token
2. **Data Retrieval**: Automatically retrieves the user's live facial image and document photo
3. **Image Processing**: Optimizes and prepares images for facial recognition comparison
4. **Face Comparison**: Performs facial recognition analysis using OpenCV technology
5. **Result Storage**: Saves comparison results and links them to the app registration
6. **Webhook Notification**: Triggers webhook events for real-time updates

### **Common Use Cases**

* **User Onboarding**: Verify identity during the app registration process
* **Document Verification**: Compare live photos with official document photos
* **Identity Confirmation**: Ensure users are who they claim to be
* **Compliance Requirements**: Meet KYC and regulatory verification standards
* **Fraud Prevention**: Prevent identity theft and unauthorized access

### **Prerequisites**

* **Active App Registration**: User must have an active app registration in progress
* **Facial Images**: Both live facial images and document photos must be uploaded
* **Active Project**: The associated project must be in active status
* **Valid Token**: JWT token must contain a valid appRegistrationId

This endpoint provides a streamlined way to perform facial verification during app registration without requiring manual image submission, making the verification process seamless and user-friendly.
