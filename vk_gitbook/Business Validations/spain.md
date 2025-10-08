# Spain

### Endpoint

```
https://api.verifik.co/v2/es/company
```

The Spanish Business Information Service allows you to obtain precise details about a company registered in Spain using its NIF (Tax Identification Number). By providing the NIF, the service returns information such as the company's address, business name, CNAE code (National Classification of Economic Activities), constitution date, document number and type, legal form, phone number, SIC code (Standard Industrial Classification), and social purpose.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="173">Name</th><th width="89">Type</th><th width="111">Required?</th><th width="228">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: NIF.</td><td><code>NIT</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Tax Identification Number (NIF) to be consulted.</td><td><code>201340512231248910</code></td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/es/company>',
  params: {documentType: 'NIF', documentNumber: 'B45549201'},
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
    'url': 'https://api.verifik.co/v2/es/company',
    'params': {'documentType': 'NIF', 'documentNumber': 'B45549201'},
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
message = "hello world"
puts message
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
        "address": "CTRA. MOCEJON, S/N 45280, OLIAS DEL REY, TOLEDO",
        "businessName": "PANADERIA MILAGROS DIAZ SL",
        "cnae": "1072  Fabricación de galletas y productos de panadería y pastelería de larga duración",
        "constitutionDate": "20 años, 7 meses y 14 dias",
        "documentNumber": "B45549201",
        "documentType": "CIF",
        "legalForm": "SOCIEDAD LIMITADA",
        "phone": "925490311",
        "sic": "2052 GALLETAS Y AFINES",
        "socialObject": "LA FABRICACION Y COMERCIALIZACION DE PRODUCTOS DE PANADERIA Y OTROS DERIVADOS TALES COMO BOLLERIA Y PASTELERIA. LA"
    },
    "signature": {
        "dateTime": "August 5, 2024 4:54 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "ZJ0Q8"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la CUIT ingresada",
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
"message": "documentType must be one of: [NIF]"
}
```

{% endtab %}
{% endtabs %}
