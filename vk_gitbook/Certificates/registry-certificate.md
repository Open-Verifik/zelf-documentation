# Registry Certificate

### Endpoint

```
https://api.verifik.co/v2/co/registraduría/certificado
```

The Registry Certificate service provides a programmatic method to verify the validity of a Colombian identity document and obtain the certificate status. By using the document number and date to query the Registraduría Nacional del Estado Civil database, this service returns a JSON response with the certificate status, any notifications or exceptions, and a base64-encoded PDF of the certificate.

This service is ideal for Colombian institutions, companies, or individuals needing to verify the authenticity of a Colombian identity document or certificate.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="186">Name</th><th width="80">Type</th><th width="112">Required?</th><th width="228">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr><tr><td>date</td><td>String</td><td><code>True</code></td><td>Date of issuance of the cedula to consult. Valid format: DD/MM/YYYY.</td><td><code>10/10/2020</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/registraduria/certificado',
  params: {documentNumber: '901331380', date: '10/10/2020'},
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
    'url': 'https://api.verifik.co/v2/co/registraduria/certificado',
    'params': {'documentNumber': '901331380', 'date': '10/10/2020'},
    'headers': {
        'Accept': 'application/json',
        'Authorization': 'jwt <tu_token>'
    }
}

try:
    response = requests.request(options['method'], options['url'], headers=options['headers'], params=options['params'])
    data = response.json()
    print(data)
except Exception as error:
    print(error)


```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/co/registraduria/certificado")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("jwt <tu_token>", forHTTPHeaderField: "Authorization")

let queryItems = [
    URLQueryItem(name: "documentNumber", value: "901331380"),
    URLQueryItem(name: "date", value: "10/10/2020")
]
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

$options = [
    'http' => [
        'header' => [
            "Accept: application/json",
            "Authorization: jwt <tu_token>"
        ],
        'method' => 'GET',
    ]
];

$context = stream_context_create($options);
$url = 'https://api.verifik.co/v2/co/registraduria/certificado?documentNumber=901331380&date=10/10/2020';

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
        "codigoVerificacion": "2143291740",
        "novedad": "VIGENTE (VIVO)",
        "pdfBase64": "JVBERi0xLjQKJeLjz9+miUACiiigD...NoY3CiUlRU9GCg==",
        "documento": {
            "cedula": "1.121.329.661",
            "fechaExpedicion": "16 DE JULIO DE 2007",
            "lugarExpedicion": "VILLANUEVA - LA GUAJIRA",
            "nombre": "ANUAR DE JESUS HERNANDEZ GARCIA"
        }
    },
    "signature": {
        "dateTime": "August 29, 2024 10:39 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "7KTH7"
}

```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

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
  "message": "date format required: DD/MM/YYYY\n"}
}
```

{% endtab %}
{% endtabs %}
