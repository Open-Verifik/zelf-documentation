# List of Scan Prompt Templates

## Endpoint

```
https://api.verifik.co/v2/ocr/scan-prompt/templates
```

This endpoint allows you to retrieve the list of templates that we support in Verifik and also your own templates that you generated based on the needs that your company requires. The list of templates can be filtered by different queries for example `where_active=true` or if you want to search by documentType you could also do that by passing the query param `in_documentTypes[]=RUT`

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Request**

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location --request GET 'https://api.verifik.co/v2/ocr/scan-prompt/templates?page=1' \
--header 'Authorization: Bearer eyJhbGciOiJIUz...I1Kh_o'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-prompt/templates?page=1',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...1ldKk8Tt5Kh_o'
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

{% tab title="PHP" %}

```php
<?php
$client = new Client();
$headers = [
  'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5...8Tt5Kh_o'
];
$request = new Request('GET', 'https://api.verifik.co/v2/ocr/scan-prompt/templates?page=1', $headers);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();

```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {
  'Authorization': 'Bearer eyJhbGciOiJIUzI1Ni...Tt5Kh_o'
}
conn.request("GET", "/v2/ocr/scan-prompt/templates?page=1", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "docs": [
            {
                "_id": "683fbcb282fce3b4eb192a3b",
                "description": "Prompt to extract Chilean ID card details from both sides",
                "documentTypes": [
                    "RUT_FULL"
                ],
                "updatedAt": "2025-06-03T17:23:52.556Z",
                "createdAt": "2025-06-03T15:54:41.178Z",
                "__v": 1,
                "name": "Chilean ID Card Scanning (both sides)",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "documentNumber",
                    "nationality",
                    "dateOfBirth",
                    "gender",
                    "expirationDate",
                    "emissionDate",
                    "RUT",
                    "RUN",
                    "NAC",
                    "placeOfBirth",
                    "profession",
                    "barCode"
                ],
                "system": true,
                "requiresBackSide": true
            },
            {
                "_id": "67cfae19818655383fb4220f",
                "system": false,
                "documentTypes": [
                    "CCVE"
                ],
                "fields": [
                    "documentNumber (numeric only)",
                    "fullName"
                ],
                "requiresBackSide": false,
                "client": "613a3a48f2c84b454153add7",
                "name": "Prompt para Venezuelan IDs",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a {{format}} format.",
                "format": "json",
                "updatedAt": "2025-03-11T03:35:02.891Z",
                "createdAt": "2025-03-11T03:29:29.184Z",
                "__v": 1
            },
            {
                "_id": "67cfb2f2c297bd1eadf9939e",
                "deleted": false,
                "description": "Prompt to extract Argentine driver’s license details",
                "documentTypes": [
                    "DRAR"
                ],
                "updatedAt": "2025-03-10T17:23:52.556Z",
                "createdAt": "2025-03-10T15:54:41.178Z",
                "__v": 1,
                "name": "Argentine Driver License Scanning",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "documentNumber",
                    "dateOfBirth",
                    "issueDate",
                    "expirationDate",
                    "licenseType",
                    "restrictions"
                ],
                "system": true,
                "requiresBackSide": false,
                "format": "JSON"
            },
            {
                "_id": "67cfb2abc297bd1eadf9939d",
                "description": "Prompt to extract Argentine DNI details",
                "documentTypes": [
                    "DNIAR"
                ],
                "updatedAt": "2025-03-10T17:23:52.556Z",
                "createdAt": "2025-03-10T15:54:41.178Z",
                "__v": 1,
                "name": "Argentine DNI Scanning",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "documentNumber",
                    "dateOfBirth (YYYY-MM-DD)",
                    "gender",
                    "issueDate",
                    "expirationDate",
                    "nationality [Argentina,Foreigner]",
                    "placeOfBirth",
                    "maritalStatus"
                ],
                "system": true,
                "requiresBackSide": false,
                "format": "JSON"
            },
            {
                "_id": "674758c0d76845dff195a4dc",
                "deleted": false,
                "description": "FULL - Prompt para extraer licencia de transito de Colombia",
                "documentTypes": [
                    "TLCC_FULL"
                ],
                "updatedAt": "2024-11-26T17:23:52.556Z",
                "createdAt": "2024-11-26T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de licencias de transito de Colombia",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "plate",
                    "documentNumber",
                    "model",
                    "brand",
                    "line",
                    "class",
                    "color",
                    "typeOfBody",
                    "fuel",
                    "service",
                    "capacity",
                    "cylinderCapacity",
                    "engineNumber",
                    "chassisNumber",
                    "seriesNumber",
                    "owner",
                    "identification",
                    "restriction",
                    "mobility",
                    "importDeclaration",
                    "propertyLimitation",
                    "armoring",
                    "horsePower",
                    "doors",
                    "registrationDate",
                    "licenseExpiryDate",
                    "expirationDate",
                    "authority",
                    "transportOrganization"
                ],
                "system": true,
                "requiresBackSide": false
            },
            {
                "_id": "67475a5ad76845dff195a4de",
                "description": "FRONT - Prompt para extraer licencia de transito de Colombia",
                "documentTypes": [
                    "TLCC"
                ],
                "updatedAt": "2024-11-26T17:23:52.556Z",
                "createdAt": "2024-11-26T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de licencias de transito de Colombia",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "documentNumber",
                    "plate",
                    "model",
                    "brand",
                    "line",
                    "class",
                    "color",
                    "typeOfBody",
                    "fuel",
                    "service",
                    "capacity",
                    "cylinderCapacity",
                    "engineNumber",
                    "chassisNumber",
                    "seriesNumber",
                    "owner",
                    "identification"
                ],
                "system": true,
                "requiresBackSide": true
            },
            {
                "_id": "67475ad0d76845dff195a4e0",
                "description": "BACK - Prompt para extraer licencia de transito de Colombia",
                "documentTypes": [
                    "TLCC_BACK"
                ],
                "updatedAt": "2024-11-26T17:23:52.556Z",
                "createdAt": "2024-11-26T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de licencias de transito de Colombia",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "restriction",
                    "mobility",
                    "importDeclaration",
                    "propertyLimitation",
                    "armoring",
                    "horsePower",
                    "doors",
                    "registrationDate",
                    "licenseExpiryDate",
                    "expirationDate",
                    "authority",
                    "transportOrganization"
                ],
                "system": true,
                "requiresBackSide": false
            },
            {
                "requiresBackSide": false,
                "_id": "6644edf6accc18b0d4662e58",
                "system": true,
                "documentTypes": [
                    "CCVE"
                ],
                "fields": [
                    "firstName",
                    "gender (Male/Female)",
                    "age (Number)",
                    "lastName",
                    "documentNumber (numeric only)",
                    "dateOfBirth",
                    "age",
                    "expeditionDate",
                    "expirationDate",
                    "nationality (the nationality is until the end of the text)"
                ],
                "name": "CCVE",
                "format": "json",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "description": "Prompt for Venezuelan IDs",
                "updatedAt": "2024-05-14T16:41:03.834Z",
                "createdAt": "2024-04-22T15:49:21.361Z",
                "__v": 2
            },
            {
                "_id": "65fb35c668c04caf8a8464a4",
                "description": "Prompt to extract data from a Mexican Driver license",
                "documentTypes": [
                    "DRMX"
                ],
                "updatedAt": "2024-03-05T17:23:52.556Z",
                "createdAt": "2024-03-03T15:54:41.178Z",
                "__v": 1,
                "name": "Mexican Driver License",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "documentNumber",
                    "CURP",
                    "dateOfBirth",
                    "expirationDate",
                    "licenseType"
                ],
                "system": true,
                "requiresBackSide": true
            },
            {
                "requiresBackSide": false,
                "_id": "64d1329312b18c7901e3f45f",
                "description": "Prompt to extract details from Mexican INE (Instituto Nacional Electoral) cards",
                "documentTypes": [
                    "INE"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 1,
                "name": "Escaneo de tarjetas INE de México",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "documentNumber",
                    "CURP",
                    "voterKey",
                    "state",
                    "municipality",
                    "address",
                    "gender",
                    "birthDate",
                    "expirationDate"
                ],
                "system": true
            },
            {
                "requiresBackSide": false,
                "_id": "6539351927953fa62c752c80",
                "description": "Prompt to extract the new Peruvian card details",
                "documentTypes": [
                    "CUI"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 1,
                "name": "CUI Peruvian ID Card Scanning",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "secondLastName",
                    "fullName",
                    "documentNumber",
                    "nationality",
                    "dateOfBirth",
                    "placeOfBirth",
                    "dateOfIssue",
                    "gender",
                    "expirationDate",
                    "maritalStatus"
                ],
                "system": true,
                "format": "JSON"
            },
            {
                "_id": "64ce89a612b18c7901e3f453",
                "description": "Prompt para extraer cédulas de Colombia",
                "documentTypes": [
                    "CC"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 2,
                "name": "CC - Escaneo de cédulas de Colombia",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName (nombres)",
                    "lastName (apellidos)",
                    "fullName (nombres + apellidos)",
                    "documentNumber (without dots)"
                ],
                "system": true,
                "requiresBackSide": true
            },
            {
                "_id": "64d1540e12b18c7901e3f461",
                "description": "Prompt to extract Chilean ID card details",
                "documentTypes": [
                    "RUT"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 1,
                "name": "Chilean ID Card Scanning",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "documentNumber",
                    "nationality",
                    "dateOfBirth",
                    "gender",
                    "expirationDate",
                    "emissionDate",
                    "RUT",
                    "RUN"
                ],
                "system": true,
                "requiresBackSide": true
            },
            {
                "requiresBackSide": false,
                "_id": "6672231452441fee035c5472",
                "description": "Prompt para extraer cédulas de Colombia",
                "documentTypes": [
                    "CCBACK"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de cédulas de Colombia (reverso)",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "dateOfBirth",
                    "placeOfBirth",
                    "height",
                    "bloodType",
                    "gender",
                    "expeditionDate",
                    "expeditionPlace",
                    "age"
                ],
                "format": "json",
                "system": true
            },
            {
                "requiresBackSide": false,
                "_id": "66d7e53c00acb0f5c8fd0138",
                "description": "[BACK] Prompt para extraer cédulas de Colombia",
                "documentTypes": [
                    "CC_BACK"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de cédulas de Colombia",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "dateOfBirth",
                    "placeOfBirth",
                    "height",
                    "bloodType",
                    "gender",
                    "age",
                    "expeditionDate",
                    "expeditionPlace",
                    "barcodeNumber"
                ],
                "system": true
            },
            {
                "requiresBackSide": false,
                "_id": "650b0ec03105c90180f2d45e",
                "description": "Prompt to extract Peruvian ID card details",
                "documentTypes": [
                    "DNI"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 1,
                "name": "Peruvian ID Card Scanning",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "secondLastName",
                    "fullName",
                    "documentNumber",
                    "nationality",
                    "dateOfBirth",
                    "placeOfBirth",
                    "dateOfIssue",
                    "gender",
                    "expirationDate",
                    "maritalStatus"
                ],
                "system": true,
                "format": "JSON"
            },
            {
                "requiresBackSide": false,
                "_id": "66e21f3080fa960d60913d13",
                "deleted": false,
                "description": "Prompt para extraer RIF de Venezuela",
                "documentTypes": [
                    "RIFVE"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de RIF Venezuela",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "voucherID",
                    "fullName",
                    "firstName",
                    "lastName",
                    "documentNumber",
                    "address",
                    "registrationDate",
                    "lastUpdateDate",
                    "expirationDate",
                    "managingRegionalOffice",
                    "signatureID",
                    "specialConditions",
                    "footnotesOrLegalNotices",
                    "qrCodeDetails"
                ],
                "system": true
            },
            {
                "requiresBackSide": false,
                "_id": "66ea57f61baa5bb284435b46",
                "deleted": false,
                "description": "Prompt for Indian Driver license",
                "documentTypes": [
                    "DRIN"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 2,
                "name": "Scan the indian driver licenses",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "fatherName",
                    "issueDate",
                    "documentNumber",
                    "expeditionDate",
                    "driverRestrictions",
                    "bloodType"
                ],
                "system": true
            },
            {
                "_id": "64cd7b5012b18c7901e3f451",
                "deleted": false,
                "description": "Prompt para extraer licencias de conducir de Colombia",
                "documentTypes": [
                    "DRCC"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 2,
                "name": "Escaneo de licencias de conducir de Colombia",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "dateOfBirth",
                    "documentNumber",
                    "expeditionDate",
                    "driverRestrictions",
                    "bloodType"
                ],
                "system": true,
                "requiresBackSide": true
            },
            {
                "requiresBackSide": false,
                "_id": "64d12c1a12b18c7901e3f45c",
                "description": "Prompt to extract passport details from all countries",
                "documentTypes": [
                    "PA"
                ],
                "updatedAt": "2023-08-05T17:23:52.556Z",
                "createdAt": "2023-08-03T15:54:41.178Z",
                "__v": 1,
                "name": "Global Passport Scanning",
                "prompt": "From the provided image of the legal document, extract the fields {{fields}}. The text can be in another language and may contain minor distortions due to image quality. Please avoid translation, simply extract the information as provided. The output must be in a JSON format.",
                "active": true,
                "fields": [
                    "firstName",
                    "lastName",
                    "fullName",
                    "documentNumber",
                    "country",
                    "dateOfBirth",
                    "gender",
                    "expirationDate",
                    "code",
                    "placeOfBirth",
                    "issuingAuthority",
                    "issuingCountry",
                    "nationality",
                    "issueDate"
                ],
                "system": true
            }
        ],
        "total": 23,
        "limit": 20,
        "page": 1,
        "pages": 2
    }
}
```

{% endtab %}
{% endtabs %}
