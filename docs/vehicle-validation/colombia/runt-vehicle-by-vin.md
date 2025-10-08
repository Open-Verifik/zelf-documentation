---
id: vehicle-validation-colombia-runt-vehicle-by-vin
title: RUNT - Vehicle records by VIN
description: Vehicle information by VIN service
sidebar_label: Vehicle records by VIN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RUNT - Vehicle records by VIN

## Vehicle Information by VIN

<mark>`GET - https://api.verifik.co/v2/co/runt/vehicle-by-vin`</mark>

The Vehicle Information service allows you to retrieve detailed information about a vehicle registered in Colombia using its VIN (Vehicle Identification Number). This service provides comprehensive data including the vehicle's state, service type, class, make, model, color, and technical specifications such as weight and seating capacity. It also includes details on the vehicle's insurance policies and inspection records.

To use this service, simply provide the VIN of the vehicle as a parameter, and you will receive a JSON response with the vehicle's complete details.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="93">Name</th><th width="80">Type</th><th width="111">Required?</th><th width="259">Description</th><th>Example</th></tr></thead><tbody><tr><td>vin</td><td>String</td><td><code>True</code></td><td>Vin of the vehicle that you want to check data.</td><td><code>3MVDM2WLAML234946</code></td></tr></tbody></table>

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/runt/vehicle-by-vin',
  params: {vin: '3MVDM2WLAML234946'},
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
conn.request("GET", "/v2/co/runt/vehicle-by-vin?vin=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=');
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

</TabItem>
</Tabs>

### **Response**

<Tabs>
<TabItem value="200" label="200">

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
"message": "missing vin\n"
}
```

</TabItem>
</Tabs>
