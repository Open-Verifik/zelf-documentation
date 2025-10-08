# Create a Webhook

## Create a Webhook

<mark style="color:orange;">`POST - https://api.verifik.co/v2/webhooks`</mark>

This API allows you to create a new webhook within your account. You can associate a webhook with project Flows in this step or when you [update the webhook](https://docs.verifik.co/resources/webhooks/update-a-webhook).

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

```json
{
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "name": "Postman sample",
    "isActive": true,
    "description": "This is an example"
    "link": [66df24f4c80823e06a348019"],
}
```

| Name        | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| url         | The url where we will send the information via POST.            |
| name        | The name of your webhook to identify it easily.                 |
| isActive    | This boolean will enable/disable it whenever you require it.    |
| description | Description to know what information you will be sending there. |
| link        | Array of projectFlows that you want to link this webhook to.    |

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "client": "613375a1eab2fe08527f81e2",
        "projectFlow": [
            "66df24f4c80823e06a348019"
        ],
        "isActive": true,
        "name": "Postman sample",
        "url": "https://sandbox.verifik.co/v2/webhooks/logs",
        "notification": {
            "success": false,
            "fail": true,
            "_id": "66df272bf82f3bfab17dea9a"
        },
        "_id": "66df272bf82f3bfab17dea9b",
        "updatedAt": "2024-09-09T16:49:47.373Z",
        "createdAt": "2024-09-09T16:49:47.373Z",
        "__v": 0
    }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing url\n"
}
```

{% endtab %}
{% endtabs %}
