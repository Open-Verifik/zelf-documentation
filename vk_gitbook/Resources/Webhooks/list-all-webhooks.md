# List all Webhooks

<mark style="color:green;">`GET -https://api.verifik.co/v2/webhooks`</mark>

With this service, you can bring all Webhooks that you have created.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Params**

| Name       | Value                                                        | Description                                                  |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| page       | `1`                                                          | you can define the page number if you have too many records. |
| perPage    | `20`                                                         | How many records you need per page.                          |
| like\_name | any string i.e. `Postman`                                    | You can query a 'like' condition                             |
| where\_url | any string i.e `https://sandbox.verifik.co/v2/webhooks/logs` | You can do an exact comparison inside a field.               |

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": [
        {
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
        },
        {
            "_id": "66de30d20be3dcde0bf1defb",
            "client": "613375a1eab2fe08527f81e2",
            "projectFlow": [],
            "isActive": true,
            "name": "Postman sample",
            "url": "https://sandbox.verifik.co/v2/webhooks/logs",
            "notification": {
                "success": false,
                "fail": true,
                "_id": "66de30d20be3dcde0bf1defa"
            },
            "updatedAt": "2024-09-08T23:18:42.142Z",
            "createdAt": "2024-09-08T23:18:42.142Z",
            "__v": 0
        }
    ]
}
```

{% endtab %}
{% endtabs %}
