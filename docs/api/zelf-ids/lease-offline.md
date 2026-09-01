---
title: Lease Offline
description: Lease an existing v4 Human Authn proof onto a Zelf ID without a new face capture.
keywords: [lease offline, offline zelf id, previewHumanAuthn]
image: /img/social-card.png
---

# Lease Offline

Pin an existing **v4** proof (string and/or QR) onto a name. Preview uses **Human Authn** (`previewHumanAuthn` → `/zelf-v4`), not Tags 3.1.6.

This is the same persist path as [Lease](/docs/api/zelf-ids/lease):

- **6+ characters** confirm as `plan: "free"` for one year if they still owe a license price.
- **1–5 characters** that still owe payment become a **5-hour** `name.domain.hold`.
- A leftover **`$0` / 100% discount** confirms immediately: **premium** (6+) or **unlimited** (5 or fewer).

Pins are IPFS always, Arweave when the domain enables it, never Walrus. New records stamp `origin: "offline"` and `v: 4`. Tags offline lease stays on `POST https://v3.zelf.world/api/tags/lease-offline`.

## Endpoint

```
POST https://v4.zelf.world/api/zelf-ids/lease-offline
```

## Authentication

Requires a JWT token obtained from `POST /api/sessions`.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | Name to lease. Must match the name already stored in the proof. |
| `domain` | string | Yes | Domain TLD (`zelf`, `avax`, `bdag`, …) |
| `zelfProof` | string | One of | Base64 v4 proof string |
| `zelfProofQRCode` | string | One of | QR image (data URL or base64). Extracted when `zelfProof` is omitted. |
| `referralTagName` | string | No | Referral that can zero the license quote |
| `duration` | string | No | Subscription years (`1` default) |

Send at least one of `zelfProof` or `zelfProofQRCode`.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "ipfs": [
      {
        "id": "019981c3-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
        "cid": "bafkrei...",
        "publicData": {
          "tagName": "myname.zelf",
          "domain": "zelf",
          "origin": "offline",
          "v": "4",
          "plan": "free"
        }
      }
    ],
    "available": false,
    "name": "myname",
    "tagName": "myname.zelf",
    "domain": "zelf",
    "zelfIDObject": {
      "publicData": {
        "tagName": "myname.zelf",
        "domain": "zelf",
        "origin": "offline",
        "v": "4",
        "plan": "free"
      },
      "zelfProof": "[ZELFPROOF_BASE64]",
      "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64]"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing zelfProof"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://v4.zelf.world/api/zelf-ids/lease-offline" \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "myname",
    "domain": "zelf",
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const response = await axios.post('https://v4.zelf.world/api/zelf-ids/lease-offline', {
  tagName: 'myname',
  domain: 'zelf',
  zelfProof: '[ZELFPROOF_BASE64_DATA]'
}, {
  headers: {
    Authorization: `Bearer ${token}`,
    Origin: 'https://yourdomain.com'
  }
});
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

response = requests.post(
    "https://v4.zelf.world/api/zelf-ids/lease-offline",
    json={
        "tagName": "myname",
        "domain": "zelf",
        "zelfProof": "[ZELFPROOF_BASE64_DATA]",
    },
    headers={
        "Authorization": f"Bearer {token}",
        "Origin": "https://yourdomain.com",
    },
)
```

</TabItem>
</Tabs>
