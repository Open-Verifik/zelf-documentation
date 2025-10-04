---
id: florida-driver-license
title: Florida Driver License
description: Florida driver license validation service
---

# Florida Driver License Validation

## Florida Driver License Validation

`GET - https://api.verifik.co/v2/usa/florida/driver-license`

This service allows developers to validate the status, restrictions, endorsements, and designations of Florida driver licenses. By providing a valid Florida driver license number, the service response with the license status, expiration date, restrictions, endorsements, and designations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="182">Name</th><th width="84">Type</th><th width="108">Required?</th><th width="227">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>B123-456-78-910-0</code></td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
