---
title: "Proposal: Monthly ZNS access for Free accounts"
description: Design proposal for a monthly ZNS fee on Free Zelf ID accounts, charged on the first liveness decryption of a calendar month, with one grace open when the ZNS balance is short. The API contract is on the Monthly access page.
keywords: [proposal, monthly zns access, free plan, liveness, zelf keys, premium equivalent, daily reward]
image: /img/social-card.png
sidebar_label: "Proposal: Monthly ZNS access"
---

# Proposal: Monthly ZNS access for Free accounts

:::info Design proposal

This page is the product design. The extension contract is [Monthly access](/docs/api/zelf-ids/monthly-access). That API is implemented in [zelf-online-version#211](https://github.com/ZelfOfficial/zelf-online-version/pull/211) and is not live yet. It stays behind a server switch until the switch is turned on. Prices and limits below follow [Plans](/docs/api/zelf-ids/plans). The client must use the quote from the API.

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
| How many charges | One debit per Zelf ID per period. A grace open is not a debit. After the period is paid, later triggering opens are covered. |
| Amount | One-year Premium USD from the license, divided by 12, converted to whole ZNS at the server token price, using the same rounding as extra slots. Floor: the configured monthly active-user amount (default $0.10). |
| Illustration | $29 / 12 at $0.05 per ZNS rounds up to **49 ZNS**. The live quote replaces this figure. |
| Short balance | **Decided 2026-10-25.** One grace open for the month. The fee stays unpaid. Further triggering opens are blocked until the month is paid. No debt. If that grace stays unpaid, the next month offers no grace and the first triggering open requires payment. Wallet export and lease recovery stay available and do not use the grace. See [Decisions](#decisions). |
| Daily reward | Exempt. It is how the balance is earned. Confirmed Free names use the mainnet wheel: 2, 4, …, 24 ZNS a day (mean 13). |
| Quote | Signed, locked for 2 hours, same idea as [Payment Options](/docs/api/zelf-ids/payment-options). |

## When the fee is charged

Charge on the **first liveness-based decryption of the billing month** that opens Zelf Keys data or unlocks the wallet for use.

A person who does not open their data that month is not charged. That matches monthly active-user billing: the cost appears when the account is active, and it does not appear in a quiet month.

When that first open pays the fee, the payment covers every later triggering open in that same period, including new visits and new 10-minute verified sessions.

When the balance is short, that first open is the one grace decrypt for the month. It leaves the fee unpaid. Later triggering opens in that month stay closed until the month is paid. See [Insufficient ZNS](#insufficient-zns).

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

Miguel decided this on **2026-10-25**. See [Decisions](#decisions). There is no negative balance. The unpaid fee for a grace month is not carried into the next month as debt.

### This month

The check runs on the first triggering open of the UTC month, after the signed quote says how much ZNS the month costs.

| Situation | What happens |
|---|---|
| Spendable ZNS covers the quote | Debit once. Status becomes `paid`. Later triggering opens in that month proceed. |
| Spendable ZNS is short, and this month may use grace | The open succeeds. Status becomes `grace`. The fee stays unpaid, and no ZNS is debited. The sheet says this is the free pass for the month and shows the ZNS and USD still needed. |
| Status is already `grace`, and the fee is still unpaid | The open is blocked. The sheet offers three ways to continue: upgrade to Premium, pay the locked USD on the current signed quote by card, or get more ZNS (for example the daily reward) and then pay the month. |
| The person pays later in that same month | A ZNS confirm or a card payment of the signed quote converts `grace` to `paid`. The block lifts. Later triggering opens in the month proceed. |
| The person upgrades to an active Premium or Unlimited term | The Free fee stops applying, so the block lifts for as long as that term is active. |
| Wallet export or [lease recovery](/docs/api/zelf-ids/lease-recovery) | Always available. These calls do not create a grace record, do not consume the grace open, and do not open the Zelf Keys vault. |

A second device that opens at the same moment as the grace open resolves to the same grace record. It does not grant a second pass. Paying is idempotent: a second confirm of a month that is already `paid` returns that record and does not debit again.

The card amount is the `amountUsd` on the signed quote the person confirms. That quote follows the two-hour lock in [Amount](#amount). A payment after the quote expires asks for a new quote first. The new quote is what gets stored when status becomes `paid`.

### The following month

**Miguel, 2026-10-25.** See [Decisions](#decisions).

Grace resets only when the previous UTC month was `paid`, or when that month had no triggering use (no monthly-access record).

When the previous month is still `grace`, the new month offers no grace. The first triggering open requires payment. If the balance covers the new month's quote, that open debits it and the status is `paid`. If the balance is short, the open is blocked and the same three options appear: Premium, card for this month's locked USD, or more ZNS. The unpaid grace fee from the previous month is not added to this quote, and the balance does not go below zero.

| Previous month | This month, balance short on the first triggering open |
|---|---|
| `paid` | One grace open. Status becomes `grace`. |
| No triggering use | One grace open. Status becomes `grace`. |
| `grace`, then paid before the month ended | One grace open. Status becomes `grace`. |
| `grace`, and the fee was never paid | No grace. The first open is blocked until this month is paid. |

## Which operations count

Face-liveness is used across the product. **Only a decryption that opens stored secrets, or unlocks the wallet for use, triggers the fee.** One trigger in the period covers the rest. The daily reward claim is exempt because that claim is how the ZNS balance is earned.

| Operation | Today | This proposal |
|---|---|---|
| Zelf Keys retrieve (password, 2FA, note, card) | Face | **Triggers** |
| Zelf ID decrypt | Face | **Triggers** |
| Wallet decrypt for use (`POST /api/my-wallets/decrypt`) | Face | **Triggers** |
| Tags decrypt and ZNS v2 decrypt, when they open a Free name | Face | **Triggers** |
| Daily reward (`POST /api/rewards/daily`) | Face, plus master password when the Zelf ID has one | **Exempt** |
| Wallet export / move-own-funds, and lease recovery | Face on recovery | **Exempt.** Always available. Never counts as the grace open. |
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
| Month has no record yet, inside a window opened last month | The first triggering open of the new period still quotes. The window does not carry last month's payment forward. |
| Month is `grace` and still unpaid, inside the 10-minute window | The window does not grant another vault open. Further triggering opens stay blocked until the month is paid. |
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

So a Free name that claims on most days covers the illustrated month even on a run of the smallest segment. A single visit does not. A person who returns after several quiet months, without claims in between, has no new reward from those quiet months. Their earlier unspent balance might cover the open. When it does not, the first open of an eligible month is the [grace decrypt](#insufficient-zns). The daily reward stays available after that, so they can earn ZNS and pay the month before the next open.

The claim itself must stay exempt. Charging the fee on the claim would take ZNS from the action that mints it, and a blocked reward would remove the way to pay a grace month.

Coverage moves if the token price moves. At the $29 illustration, a 28-day month of 2 ZNS claims (56 ZNS) covers the fee while the token price stays at or above about **$0.043**. The default $0.05 is above that line. The live quote is what the app shows, not this table.

## UX

The extension and the app should make the month visible before the camera starts, so a person who declines does not begin a liveness check.

1. **Balance.** The vault shows spendable ZNS (on-chain minus tokens already committed) and the current period: `Not due`, `Grace`, `Paid`, or `Included with Premium` / `Included with Unlimited`.
2. **Enough ZNS.** On the first triggering open of an unpaid Free month, a sheet shows the locked quote: period, ZNS, USD, token price, and the balance after the debit. Confirm pays the month and continues into face, plus the master password when the Zelf ID has one. Cancel leaves the data closed and does not start the camera. A retry of that confirm does not debit again.
3. **Grace open.** When the balance is short and grace is available, the sheet says this open is the free pass for the month. It shows the ZNS still needed, the USD on the quote, and the current balance. The open then succeeds. The month stays unpaid.
4. **Block screen.** After that grace open, every later triggering open while the month is unpaid shows a block screen with three options: upgrade to Premium, pay the locked USD by card, or get more ZNS (the daily reward, when today's claim is still open). The vault stays closed. When a ZNS or card payment converts the month to `paid`, the block lifts.
5. **Export and recovery.** **Export wallet** and **Recover name** stay enabled on the grace sheet and on the block screen. They do not use the grace pass.
6. **Receipt.** A paid month adds a history row: `Monthly access · October 2026 · 49 ZNS`, with the locked USD, the token price, and the time. A grace month adds `Monthly access · October 2026 · grace`, with the ZNS that were still needed. The same rows are what support can read from the audit log.
7. **After the month is paid.** Later opens in that UTC month skip the sheet. Face and the 10-minute session behave as they do today.
8. **Upsell.** The grace sheet and the block screen can say that Premium includes this access for the paid term. The price on the button comes from the live payment-options quote, not from a constant in the app.

## Proposed API shape

The extension contract is [Monthly access](/docs/api/zelf-ids/monthly-access). The notes below are the original sketch of the same route, Joi middleware, controller, and module.

| Layer | Proposed home |
|---|---|
| Route | `Repositories/ZelfID/routes/zelf-ids.routes.js` |
| Joi middleware | `Repositories/ZelfID/middlewares/zelf-id-monthly-access.middleware.js` |
| Controller | `Repositories/ZelfID/controllers/zelf-id-monthly-access.controller.js` |
| Module | `Repositories/ZelfID/modules/zelf-id-monthly-access.module.js` |

Authentication matches the other protected Zelf ID calls: a session JWT from `POST /api/sessions`.

| Method and path | Role |
|---|---|
| `GET /api/zelf-ids/monthly-access` | Status for `tagName` and `domain`: plan, period, `none` / `grace` / `paid` / `exempt`, whether another triggering open is allowed, spendable balance, and history. |
| `GET /api/zelf-ids/monthly-access/quote` | Build and sign the quote for the current UTC period. No debit. |
| `POST /api/zelf-ids/monthly-access/confirm` | Accept the signed `token`, debit once, and set the period to `paid`. A period that was `grace` converts to `paid`. |

On a Free month with no record, a triggering decrypt with a short balance returns the secrets once and writes `grace`. A later triggering decrypt while status is `grace` returns no secrets until confirm has set `paid`, unless the call is wallet export or lease recovery. The client shows the grace warning, or the block screen, before starting the camera.

### Record

One monthly-access record per Zelf ID per period. The natural idempotency key is `monthly-access:{zelfName}:{periodKey}`.

```json
{
  "zelfName": "myname.zelf",
  "periodKey": "2026-10",
  "status": "grace",
  "amountZns": 49,
  "amountUsd": "2.4166666667",
  "tokenPriceUsd": 0.05,
  "premiumYearlyUsd": 29,
  "floorUsd": 0.1,
  "trigger": "retrieve",
  "graceAt": "2026-10-25T16:00:00.000Z"
}
```

`amountZns` and the USD fields in that example are the illustration from the current $29 and $0.05 snapshot. A real record stores the quote shown for that period.

`status` on a stored row is `grace` or `paid`. No row for that Zelf ID and period means `none`: the month has had no triggering open. A Premium or Unlimited name does not need a debit row: the status call returns `exempt` with `reason` `premium` or `unlimited`.

A grace row has no `settlement` and no `chargedAt`. When the person pays, the same row becomes:

| Field | After payment |
|---|---|
| `status` | `paid` |
| `settlement` | `zns` or `card` |
| `chargedAt` | Time of the successful confirm |
| `amountZns`, `amountUsd`, `tokenPriceUsd` | The signed quote accepted at payment time |

Writing the grace row is idempotent. A second attempt in the same period returns the existing row and does not grant another grace open. A second confirm after `paid` returns the paid row and does not increase the committed balance. Two devices that hit the same period resolve to one row.

### Audit log

Append-only, one row per attempt:

| Field | Example |
|---|---|
| `zelfName`, `periodKey` | `myname.zelf`, `2026-10` |
| `event` | `quoted`, `grace_opened`, `grace_blocked`, `paid`, `idempotent_replay`, `exempt` |
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

## Decisions

### Short ZNS balance

**Miguel, 2026-10-25.** When a Free Zelf ID opens its vault for the first time in a UTC month and the spendable ZNS balance does not cover the monthly fee:

- That open succeeds. The month is stored as `grace`, and the fee stays unpaid.
- Any further triggering open in that same month, while the fee is still unpaid, is blocked.
- The block screen offers upgrade to Premium, pay the locked USD on the signed quote by card, or get more ZNS (for example the daily reward). After the month is paid, those opens continue.
- Paying in ZNS or by card converts `grace` to `paid` and lifts the block. An upgrade to an active Premium or Unlimited term lifts the block because the Free fee no longer applies.
- The balance does not go negative. The unpaid grace fee is not carried forward as debt.
- Wallet export and lease recovery stay available the whole time. They never count as the grace open, and they do not open Zelf Keys.

**Miguel, 2026-10-25.** The following month does not offer grace when the previous month's grace went unpaid. The first triggering open of that new month requires payment. Detail is in [The following month](#the-following-month).

## Open questions

For Miguel and the CEO. The short-balance choice and the next-month grace rule are recorded under [Decisions](#decisions). The questions below are the previous questions 2 through 12, renumbered 1 through 11.

The API implementation is proceeding with the recommended defaults in these questions.

1. **Wallet unlock versus export.** Confirm that unlocking the wallet for use triggers the fee, and that a dedicated export of the owner's funds stays exempt and does not open Zelf Keys.
2. **Which face checks count.** Confirm that only decryption and wallet unlock trigger, and that store, delete, password change, and the daily reward stay exempt even though they use face.
3. **Short names.** Confirm that a Free name of 1–5 characters, which cannot buy Premium, uses the license's one-year Premium price for names that can.
4. **Several Free names.** Confirm the fee is per Zelf ID per month, with no account-level cap.
5. **Settlement.** Ledger debit shared with extra slots, or an on-chain transfer to a treasury?
6. **Card month.** Is a one-month card payment of the locked USD in scope for the first version, and which existing checkout should host it?
7. **Slots before the fee.** Confirm that a slot purchase is allowed while the month is unpaid, as long as the sheet warns that the remaining balance may not cover access.
8. **Lapse.** Confirm the first triggering open after a Premium or Unlimited term ends is charged, including terms that ended by coupon or whitelist.
9. **Legacy key entitlements** that are not free, premium, or unlimited. Should those names stay in scope while the consumer plan reads as Free?
10. **Paid-plan ZNS.** If any of the three options should be explored next, which one? None is committed.
11. **Quiet months.** Confirm a name that never opens data that month is never charged, even if they claim the daily reward. The recommendation is yes: the claim is exempt, and the fee waits for a triggering open.
