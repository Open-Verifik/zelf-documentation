# Retrieve a credit record

### Endpoint

```
https://api.verifik.co/v2/credits/:id
```

Retrieve information about a specific Credit record within Verifik’s system. This endpoint provides detailed data regarding the credit record, so you can know if it's an usage or purchase record.&#x20;

### Headers

Include the necessary authentication headers for authorization and content-type, such as:

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### Request Parameters

* **Path Parameter**:
  * `id` (string, required): The unique identifier for the credit record you want to retrieve.

### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location 'https://api.verifik.co/v2/credits' \
--header 'Authorization: Bearer eyJhbGciOiJI...zIkpXVFBLuWixs'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/credits',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIU...mLYvOSLuWixs'
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

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("app.verifik.co")
payload = ''
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzkwMzM...vOSLuWixs'
}
conn.request("GET", "/v2/credits", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

### Response

On a successful request, you will receive a JSON object with the details of the specified Credit. Key fields include the status, amount, category , client, etc.

**Success Response (200)**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "67c0d39dab480fc9ff6da66d",
        "amount": 249,
        "status": "approved",
        "category": "purchase",
        "client": "613a3a48f2c84b454153add7",
        "superAdmin": null,
        "transaction": "67c0d39dab480fc9ff6da66c",
        "invoice": "67c0d39dab480fc9ff6da66a",
        "memo": "invoice 67c0d39dab480fc9ff6da66a created for 249, pdf: https://pay.stripe.com/invoice/acct_1L2d4wFO6i3ofqGH/test_YWNjdF8xTDJkNHdGTzZpM29mcUdILF9ScXc5U0tGQlNmS1RGb0hmWW5BenF3STRielFkbjlQLDEzMTIzMTEzMw0200yT8hFmhA/pdf?s=ap",
        "expiresAt": "2025-03-27T23:59:59.999Z",
        "isExpired": false,
        "updatedAt": "2025-02-27T21:05:33.666Z",
        "createdAt": "2025-02-27T21:05:33.666Z",
        "__v": 0
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "not_found"
}

```

{% endtab %}
{% endtabs %}

**Error Responses**

| Status Code | Description      |
| ----------- | ---------------- |
| 404         | Credit not found |
