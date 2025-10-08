# Brazil

### Endpoint

```
https://api.verifik.co/v2/br/company
```

The Brazilian Company Information service provides information on Brazilian companies, including their legal nature, main and secondary activities, share capital, shareholders, status, and more. The service returns responses that include the company's name, tax ID, address, phone number, email, and other details.

This service is useful for businesses looking to verify information about potential partners or customers in Brazil, or for researchers looking to study the Brazilian business landscape.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="183">Name</th><th width="79">Type</th><th width="107">Required?</th><th width="211">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed value: CNPJ.</td><td><code>CNPJ</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the company to be queried. The number must be 14 digits, without spaces, dashes, or special characters.</td><td><code>09159197000180</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/br/company>',
  params: {documentType: 'CNPJ', documentNumber: '09159197000180'},
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
conn.request("GET", "/v2/br/company?documentType=CNPJ&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=');
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
        "alias": "ALVO VIDEO PAPELARIA E INFORMATICA",
        "city": "RIO DE JANEIRO",
        "complement": "LOJA B",
        "efr": "",
        "email": "ebross@uol.com.br",
        "generalStatus": "OK",
        "lastUpdate": "2024-01-13T23:59:59.000Z",
        "legalNature": "206-2 - Sociedade Empresária Limitada",
        "mainActivity": [
            {
                "code": "00.00-0-00",
                "text": "********"
            }
        ],
        "name": "007 ALVO VIDEO PAPELARIA E INFORMATICA LTDA",
        "neighborhood": "CAMPO GRANDE",
        "number": "2096",
        "openingDate": "29/10/2007",
        "phone": "(21) 3395-5238 / (21) 8185-8335 / (21) 7829-8233",
        "postalCode": "23.087-230",
        "secondaryActivities": [
            {
                "code": "00.00-0-00",
                "text": "Não informada"
            }
        ],
        "shareCapital": "10000.00",
        "shareholders": [
            {
                "name": "ANA PAULA FIGUEIRA RIBEIRO",
                "role": "49-Sócio-Administrador"
            },
            {
                "name": "ANDERSON LUIZ GOMES PORTELA",
                "role": "22-Sócio"
            }
        ],
        "size": "MICRO EMPRESA",
        "specialStatus": "",
        "specialStatusDate": "",
        "state": "RJ",
        "status": "INAPTA",
        "statusDate": "11/03/2021",
        "statusReason": "OMISSÃO DE DECLARAÇÕES",
        "street": "RUA VITOR ALVES",
        "taxId": "09.159.197/0001-80",
        "type": "MATRIZ"
    },
    "signature": {
        "dateTime": "March 12, 2024 3:30 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "HREL6"
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
"message": "documentType must be one of: [CNPJ]"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "documentNumber maximum length: 14\n"
}
```

{% endtab %}
{% endtabs %}
