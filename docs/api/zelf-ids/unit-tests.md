---
title: Unit tests
description: Full list of Zelf ID v4 unit and integration tests for plans, lease, and payment.
keywords: [zelf id unit tests, v4 plan tests, zelf id payment tests]
image: /img/social-card.png
---

# Unit tests

These tests live in the `zelf` backend repo. They lock the v4 plan and payment-metadata rules so `/api/zelf-ids` cannot drift back toward Tags v3.6 (30-day holds, lifetime `$0`, Walrus on lease). The public host for this API is `https://v4.zelf.world` — not `https://v3.zelf.world`.

See the [Migration v4 changelog](/docs/changelog/2026-08-31-zelf-id-migration-v4) for the product rules these cases enforce.

## Plan rules

File: `tests/unit/zelf-id-plan.module.test.js`

| Test | What it proves |
|------|----------------|
| `reservation window is 5 hours` | Unpaid holds last **5 hours**, not 30 days. |
| `getBareName strips TLD and .hold` | `getBareName` measures `alice` from `alice.zelf` or `alice.zelf.hold`. |
| `getReservationPinName is name.domain.hold` | Short unpaid pins are `alice.zelf.hold`, never `alice.hold`. |
| `.hold is only for names of 5 characters or fewer` | Only 1–5 character names may use `.hold`. Allowed plans: short → `unlimited`; 6–27 → `free`, `premium`, `unlimited`. |
| `resolveZelfIdPlan: long names lease free; short confirms are unlimited` | Lease stamps `free` on long names and `unlimited` on short names. |
| `resolveUpgradePlan: long names choose premium or unlimited; short stays unlimited` | Payment on a short name cannot stamp `premium`. Long names take the requested paid plan. |
| `getZelfIdPrice reads the license table and never hardcodes a dollar amount` | Yearly quotes come from `domainConfig.getPrice` (license `pricingTable`). Referral discount and a 100% whitelist still leave the plan as `unlimited`. |
| `getZelfIdPrice: long names can stay free or pick a paid plan from the license` | 6–27 characters may stay `free` or request `premium` / `unlimited` at the license price. |
| `getZelfIdPrice requires a license getPrice` | Missing `domainConfig.getPrice` throws `409:license_price_required`. |
| `effectivePlan: expired mainnet reads as free, not a hold` | Past `expiresAt`, search/preview show `plan: free`. A short name stored as `premium` still reads as `unlimited`. |
| `isUnpaidExpiredReservation deletes only expired unpaid holds` | Search may unpin expired short-name holds only. Paid mainnet is never treated as expired. |
| `resolveV4PaymentStamp: short is unlimited; long uses the requested paid plan` | v4 payment stamps a yearly `expiresAt`. v3 records get no plan. |

## Payment metadata

File: `tests/unit/zelf-ids-payment.module.test.js`

| Test | What it proves |
|------|----------------|
| `buildMetadata stamps a long name as the requested paid plan` | `plan: premium` on a long name becomes `type: mainnet` with about one year of expiry. |
| `buildMetadata can stamp a long name as unlimited when requested` | A long name can buy `unlimited` directly, not only as a later upgrade. |
| `buildMetadata stamps a short hold as unlimited` | A short v4 hold becomes `plan: unlimited` mainnet. |

These three cases run without a live server. They require the payment module only, not the full lease path.

## Payment integration

File: `tests/integration/zelf-ids-payment-api.test.js`

Requires a live API and `Core/assets/selfie_girl.jpg`. The suite leases a **short** unique name (`z` + 4 digits) so the hold path is exercised.

| Test | What it proves |
|------|----------------|
| `POST /zelf-ids/lease — selfie face creates a 5-hour paid reservation` | Short paid name is `type: hold` for about 5 hours. No Walrus. |
| `GET /zelf-ids/payment-options — 401 without auth` | Payment options are JWT-protected. |
| `GET /zelf-ids/payment-options — 409 without tagName/duration` | Validation requires `tagName` and `duration`. |
| `GET /zelf-ids/payment-options — 404 when the name is not leased` | Unknown names cannot be quoted. |
| `GET /zelf-ids/payment-options — returns unique addresses, prices, and a JWT` | Reserved name returns pay addresses, quotes, and `signedDataPrice`. |
| `POST /zelf-ids/payment-confirmation — 409 without token` | Confirmation requires the payment JWT. |
| `POST /zelf-ids/payment-confirmation — 401 without auth` | Confirmation is JWT-protected. |
| `POST /zelf-ids/payment-confirmation — AVAX is rejected for the unique-address path` | AVAX unique-address confirm is `409:avax_use_smart_contract_confirmation`. |
| `POST /zelf-ids/payment-confirmation — unpaid unique address stays unconfirmed` | No matching transfer → `confirmed: false`. |

## Full `/api/zelf-ids` integration

File: `tests/integration/zelf-ids-api.test.js`

Run with `npm run test:zelf-ids` against the same live API.

### 1. Domain helpers

| Test | What it proves |
|------|----------------|
| `GET /zelf-ids/domains — should return available domains` | Domain list is available. |
| `GET /zelf-ids/domains/zelf — should return zelf domain config` | `zelf` config loads. |
| `GET /zelf-ids/domains/notarealtld — should return 404` | Unknown TLD is 404. |

### 2. Search

| Test | What it proves |
|------|----------------|
| `GET /zelf-ids/search — should search for an existing tag` | Taken names resolve. |
| `GET /zelf-ids/search — should return pricing for available name` | Available names include a license quote. |
| `GET /zelf-ids/search — should return 409 when tagName is missing` | Validation. |
| `GET /zelf-ids/search — should return 401 without auth` | Search is JWT-protected. |

### 3. Preview

| Test | What it proves |
|------|----------------|
| `GET /zelf-ids/preview — should preview an existing name` | Taken names preview. |
| `GET /zelf-ids/preview — should return pricing for available name` | Available names include a license quote. |
| `GET /zelf-ids/preview — should return 409 when tagName is missing` | Validation. |

### 4. Full lifecycle: lease → v4 preview/QR → decrypt → delete

| Test | What it proves |
|------|----------------|
| `POST /zelf-ids/lease — stamps origin online and v 4` | New leases stamp `origin: online` and `v: 4`. |
| `leased QR is a PNG, 800px when past H, and scans back to the same proof` | QR matches the proof. |
| `POST /zelf-ids/preview-zelfproof — v4 preview of the leased proof` | Proof preview is v4. |
| `POST /zelf-ids/preview-zelf-id-qr — v4 preview of the leased QR` | QR preview is v4. |
| `GET /zelf-ids/preview — leased name returns a v4 preview` | Name preview is v4. |
| `GET /zelf-ids/search — finds the same name by tonAddress and xlmAddress` | Address lookup works. |
| `GET /zelf-ids/search — name search ignores continuation pins` | Continuation pins do not shadow the name. |
| `POST /zelf-ids/decrypt — returns the mnemonic from the leased v4 proof` | Face decrypt recovers the mnemonic. |
| `POST /zelf-ids/lease-recovery — same leased proof hits v4 (used or re-leased)` | Recovery uses the v4 persist path. |
| `DELETE /zelf-ids/delete — removes the leased v4 ID` | Delete unpins the name. |

### 4b. Lease recovery from a fresh JWT v4 proof

| Test | What it proves |
|------|----------------|
| `encrypts a v4 proof then recovers it onto a new Zelf ID` | A new v4 proof can be leased-recovered onto a name. |

### 5. Lease offline on `/api/zelf-ids`

| Test | What it proves |
|------|----------------|
| `POST /zelf-ids/lease-offline — 409 without tagName or proof` | Validation requires `tagName`/`domain` and a proof or QR. |
| `POST /zelf-ids/lease-offline — leases a v4 proof as zelfIDObject` | Existing v4 proof pins as `origin: offline`, `plan: free` for 6+ names. |

### 6. Validation and error handling

| Test | What it proves |
|------|----------------|
| `POST /zelf-ids/lease — should return 409 when tagName is missing` | Lease validation. |
| `POST /zelf-ids/preview-zelf-id-qr — should return 409 when zelfProofQRCode is missing` | QR preview validation. |
| `POST /zelf-ids/preview-zelfproof — should return 409 when zelfProof is missing` | Proof preview validation. |
| `POST /zelf-ids/decrypt — should return 409 when faceBase64 is missing` | Decrypt validation. |
| `POST /zelf-ids/decrypt — should return 401 without auth` | Decrypt is JWT-protected. |
| `DELETE /zelf-ids/delete — should fail when tagName is missing` | Delete validation. |

### 7. Shared lookup with `/tags`

| Test | What it proves |
|------|----------------|
| `search should return the same availability and name on both paths` | Search availability matches `/api/tags`. |
| `preview availability should match /tags for the same name` | Preview availability matches `/api/tags`. |
| `domains should return identical results on both paths` | Domain lists match `/api/tags`. |

### 8. `GET /zelf-ids/search-by-domain`

| Test | What it proves |
|------|----------------|
| `returns IPFS results for domain=zelf` | Domain listing works. |
| `returns 409 when domain or storage is missing` | Validation. |
| `returns 401 without auth` | JWT-protected. |

### 9. `GET /zelf-ids/wallet-balances`

| Test | What it proves |
|------|----------------|
| `returns 409 when no addresses are provided` | Validation. |
| `returns live balances for a real ETH address` | Live ETH balance lookup. |

### 10. Rewards routes

| Test | What it proves |
|------|----------------|
| `POST /zelf-ids/revenue-cat — 409 without event` | Validation. |
| `POST /zelf-ids/purchase-rewards — session JWT is not super-admin (403)` | Super-admin only. |
| `POST /zelf-ids/referral-rewards — session JWT is not super-admin (403)` | Super-admin only. |

### 11. Plan categories

| Test | What it proves |
|------|----------------|
| `POST /zelf-ids/lease — long name is free mainnet, never .hold` | 6+ characters lease as `plan: free`, `type: mainnet`, ~1 year, no Walrus. |
| `POST /zelf-ids/lease — short paid name is a 5-hour .zelf.hold reservation` | 5-or-fewer characters with a leftover price pin as `type: hold` for ~5 hours. |
| `GET /zelf-ids/search — unexpired reservation is not available` | An active hold is taken. |
| `POST /zelf-ids/lease — duplicate unexpired reservation is 409` | Unexpired holds cannot be re-leased. |
| `GET /zelf-ids/payment-options — 409 without tagName/duration` | Validation on the same suite. |
| `POST /zelf-ids/payment-confirmation — 409 without token` | Validation on the same suite. |
| `GET /zelf-ids/payment-options — reserved name returns unique addresses and a JWT` | Hold can be quoted for payment. |

## How to run

In the `zelf` repo, against a live API for the integration half:

```bash
npm run test:zelf-ids-payment
```

That script runs the two unit files above, then `tests/integration/zelf-ids-payment-api.test.js`. The live suite uses `Core/assets/selfie_girl.jpg` to lease a paid name, request payment options, and confirm that an unpaid unique address stays `confirmed: false`.

Set `PORT` to the same value as the running API (the repo still has mixed fallbacks). Example: `PORT=3050 npm run test:zelf-ids-payment`.

The full `/api/zelf-ids` suite (sections 1–11) is:

```bash
PORT=3050 npm run test:zelf-ids
```
