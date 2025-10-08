# List all Phone Validations

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/phone-validations`

With this service, you can retrieve all phone validations that have been created by your account. The response includes pagination information and detailed data about each phone validation record. This endpoint is useful for monitoring phone validation activities, generating reports, or managing multiple validation records.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### **Query Parameters**

<table><thead><tr><th width="205.0166015625">Name</th><th width="142.4287109375">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>page</code></td><td>number</td><td>Page number for pagination (default: 1).</td></tr><tr><td><code>limit</code></td><td>number</td><td>Number of records per page (default: 10).</td></tr><tr><td><code>sort</code></td><td>string</td><td>Sort field and direction (e.g., <code>-createdAt</code> for newest first, <code>createdAt</code> for oldest first).</td></tr><tr><td><code>where_project</code></td><td>string</td><td>Filter by project ID.</td></tr><tr><td><code>where_projectFlow</code></td><td>string</td><td>Filter by project flow ID.</td></tr><tr><td><code>where_status</code></td><td>string</td><td>Filter by status: <code>new</code>, <code>sent</code>, <code>validated</code>, <code>failed</code>, or <code>expired</code>.</td></tr><tr><td><code>where_type</code></td><td>string</td><td>Filter by validation type: <code>validation</code>, <code>login</code>, <code>onboarding</code>, or <code>oneTimeLink</code>.</td></tr><tr><td><code>where_phone</code></td><td>string</td><td>Filter by specific phone number.</td></tr><tr><td><code>where_countryCode</code></td><td>string</td><td>Filter by country code (e.g., <code>+507</code>).</td></tr><tr><td><code>where_phoneGateway</code></td><td>string</td><td>Filter by delivery method: <code>sms</code>, <code>whatsapp</code>, or <code>none</code>.</td></tr><tr><td><code>where_requires2FA</code></td><td>boolean</td><td>Filter by two-factor authentication requirement.</td></tr><tr><td><code>in_language[]</code></td><td>Array&#x3C;string></td><td>Filter by language setting.</td></tr><tr><td><code>populates[]</code></td><td>Array&#x3C;string></td><td>A list of related objects to include. Available options: <code>client</code>, <code>project</code>, <code>projectFlow</code>.</td></tr></tbody></table>

### **Query Examples**

#### **Basic List Request**

```
GET /v2/phone-validations
```

#### **Filtered by Status**

```
GET /v2/phone-validations?where_status=sent&limit=20
```

#### **Filtered by Project and Type**

```
GET /v2/phone-validations?where_project=507f1f77bcf86cd799439011&type=onboarding
```

#### **Advanced Filtering with Pagination**

```
GET /v2/phone-validations?where_status=validated&where_phoneGateway=whatsapp&page=2&limit=50&sort=-createdAt
```

### **Request Examples**

{% tabs %}
{% tab title="cURL" %}

```bash
curl -X GET "https://api.verifik.co/v2/phone-validations?status=sent&limit=20" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const params = {
  status: 'sent',
  limit: 20,
  page: 1,
  sort: '-createdAt'
};

axios.get('https://api.verifik.co/v2/phone-validations', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  },
  params: params
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

fun listPhoneValidations() {
    val url = URL("https://api.verifik.co/v2/phone-validations?status=sent&limit=20")
    
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

func listPhoneValidations() {
    let urlString = "https://api.verifik.co/v2/phone-validations?status=sent&limit=20"
    let url = URL(string: urlString)!
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

The response includes pagination information and an array of phone validation records. Each record contains detailed information about the validation process.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": [
    {
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
    },
    {
      "_id": "674de8df21c72be3cc42b8a8",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439016",
      "status": "validated",
      "countryCode": "+507",
      "phone": "62647738",
      "phoneGateway": "sms",
      "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
      "expiresAt": "2024-12-02T17:15:35.000Z",
      "name": "Jane Smith",
      "phoneData": {
        "title": "Verifik Client"
      },
      "extraParams": {},
      "type": "onboarding",
      "redirectUrl": "https://api.verifik.co",
      "webhookUrl": "https://yourapp.com/webhook",
      "requires2FA": false,
      "ipAddress": "172.17.0.2",
      "language": "en",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z",
      "__v": 0
    }
  ],
  "total": 2,
  "limit": 20,
  "page": 1,
  "pages": 1
}
```

{% endtab %}

{% tab title="200 (With Populated Relations)" %}

```json
{
  "data": [
    {
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
  ],
  "total": 1,
  "limit": 20,
  "page": 1,
  "pages": 1
}
```

{% endtab %}

{% tab title="200 (Empty Result)" %}

```json
{
  "data": [],
  "total": 0,
  "limit": 20,
  "page": 1,
  "pages": 0
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Access Control**: This endpoint respects client-based access control. Users can only retrieve phone validations associated with their client account.
* **Default Population**: Related objects (client, project, projectFlow) are automatically populated to provide comprehensive information.
* **Filtering**: Multiple filters can be combined to narrow down results effectively.
* **Sorting**: Use the `sort` parameter to control the order of results (e.g., `-createdAt` for newest first).
* **Pagination**: The response includes pagination metadata to help navigate through large result sets.
* **Security**: OTP fields are encrypted and cannot be used directly for validation purposes.

### **Common Use Cases**

* **Monitoring**: Track phone validation activities and success rates across your projects.
* **Reporting**: Generate reports on validation performance, delivery methods, and user engagement.
* **Auditing**: Review phone validation history for compliance and debugging purposes.
* **Analytics**: Analyze patterns in phone validation usage, timing, and geographic distribution.
* **Management**: Identify and manage phone validations that require attention (failed, expired, etc.).
