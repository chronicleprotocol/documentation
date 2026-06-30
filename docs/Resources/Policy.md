---
sidebar_position: 5
description: Offboarding Policy
keywords: [policy, offboarding]
---
# Chronicle Oracle Offboarding Policy

## Overview
Oracles deployed on the Chronicle network are maintained subject to the availability, quality, and security of the underlying data sources and technical infrastructure across all supported blockchains. From time to time, an oracle may be offboarded and its technical maintenance discontinued.  An offboarding of oracles may particularly occur when the oracle has low or no usage, the available data sources for the oracle are no longer deemed sufficient to support the data model on which the oracle is based (e.g., due to a low number of data sources, or due to low available liquidity for the relevant asset), or when an offboarding is otherwise deemed necessary or appropriate at the discretion of Chronicle, including for reasons of security, technical integrity or for legal or regulatory reasons.
This document describes the effects of offboarding an oracle, the standard steps by which an offboarding is effected and the operational expectations that apply to parties whitelisted to read data from the affected oracles (the User). Access to and use of data from any oracle by a User is subject to the User Disclaimer (the Disclaimer), as updated from time to time and available at https://chroniclelabs.org/legal/user-disclaimer. Any (continued) access to and use of any oracle constitutes (continued) acceptance of the Disclaimer in its then-current version, regardless of whether a separate express acceptance has been provided in any onboarding procedure. Users are responsible for reviewing the Disclaimer and any updates to it. This document forms part of the Disclaimer by reference. In the event of any inconsistency, the Disclaimer prevails.
## Effect of Offboarding
**Following an offboarding, the affected oracle is no longer updated or technically maintained. Updates permanently cease and the oracle returning value is eventually set to 0**. This is a material technical state change. Any User must implement appropriate freshness checks, heartbeat monitoring, circuit breakers and fallback logic prior to implementation of an oracle and comply with the further offboarding procedure as set out in this document and as communicated by Chronicle to handle the post-offboarding state safely.
Each User is solely responsible for ensuring that any integration of oracles adequately handles the offboarding procedure and the post-offboarding state. No liability is assumed by Chronicle for any loss or damage arising out of or in connection with the offboarding of oracles or the use of, or reliance on, an offboarded oracle. Please refer to the Disclaimer.
## Notice of Offboarding and User Obligations during Offboarding
In case of offboarding an oracle, Chronicle aims to provide at least two (2) weeks' prior notice of any planned offboarding to all Users of the affected oracle.
### Emergency offboarding: 
In emergency circumstances – including but not limited to security incidents, technical integrity issues, sudden unavailability or material degradation of underlying data sources, or other comparable circumstances –  the notice period may be shorter or, where necessary, offboarding may take effect immediately. In such cases, notice will be given as soon as practicable.
Notice channels: Notice of a planned offboarding is given (i) by email to the contact address provided by Users during onboarding for whitelist access; and/or (ii) by announcement of the planned offboarding for the affected oracles on  the [Chronicle dashboard](https://chroniclelabs.org/dashboard/oracles) on the affected oracle's page. Users are responsible for keeping their contact details current and periodically reviewing the Chronicle Dashboard.
User Obligations: On receipt of an offboarding notice, Users must:
Act on the offboarding notification within the applicable notice period, including the offboarding/migration away from affected oracles;
if requested, submit a confirmation of offboarding/migration completion before the offboarding date; and
otherwise ensure any of their integrations or use cases no longer rely on or are integrated with the affected oracles at the offboarding date.



## Step-by-Step Standard Offboarding Overview
The following overview explains in more detail how a given oracle on a given chain is safely offboarded from the Chronicle network. Note that steps may be shortened, parallelised or omitted in case of any emergency offboarding as outlined above. 
Phase 1: Monitoring 
Oracle monitoring: Oracles are continuously monitored against the operational conditions previously described in this document.
Underperforming metrics: Where the metrics relevant to an oracle fall below the applicable standards, where possible and practicable, the originator of the underlying data (e.g., the asset issuer) is engaged with a view to improve the data metrics. 
Recovery or offboarding initiation: If the metrics can be improved, the oracle may continue to be maintained normally. If not, the offboarding procedure according to Phase 2 is initiated.
Phase 2: Offboarding Initiation (Notice)

Users of the affected oracles are notified in accordance with the process previously described in this document. The notice may include the oracle identifier (name of the oracle, its address, and the associated chain), the scheduled offboarding date, and any migration guidance.
Users may be requested to acknowledge the notice and confirm their migration plans within the notice period, as well as confirm completed offboarding/migration.
Phase 3: Technical Execution

A governance spell (i.e., change request) is created and signed in accordance with the governance requirements of the Chronicle network, authorizing the offboarder contract for the specific oracle.
The spell is scheduled on the governance timelock contract.
Once the standard timelock delay expires (1 week), the offboarder contract deactivates the oracle.
Oracle configurations are updated to reflect the offboarding, and the onchain oracle returns a value of 0.

## Updates to this Policy
This Policy may be updated from time to time. The current version is published at the URL of this page. Updates take effect on publication.

