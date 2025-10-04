# Retrieve an App Login

#### **Endpoint URL**:

`GET https://api.verifik.co/v2/app-logins/{id}`

#### **Description**:

This endpoint retrieves a single app login record by its ID, along with optional populated fields such as `emailValidation`, `phoneValidation`, or `biometricValidation`.

***

#### **URL Parameters**:

| Parameter Name | Type   | Description                                                 |
| -------------- | ------ | ----------------------------------------------------------- |
| `id`           | string | The unique ID of the app login record you want to retrieve. |

***

#### **Query Parameters**:

| Parameter Name | Type  | Description                                                                            |
| -------------- | ----- | -------------------------------------------------------------------------------------- |
| `populates[]`  | array | An array specifying which validation fields to populate (e.g., `biometricValidation`). |

***

#### **Sample Request**:

```bash
GET /v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation
```

#### **Sample Request (Node.js - Axios)**:

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation',
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

#### **Responses**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "_id": "66e464acbad79f3a380d408f",
        "client": "613375a1eab2fe08527f81e2",
        "name": "",
        "status": "pending",
        "project": "6266193db77ccc8111730c90",
        "projectFlow": "658ed28b0990f300134d7b78",
        "type": "faceliveness",
        "biometricValidation": "66e464acbad79f3a380d408d",
        "accessControlLog": "66e464acbad79f3a380d4090",
        "updatedAt": "2024-09-13T16:13:32.942Z",
        "createdAt": "2024-09-13T16:13:32.942Z",
        "__v": 0
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

{% endtab %}
{% endtabs %}

***

#### **Response Fields**:

* **data**: Object containing the app login record.
  * **\_id**: Unique identifier of the app login.
  * **client**: The client ID associated with this login.
  * **name**: The name of the client or app.
  * **status**: Status of the login attempt (`pending`, `validated`, etc.).
  * **project**: ID of the project associated with the login.
  * **projectFlow**: ID of the project flow for tracking the process.
  * **type**: Type of validation performed (e.g., `email`, `phone`, `biometric`).
  * **emailValidation**: Reference ID for the email validation record.
  * **phoneValidation**: Reference ID for the phone validation record.
  * **biometricValidation**: Reference ID for the biometric validation record.
  * **accessControlLog**: Reference ID for the access control log.
  * **updatedAt**: Timestamp of the last update to the validation.
  * **createdAt**: Timestamp when the validation was created.
  * **\_\_v**: Version key.

***
