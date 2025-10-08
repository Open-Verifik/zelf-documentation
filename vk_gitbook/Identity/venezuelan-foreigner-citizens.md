# Venezuelan Foreigner citizens

## Information about foreigners in Venezuela

<mark style="color:green;">`GET - https://api.verifik.co/v2/ve/foreigner-id`</mark>&#x20;

The Foreigners Inquiry Service in Venezuela allows you to verify the identity of foreign individuals in the country. Simply provide the document number to receive relevant information. The response includes details such as the full name of the individual, their first and last names separately, and the type of document.

This service is ideal for companies and organizations that need to reliably confirm the identity of foreign clients, employees, or partners.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="183">Name</th><th width="83">Type</th><th width="110">Required?</th><th width="220">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/ve/foreigner-id>',
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
import requests

options = {
    'method': 'GET',
    'url': 'https://api.verifik.co/v2/ve/foreigner-id',
    'params': {'documentNumber': '123456789'},
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

let url = URL(string: "https://api.verifik.co/v2/ve/foreigner-id?documentNumber=123456789")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("jwt <tu_token>", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let error = error {
        print(error)
        return
    }
    
    guard let data = data else {
        print("No data received")
        return
    }
    
    do {
        let json = try JSONSerialization.jsonObject(with: data, options: [])
        print(json)
    } catch {
        print("Error parsing JSON: \(error)")
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
use GuzzleHttp\Exception\RequestException;
$client = new Client();

try {
    $response = $client->request('GET', 'https://api.verifik.co/v2/ve/foreigner-id', [
        'query' => ['documentNumber' => '123456789'],
        'headers' => [
            'Accept' => 'application/json',
            'Authorization' => 'jwt <tu_token>',
        ]
    ]);
    $data = json_decode($response->getBody(), true);
    print_r($data);
} catch (RequestException $e) {
    echo $e->getMessage();
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
    "documentType": "CEVE",
    "documentNumber": "123456789",
    "fullName": "MATEO VENEZUELA VERIFIK",
    "lastName": "MATEO",
    "firstName": "VENEZUELA VERIFIK",
    "arrayName": [
      "MATEO",
      "VENEZUELA",
      "VERIFIK"
    ],
    },
    "signature": {
        "dateTime": "March 13, 2024 2:01 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "7VWXP"
}
```

{% endtab %}

{% tab title="404" %}

<pre class="language-json"><code class="lang-json">{
<strong>    "code": "NotFound",
</strong>    "message": "Record not found.",
    "signature": {
<strong>        "dateTime": "August 31, 2022 3:24 PM",
</strong>        "message": "Certified by Verifik.co"
    }
}
</code></pre>

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing documentNumber"
}
```

{% endtab %}
{% endtabs %}
