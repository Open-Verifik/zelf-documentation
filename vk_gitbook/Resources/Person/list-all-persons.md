# List all Persons

### Endpoint

```
https://api.verifik.co/v2/projects
```

This endpoint allows you to bring all the people stored in Verifik for all the [collections](https://docs.verifik.co/resources/collections).

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = '';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/face-recognition/persons',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJXVCJ9.eyJjbGll....t4Cw'
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

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {
  'Authorization': 'Bearer eyJhbGc6IkpXVCJ9.eyJjb...w1splt4Cw'
}
conn.request("GET", "/v2/face-recognition/persons", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl --location 'https://api.verifik.co/v2/face-recognition/persons' \
--header 'Authorization: Bearer eyJhbGciOiJCJ9.eyJjbGllbnR...plt4Cw' \
--data ''
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": [
        {
            "_id": "663a53e25e9db06d06ecfe59",
            "name": "Nicolas",
            "thumbnails": [
                {
                    "id": "c282fac3-55d6-4007-8c5f-bca800600cca",
                    "thumbnail": "image base 64"
                }
            ],
            "gender": "M",
            "date_of_birth": "1995-05-07T00:00:00.000Z",
            "nationality": "Colombian",
            "collections": [
                "d75beb1f-fa5c-4e63-be17-a2ae544c313a",
                "f9b230af-1e86-4fc2-89e1-e0442eb99b48",
                "6349d392-d3a3-44c2-a2dd-e5349c7aeaec"
            ],
            "notes": "Verifik employee",
            "documentValidations": [],
            "emails": [
                "hola@verifik.co"
            ],
            "phones": [
                "573201234567"
            ],
            "livenessScore": 0.98,
            "environment": "not_set",
            "client": "6158e492dd0767a2b8b3f829",
            "updatedAt": "2024-08-20T17:08:30.788Z",
            "createdAt": "2024-07-25T20:59:23.660Z",
            "__v": 2,
            "countryCode": "57",
            "email": "hola@verifik.co",
            "phone": "3201234567"
        }
    ]
}
```

{% endtab %}
{% endtabs %}
