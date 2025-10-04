---
id: venezuela
title: Venezuela
description: Venezuelan citizen information validation
---

# Venezuelan Citizen Information

`GET - https://api.verifik.co/v2/ve/cedula`

This service allows users to verify the authenticity of a Venezuelan identity card by providing the document number.

This information can be used by companies and organizations to verify the identity of their customers, employees, or partners.

**To use this service in a graphical interface, we invite you to access our** [**client panel**](https://app.verifik.co/data/api/All/1) **at Verifik.**

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="186">Name</th><th width="99">Type</th><th width="106">Required?</th><th width="222">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>123456789</code></td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
