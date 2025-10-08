# SIMIT - General query by plate number

## General query of SIMIT by license plate

<mark style="color:green;">`GET - https://api.verifik.co/v2/co/simit/consultar/placa`</mark>

This Service allows users to obtain detailed information about traffic fines and citations associated with a specific vehicle license plate number in Colombia. The response includes comprehensive details about each citation, such as the type of infraction, the fine amount, and the current status of the citation.

This service is valuable for individuals and organizations that need to manage or review traffic violations for vehicles, offering insights into the nature and financial impact of the citations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="91">Name</th><th width="85">Type</th><th width="109">Required?</th><th width="345">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>License plate to be queried, without spaces or periods.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/co/simit/consultar/placa>',
  params: {plate: 'ABC123'},
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
conn.request("GET", "/v2/co/simit/consultar/placa?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/simit/consultar/placa?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/simit/consultar/placa?plate=');
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

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "value": {
    "value": {
      "data": {
        "multas": [
          {
            "infractor": {
              "tipoDocumento": "Cédula",
              "numeroDocumento": "123456789",
              "nombre": "C** ",
              "apellido": "B** ",
              "idTipoDocumento": 1
            },
            "valor": 344730,
            "placa": "RDL805",
            "infracciones": [
              {
                "codigoInfraccion": "C35",
                "descripcionInfraccion": "No realizar la revisión técnico-mecánica en el plazo legal establecido o cuando el vehiculo no se encuentre en adecuadas condiciones técnico-mecánicas o de emisión de gases, aun cuando porte los certificados correspondientes.",
                "valorInfraccion": 344730
              }
            ],
            "proyeccion": [],
            "comparendo": true,
            "impreso": false,
            "valorPagar": 344730,
            "porcentajeDescuentoIntereses": 0,
            "porcentajeDescuentoCapital": 0,
            "idDepartamento": 25,
            "departamento": "Cundinamarca",
            "referenciaPago": "string",
            "estadoPago": "string",
            "idResolucion": 1234567,
            "numeroResolucion": "string",
            "organismoTransito": "Ricaurte",
            "idOrganismoTransito": "25612000",
            "estadoCartera": "string",
            "idEstadoCartera": 1324546,
            "comparendosElectronicos": "string",
            "polca": "N",
            "valorIntereses": 0,
            "idTipoResolucion": 0,
            "valorDescuentoIntereses": 0,
            "valorDescuentoCapital": 0,
            "valorGestion": 0,
            "liquidacionCoactivoParam18": false,
            "liquidarIncumpApParam135": false,
            "fechaComparendo": "23/02/2016 00:00:00",
            "fechaResolucion": "12/12/2022",
            "cisa": "string",
            "numeroComparendo": "25612001000012662173",
            "nroCoactivo": "string",
            "fechaCoactivo": "string",
            "fechaHasta": "string",
            "consecutivoComparendo": "34944598",
            "estadoComparendo": "Pendiente",
            "comparendoElectronico": false,
            "poseeCurso": "N",
            "idEstadoComparendo": 1,
            "valorDescuentoProntoPago": "0",
            "fechaNotificacion": "12/12/2022",
            "renuencia": false,
            "contieneInfraccionesEmbriaguez": false,
            "contieneInfraccionesHG": false,
            "tutor": "NA"
          }
        ],
        "cursos": [
          {
            "numeroMulta": "00001234",
            "fechaCurso": "21/12/2011",
            "numeroCurso": "60462",
            "ciudadRealizacion": "Medellin",
            "centroInstruccion": "CIA AL INFRACTOR DE TRANSITO",
            "fechaReporte": "",
            "estado": "No aplicado",
            "certificado": "60462",
            "secretaria": "05001000"
          }
        ],
        "acuerdosPago": [
          {
            "idResolucion": 82908689,
            "resolucion": "324",
            "fechaResolucion": "16/02/2018",
            "idEstado": 2,
            "estado": "Acuerdo de pago",
            "valorAcuerdo": 837716,
            "valorGestion": 0,
            "pendiente": 837716,
            "totalCuotasSelect": 0,
            "totalPagar": 837716,
            "totalDescuentoCapital": 0,
            "totalAbonado": 0,
            "cuotasPendientes": [],
            "planPagos": [],
            "cantTotalCuotasPlanPago": 7,
            "liquidacionApParam16": false,
            "impreso": false,
            "seleccionado": false,
            "cantCuotasAbonadas": 7,
            "totalIntereses": 0,
            "idTipoResolucion": 8,
            "infractor": {
              "tipoDocumento": "Cédula",
              "numeroDocumento": "123456789",
              "nombre": "PE** ",
              "apellido": "SAL**** PE*** ",
              "idTipoDocumento": 1
            },
            "idOrganismoTransito": "76364000",
            "polca": "S",
            "consecutivoCartera": "48150947",
            "secretaria": "Jamundi",
            "cantCuotasPendientes": 0,
            "idDepartamento": 76,
            "departamento": "Valle del Cauca",
            "referenciaPago": null,
            "estadoPago": null,
            "descuentoCapitalCuota": false
          }
        ],
        "totalMultasPagar": 31,
        "cantMultasPagar": 0,
        "totalAcuerdosPagar": 11,
        "cantAcuerdosPagar": 0
      },
      "signature": {
        "dateTime": "August 31, 2022 4:16 PM",
        "message": "Certified by Verifik.co"
      }
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
"message": "missing plate\n"
}
```

{% endtab %}
{% endtabs %}
