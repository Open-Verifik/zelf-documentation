# Interpol Background Check

## Endpoint

```
https://api.verifik.co/v2/interpol
```

This API endpoint allows you to search the criminal background of an individual or a company. To receive a successful response, it is necessary to provide the document type and document number. The response returns details such as document type, document number, first name, last name, full name, and name components for both natural and legal persons. It is designed for secure and authorized use by law enforcement and security agencies.

#### Key Use Case

\
Essential for organizations requiring criminal background verification, such as for hiring, security clearances, or legal compliance, particularly when dealing with international records.

#### Important Notes

* This service accesses Interpol’s database and is intended exclusively for authorized law enforcement and security agencies. Unauthorized use is strictly prohibited.
* The data retrieved is highly sensitive and subject to international privacy and data protection laws. Handle with care and ensure compliance with all relevant regulations.
* Always verify the information with official Interpol channels or local authorities for critical decisions.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query via Document**

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>False</code></td><td>The <a href="documents-supported">document type</a> that you want to request.</td></tr><tr><td>documentNumber</td><td>String</td><td><code>False</code></td><td>Document number to consult, without spaces or points.</td></tr></tbody></table>

#### Query via Full Name

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>fullName</td><td>String</td><td><code>False</code></td><td>Instead of documentType and documentNumber, you can pass the name directly of the person/business.</td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/interpol',
  params: {documentType: 'CC', documentNumber: '80251972'},
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
conn.request("GET", "/v2/interpol?fullName=IVAN%20LUCIANO%20MARQUEZ%20MARIN%20ARANGO", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/interpol?fullName=IVAN%20LUCIANO%20MARQUEZ%20MARIN%20ARANGO")!,timeoutInterval: Double.infinity)
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

{% tab title="Untitled" %}

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/interpol?fullName=IVAN LUCIANO MARQUEZ MARIN ARANGO');
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
        "documentType": "CC",
        "documentNumber": "19304877",
        "firstName": "IVAN LUCIANO MARQUEZ",
        "lastName": "MARIN ARANGO",
        "fullName": "IVAN LUCIANO MARQUEZ MARIN ARANGO",
        "arrayName": [
            "IVAN",
            "LUCIANO",
            "MARQUEZ",
            "MARIN",
            "ARANGO"
        ],
        "foundInInterpol": true,
        "details": {
            "totalCards": "2",
            "cards": [
                {
                    "arrestWarrants": [
                        {
                            "issuingCountryId": "CO",
                            "charge": "ARTICULO 162.  - RECLUTAMIENTO ILÍCITO \r\nARTICULO 135-6 - HOMICIDIO EN PERSONA PROTEGIDA \r\nARTICULO 165 y 166 causal 3 - DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "ARTICULO 162.  - RECLUTAMIENTO ILÍCITO \r\nARTICULO 135-6 - HOMICIDIO EN PERSONA PROTEGIDA \r\nARTICULO 165 y 166 causal 3 - DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Desaparición forzada agravada y homicidio en persona protegida"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Desaparición forzada agravada y homicidio en persona protegida"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Reclutamiento ilícito\r\nHomicidio en persona protegida\r\nDesaparición forzada"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Reclutamiento ilícito\r\nHomicidio en persona protegida\r\nDesaparición forzada"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "RECLUTAMIENTO ILÍCITO (ART. 162)\r\nHOMICIDIO EN PERSONA PROTEGIDA (ART.135-6)\r\n DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA (ART.165 y ART. 166 causal 3)"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "RECLUTAMIENTO ILÍCITO (ART. 162)\r\nHOMICIDIO EN PERSONA PROTEGIDA (ART.135-6)\r\n DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA (ART.165 y ART. 166 causal 3)"
                        }
                    ],
                    "weight": "0",
                    "languagesSpokenIds": [
                        "SPA"
                    ],
                    "height": "1.75",
                    "sexId": "M",
                    "countryOfBirthId": "CO",
                    "distinguishingMarks": null,
                    "eyesColorsId": null,
                    "hairsId": null,
                    "placeOfBirth": "FLORENCIA - CAQUETA"
                },
                {
                    "arrestWarrants": [
                        {
                            "issuingCountryId": "CO",
                            "charge": "ARTICULO 162.  - RECLUTAMIENTO ILÍCITO \r\nARTICULO 135-6 - HOMICIDIO EN PERSONA PROTEGIDA \r\nARTICULO 165 y 166 causal 3 - DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "ARTICULO 162.  - RECLUTAMIENTO ILÍCITO \r\nARTICULO 135-6 - HOMICIDIO EN PERSONA PROTEGIDA \r\nARTICULO 165 y 166 causal 3 - DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Desaparición forzada agravada y homicidio en persona protegida"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Desaparición forzada agravada y homicidio en persona protegida"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Reclutamiento ilícito\r\nHomicidio en persona protegida\r\nDesaparición forzada"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "Reclutamiento ilícito\r\nHomicidio en persona protegida\r\nDesaparición forzada"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "RECLUTAMIENTO ILÍCITO (ART. 162)\r\nHOMICIDIO EN PERSONA PROTEGIDA (ART.135-6)\r\n DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA (ART.165 y ART. 166 causal 3)"
                        },
                        {
                            "issuingCountryId": "CO",
                            "charge": "RECLUTAMIENTO ILÍCITO (ART. 162)\r\nHOMICIDIO EN PERSONA PROTEGIDA (ART.135-6)\r\n DESAPARICIÓN FORZADA AGRAVADA POR LA MENOR EDAD DE LA VÍCTIMA (ART.165 y ART. 166 causal 3)"
                        }
                    ],
                    "weight": "0",
                    "languagesSpokenIds": [
                        "SPA"
                    ],
                    "height": "1.75",
                    "sexId": "M",
                    "countryOfBirthId": "CO",
                    "distinguishingMarks": null,
                    "eyesColorsId": null,
                    "hairsId": null,
                    "placeOfBirth": "FLORENCIA - CAQUETA"
                }
            ]
        }
    },
    "signature": {
        "dateTime": "June 16, 2025 4:31 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "PHVXK"
}
```

{% endtab %}

{% tab title="200" %}

```json
{
    "data": {
        "documentType": "CC",
        "documentNumber": "123456789",
        "firstName": "MATEO",
        "lastName": "VERIFIK",
        "fullName": "MATEO VERIFIK",
        "arrayName": [
            "MATEO",
            "VERIFIK",
        ],
        "foundInInterpol": false,
        "details": {}
    },
    "signature": {
        "dateTime": "June 16, 2025 4:32 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "FX5TI"
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
    "message": "documentType must be one of: [CC,CE,PEP,NIT,CCVE,CCEC,DNI,DNIAR,DNIHN,CIC,CIE,RUN,CURP,CUI,CCPA,CI,CPF,DUI,CCUY]"
}
```

{% endtab %}
{% endtabs %}
