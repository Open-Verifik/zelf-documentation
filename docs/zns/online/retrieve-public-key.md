# 1. Retrieve public key

### Endpoint \[GET]

```
https://api.zelf.world/api/sessions/yek-cilbup 
```

This endpoint retrieves the public key associated with a specified identifier.

#### Request

* **Endpoint**: `/api/sessions/yek-cilbup`
* **Method**: GET
* **Content-Type**: `application/json`
* **Query Parameters**:
  * **identifier**: `string` (Required) - The unique identifier associated with the session or entity for which the public key is being requested.

**Example Request**

```http
GET <url>/api/sessions/yek-cilbup?identifier=your_unique_device_identifier
```

#### Response

* **200 OK**: The request was successful, and the public key is returned in the response body.
  * **Response Body**:

    ```json
    {
      "data": "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n<base64-encoded public key>\n-----END PGP PUBLIC KEY BLOCK-----"
    }
    ```
* **Headers**: The request does not require any specific headers, but it may include standard headers like `Authorization` if the API is secured.

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JavaScript" label="JavaScript">

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  url: 'https://api.zelf.world/api/sessions/yek-cilbup?identifier=AGED',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

</TabItem>
</Tabs>

### &#x20;Response

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n<base64-encoded public key>\n-----END PGP PUBLIC KEY BLOCK-----"
}
```

</TabItem>

<TabItem value="409" label="409">

```json
{
    "validationError": "missing identifier\n"
}
```

</TabItem>
</Tabs>

**data**: `string` - Contains the public key in PGP format, which can be used for encrypting data or verifying signatures associated with the identifier.

#### Error Handling

* **409 Conflict**: Missing the `identifier` parameter.
* **500 Internal Server Error**: Returned if there is an issue on the server side processing the request.

### Why is this PGP key needed?

This is used for communication between two parties so the information is exchanged between two devices (client side and/or server)

* **Data Encryption**: The retrieved public key can be used to encrypt data that can only be decrypted by the corresponding private key holder.
* **Signature Verification**: The public key can be used to verify signatures made by the corresponding private key, ensuring the authenticity and integrity of the data.
