# Future directions

![image](https://github.com/hadronlabs-org/drop-docs/assets/103267218/f3478368-903f-4c63-a26e-780b9dd6ac3d)


Post-launch, the Drop DAO will continue to evolve and enhance its validator set management policy. The directions outlined below detail the proposed areas of focus for the protocol's development, aimed at improving decentralization, performance, and governance participation within CometBFT blockchains.

## Validator Set Expansion

As Drop's share of the total stake increases, additional onboarding rounds may be conducted by the Drop DAO to achieve the following objectives:

- **Meaningful Delegations**: Ensure that delegations are substantial enough to significantly enhance network decentralization and resilience by supporting minority setups and validators.
- **Preventing Concentration**: Maintain delegations at a size that prevents excessive concentration of voting power among a limited number of operators.

During each onboarding wave, newly onboarded validators would receive delegations until their stake is balanced relative to the rest of the set.

## Improve Validator Performance

Drop contributors will collaborate with network communities and validators to enhance overall performance. As performance benchmarks are met, these requirements may be incrementally increased to lock in the improvements.

### Performance Requirements

To bolster network performance, Drop contributors will work with validators to gradually raise performance standards. For instance, the Drop DAO may:

- Introduce limits on consecutive downtime.
- Encourage faster node recovery after scheduled or emergency upgrades.
- Encourage governance participation.

### Automation

The Drop DAO may transition the enforcement of performance requirements to a fully trustless, on-chain mechanism using Neutron’s Interchain Queries capabilities. This transition would enable the protocol to autonomously monitor validator performance and enforce standards on its delegations.

### Scaling Delegations

The Drop DAO may implement scaling delegations that dynamically adjust based on validator performance. For instance, if a validator shows signs of underperformance, delegations would be gradually redirected to other performing validators to minimize the impact of jailing or slashing on the protocol’s delegators. When performance stabilizes at a high level, delegations would revert to their original distribution.

## Introduce Weighted Delegations to Sponsor Decentralization and Governance Participation

Achieving practical decentralization involves mitigating off-chain single points of failure, such as geography, jurisdiction, and ISP choice, to enhance network resilience.
![image](https://github.com/hadronlabs-org/drop-docs/assets/103267218/e023ff31-0569-41cf-9387-01efe886cf45)
*A decentralization dashboard maintained by [Observatory.zone](http://Observatory.zone)*


### Weighted Delegations

To incentivize validators to contribute to the network's decentralization and resilience, the Drop DAO may implement a weighted delegation system. Such a system would allocate a higher share of delegations to validators who enhance network diversity and resilience, while those who do not would receive a smaller share.

### Decentralization Scorecards

The Drop DAO may develop scorecards in collaboration with network communities and validators to assess and reward contributions to decentralization. These scorecards would consider factors such as overall voting power, geographic distribution, governance participation, infrastructure, and key signing practices.

### Example Scorecard

| Stake | Preferred | Baseline | Discouraged |
| --- | --- | --- | --- |
| Stake | Validator has been in the active set for 3 months and is in the bottom 33% of voting power rank. | Validator is among the bottom 52% of voting power. | Validator is among the top 48% of voting power. |
| Governance Participation | Validator has voted on > 80% of governance polls (excluding spam proposals) over the last 90 days (including “Abstain” votes). | Validator has voted on > 50% of governance polls (excluding spam proposals) over the last 90 days (including “Abstain” votes). | Validator has voted on < 50% of governance polls (excluding spam proposals) over the last 90 days (including “Abstain” votes). |
| Geography | Operations are in a location and jurisdiction not represented in the set. | Operations are in a location and jurisdiction underrepresented in the set. | Operations are in a location and jurisdiction overrepresented in the set. |
| Infrastructure | Operator relies on bare-metal infrastructure. | Operator relies on underrepresented ISPs. | Operator relies on overrepresented ISPs. |
| Signing Setup | Operator uses underrepresented signing practices (e.g., TMKS, Horcrux, etc.). | Operator uses accepted signing setups (e.g., TMKS, Horcrux, etc.). | Operator uses dominant signing setups (e.g., TMKS, Horcrux, etc.). |

By implementing these strategies, the Drop DAO aims to continually improve the resilience, performance, and decentralization of the networks it supports, ensuring a robust and secure blockchain ecosystem.
