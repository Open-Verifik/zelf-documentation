# Peruvian Citizen Information with Extra Data

## Peruvian Citizen Information with Extra Data

<mark style="color:green;">`GET - https://api.verifik.co/v2/pe/cedula/extra`</mark>

This service allows users to retrieve detailed information about Peruvian ID cards (DNI). The service returns a response that includes the document type, document number, full name, first name, last name, verification digit, date of birth, expedition date, expiration date, date of death (if applicable), age, gender, civil status, province, area, home district, donor status, ubigeous, postal code, death area (if applicable), death province (if applicable), and death home district (if applicable).

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="184">Name</th><th width="91">Type</th><th width="117">Required?</th><th width="217">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: DNI.</td><td><code>DNI</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/pe/cedula>',
  params: {documentType: 'DNI', documentNumber: '1234567'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

{% endtab %}

{% tab title="Python" %}

```python
message = "hello world"
print(message)
```

{% endtab %}

{% tab title="Ruby" %}

```ruby
message = "hello world"
puts message
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "age": "71",
        "area": "LIMA",
         "arrayName": [
      "MATEO",
      "VERIFIK"
       ],
        "civilStatus": "CASADO",
        "dateOfBirth": "1952-10-26T00:00:00.000Z",
        "dateOfDeath": null,
        "documentNumber": "1234567",
        "documentType": "DNI",
        "donor": false,
        "expeditionDate": "2015-03-15T00:00:00.000Z",
        "expirationDate": "Wed Jan 01 3000 00:00:00 GMT+0000 (Coordinated Universal Time)",
        "firstName": "MATEO",
        "fullName": "VERIFIK",
        "gender": "MUJER",
        "homeDistrict": "SAN MARTIN DE PORRES",
        "lastName": "VERIFIK",
        "postalCode": "15100",
        "province": "LIMA",
        "ubigeous": "010101",
        "verificationDigit": "0"
    },
    "signature": {
        "dateTime": "March 13, 2024 4:38 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "SF11X"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
    "message": "Record not found.",
<strong>    "signature": {
</strong>        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
</code></pre>

{% endtab %}

{% tab title="409" %}

```
{
    "code": "MissingParameter",
    "message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

<pre><code>{
    "code": "MissingParameter",
<strong>    "message": "documentType must be one of: [DNI]"
</strong>}
</code></pre>

{% endtab %}
{% endtabs %}
