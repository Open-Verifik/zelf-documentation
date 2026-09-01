---
title: Face Certificates Overview
description: Face PKI on ZelfEncrypt v4. Issue, verify, encrypt, decrypt, and sign with a Face Certificate without embedding issuer keys on devices.
keywords: [face certificate, face pki, zelfencrypt v4, biometric certificate]
image: /img/social-card.png
---

# Face Certificates Overview

Face Certificates are Face PKI credentials issued by ZelfEncrypt v4. A certificate binds a **purpose id** to a face-derived public key. The server signs the certificate with its Face PKI key. Proofs stay **unsigned** so Android and iOS can encrypt and decrypt offline.

Pin the root certificate. Do not embed `ISSUERS_PUBLIC_KEY` on ZNS or Zelf ID apps. Never ship PKI or issuer private keys.

## Hosts

- Public Koa API: `{{ZELF_PUBLIC_API_ORIGIN}}` (`https://v3.zelf.world`)
- Face PKI origin: `https://v4.zelf.world` (Koa proxies here)

## Two auth modes

**Pay-as-you-go** — `POST /api/face-certificates/*`  
No JWT required. Send `x-payment-proof`, `x-payment-chain`, and `x-payment-tx`, or use a paid subscription. Missing payment returns **402**.

**Client JWT** — `POST /api/my-face-certificates/*`  
Create a session with `POST /api/sessions`, then send `Authorization: Bearer <token>` and `Origin`. No payment. Missing JWT returns **401**.

`GET /api/face-certificates/root-certificate` is public and free.

## Operations

- [Root certificate](./root-certificate)
- [Generate](./generate)
- [Verify](./verify)
- [Encrypt](./encrypt)
- [Decrypt](./decrypt)
- [Sign](./sign)
- [Public key](./public-key)
- [Verify signature](./verify-signature)
- [Verify signature with public key](./verify-signature-with-public-key)

## Typical flow

1. Create a ZelfProof on v4 (`POST /api/human-authn/encrypt`).
2. Pin the [root certificate](./root-certificate).
3. [Generate](./generate) a Face Certificate for a `purposeId`.
4. [Encrypt](./encrypt) a key with the certificate, or [sign](./sign) a SHA-256 digest.
5. Later [decrypt](./decrypt) or [verify a signature](./verify-signature) with the same face, proof, and purpose id.

`keyType` defaults to `Secp256k1`. `MlDsa*` types are signing-only and cannot encrypt.
