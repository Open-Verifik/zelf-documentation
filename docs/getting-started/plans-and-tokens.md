---
title: Plans and tokens
description: Planned specification of Zelf account plans and the token model for extra password and 2FA slots on the Free plan.
keywords: [zelf plans, zelf tokens, free plan, premium, unlimited, zelf keys, zauth, pricing]
image: /img/social-card.svg
sidebar_label: Plans and tokens
---

# Plans and tokens

:::warning Planned — not yet live

This page is a specification written before implementation. Plan names, yearly prices, and included limits match the public pricing table on [zelf.world/pricing](https://zelf.world/pricing). Spending tokens to unlock extra slots on the Free plan is proposed here and is not available in the product yet.

:::

Zelf account plans cover passwords (zKeys), two-factor accounts (zAuth), and wallet features (zWallet). The prices below are the yearly billing prices from that table.

Zelf ID name leases use a separate price list on the [license object](/docs/api/licenses/license-object). This page does not change those prices.

## Plans

<div class="plans-table-wrap plans-table-wrap--compare">
<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Free</th>
      <th>Premium</th>
      <th>Unlimited</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Payment plan</td>
      <td>Proof of Humanity (weekly)</td>
      <td>$2.41/month, charged yearly ($28.92/yr)</td>
      <td>$8.25/month, charged yearly ($99/yr)</td>
    </tr>
    <tr>
      <td>Annual tokens</td>
      <td>Earned from the daily check-in. Amount: TBD</td>
      <td>580 per year</td>
      <td>1,980 per year</td>
    </tr>
    <tr>
      <td>Passwords (zKeys)</td>
      <td>Up to 5</td>
      <td>Up to 100</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>2FA accounts (zAuth)</td>
      <td>Up to 3</td>
      <td>Up to 20</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <td>Platforms</td>
      <td>Web Extension, iOS, and Android</td>
      <td>Web Extension, iOS, and Android</td>
      <td>Web Extension, iOS, and Android</td>
    </tr>
    <tr>
      <td>Secure password generation</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <td>Save and autofill credentials</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <td>Protect personal notes and credit cards</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <td>Biometric wallet</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <td>Private key manager</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <td>Recovery service</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
  </tbody>
</table>
</div>

Free-plan tokens come from the daily check-in. Premium includes 580 tokens per year. Unlimited includes 1,980 tokens per year. The number of tokens awarded for each check-in is TBD.

## Token value

One Zelf token equals **$0.05 USD**.

That figure is the presale price. It is also the token value implied by both paid plans: $28.92 / 580 and $99 / 1,980 both come out to about $0.05 per token.

In the API today this value is set in two places:

- The presale price is hard-coded as `PRESALE_CONFIG.tokenPrice` in `Repositories/PreSale/modules/pre-sale.module.js`.
- A separate config value, `rewardPrice`, in `Core/config.js` reads the `REWARD_PRICE` environment variable. The default is `0.05`.

Those two settings should be read from a single configurable source. The location of that source is TBD. The extra-slot prices in the next section are defined against this shared value.

## Extra slots on the Free plan

This section is planned and is not yet live.

A Free account includes up to 5 passwords and up to 3 2FA accounts. Adding a 6th password, or a 4th 2FA account, requires spending tokens to unlock an extra slot. Until that slot is unlocked, the item cannot be added.

### Premium as the price floor

Premium includes 112 more slots than Free:

- 95 more passwords (100 − 5)
- 17 more 2FA accounts (20 − 3)

Those 112 slots are part of the Premium year, which costs $28.92. That is about **$0.26 per slot per year**.

A token-unlocked slot costs more than that, so Premium stays the better deal for someone who needs many extra slots. At the prices below, a password slot is $0.50 per year and a 2FA slot is $1.00 per year. Both sit above about $0.26.

### Proposed slot prices

The prices below use the current token value of $0.05.

<div class="plans-table-wrap">
<table>
  <thead>
    <tr>
      <th>Extra slot</th>
      <th>Tokens per year</th>
      <th>USD per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Password</td>
      <td>10</td>
      <td>$0.50</td>
    </tr>
    <tr>
      <td>2FA account</td>
      <td>20</td>
      <td>$1.00</td>
    </tr>
  </tbody>
</table>
</div>

Each slot lasts 12 months. It is a rental. When the 12 months end, the slot ends with them, and keeping it means paying for another year. Because the charge repeats every year, and each year costs more per slot than Premium, rented slots stay more expensive than upgrading over time.

The dollar amount is computed from the configured token value:

`USD per slot per year = tokens for that slot × token value`

At $0.05, a password slot is 10 × $0.05 = $0.50, and a 2FA slot is 20 × $0.05 = $1.00. Changing the configured token value updates these dollar prices.

### Worked example

A Free user already stores 5 passwords and wants 3 more for the next 12 months.

1. Those 3 passwords are past the included limit, so they need 3 extra password slots.
2. Tokens: 3 × 10 = 30 tokens.
3. USD: 30 × $0.05 = $1.50 for those 12 months.

At the end of the 12 months the 3 slots end. What happens to the passwords stored in them is TBD. See [Open questions](#open-questions).

### Crossover with Premium

About **58 extra password slots per year** costs about the same as Premium.

- Tokens: 58 × 10 = 580 tokens.
- USD: 580 × $0.05 = $29.00.
- Premium for the same year is $28.92.

580 tokens is also the yearly Premium allotment. Around this volume, Premium is the better deal: the plan includes 100 passwords, 20 2FA accounts, and 580 tokens for $28.92. The token slots only rent passwords, and the rental is paid again the next year.

### Daily check-in

Free-plan tokens come from the daily check-in. The reward amount is **TBD**.

## Open questions

Each item below is unresolved.

- How many tokens a daily check-in awards: **TBD**.
- What happens to an item stored in a slot when the 12-month rental expires: **TBD**.
- Whether tokens included with Premium or Unlimited can buy slots beyond that plan's limits: **TBD**.
