---
title: Cupones
description: Cupones de porcentaje para los planes Premium y Unlimited de Zelf ID. Cotización, concesión y alta, listado y desactivación de super-admin.
keywords: [cupón zelf id, cupón premium, cupón unlimited, percent off, precio del plan, my-plan, subir de plan]
image: /img/social-card.png
sidebar_label: Cupones
---

# Cupones

Un cupón resta un porcentaje a un plan de pago de Zelf ID. Aplica a **premium**, **unlimited**, o a los dos. El precio de lista es el precio del plan en la licencia para ese nombre y esa duración (`tags.payment.pricingTable`, vía `domainConfig.getPrice`). Un cupón no añade otra lista de precios.

Los planes de cuenta (contraseñas y 2FA) usan otra lista. Esta página cubre solo los planes de nombre Zelf ID.

La cotización es `GET /api/zelf-ids/payment-options`. Un cupón del **100%** concede el plan por la misma vía de checkout gratuito que una cotización de `$0`. Un cupón **parcial** cobra el importe con descuento en el checkout normal de Stripe o crypto.

## Cupón

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Id del servidor. |
| `code` | string | Único. La comparación no distingue mayúsculas. Se guarda en mayúsculas. `save100` y `SAVE100` son el mismo cupón. |
| `percentOff` | number | Entero de 1 a 100. |
| `plans` | string[] | `premium`, `unlimited`, o ambos. |
| `durations` | string[] | Opcional. `1y`, `2y`, `3y`, `lifetime`. Si se omite, vale cualquier duración de la cotización (`"1"` … `"5"` y `"lifetime"`). |
| `maxRedemptions` | number | Tope de canjes exitosos. |
| `perZelfIdLimit` | number | Canjes exitosos por Zelf ID. Por defecto `1`. |
| `expiresAt` | string | Fecha ISO-8601 opcional. Omitirla significa que no vence por tiempo. |
| `active` | boolean | `false` tras desactivar. Un cupón nuevo empieza en `true`. |
| `createdBy` | string | Super-admin que lo creó. Lo asigna el servidor. |
| `redemptions` | array | `{ zelfId, plan, duration, redeemedAt }` de cada concesión. |

| Entrada de `durations` | `duration` de la cotización |
|------------------------|-----------------------------|
| `1y` | `"1"` |
| `2y` | `"2"` |
| `3y` | `"3"` |
| `lifetime` | `"lifetime"` |

El registro de canje guarda ese mismo token (`1y`, `2y`, `3y`, `lifetime`, y `4y` o `5y` cuando el cupón deja la duración abierta).

## Cotización

```
GET https://v4.zelf.world/api/zelf-ids/payment-options
```

### Autenticación

Requiere un JWT de `POST /api/sessions`.

### Parámetros

La misma query de payment options, más:

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `coupon` | string | No | Código del cupón. No distingue mayúsculas. |

La API comprueba, en este orden: el código existe, `active` es true, `expiresAt` sigue vigente, los canjes están bajo `maxRedemptions`, el `plan` está permitido, la `duration` está permitida y este Zelf ID está bajo `perZelfIdLimit`.

Si una comprobación falla, la cotización se devuelve igual. `amountDue` sigue siendo el precio de la licencia y `coupon.reason` indica el motivo. Un fallo no escribe un canje.

`amountDue = listPrice × (100 − percentOff) / 100`. Las cifras de abajo usan la fila de ejemplo de la licencia para un nombre de 6–15 caracteres, un año, **$24**. Cada TLD define su tabla.

## Checkout

### 100% (`amountDue` es 0)

Confirma la cotización firmada con `POST /api/zelf-ids/payment-confirmation`. Envía `tagName`, `domain` y `token`. Omite `network`.

La API concede el plan por la vía de checkout gratuito. No llama a Stripe, RevenueCat ni crypto, y no emite una dirección de pago. El método de pago del lease queda en `coupon`, con `couponId` igual al `id` de este cupón. El canje se inserta en la misma transacción que la concesión, así que dos confirmaciones concurrentes no pueden superar `maxRedemptions`.

La concesión usa las mismas reglas que una compra de pago:

- El orden de subida es `free` → `premium` → `unlimited`.
- Un plan inferior se rechaza mientras un lease de pago sigue activo (`downgrade_not_allowed`). Renovar el mismo plan sigue las reglas normales de duración.
- Los nombres de **1–5** caracteres son solo **unlimited** (`plan_not_allowed_for_name` si el plan es premium).
- Los nombres de **6–27** caracteres pueden ser premium o unlimited.
- La duración tiene que ser una que acepte la cotización y una que permita este cupón.

Una concesión rechazada no escribe un canje. Cada alta y cada canje escriben una entrada de auditoría.

### Parcial (`percentOff` menor de 100)

Stripe y crypto cobran `amountDue`. Las cotizaciones crypto de `prices` y el JWT `signedDataPrice` usan ese importe en USD ya descontado. La confirmación crypto lleva `network`, como siempre. El canje se escribe cuando ese checkout concede el plan.

## Subir de plan

```
GET https://v4.zelf.world/api/zelf-ids/my-plan?zelfName=myname.zelf
```

Quien llama tiene que ser el dueño verificado. En la sesión, `verifiedTagName` debe coincidir con el `zelfName` normalizado, y la petición tiene que caer dentro de `verifiedUntil`. Sin sesión la respuesta es `401`. Una sesión que no cumple esa comprobación recibe `403`.

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

`plan` es `free`, `premium` o `unlimited`. `paymentMethod` es `free`, `stripe`, `stripe_subscription`, `crypto`, `coupon`, `revenuecat` o `whitelist`. Un checkout de lista blanca de la licencia a `$0` guarda `paymentMethod` `whitelist`. `nextPlans` lista lo que ese nombre todavía puede comprar. `upgrade.url` solo viene cuando la acción tiene un enlace.

Hoy el checkout de Stripe para Zelf ID es un pago único. `stripe_portal` solo aplica cuando el lease guarda `paymentMethod` `stripe_subscription`. Los enlaces de subida usan `https://zelf.world`, salvo que `LANDING_URL` cambie ese host.

| Pago actual | `upgrade.action` | A dónde va el dueño |
|-------------|------------------|---------------------|
| `stripe_subscription` en el lease | `stripe_portal` | URL de una sesión del portal de cliente de Stripe |
| `stripe` de un solo pago, `crypto`, `coupon`, `free` o `whitelist` | `checkout` | `https://zelf.world/pricing?tagname=<tag>&domain=<domain>&duration=1&plan=<plan>` (Stripe o crypto) |
| `revenuecat` | `mobile_store` | La app móvil de Zelf |
| Unlimited `lifetime` | `none` | No hay subida. `nextPlans` queda vacío. |

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/my-plan?zelfName=myname.zelf" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Origin: https://yourdomain.com"
```

## Administración

Crear, listar y desactivar exigen un JWT de sesión **super-admin**. Cualquier otra sesión recibe `403`.

```
POST https://v4.zelf.world/api/zelf-ids/coupons
GET  https://v4.zelf.world/api/zelf-ids/coupons
POST https://v4.zelf.world/api/zelf-ids/coupons/:id/deactivate
```

Desactivar pone `active` en `false` y conserva el registro de canjes. El código sigue reservado.

## Códigos de error

Los rechazos de cotización son HTTP **200**. `coupon.reason` es uno de:

| `reason` | Significado |
|----------|-------------|
| `not_found` | No hay cupón con ese código. |
| `inactive` | `active` es false. |
| `expired` | `expiresAt` ya pasó. |
| `max_redemptions` | Los canjes exitosos llegaron a `maxRedemptions`. |
| `plan_not_allowed` | El `plan` no está en este cupón. |
| `duration_not_allowed` | La `duration` no está en este cupón. |
| `zelf_id_limit` | Este Zelf ID llegó a `perZelfIdLimit`. |

| HTTP | `code` | Cuándo |
|------|--------|--------|
| 401 | — | Falta el JWT de sesión. El cuerpo es `{ "error": "Protected resource, use Authorization header to get access" }`. |
| 403 | `super_admin_required` | Ruta de admin y quien llama no es super-admin. |
| 409 | `coupon_code_taken` | Alta con un código que ya existe. |
| 409 | `coupon_invalid` | La revalidación al conceder falló. `code` es el `reason` de la cotización. |
| 409 | `downgrade_not_allowed` | Hay un lease de pago activo y el plan pedido es inferior. |
| 409 | `plan_not_allowed_for_name` | Premium en un nombre de 5 caracteres o menos. |
| 409 | — | Validación del cuerpo. Texto `validationError`, igual que el resto de rutas de Zelf ID. |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="quote-partial" label="200 Cotización - Parcial" default>

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
<TabItem value="quote-rejected" label="200 Cotización - Rechazada">

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
<TabItem value="grant" label="200 Concesión - 100%">

`POST /api/zelf-ids/payment-confirmation` con el token de la cotización al 100% y sin `network`.

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

El lease guarda `payment.method` `"coupon"` y `payment.couponId`.

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
<TabItem value="errors" label="Errores">

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

## Ejemplos

### Cotización

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

### Conceder un cupón del 100%

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

### Crear (super-admin)

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

Listar y desactivar:

```bash
curl -X GET "https://v4.zelf.world/api/zelf-ids/coupons" \
  -H "Authorization: Bearer SUPER_ADMIN_JWT" \
  -H "Origin: https://yourdomain.com"

curl -X POST "https://v4.zelf.world/api/zelf-ids/coupons/7c9e6679-7425-40de-944b-e07fc1f90ae7/deactivate" \
  -H "Authorization: Bearer SUPER_ADMIN_JWT" \
  -H "Origin: https://yourdomain.com"
```
