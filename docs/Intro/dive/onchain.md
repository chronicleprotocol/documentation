---
sidebar_position: 1
description: Onchain components of Chronicle Protocol Architecture.
keywords: [quorum, WatRegistry, ValidatorRegistry]
---

# Onchain Components

    - **List of Validators**: This refers to the entities or individuals who are authorized to participate in the MultiSig validation process for a particular data model. MultiSig validation typically requires multiple parties to sign off on a transaction or data update before it is considered valid. The list of validators outlines who these authorized parties are.
    - **Quorum**: This represents the minimum number of validations or "feeds" required for a MultiSig validation to be considered valid for a specific data model. For example, if the quorum for a particular data model is set to 11, it means that exactly 11 out of the total number of validators listed must sign off on the transaction or data update for it to be accepted.

    - **ConfigRegistry**: This is a Go-based Oracle client that stores the configurations required for validators.


    - **ValidatorRegistry** plays a crucial role within the **Chronicle Protocol** by maintaining a comprehensive list of all Validators that are recognized as valid participants in the network/protocol. Validators, in this context, are trusted entities within the network that collaborate through a *peer-to-peer* (p2p) network to supply new oracle data.

    - An onchain enforced consensus mechanism ensures that data provided by these Validators is validated by a specific number, known as the `bar` of Validators. As a singleton contract deployed on the Ethereum blockchain, the **ValidatorRegistry** serves as a centralized source of truth regarding the identities of valid Validators within the Chronicle Protocol. Validators regularly query this registry to determine their status within the network. Additionally, the registry provides functionalities such as filtering p2p connections based on the identities of Validators and translating validator addresses to/from their corresponding 1-byte identifier.
    By leveraging the **ValidatorRegistry**, Chronicle Protocol ensures that only authenticated and authorized Validators participate in the network activities, thereby enhancing the security and integrity of the oracle data provided by the protocol.

<!-- Technically its not at least 11 but exactly 11. This gives us some nice properties inside the Scribe contract itself, ie the verification runtime is not O(bar) but excatly bar. Also it helps with a feed maybe optimistically poking data with that many feeds that the challenge operation becomes too expensive to be economically reasonable for externals to perform...  -->
