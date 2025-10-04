# Brazil

### Endpoint

```
https://api.verifik.co/v2/br/background-check
```

The Brazil Background service provides detailed information about Brazilian individuals. When making a query, the response includes relevant data such as associated names, ability to issue reports, certification number, document number, document type, first name, full name, last name, and a base64-encoded PDF file.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="199">Name</th><th width="84">Type</th><th width="108">Required?</th><th width="220">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameter: CPF.</td><td><code>CPF</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult.</td><td><code>123456789</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth of the person to consult, valid format: dd/mm/yyyy.</td><td><code>20/05/2022</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/br/background-check>',
  params: {
    documentType: 'CPF',
    documentNumber: '012.345.678-01',
    dateOfBirth: '17/02/2002'
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
import requests

options = {
    'method': 'GET',
    'url': 'https://api.verifik.co/v2/br/background-check',
    'params': {
        'documentType': 'CPF',
        'documentNumber': '012.345.678-01',
        'dateOfBirth': '17/02/2002'
    },
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

let url = URL(string: "https://api.verifik.co/v2/br/background-check")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("jwt <tu_token>", forHTTPHeaderField: "Authorization")

let params: [String: String] = [
    "documentType": "CPF",
    "documentNumber": "012.345.678-01",
    "dateOfBirth": "17/02/2002"
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
// Some code
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
            "VERIFIK",
        ],
        "canIssue": "true",
        "certificationNumber": "036386572024",
        "dateOfBirth": "2002-02-17",
        "documentNumber": "01234567801",
        "documentType": "CPF",
        "firstName": "MATEO",
        "fullName": "MATEO VERIFIK",
        "lastName": "VERIFIK",
        "pdfUrl": "<https://cdn.verifik.co/background-check/brazilian/pdf/170920571123876-application.pdf>"
    },
    "signature": {
        "dateTime": "July 25, 2024 3:24 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8UX8S"
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
"message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CPF]"
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
