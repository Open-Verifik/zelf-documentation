---
sidebar_position: 1
---

# Bienvenido a Zelf World

Here, you will learn about the **Zelf Name Service** architecture and the APIs that can be combined or utilized as stand-alone solution to complete a successful flow in the encryption and decryption of a Zero Knowledge Face Proof ™ or ZK Face Proof ™ (**"ZelfProof"**), **the world's first to be commercialized to the public.**

## What is Zelf Name Service?

Zelf Name Service (ZNS) is a revolutionary way of seed phrase (mnemonic key) storage, with a cutting-edge privacy-preserving non-biometric encryption, enabling innovative wallet management to ensure security without storing or exposing biometric data. The end user's face generates a unique, non-biometric binary representation that we call **ZelfProof**, which facilitates highly secure encryption and decryption.

Unlike traditional biometric systems that store templates and are subject to breaches or misuse, Zelf ensures that no biometric data is ever retained. It is a fully privacy-preserving solution designed for the next generation of identity verification, proof of personhood, and secure access control.

## Key Features

1. **No Biometric Storage:** Biometric data is **not stored.** Instead, we use facial recognition _to **generate** an encrypted, randomized, **privacy-preserving, non-biometric** binary representation – which is your **ZelfProof**._
2. **Liveness Detection:** Our system can verify the end user's presence, preventing spoofing attempts and ensuring that only the legitimate user can access the wallet.
3. **Offline Capability:** Zelf works both online and offline, requiring no internet connection to function.
4. **Easy Storage:** Instead of storing the private information on the cloud, cold storage or written in a piece of paper, users can now store it in a QR Code(which contains the **ZelfProof**) and save it on IPFS as an optional storage that will help the user to do a safe and decentralized backup, and later decrypt it by presenting a the user's face + the password (optional).

## Key Properties of a ZelfProof

* **Revocable**: ZelfProofs are revocable on the **online version**. This means that if a user's identity needs to be updated or revoked, a new **ZelfProof** can be generated from the same face and metadata, but with a different cryptographic key, effectively rendering the previous one invalid.
* **Offline & Distributed**: The verification process can be done **offline**, making Zelf suitable for decentralized systems, distributed ledgers, and scenarios where internet access is limited or unavailable. Verification can occur without the need to access a centralized database, preserving privacy and **enhancing security.**
* **Multi-Use Credentials**: A single face scan and metadata set can be used to generate multiple **ZelfProofs**, allowing different public keys for different applications, such as:  
  * Government ID  
  * Corporate Access Cards  
  * Proof of Personhood for decentralized applications (dApps)  
  * Wallets
* **Zero-Trust Architecture**: The system operates under a zero-trust model, meaning that neither the verifier nor any intermediary ever gains access to the user's biometric data or identity attributes during the authentication process.

## Advantages of Zelf and the ZelfProofs

**1. No Biometric Data Storage**

Traditional biometric systems store templates that are vulnerable to theft or misuse. Zelf ensures that **no biometric data** is ever stored or retrievable, eliminating compliance risks and enhancing user trust.

Since no biometric data is stored, there's **no risk of that data being hacked, leaked, or misused.** The biometric input is used only during the session and discarded immediately after.

**2. Revocability**

Unlike traditional biometric templates, which cannot be revoked or regenerated, ZelfProof are revocable and renewable. If a ZelfProof is compromised, a new one can be generated, and the old one invalidated—making Zelf adaptable and future-proof.

**3. Unlinkable**

Each **ZelfProof** is inherently unlinkable, meaning that even if a user generates multiple ZelfProofs across different services, they cannot be linked back to a single identity, protecting user anonymity and privacy.

**4. Offline & Distributed**

Zelf supports fully offline verification, ideal for use in decentralized, offline, or low-connectivity environments. It can serve as a **self-sovereign identity** solution, where users maintain control over their credentials without relying on third-party servers or databases.

**5. Enhanced Privacy & Compliance**

Zelf complies with the strictest data privacy regulations, such as GDPR, by ensuring that no personally identifiable information (PII) or biometric data is ever exposed. This significantly reduces the regulatory burden on organizations that adopt Zelf.

## What's next?

- Learn [How it works](./getting-started/how-it-works)
- Read the [Lite Paper](./getting-started/lite-paper)
- Explore [Use cases](./getting-started/use-cases)
