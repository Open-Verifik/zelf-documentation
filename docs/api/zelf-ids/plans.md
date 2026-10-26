---
title: "Plans: Free, Premium and Unlimited"
description: How Zelf ID plans work. Free, Premium and Unlimited limits for passwords and 2FA accounts, extra slots paid in ZNS, payment, coupons, upgrades, renewal and lapse.
keywords: [zelf plans, free plan, premium plan, unlimited plan, zelf keys limits, extra slots, zns, upgrade credit, renewal, coupon]
image: /img/social-card.png
sidebar_label: "Plans: Free, Premium and Unlimited"
---

# Plans: Free, Premium and Unlimited

Every Zelf ID name has a plan: **Free**, **Premium** or **Unlimited**. The plan sets how many passwords and 2FA accounts the owner can keep in Zelf Keys. The name itself is the same on every plan.

:::info Prices come from the plans API

The prices on this page are what `GET https://v4.zelf.world/api/zelf-ids/payment-options` returned for a 6+ character `.zelf` name when this page was written. Prices are set on the domain license (see [The License Object](/docs/api/licenses/license-object)) and can change. Always read the live price from [Payment Options](/docs/api/zelf-ids/payment-options) before showing it to a user.

:::

## Comparison

| | Free | Premium | Unlimited |
|---|---|---|---|
| Price (1 year) | $0 | $29 | $99 |
| Passwords in Zelf Keys | 5 | 100 | No limit |
| 2FA accounts in Zelf Keys | 3 | 20 | No limit |
| Extra slots paid in ZNS | Yes | Yes | Not needed |
| Name lease | 100 years | 100 years | 100 years |
| Paid by | Nothing to pay | Stripe or crypto | Stripe or crypto |
| Available for names of 1–5 characters | Yes | No | Yes |

## How plans work

- **Every name starts on Free.** Leasing a name gives it a Free plan and a lease of about 100 years. There is nothing to pay.
- **Premium and Unlimited are paid terms on top of the name.** Buying a plan sets a plan end date (`planExpiresAt`). It does not change the name lease (`leaseExpiresAt`).
- **The effective plan is read at request time.** While the paid term is open, the name is on that plan. Once the term ends, the name reads as Free again. No migration or cron job is involved.
- **Short names.** For names of 1–5 characters the license offers **Unlimited** only. Premium is offered for names of 6 or more characters.

## Limits

Limits apply to Zelf Keys items owned by the name:

| Item | Free | Premium | Unlimited |
|------|------|---------|-----------|
| Passwords | 5 | 100 | No limit |
| 2FA accounts | 3 | 20 | No limit |

When the owner reaches a limit, a new item of that type is refused until the owner buys an extra slot or moves to a higher plan. Editing an item that is already stored does not count as a new one.

The current limits, usage and slot prices for a name come from `GET https://v4.zelf.world/api/zelf-keys/limits`.

## Extra slots

Free and Premium owners can go past their plan limit one item at a time by buying an **extra slot** with ZNS, the Zelf token.

| Extra slot | Price | ZNS at $0.05 per ZNS |
|------------|-------|----------------------|
| Password | $0.50 | 10 ZNS |
| 2FA account | $1.00 | 20 ZNS |

- Slot prices are set in USD and converted to whole ZNS at the configured token price. At $0.05 per ZNS that is **10 ZNS** for a password slot and **20 ZNS** for a 2FA slot. If the token price changes, the ZNS amount changes with it.
- Each slot lasts **12 months**. After that the slot ends and no longer counts toward the limit.
- The ZNS comes from the wallet of the name that owns the vault. Buying a slot is confirmed with the owner's face.
- Unlimited has no caps, so it does not need extra slots.

Extra slots are bought with `POST https://v4.zelf.world/api/zelf-keys/slots`.

## Buying and paying

1. Request a quote with [Payment Options](/docs/api/zelf-ids/payment-options), passing the name, the `plan` (`premium` or `unlimited`) and the `duration`.
2. Pay the quoted amount with **Stripe** or **crypto**.
3. Confirm with [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation). The plan is applied to the name.

Plans are bought in yearly terms. The license decides which terms are offered for each plan. For a 6+ character `.zelf` name the API currently offers:

| Term | Premium | Unlimited |
|------|---------|-----------|
| 1 year | $29.00 | $99.00 |
| 2 years | $43.49 | $148.99 |
| 3 years | $56.99 | $192.99 |
| Lifetime | $144.99 | $494.99 |

A term the license does not offer returns `409` `PLAN_DURATION_NOT_OFFERED_BY_LICENSE`. A plan the license does not offer for that name length returns `409` `PLAN_NOT_OFFERED_FOR_NAME`. A license with no price function returns `409` `LICENSE_PRICE_REQUIRED`. `message` and `code` are both that string. A Lifetime term has no plan end date.

```json
{ "message": "PLAN_DURATION_NOT_OFFERED_BY_LICENSE", "code": "PLAN_DURATION_NOT_OFFERED_BY_LICENSE" }
```

```json
{ "message": "PLAN_NOT_OFFERED_FOR_NAME", "code": "PLAN_NOT_OFFERED_FOR_NAME" }
```

```json
{ "message": "LICENSE_PRICE_REQUIRED", "code": "LICENSE_PRICE_REQUIRED" }
```

### The quote locks the price

The quote is signed (`signedDataPrice`) and is valid for **2 hours**. It locks the USD price, the crypto amounts and any upgrade credit for that window. Confirmation uses those locked figures.

An expired quote is refused. Request a new quote, which reprices everything, including crypto rates and upgrade credit. A crypto payment of the full quoted amount that arrived before the quote expired is still honored.

Stripe needs at least 30 minutes left on the quote to open a checkout session. Otherwise it returns `409` `QUOTE_EXPIRING`; request a new quote.

## Coupons

A [coupon](/docs/api/zelf-ids/coupons) takes a percent off a Premium or Unlimited term. Pass it to Payment Options to see the discounted `amountDue`.

- If the coupon brings the total to **$0**, the plan is granted directly. No payment gateway is involved.
- If a balance remains, the owner pays that discounted amount with Stripe or crypto.

## Upgrading

A name on an open Premium term can move to Unlimited at any time. Moving down from Unlimited to Premium while the term is open is not allowed (`409` `PLAN_DOWNGRADE_NOT_ALLOWED`). `message` and `code` are both that string.

```json
{ "message": "PLAN_DOWNGRADE_NOT_ALLOWED", "code": "PLAN_DOWNGRADE_NOT_ALLOWED" }
```

When upgrading from Premium to Unlimited, the unused Premium time becomes **upgrade credit**:

`upgradeCredit = amount actually paid for the Premium term × remaining time / total term time`

- The credit is rounded down to the cent and never exceeds the Unlimited price.
- It is based only on what was actually paid. A Premium term granted by a 100% coupon or by a whitelist was $0, so it gives **$0** credit. A partial coupon credits the amount that was paid.
- A Lifetime term or a term that has already ended gives no credit.
- The credit is locked in the signed quote for its validity window.
- The new Unlimited term starts on the upgrade date.

Payment Options returns `listPrice`, `upgradeCredit` and `amountDue`. A coupon applies after the credit:

`amountDue = (listPrice − upgradeCredit) × (100 − percentOff) / 100`

If the Premium term changes between the quote and the confirmation, confirmation returns `409` `UPGRADE_TERM_CHANGED`; request a new quote.

The owner's current plan and the available upgrade path come from `GET https://v4.zelf.world/api/zelf-ids/my-plan`. See [Upgrading a plan](/docs/api/zelf-ids/coupons#upgrading-a-plan).

## Renewal and lapse

- **Renewing the same plan while the term is open** adds the new term to the current end date. No time is lost.
- **Renewing after the term has ended** starts a new term on the purchase date.
- **When a paid term ends**, the name drops back to **Free**. Free limits apply again. The name keeps its 100-year lease and does not expire. `planExpiresAt` stays on the past end date.
- Items stored while on a higher plan are not deleted when the term ends. New items above the Free limit need an extra slot or a new paid term.

## Related

- [Payment Options](/docs/api/zelf-ids/payment-options)
- [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation)
- [Coupons](/docs/api/zelf-ids/coupons)
- [The License Object](/docs/api/licenses/license-object)
- [Proposal: Monthly ZNS access for Free accounts](/docs/api/zelf-ids/monthly-zns-access-proposal)
- [Monthly access](/docs/api/zelf-ids/monthly-access)
