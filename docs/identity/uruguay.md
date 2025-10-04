---
id: uruguay
title: Uruguay
description: Uruguayan citizen information validation
---

# Uruguay

## Uruguayan Citizen Information

`GET - https://api.verifik.co/v2/uy/cedula`

This Uruguay service allows you to verify the validity of a Uruguayan ID card using the document type CCUY and the provided document number along with the date of birth. In addition to validating the document, you can obtain detailed information such as the full name, first names, and last names of the person associated with the given document number.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="190">Name</th><th width="88">Type</th><th width="102">Required</th><th width="228">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be consulted.</td><td><code>123456789</code></td></tr><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Type of document to consult. Allowed parameter: CCUY.</td><td><code>CUI</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth in the following format (DD/MM/YYYY)</td><td><code>20/02/1978</code> </td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
