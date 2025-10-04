# Disciplinary Records in Colombia (attorney's office)

## Create a new user

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/procuraduría/antecedentes`</mark>

The service to check disciplinary records of individuals in Colombia (attorney’s office). By providing the document type and number, you can retrieve information on the individual's name and whether they have any disciplinary records. The response includes details on sanctions, instances, crimes, and ineligibility associated with the individual's record.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="183">Name</th><th width="84">Type</th><th width="108">Required?</th><th width="245">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowable parameter: CC, PEP, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/procuraduria/antecedentes>',
  params: {documentType: 'CC', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/procuraduria/antecedentes?documentType=CC&documentNumber=');
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
    "documentNumber": "19592793",
    "citizen": "JAIMER MARABITH PEREZ PEREZ",
    "hasRecord": true,
    "isRequired": false,
    "legend": "Consulta en línea de Antecedentes Disiplinarios, La Procuraduria General de la Nacion certifica Que siendo las 9:46:41 PM horas del 2/8/2022 el Señor(a) JAIMER MARABITH PEREZ PEREZ identificado(a) con Cédula de ciudadanía Número 19592793 El ciudadano si presenta antecedentes.",
    "antecedentes": [
      {
        "sanciones": [
          {
            "Sancion": "PRISION",
            "Termino": "78 MESES",
            "Clase": "PRINCIPAL",
            "Suspendida": ""
          },
          {
            "Sancion": "INHABILIDAD PARA EL EJERCICIO DE DERECHOS Y FUNCIONES PUBLICAS",
            "Termino": "78 MESES",
            "Clase": "ACCESORIA",
            "Suspendida": ""
          }
        ],
        "instancias": [
          {
            "Nombre": "PRIMERA",
            "Autoridad": "JUZGADO 2 PENAL DEL CIRCUITO ESPECIALIZADO DE DESCONGESTION - SANTA MARTA (MAGDALENA)",
            "Fecha providencia": "30/06/2015",
            "fecha efecto Juridicos": "13/06/2016"
          }
        ],
        "delitos": [
          {
            "Descripcion del Delito": "HOMICIDIO (LEY 599 DE 2000)"
          }
        ],
        "inhabilidades": [
          {
            "Módulo": "PENAL",
            "Inhabilidad legal": "INHABILIDAD PARA DESEMPEÑAR CARGOS PÚBLICO LEY 734 ART 38 NUM 1",
            "Fecha de inicio": "13/06/2016",
            "Fecha fin": "12/06/2026"
          }
        ]
      },
      {
        "sanciones": [
          {
            "Sancion": "MULTA EN SMLV",
            "Termino": "675000 SMLV",
            "Clase": "PRINCIPAL",
            "Suspendida": ""
          },
          {
            "Sancion": "PRISION",
            "Termino": "480 MESES",
            "Clase": "PRINCIPAL",
            "Suspendida": ""
          },
          {
            "Sancion": "INHABILIDAD PARA EL EJERCICIO DE DERECHOS Y FUNCIONES PUBLICAS",
            "Termino": "240 MESES",
            "Clase": "ACCESORIA",
            "Suspendida": ""
          }
        ],
        "instancias": [
          {
            "Nombre": "PRIMERA",
            "Autoridad": "SALA DE CONOCIMIENTO DE JUSTICIA Y PAZ TRIBUNAL SUPERIOR - BARRANQUILLA (ATLANTICO)",
            "Fecha providencia": "08/04/2019",
            "fecha efecto Juridicos": "08/04/2019"
          },
          {
            "Nombre": "Eventos",
            "Autoridad": "string",
            "Fecha providencia": "string",
            "fecha efecto Juridicos": "string"
          },
          {
            "Nombre": "Nombre causa",
            "Autoridad": "Entidad",
            "Fecha providencia": "Tipo acto",
            "fecha efecto Juridicos": "Fecha acto"
          },
          {
            "Nombre": "PENA ALTERNATIVA",
            "Autoridad": "SALA DE CONOCIMIENTO DE JUSTICIA Y PAZ TRIBUNAL SUPERIOR - BARRANQUILLA (ATLANTICO)",
            "Fecha providencia": "SENTENCIA",
            "fecha efecto Juridicos": "08/04/2019"
          }
        ],
        "delitos": [
          {
            "Descripcion del Delito": "DESTRUCCION Y APROPIACION DE BIENES PROTEGIDDOS (LEY 599 DE 2000)"
          },
          {
            "Descripcion del Delito": "DESPLAZAMIENTO FORZADO (LEY 599 DE 2000)"
          },
          {
            "Descripcion del Delito": "CONCIERTO PARA DELINQUIR ART 340 LEY 599 (LEY 599 DE 2000)"
          },
          {
            "Descripcion del Delito": "HOMICIDIO EN PERSONA PROTEGIDA (LEY 599 DE 2000)"
          }
        ],
        "inhabilidades": [
          {
            "Módulo": "PENAL",
            "Inhabilidad legal": "INHABILIDAD PARA CONTRATAR CON EL ESTADO LEY 80 ART 8 LIT D",
            "Fecha de inicio": "08/04/2019",
            "Fecha fin": "07/04/2024"
          },
          {
            "Módulo": "PENAL",
            "Inhabilidad legal": "INHABILIDAD PARA DESEMPEÑAR CARGOS PÚBLICO LEY 734 ART 38 NUM 1",
            "Fecha de inicio": "08/04/2019",
            "Fecha fin": "07/04/2029"
          }
        ]
      }
    ]
  },
  "signature": {
    "dateTime": "August 2, 2022 4:46 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="200" %}

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "antecedentes": [],
    "isRequired": false,
    "legend": "Consulta en línea de Antecedentes Disiplinarios, La Procuraduria General de la Nacion certifica Que siendo las 15 horas del 31/08/2022 el Señor(a) NICOLAS HERNANDEZ TOVAR identificado(a) con Cédula de ciudadanía Número 1023942104 El ciudadano no presenta antecedentes.",
    "expeditionDate": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686",
    "expeditionPlace": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686",
    "dateOfBirth": "Esta información ha sido catalogada como semi privada y no está disponible para su entrega de forma temporal. - RNEC 2686"
  },
  "signature": {
    "dateTime": "August 31, 2022 3:53 PM",
    "message": "Certified by Verifik.co"
  }
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
"code": "Conflict",
"message": "Server_Not_Response_From_Procuraduria"
}
```

{% endtab %}
{% endtabs %}
