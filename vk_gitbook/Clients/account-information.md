# Account information

### Endpoint

```
https://api.verifik.co/v2/clients/me
```

With this service, you can bring your client information along with more information about your credits, subscription plan and the settings.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Params

| Param         | Value                                                                                                                                                                                                                    | Description                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| populates\[]= | <p>possible options <mark style="color:blue;">clientSubscriptionPlan,</mark> </p><p><mark style="color:blue;">clientSubscriptionPlan.subscriptionPlan,</mark></p><p><mark style="color:blue;">clientSettings.</mark></p> | With this option you could include populates to know more information linked to your client account. |
|               |                                                                                                                                                                                                                          |                                                                                                      |
|               |                                                                                                                                                                                                                          |                                                                                                      |

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "name": "New Project ABCDEF"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
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
curl --location 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciXVCJ9.eyJjbGllb...splt4Cw' \
--data '{
    "name": "New Project ABCDEF"
}'
```

{% endtab %}

{% tab title="Python" %}

```python
import requests

url = "https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan"

payload = {}
headers = {
  'Authorization': 'Bearer eyJhbGciOiJXVCJ9.eyJjbGllbnRJZCI...mLYvOSLuWixs'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "avatar": null,
        "initialIpAddress": null,
        "secretKey": null,
        "deletedAt": null,
        "_id": "613a3a48f2c84b454153add7",
        "active": true,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "isVerified": true,
        "otpSentAt": null,
        "requestsCount": 0,
        "subscriptionPlan": "61337217cbbb97a96877e984",
        "email": "jorgemanuel@verifik.co",
        "phone": "7809843183",
        "countryCode": "+1",
        "name": "JORGE MANUEL SANCHEZ",
        "updatedAt": "2025-03-12T17:37:13.526Z",
        "createdAt": "2021-09-09T16:46:01.334Z",
        "__v": 0,
        "totalRequestsCount": 1403,
        "credits": 114.03000000000034,
        "emailOTPCount": 0,
        "isBiometricVerified": false,
        "language": "es",
        "otp": "$2a$10$Q3wDasZgVWLuhEoYatVun.RBdItctOPNZ5lnXNWisZI0L.cFqM5b.",
        "phoneOTPCount": 0,
        "emailOTPSentAt": "2023-08-03T05:21:42.000Z",
        "status": "joined",
        "workSpace": "6647c29855503eb3e836449d",
        "clientSettings": "64cbd0717ae61d030ba39195",
        "JWTPhrase": "123456",
        "stripeCustomer": "cus_Q6iF3XDQgBQ8ZA",
        "clientSubscriptionPlan": {
            "projects": {
                "smartLinkLimit": 5,
                "smartAccessLimit": 5,
                "smartEnrollLimit": 5,
                "datAPILimit": 20,
                "globally": 20
            },
            "_id": "67c0d39dd4b3dec0fc4c81a7",
            "client": "613a3a48f2c84b454153add7",
            "name": "Plus",
            "subscriptionPlan": {
                "projects": {
                    "datAPILimit": 20,
                    "globally": 20,
                    "smartAccessLimit": 5,
                    "smartEnrollLimit": 5,
                    "smartLinkLimit": 5
                },
                "_id": "644f2a3ef19094d3b3f66b7f",
                "amount": 249,
                "changesInPrices": [
                    {
                        "group": "apiRequest",
                        "discount": 50,
                        "type": "percent"
                    },
                    {
                        "codes": [
                            "credit_intent"
                        ],
                        "type": "amount",
                        "discount": 0.4
                    },
                    {
                        "codes": [
                            "face_recognition_compare",
                            "face_recognition_verify",
                            "face_recognition_search_crops",
                            "face_recognition_detect",
                            "face_recognition_search"
                        ],
                        "type": "amount",
                        "discount": 0.02
                    },
                    {
                        "price": 0.8,
                        "code": "face_recognition_search_active_user"
                    },
                    {
                        "price": 0.24,
                        "code": "face_recognition_search_live_face"
                    },
                    {
                        "price": 0.24,
                        "code": "face_recognition_compare_live"
                    },
                    {
                        "price": 0.2,
                        "code": "face_recognition_liveness"
                    },
                    {
                        "baseCategory": "OCR",
                        "price": 0.05
                    },
                    {
                        "addOn": "documentBasicAntiFraud",
                        "active": true
                    },
                    {
                        "addOn": "chairs",
                        "count": 10
                    },
                    {
                        "addOn": "licenses",
                        "count": 2
                    },
                    {
                        "addOn": "whiteLabel",
                        "active": true
                    },
                    {
                        "addOn": "support",
                        "active": false
                    },
                    {
                        "addOn": "supportVIP",
                        "active": false
                    },
                    {
                        "addOn": "multipleRequests",
                        "active": false
                    },
                    {
                        "addOn": "dedicatedServer",
                        "active": false
                    }
                ],
                "trialDays": 0,
                "active": true,
                "visible": true,
                "visibleTo": null,
                "name": "Plus",
                "code": "smart_check_plus_plan",
                "limit": 100,
                "interval": "month",
                "intervalCount": 1,
                "currency": "USD",
                "stripeProduct": "prod_Nlo8FqIrzIfTkS",
                "stripePrice": "price_1N0GWgFO6i3ofqGHOOUioaUt",
                "__v": 1,
                "isSmartcheck": false,
                "createdAt": "2025-02-27T20:49:35.907Z",
                "lastUpdatedBy": "6601a41b68c04caf8a8464ac",
                "updatedAt": "2025-02-27T20:49:35.907Z"
            },
            "stripeSubscription": "sub_1QxEGqFO6i3ofqGH0fyDzHNJ",
            "category": "credits",
            "code": "smart_check_plus_plan",
            "interval": "month",
            "intervalCount": 1,
            "active": true,
            "lastFour": "4242",
            "cardBrand": "visa",
            "cardExpMonth": "2",
            "cardExpYear": "2027",
            "startDate": "2025-02-27T21:05:28.000Z",
            "endDate": "2025-03-27T21:05:28.000Z",
            "autoRenew": true,
            "notes": "new subscription -> sub_1QxEGqFO6i3ofqGH0fyDzHNJ",
            "updatedAt": "2025-02-27T21:05:33.107Z",
            "createdAt": "2025-02-27T21:05:33.107Z",
            "__v": 0
        },
        "person": null
    }
}
```

{% endtab %}
{% endtabs %}
