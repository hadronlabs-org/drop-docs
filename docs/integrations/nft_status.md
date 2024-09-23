# Drop NFT

Drop protocol allows you both to stake your asset and unstake them whenever you want. Unstaking process consists of:

- Unbond request
- Burning your dAsset & consequent NFT Minting
- Wait for unbonding period (usually it takes 21 day)
- Withdraw your assets through appropriate NFT item

## Get NFT Status

First, go to our [deployment docs](https://docs.drop.money/deployments/mainnet/#contracts), find your deployment and from deployment table pick up `nft_querier` and go to [celat.one](https://neutron.celat.one/neutron-1/), paste it's address into `Search` and go to contract. After that, scroll down and find `nft_state` query, click on it. In `Query Msg` field paste `nft_id` field with your NFT ID

Example of `Query Msg`:

```json
{
  "nft_state": {
    "nft_id": "134_neutron1waj5lmujv6dyqypntp3cts4gkpgnqcvr5ztz4n_6"
  }
}
```

As the result of query you get either `ready` if NFT is ready for withdraw or `unready` in opposite case. If you enter incorrect `nft_id` you get error that says there is no such NFT ID
