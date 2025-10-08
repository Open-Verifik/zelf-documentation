---
id: vehicle-validation-colombia-runt-vehicle-by-plate
title: RUNT - Vehicle records by plate number
description: Complete vehicle history using owner data and plate number
sidebar_label: Vehicle records by plate number
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RUNT - Vehicle records by plate number

## Vehicle Information by Plate and Owner

<Tabs>
<TabItem value="endpoint" label="Endpoint" default>

`GET - https://api.verifik.co/v2/co/runt/vehicle-by-plate`

The Vehicle Information service allows you to retrieve detailed data about a vehicle in Colombia by providing its license plate and the document number of its owner. With this service, you can access information including the vehicle's make, model, color, and technical specifications. Additionally, it provides data on the vehicle's insurance history, including SOAT and liability policies, as well as its technical inspections and warranties.

This service is valuable for businesses and individuals seeking accurate and up-to-date vehicle information in Colombia.

</TabItem>
</Tabs>

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| documentType | String | `True` | Document type. Allowed values are: CC, CE, PA, RC, NIT. | `CC` |
| documentNumber | String | `True` | Document number of the owner of the vehicle, without spaces or periods. | `123456789` |
| plate | String | `True` | Vehicle plate to consult. | `ABC123` |

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/runt/vehicle-by-plate',
  params: {documentType: 'CC', documentNumber: '123456789', plate: 'ABC123'},
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
conn.request("GET", "/v2/co/runt/vehicle-by-plate?documentType=CC&documentNumber=&plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehicle-by-plate?documentType=CC&documentNumber=&plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-plate?documentType=CC&documentNumber=&plate=');
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
    "data": {
        "informacionGeneral": {
            "serialVersionUID": 2792365148123446000,
            "noLicenciaTransito": "10021312347",
            "tieneLTImportacion": false,
            "estadoDelVehiculo": "ACTIVO",
            "tipoServicio": "Particular",
            "claseVehiculo": "CAMIONETA",
            "marca": "MAZDA",
            "linea": "CX-30",
            "modelo": "2021",
            "color": "MACHINE GRAY",
            "noMotor": "PY402912330",
            "noChasis": "3MVDM2WLAML234946",
            "noVin": "3MVDM2WLAML234946",
            "cilidraje": "2488",
            "tipoCarroceria": "WAGON",
            "fechaMatricula": "17/10/2020",
            "tieneGravamenes": "NO",
            "organismoTransito": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA ",
            "prendas": "NO",
            "clasificacion": "AUTOMOVIL",
            "esRegrabadoMotor": "NO",
            "esRegrabadoChasis": "NO",
            "esRegrabadoSerie": "NO",
            "esRegrabadoVin": "NO",
            "clasicoAntiguo": "NO",
            "tipoCombustible": "GASOLINA",
            "tarjetaServicio": "NO",
            "mostrarSolicitudes": "SI",
            "seguridadEstado": "NO",
            "verValidaDIAN": true,
            "validacionDIAN": "Exitoso",
            "noPlaca": "ABC123",
            "repotenciado": "NO",
            "puertas": "5"
        },
        "datosTecnicos": {
            "serialVersionUID": 2792365148123428000,
            "pesoBrutoVehicular": "1939",
            "noEjes": "2",
            "pasajerosSentados": "5"
        },
        "tarjetaOperacion": {},
        "soat": [
            {
                "serialVersionUID": 2792362345681728000,
                "noPoliza": "355100023467200",
                "fechaExpedicion": "03/10/2023",
                "fechaVigencia": "17/10/2023",
                "fechaVencimiento": "16/10/2024",
                "entidadExpideSoat": "SEGUROS COMERCIALES BOLIVAR S.A",
                "estado": "VIGENTE",
                "tipoTarifa": "221"
            },
            {
                "serialVersionUID": 2792323458681728000,
                "noPoliza": "84273457",
                "fechaExpedicion": "04/11/2022",
                "fechaVigencia": "05/11/2022",
                "fechaVencimiento": "04/11/2023",
                "entidadExpideSoat": "COMPANIA MUNDIAL DE SEGUR",
                "estado": "NO VIGENTE",
                "tipoTarifa": "221"
            },
            {
                "serialVersionUID": 279236534581728000,
                "noPoliza": "355100034500100",
                "fechaExpedicion": "19/09/2021",
                "fechaVigencia": "17/10/2021",
                "fechaVencimiento": "16/10/2022",
                "entidadExpideSoat": "SEGUROS COMERCIALES BOLIVAR S.A",
                "estado": "NO VIGENTE",
                "tipoTarifa": "221"
            },
            {
                "serialVersionUID": 2792365148347528000,
                "noPoliza": "25494670",
                "fechaExpedicion": "16/10/2020",
                "fechaVigencia": "17/10/2020",
                "fechaVencimiento": "16/10/2021",
                "entidadExpideSoat": "SEGUROS GENERALES SURAMERICANA S.A.",
                "estado": "NO VIGENTE",
                "tipoTarifa": "221"
            }
        ],
        "polizasResponsabilidadCivil": [],
        "tecnoMecanica": [
            {
                "serialVersionUID": 2792365148354628000,
                "vigente": "NO APLICA"
            }
        ],
        "garantiasFavorDe": [],
        "garantiasMobiliarias": [],
        "solicitudes": [
            {
                "serialVersionUID": 279236514868346400,
                "noSolicitud": "124539870",
                "fechaSolicitud": "17/10/2020",
                "estado": "AUTORIZADA",
                "tramitesRealizados": "Tramite matricula inicial, ",
                "entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA "
            }
        ],
        "normalizacionSaneamiento": [
            {
                "deficienciaMatriculaInicial": "NO",
                "vehiculoNormalizado": "NO DISPONIBLE"
            }
        ],
        "limitacionPropiedad": [],
        "InformacionBlindaje": {
            "serialVersionUID": 2792365124321728000,
            "blindado": "NO"
        }
    },
    "signature": {
        "dateTime": "March 14, 2024 2:23 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "DWTV2"
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
"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

</TabItem>

<TabItem value="409b" label="409 - Invalid Document Type">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC]"
}
```

</TabItem>
</Tabs>
