# Update a Person

### Endpoint

```json
https://api.verifik.co/v2/face-recognition/persons/{id}  
```

Method for updating an existing person.  Once the person is created you get an unique identifier that is required for this API. You can update certain values for a person but not the images (which may require a liveness test again).

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Params

| Name            | Type             | Description                                                             |
| --------------- | ---------------- | ----------------------------------------------------------------------- |
| name            | string           | the full name of the person.                                            |
| date\_of\_birth | string           | the date of birth in the next format: `YYYY-MM-DD`                      |
| gender          | string           | the gender of the person. Options `[M, F]`                              |
| notes           | string           | additional notes for this person. Could be extra information.           |
| collections     | Array of strings | List of collections, you can add or remove from the list.               |
| nationality     | string           | Nationality can be updated, Example: Mexican, Canadian, Colombian, etc. |

### Request

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "name": "Juan Miguel Trevino Cavazos",
  "gender": "MM",
  "date_of_birth": "1993-09-09",
  "collections": [
    "8595b2e9-443d-4081-b1cd-e472577b2c7c"
  ]
});

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/face-recognition/persons/676194953a7502baafacc888',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOi5cCI6IkpXVCJ9.eyJjb...1splt4Cw', 
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

{% tab title="cURL" %}

```bash
curl --location --request PUT 'https://api.verifik.co/v2/face-recognition/persons/676194953a7502baafacc888' \
--header 'Authorization: Bearer eyJhbGciOiJIUCJ9.eyJjbGllbnRJZCI6IjY...t4Cw' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Juan Miguel Trevino Morales Cavazos",
    "gender": "MM",
    "date_of_birth": "1993-09-09",
    "collections": ["8595b2e9-443d-4081-b1cd-e472577b2c7c"]
}'
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "thumbnails": [
            {
                "id": "cfe0e19a-cb26-4e55-aa28-44761324f66b",
                "thumbnail": "Base 64 Image"
            }
        ],
        "gender": "M",
        "date_of_birth": "1995-05-07",
        "nationality": "Colombian",
        "collections": [
            "0dc5245b-cee53-4dce-aba8-9174c12fdfb2"
        ],
        "notes": "Verifik employee",
        "documentValidations": [],
        "_id": "65807837049c624ea360c092",
        "name": "Mateo Verifik",
        "client": "64404b1f9856cc8cebd762e7",
        "updatedAt": "2024-01-10T21:55:03.645Z",
        "createdAt": "2024-01-10T21:55:03.645Z"
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

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "person_not_found"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "gender must be one of: [M,F]"
}
```

{% endtab %}
{% endtabs %}
