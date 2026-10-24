---
title: Coupons
description: Percent-off coupons for Zelf ID Premium and Unlimited plans. Quote, grant, and super-admin create, list, and deactivate.
keywords: [zelf id coupon, premium coupon, unlimited coupon, percent off, plan pricing, my-plan, upgrade plan]
image: /img/social-card.png
sidebar_label: Coupons
---

# Coupons

A coupon takes a percent off a paid Zelf ID plan. It applies to **premium**, **unlimited**, or both. The list price is the license plan price for that name and duration (`tags.payment.pricingTable`, via `domainConfig.getPrice`). See [The License Object](/docs/api/licenses/license-object). A coupon does not add another price list.

Account plans for passwords and 2FA are a separate price list. This page covers Zelf ID name plans only.

Quote with [Payment Options](/docs/api/zelf-ids/payment-options). A **100%** coupon grants the plan on the same free-checkout path as a `$0` quote. A **partial** coupon charges the discounted amount on the normal Stripe or crypto checkout.

## Coupon

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Server id. |
| `code` | string | Unique. Compared case-insensitively, stored uppercase. `save100` and `SAVE100` are one coupon. |
| `percentOff` | number | Integer from 1 to 100. |
| `plans` | string[] | `premium`, `unlimited`, or both. |
| `durations` | string[] | Optional. `1y`, `2y`, `3y`, `lifetime`. Omit to allow every quote duration (`"1"` … `"5"` and `"lifetime"`). |
| `maxRedemptions` | number | Cap on successful redemptions. |
| `perZelfIdLimit` | number | Successful redemptions per Zelf ID. Default `1`. |
| `expiresAt` | string | Optional ISO-8601 time. Omit for no time limit. |
| `active` | boolean | `false` after deactivate. New coupons start `true`. |
| `createdBy` | string | Super-admin who created it. Set by the server. |
| `redemptions` | array | `{ zelfId, plan, duration, redeemedAt }` for each grant. |

| `durations` entry | Quote `duration` |
|-------------------|------------------|
| `1y` | `"1"` |
| `2y` | `"2"` |
| `3y` | `"3"` |
| `lifetime` | `"lifetime"` |

The redemption log stores that same duration token (`1y`, `2y`, `3y`, `lifetime`, and `4y` or `5y` when the coupon leaves duration open).

## Quote

```
GET https://v4.zelf.world/api/zelf-ids/payment-options
```

### Authentication

Requires a JWT from `POST /api/sessions`.

### Parameters

Same query as [Payment Options](/docs/api/zelf-ids/payment-options), plus:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `coupon` | string | No | Coupon code. Case-insensitive. |

The API checks, in this order: the code exists, `active` is true, `expiresAt` is still in the future, redemptions are under `maxRedemptions`, `plan` is allowed, `duration` is allowed, and this Zelf ID is under `perZelfIdLimit`.

A failed check still returns the quote. `amountDue` stays the license price, and `coupon.reason` says why. A failed check does not write a redemption.

`amountDue = listPrice × (100 − percentOff) / 100`. The figures below use the example license row for a 6–15 character name, one year, **$24**. Each TLD sets its own table.

## Checkout

### 100% (`amountDue` is 0)

Confirm the signed quote with [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation). Send `tagName`, `domain`, and `token`. Omit `network`.

The API grants the plan on the free-checkout path. It does not call Stripe, RevenueCat, or crypto, and it does not issue a pay address. The lease payment method is `coupon`, with `couponId` set to this coupon’s `id`. The redemption is inserted in the same transaction as the grant, so concurrent confirms cannot pass `maxRedemptions`.

The grant uses the same purchase rules as a paid checkout:

- Upgrade order is `free` → `premium` → `unlimited`.
- A lower plan is rejected while a paid lease is still active (`downgrade_not_allowed`). Renewing the same plan follows the normal duration rules.
- Names of **1–5** characters are **unlimited** only (`plan_not_allowed_for_name` for premium).
- Names of **6–27** characters can be premium or unlimited.
- Duration must be one the quote accepts and one this coupon allows.

A rejected grant does not write a redemption. Create and redeem each write an audit log entry.

### Partial (`percentOff` under 100)

Stripe and crypto charge `amountDue`. Crypto quotes in `prices` and the `signedDataPrice` JWT use that discounted USD amount. Confirm crypto with payment confirmation and `network`, as usual. The redemption is written when that checkout grants the plan.

## Upgrading a plan

```
GET https://v4.zelf.world/api/zelf-ids/my-plan?zelfName=myname.zelf
```

The caller must be the verified owner. On the session, `verifiedTagName` must equal the normalized `zelfName`, and the request must fall inside `verifiedUntil`. A missing session is `401`. A session that fails that match is `403`.

```json
{
  "zelfName": "myname.zelf",
  "plan": "premium",
  "duration": "1y",
  "expiresAt": "2027-10-24T18:00:00.000Z",
  "paymentMethod": "coupon",
  "nextPlans": ["unlimited"],
  "upgrade": {
    "action": "checkout",
    "url": "https://zelf.world/pricing?tagname=myname&domain=zelf&duration=1&plan=unlimited"
  }
}
```

`plan` is `free`, `premium`, or `unlimited`. `paymentMethod` is `free`, `stripe`, `stripe_subscription`, `crypto`, `coupon`, `revenuecat`, or `whitelist`. A `$0` license whitelist checkout stores `paymentMethod` `whitelist`. `nextPlans` lists what this name can still buy. `upgrade.url` is present only when the action has a link.

Zelf ID Stripe checkout is a one-off payment today. `stripe_portal` applies only when the lease stores `paymentMethod` `stripe_subscription`. Upgrade links use `https://zelf.world` unless `LANDING_URL` overrides that host.

| Current payment | `upgrade.action` | Where the owner goes |
|-----------------|------------------|----------------------|
| `stripe_subscription` on the lease | `stripe_portal` | Stripe customer portal session URL |
| One-off `stripe`, `crypto`, `coupon`, `free`, or `whitelist` | `checkout` | `https://zelf.world/pricing?tagname=<tag>&domain=<domain>&duration=1&plan=<plan>` (Stripe or crypto) |
| `revenuecat` | `mobile_store` | The Zelf mobile app |
| Unlimited `lifetime` | `none` | No upgrade. `nextPlans` is empty. |

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/my-plan?zelfName=myname.zelf" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Origin: https://yourdomain.com"
```

## Admin

Create, list, and deactivate require a **super-admin** session JWT. Any other session receives `403`.

```
POST https://v4.zelf.world/api/zelf-ids/coupons
GET  https://v4.zelf.world/api/zelf-ids/coupons
POST https://v4.zelf.world/api/zelf-ids/coupons/:id/deactivate
```

Deactivate sets `active` to `false` and keeps the redemption log. The code stays reserved.

## Error codes

Quote rejections are HTTP **200**. `coupon.reason` is one of:

| `reason` | Meaning |
|----------|---------|
| `not_found` | No coupon for that code. |
| `inactive` | `active` is false. |
| `expired` | `expiresAt` has passed. |
| `max_redemptions` | Successful redemptions have reached `maxRedemptions`. |
| `plan_not_allowed` | `plan` is not on this coupon. |
| `duration_not_allowed` | `duration` is not on this coupon. |
| `zelf_id_limit` | This Zelf ID has reached `perZelfIdLimit`. |

| HTTP | `code` | When |
|------|--------|------|
| 401 | — | Missing session JWT. Body is `{ "error": "Protected resource, use Authorization header to get access" }`. |
| 403 | `super_admin_required` | Admin route, caller is not a super-admin. |
| 409 | `coupon_code_taken` | Create, code already exists. |
| 409 | `coupon_invalid` | Grant-time recheck failed. `code` is the quote `reason` above. |
| 409 | `downgrade_not_allowed` | Paid lease is active and the requested plan is lower. |
| 409 | `plan_not_allowed_for_name` | Premium on a name of 5 characters or fewer. |
| 409 | — | Body validation. `validationError` text, same shape as other Zelf ID routes. |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="quote-partial" label="200 Quote - Partial" default>

`GET /api/zelf-ids/payment-options?tagName=myname&domain=zelf&duration=1&plan=premium&coupon=save25`

```json
{
  "data": {
    "tagName": "myname.zelf",
    "duration": 1,
    "plan": "premium",
    "listPrice": 24,
    "percentOff": 25,
    "amountDue": 18,
    "currency": "USD",
    "coupon": { "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7", "code": "SAVE25", "valid": true },
    "prices": {
      "ETH": { "amountToSend": 0.00609, "price": 18, "ratePriceInUSD": 2950.12 }
    },
    "signedDataPrice": "[JWT]"
  }
}
```

</TabItem>
<TabItem value="quote-rejected" label="200 Quote - Rejected">

```json
{
  "data": {
    "tagName": "myname.zelf",
    "duration": 1,
    "plan": "premium",
    "listPrice": 24,
    "percentOff": 0,
    "amountDue": 24,
    "currency": "USD",
    "coupon": { "code": "SAVE25", "valid": false, "reason": "expired" }
  }
}
```

</TabItem>
<TabItem value="grant" label="200 Grant - 100%">

`POST /api/zelf-ids/payment-confirmation` with the 100% quote token and no `network`.

```json
{
  "data": {
    "confirmed": true,
    "paymentMethod": "coupon",
    "couponId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    "amountReceived": 0,
    "tagObject": {
      "publicData": {
        "type": "mainnet",
        "origin": "online",
        "v": "4",
        "plan": "premium",
        "expiresAt": "2027-10-24 18:00:00"
      }
    }
  }
}
```

The lease record stores `payment.method` `"coupon"` and `payment.couponId`.

</TabItem>
<TabItem value="create" label="201 Created">

```json
{
  "data": {
    "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    "code": "SAVE100",
    "percentOff": 100,
    "plans": ["premium", "unlimited"],
    "durations": ["1y", "lifetime"],
    "maxRedemptions": 50,
    "perZelfIdLimit": 1,
    "expiresAt": "2026-12-31T23:59:59.000Z",
    "active": true,
    "createdBy": "admin@zelf.world",
    "redemptions": []
  }
}
```

</TabItem>
<TabItem value="errors" label="Errors">

```json
{ "error": "Protected resource, use Authorization header to get access" }
```

```json
{ "error": "Super-admin access required", "code": "super_admin_required" }
```

```json
{ "message": "coupon_code_taken", "code": "coupon_code_taken" }
```

```json
{ "validationError": "\"percentOff\" must be between 1 and 100" }
```

```json
{ "message": "downgrade_not_allowed", "code": "downgrade_not_allowed" }
```

```json
{ "message": "coupon_invalid", "code": "max_redemptions" }
```

</TabItem>
</Tabs>

## Examples

### Quote

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/payment-options?tagName=myname&domain=zelf&duration=1&plan=premium&coupon=SAVE25" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.get('https://v4.zelf.world/api/zelf-ids/payment-options', {
  params: { tagName: 'myname', domain: 'zelf', duration: '1', plan: 'premium', coupon: 'SAVE25' },
  headers: { Authorization: `Bearer ${token}`, Origin: 'https://yourdomain.com' }
});

console.log(response.data.data.amountDue, response.data.data.coupon);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.get(
    "https://v4.zelf.world/api/zelf-ids/payment-options",
    params={"tagName": "myname", "domain": "zelf", "duration": "1", "plan": "premium", "coupon": "SAVE25"},
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"},
)
quote = response.json()["data"]
print(quote["amountDue"], quote["coupon"])
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$ch = curl_init('https://v4.zelf.world/api/zelf-ids/payment-options?tagName=myname&domain=zelf&duration=1&plan=premium&coupon=SAVE25');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $token,
        'Origin: https://yourdomain.com',
    ],
]);
$quote = json_decode(curl_exec($ch), true)['data'];
echo $quote['amountDue'];
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let response = client
        .get("https://v4.zelf.world/api/zelf-ids/payment-options")
        .query(&[
            ("tagName", "myname"),
            ("domain", "zelf"),
            ("duration", "1"),
            ("plan", "premium"),
            ("coupon", "SAVE25"),
        ])
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    let body: Value = response.json().await?;
    println!("{}", body["data"]["amountDue"]);
    Ok(())
}
```

</TabItem>
</Tabs>

### Grant a 100% coupon

<Tabs>
<TabItem value="curl-grant" label="cURL" default>

```bash
curl -X POST "https://v4.zelf.world/api/zelf-ids/payment-confirmation" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "token": "SIGNED_DATA_PRICE_JWT"
  }'
```

</TabItem>
<TabItem value="nodejs-grant" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post(
  'https://v4.zelf.world/api/zelf-ids/payment-confirmation',
  { tagName: 'myname', domain: 'zelf', token: signedDataPrice },
  { headers: { Authorization: `Bearer ${token}`, Origin: 'https://yourdomain.com' } }
);

console.log(response.data.data.paymentMethod, response.data.data.couponId);
```

</TabItem>
<TabItem value="python-grant" label="Python">

```python
import requests

response = requests.post(
    "https://v4.zelf.world/api/zelf-ids/payment-confirmation",
    json={"tagName": "myname", "domain": "zelf", "token": signed_data_price},
    headers={"Authorization": f"Bearer {token}", "Origin": "https://yourdomain.com"},
)
print(response.json()["data"]["paymentMethod"])
```

</TabItem>
<TabItem value="php-grant" label="PHP">

```php
<?php
$ch = curl_init('https://v4.zelf.world/api/zelf-ids/payment-confirmation');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token,
        'Origin: https://yourdomain.com',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'tagName' => 'myname',
        'domain' => 'zelf',
        'token' => $signedDataPrice,
    ]),
]);
echo json_decode(curl_exec($ch), true)['data']['couponId'];
```

</TabItem>
<TabItem value="rust-grant" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let response = client
        .post("https://v4.zelf.world/api/zelf-ids/payment-confirmation")
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&json!({
            "tagName": "myname",
            "domain": "zelf",
            "token": signed_data_price
        }))
        .send()
        .await?;
    println!("{}", response.text().await?);
    Ok(())
}
```

</TabItem>
</Tabs>

### Create (super-admin)

<Tabs>
<TabItem value="curl-admin" label="cURL" default>

```bash
curl -X POST "https://v4.zelf.world/api/zelf-ids/coupons" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer SUPER_ADMIN_JWT" \
  -d '{
    "code": "SAVE100",
    "percentOff": 100,
    "plans": ["premium", "unlimited"],
    "durations": ["1y", "lifetime"],
    "maxRedemptions": 50,
    "expiresAt": "2026-12-31T23:59:59.000Z"
  }'
```

</TabItem>
<TabItem value="nodejs-admin" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post(
  'https://v4.zelf.world/api/zelf-ids/coupons',
  {
    code: 'SAVE100',
    percentOff: 100,
    plans: ['premium', 'unlimited'],
    durations: ['1y', 'lifetime'],
    maxRedemptions: 50,
    expiresAt: '2026-12-31T23:59:59.000Z'
  },
  { headers: { Authorization: `Bearer ${adminToken}`, Origin: 'https://yourdomain.com' } }
);

console.log(response.status, response.data.data.id);
```

</TabItem>
<TabItem value="python-admin" label="Python">

```python
import requests

response = requests.post(
    "https://v4.zelf.world/api/zelf-ids/coupons",
    json={
        "code": "SAVE100",
        "percentOff": 100,
        "plans": ["premium", "unlimited"],
        "durations": ["1y", "lifetime"],
        "maxRedemptions": 50,
        "expiresAt": "2026-12-31T23:59:59.000Z",
    },
    headers={"Authorization": f"Bearer {admin_token}", "Origin": "https://yourdomain.com"},
)
print(response.status_code, response.json()["data"]["code"])
```

</TabItem>
<TabItem value="php-admin" label="PHP">

```php
<?php
$ch = curl_init('https://v4.zelf.world/api/zelf-ids/coupons');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $adminToken,
        'Origin: https://yourdomain.com',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'code' => 'SAVE100',
        'percentOff' => 100,
        'plans' => ['premium', 'unlimited'],
        'durations' => ['1y', 'lifetime'],
        'maxRedemptions' => 50,
        'expiresAt' => '2026-12-31T23:59:59.000Z',
    ]),
]);
$body = json_decode(curl_exec($ch), true);
echo curl_getinfo($ch, CURLINFO_HTTP_CODE) . ' ' . $body['data']['id'];
```

</TabItem>
<TabItem value="rust-admin" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let response = client
        .post("https://v4.zelf.world/api/zelf-ids/coupons")
        .header("Origin", "https://yourdomain.com")
        .header("Authorization", format!("Bearer {}", admin_token))
        .json(&json!({
            "code": "SAVE100",
            "percentOff": 100,
            "plans": ["premium", "unlimited"],
            "durations": ["1y", "lifetime"],
            "maxRedemptions": 50,
            "expiresAt": "2026-12-31T23:59:59.000Z"
        }))
        .send()
        .await?;
    println!("{}", response.status());
    Ok(())
}
```

</TabItem>
</Tabs>

List and deactivate:

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/coupons" \
  -H "Authorization: Bearer SUPER_ADMIN_JWT" \
  -H "Origin: https://yourdomain.com"

curl -X POST "https://v4.zelf.world/api/zelf-ids/coupons/7c9e6679-7425-40de-944b-e07fc1f90ae7/deactivate" \
  -H "Authorization: Bearer SUPER_ADMIN_JWT" \
  -H "Origin: https://yourdomain.com"
```
