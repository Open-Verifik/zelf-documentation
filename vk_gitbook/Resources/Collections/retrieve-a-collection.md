# Retrieve a Collection

<mark style="color:green;">`GET - https://api.verifik.co/v2/face-recognition/collections/{id}`</mark>

This service allows fetching a collection generated using its specific \_id, not to be confused with the code parameter.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="85">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the project that you want to bring the information.</td></tr></tbody></table>

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "65b9592267cc4f096dbe743d",
        "deleted": false,
        "name": "Ejemplo Ene 30",
        "project": "65b955fe0577440932c77481",
        "description": "default collection for project 65b955fe0577440932c77481",
        "client": "6158e492dd0767a2b8b3f829",
        "code": "d96db430-27d2-4f43-bcff-c4b239ac6d2e",
        "updatedAt": "2024-01-30T20:16:34.841Z",
        "createdAt": "2024-01-30T20:16:34.841Z",
        "__v": 0
    }
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
