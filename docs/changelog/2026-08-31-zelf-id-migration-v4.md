---
id: 2026-08-31-zelf-id-migration-v4
title: Zelf ID Migration v4
sidebar_position: 1
---

**Date:** August 31, 2026  
**Version:** Zelf ID API (`/api/zelf-ids`)  
**Type:** Feature

## Summary

`/api/zelf-ids` is now the ZelfEncrypt v4 product for names. The public host is **`https://v4.zelf.world`** (for example `GET https://v4.zelf.world/api/zelf-ids/search`). It has its own plans, a 5-hour unpaid reservation, and its own payment routes. `/api/tags` stays on **`https://v3.zelf.world`** and ZelfEncrypt 3.1.6 and does not pick up these rules.

## Problem

Zelf ID and Tags shared lease, hold, and payment logic. Tags still uses a 30-day hold, Walrus when enabled, and yearly renewals without v4 plans. Copying those rules onto `/api/zelf-ids` would have broken v3.6 clients. Treating a `$0` referral price as lifetime, or letting short names buy premium, would also have been wrong for the v4 product.

## Solution

Zelf ID keeps its own persist and payment modules. Names of 6+ characters lease as `free` (no `.hold`) and can upgrade `free` → `premium` → `unlimited`. Only names of 5 characters or fewer use a 5-hour `name.domain.hold` pin while unlimited is unpaid. When a paid year ends, the name stays and the plan reads as `free` — never a hold. Search unpins expired unpaid short-name holds only.

## Technical Details

- The Koa Zelf ID API and ZelfEncrypt v4 share `https://v4.zelf.world`. Call `/api/zelf-ids/...` on that host. Encrypt, decrypt, and preview use path `/zelf-v4`. New records stamp `origin: "online"` and `v: 4`. Do not document Zelf ID examples as `https://v3.zelf.world/api/zelf-ids/...`.
- Plans: **free**, **premium**, **unlimited**. Paid plans are **yearly subscriptions**. Dollar amounts come from the domain license (`tags.payment.pricingTable`), not a hardcoded fee. Nothing is forever. Confirmed records keep `registeredAt` and `expiresAt` (1 year per duration).
- **6–27 characters** lease as `free` if unpaid. They can later choose a yearly **premium** or **unlimited** subscription. They never use `.hold`.
- **5 characters or fewer** are **unlimited only**. Yearly price comes from the domain license pricing table. They cannot be `premium`. A leftover `$0` after referral is a complimentary year of unlimited. Unpaid quotes pin as `alice.zelf.hold` for 5 hours.
- When `expiresAt` passes, search/preview show `plan: free`. The name is not deleted and does not become a hold.
- Storage: IPFS always, Arweave if the domain enables it, **no Walrus**. Reservations are IPFS-only.
- v4 clients must not call `/api/my-tags/payment-options` or `/api/my-tags/payment-confirmation`.
- `POST /api/zelf-ids/lease-offline` pins an existing v4 proof. Preview is Human Authn. A leftover `$0` quote confirms as **premium** (6+) or **unlimited** (5 or fewer). Tags offline lease stays on `/api/tags/lease-offline`.
- Later, not in this drop: unlock codes and IPFS privilege tables.

## Impact

- Integrators targeting `https://v4.zelf.world/api/zelf-ids` get v4 proofs, `plan` on confirmed records, and `.hold` only on short unpaid names.
- Tags / ZNS clients on `/api/tags` keep v3.6 behavior.
- Short unpaid names stay taken for 5 hours as `name.domain.hold`. After that window, search unpins the hold.
- Long names are free on lease and can later buy premium, then unlimited.
- An expired year drops the visible plan to `free` without a hold.

## Files Modified

- `Repositories/ZelfID/modules/zelf-id-plan.module.js`
- `Repositories/ZelfID/modules/zelf-ids-registration.module.js`
- `Repositories/ZelfID/modules/zelf-ids-payment.module.js`
- `Repositories/ZelfID/modules/my-zelf-id.module.js`
- `Repositories/ZelfID/modules/zelf-id.module.js`
- `Repositories/ZelfID/modules/zelf-ids-offline.module.js`
- `Repositories/ZelfID/routes/zelf-ids.routes.js`
- `Repositories/ZelfID/controllers/zelf-id.controller.js`
- `Repositories/ZelfID/middlewares/zelf-id.middleware.js`
- `tests/unit/zelf-id-plan.module.test.js`
- `tests/unit/zelf-ids-payment.module.test.js`
- `tests/integration/zelf-ids-payment-api.test.js`

## Related docs

- [Unit tests](/docs/api/zelf-ids/unit-tests)
- [Payment Options](/docs/api/zelf-ids/payment-options)
- [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation)
- [Lease Offline](/docs/api/zelf-ids/lease-offline)
- [Lease Zelf ID](/docs/api/zelf-ids/lease)
