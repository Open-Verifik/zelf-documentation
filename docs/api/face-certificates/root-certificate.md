---
title: Get Face Certificate Root
description: Download the Face PKI root certificate in PEM format to pin verifiers.
keywords: [face certificate, root certificate, face pki, pem]
image: /img/social-card.png
---

# Get Face Certificate Root

Returns the Face PKI root certificate (PEM). Pin this on verifiers. No payment and no JWT.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/root-certificate
```

You can also pin `GET https://v4.zelf.world/root-certificate` directly.

## Authentication

None.

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "rootCertificate": "-----BEGIN CERTIFICATE-----\nMIIB...\n-----END CERTIFICATE-----\n"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "SOMETHING WENT WRONG"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/root-certificate" \
  -H "Origin: https://yourdomain.com"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require("axios");

const response = await axios.get(
  "{{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/root-certificate",
  { headers: { Origin: "https://yourdomain.com" } }
);

console.log(response.data.rootCertificate);
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/root-certificate"
response = requests.get(url, headers={"Origin": "https://yourdomain.com"})
print(response.json()["rootCertificate"])
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
$url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/root-certificate";
$options = array(
    "http" => array(
        "header" => "Origin: https://yourdomain.com\r\n",
        "method" => "GET"
    )
);
echo file_get_contents($url, false, stream_context_create($options));
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let body = reqwest::Client::new()
        .get("{{ZELF_PUBLIC_API_ORIGIN}}/api/face-certificates/root-certificate")
        .header("Origin", "https://yourdomain.com")
        .send()
        .await?
        .text()
        .await?;
    println!("{}", body);
    Ok(())
}
```

</TabItem>
</Tabs>
