# Overview

## Introduction

To ensure the integrity and security of contracts uploaded to the network, it is necessary to verify the SHA256 checksums of both the local binary file of the contract and the contract deployed on the network. This document outlines the steps for performing this verification.

## Bulding Drop

### Requirements

- Git
- Rust > 1.78

### Building

The contracts were built using the git tag `v1.0.0`.

To build the drop protocol contracts, simply clone the contracts repository and run `make build`:

```
$ git clone --branch v1.0.0 https://github.com/hadronlabs-org/drop-contracts.git
.....
$ cd drop-contracts
.....
$ make build
```

After the build completes, all contracts will be located in the `artifacts` directory.

## Tools

### CLI

1. **Command to obtain the checksum of the file:**

   ```
   sha256sum <contract file name>
   ```

2. **Command to obtain the code id of the deployed contract:**

   ```
   neutrond q wasm contract <address of the deployed contract> --node https://rpc-talzor.neutron-1.neutron.org:443

   ```

3. **Command to obtain the checksum of the deployed contract:**
   ```
   neutrond q wasm code-info <code-id of the deployed contract> --node https://rpc-talzor.neutron-1.neutron.org:443
   ```

In the obtained output, the checksum is contained in the `data_hash` field.

### Celatone

Or you can use [Celatone](https://neutron.celat.one/neutron-1). Search for contract using its address, and on the "Contract Information" click on contract's code id in the "From Code" field. But the most reliable way to get all required contract information is to use CLI with right RPC node.

## Example Procedure

1. Obtain the checksum of the local binary contract file:

   ```
   sha256sum core.wasm
   ```

2. Obtain the code id of the deployed contract:

   ```
   neutrond q wasm contract neutron16m3hjh7l04kap086jgwthduma0r5l0wh8kc6kaqk92ge9n5aqvys9q6lxr --node https://rpc-talzor.neutron-1.neutron.org:443
   ```

3. Obtain the checksum of the deployed contract:

   ```
   neutrond q wasm code-info 1720 --node https://rpc-talzor.neutron-1.neutron.org:443
   ```

4. Compare the obtained checksums to confirm integrity.

## Contracts and Their Checksums

You can find contracts checksums, code id and addresses on the next two pages: [testnet](./testnet.mdx) and [mainnet](./mainnet.mdx).
