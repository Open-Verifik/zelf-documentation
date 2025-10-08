# Create a Person

### Endpoint

```html
https://api.verifik.co/v2/face-recognition/persons
```

The Create Person API allows you to create a new person within the facial recognition system. You can associate a person with their name, images, gender, date of birth, nationality, collections, and additional notes.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### &#x20;Parameters

The body of the request should contain a JSON object with the following fields:

| Key                   | Type                | Required | Description                                     |
| --------------------- | ------------------- | -------- | ----------------------------------------------- |
| `name`                | `string`            | Yes      | Full name of the person.                        |
| `images`              | `array` of `string` | Yes      | Base64-encoded images for recognition.          |
| `gender`              | `string`            | No       | Gender of the person (`M` or `F`).              |
| `date_of_birth`       | `string` (ISO8601)  | No       | Date of birth of the person.                    |
| `nationality`         | `string`            | No       | Nationality of the person.                      |
| `colletions`          | `array` of `string` | No       | Array of collection IDs related to this person. |
| `notes`               | `string`            | No       | Additional notes about the person.              |
| `documentValidations` | `array`             | No       | Validation status for documents.                |
| `emails`              | `array`             | No       | List of email addresses.                        |
| `phones`              | `array`             | No       | List of phone numbers.                          |
| `environment`         | `string`            | No       | Environment details (`not_set` by default).     |
| `client`              | `string` (UUID)     | Yes      | Client identifier.                              |

### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location 'https://verifik.app/v2/face-recognition/persons' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjYxM2EzYTQ4w1splt4Cw' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Juan Miguel Moralesss",
    "images": [
        "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLC.../9k="
    ],
	"gender": "M",
	"date_of_birth": "1992-03-02",
	"nationality": "Mexican",
	"collections": ["29894f2a-c0c9-40ae-b213-b48d8a98e171"],
	"notes": "Created via API"
}'
```

{% endtab %}

{% tab title="node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "name": "Juan Miguel T Morales",
  "images": [
    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcI.../9k="
  ],
  "gender": "M",
  "date_of_birth": "1992-03-02",
  "nationality": "Mexican",
  "collections": [
    "29894f2a-c0c9-40ae-b213-b48d8a98e171"
  ],
  "notes": "Created via API"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://verifik.app/v2/face-recognition/persons',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOVCJ9.eyJjbGllbnRJZCI6IjYxM2EzYTQ4ZjJ...lt4Cw', 
    'Content-Type': 'application/json'
  },
  data : data
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
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "676194953a7502baafacc887",
        "name": "Juan Miguel Trevino Morales",
        "thumbnails": [
            {
                "id": "073c04bf-190a-4259-957e-09c270f2eb03",
                "thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wB...A//2Q=="
            }
        ],
        "gender": "M",
        "date_of_birth": "1992-03-02T00:00:00.000Z",
        "nationality": "Canadian",
        "collections": [
            "29894f2a-c0c9-40ae-b213-b48d8a98e176",
            "29894f2a-c0c9-40ae-b213-b48d8a98e171"
        ],
        "notes": "Created via API",
        "documentValidations": [],
        "emails": [],
        "phones": [],
        "environment": "not_set",
        "client": "613a3a48f2c84b454153add7",
        "updatedAt": "2024-12-17T15:14:25.732Z",
        "createdAt": "2024-12-17T15:11:18.599Z",
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

{% tab title="412" %}

```json
{
    "code": "PreconditionFailed",
    "message": "person_already_set"

```

{% endtab %}
{% endtabs %}
