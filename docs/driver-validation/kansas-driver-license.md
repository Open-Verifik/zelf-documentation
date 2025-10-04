---
id: kansas-driver-license
title: Kansas Driver License
description: Kansas driver license verification service
---

# Kansas Driver's License Verification

## Create a new user

`GET - https://api.verifik.co/v2/usa/kansas/driver-license`

The Kansas Driver License Validation Service allows developers to programmatically validate the status, restrictions, endorsements, and designations of Kansas driver licenses. By providing a valid Kansas driver license number, users can obtain a response that includes details such as the license status, expiration date, any restrictions or endorsements, and designations associated with the license.

This service is essential for verifying driver credentials and ensuring compliance with state regulations.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="188">Name</th><th width="90">Type</th><th width="112">Required?</th><th width="229">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to be queried.</td><td><code>K12345678</code></td></tr><tr><td>dateOfBirth</td><td>String</td><td><code>True</code></td><td>The birthdate of the license holder (format: DD/MM/YYYY).</td><td><code>29/1/1974</code></td></tr><tr><td>firstName</td><td>String</td><td><code>True</code></td><td>Name of the license holder.</td><td><code>MATEO</code></td></tr><tr><td>lastName</td><td>String</td><td><code>True</code></td><td>Last name of the license holder.</td><td><code>VERIFIK</code></td></tr></tbody></table>

For complete API documentation and examples, please contact Verifik support.
