# Retrieve a Person

### Endpoint

```
https://api.verifik.co/v2/face-recognition/persons/{id}
```

This endpoint allows you to query a person stored by the primary key.&#x20;

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="100">Name</th><th width="85">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the person that you want to bring the information.</td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location --request GET 'https://api.verifik.co/v2/face-recognition/persons/676194953a7502baafacc887' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIVCJ9.eyJjbGllb...w1splt4Cw' \
--header 'Content-Type: application/json' \
--data ''
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = '';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/face-recognition/persons/676194953a7502baafacc887',
  headers: { 
    'Authorization': 'Bearer eyJhbGciJ9.eyJjbGllbnRJZCI6IjYx..0w1splt4Cw'
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

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/face-recognition/persons/676194953a7502baafacc887")!,timeoutInterval: Double.infinity)
request.addValue("Bearer eyJhbGciIkpXVCJ9.eyJjbGll...splt4Cw", forHTTPHeaderField: "Authorization")

request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()

```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {
  'Authorization': 'Bearer eyJhbGciOiJVCJ9.eyJjbGllbnRJZCI...w1splt4Cw'
}
conn.request("GET", "/v2/face-recognition/persons/676194953a7502baafacc887", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
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
        "name": "Juan Miguel Trevino Morales Cavazos",
        "thumbnails": [
            {
                "id": "a1b1e486-5481-4b98-913b-bf53e483a79f",
                "thumbnail": "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"
            }
        ],
        "gender": "M",
        "date_of_birth": "1993-09-09T00:00:00.000Z",
        "nationality": "Mexican",
        "collections": [],
        "notes": "Created via API",
        "documentValidations": [],
        "emails": [],
        "phones": [],
        "environment": "not_set",
        "client": "613a3a48f2c84b454153add7",
        "updatedAt": "2024-12-17T17:57:05.469Z",
        "createdAt": "2024-12-17T15:11:18.599Z",
        "__v": 3
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
{% endtabs %}
