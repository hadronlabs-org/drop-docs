# Droplets Program

## Overview

Drop Protocol will have no token for the first several months of its life.
During this period, the [Droplets Program](https://medium.com/drop-protocol/introducing-the-droplets-program-the-ultimate-guide-to-earning-drop-d80fd58c6a3e) will be active.
The Droplets Program aims to:

* Coordinate market participants to maximize the economic welfare of the Interchain
* Measure the value of a participant’s contribution to the protocol’s success

Phase One of the Droplets Program originally allocated 100,000,000 DROP tokens—the governance token of Drop Protocol—to participants. Phase Two, now live, adds an additional 50,000,000 DROP tokens. 

This brings the total program allocation to 150,000,000 DROP tokens, distributed as follows:

- Phase One: 100,000,000 DROP
- Phase Two: 50,000,000 DROP

When the program ends, Droplets holders will receive Drop tokens and become the first members of the Drop DAO.

## How to earn Droplets

By design, the Droplets Program is simple to follow and easy to participate in. There are three ways to earn Droplets:

1. **Liquid Stake with Drop**: Stake assets like ATOM and TIA to receive dAssets. Earn 1 Droplet per day for each dollar of dAssets you hold. dAssets are secure, liquid versions of staked positions, enabling users to earn auto-compounded staking rewards, exit their position without waiting weeks to unstake, and deploy their assets across DeFi to earn additional yield. **Important note**: Daily Droplets earned are based on the value of the asset on that day, not when the asset was first liquid staked.
2. **Use dAssets in the Drop Ecosystem**: Multiply the Droplets you earn and generate additional DeFi rewards by using your dAssets in Drop ecosystem apps. Example: John deploys $10 of dATOM/ATOM liquidity into Astroport with a 5x multiplier for ten days, earning 500 Droplets plus any DeFi yield the DEX provides. This is 400 more than the 100 Droplets he’d gain by holding dATOM for 10 days.
3. **Refer Friends**: Generate a unique referral code at [droplets.drop.money](https://droplets.drop.money), share your referral code with others, and earn 25% of the Droplets your referrals earn, plus 12.5% of the Droplets anyone your referral refers! These are bonuses and do not subtract from their earnings. Example: You refer Bob and he earns 100 Droplets. Bob refers Tina, who also earns 100 Droplets. You earn 25 Droplets from Bob and 12.5 Droplets from Tina. These are _bonus_ Droplets and do not subtract from their earnings — Bob and Tina both still earn 100 Droplets each.


Collaborating with ecosystem partners to create flywheels that unlock frozen capital within the Interchain is central to Drop’s mission. As such, **program participants who use their dAssets in Drop ecosystem apps will earn more Droplets through generous multipliers compared to those who only liquid stake**.


## Droplet Program structure


The Droplets Program will last six months or until the DROP Token Generation Event (TGE) (whichever is sooner), and is divided into Epochs, which are roughly 1-4 weeks long. Each Epoch introduces new opportunities to earn Droplets, which are additive, meaning Droplets are not reset between Epochs. Rules and guidelines for new Epochs will not retroactively impact Droplets earned in previous Epochs, and new protocols and integrations can be introduced within Epochs.

## Droplet multipliers

| Network | Project   | Description                                                                                                   | Support Time | Multiplier |
|---------|-----------|---------------------------------------------------------------------------------------------------------------|--------------|------------|
| Neutron | Astroport | Provide liquidity on the dATOM/NTRN pool: earn 50x Droplet multiplier + potential trading fees and incentives | Epoch 1      | 50x        |
| Neutron | Astroport | Provide liquidity on the dATOM/USDC pool: earn 50x Droplet multiplier + potential trading fees and incentives | Epoch 1      | 50x        |
| Neutron | Astroport | Provide liquidity on the dATOM/ATOM pool: earn 5x Droplet multiplier + potential trading fees and incentives  | Epoch 1      | 50x        |
| Neutron | Apollo    | Deposit Astroport dATOM/NTRN LP positions into Apollo auto-compounding vaults: earn 50x multiplier            | Epoch 1      | 50x        |
| Neutron | Apollo    | Deposit Astroport dATOM/USDC LP positions into Apollo auto-compounding vaults: earn 50x multiplier            | Epoch 1      | 50x        |
| Neutron | Apollo    | Deposit Astroport dATOM/ATOM LP positions into Apollo auto-compounding vaults: earn 5x multiplier             | Epoch 1      | 5x         |
| Neutron | Levana    | Provide liquidity in Levana’s perpetual market: dATOM xLP earns 50x multiplier                                | Epoch 1      | 50x        |
| Neutron | Levana    | Provide liquidity in Levana’s perpetual market: dATOM LP earns 5x multiplier                                  | Epoch 1      | 5x         |

For chains and apps interested in participating in future Epochs to attract new users and capital, please reach out via DM on Twitter/X @dropdotmoney.


## Airdrop details

The Droplets Program is open to participants worldwide, outside of residents of the United States and other restricted areas.
For a list of prohibited jurisdictions, please see [Drop’s Terms and Conditions](https://drive.google.com/file/d/19yLtMHdKzt_yM47xAp8LVT3rgxhPlq_8/view?usp=sharing).

Participants in the Droplet Program will receive a DROP airdrop designed to kickstart DAO governance.
The airdrop is geared toward long-term and power users of the protocol rather than airdrop farmers.
Smaller Droplets holders will receive their full airdrop immediately upon distribution, while up to 50% of larger airdrops will vest linearly over six months.
Tokens that are locked will retain full voting power in the Drop DAO while vesting, and the liquid portion of the airdrop will be transferable immediately upon receipt.

100,000,000 DROP (10% of the total token supply) will be distributed to Droplet holders as part of Droplets Program. All dAssets, including dATOM, dTIA, and any future dAssets listed on Drop, are eligible to receive Droplets from the day they launch.

## Tracking progress & exploring opportunities

The Droplets Program represents an exciting opportunity for those interested in getting involved in the Drop community early.
Users can visit [droplets.drop.money](https://droplets.drop.money) to liquid stake, explore opportunities across the ecosystem, and track their Droplets in real-time.

## Calculating Droplets

To calculate Droplets earned for each user, Drop uses a regular daily snapshot model.

Each day at a certain time, a script runs and does the following:

1. Takes a random block height of the last day
2. Runs a set of queries to calculate the Droplets for a given period (the script calculates the period between the previous snapshot and the current one)
3. Runs a script to build a referral network and applies referral bonuses
4. Updates all user Droplet balances accordingly

Droplet calculation formula:

$$
droplets = \\ \sum_{sources} source\_multiplier * dASSET\_balance * \\ dASSET\_exchange\_rate  * ASSET\_price * days\_held
$$

Where:
* `droplets` — the number of points received by the user per this period
* `source_multiplier` — the multiplier for a specific source (e.g. for providing liquidity on Astroport, a user can multiply the Droplets they earn)
* `dASSET_balance` — the number of dASSET tokens locked in a specific source
* `dASSET_exchange_rate` — the exchange rate on how many ASSET one dASSET represents
* `ASSET_price` — the market price of an underlying ASSET (e.g. ATOM for dATOM)
* `days_held` — time between the previous snapshot and the current one

## Droplet balance storage

To simplify integrations and Droplet balance discovery, Drop stores Droplet balances on-chain.
Droplets are stored as CW20 tokens because:

1. Droplets should not be sendable between users
2. It’s easier to batch-update balances with CW20

This enables:

1. Seamless integrations by adding the token to the proper registries
2. Third parties to query Droplet balances on-chain instead of using a custom API

## Referral links

The referral component of the Droplets Program allows users to refer friends to liquid stake with Drop by sharing a referral link with them. In return, those who refer others earn:

* 25% of the Droplets their referrals earn
* 12.5% of the Droplets anyone their referral refers

These are bonus Droplets and do not subtract from the referrals earnings.
Users can track how many Droplets they’ve earned from their referrals on [droplets.drop.money](https://droplets.drop.money).


To mitigate the potential for bot attacks and system gaming, users must login to Twitter/X and meet a few basic proof-of-personhood requirements to generate a Drop referral link.
Drop prevents receiving multiple referral links using a single Twitter/X account.
