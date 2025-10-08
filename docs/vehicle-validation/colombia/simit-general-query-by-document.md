---
id: vehicle-validation-colombia-simit-general-query-by-document
title: SIMIT - General query by identification document
description: Comprehensive SIMIT data by document
sidebar_label: SIMIT - General query by identification document
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SIMIT - General query by identification document

## SIMIT Consultation

<mark>`GET - https://api.verifik.co/v2/co/simit/consultar`</mark>

The Traffic Tickets and Fines Service enables users to access detailed information about traffic tickets and fines associated with a specific document number in Colombia. The response includes comprehensive details about each traffic ticket, such as the type of violation, the amount of the fine, and the current status of the ticket.

This service is ideal for managing and tracking traffic violations, helping organizations and individuals stay informed about their traffic-related obligations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| documentType | String | `True` | Document type. Valid parameters: CC, PA, CE, TI, RC, NIT. | `CC` |
| documentNumber | String | `True` | Document number to be consulted, without spaces or dots or the license plate number to be consulted. | `123456789` |

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/simit/consultar',
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

</TabItem>

<TabItem value="python" label="Python">

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/co/simit/consultar?documentType=CC&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/simit/consultar?documentType=CC&documentNumber=")!,timeoutInterval: Double.infinity)
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

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/simit/consultar?documentType=CC&documentNumber=');
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

</TabItem>
</Tabs>

### **Response**

<Tabs>
<TabItem value="200" label="200" default>

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

</TabItem>

<TabItem value="404" label="404">

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

</TabItem>

<TabItem value="409" label="409">

```json
{
"code": "MissingParameter",
"message": "missing documentType\n. missing documentNumber\n"
}
```

</TabItem>
</Tabs>
