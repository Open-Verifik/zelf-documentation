---
id: spain-citizen
title: Spain Citizen
description: Spanish resident information for DNI or NIE
---

# Spain Citizen

## Spanish Resident Information for DNI or NIE

`GET - https://api.verifik.co/v2/es/cedula`

The Spanish resident information service you can easily verify the validity of Spanish Identity Cards (DNI/NIE) by providing the document number and the expiration date. The response includes the document type, document number, full name, first name, last name, and an array of names.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="186">Name</th><th width="89">Type</th><th width="109">Required?</th><th width="223">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Allowed parameter: DNIES, NIE.</td><td><code>DNIES</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult without spaces.</td><td><code>123456789</code></td></tr><tr><td>date</td><td>String</td><td><code>True</code></td><td>The date on which the document to be consulted expires. Valid format: DD/MM/YYYY.</td><td><code>17/07/2024</code></td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
