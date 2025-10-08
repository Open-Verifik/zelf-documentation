# Update a Webhook

<mark style="color:blue;">`PUT - https://api.verifik.co/v2/webhooks/{id}`</mark>&#x20;

Method for updating an existing webhook. To make the service work, the \_id parameter is required, which is generated when a webhook is created correctly.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

#### Body

In the body of this service, you can send all the fields generated when creating a webhook. The only thing to consider is that the **fields we want to modify** are the ones that must be included in the body.

```json
{
    "url": "https://sandbox.verifik.co/v2/webhooks/logs"
}
```

| Name        | Value                                                                |
| ----------- | -------------------------------------------------------------------- |
| name        | The new name you want this webhook to have                           |
| url         | You can update the url to where you want to receive the POST calls.  |
| description | The new description you want this webhook to have                    |
| link        | Array of projectFlows that you want to **link** this webhook to.     |
| unlink      | Array of projectFlows that you want to **unlink** from this webhook. |

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
