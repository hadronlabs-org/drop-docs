# Onboarding from native staking

> At the moment of writing, LSM is only available on Cosmos Hub.

Liquidity Staking Module (LSM) allows users to transfer their staked assets from one address to another without unstaking them. 
To learn more about it, visit the repository: https://github.com/iqlusioninc/liquidity-staking-module.

To achieve that, LSM mints special tokens that represent staked assets ownership. 
One can "tokenize" their staked assets and by sending them transfer an ownership to other user or protocol. 
These tokens are called "LSM shares" below for simplicity.

Each LSM share is represented by a unique denom. 
It means that one can send a half of the share to someone but two different shares aren't fungible with each other.

Drop can accept such shares and mint dASSET based on them. 
I.e., if one has already natively staked tokens (delegated to a validator), they can tokenize their shares, IBC transfer them to Neutron and "stake" with Drop the same way as ASSET itself. 
Under the hood it means that the ownership over those staked assets is transferred to Drop protocol and user gets respective amount of dASSET in exchange.

## Tokenized share creation

The first action described here is a general tokenized creation. An example of the message:

```json
{
  "@type": "/cosmos.staking.v1beta1.MsgTokenizeShares",
  "delegator_address": "cosmos_delegator_address",
  "validator_address": "cosmosvaloper_validator_address",
  "amount": {
    "denom": "denom",
    "amount": "1234"
  },
  "tokenized_share_owner": "cosmos_tokenized_share_owner"
}
```

Where:

- `cosmos_delegator_address` is an address of the user that currently has staked assets
- `validator_address` is the address of validator assets are delegated to
- `tokenized_share_owner` is the address which will be getting rewards. 
Regardless of the current owner of tokenized share tokens, the rewards will be distributed to the address specified here. 
It's useful for example when assets are IBC transferred and previous owner still gets rewards instead of IBC module.

In order to reveal how many tokens the user have staked use [this](https://cosmos-lcd.quickapi.com/swagger/#/Query/DelegatorDelegations) query.

Once the operation above is performed, a new denom is created and the user gets new minted tokens that represent staked tokens. 
The denom has the following structure: `cosmosvaloper1**************************************/123`, so it consists of the validator address and an index of this LSM share. 

##  Drop LSM staking restrictions

That tokenized share can be staked with Drop only if it was produced by validatator from the Drop _validator list_. 
To get this list you need to do the following:

- Query `core` contract config:
  ```json
  {
    "config": {}
  }
  ```

- Get validator set contract from the result via ".validators_set_contract" field

- Query validators from validator set contract with the following query:
  ```json
  {
    "validators": {}
  }
  ```
- The example of a result:
  ```json
  {
    "data": [
      {
        "valoper_address": "cosmosvaloper1gh4vzw9wsfgl2h37qqnetet0m4wrzm7v7x3j9x",
        "weight": 10,
        "last_processed_remote_height": null,
        "last_processed_local_height": null,
        "last_validated_height": null,
        "last_commission_in_range": null,
        "uptime": "0",
        "tombstone": false,
        "jailed_number": null,
        "init_proposal": null,
        "total_passed_proposals": 0,
        "total_voted_proposals": 0
      },
      {
        "valoper_address": "cosmosvaloper1rndyjagfg0nsedl2uy5n92vssn8aj5n67t0nfx",
        "weight": 10,
        "last_processed_remote_height": null,
        "last_processed_local_height": null,
        "last_validated_height": null,
        "last_commission_in_range": null,
        "uptime": "0",
        "tombstone": false,
        "jailed_number": null,
        "init_proposal": null,
        "total_passed_proposals": 0,
        "total_voted_proposals": 0
      }
    ]
  }
  ```

## IBC transfer and staking LSM share with Drop

After one created a tokenized share on Cosmos Hub, it can be staked with Drop. 
As well as with ATOM, transfer and stake can be done in one transaction (thankfully to IBC hooks):

```json
{
  "type": "cosmos-sdk/MsgTransfer",
  "value": {
    "memo": "{\"wasm\":{\"contract\":\"neutron1_core_contract\",\"msg\":{\"bond\":{}}}}",
    "receiver": "neutron1_core_contract",
    "sender": "cosmos1_sender",
    "source_channel": "channel-123",
    "source_port": "transfer",
    "timeout_height": "0",
    "timeout_timestamp": "12345678901234567890",
    "token": {
      "amount": "1234",
      "denom": "cosmosvaloper1**************************************/123"
    }
  }
}
```

> Unfortunately, due to the nature of LSM shares, one cannot do LSM share creation, transfer and staking with Drop in one transaction.
> The reason of it is that for the second part (transfer/stake) we need a denom of the LSM share.
> This denom contains the unique index of the LSM share that cannot be predicted.
> Thus, to convert native staking to liquid staking, we need at least 2 transactions.

Where:

- `source_channel` is the Cosmos Hub-Neutron channel (you can use "relayers" [page](https://www.mintscan.io/cosmos/relayers) on Mintscan to get it)
- `timeout_timestamp` is an IBC timeout. You can use 10 minutes by default and the following JavaScript snippet to calculate it:
  ```js
  Math.floor(Date.now() / 1000) * 1e9 + 10 * 60 * 1e9;
  ```

Alternatively, one can split the operations in two.
In this case, it will be regular IBC transfer for the LSM share, and regular staking with Drop.
LSM share staking process is the very same as [ASSET staking](overview#staking), but the coin attached to the message is an LSM share IBC-transferred to Neutron.