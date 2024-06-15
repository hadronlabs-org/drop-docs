# Validator Set Management Matters
![image](https://github.com/hadronlabs-org/drop-docs/assets/103267218/6958a262-06f3-42f0-b156-48e9f5ac730f)

### What is Decentralization and Why Does It Matter?

Decentralization is a core principle of the blockchain industry, it is what makes blockchains more than distributed databases. Decentralization ensures that no single entity has arbitrary control over the blockchain, enhancing its resistance to censorship and centralized decision-making power. While decentralization encompasses various trade-offs, this document will focus on its application to infrastructure and stake distribution within Delegated Proof of Stake (DPoS) networks, such as those built on CometBFT.

### The Current State of Decentralization

A common metric for assessing the decentralization of a CometBFT blockchain is the Halt Threshold, or Nakamoto coefficient. This metric represents the minimum number of validators controlling at least 33% of the voting power, whose collaboration could halt the blockchain. 

For the sake of illustration, here are the halt thresholds of notable CometBFT networks as of June 2024: 

| Network | Cosmos Hub | Celestia | dYdX  |
| --- | --- | --- | --- |
| Halt Threshold | 7 validators | 9 validators | 3 validators |

However, the distribution of voting power itself is not the sole point of failure of a delegated proof-of-stake network. When nodes are concentrated within specific jurisdictions, datacenters or ISP companies, networks become increasingly vulnerable to failures and policy changes. For instance, as of June 2024, roughly 44% of Kyve’s nodes were running on Hetzner, and 75% of the voting power on dYdX was located in Japan. In these conditions, a ban on cryptocurrency or validator software by a region, country or even a company could harm, halt or even lead to the capture of the network. 

![image](https://github.com/hadronlabs-org/drop-docs/assets/103267218/e43d8bdb-035d-43d9-99b3-1b0636ee8e35)
*Visual representation of the voting power shares of Cosmos Hub validators on June 15th, 2024 by [Smartstake](https://analytics.smartstake.io/cosmos/stats).*

## Why Is It This Way?

Several factors contribute to the current state of decentralization, or relative lack thereof:

1. **Unrealistic Expectations on Delegators**: dPoS often assumes that market forces will sufficiently incentivize delegators to perform the deep due diligence to collectively optimize a network’s delegation through their delegations, when in reality, few market participants have the time and resources to conduct such analysis, and the market as a whole does not reward decentralization in absolute. 
2. **Vertical Integration**: Affiliated validators, such as those run by centralized exchanges, often accumulate a large portion of the stake through vertical integration. In other words, they are able to leverage their product’s captive user base to drive massive delegations to their validators. 
3. **Token Distribution**: Typically, token distributions in the Interchain are top-heavy, meaning that most of the tokens tend to be owned by a few hundred addresses. Larger validators possess more resources and credibility, enabling them to secure delegations from institutional holders more effectively than smaller, community-oriented validators.

## How Drop Helps

Drop introduces several mechanisms to enhance decentralization and strengthen the network:

1. **Broad Delegation**: Drop delegates to a large number of validators, increasing the network’s halt threshold and reducing the disparity between the largest validators and the rest.
2. **On-Chain Validator Set Management**: Drop provides advanced tools such as weighted delegations to sponsor less dominant but high-quality validators, aiding in a more balanced stake distribution.
3. **Network Effects**: By integrating with centralized exchanges, custodians, and other providers, Drop reroutes otherwise captive stake to be more broadly delegated across the validator set.
4. **Dedication**: The Drop DAO is incentivized to develop on-chain analytics tools and delegation frameworks that enhance the resilience, decentralization, and security of the network and its delegations.
5. **Off-Chain Information Gathering**: Through Drop’s onboarding process, DAO contributors gather valuable off-chain information on validators’ practices, infrastructure, geographic distribution, and jurisdictional contexts. This data, which is often not publicly available and is kept confidential by Drop contributors, enables the creation of delegation frameworks that maximize network resilience.

By employing these strategies, Drop directly contributes to the robustness and decentralization of CometBFT blockchains, ensuring a more secure and reliable network infrastructure.
