# Retrieve a Project

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/projects/{id}`

With this service, you can bring all projects that you have created or if you only want one, you can specify the ID of the project and the endpoint will return only the selected project.

#### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### **Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="91.9140625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>string</code></td><td>ID of the Project that you want to bring the information.</td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="Python" %}

```python
import http.client

payload = ""
headers = {"Authorization": "Bearer eyJhbGciOiJIXVCJ9.eyJjbGllbn...lt4Cw"}

conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", "/v2/projects/<id>", payload, headers)

res = conn.getresponse()

data = res.read()

print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const config = {
    method: "get",
    url: "https://api.verifik.co/v2/projects/<id>",
    maxBodyLength: Infinity,
    headers: {
        Authorization: "Bearer eyJhbGciOiXVCJ9.eyJjbGllbnR...w1splt4Cw",
    },
};

axios
    .request(config)
    .then((response) => console.log)
    .catch((error) => console.error);
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "__v": 0,
        "_id": "68a743e5...",
        "client": "67054dc...",
        "allowedCountries": ["Colombia"],
        "collectionCode": "fbf8a322...",
        "contactEmail": "hola@verifik.co",
        "currentStep": 0,
        "lastStep": 1,
        "name": "Ejemplo Documentacion Verifik",
        "privacyUrl": "<your privacy link>",
        "projectMembers": [],
        "status": "active",
        "termsAndConditionsUrl": "<your terms and conditions link>",
        "createdAt": "2025-08-21T00:00:00.000Z",
        "updatedAt": "2025-08-21T00:00:00.000Z",
        "dataProtection": {
            "address": "KR 7 # 33 - 42",
            "address2": null,
            "city": "Bogota",
            "country": "Colombia",
            "email": "support@verifik.co",
            "name": "Verifik",
            "postalCode": "111631"
        },
        "branding": {
            "bgColor": "#ffffff",
            "borderColor": "#B2BDD3",
            "buttonColor": "#B2BDD3",
            "buttonTxtColor": "#FFFFFF",
            "logo": "<http or base64>",
            "rightBackgroundColor": "white",
            "rightImage": null,
            "rightImagePosition": "center center",
            "secondaryButtonColor": "#B2BDD3",
            "secondaryButtonTextColor": "#FFFFFF",
            "tabColor": "#B2BDD3",
            "titleColor": "#FFFFFF",
            "txtColor": "#212121"
        }
    }
}
```

{% endtab %}
{% endtabs %}
