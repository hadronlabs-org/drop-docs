# Referral program integration

Apps integrating Drop protocol can be interested in either Droplets program or Revenue share program.

Doing that is as easy as specifying the referral address in the staking message:

```json
{
  "bond": {
    "receiver": "neutron1receiveraddress",
    "r#ref": "neutron1referraladdress"
  }
}
```

Staking messages containing referral address will be processed according to the program address participates in. 