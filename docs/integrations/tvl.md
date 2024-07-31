# Total Value Locked calculation

Total Value Locked (TVL) - Total amount of locked tokens in Drop Protocol.

Steps to get current TVL:

- Go to [celat.one](https://neutron.celat.one/neutron-1/) page, search for the core contract of your instance
  - [Examle](https://neutron.celat.one/neutron-1/contracts/neutron1mla0gsxwueanhqnq8hknagxcqujr3zjnhll9ut9dma7pvc3yl9mse254ql)
- Query config and go to puppeteer contract
  - [Example](https://neutron.celat.one/neutron-1/interact-contract?selectedType=query&contract=neutron1mla0gsxwueanhqnq8hknagxcqujr3zjnhll9ut9dma7pvc3yl9mse254ql&msg=ewogICJjb25maWciOiB7fQp9)
- Query `extension` message to get all current delegations
  - [Example](https://neutron.celat.one/neutron-1/interact-contract?selectedType=query&contract=neutron100pftltglp5xeffy5z6mawhhm5xp0f0je4jj4cxqrc3u4t6vhy3qqvd5y8&msg=eyJleHRlbnNpb24iOnsibXNnIjp7ImRlbGVnYXRpb25zIjp7fX19fQ==)

Example of output:

```json
{
  "data": {
    "delegations": {
      "delegations": [
        {
          "delegator": "cosmos1nujy3vl3rww3cy8tf8pdru5jp3f9ppmkadws553ck3qryg2tjanqt39xnv",
          "validator": "cosmosvaloper1rndyjagfg0nsedl2uy5n92vssn8aj5n67t0nfx",
          "amount": {
            "denom": "stake",
            "amount": "78518979151"
          }
        },
        {
          "delegator": "cosmos1nujy3vl3rww3cy8tf8pdru5jp3f9ppmkadws553ck3qryg2tjanqt39xnv",
          "validator": "cosmosvaloper1gh4vzw9wsfgl2h37qqnetet0m4wrzm7v7x3j9x",
          "amount": {
            "denom": "stake",
            "amount": "78518979151"
          }
        }
      ]
    },
    "remote_height": 1021162,
    "local_height": 17515817,
    "timestamp": "1722427080795445398"
  }
}
```

The sum of all `delegations.delegations[i].amount.amount` is current TVL

As you can see the result number is a sum of all current delegations. We could get an ICA address through `ica` query and then do the specific query to retrieve all current delegations, however, puppeteer contract do that bunch of operations instead of us using ICQ so we can trust this information.

We don't include in total TVL:

- Unprocessed unbond batches
- Unbonded funds that are currently held by ICA
- Pending tokens that should be bonded soon through staker ICA

Because it only makes insignificant difference and makes the logic of calculations complicated (and also because in any case these actions will affect on our current delegations, so it's a question of several hours that these information will be noted in delegation balances). In case if you want to get a precise TVL:

- Go to [celat.one](https://neutron.celat.one/pion-1/) page, search for the core contract of your instance
  - [Example](https://neutron.celat.one/pion-1/contracts/neutron1qqts44x06g4x430z3heszgczjhfpqf0jq6yxhnufy4w70cvklm7qswywwq)
- Query `exchange_rate`
  - [Example](https://neutron.celat.one/pion-1/interact-contract?selectedType=query&contract=neutron1qqts44x06g4x430z3heszgczjhfpqf0jq6yxhnufy4w70cvklm7qswywwq&msg=ewogICJleGNoYW5nZV9yYXRlIjoge30KfQ%3D%3D)
- Query config and go to token contract
  - [Example](https://neutron.celat.one/pion-1/interact-contract?selectedType=query&contract=neutron1qqts44x06g4x430z3heszgczjhfpqf0jq6yxhnufy4w70cvklm7qswywwq&msg=ewogICJjb25maWciOiB7fQp9)
- Query config on that token contract, copy the `denom` field
  - [Example](https://neutron.celat.one/pion-1/interact-contract?selectedType=query&contract=neutron1nlmq2mzt932w2pnpr4gdxu0pex5gnqvyjgmrm3sv2gdwvw9n6evs4ja2gy&msg=ewogICJjb25maWciOiB7fQp9)
- Go to [swagger](https://rest-falcron.pion-1.ntrn.tech/swagger/#/Query/SupplyOf) and paste denom from previous step, execute it and you'll get a total supply of dTOKEN
- `exchange_rate` \* dTOKEN_total_supply = TVL
