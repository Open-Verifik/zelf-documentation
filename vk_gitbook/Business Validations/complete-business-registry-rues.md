# Complete Business Registry - RUES

### Endpoint

<mark style="color:green;">`GET - https://api.verifik.co/v3/co/rues-complete`</mark>

The Business Information Service allows you to retrieve detailed information about a business registered in Colombia using its NIT (Número de Identificación Tributaria). This service provides comprehensive details including commercial registry information, legal representatives, and the economic activities associated with the business.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Body

| **Parameter**    | **Description**                                                               |
| ---------------- | ----------------------------------------------------------------------------- |
| `documentType`   | Type of document. Always set to `NIT`.                                        |
| `documentNumber` | Document number. Varies based on the selected category.                       |
| `category`       | Specifies the category. Use one of the values listed in the categories table. |

#### Categories

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

#### Example Endpoint

```
/v3/co/rues-complete?documentType=NIT&documentNumber=824005670&category=PROP
```

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=824005670&category=PROP',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOCJ9.eyJjbGll....t4Cw'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {
  'Authorization': 'Bearer eyJhbGciOiJICJ9.eyJjbGllbnRJ...lt4Cw'
}
conn.request("GET", "/v3/co/rues-complete?documentType=NIT&documentNumber=824005670&category=PROP", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=824005670&category=PROP")!,timeoutInterval: Double.infinity)
request.addValue("Bearer eyJhbGciOiJIUVCJ9.eyJjbGllbn...V0w1splt4Cw", forHTTPHeaderField: "Authorization")

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
$client = new Client();
$headers = [
  'Authorization' => 'Bearer eyJhbGciOCJ9.eyJjbGl...plt4Cw'
];
$request = new Request('GET', 'https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=824005670&category=PROP', $headers);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();

```

{% endtab %}
{% endtabs %}

### **Response**

<details>

<summary>200 - PROP</summary>

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "824005670",
            "fullNit": "824005670-7",
            "renewalDate": "2024-05-06",
            "idRup": "39000000001547",
            "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
            "chamberCommerce": "VALLEDUPAR",
            "proponentsStatusDescription": "NORMAL",
            "proponentRegistration": "000000001547",
            "registrationDate": "2021-05-20",
            "identificationNumber": "00000824005670"
        },
        "news": [
            {
                "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
                "act": "RENOVACIÓN",
                "title": "RENOVACION DEL PROPONENTE",
                "publicationDate": "2024-05-06",
                "publicationTime": "14:06",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2024-05-06",
                "registrationTime": "14:06"
            },
            {
                "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
                "act": "RENOVACIÓN",
                "title": "RENOVACION DEL PROPONENTE",
                "publicationDate": "2023-06-21",
                "publicationTime": "09:32",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2023-06-21",
                "registrationTime": "09:32"
            },
            {
                "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
                "act": "RENOVACIÓN",
                "title": "RENOVACION DEL PROPONENTE",
                "publicationDate": "2022-05-19",
                "publicationTime": "08:20",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2022-05-19",
                "registrationTime": "08:20"
            },
            {
                "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
                "act": "INSCRIPCIÓN",
                "title": "INSCRIPCION DEL PROPONENTE",
                "publicationDate": "2021-05-20",
                "publicationTime": "16:19",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2021-05-20",
                "registrationTime": "16:19"
            },
            {
                "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
                "act": "CESACIÓN DE EEFECTOS",
                "title": "CESACION DE EFECTOS DE LA INSCRIPCION",
                "publicationDate": "2020-07-08",
                "publicationTime": "15:16",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2020-07-08",
                "registrationTime": "15:16"
            },
            {
                "businessName": "DISTRIBUIDORA FARMACENTRO S.A.S.",
                "act": "INSCRIPCIÓN",
                "title": "INSCRIPCION DEL PROPONENTE",
                "publicationDate": "2019-06-27",
                "publicationTime": "08:22",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2019-06-27",
                "registrationTime": "08:22"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
                "act": "CESACIÓN DE EEFECTOS",
                "title": "CESACION DE EFECTOS DE LA INSCRIPCION",
                "publicationDate": "2018-04-07",
                "publicationTime": "12:16",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2018-04-07",
                "registrationTime": "12:17"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
                "act": "INSCRIPCIÓN",
                "title": "INSCRIPCION DEL PROPONENTE",
                "publicationDate": "2017-09-26",
                "publicationTime": "08:58",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2017-09-26",
                "registrationTime": "08:59"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
                "act": "CESACIÓN DE EEFECTOS",
                "title": "CESACION DE EFECTOS DE LA INSCRIPCION",
                "publicationDate": "2017-04-08",
                "publicationTime": "13:20",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2017-04-08",
                "registrationTime": "13:22"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
                "act": "INSCRIPCIÓN",
                "title": "INSCRIPCION DEL PROPONENTE",
                "publicationDate": "2016-10-06",
                "publicationTime": "16:56",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2016-10-06",
                "registrationTime": "16:55"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
                "act": "INSCRIPCIÓN",
                "title": "INSCRIPCION DEL PROPONENTE",
                "publicationDate": "2015-03-11",
                "publicationTime": "18:16",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2015-03-11",
                "registrationTime": "18:16"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS S.A.S.",
                "act": "INSCRIPCIÓN",
                "title": "Que se clasificó como Proveedor, y se calificó de la siguiente manera: Capacidad máxima de contratación  de             5.092,04 SMMLV como Proveedor.",
                "publicationDate": "2012-02-27",
                "publicationTime": "09:06",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2012-02-27",
                "registrationTime": "09:26"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS LTDA",
                "act": "INSCRIPCIÓN",
                "title": "Que se clasificó como Proveedor, y se calificó de la siguiente manera: Capacidad máxima de contratación  de             4.576,28 SMMLV como Proveedor.",
                "publicationDate": "2010-09-23",
                "publicationTime": "17:23",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2010-09-23",
                "registrationTime": "17:47"
            },
            {
                "businessName": "DISTRIBUIDORA FARMAPOS LTDA",
                "act": "INSCRIPCIÓN",
                "title": "Que se clasificó como Proveedor, y se calificó de la siguiente manera: Capacidad máxima de contratación  de             4.671,92 SMMLV como Proveedor.",
                "publicationDate": "2009-07-08",
                "publicationTime": "16:49",
                "chamber": "VALLEDUPAR",
                "registrationDate": "2009-07-08",
                "registrationTime": "17:05"
            }
        ],
        "finesAndSanctions": {
            "contracts": [],
            "fines": [],
            "sanctions": []
        },
        "RUPActivities": [
            {
                "codeUnspsc": "40000000",
                "descripcion": "Componentes - Equipos para Distribución - Sistemas de Acondicionamiento"
            }
        ]
    },
    "signature": {
        "dateTime": "December 12, 2024 4:55 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "HV36Z"
}
```

</details>

<details>

<summary>200 - RM</summary>

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "901140289",
            "renewalDate": "2022-05-31",
            "acronym": null,
            "idRm": "560000026379",
            "businessName": "PICO GRUP S.A.S",
            "chamberCommerce": "PIEDEMONTE ARAUCANO",
            "registrationStatus": "ACTIVA",
            "companyType": "SOCIEDADES POR ACCIONES SIMPLIFICADAS SAS",
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "SOCIEDAD COMERCIAL",
            "registrationNumber": "0000026379",
            "lastRenewedYear": "2022",
            "enrollmentCategory": "20220531",
            "enrollmentDate": "2017-12-14",
            "lastUpdatedDate": "2022-05-31",
            "commercialAddress": null,
            "companyLocation": "",
            "email": null,
            "legalRepresentatives": {
                "faculty": "REPRESENTACION LEGAL (PRINCIPALES) ****1116870475 - PICO SANTAMARIA DAVINSON ANDRESFACULTADES ****GERENTE. ACTUARA COMO REPRESENTANTE LEGAL DE LA SOCIEDAD EL GERENTE GENERAL EN EJERCICIO DEL CARGO. EL GERENTE TENDRÁ LA ADMINISTRACIÓN Y GESTIÓN DE LOS NEGOCIOS SOCIALES CON SUJECIÓN A LA LEY, LOS ESTATUTOS SOCIALES, LOS REGLAMENTOS Y RESOLUCIONES DE LA ASAMBLEA GENERAL DE ACCIONISTAS. FUNCIONES Y ATRIBUCIONES DEL GERENTE GENERAL: EL GERENTE TENDRÁ LAS FUNCIONES DE SU CARGO Y LAS SIGUIENTES: 1. REPRESENTAR LEGALMENTE A LA SOCIEDAD, JUDICIAL O EXTRAJUDICIALMENTE, ANTE LOS ASOCIADOS, ANTE TERCEROS, Y ANTE CUALQUIER CLASE DE AUTORIDADES JUDICIALES Y ADMINISTRATIVAS, PERSONAS NATURALES O JURÍDICAS ETC. 2. EJECUTAR LOS ACUERDOS Y RESOLUCIONES DE LA ASAMBLEA GENERAL DE ACCIONISTAS. 3. REALIZAR LOS ACTOS Y CELEBRAR LOS CONTRATOS QUE TIENDAN A CUMPLIR LOS FINES DE LA SOCIEDAD. EN EJERCICIO DE ESTA FACULTAD PODRÁ: ENAJENAR, ADQUIRIR, MUDAR, GRAVAR, LIMITAR EN CUALQUIER FORMA Y A CUALQUIER TÍTULO LOS BIENES MUEBLES E INMUEBLES DE LA SOCIEDAD; TRANSIGIR, COMPROMETER, ARBITRAR, DESISTIR, NOVAR, RECIBIR E INTERPONER ACCIONES Y RECURSOS DE CUALQUIER GÉNERO DE TODOS LOS NEGOCIOS O ASUNTOS DE CUALQUIER ÍNDOLE QUE TENGA PENDIENTE LA SOCIEDAD; CONTRAER OBLIGACIONES CON GARANTÍA PERSONAL, PRENDARÍA O HIPOTECARIA; DAR O RECIBIR DINERO MUTUO, HACER DEPÓSITOS BANCARIOS; FIRMAR TODA CLASE DE TÍTULOS VALORES Y NEGOCIAR ESTA CLASE INSTRUMENTOS, FIRMARLOS, ACEPTARLOS, ENDOSARLOS, NEGOCIARLOS, PAGARLOS, PROTESTARLOS, DESCARGARLOS, TENERLOS O CANCELARLOS; INTERPONER TODA CLASE DE RECURSOS, COMPARECER EN JUICIOS E QUE SE DISCUTE EL DOMINIO DE LOS BIENES SOCIALES DE CUALQUIER CLASE; FORMAR NUEVAS SOCIEDADES O ENTRAR A FORMAR PARTE DE OTROS BIENES SOCIALES DE CUALQUIER CLASE; FORMAR NUEVAS SOCIEDADES O ENTRAR A FORMAR PARTE DE OTRAS YA EXISTENTES. 4. CONSTITUIR LOS APODERADOS JUDICIALES Y EXTRAJUDICIALES QUE JUZGUE NECESARIO PARA LA ADECUADA REPRESENTACIÓN DE LA SOCIEDAD DELEGÁNDOLES LAS FACULTADES QUE ESTIME CONVENIENTES, DE AQUELLAS QUE EL MISMO GOZA. 5. PRESENTAR LOS INFORMES Y DOCUMENTOS DE QUE TRATA EL ARTÍCULO 446 DE CÓDIGO DE COMERCIO A LA ASAMBLEA GENERAL. 6. DESIGNAR, PROMOVER Y REMOVER LOS EMPLEADOS DE LA SOCIEDAD SIEMPRE Y CUANDO ELLO NO DEPENDA DE OTRO ÓRGANO SOCIAL Y SEÑALAR EL GÉNERO DE SUS LABORES, REMUNERACIONES, ETC., Y HACER LOS RETIROS DE PERSONAL. 7. CONVOCAR A LA ASAMBLEA GENERAL DE ACCIONISTAS A SUS REUNIONES DE CUALQUIER ÍNDOLE. 8. DELEGAR DETERMINADAS FUNCIONES PROPIAS DE SU CARGO DENTRO DE LOS LÍMITES SEÑALADOS EN ESTOS ESTATUTOS. 9. CUIDAR LA RECAUDACIÓN E INVERSIÓN DE LOS FONDOS DE LA EMPRESA. 10. VELAR PORQUE TODOS LOS EMPLEADOS DE LA SOCIEDAD, CUMPLAN ESTRICTAMENTE SUS DEBERES Y PONER EN CONOCIMIENTO DE LA ASAMBLEA GENERAL DE ACCIONISTAS O FALTAS GRAVES QUE OCURRAN SOBRE ESTE EN PARTICULAR. 11. TODAS LAS DEMÁS FUNCIONES NO ATRIBUIDAS A LA ASAMBLEA GENERAL ACCIONISTAS Y TODAS LAS DEMÁS QUE LE DELEGUE LA LEY. 12. CONSTITUIR UNIONES TEMPORALES Y/O CONSORCIOS PREVIA AUTORIZACIÓN DE LA ASAMBLEA GENERAL DE ACCIONISTAS.",
                "legalRepresentatives": [
                    [
                        {
                            "role": "Representante Legal",
                            "name": "Davinson Andres Pico Santamaria",
                            "documentType": "CC",
                            "documentNumber": "1116870475"
                        }
                    ]
                ]
            }
        },
        "economicActivities": [
            {
                "name": "ciiu_act_econ_pri",
                "code": "4530",
                "description": "Comercio de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores"
            },
            {
                "name": "ciiu_act_econ_sec",
                "code": "4732",
                "description": "Comercio al por menor de lubricantes (aceites, grasas), aditivos y productos de limpieza para vehículos automotores"
            },
            {
                "name": "ciiu3",
                "code": "4520",
                "description": "Mantenimiento y reparación de vehículos automotores"
            },
            {
                "name": "ciiu4",
                "code": "",
                "description": ""
            }
        ],
        "establishmentOwner": [
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": " ",
                "businessName": "CREDILLANTAS P G 2",
                "abbreviation": "",
                "chamberCode": "48",
                "chamberDescription": "ARAUCA",
                "registration": "0000031696",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2018-03-15",
                "renewalDate": "2018-03-15",
                "lastYearRenewed": 2018
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": " ",
                "businessName": "CREDILLANTAS P.G.1",
                "abbreviation": "",
                "chamberCode": "56",
                "chamberDescription": "PIEDEMONTE ARAUCANO",
                "registration": "0000026685",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "01",
                "registrationStatusDescription": "ACTIVA",
                "registrationDate": "2018-02-12",
                "renewalDate": "2022-05-31",
                "lastYearRenewed": 2022
            }
        ]
    },
    "signature": {
        "dateTime": "December 12, 2024 5:56 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "84CRV"
}
```

</details>

<details>

<summary>200 - RNT</summary>

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "890700148",
            "idRnt": "164040",
            "businessName": "PARQUE RECREATIVO Y CULTURAL CAIKÉ",
            "chamberCommerce": "CAMARA DE COMERCIO DE IBAGUE",
            "lastRenewedYear": "2024",
            "commercialAddress": null,
            "email": null,
            "registrationDate": "2023-04-17",
            "rntType": "ESTABLECIMIENTO",
            "status": "ACTIVO",
            "municipality": null,
            "department": null,
            "landlinePhone": null,
            "mobilePhone": null,
            "notificationMunicipality": null,
            "notificationDepartment": null,
            "notificationAddress": null,
            "notificationPhone": null,
            "employees": null,
            "providerLegalName": null,
            "verificationDigit": null,
            "legalRepresentativeName": null,
            "legalRepresentativeIdNumber": null,
            "providerPhone": null,
            "providerEmail": null,
            "rntTypeId": null
        }
    },
    "signature": {
        "dateTime": "December 12, 2024 6:06 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "YZ8K6"
}
```

</details>

<details>

<summary>200 - ESAL</summary>

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "805019139",
            "renewalDate": "2024-03-23",
            "acronym": null,
            "idRm": "89000004106",
            "businessName": "FUNDACION MANOS DE LIBERTAD",
            "chamberCommerce": "CALI",
            "registrationStatus": "ACTIVA",
            "companyType": "FUNDACIONES",
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "ENTIDAD SIN ANIMO DE LUCRO",
            "registrationNumber": "9000004106",
            "lastRenewedYear": "2024",
            "enrollmentDate": "2001-02-09",
            "lastUpdatedDate": "2024-09-14",
            "commercialAddress": null,
            "companyLocation": "",
            "email": null,
            "legalRepresentatives": {
                "faculty": "Por documento privado No. --------------- del 06 de febrero de 2001, inscritoen esta Cámara de Comercio el 12 de febrero de 2001 con el No. 211 del LibroI, se designó a: CARGO NOMBREIDENTIFICACIÓN REPRESENTANTE ELENA PEREZ DELGADO C.C.36110054 LEGAL- PRESIDENTE",
                "legalRepresentatives": [
                    [
                        {
                            "role": "Representante Legal",
                            "name": "Elena Perez Delgado",
                            "documentType": "CC",
                            "documentNumber": "36110054"
                        }
                    ]
                ]
            }
        },
        "economicActivities": [
            {
                "name": "ciiu_act_econ_pri",
                "code": "9499",
                "description": "Actividades de otras asociaciones n.c.p."
            },
            {
                "name": "ciiu_act_econ_sec",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu3",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu4",
                "code": "",
                "description": ""
            }
        ],
        "establishmentOwner": []
    },
    "signature": {
        "dateTime": "December 12, 2024 6:14 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "GNYZC"
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
        "dateTime": "December 12, 2024 6:16 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "53DNA"
}
```

</details>

<details>

<summary>200 - ESOL</summary>

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "800208575",
            "renewalDate": "2016-04-15",
            "acronym": null,
            "idRm": "210000056024",
            "businessName": "UNION DE COOPERATIVAS Y PRECOOPERATIVAS DE MANTENIMIENTO VIAL DE ANTIOQUIA. \"EN LIQUIDACIÓN\"",
            "companyType": "ENTIDADES DE NATURALEZA COOPERATIVA",
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "ECONOMIA SOLIDARIA",
            "registrationNumber": "0000056024",
            "lastRenewedYear": "2016",
            "enrollmentDate": "1997-01-29",
            "lastUpdatedDate": "2021-04-23",
            "commercialAddress": null,
            "companyLocation": "",
            "email": null,
            "legalRepresentatives": {
                "faculty": "CERTIFICA REPRESENTACION LEGAL: Que la representación legal está a cargo de unDirector Ejecutivo. CERTIFICA REPRESENTANTE LEGALCARGO NOMBRE IDENTIFICACIONREPRESENTANTE LEGAL MONICA MARIA BETANCUR JARAMILLO 43.796.850 DESIGNACION Por acta número 143 del 23 de febrero de 2004, de la consejo deadministracion registrada en esta Cámara el 11 de marzo de 2004, en ellibro 1, bajo el número 640. CERTIFICA FUNCIONES DEL DIRECTOR EJECUTIVO.Ejercerá las siguientes funciones:a. Ejecutar los programas de acción de PRECOOUNION, siguiendo lasorientaciones de la Asamblea y el Consejo de Dirección.b. Dirigir la administración de la organización.c. Servir de órgano de comunicación entre los asociados y terceros.d. Celebrar contratos hasta por el monto del capital suscrito yrealizar operaciones propias del giro de la entidad.e. Responder por el estado diario de caja y por la seguridad de losbienes y valores de la oraganización.f. Realizar inversiones y cubrir gastos hasta por el monto acordado porel Consejo de Dirección.g. Proponer, desarrollar y supervisar políticas y estratejias a nivelejecutivo.h. Nombrar y remover el personal administrativo a su cargoi. Desempeñar las demás funciones propias de su cargo y las queexpresamente le delegue el Consejo de Administración.",
                "legalRepresentatives": [
                    [
                        {
                            "role": "Representante Legal",
                            "name": "Monica Maria Betancur Jaramillo",
                            "documentType": "CC",
                            "documentNumber": "43.796.850"
                        }
                    ]
                ]
            }
        },
        "economicActivities": [
            {
                "name": "ciiu_act_econ_pri",
                "code": "9499",
                "description": "Actividades de otras asociaciones n.c.p."
            },
            {
                "name": "ciiu_act_econ_sec",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu3",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu4",
                "code": "",
                "description": ""
            }
        ],
        "establishmentOwner": []
    },
    "signature": {
        "dateTime": "December 12, 2024 8:00 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "7WA1T"
}
```

</details>

<details>

<summary>200 - JUEGOS</summary>

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "802013432",
            "renewalDate": "2016-06-16",
            "acronym": null,
            "idRm": "30000303543",
            "businessName": "UNION DE EMPRESARIO DE APUESTAS PERMANENTES DEL ATLANTICO S.A. \"UNIA\nPUESTAS S.A. EN LIQUIDACION",
            "companyType": "SOCIEDAD ANONIMA",
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "SOCIEDAD COMERCIAL",
            "registrationNumber": "0000303543",
            "lastRenewedYear": "2016",
            "enrollmentDate": "2000-12-05",
            "lastUpdatedDate": "2023-05-09",
            "commercialAddress": null,
            "companyLocation": "",
            "email": null,
            "legalRepresentatives": {
                "faculty": "Cargo/Nombre IdentificaciónDepositario Provisional Noriega Montealegre Carla Andrea CC. 55066517ADMINISTRACION: La sociedad tendra para su direccion, administracio n y representacion los siguientes organos: Asamblea General de Soci os; Junta Directiva, y Gerencia. Son funciones de la Asamblea Gener al, entre otras: Autorizar la constitucion de sociedades filiales o subsidiarias para el desarrollo de actividades o negocios comprend idos dentro del objeto social, autorizando los aportes en dinero, b ienes o servicios; asi como proponer la liquidacion de tales socied ades y disponer la enajenacion de las cuotas sociales, derechos o a cciones en ellas. La Junta Directiva como organo de administracion de la sociedad, tendra atribuciones para ordenar que se ejecuten o celebren los actos o contratos comprendidos dentro del objeto socia l y podra adoptar las determinaciones necesarias para el cumplimien to del objeto social, teniendo en especial las siguientes funciones , entre otras: Disponer sobre la apertura o cierre de Sucursales o agencias, dentro o fuera del domicilio social; autorizar previament e las operaciones, compras y contratos cuando la cuantia de estos s ea o exceda los cien (100) salarios minimos legales mensuales vigen tes, y en todo caso cuando tengan por objeto adquirir, hipotecar o gravar en cualquier forma el dominio de los bienes raices y en gene ral la autorizacion de contratos cuya cuantia sea o exceda el limit e anterior mente anotado; autorizar, por via general, liberalidades , beneficios o prestaciones de caracter extralegal en favor del per sonal de la sociedad; autorizar al Gerente y a los miembros de la J unta, para enajenar o adquirir acciones de la compania; autorizar a l Gerente para que solicite que se admita a la compania la celebrac ion del concordato preventivo con sus acreedores. La Junta Directiv a podra delegar en el Gerente de la sociedad, cuando lo juzgue opor tuno, para casos especiales y pro-tempore, alguna o algunas de las funciones enumeradas en el articulo precedente,siempre que por su n aturaleza sean delegables y no se encuentre prohibida su delegacion . La administracion inmediata de la sociedad, su representacion leg al y la gestion de los negocios sociales estara a cargo de un Geren te. En caso de ausencia temporal del Gerente, este sera reemplazado por el Presidente de la Junta Directiva y a falta de este por los miembros principales de la Junta segun el orden de su designacion, y a falta de estos, por sus respectivos suplentes, en igual orden. El Gerente es un mandatario con representacion, investido de funcio nes ejecutivas y administrativas y como tal tiene a su cargo la rep resentacion legal de la sociedad,la gestion comerciual y financiera de los negocios sociales, la responsabilidad de la accion administ rativa, la coordinacion y la supervision general de la empresa. Com o representante legal de la sociedad, el Gerente tiene facultades p ara ejecutar y celebrar, sin otras limitaciones que las stablecidas en los estatutos y la ley, todos los actos o contratos comprendido s dentro del objeto social o que tengan caracter simplemente prepar atorio, accesorio o complementario, y los que se relacionen directa mente con la existencia y el funcionamiento de la misma. El Gerente queda investido de poderes especiales para transigir, arbitrar y c omprometer los negocios sociales, promover o coadyuvar acciones jud iciales, administrativas o contencioso-administrativas en que la co mpania tenga interes e interponer los recursos que sean procedentes conforme a la ley; desistir de acciones judiciales o recursos que interponga, novar obligaciones y creditos; dar o recibir bienes en pago, constituir apoderados judiciales, delegarles facultades, revo car mandatos y sustituciones. El Gerente no podra otorgar o suscrib ir titulos valores de contenido crediticio en nombre de la sociedad cuando falte la correspondiente contraprestacion cambiaria a favor de ella,a menos que sea expresamente autorizado por la Junta Direc tiva, y a condicion de que la sociedad derive provecho de la operac ion.",
                "legalRepresentatives": [
                    [
                        {
                            "role": "Representante Legal",
                            "name": "Noriega Montealegre Carla Andrea",
                            "documentType": "CC",
                            "documentNumber": "55066517"
                        }
                    ]
                ]
            }
        },
        "economicActivities": [
            {
                "name": "ciiu_act_econ_pri",
                "code": "6810",
                "description": "Actividades inmobiliarias realizadas con bienes propios o arrendados"
            },
            {
                "name": "ciiu_act_econ_sec",
                "code": "9200",
                "description": "Actividades de juegos de azar y apuestas"
            },
            {
                "name": "ciiu3",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu4",
                "code": "",
                "description": ""
            }
        ],
        "establishmentOwner": [
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "CENTRO PAGO DE PREMIOS",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000313204",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "01",
                "registrationStatusDescription": "ACTIVA",
                "registrationDate": "2001-06-15",
                "renewalDate": "2016-06-16",
                "lastYearRenewed": 2016
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A.",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000303544",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "01",
                "registrationStatusDescription": "ACTIVA",
                "registrationDate": "2000-12-05",
                "renewalDate": "2016-06-16",
                "lastYearRenewed": 2016
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. BARANOA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472175",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. CAMPO DE LA CRUZ",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472167",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. CANDELARIA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472173",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. GALAPA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472171",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. JUAN DE ACOSTA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472184",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. MALAMBO",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472174",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. MANATI",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472226",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. PALMAR DE VARELA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472166",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. POLONUEVO",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472182",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. PONEDERA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472168",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. PUERTO COLOMBIA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472177",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. REPELON",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472170",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SABANAGRANDE",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472179",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SABANALARGA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472169",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SANTA LUCIA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472172",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SANTO TOMAS",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472180",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SOLEDAD 2000",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472183",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SOLEDAD PLAZA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472181",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. SUAN",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472176",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. TUBARA",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472185",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A. USIACURI",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472178",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            },
            {
                "codeClassIdentification": "06",
                "numberIdentification": "00000000000000",
                "digitVerification": "0",
                "businessName": "UNIAPUESTAS S.A.LURUACO",
                "abbreviation": "                                                                                                    ",
                "chamberCode": "03",
                "chamberDescription": "BARRANQUILLA",
                "registration": "0000472165",
                "companyTypeCode": "02",
                "companyTypeDescription": "SOCIEDAD COMERCIAL",
                "legalOrganizationCode": "02",
                "legalOrganizationDescription": "ESTABLECIMIENTOS DE COMERCIO",
                "registrationCategoryCode": "04",
                "registrationCategory": "ESTABLECIMIENTO DE COMERCIO",
                "registrationStatusCode": "03",
                "registrationStatusDescription": "CANCELADA",
                "registrationDate": "2009-01-20",
                "renewalDate": "2013-03-27",
                "lastYearRenewed": 2013
            }
        ]
    },
    "signature": {
        "dateTime": "December 12, 2024 9:27 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "J1QTN"
}
```

</details>

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "800208575",
            "renewalDate": "2016-04-15",
            "acronym": null,
            "idRm": "210000056024",
            "businessName": "UNION DE COOPERATIVAS Y PRECOOPERATIVAS DE MANTENIMIENTO VIAL DE ANTIOQUIA. \"EN LIQUIDACIÓN\"",
            "companyType": "ENTIDADES DE NATURALEZA COOPERATIVA",
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "ECONOMIA SOLIDARIA",
            "registrationNumber": "0000056024",
            "lastRenewedYear": "2016",
            "enrollmentDate": "1997-01-29",
            "lastUpdatedDate": "2021-04-23",
            "commercialAddress": null,
            "companyLocation": "",
            "email": null,
            "legalRepresentatives": {
                "faculty": "CERTIFICA REPRESENTACION LEGAL: Que la representación legal está a cargo de unDirector Ejecutivo. CERTIFICA REPRESENTANTE LEGALCARGO NOMBRE IDENTIFICACIONREPRESENTANTE LEGAL MONICA MARIA BETANCUR JARAMILLO 43.796.850 DESIGNACION Por acta número 143 del 23 de febrero de 2004, de la consejo deadministracion registrada en esta Cámara el 11 de marzo de 2004, en ellibro 1, bajo el número 640. CERTIFICA FUNCIONES DEL DIRECTOR EJECUTIVO.Ejercerá las siguientes funciones:a. Ejecutar los programas de acción de PRECOOUNION, siguiendo lasorientaciones de la Asamblea y el Consejo de Dirección.b. Dirigir la administración de la organización.c. Servir de órgano de comunicación entre los asociados y terceros.d. Celebrar contratos hasta por el monto del capital suscrito yrealizar operaciones propias del giro de la entidad.e. Responder por el estado diario de caja y por la seguridad de losbienes y valores de la oraganización.f. Realizar inversiones y cubrir gastos hasta por el monto acordado porel Consejo de Dirección.g. Proponer, desarrollar y supervisar políticas y estratejias a nivelejecutivo.h. Nombrar y remover el personal administrativo a su cargoi. Desempeñar las demás funciones propias de su cargo y las queexpresamente le delegue el Consejo de Administración.",
                "legalRepresentatives": [
                    [
                        {
                            "role": "Representante Legal",
                            "name": "Monica Maria Betancur Jaramillo",
                            "documentType": "CC",
                            "documentNumber": "43.796.850"
                        }
                    ]
                ]
            }
        },
        "economicActivities": [
            {
                "name": "ciiu_act_econ_pri",
                "code": "9499",
                "description": "Actividades de otras asociaciones n.c.p."
            },
            {
                "name": "ciiu_act_econ_sec",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu3",
                "code": "",
                "description": ""
            },
            {
                "name": "ciiu4",
                "code": "",
                "description": ""
            }
        ],
        "establishmentOwner": []
    },
    "signature": {
        "dateTime": "December 12, 2024 8:00 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "7WA1T"
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
