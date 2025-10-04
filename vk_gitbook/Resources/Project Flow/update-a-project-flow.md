# Update a Project Flow

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/project-flows/{id}`

Method for updating an existing projectFlow. To make the service work, the `_id` parameter is required, which is generated when a Project Flow is created correctly.

If we want our project to become an active Project Flow, we must change the **"status"** parameter from **"draft"** to **"active"** on both the [Project](https://docs.verifik.co/resources/projects/the-project-object) and the [Project Flow](https://docs.verifik.co/resources/project-flows/the-project-flow-object)

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="85">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the Project Flow that you want to bring the information.</td></tr></tbody></table>

**Body**

<table><thead><tr><th width="119">Name</th><th width="81">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>status</code></td><td>string</td><td>Current Status of the project, can be "draft" or "active", only "active" projects can be used.</td></tr></tbody></table>

**Body Example**

In the body of this service, you can send all the fields generated when creating a Project Flow. The only thing to consider is that the fields we want to modify are the ones that must be included in the body.

```json
{
    "project": "507f1f77bcf86cd799439011",
    "redirectUrl": "https://example.com",
    "status": "active",
    "type": "login",
    "usesWhiteList": false,
    "loginSettings": {
        "email": false,
        "emailGateway": "mailgun",
        "faceLiveness": true,
        "livenessMinScore": 0.65,
        "phone": true,
        "phoneGateway": "both",
        "searchMinScore": 0.85,
        "searchMode": "FAST",
        "showFaceLivenessRecommendation": true
    },
    "security": {
        "apiTestType": "email",
        "apiTestValue": "<test_email>",
        "apiUrl": "<api_endpoint_url>",
        "source": "CSV",
        "strategy": "whitelist"
    },
    "whiteList": [
        {
            "countryCode": "<country_code>",
            "email": "<user_email>",
            "name": "<user_name>",
            "phone": "<phone_number>",
            "project": "507f1f77bcf86cd799439011"
        }
    ]
}
```

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "project": "507f1f77bcf86cd799439011",
    "type": "login",
    "status": "active",
    "redirectUrl": "https://example.com",
    "usesWhiteList": false,
    "loginSettings": {
        "email": false,
        "emailGateway": "mailgun",
        "phone": true,
        "phoneGateway": "both",
        "faceLiveness": true,
        "showFaceLivenessRecommendation": true,
        "livenessMinScore": 0.65,
        "searchMode": "FAST",
        "searchMinScore": 0.85
    },
    "security": {
        "strategy": "whitelist",
        "source": "CSV",
        "apiTestType": "email",
        "apiUrl": "<api_endpoint_url>",
        "apiTestValue": "<test_email>"
    },
    "whiteList": [
        {
            "project": "507f1f77bcf86cd799439011",
            "name": "<user_name>",
            "email": "<user_email>",
            "countryCode": "<country_code>",
            "phone": "<phone_number>"
        }
    ]
}
```

{% endtab %}

{% tab title="400" %}

```json
{
  "error": "Invalid request"
}
```

{% endtab %}
{% endtabs %}
