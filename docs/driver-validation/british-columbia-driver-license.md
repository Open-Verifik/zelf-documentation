---
id: british-columbia-driver-license
title: British Columbia Driver License
description: British Columbia driver license verification service
---

# British Columbia license

## Endpoint

```
https://api.verifik.co/v2/ca/british-columbia/driver-license 
```

The British Columbia Driver License Verification service offers a straightforward method to verify the authenticity and validity of a driver's license in the province of British Columbia, Canada. By utilizing this service, you can quickly validate a driver's license based on the provided document number and last name.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Parameters**

<table><thead><tr><th width="189">Name</th><th width="87">Type</th><th width="117">Required?</th><th width="253">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Driver's license to consult, all data must be entered exactly as found in this document.</td><td><code>1123456</code></td></tr><tr><td>lastName</td><td>String</td><td><code>True</code></td><td>Last name that appears in the Driver License.</td><td><code>HELLO</code></td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
