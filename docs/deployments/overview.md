# Overview

## Introduction

To ensure the integrity and security of contracts uploaded to the network, it is necessary to verify the SHA256 checksums of both the local binary file of the contract and the contract deployed on the network. This document outlines the steps for performing this verification.

## Tools

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

The contracts were built using the git commit hash `b1f986c9b7a45ab9dc21ee7c86e48bbf31fdc928`.
You can find contracts checksums, code id and addresses on the next two pages: [testnet](./testnet.md) and [mainnet](./mainnet.md).

## Conclusion

Verifying the SHA256 checksum of the local binary contract file and the deployed contract on the network is an important step to ensure the integrity and security of contracts. Follow the provided instructions and use the table to keep track of the checksums and code-ids of your contracts.
