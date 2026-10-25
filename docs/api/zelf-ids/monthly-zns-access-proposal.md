---
title: "Proposal: Monthly ZNS access for Free accounts"
description: Design proposal for a monthly ZNS fee on Free Zelf ID accounts, charged on the first liveness decryption of a calendar month. Not implemented.
keywords: [proposal, monthly zns access, free plan, liveness, zelf keys, premium equivalent, daily reward]
image: /img/social-card.png
sidebar_label: "Proposal: Monthly ZNS access"
---

# Proposal: Monthly ZNS access for Free accounts

:::info Proposal only

This page is a product design proposal. Nothing here is implemented, and the endpoints in the [API sketch](#proposed-api-shape) are not deployed. Prices and limits below are the current v4 behavior described on [Plans](/docs/api/zelf-ids/plans). A future implementation must read the live license and the server token price. It must not copy the illustration numbers into a client.

:::

## Problem

Every face-liveness check that opens a Zelf ID has a monthly active-user cost for Zelf. The configured monthly active-user amount defaults to **$0.10**. A Free account pays Zelf nothing, and still creates that cost the month someone comes back and decrypts.

Free today, from [Plans](/docs/api/zelf-ids/plans):

| | Free |
|---|---|
| Passwords in Zelf Keys | 5 |
| 2FA accounts in Zelf Keys | 3 |
| Name lease | about 100 years |
| Cash price | $0 |

Premium for a 6+ character `.zelf` name is **$29 for one year** on the current payment-options snapshot (**$2.42** a month). The goal is for a Free account to pay that Premium monthly equivalent in **ZNS**, on the months the account actually opens its data. People already earn ZNS from the daily reward, which is claimed with face and, when the Zelf ID has a master password, with that password too. An active earner can cover the month from that balance. The fee also has a floor at the liveness cost, so a cheap token price cannot drop the charge below what the month costs Zelf.

Premium and Unlimited stay exempt from this Free fee. A separate, lower-priority section lists ways those paid plans could use ZNS later. That section is not a commitment.

## Recommended defaults

| Topic | Recommendation |
|---|---|
| Who pays | Free only. Premium and Unlimited are exempt while the paid term is active. |
| When | The first liveness decryption that opens stored secrets or unlocks the wallet in a billing month. A month with no such open is free. |
| Month | Calendar month in **UTC**. Period key `YYYY-MM`. |
| How many charges | One per Zelf ID per period. Later opens in that month are covered. |
| Amount | One-year Premium USD from the license, divided by 12, converted to whole ZNS at the server token price, using the same rounding as extra slots. Floor: the configured monthly active-user amount (default $0.10). |
| Illustration | $29 / 12 at $0.05 per ZNS rounds up to **49 ZNS**. The live quote replaces this figure. |
| Short balance | Block the open. Offer Premium, a card payment for that month, or earning more ZNS. Do not allow a negative balance. Wallet export and lease recovery stay available. **Open decision for Miguel.** |
| Daily reward | Exempt. It is how the balance is earned. Confirmed Free names use the mainnet wheel: 2, 4, …, 24 ZNS a day (mean 13). |
| Quote | Signed, locked for 2 hours, same idea as [Payment Options](/docs/api/zelf-ids/payment-options). |

## When the fee is charged

Charge on the **first liveness-based decryption of the billing month** that opens Zelf Keys data or unlocks the wallet for use.

A person who does not open their data that month is not charged. That matches monthly active-user billing: the cost appears when the account is active, and it does not appear in a quiet month.

One successful charge covers every later triggering open in that same period, including new visits and new 10-minute verified sessions.

### Which month

| Clock | How it works | Trade-off |
|---|---|---|
| Calendar month, UTC | Period key `YYYY-MM`. January 31 and February 1 are two periods. | Lines up with a monthly active-user bill. Easy to show in a receipt ("October 2026"). A person who opens data on the last day of one month and the first day of the next pays twice, which is two active months. |
| Rolling 30 days from the first open | The next charge is due 30 days after the last charge. | One open can sit across two calendar months while Zelf still has two active-user bills, or two opens can fall in one calendar month. Harder to explain in the app. |

**Recommendation: calendar month, UTC.** The daily reward is already once per calendar day. The access fee should be once per calendar month, on a clock that does not depend on the server's local timezone. Store the period as `YYYY-MM` in UTC.

The fee is **per Zelf ID**. Rewards, the vault, and liveness are already per name. Three Free names opened in the same month are three charges. Whether a household account should cap that is an [open question](#open-questions).

## Amount

The charge is the Premium monthly equivalent in ZNS, and it is never below the liveness floor.

1. Read the **one-year Premium** USD price from the domain license (`tags.payment.planPricing`, duration `"1"`), the same lookup [Payment Options](/docs/api/zelf-ids/payment-options) uses. Do not use the two-year, three-year, or lifetime cells. Those are discounted bundles. Do not use the Unlimited price.
2. Monthly USD = that yearly price / 12.
3. Convert monthly USD to whole ZNS with the server token price (`getTokenPriceUsd`). Extra slots already do this: an exact integer stays an integer, and any other value rounds up.
4. Convert the liveness floor the same way. The floor is the configured monthly active-user amount, default **$0.10**.
5. Charge the greater of the two ZNS amounts.

The token price and the license price are server configuration. Clients display the signed quote. They do not embed $29, $0.05, or 49.

Names of 1–5 characters cannot buy Premium. **Recommendation:** those Free names still use the license's one-year Premium price for names that can buy Premium (the 6+ `.zelf` cell on the current snapshot). Every Free name then pays the same access fee. Using a share of Unlimited ($99 a year on that snapshot) would price a Free short name far above the Premium equivalent this proposal is aiming at.

### Illustration, not a constant

The [Plans](/docs/api/zelf-ids/plans) snapshot for a 6+ character `.zelf` name is **$29** for one Premium year. The server token price defaults to **$0.05** per ZNS. Extra-slot rounding then gives:

| Step | Value |
|---|---|
| Yearly Premium | $29.00 |
| Monthly USD | 29 / 12 = $2.4166… (show **$2.42**) |
| ZNS before rounding | 2.4166… / 0.05 = 48.333… |
| Whole ZNS | **49** |
| Floor | $0.10 / 0.05 = **2** ZNS |
| Charge | **49 ZNS** |

If the license price or the token price moves, the quote moves. At a token price under about **$0.043**, a full month of the smallest mainnet daily rewards (28 × 2 ZNS) no longer covers a $29-equivalent fee. The quote should show both the USD and the ZNS so that shift is visible. See [Daily reward math](#daily-reward-math).

### Signed quote

Follow the payment quote. `signedDataPrice` on [Payment Options](/docs/api/zelf-ids/payment-options) locks USD and crypto amounts for **2 hours**.

The monthly-access quote locks, for the same two hours:

| Locked field | Meaning |
|---|---|
| `zelfName` | The name being opened |
| `periodKey` | `YYYY-MM` in UTC |
| `premiumYearlyUsd` | License cell used |
| `amountUsd` | Yearly / 12, before the ZNS round-up |
| `tokenPriceUsd` | Server price at quote time |
| `floorUsd` | Monthly active-user floor used |
| `amountZns` | Whole ZNS to debit |
| `exp` | Quote expiry, 2 hours |

Confirmation of an expired quote is refused. The client requests a new quote. A second confirm of a quote that already paid this period returns the paid record and does not debit again.

## Insufficient ZNS

This block is an **explicit open decision for Miguel**. The recommendation below is the default to build only after that decision.

Three options:

| Option | What the person sees | Trade-off |
|---|---|---|
| Block the open, and offer a way to pay | The secrets stay closed. The sheet offers upgrade to Premium, pay this month by card for the locked USD, or earn ZNS and retry. | Collects the month that created the liveness cost. A person who never claims rewards can still pay by card or upgrade. |
| One grace open per month | The first open of the month succeeds with a zero or partial balance. The next month is unpaid again. | Simple, and it leaves the original problem in place: a visit every few months still costs a monthly active user and brings in no ZNS. |
| Negative balance | The open succeeds and the ledger goes below zero until later rewards repay it. | The extra-slot ledger already refuses to commit more ZNS than the on-chain balance. A Free account may never come back to clear the debt. |

**Recommendation: block the open, with no debt.** Recovery of the person's own funds stays available. See the exempt rows in [Which operations count](#which-operations-count).

- Zelf Keys passwords, 2FA, notes, and cards stay closed until the month is paid in ZNS, the person upgrades to an active Premium or Unlimited term, or a card payment settles the locked USD for that period.
- Wallet export and [lease recovery](/docs/api/zelf-ids/lease-recovery) stay available on a short balance. That path is for moving the owner's own funds and recovering the name. It does not open the Zelf Keys vault.
- The card amount is the locked `amountUsd` on the quote, which is already at least the liveness floor. It is not a second hardcoded price.
- A paid month is marked paid whether the settlement was ZNS or card, so the rest of the period does not ask again.

## Which operations count

Face-liveness is used across the product. **Only a decryption that opens stored secrets, or unlocks the wallet for use, triggers the fee.** One trigger in the period covers the rest. The daily reward claim is exempt because that claim is how the ZNS balance is earned.

| Operation | Today | This proposal |
|---|---|---|
| Zelf Keys retrieve (password, 2FA, note, card) | Face | **Triggers** |
| Zelf ID decrypt | Face | **Triggers** |
| Wallet decrypt for use (`POST /api/my-wallets/decrypt`) | Face | **Triggers** |
| Tags decrypt and ZNS v2 decrypt, when they open a Free name | Face | **Triggers** |
| Daily reward (`POST /api/rewards/daily`) | Face, plus master password when the Zelf ID has one | **Exempt** |
| Wallet export / move-own-funds, and lease recovery | Face on recovery | **Exempt**, including when the balance is short |
| Zelf Keys preview | Face | **Exempt**. It does not open stored vault items. |
| Store or add a password, 2FA, note, or card | Face | **Exempt** |
| Change master password | Face | **Exempt** |
| Delete a Zelf Key item, or delete the Zelf ID | Face | **Exempt** |
| Lease, wallet create, wallet import | Face | **Exempt** |
| Extra slot purchase (`POST /api/zelf-keys/slots`) | Face | **Exempt** from this fee. It has its own ZNS price. |
| Payment confirmation, Solana payment submit | Face | **Exempt** |
| Name transfer, license extend | Face | **Exempt** |
| Staff, lawyer, client, license admin, face certificates, human authn | Face on those products | **Out of scope** |

Signing a transaction after the wallet is already unlocked does not run another liveness check, so it is not a second charge. The unlock that started that use is the trigger. A later signature in a month that is already paid does not quote again.

Store, password change, and delete use face and can create an active user without opening existing secrets. The recommendation leaves them exempt so the fee stays tied to "I opened my data," which is the case this proposal is written for. Whether any face check should count is an [open question](#open-questions).

## Paid plans, coupons, whitelist, lapse, slots, and the session

### Premium and Unlimited

While the effective plan is **premium** or **unlimited**, the Free fee does not run. That includes a Zelf Keys subscription whose plan is one of those two: the higher plan wins, the same way vault limits already work.

A paid term that has ended reads as Free again (`planExpiresAt` in the past, name lease unchanged). The next triggering open in a UTC month with no paid access record is charged. Items stored during the paid term stay stored. New items above the Free caps still need an extra slot or a new paid term, as on [Plans](/docs/api/zelf-ids/plans).

Legacy key entitlements outside free / premium / unlimited do not change the consumer plan today. A Free name in that state would be in scope for this fee. Whether those entitlements should be exempt is an [open question](#open-questions).

### Coupons and whitelist

A [coupon](/docs/api/zelf-ids/coupons) or a whitelist grant exempts the name **only after** the paid plan is active.

| State | Fee |
|---|---|
| Coupon or whitelist quote still in progress | Still Free. A triggering open can charge. |
| 100% coupon or whitelist grant, plan now premium or unlimited | Exempt until the term ends. A lifetime Unlimited term does not end. |
| Partial coupon, checkout finished, plan active | Exempt until the term ends. |
| Term ended | Free rules again. |

A 100% coupon or a whitelist grant was $0, so it produces no upgrade credit. That existing rule is unchanged. The exemption here is the active plan, not the coupon percent.

### Extra slots

Extra slots stay a separate purchase. At the default token price of $0.05 they are **10 ZNS** for a password slot ($0.50) and **20 ZNS** for a 2FA slot ($1.00), for 12 months. See [Plans](/docs/api/zelf-ids/plans).

Both spends use one spendable balance: on-chain ZNS minus ZNS already committed to slots. A slot purchase does not pay the monthly access fee. A monthly access debit does not grant a slot.

**Recommendation:** allow the slot purchase while the month is unpaid, and have the confirm sheet say when the remaining balance would leave the month unpaid. The two debits cannot both succeed against the same tokens.

Unlimited does not sell extra slots. Premium caps (100 passwords, 20 2FA accounts) still allow slots. Those names are exempt from the Free fee while the paid term is active, and they can still buy slots.

### The 10-minute session

A successful face check, together with the master password when the Zelf ID has one, marks the session verified for **10 minutes**. That window stays as it is.

| Situation | Fee |
|---|---|
| Month already paid, inside or outside the 10-minute window | No further access charge. Face still runs when the action requires it. |
| Month not paid, and the session is still inside the 10-minute window | The first triggering open of the new period still quotes. The window does not carry last month's payment forward. |
| Daily reward inside a verified window | Still exempt. |

## Daily reward math

The daily reward is a wheel, not a fixed stipend. Each Zelf ID can claim once per calendar day, after a face check and, when the Zelf ID has a master password, that password. The claim pays out when the name's Solana account is active.

| Name type | Wheel segments (whole ZNS) | Mean |
|---|---|---|
| Mainnet, including a confirmed Free lease | 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 | **13** |
| Legacy hold | 1 through 12 | **6.5** |

New Free leases are mainnet, so the mainnet wheel is the one that matters. A separate one-time first-transaction reward draws **1 to 100 ZNS** once. It is not a daily source and it is not in the monthly totals below.

Compared with the **49 ZNS** illustration ($29 / 12 at $0.05 per ZNS):

| Claiming pattern | ZNS | Covers 49? |
|---|---|---|
| One mainnet claim | 2 to 24 | No. The best segment is 24. |
| Three claims at the mean | 39 | No |
| Four claims at the mean | 52 | Yes |
| Full month at the minimum segment | 56 to 62 (28 to 31 days × 2) | Yes, at the $0.05 default |
| Full month at the mean | about 364 to 403 | Yes |
| Legacy hold, full month at the minimum | 28 to 31 | No |

So a Free name that claims on most days covers the illustrated month even on a run of the smallest segment. A single visit does not. A person who returns after several quiet months, without claims in between, has no new reward from those quiet months. Their earlier unspent balance might cover the open, and if it does not they hit the [short-balance](#insufficient-zns) sheet.

The claim itself must stay exempt. Charging the fee on the claim would take ZNS from the action that mints it, and a short balance could block the only way to earn the next month.

Coverage moves if the token price moves. At the $29 illustration, a 28-day month of 2 ZNS claims (56 ZNS) covers the fee while the token price stays at or above about **$0.043**. The default $0.05 is above that line. The live quote is what the app shows, not this table.

## UX

The extension and the app should make the month visible before the camera starts, so a person who declines does not begin a liveness check.

1. **Balance.** The vault shows spendable ZNS (on-chain minus tokens already committed) and the current period: `Not due`, `Unpaid`, `Paid`, or `Included with Premium` / `Included with Unlimited`.
2. **Warning before the charge.** On the first triggering open of an unpaid Free month, a sheet shows the locked quote: period, ZNS, USD, token price, and the balance after the debit. Actions: confirm with ZNS, upgrade to Premium, pay this month by card. Cancel leaves the data closed and does not start the camera.
3. **Then the usual check.** Confirm continues into face, plus the master password when the Zelf ID has one. The server debits once and then returns the secrets. A retry of that confirm does not debit again.
4. **Receipt.** The history gains a row: `Monthly access · October 2026 · 49 ZNS`, with the locked USD, the token price, and the time. The same row is what support can read from the audit log.
5. **Short of ZNS.** The sheet stays up. It shows the shortfall, the daily reward when today's claim is still open, the Premium upgrade from `GET /api/zelf-ids/my-plan`, and the card option for the locked USD. The vault open stays closed. **Export wallet** and **Recover name** stay enabled.
6. **After the month is paid.** Later opens in that UTC month skip the sheet. Face and the 10-minute session behave as they do today.
7. **Upsell.** The sheet can say that Premium includes this access for the paid term. The price on the button comes from the live payment-options quote, not from a constant in the app.

## Proposed API shape

Proposed only. Place it on the existing Zelf ID router, in the same order the rest of v4 uses: **route → Joi middleware → controller → module**.

| Layer | Proposed home |
|---|---|
| Route | `Repositories/ZelfID/routes/zelf-ids.routes.js` |
| Joi middleware | `Repositories/ZelfID/middlewares/zelf-id-monthly-access.middleware.js` |
| Controller | `Repositories/ZelfID/controllers/zelf-id-monthly-access.controller.js` |
| Module | `Repositories/ZelfID/modules/zelf-id-monthly-access.module.js` |

Authentication matches the other protected Zelf ID calls: a session JWT from `POST /api/sessions`.

| Method and path | Role |
|---|---|
| `GET /api/zelf-ids/monthly-access` | Status for `tagName` and `domain`: plan, period, whether a charge is due, spendable balance, and paid history. |
| `GET /api/zelf-ids/monthly-access/quote` | Build and sign the quote for the current UTC period. No debit. |
| `POST /api/zelf-ids/monthly-access/confirm` | Accept the signed `token`, debit once, mark the period paid. |

A triggering decrypt on an unpaid Free month does not return secrets until confirm has paid that period, or the call is one of the exempt recovery actions. The client should quote and show the sheet before starting the camera.

### Record

One monthly-access record per Zelf ID per period. The natural idempotency key is `monthly-access:{zelfName}:{periodKey}`.

```json
{
  "zelfName": "myname.zelf",
  "periodKey": "2026-10",
  "status": "paid",
  "settlement": "zns",
  "amountZns": 49,
  "amountUsd": "2.4166666667",
  "tokenPriceUsd": 0.05,
  "premiumYearlyUsd": 29,
  "floorUsd": 0.1,
  "trigger": "retrieve",
  "chargedAt": "2026-10-25T16:00:00.000Z"
}
```

`amountZns` and the USD fields in that example are the illustration from the current $29 and $0.05 snapshot. A real record stores the figures locked in that period's quote.

`status` is `quoted` or `paid`. A Premium or Unlimited name does not need a debit row: the status call returns `exempt` with `reason` `premium` or `unlimited`. `settlement` is `zns` or `card` when a card path exists.

A second confirm for the same key returns the paid record and does not increase the committed balance. Two devices confirming the same period resolve to one debit.

### Audit log

Append-only, one row per attempt:

| Field | Example |
|---|---|
| `zelfName`, `periodKey` | `myname.zelf`, `2026-10` |
| `event` | `quoted`, `paid`, `idempotent_replay`, `insufficient_zns`, `exempt` |
| `amountZns`, `amountUsd`, `tokenPriceUsd` | Locked quote figures |
| `trigger` | `retrieve`, `decrypt`, `wallet-decrypt` |
| `at` | ISO-8601 UTC |

### Admin configuration

No new price list, and no amount in the client.

| Input | Where it lives today |
|---|---|
| One-year Premium USD | License `tags.payment.planPricing.premium`, duration `"1"` |
| ZNS price | Server token price, default $0.05 |
| Floor | Monthly active-user amount, default $0.10 |
| Rounding | Same whole-ZNS rule as extra slots |
| Quote lifetime | 2 hours, same as payment quotes |

A later license field could scale the monthly USD. The default does not need it.

### Settlement

**Recommendation for a first version:** debit the same spendable balance extra slots use (on-chain ZNS minus ZNS already committed), and record the monthly charge there. The balance the app already shows is then the balance that pays the fee, and the debit is idempotent per period.

An on-chain transfer of that ZNS to a treasury is an alternative if finance wants the tokens to leave the wallet. That choice is an [open question](#open-questions). It should keep the same signed quote and the same once-per-period rule.

## Premium and Unlimited: token options

Design only. No option here is selected. Paid plans stay exempt from the Free fee either way.

### 1. ZNS discount on renewal

At renewal, convert spendable ZNS into a USD credit on the normal license quote, locked in `signedDataPrice` like upgrade credit.

- Fits the checkout that already exists.
- Needs a cap so a large balance cannot zero a high Unlimited price by accident.
- Still needs a rule for whether the ZNS is committed in the slot ledger or transferred.

### 2. Pay the subscription in ZNS

Quote the full Premium or Unlimited term in ZNS with the same whole-token rounding, lock it for 2 hours, and settle from the ZNS balance instead of Stripe or crypto.

- One payment story for Free access and paid terms.
- Fits one-off Zelf ID checkout better than a store subscription, which already has its own receipt.
- The quote has to absorb token-price movement inside the 2-hour lock, the same way crypto quotes do.

### 3. ZNS above the plan, or above a high liveness quota

Premium can already buy extra slots past 100 passwords and 20 2FA accounts. Unlimited has no cap, so slots are not a token sink for it.

A second sink: after a high number of liveness opens in a month, further opens cost ZNS. The billing disclosure already has an included-decrypts figure (default 10). That number is a disclosure default, not a proposed Free quota. Any paid-plan threshold should sit well above ordinary use.

- Gives Unlimited a token use without changing the cash price.
- Easy to feel like a surcharge on people who already pay for the year.
- The threshold is a product choice, not something to copy from the Free fee.

## Open questions

For Miguel and the CEO:

1. **Short ZNS balance.** Confirm or replace the recommendation: block the vault open, offer Premium or card for the locked USD, refuse a negative balance, and keep wallet export and lease recovery available.
2. **Wallet unlock versus export.** Confirm that unlocking the wallet for use triggers the fee, and that a dedicated export of the owner's funds stays exempt and does not open Zelf Keys.
3. **Which face checks count.** Confirm that only decryption and wallet unlock trigger, and that store, delete, password change, and the daily reward stay exempt even though they use face.
4. **Short names.** Confirm that a Free name of 1–5 characters, which cannot buy Premium, uses the license's one-year Premium price for names that can.
5. **Several Free names.** Confirm the fee is per Zelf ID per month, with no account-level cap.
6. **Settlement.** Ledger debit shared with extra slots, or an on-chain transfer to a treasury?
7. **Card month.** Is a one-month card payment of the locked USD in scope for the first version, and which existing checkout should host it?
8. **Slots before the fee.** Confirm that a slot purchase is allowed while the month is unpaid, as long as the sheet warns that the remaining balance may not cover access.
9. **Lapse.** Confirm the first triggering open after a Premium or Unlimited term ends is charged, including terms that ended by coupon or whitelist.
10. **Legacy key entitlements** that are not free, premium, or unlimited. Should those names stay in scope while the consumer plan reads as Free?
11. **Paid-plan ZNS.** If any of the three options should be explored next, which one? None is committed.
12. **Quiet months.** Confirm a name that never opens data that month is never charged, even if they claim the daily reward. The recommendation is yes: the claim is exempt, and the fee waits for a triggering open.
