# Panama

### Endpoint

```
https://api.verifik.co/v2/pa/company
```

The Panamanian Company Information Service allows you to retrieve detailed information about a company registered in Panama using its RUC (Registro Único de Contribuyentes). By providing the RUC, the service returns key details about the company such as its address, business name, capital, currency type, current status, document number and type, check digit, folio or finca or ficha, folio ID, organization type, record type, registration date, and representatives.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="188">Name</th><th width="85">Type</th><th width="109">Required?</th><th width="222">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: RUC.</td><td><code>RUC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Single taxpayer registry (RUC) to consult, without spaces or periods.</td><td><code>201340512231248910</code></td></tr><tr><td>dv</td><td>String</td><td><code>True</code></td><td>Verification digit.</td><td><code>71</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pa/company',
  params: {documentType: 'RUC', documentNumber: '201340512231248910',dv:'71'},
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
    'url': 'https://api.verifik.co/v2/pa/company',
    'params': {
        'documentType': 'RUC',
        'documentNumber': '201340512231248910',
        'dv': '71'
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

let url = URL(string: "https://api.verifik.co/v2/pa/company?documentType=RUC&documentNumber=201340512231248910&dv=71")!
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

$options = [
    'http' => [
        'header' => [
            "Accept: application/json",
            "Authorization: jwt <tu_token>"
        ],
        'method' => 'GET',
    ]
];

$url = 'https://api.verifik.co/v2/pa/company?documentType=RUC&documentNumber=201340512231248910&dv=71';
$context = stream_context_create($options);

try {
    $response = file_get_contents($url, false, $context);
    $data = json_decode($response, true);
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
        "address": "DISTRITO PANAMÁ, PROVINCIA PANAMÁ",
        "businessName": "SAY SHANNON S.A.",
        "capital": "10,000.00",
        "currencyType": "Dólares americanos",
        "currentStatus": "VIGENTE",
        "documentNumber": "155683862-2-2019",
        "documentType": "RUC",
        "dv": "71",
        "folioOrFincaOrFicha": "(MERCANTIL) Folio Nº 155683862",
        "idFolio": "2540923",
        "organizationType": "SOCIEDAD ANONIMA",
        "recordType": "Mercantil",
        "registrationDate": "19/08/2019",
        "representatives": {
            "director": "JOHAN SEBASTIAN CASTELLANOS BARRERA",
            "directorTreasurer": "SAMUEL ANDRES CASTELLANOS BARRERA",
            "president": "SAMUEL ANDRÉS CASTELLANOS BARRERA",
            "representative": "EL PRESIDENTE OSTENTARÁ LA REPRESENTACIÓN LEGAL DE LA SOCIEDAD Y, EN AUSENCIA DE ESTE, LA PODRÁ EJERCER CUALQUIERA DE LOS DIGNATARIOS.",
            "residentAgent": "RICARDO GONZÁLEZ TORRES",
            "secretary": "CESAR ANTONIO LEÓN DIAZ",
            "subscriber": "GRECIA IVONNE SALCEDO DE GONZALEZ"
        },
        "status": "Abierto",
        "validity": "PERPETUA"
    },
    "signature": {
        "dateTime": "August 5, 2024 5:00 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "GWBQY"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "NotFound",
"signature": {
"dateTime": "February 21, 2024 7:52 PM",
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
"message": "documentType must be one of: [RUC]"
}
```

{% endtab %}
{% endtabs %}
