---
title: Get Blogs by Language
description: Retrieve blog posts filtered by language using a clean URL path parameter.
keywords: [blogs api, blogs by language, blog localization, i18n blogs]
image: /img/social-card.png
---

# Get Blogs by Language

Retrieve published blog posts for a specific language using a dedicated URL path.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/:locale
```

## Description

This endpoint provides a clean, RESTful way to fetch blog posts by language without using query parameters. It accepts a locale code as a URL path parameter, validates it against the list of supported locales, and returns all published posts in that language.

**No authentication required** — this is a public endpoint.

**Supported locales:** `en`, `es`, `fr`, `ja`, `ko`, `pt`, `zh`, `zh-TW`

## Parameters

| Parameter | Type | In | Required | Description |
|-----------|------|----|----------|-------------|
| `locale` | string | path | Yes | Language code (e.g., `en`, `es`, `fr`, `ja`, `ko`, `pt`, `zh`, `zh-TW`) |
| `limit` | number | query | No | Maximum number of results to return |
| `sort` | string | query | No | Sort field with direction prefix (default: `-createdAt`) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": [
    {
      "_id": "69e39616a3c38ea2dfd89f53",
      "slug": "zelf-keys-gestor-contrasenas-biometrico-credenciales-web3",
      "locale": "es",
      "title": "Zelf Keys: Gestor de Contraseñas Biométrico Integrado con Credenciales Web3",
      "description": "Almacena contraseñas, tarjetas de pago, notas y OTPs con encriptación biométrica—sin contraseña maestra.",
      "author": "Miguel Treviño",
      "coverImage": "/images/blog/zelf-keys-password-manager.png",
      "canonicalSlug": "zelf-keys-biometric-password-manager-web3-credentials",
      "tags": ["zelf-keys", "gestor-contrasenas", "seguridad", "biometrico", "web3"],
      "published": true,
      "markdownContent": "## Resumen:\n\n- **Zelf Keys** almacena...[truncated for brevity]",
      "date": "2026-02-18T00:00:00.000Z",
      "createdAt": "2026-04-18T14:32:54.832Z",
      "updatedAt": "2026-04-18T14:32:54.832Z"
    }
  ]
}
```

</TabItem>
<TabItem value="200-empty" label="200 OK - No Posts">

When no blog posts exist for the requested locale:

```json
{
  "data": []
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

When an unsupported locale is provided:

```json
{
  "error": "Invalid locale \"xx\". Supported: en, es, fr, ja, ko, pt, zh, zh-TW"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "Internal server error message"
}
```

</TabItem>
</Tabs>

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | array | Array of blog post objects |
| `data[]._id` | string | Unique identifier of the blog post |
| `data[].slug` | string | URL-friendly slug for the post |
| `data[].locale` | string | Language code of the post |
| `data[].title` | string | Blog post title in the requested language |
| `data[].description` | string | Short description / excerpt |
| `data[].author` | string | Author name |
| `data[].coverImage` | string | Path to the cover image |
| `data[].canonicalSlug` | string | Canonical slug linking translations together |
| `data[].tags` | array | Array of tag strings |
| `data[].published` | boolean | Whether the post is published |
| `data[].markdownContent` | string | Full blog content in Markdown |
| `data[].date` | string | Publication date (ISO 8601) |
| `data[].createdAt` | string | Record creation timestamp |
| `data[].updatedAt` | string | Record last update timestamp |

## Request Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Get all Spanish blogs
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/es"

# Get English blogs with limit
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/en?limit=5"

# Get Japanese blogs
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/ja"

# Get Traditional Chinese blogs
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/zh-TW"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function getBlogsByLanguage(locale) {
  try {
    const response = await axios.get(
      `{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/${locale}`,
      { params: { limit: 10 } }
    );

    console.log(`Found ${response.data.data.length} ${locale} blogs`);

    response.data.data.forEach(blog => {
      console.log(`- ${blog.title} (${blog.slug})`);
    });
  } catch (error) {
    if (error.response?.status === 400) {
      console.error('Invalid locale:', error.response.data.error);
    } else {
      console.error('Error:', error.response?.data || error.message);
    }
  }
}

// Fetch blogs for each supported locale
const locales = ['en', 'es', 'fr', 'ja', 'ko', 'pt', 'zh', 'zh-TW'];

for (const locale of locales) {
  await getBlogsByLanguage(locale);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

def get_blogs_by_language(locale):
    try:
        response = requests.get(
            f"{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/{locale}",
            params={"limit": 10}
        )

        if response.status_code == 400:
            print(f"Invalid locale: {response.json()['error']}")
            return

        result = response.json()
        print(f"Found {len(result['data'])} {locale} blogs")

        for blog in result["data"]:
            print(f"  - {blog['title']} ({blog['slug']})")

    except Exception as e:
        print(f"Error: {e}")

# Fetch blogs for each supported locale
locales = ["en", "es", "fr", "ja", "ko", "pt", "zh", "zh-TW"]

for locale in locales:
    get_blogs_by_language(locale)
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php

function getBlogsByLanguage($locale) {
    $url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/{$locale}?limit=10";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $result = json_decode($response, true);

    if ($httpCode === 400) {
        echo "Invalid locale: {$result['error']}\n";
        return;
    }

    echo "Found " . count($result['data']) . " {$locale} blogs\n";

    foreach ($result['data'] as $blog) {
        echo "  - {$blog['title']} ({$blog['slug']})\n";
    }
}

$locales = ['en', 'es', 'fr', 'ja', 'ko', 'pt', 'zh', 'zh-TW'];

foreach ($locales as $locale) {
    getBlogsByLanguage($locale);
}

?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let locales = vec!["en", "es", "fr", "ja", "ko", "pt", "zh", "zh-TW"];

    for locale in locales {
        let url = format!("{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/lang/{}", locale);

        let response = client
            .get(&url)
            .query(&[("limit", "10")])
            .send()
            .await?;

        if response.status().as_u16() == 400 {
            let error: Value = response.json().await?;
            println!("Invalid locale: {}", error["error"].as_str().unwrap());
            continue;
        }

        let result: Value = response.json().await?;
        let blogs = result["data"].as_array().unwrap();

        println!("Found {} {} blogs", blogs.len(), locale);

        for blog in blogs {
            println!("  - {} ({})",
                blog["title"].as_str().unwrap(),
                blog["slug"].as_str().unwrap()
            );
        }
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Supported Locales

| Code | Language |
|------|----------|
| `en` | English (default) |
| `es` | Spanish |
| `fr` | French |
| `ja` | Japanese |
| `ko` | Korean |
| `pt` | Portuguese |
| `zh` | Chinese (Simplified) |
| `zh-TW` | Chinese (Traditional) |

## Notes

- This endpoint is functionally equivalent to `GET /api/blogs?where_locale=:locale` but provides a cleaner URL structure.
- The `en` locale also matches legacy posts that have `null`, empty, or missing `locale` fields.
- Invalid locales return a `400` error with a list of all supported locale codes.

## Related Endpoints

- [List Blogs](/docs/api/blogs/list-blogs) — List all published blogs with query param filtering
- [Get Blog by Slug](/docs/api/blogs/get-blog-by-slug) — Retrieve a single blog post by its slug
