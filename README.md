# testers
List of wallets to grant access to our beta deployments.

# Eligibility
Currently, we grant access if the address meets at least one of these criterias :
* Holder of a CryptoTester NFT (0x18a1bc18cefdc952121f319039502fdd5f48b6ff) on Optimism
* Holder of a DegenScore Beacon NFT (0x0521FA0bf785AE9759C7cB3CBE7512EbF20Fbdaa) on Mainnet
* Holder of a LobsterDAO NFT (0x026224a2940bfe258d0dbe947919b62fe321f042) on Mainnet
* Holder of a Llama NFT (0xe127cE638293FA123Be79C25782a5652581Db234) on Mainnet
* Holder of a Wagame NFT (0x5ef72150e663d5f5e470b00d3625e2e82645f007) on Zora
* Holder of veANGLE (0x0c462dbb9ec8cd1630f1728b2cfd2769d09f0dd5) on Mainnet

# Update
To update the `dist/list.json`, update the various data in `sources/` and run `bun run index.ts`.

Holders of NFTs are snapshotted using https://holders.at/, you can just download the csv into `sources/snapshots` and the scripts will take the it into account.
