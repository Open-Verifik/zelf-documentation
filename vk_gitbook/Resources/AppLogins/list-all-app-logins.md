# List all App Logins

#### **Endpoint URL**:

`GET https://api.verifik.co/v2/app-logins`

#### **Description**:

This endpoint retrieves a list of app login attempts with detailed validation information for email, phone, and biometrics. The response includes an array of data containing information about the login attempts and associated validation types (email, phone, biometric).

***

#### **Query Parameters**:

| Parameter Name                     | Type   | Description                                                                                                           |
| ---------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `page`                             | int    | Specifies the page of the results to retrieve. Default is `1`.                                                        |
| `populates[]`                      | array  | An array specifying which validations to include (e.g., `emailValidation`, `phoneValidation`, `biometricValidation`). |
| `sort`                             | string | Field by which to sort the results. Default is by creation date (`-createdAt`).                                       |
| `where-exists_emailValidation`     | int    | Filter results where email validation exists (`1` to include).                                                        |
| `where-exists_phoneValidation`     | int    | Filter results where phone validation exists (`1` to include).                                                        |
| `where-exists_biometricValidation` | int    | Filter results where biometric validation exists (`1` to include).                                                    |
| `like_name`                        | string | Search results by name (supports partial matching).                                                                   |

#### **Sample Request**:

```bash
GET /v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt
```

#### **Sample Request (Node.js - Axios)**:

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://api.verifik.co/v2/app-logins?page=1&populates[]=emailValidation&populates[]=phoneValidation&populates[]=biometricValidation&sort=-createdAt',
  headers: { 
    'Authorization': 'Bearer YOUR_API_KEY'
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

***

#### **Response Fields**:

* **\_id**: Unique identifier for the login attempt.
* **client**: The client ID associated with this login.
* **name**: Name of the client or the app.
* **status**: Status of the login attempt (`pending`, `validated`, etc.).
* **project**: ID of the project associated with the login.
* **projectFlow**: ID of the project flow for tracking the process.
* **type**: Type of validation performed (`email`, `phone`, or `biometric`).
* **emailValidation**: Object that contains information about email validation (optional).
* **phoneValidation**: Object that contains information about phone validation (optional).
* **biometricValidation**: Object that contains information about biometric validation (optional).
* **accessControlLog**: Log of the access control attempts associated with this login (optional).
* **updatedAt**: Timestamp for the last update to the validation.
* **createdAt**: Timestamp when the validation was created.
* **\_\_v**: Version key.

**Responses**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": [
        {
            "_id": "66e49e46dbfa9731ceb9d477",
            "client": "613375a1eab2fe08527f81e2",
            "name": "Verifik Main Account",
            "status": "validated",
            "project": "6266193db77ccc8111730c90",
            "projectFlow": "658ed28b0990f300134d7b78",
            "type": "email",
            "emailValidation": {
                "_id": "66e49e45dbfa9731ceb9d475",
                "client": "613375a1eab2fe08527f81e2",
                "project": "6266193db77ccc8111730c90",
                "projectFlow": "658ed28b0990f300134d7b78",
                "status": "validated",
                "validationMethod": "verificationCode",
                "email": "miguel.trevinom@gmail.com",
                "emailData": {
                    "firstName": "Verifik Main Account",
                    "title": "Verifik Client App",
                    "projectName": "Verifik Client App",
                    "contactEmail": "miguel@verifik.co",
                    "logo": "https://cdn.verifik.co/projects/VerifikClientApp_1726146056389-image.png",
                    "authLink": "http://localhost:4400/sign-in/6266193db77ccc8111730c90?email=miguel.trevinom@gmail.com&otp=",
                    "buttonColor": "#14AE5C",
                    "buttonTxtColor": "#FFF"
                },
                "otp": "$2a$10$mMYT2vE6sx3J898UOPDeFeADuXYE3Gktkx9DwVUmDr0uiAu1qdp.y",
                "expiresAt": "2024-09-13T20:29:17.000Z",
                "extraParams": [],
                "type": "login",
                "redirectUrl": "https://verifik.app",
                "requires2FA": false,
                "ipAddress": "::ffff:172.17.0.1",
                "updatedAt": "2024-09-13T20:19:47.927Z",
                "createdAt": "2024-09-13T20:19:18.660Z",
                "__v": 0
            }
        }
    ]
}
```

{% endtab %}
{% endtabs %}
