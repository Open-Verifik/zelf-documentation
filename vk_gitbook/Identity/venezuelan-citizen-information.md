# Venezuelan Citizen Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/ve/cedula`</mark>

This service allows users to verify the authenticity of a Venezuelan identity card by providing the document number.&#x20;

This information can be used by companies and organizations to verify the identity of their customers, employees, or partners.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="186">Name</th><th width="99">Type</th><th width="106">Required?</th><th width="222">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ve/cedula',
  params: { documentNumber: '123456789'},
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
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/ve/cedula?documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ve/cedula?documentNumber=123456789")!,timeoutInterval: Double.infinity)
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

{% tab title="PHP" %}

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/ve/cedula?documentNumber=123456789');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```

{% endtab %}
{% endtabs %}

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "arrayName": [
      "GONZALEZ",
      "SANDOVAL",
      "JUAN",
      "ANTONIO"
    ],
    "birthDate": "2008-09-21",
    "documentNumber": "18359186",
    "documentType": "CCVE",
    "firstName": "JUAN ANTONIO",
    "lastName": "GONZALEZ SANDOVAL",
    "maritalStatus": "SOLTERO"
  },
  "signature": {
    "dateTime": "December 16, 2024 11:28 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1R0A0"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json"><strong>{
</strong>    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
</code></pre>

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
    "code": "MissingParameter",
<strong>    "message": "missing documentNumber"
</strong>}
</code></pre>

{% endtab %}
{% endtabs %}

### **Response Fields**

| Field                 | Type   | Description                                                                                |
| --------------------- | ------ | ------------------------------------------------------------------------------------------ |
| `data`                | Object | Contains citizen's personal information.                                                   |
| `data.arrayName`      | Array  | Array of name components.                                                                  |
| `data.birthDate`      | String | Birth date of the citizen (YYYY-MM-DD). **We don't bring this value on all the requests.** |
| `data.documentNumber` | String | The input document number.                                                                 |
| `data.documentType`   | String | The input document type.                                                                   |
| `data.firstName`      | String | Citizen's first name.                                                                      |
| `data.lastName`       | String | Citizen's last name.                                                                       |
| `data.maritalStatus`  | String | Citizen's marital status. **We don't bring this value on all the requests.**               |
| `signature`           | Object | Signature metadata for response verification.                                              |
| `signature.dateTime`  | String | Timestamp of the response generation.                                                      |
| `signature.message`   | String | Verification message.                                                                      |
| `id`                  | String | Unique response identifier.                                                                |

Note: the birthDate and maritalStatus are values that are **only retrieved for certain records**, is **not** a **guaranteed** field.
