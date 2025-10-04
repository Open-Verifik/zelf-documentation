# Colombian Business Information - RUES

### Endpoint

<mark style="color:green;">`GET - https://api.verifik.co/v3/co/rues`</mark>

The Colombian Business Information service - RUES (Registro Único Empresarial y Social) offers detailed information about businesses registered in Colombia. By using this service, you can obtain essential details about a specific business, including its name, registration number, document type, identification details, location (municipality), registration category, and its status in the Registro Mercantil (RM, Mercantile Register).

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="182">Name</th><th width="88">Type</th><th width="109">Required?</th><th width="238">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Valid parameter: NIT</td><td><code>NIT</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>NIT of the company, without spaces, points and without verification number.</td><td><code>901331380</code></td></tr><tr><td>category</td><td>String</td><td><code>True</code></td><td>Specifies the category. Use one of the values listed in the categories table.</td><td><code>PROP</code></td></tr></tbody></table>

#### **Categories**

| **Parameter** | **Description**                                                                 | **Example Value** |
| ------------- | ------------------------------------------------------------------------------- | ----------------- |
| `PROP`        | Proponents - Identifies proponents of the business or entity.                   | `824005670`       |
| `RM`          | Registro Mercantil - National Registry of Commerce.                             | `901140289`       |
| `RNT`         | Registro Nacional de Turismo - National Tourism Registry.                       | `890700148`       |
| `ESAL`        | Entidades sin Ánimo de Lucro - Non-Profit Entities.                             | `805019139`       |
| `RUNOEL`      | Operadores de Libranza - Payroll Loan Operators.                                | `860066736`       |
| `ESOL`        | Entidades de Economía Solidaria - Solidarity Economy Entities.                  | `802008575`       |
| `JUEGOS`      | Vendedores de Juegos de Suerte y Azar - Lottery and Gambling Vendors.           | `802013432`       |
| `EXTRANJERAS` | Entidades Extranjeras de Derecho Privado sin Ánimo de Lucro - Foreign Entities. | `900537723`       |

### **Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/co/rues',
  params: {documentNumber: '901331380', documentType: 'NIT'},
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
conn.request("GET", "/v3/co/rues?documentType=NIT&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v3/co/rues?documentType=NIT&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v3/co/rues?documentType=NIT&documentNumber=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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

**Response**

<details>

<summary>200 - PROP</summary>

```json
{
    "data": {
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "documentNumber": "824005670",
        "documentType": "NIT",
        "fullNit": "824005670-7",
        "idRup": "39000000001547",
        "location": "VALLEDUPAR",
        "status": "NORMAL",
        "category": "PROP",
        "lastRenewedYear": "20240506",
        "rupRegistrationNumber": "1547"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:04 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "O9Z28"
}
```

</details>

<details>

<summary>200 - RM</summary>

```json
{
    "data": {
        "businessName": "PICO GRUP S.A.S",
        "documentNumber": "901140289",
        "documentType": "NIT",
        "fullNit": "901140289-1",
        "idRm": "560000026379",
        "location": "PIEDEMONTE ARAUCANO",
        "organizationType": "SOCIEDADES POR ACCIONES SIMPLIFICADAS SAS",
        "status": "ACTIVA",
        "category": "RM",
        "lastRenewedYear": "2022",
        "registration": "26379",
        "chamberCode": "56"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:11 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "EJ8NX"
}
```

</details>

<details>

<summary>200 - RNT</summary>

```json
{
    "data": {
        "businessName": "PARQUE RECREATIVO Y CULTURAL CAIKÉ",
        "documentNumber": "890700148",
        "documentType": "NIT",
        "category": "RNT",
        "chamber": "CAMARA DE COMERCIO DE IBAGUE",
        "status": "ACTIVO",
        "idRnt": "164040",
        "department": "IBAGUE - TOLIMA"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:11 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "I36P8"
}
```

</details>

<details>

<summary>200 - ESAL</summary>

```json
{
    "data": {
        "businessName": "FUNDACION MANOS DE LIBERTAD",
        "documentNumber": "805019139",
        "documentType": "NIT",
        "fullNit": "805019139-9",
        "idRm": "89000004106",
        "location": "CALI",
        "organizationType": "FUNDACIONES",
        "status": "ACTIVA",
        "category": "ESAL",
        "lastRenewedYear": "2024",
        "registration": "9000004106"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:21 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8ROC2"
}
```

</details>

<details>

<summary>200 - RUNEOL</summary>

```json
{
    "data": {
        "businessName": "COOPERATIVA MULTIACTIVA DEL PERSONAL QUE PRESTA EL SERVICIO EN EL SISTEMA NACIONAL PENITENCIARIO Y CARCELARIO, PERSONAL PENSIONADO AFILIADO AL FONDO DE PENSIONES PUBLICAS FOPEP, ADMINISTRADORA COLOMBIANA DE PENSIONADOS COLPENSIONES Y ENTIDADES DELO SECTOR PUBLICO Y OFICIAL, COOGUARPENAL LTDA",
        "documentNumber": "860066736",
        "documentType": "NIT",
        "recognitionNumber": "86006673600008164",
        "recognitionDate": "4/30/2024 9:17:43 AM",
        "category": "RUNEOL",
        "renewalYear": "2024",
        "chamber": "BOGOTA",
        "payrollOperator": "Si",
        "payrollAdmin": "NO"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:23 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "93VUT"
}
```

</details>

<details>

<summary>200 - ESOL</summary>

```json
{
    "data": {
        "businessName": "UNION DE COOPERATIVAS Y PRECOOPERATIVAS DE MANTENIMIENTO VIAL DE ANTIOQUIA. \"EN LIQUIDACIÓN\"",
        "documentNumber": "800208575",
        "documentType": "NIT",
        "idRm": "210000056024",
        "organizationType": "ENTIDADES DE NATURALEZA COOPERATIVA",
        "status": "ACTIVA",
        "category": "ESOL",
        "registration": "56024",
        "chamber": "MEDELLIN PARA ANTIOQUIA",
        "type": "ECONOMIA SOLIDARIA",
        "registrationCategory": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:24 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "2U25C"
}
```

</details>

<details>

<summary>200 - JUEGOS</summary>

```json
{
    "data": {
        "businessName": "UNION DE EMPRESARIO DE APUESTAS PERMANENTES DEL ATLANTICO S.A. \"UNIA\nPUESTAS S.A. EN LIQUIDACION",
        "documentNumber": "NIT 802013432",
        "documentType": "NIT",
        "idRm": "30000303543",
        "organizationType": "SOCIEDAD ANONIMA",
        "status": "ACTIVA",
        "category": "JUEGOS",
        "registration": "303543",
        "chamber": "BARRANQUILLA",
        "type": "SOCIEDAD COMERCIAL",
        "registrationCategory": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:26 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "GMS2T"
}
```

</details>

<details>

<summary>200 - EXTRANJERAS</summary>

```json
{
    "data": {
        "businessName": "SAVE THE CHILDREN INTERNATIONAL SCI",
        "documentNumber": "900537723",
        "documentType": "NIT",
        "idRm": "40090042398",
        "organizationType": "LAS DEMÁS ORGANIZACIONES CIVILES,CORPORACIONES,FUNDACIONES ",
        "status": "ACTIVA",
        "category": "EXTRANJERAS",
        "registration": "0090042398",
        "chamber": "BOGOTA",
        "type": "ENTIDAD SIN ANIMO DE LUCRO EXTRANJERAS",
        "registrationCategory": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:27 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "SNF35"
}
```

</details>

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
        "documentNumber": "824005670",
        "documentType": "NIT",
        "fullNit": "824005670-7",
        "idRup": "39000000001547",
        "location": "VALLEDUPAR",
        "status": "NORMAL",
        "category": "PROP",
        "lastRenewedYear": "20240506",
        "rupRegistrationNumber": "1547"
    },
    "signature": {
        "dateTime": "December 12, 2024 10:04 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "O9Z28"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la NIT ingresada",
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
"message": "documentType must be one of: [NIT]"
}
```

{% endtab %}
{% endtabs %}
