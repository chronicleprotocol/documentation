---
sidebar_position: 3
description: Equity Feeds — customizable price feeds for blockchain tokens representing stocks and ETFs.
keywords: [Tokenized Equities, Tokenized Stocks, RWA Oracle, Trading Sessions, Corporate Actions, Data Feeds, Chronicle Products]
---

# Equity Feeds

## What Are Tokenized Equities?

Tokenized equities — also called tokenized stocks, or digital securities representing stock — are blockchain tokens that represent ownership of, or economic exposure to, traditional stocks and ETFs. These tokens are distinct financial instruments issued by token issuers, not the underlying equities themselves.

Chronicle's equity feeds deliver the **primary market price**: the calculated, theoretical value of the equity token, which may account for long-term total return adjustments, e.g. dividends or corporate actions.

## Equity Feeds
For each tokenized US stock, Chronicle publishes the price onchain. The feed is aware of market hours, holidays, early closes, halts, and freezes, and applies configurable logic for each of these — in addition to how it handles corporate actions. Users can see the price alongside these market status details on the [Chronicle Dashboard](https://chroniclelabs.org/dashboard/equity-feeds).

## Benefits

Trading hours for equities differ fundamentally from onchain markets, which run 24/7: U.S. equity markets are limited to a 6.5-hour regular trading session (09:30–16:00 ET), on top of which banking hours, weekends, and holidays further restrict when fresh reference prices are available.

Chronicle's equity feeds bridge this gap, enabling tokenized equities to integrate into onchain markets, by:

- **Providing continuous pricing:** a single feed spans regular, pre-market, post-market, and overnight sessions, as well as holidays and weekends, so lending, collateral, and trading use cases always have a price to build on;
- **Simplifying integration:** protocols consume one feed instead of managing multiple session-specific data sources;
- **Adapting to issuer needs:** feed behavior for off-hours, holidays, and corporate actions is configurable to match how each token issuer operates;
- **Calculating the primary market price:** returning the real-time, theoretical value of the tokenized equity, including issuer-defined multiplier adjustments for corporate actions.

## Built for Customization

Because token issuers can source data, handle off-hours, and manage corporate actions differently, Chronicle's tokenized equity feeds are configurable per client. Customers can define:

- which sources are used for calculating the price, and how they're aggregated;
- how the feed behaves during non-trading and non-banking hours;
- how the feed responds to corporate actions (splits, dividends, mergers, spin-offs).

## Data Sourcing

### Plug-and-Play Sources

- Every source connects through one adapter that normalizes it into a standard quote;
- Each feed defines its own aggregation method (e.g. median) and minimum quorum of sources required to publish a price.

## Trading Session Awareness

Equity feeds are aware of which trading session the underlying equity is in, and can be configured to behave differently in each.

| Session | Default US Hours (ET) |
| --- | --- |
| Overnight | 20:00 – 04:00 |
| Premarket | 04:00 – 09:30 |
| Regular Market Hours | 09:30 – 16:00 |
| Post-Market / After Hours | 16:00 – 20:00 |

Alongside the price, the Chronicle Dashboard surfaces this session metadata for each feed. Here's an example from the Chronicle Dashboard, for Bitget's tokenized Apple stock (rAAPL):

| Field | Example |
| --- | --- |
| Symbol | AAPL |
| Exchange | XNAS |
| Calendar timezone | America/New_York |
| Session | Off hours |
| Timestamp (UTC) | Nov 24, 2026, 12:29:36 |
| Record version | 1.0 |

Behavior on bank holidays and weekends — identified via an exchange calendar loaded at least 12 months ahead — is also configurable per feed, for example:

- **Report the last close price:** when the market is closed, the feed holds the last close price and pauses the staleness clock;
- **Use a 24/7 data source during non-trading hours:** the feed reports data from a data source that runs 24/7, e.g. an onchain order book like Hyperliquid.

<details>
<summary>Market Holidays Calendar Example</summary>

<div style={{textAlign: 'center'}}>
    <img
    src="/img/Products/Equities/holidaysCalendar.png"
    alt="Market Holidays Calendar Example"
    />
</div>

</details>

## Corporate Actions

Corporate actions — splits, reverse splits, dividends, mergers, and spin-offs — affect the relationship between a tokenized equity and its underlying asset. Chronicle supports several ways of handling these, giving customers control over how each feed responds:

### 1. Apply an Issuer Multiplier

- The feed publishes `Token price = Underlying equity price × Multiplier`;
- The multiplier is sourced from the token issuer — read directly from the token contract or supplied by the issuer — and refreshed on a set interval or whenever the issuer updates it;
- Small adjustments, e.g. dividends, are absorbed through gradual multiplier changes and don't require a freeze;
- Larger actions, e.g. splits and reverse splits, trigger a temporary freeze at the last valid token value while the issuer stages the new multiplier, lifted only once a continuity check passes.

### 2. Freeze and Publish the Unmultiplied Price

- The feed publishes the raw underlying equity price, with no issuer multiplier applied;
- Ahead of a corporate action, the feed freezes at the last valid pre-action price and pauses the staleness clock, then resumes with the post-action price once the action settles;
- Keeping the token's value continuous (for example, by rebasing token balances) is the issuer's responsibility, not the oracle's;
- Dividends aren't offset here: the published price drops on the ex-dividend date, mirroring the underlying stock.

## Available Feeds

You can check which equity feeds are currently live on the [Chronicle Dashboard](https://chroniclelabs.org/dashboard/equity-feeds).

:::info
Don't see the equity you need? Request a new feed using the [following form](https://form.typeform.com/to/mWnjjBxh). A member of the Chronicle team will get in touch with you.
:::
