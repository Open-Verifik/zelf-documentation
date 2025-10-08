# List all Projects

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/projects`

With this service, you can bring all projects that you have created.

#### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require("axios");

const data = JSON.stringify({
    name: "New Project ABCDEF",
});

const config = {
    data: data,
    maxBodyLength: Infinity,
    method: "post",
    url: "https://api.verifik.co/v2/projects",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw",
    },
};

axios
    .request(config)
    .then(console.log)
    .catch(console.error);

```

{% endtab %}

{% tab title="cURL" %}

```bash
curl --location 'https://api.verifik.co/v2/projects' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJhbGciXVCJ9.eyJjbGllb...splt4Cw' \
    --data '{ "name": "New Project ABCDEF" }'
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")
payload = json.dumps({"name": "New Project ABCDEF"})

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGckpXVCJ9.eyJjbGllbnR...0w1splt4Cw",
}

conn.request("POST", "/v2/projects", payload, headers)

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
    "data": [
        {
            "__v": 15,
            "_id": "67054",
            "allowedCountries": ["Colombia"],
            "assignedCollection": "685db",
            "client": "67054",
            "collectionCode": "18351",
            "contactEmail": "<CONTACT_EMAIL>",
            "currentStep": 1,
            "lastStep": 1,
            "name": "<PROJECT_NAME>",
            "privacyUrl": "<PRIVACY_URL>",
            "status": "active",
            "termsAndConditionsUrl": "<TERMS_URL>",
            "createdAt": "2025-08-21T00:00:00.000Z",
            "updatedAt": "2025-08-21T00:00:00.000Z",
            "dataProtection": {
                "address": "<ADDRESS_LINE_1>",
                "address2": null,
                "city": "<CITY>",
                "country": "<COUNTRY>",
                "email": "<EMAIL_ADDRESS>",
                "name": "<FULL_NAME>",
                "postalCode": "<POSTAL_CODE>"
            },
            "branding": {
                "bgColor": "#DBE4FF",
                "borderColor": "#B2BDD3",
                "buttonColor": "#00bc81",
                "buttonTxtColor": "#ffffff",
                "logo": "<LOGO_URL>",
                "rightBackgroundColor": "#DBE4FF",
                "rightImage": "<RIGHT_IMAGE_URL>",
                "rightImagePosition": "center center",
                "secondaryButtonColor": "#f0ea36",
                "secondaryButtonTextColor": "#006545",
                "tabColor": "#f0ea36",
                "titleColor": "#00bc81",
                "txtColor": "#00bc81"
            },
            "projectMembers": [
                "68378",
                "68379",
                "68379",
                "6837a"
            ]
        }
    ]
}
```

{% endtab %}
{% endtabs %}
