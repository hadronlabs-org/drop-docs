# Validator FAQ
![image](/img/faq_banner.png)

**How to signup to be notified of the next onboarding wave?**

Currently, the easiest way to be notified of the next onboarding wave is to follow [@Dropdotmoney](https://x.com/dropdotmoney) on X. Enabling notifications can help ensure you don’t miss an announcement. 

**How is stake distributed across validators?**

In Drop V1, protocol stake is distributed evenly across the top 30 validators on the Allow List.
    
**How do reward for operators work?**

On CometBFT networks, validators set a commission parameter which enables them to receive a portion of the staking rewards for their infrastructure services. Drop delegates to validators with commissions up to 10%.
    
**How is stake allocated when new validators join the set?**

When new validators join the set, they are prioritized to receive new delegations until they’ve received an equivalent amount of protocol delegations as the existing validators, at which point the even distribution resumes. 
    
**What happens if my validator is removed from the Allow List?**

When a validator is removed from the Allow List, its weight is set to 0. This stops new protocol delegations from being made to the validator, but enables the protocol to continue processing undelegations from the validator. As a result, the validator does not instantly lose the entire delegation. Rather, it is gradually removed over time, helping ensure a smooth offboarding experience.
