# \[v3] Full Peruvian Citizen

## Endpoint

```
https://api.verifik.co/v3/pe/cedula/extra
```

This API call performs an extended identity verification for a Peruvian citizen using their DNI (Documento Nacional de Identidad) number. This Service retrieves detailed personal information. It returns data such as the individual's full name, first name, last name, civil status, date of birth, document number, expedition and expiration dates, and additional details like address and verification signature, as certified by Verifik.&#x20;

**The Authorization header is required for authentication to access this information securely.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="184">Name</th><th width="91">Type</th><th width="117">Required?</th><th width="217">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: DNI.</td><td><code>DNI</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/pe/cedula',
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
import requests

url = "https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367&force=1"

payload = {}
headers = {
  'Authorization': 'Bearer eyJhbGciOIJ9.eyJjbGllbnRJZCI6..06rwjGQ'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)


```

{% endtab %}

{% tab title="Ruby" %}

```ruby
require "uri"
require "net/http"

url = URI("https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367&force=1")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "Bearer eyJhbGciOkpXVCJ9.eyJjbGllbn...rwjGQ"

response = https.request(request)
puts response.read_body

```

{% endtab %}

{% tab title="cURL" %}

```bash
curl --location --request GET 'https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367&force=1' \
--header 'Authorization: Bearer eyJhbGciOiJXVCJ9.eyJjbGllbnR...QqLcIe4-706rwjGQ'
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "address": "CARACALLA",
        "arrayName": [
            "FELIPE",
            "TRUJILLO",
            "HERNANDEZ"
        ],
        "civilStatus": "SOLTERO",
        "dateOfBirth": "19-11-1997",
        "documentNumber": "74687367",
        "documentType": "DNI",
        "expeditionDate": "03-03-2025",
        "expirationDate": "03-03-2033",
        "firstName": "FELIPE",
        "fullName": "FELIPE TRUJILLO HERNANDEZ",
        "lastName": "TRUJILLO HERNANDEZ",
        "photo": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBD...v8ADSGiigD/2Q==",
        "sex": "M",
        "ubigeoReniec": "020208",
        "verificationDigit": "2"
    },
    "signature": {
        "dateTime": "April 16, 2025 2:44 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "G2ZOZ"
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
