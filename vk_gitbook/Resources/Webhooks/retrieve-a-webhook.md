# Retrieve a Webhook

<mark style="color:green;">`GET - https://api.verifik.co/v2/webhooks/{id}`</mark>

We will query by ID any webhook that is stored in our Database.&#x20;

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="85">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the webhook that you want to bring the information.</td></tr></tbody></table>

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "66de320d6a5c6ef0e02d4223",
        "client": "613375a1eab2fe08527f81e2",
        "projectFlow": [],
        "isActive": true,
        "name": "Postman sample",
        "url": "https://sandbox.verifik.co/v2/webhooks/logs",
        "notification": {
            "success": false,
            "fail": true,
            "_id": "66de320d6a5c6ef0e02d4222"
        },
        "updatedAt": "2024-09-08T23:23:57.678Z",
        "createdAt": "2024-09-08T23:23:57.678Z",
        "__v": 0
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

{% endtab %}
{% endtabs %}
