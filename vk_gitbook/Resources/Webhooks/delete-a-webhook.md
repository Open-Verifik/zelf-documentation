# Delete a Webhook

<mark style="color:red;">`DELETE - https://api.verifik.co/v2/webhooks/{id}`</mark>

To delete a specific webhook, make a DELETE request to the endpoint where {id} should be replaced with the unique identifier of the webhook you want to delete.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "66df1c0ad08b9d244bd1c806",
        "client": "613375a1eab2fe08527f81e2",
        "projectFlow": [],
        "isActive": true,
        "name": "Postman sample",
        "url": "https://sandbox.verifik.co/v2/webhooks/logs",
        "notification": {
            "success": false,
            "fail": true,
            "_id": "66df1c0ad08b9d244bd1c805"
        },
        "updatedAt": "2024-09-09T16:02:18.713Z",
        "createdAt": "2024-09-09T16:02:18.713Z",
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
