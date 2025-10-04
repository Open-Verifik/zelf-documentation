# Panama

## Endpoint

```
https://api.verifik.co/v2/pa/cedula 
```

Validate identity documents for both Panamanian citizens and permanent residents using the Cédula de Identidad Personal. This API endpoint provides accurate and reliable data, including the document number, full name, first name, last name, and an array of name components. With broad applicability, it supports a wide range of identity verification needs in Panama.

**Key Use Case**\
Ideal for businesses and organizations conducting identity verification for Panamanian citizens and permanent residents, such as for KYC processes, financial services, or legal compliance.

**Important Notes**

* This service validates the Cédula de Identidad Personal for both Panamanian citizens and permanent residents. For other document types or nationalities, please refer to our alternative validation services.
* Use of this service is restricted to authorized entities. The data provided is subject to Panamanian privacy laws and should be handled responsibly.
* Always cross-check with the physical document to confirm the information retrieved.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="184">Name</th><th width="79">Type</th><th width="102">Required</th><th width="233">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: CCPA.</td><td><code>CCPA</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth of the owner of the document. in the following format DD/MM/YYYY</td><td><code>02/03/1992</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pa/cedula/extra',
  params: {documentType: 'CCPA', documentNumber: 'E-1-234567', dateOfBirth: ''02/03/1992},
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

options = {
    'method': 'GET',
    'url': 'https://api.verifik.co/v2/pa/cedula/extra',
    'params': {'documentType': 'CCPA', 'documentNumber': 'E-1-234567', 'dateOfBirth': '02/03/1999'},
    'headers': {
        'Accept': 'application/json',
        'Authorization': 'jwt <tu_token>'
    }
}

try:
    response = requests.request(options['method'], options['url'], params=options['params'], headers=options['headers'])
    data = response.json()
    print(data)
except Exception as error:
    print(error)


```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/pa/cedula/extra")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("jwt <tu_token>", forHTTPHeaderField: "Authorization")

let params: [String: String] = [
    "documentType": "CCPA",
    "documentNumber": "E-1-234567",
    "dateOfBirth": "02/03/1999"
]

let urlComponents = NSURLComponents(url: url, resolvingAgainstBaseURL: false)!
urlComponents.queryItems = params.map { URLQueryItem(name: $0.key, value: $0.value) }
request.url = urlComponents.url

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let error = error {
        print(error)
        return
    }
    
    guard let data = data else { return }
    
    do {
        let jsonData = try JSONSerialization.jsonObject(with: data, options: [])
        print(jsonData)
    } catch {
        print(error)
    }
}

task.resume()

```

{% endtab %}

{% tab title="PHP" %}

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$options = [
    'method' => 'GET',
    'query' => [
        'documentType' => 'CCPA',
        'documentNumber' => 'E-1-234567',
        'dateOfBirth' => '02/03/1999'
    ],
    'headers' => [
        'Accept' => 'application/json',
        'Authorization' => 'jwt <tu_token>'
    ]
];

$client = new Client();
try {
    $response = $client->request($options['method'], 'https://api.verifik.co/v2/pa/cedula/extra', $options);
    $data = json_decode($response->getBody(), true);
    print_r($data);
} catch (Exception $error) {
    echo $error->getMessage();
}

?>
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "arrayName": [
            "JUAN",
            "MIGUEL",
            "TREVIÑO",
            "MORALES"
        ],
        "dateOfBirth": "1999-03-02T00:00:00.000Z",
        "documentNumber": "E-8-187192",
        "documentType": "CCPA",
        "firstName": "JUAN MIGUEL",
        "fullName": "JUAN MIGUEL TREVIÑO MORALES",
        "lastName": "TREVIÑO MORALES",
        "audit": {}
    },
    "signature": {
        "dateTime": "September 24, 2024 8:20 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "I06UC"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
    "message": "Record not found.",
<strong>    "signature": {
</strong><strong>        "dateTime": "August 31, 2022 3:24 PM",
</strong><strong>        "message": "Certified by Verifik.co"
</strong>    }
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

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CCPA]"
}
```

{% endtab %}
{% endtabs %}
