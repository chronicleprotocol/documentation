---
sidebar_position: 3
description: Bringing Transparency to Tokenized Assets
keywords: [transparency, Verified Asset Oracle, VAO]
---
# Bringing Transparency to Tokenized Assets

The Verified Asset Oracle provides onchain, cryptographic attestations that verify the reserves behind tokenized assets (stablecoins, wrapped tokens, RWAs, and more), ensuring transparent backing for depositors and protocols.


## Why Chronicle VAO?
-  Customizable inputs – Accepts data in any format: API (preferred), email, SFTP, or other formats
- Cryptographic integrity – End-to-end verifiability through signature validation and consensus among independent validators
- Institutional alignment – Designed to meet the operational needs and privacy considerations of regulated financial entities
- Flexible outputs – Send any structured data onchain (not just prices), such as attestation proofs, NAVs, balances
- Scalable infra – Built on top of Chronicle’s battle-tested Scribe Oracles, optimized for gas efficiency and resilience
- Independent Attestation: provides a credibly-neutral attestation by fetching data directly from the custodian


## How It Works
The VAO pipeline has three core roles:
### 1. Agent
The Agent is responsible for retrieving your data, performing computations, and preparing the payload to be verified and published onchain.
- Pulls data from your preferred source (ideally an web API, but it can also be an email, SFTP, or other formats given our modular components that are able to adapt to enterprise environments)
- Applies custom logic or transformations as agreed (e.g., aggregations, formatting, cryptographic proof generation)
- Packages original + computed data, signs it, and uploads to IPFS


### 2. Validator
The Validator is a neutral party that ensures the data's authenticity and correctness:
- Retrieves the payload from IPFS and verifies input data signature
- Verifies outputs independently
- Participates in the distributed signature (a Schnorr-based multi-signature scheme) that attests to the correctness of the data

### 3. Relay
The Relay submits the verified payload to the onchain uScribe contract:
- uScribe is a universal oracle contract that can publish any arbitrary data (not just prices) which is built on top of Scribe, Chronicle’s gas-efficient oracle framework
- Enables integration with smart contracts, dashboards, proof-of-reserve systems, and more

