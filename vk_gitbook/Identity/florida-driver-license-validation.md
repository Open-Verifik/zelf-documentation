# Florida Driver License Validation

## Florida Driver License Validation

<mark style="color:green;">`GET - https://api.verifik.co/v2/usa/florida/driver-license`</mark>

This service allows developers to validate the status, restrictions, endorsements, and designations of Florida driver licenses. By providing a valid Florida driver license number, the service response with the license status, expiration date, restrictions, endorsements, and designations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="182">Name</th><th width="84">Type</th><th width="108">Required?</th><th width="227">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>B123-456-78-910-0</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/usa/florida/driver-license>',
  params: { documentNumber: 'B123-456-78-910-0'},
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
conn.request("GET", "/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```ruby
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0');
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
        "designations": "None on Record",
        "documentNumber": "B123-456-78-910-0",
        "endorsements": "None on Record",
        "restrictions": "None on Record",
        "status": "As of February 26, 2024, at 12:11 AM, Florida driver license number B123-456-78-910-0 is Valid. This license is a Class E with an expiration date of 12/28/2026."
    },
    "signature": {
        "dateTime": "March 12, 2024 8:15 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "XUXSL"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
<strong>    "message": "Record not found.",
</strong>    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
</code></pre>

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
    "code": "MissingParameter",
<strong>    "message": "documentType must be one of: [DNIAR]"
</strong>}
</code></pre>

{% endtab %}
{% endtabs %}
