# Public Contracts

## Public Contracts

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/contracts`</mark>

The Public Contracts service allows users to retrieve a list of public contracts associated with a person or company by providing their document number and document type. The response includes valuable details about each contract, such as contractor information, contract values, involved entities, contract duration, and more.

This service promotes transparency and facilitates the monitoring of public contracts with the state in Colombia.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="85">Type</th><th width="112">Required?</th><th width="227">Descripction</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document Type. Allowed Parameters: CC, NIT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document Number to request</td><td><code>123456789</code></td></tr></tbody></table>

**Request**

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/contracts>',
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
conn.request("GET", "/v2/co/contracts?documentType=CC&documentNumber=63535790", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790');
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
  "value": {
    "data": {
      "contractor": [
        {
          "contractor": "123456789",
          "contractor_name": "MATEO VERIFIK",
          "count": 19
        }
      ],
      "contracts": [
        {
          "contractor_reference": "18486325807904513",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8632580>",
          "value": 1250000,
          "object": "PRESTACION DE SERVICIOS PARA EL MANTENIMIENTO PREVENTIVO PLANIFICADO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LAS DISTINTAS AREAS DE LA ESE HOSPITAL CAMILO VILLAZON PUMAREJO DE PUEBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-11-01",
          "contract_end_date": "2018-11-16"
        },
        {
          "contractor_reference": "18482197577489423",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8219757>",
          "value": 3500000,
          "object": "PRESTACION DE SERVICIOS PARA EL MANTENIMIENTO PREVENTIVO PLANIFICADO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LAS DISTINTAS AREAS DE LA ESE HOSPITAL CAMILO VILLAZON PUMAREJO DE PUEBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-07-17",
          "contract_end_date": "2018-08-16"
        },
        {
          "contractor_reference": "181275855486892482",
          "contractor_id": "63535790",
          "contractor": "SOLUCIONES BIOMEDICASDIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "890500810",
          "entity": "SANTANDER ESE HOSPITAL MENTAL RUDESINDO SOTO CUCUTA",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-12-7585548>",
          "value": 5951904,
          "object": "EL CONTRATISTA SE COMPROMETE CON LA ESE HOSPITAL MENTAL RUDESINDO SOTO A REALIZAR MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LA INSTITUCION SEGUN ALCANCE ESTIMADO EN LA PROPUESTA QUE HACE PARTE INTEGRAL DEL PRESENTE CONTRATO",
          "process_id": "12",
          "department": "NORTE DE SANTANDER",
          "contract_start_date": "2018-01-19",
          "contract_end_date": "2018-12-15"
        },
        {
          "contractor_reference": "18488007408066152",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8800740>",
          "value": 1825000,
          "object": "COMPRAVENTA DE ACCESORIOS Y DISPOSITIVOS MEDICOS PARA LA E S E HOSPITAL CAMILO VILLAZON PUAMREJO DEL MUNICIPIO DE PEUBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-12-24",
          "contract_end_date": "2018-12-29"
        },
        {
          "contractor_reference": "18483663017649982",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8366301>",
          "value": 5000000,
          "object": "PRESTACION DE SERVICIOS PARA EL MANTENIMIENTO PREVENTIVO PLANIFICADO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LAS DISTINTAS AREAS DE LA ESE HOSPITAL CAMILO VILLAZON PUMAREJO DE PUEBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-08-17",
          "contract_end_date": "2018-10-17"
        },
        {
          "contractor_reference": "171263158685745254",
          "contractor_id": "63535790",
          "contractor": "SOLUCIONES BIOMEDICASDIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "890500810",
          "entity": "SANTANDER ESE HOSPITAL MENTAL RUDESINDO SOTO CUCUTA",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=17-12-6315868>",
          "value": 4760000,
          "object": "EL CONTRATISTA SE COMPROMETE CON LA ESE HOSPITAL MENTAL RUDESINDO SOTO A REALIAR MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LA INSTITUCION SEGUN ALCANCE ESTIMADO EN LA PROPUESTA QUE HACE PARTE INTEGRAL DE LA PRESENTE ORDEN",
          "process_id": "12",
          "department": "NORTE DE SANTANDER",
          "contract_start_date": "2017-02-27",
          "contract_end_date": "2017-12-24"
        },
        {
          "contractor_reference": "2041119662910372672",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "<https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=20-4-11196629>",
          "value": 5000000,
          "object": "CONTRATO DE COMPRAVENTA DE MASCARILLAS QUIRURGICASPARA LA E S E HOSPITAL CAMILO VILLAZON PUAMREJO DELMUNICIPIO DE PEUBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2020-10-08",
          "contract_end_date": "2020-10-23"
        }
      ]
    },
    "signature": {
      "dateTime": "May 24, 2023 4:41 PM",
      "message": "Certified by Verifik.co"
    }
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
"code": "MissingParameter",
"message": "documentType must be one of: [CC,NIT]"
}
```

{% endtab %}
{% endtabs %}
