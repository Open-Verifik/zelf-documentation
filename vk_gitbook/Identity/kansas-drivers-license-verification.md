# Kansas Driver's License Verification

## Create a new user

<mark style="color:green;">`GET - https://api.verifik.co/v2/usa/kansas/driver-license`</mark>

The Kansas Driver License Validation Service allows developers to programmatically validate the status, restrictions, endorsements, and designations of Kansas driver licenses. By providing a valid Kansas driver license number, users can obtain a response that includes details such as the license status, expiration date, any restrictions or endorsements, and designations associated with the license.

This service is essential for verifying driver credentials and ensuring compliance with state regulations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="188">Name</th><th width="90">Type</th><th width="112">Required?</th><th width="229">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>K12345678</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>The birthdate of the license holder (format: DD/MM/YYYY).</td><td><code>29/1/1974</code></td></tr><tr><td>firstName</td><td>String</td><td><code>True</code></td><td>Name of the license holder.</td><td><code>MATEO</code></td></tr><tr><td>lastName</td><td>String</td><td><code>True</code></td><td>Last name of the license holder.</td><td><code>VERIFIK</code></td></tr></tbody></table>

**Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/usa/kansas/driver-license>',
  params: {
    documentNumber: 'K12345678',
    dateOfBirth: '29/01/1974',
    firstName: 'MATEO',
    lastName: 'VERIFIK'
  },
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
conn.request("GET", "/v2/usa/kansas/driver-license?documentNumber=&dateOfBirth=&firstName=&lastName=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=&dateOfBirth=&firstName=&lastName=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=&dateOfBirth=&firstName=&lastName=');
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

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "cdlStatus": "",
    "currentCredentialInformation": [
      {
        "credentialType": "Driver's License",
        "issueDate": "03/04/2020",
        "expirationDate": "01/29/2026"
      }
    ],
    "dateOfBirth": "29/1/1974",
    "dlNumber": "K02884565",
    "dlStatus": "Valid",
    "documentNumber": "K12345678",
    "firstName": "MATEO",
    "lastName": "VERIFIK"
    "systemGeneratedDl": "N"
  },
  "signature": {
    "dateTime": "January 19, 2024 4:36 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1Q8UH"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "NotFound",
</strong>    "message": "Record not found.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
<strong>        }
</strong>}
</code></pre>

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing documentNumber\n. missing dateOfBirth\n. missing firstName\n. missing lastName\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

{% endtab %}
{% endtabs %}
