# Referral Program

Apps integrating Drop may be interested in either the Droplets Program or Revenue Share Program.

Doing that is as easy as specifying the referral address in the staking message:

```json
{
  "bond": {
    "receiver": "neutron1receiveraddress",
    "ref": "neutron1referreraddress"
  }
}
```

Staking messages containing a referral address will be processed according to the program address participates in. 