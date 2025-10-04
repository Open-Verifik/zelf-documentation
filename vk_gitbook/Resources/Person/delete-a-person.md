# Delete a Person

<mark style="color:red;">`DELETE - https://api.verifik.co/v2/face-recognition/persons/{id}`</mark>

To delete a specific person, make a DELETE request to the endpoint where {id} should be replaced with the unique identifier of the person you want to delete.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Request

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: 'https://app.verifik.co/v2/face-recognition/persons/66fca0c00f45d17981e6ca36?collection=ed27d231-b437-62c5-94c5-a2130c447d1e',
  headers: { 
    'Authorization': 'Bearer eyJhbGcIkpXVCJ9.eyJjbGllbnR...1splt4Cw'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```

{% endtab %}

{% tab title="PHP" %}

```php
<?php
$client = new Client();
$headers = [
  'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...4Cw'
];
$request = new Request('DELETE', 'https://api.verifik.co/v2/face-recognition/persons/66fca0c00f45d17981e6ca36?collection=ed27d231-b437-62c5-94c5-a2130c447d1e', $headers);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();

```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "66fca0c00f45d17981e6ca36",
        "name": "Cesar Eduardo Hernandez Zapata",
        "thumbnails": [
            {
                "id": "f1272aa8-893c-43f2-a0da-b413d1e135c4",
                "thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a...PwoEf/9k="
            }
        ],
        "gender": "M",
        "date_of_birth": "1998-08-03T00:00:00.000Z",
        "nationality": "Colombian",
        "collections": [
            "ed27d231-b437-42c5-94c5-a5130c417d1e"
        ],
        "notes": "Notes here",
        "documentValidations": [],
        "emails": [
            "<email>",
        ],
        "phones": [
            "<phone>",
        ],
        "livenessScore": 0.97,
        "environment": "not_set",
        "client": "65a43c4a560c94889324d1a4",
        "updatedAt": "2024-10-02T02:27:10.468Z",
        "createdAt": "2024-10-02T01:24:17.855Z",
        "__v": 1
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
