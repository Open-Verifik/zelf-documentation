# Uruguay

## Uruguayan Citizen Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/uy/cedula`</mark>

This Uruguay service allows you to verify the validity of a Uruguayan ID card using the document type CCUY and the provided document number along with the date of birth. In addition to validating the document, you can obtain detailed information such as the full name, first names, and last names of the person associated with the given document number.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="190">Name</th><th width="88">Type</th><th width="102">Required</th><th width="228">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be consulted.</td><td><code>123456789</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document to consult. Allowed parameter: CCUY.</td><td><code>CUI</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth in the following format (DD/MM/YYYY)</td><td><code>20/02/1978</code> </td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/uy/cedula>',
  params: { documentNumber: '123456789', documentType:'CCUY', dateOfBirth: '20/02/1978'},
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
    'url': 'https://api.verifik.co/v2/uy/cedula',
    'params': {'documentNumber': '123456789', 'documentType': 'CCUY', 'dateOfBirth': '20/02/1978'},
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

let url = URL(string: "https://api.verifik.co/v2/uy/cedula")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("jwt <tu_token>", forHTTPHeaderField: "Authorization")

let params: [String: String] = ["documentNumber": "123456789", "documentType": "CCUY", "dateOfBirth": "20/02/1978"]
let queryItems = params.map { URLQueryItem(name: $0.key, value: $0.value) }
var urlComponents = URLComponents(url: url, resolvingAgainstBaseURL: false)!
urlComponents.queryItems = queryItems
request.url = urlComponents.url

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let error = error {
        print(error)
        return
    }
    
    guard let data = data else { return }
    
    do {
        let json = try JSONSerialization.jsonObject(with: data, options: [])
        print(json)
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

$options = [
    'http' => [
        'header' => [
            'Accept: application/json',
            'Authorization: jwt <tu_token>'
        ],
        'method' => 'GET',
    ]
];

$context = stream_context_create($options);
$url = 'https://api.verifik.co/v2/uy/cedula?documentNumber=123456789&documentType=CCUY&dateOfBirth=20/02/1978';

try {
    $data = file_get_contents($url, false, $context);
    echo $data;
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
            "MATEO",
            "VERIFIK"
        ],
        "dateOfBirth": "1973-03-03",
        "documentNumber": "12345678909876",
        "documentType": "CCUY",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK"
    },
    "signature": {
        "dateTime": "July 3, 2024 3:24 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "YOESE"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
<strong>        "dateTime": "August 31, 2022 3:24 PM",
</strong>        "message": "Certified by Verifik.co"
<strong>    }
</strong>}
</code></pre>

{% endtab %}

{% tab title="409" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "MissingParameter",
</strong>    "message": "missing documentType\n. missing documentNumber\n"
}
</code></pre>

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CCUY]"
}
```

{% endtab %}
{% endtabs %}
