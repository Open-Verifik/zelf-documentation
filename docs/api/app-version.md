---
title: Mobile App Version
description: Fetch latest and minimum supported iOS and Android app versions and optional update policy flags.
keywords: [app version api, mobile update, force update, zelf app version]
image: /img/social-card.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mobile App Version

Public endpoint used by native clients to read the current **latest** and **minimum** supported version per platform and, when the app sends its installed version, whether an update is optional or **forced**.

**No authentication required** — this is a public endpoint.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/app/version
```

## Description

Returns version policy for `ios` or `android`. When the client omits `current`, the response contains only policy fields (`latestVersion`, `minimumVersion`, `storeUrl`). When `current` is provided, the API also returns `updateAvailable` and `forceUpdate` based on semantic version comparison.

Policy values are stored in **MongoDB** as a singleton document (`MobileAppVersionPolicy`, `key: "default"`). If no document exists yet, the API inserts defaults on first read: iOS `2.16.1`, Android `3.16.1`, with empty `storeUrl` each.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `platform` | string | Yes | `ios` or `android` |
| `current` | string | No | Client app version (semver). If omitted or empty, no `updateAvailable` / `forceUpdate` fields are returned. |

## Response

<Tabs>
<TabItem value="200-policy" label="200 OK - Policy only" default>

```json
{
  "data": {
    "platform": "ios",
    "latestVersion": "2.16.1",
    "minimumVersion": "2.16.1",
    "storeUrl": ""
  }
}
```

</TabItem>
<TabItem value="200-update" label="200 OK - With update flags">

```json
{
  "data": {
    "platform": "android",
    "latestVersion": "3.16.1",
    "minimumVersion": "3.16.1",
    "storeUrl": "",
    "currentClientVersion": "3.10.0",
    "updateAvailable": true,
    "forceUpdate": true
  }
}
```

</TabItem>
<TabItem value="409" label="409 Validation Error">

```json
{
  "validationError": "platform is required"
}
```

</TabItem>
<TabItem value="422" label="422 Invalid Version">

```json
{
  "code": "INVALID_CURRENT_VERSION"
}
```

</TabItem>
</Tabs>

**Semantics**

- `updateAvailable`: `true` when the client version is strictly older than `latestVersion`.
- `forceUpdate`: `true` when the client version is strictly older than `minimumVersion` (block usage until updated).

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -sS "{{ZELF_PUBLIC_API_ORIGIN}}/api/app/version?platform=ios&current=1.6.0"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const base = "{{ZELF_PUBLIC_API_ORIGIN}}";
const params = new URLSearchParams({ platform: "ios", current: "1.6.0" });
const res = await fetch(`${base}/api/app/version?${params}`);
const json = await res.json();
console.log(json.data);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import urllib.request
import urllib.parse
import json

base = "{{ZELF_PUBLIC_API_ORIGIN}}/api/app/version"
qs = urllib.parse.urlencode({"platform": "android", "current": "1.6.0"})
with urllib.request.urlopen(f"{base}?{qs}") as r:
    print(json.load(r))
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$qs = http_build_query(['platform' => 'ios', 'current' => '1.6.0']);
$url = '{{ZELF_PUBLIC_API_ORIGIN}}/api/app/version?' . $qs;
echo file_get_contents($url);
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// reqwest example (async)
let url = reqwest::Url::parse_with_params(
    "{{ZELF_PUBLIC_API_ORIGIN}}/api/app/version",
    &[("platform", "ios"), ("current", "1.6.0")],
)?;
let body: serde_json::Value = reqwest::get(url).await?.json().await?;
println!("{body:?}");
```

</TabItem>
</Tabs>

### Local testing

Use your API `PORT` and localhost only for development:

```bash
curl -sS "http://localhost:3003/api/app/version?platform=ios"
```
