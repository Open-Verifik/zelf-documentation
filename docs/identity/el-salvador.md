---
id: el-salvador
title: El Salvador
description: El Salvador DUI information lookup service
---

# El Salvador

## Endpoint

```
https://api.verifik.co/v2/sv/dui
```

The El Salvador DUI Information Lookup service allows you to effortlessly retrieve personal information associated with a DUI (Unique Identity Document) by using the document number. This service provides reliable and efficient access to essential details related to an individual's identity.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="190">Name</th><th width="90">Type</th><th width="117">Required?</th><th width="207">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>Date of birth of the requested person. Valid format: DD/MM/YYYY</td><td><code>01/12/1995</code></td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
