---
id: renew-your-token-jwt
title: Renew your token (JWT)
description: Renew your access token to extend its validity period
---

# Renew your token (JWT)

This method is responsible for renewing the access token generated using other login endpoints, which has a validity period of **30 days**. After this period, it is necessary to **generate** a new Access Token. The only parameter required for renewal is the previous access token, as long as it has not expired. This service only renews tokens that are still valid.

### Implementation

**Endpoint to query**:

`https://api.verifik.co/v2/auth/session`

#### Headers

You must provide a token that is still valid, meaning it can still be used to make queries.

```json
{
    "Authorization": "<token>"
}
```

#### Optional Query Parameters

* **origin:** Here we define what we are going to do with the token. In this case, the action will be "refresh".
* **expireIn:** Here we send a number, which can range from 1 to any number you wish. Each multiple represents a month, meaning 1: 1 month, 2: two months, 100: 100 months.

**Example of a complete request:**

`https://api.verifik.co/v2/auth/session?origin=refresh&expiresIn=120`

#### Successful response (Token successfully renewed)

```json
{
    "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
    "tokenType": "bearer"
}
```
