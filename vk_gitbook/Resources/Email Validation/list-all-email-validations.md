# List all Email Validations

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/email-validations`

With this service, you can retrieve all email validations that have been created by your account. The response includes pagination information and detailed data about each email validation record.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### **Query Parameters**

<table><thead><tr><th width="198.0755615234375">Name</th><th width="125.193603515625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>page</code></td><td>number</td><td>Page number for pagination (default: 1)</td></tr><tr><td><code>limit</code></td><td>number</td><td>Number of records per page (default: 20)</td></tr><tr><td><code>where_status</code></td><td>string</td><td>Filter by status: <code>new</code>, <code>sent</code>, <code>validated</code>, <code>failed</code></td></tr><tr><td><code>where_type</code></td><td>string</td><td>Filter by type: <code>validation</code>, <code>login</code>, <code>onboarding</code>, <code>oneTimeLink</code></td></tr><tr><td><code>where_email</code></td><td>string</td><td>Filter by email address</td></tr><tr><td><code>where_project</code></td><td>string</td><td>Filter by project ID</td></tr><tr><td><code>where_projectFlow</code></td><td>string</td><td>Filter by project flow ID</td></tr><tr><td><code>where_client</code></td><td>string</td><td>Filter by client ID</td></tr><tr><td><code>sort</code></td><td>string</td><td>Sort order (e.g., <code>-createdAt</code> for newest first)</td></tr><tr><td><code>populates[]</code></td><td>string</td><td>Related data to include: <code>client</code>, <code>project</code>, <code>projectFlow</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const config = {
    method: "get",
    url: "https://api.verifik.co/v2/email-validations",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_ACCESS_TOKEN"
    },
    params: {
        page: 1,
        limit: 20,
        where_status: "validated",
        sort: "-createdAt"
    }
};

axios.request(config)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl --location 'https://api.verifik.co/v2/email-validations?page=1&limit=20&where_status=validated&sort=-createdAt' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client
import urllib.parse

# Query parameters
params = {
    'page': 1,
    'limit': 20,
    'where_status': 'validated',
    'sort': '-createdAt'
}

query_string = urllib.parse.urlencode(params)

conn = http.client.HTTPSConnection("api.verifik.co")
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}

conn.request("GET", f"/v2/email-validations?{query_string}", "", headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let baseURL = "https://api.verifik.co/v2/email-validations"
var components = URLComponents(string: baseURL)!

components.queryItems = [
    URLQueryItem(name: "page", value: "1"),
    URLQueryItem(name: "limit", value: "20"),
    URLQueryItem(name: "where_status", value: "validated"),
    URLQueryItem(name: "sort", value: "-createdAt")
]

let url = components.url!
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
        print("Failed to retrieve Email Validations, Status Code:", (response as? HTTPURLResponse)?.statusCode ?? 0)
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

val url = "https://api.verifik.co/v2/email-validations?page=1&limit=20&where_status=validated&sort=-createdAt"

val request = Request.Builder()
    .url(url)
    .get()
    .addHeader("Authorization", "Bearer YOUR_ACCESS_TOKEN")
    .build()

client.newCall(request).execute().use { response ->
    if (response.isSuccessful) {
        response.body?.string()?.let { println("Response JSON: $it") }
    } else {
        println("Failed to retrieve Email Validations, Status Code: ${response.code}")
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
    "data": [
        {
            "_id": "63505a2cf61d5a8d0f85417d",
            "client": "623b6317fe5fd1774be9f598",
            "project": "635059838c4cca6fdbd12237",
            "projectFlow": "635059838c4cca6fdbd09238",
            "status": "validated",
            "validationMethod": "verificationCode",
            "email": "user@example.com",
            "type": "onboarding",
            "otp": "$2a$10$zSS91Dubgb2jGtHlPPjrkareD8k2clcplqB7a4T3.42D4idumUOiJ4.",
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
                "logo": "https://cdn.verifik.co/access/projectlogo.png"
            },
            "deleted": false,
            "createdAt": "2024-12-19T20:12:28.613Z",
            "updatedAt": "2024-12-19T20:13:14.199Z",
            "__v": 0
        },
        {
            "_id": "6351a8cf8b14defddw55f675aa",
            "client": "623b6317fe512fd1774be9f566",
            "project": "635059838c4cc121a6fdbd09237",
            "projectFlow": "635059838c4cca6fdbd09238",
            "status": "failed",
            "validationMethod": "verificationCode",
            "email": "user2@example.com",
            "type": "login",
            "otp": "$2a$10$0WKihkKMar2kN5qZyFvrMe2DP1lGY5gRKrXCiZmrAbtaK0is4DoD.",
            "expiresAt": "2024-12-20T20:15:15.000Z",
            "redirectUrl": "https://example.com/login",
            "webhookUrl": null,
            "requires2FA": false,
            "ipAddress": "192.168.1.2",
            "extraParams": [],
            "emailData": {
                "projectName": "Example Project",
                "contactEmail": "support@example.com",
                "template": "login"
            },
            "deleted": false,
            "createdAt": "2024-12-20T20:00:16.618Z",
            "updatedAt": "2024-12-20T20:15:19.434Z",
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
{% endtabs %}

### **Response Body**

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `data`    | Array  | Array of email validation records |
| `total`   | Number | Total number of records available |
| `limit`   | Number | Number of records per page        |
| `page`    | Number | Current page number               |
| `pages`   | Number | Total number of pages             |

#### **Email Validation Record Fields**

| Field              | Type    | Description                                                            |
| ------------------ | ------- | ---------------------------------------------------------------------- |
| `_id`              | String  | Unique identifier of the email validation                              |
| `client`           | Object  | Client information (populated if requested)                            |
| `project`          | Object  | Project information (populated if requested)                           |
| `projectFlow`      | Object  | Project flow information (populated if requested)                      |
| `status`           | String  | Current status: `new`, `sent`, `validated`, `failed`                   |
| `validationMethod` | String  | Method used: `verificationCode` or `manual`                            |
| `email`            | String  | Email address being validated                                          |
| `type`             | String  | Type of validation: `validation`, `login`, `onboarding`, `oneTimeLink` |
| `otp`              | String  | Hashed one-time password (for security)                                |
| `expiresAt`        | String  | Timestamp when the OTP expires                                         |
| `redirectUrl`      | String  | URL for redirect after validation                                      |
| `webhookUrl`       | String  | Webhook URL for notifications                                          |
| `requires2FA`      | Boolean | Whether two-factor authentication is required                          |
| `ipAddress`        | String  | IP address of the validation request                                   |
| `extraParams`      | Array   | Additional parameters passed during creation                           |
| `emailData`        | Object  | Email template and project-specific data                               |
| `deleted`          | Boolean | Whether the record has been deleted                                    |
| `createdAt`        | String  | Timestamp when the record was created                                  |
| `updatedAt`        | String  | Timestamp when the record was last updated                             |

### **Important Notes**

* **Authentication Required**: You must provide a valid Bearer token to access this endpoint
* **Client Isolation**: The system automatically filters results based on your client ID for security
* **Pagination**: Use `page` and `limit` parameters to navigate through large result sets
* **Filtering**: Apply filters to narrow down results by status, type, email, or project
* **Sorting**: Use the `sort` parameter to order results (e.g., `-createdAt` for newest first)
* **Data Population**: Use `populates[]` to include related client, project, and project flow information
* **Security**: OTP values are returned as hashed strings for security purposes

### **Use Cases**

* **Monitoring**: Track the status of all email validations across your projects
* **Analytics**: Analyze validation success rates and user engagement
* **Audit Trail**: Maintain records of all email verification attempts
* **Troubleshooting**: Investigate failed validations and identify issues
* **Reporting**: Generate reports on validation activities for compliance purposes

This endpoint provides comprehensive access to all email validation records while maintaining security through client isolation and pagination for optimal performance.
