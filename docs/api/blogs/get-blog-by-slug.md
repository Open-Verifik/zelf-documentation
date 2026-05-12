---
title: Get Blog by Slug
description: Retrieve a single blog post by its unique slug, with optional locale filtering.
keywords: [blog api, get blog, blog post, blog slug]
image: /img/social-card.png
---

# Get Blog by Slug

Retrieve a single blog post by its unique slug.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/:slug
```

## Description

Returns a single blog post matching the provided slug. You can optionally filter by locale to retrieve a specific translation of a post.

**No authentication required** — this is a public endpoint.

## Parameters

| Parameter | Type | In | Required | Description |
|-----------|------|----|----------|-------------|
| `slug` | string | path | Yes | The URL-friendly slug of the blog post |
| `where_locale` | string | query | No | Filter by locale to get a specific translation |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK - Found" default>

```json
{
  "data": {
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
}
```

</TabItem>
<TabItem value="200-null" label="200 OK - Not Found">

When no blog matches the given slug:

```json
{
  "data": null
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
| `data` | object \| null | Blog post object, or `null` if not found |
| `data._id` | string | Unique identifier of the blog post |
| `data.slug` | string | URL-friendly slug for the post |
| `data.locale` | string | Language code (`en`, `es`, `fr`, `ja`, `ko`, `pt`, `zh`, `zh-TW`) |
| `data.title` | string | Blog post title |
| `data.description` | string | Short description / excerpt |
| `data.author` | string | Author name |
| `data.coverImage` | string | Path to the cover image |
| `data.canonicalSlug` | string | Canonical slug linking translations together |
| `data.tags` | array | Array of tag strings |
| `data.published` | boolean | Whether the post is published |
| `data.markdownContent` | string | Full blog content in Markdown |
| `data.date` | string | Publication date (ISO 8601) |
| `data.createdAt` | string | Record creation timestamp |
| `data.updatedAt` | string | Record last update timestamp |

## Request Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Get a blog post by slug
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/zelf-keys-biometric-password-manager-web3-credentials"

# Get a specific locale version by slug
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/zelf-keys-gestor-contrasenas-biometrico-credenciales-web3?where_locale=es"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function getBlogBySlug(slug, locale = null) {
  try {
    const params = {};
    if (locale) params.where_locale = locale;

    const response = await axios.get(
      `{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/${slug}`,
      { params }
    );

    const blog = response.data.data;

    if (!blog) {
      console.log('Blog not found');
      return;
    }

    console.log(`Title: ${blog.title}`);
    console.log(`Locale: ${blog.locale}`);
    console.log(`Author: ${blog.author}`);
    console.log(`Tags: ${blog.tags.join(', ')}`);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getBlogBySlug('zelf-keys-biometric-password-manager-web3-credentials');
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

def get_blog_by_slug(slug, locale=None):
    try:
        params = {}
        if locale:
            params["where_locale"] = locale

        response = requests.get(
            f"{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/{slug}",
            params=params
        )

        result = response.json()
        blog = result["data"]

        if not blog:
            print("Blog not found")
            return

        print(f"Title: {blog['title']}")
        print(f"Locale: {blog['locale']}")
        print(f"Author: {blog['author']}")
        print(f"Tags: {', '.join(blog['tags'])}")

    except Exception as e:
        print(f"Error: {e}")

get_blog_by_slug("zelf-keys-biometric-password-manager-web3-credentials")
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php

function getBlogBySlug($slug, $locale = null) {
    $url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/{$slug}";

    if ($locale) {
        $url .= "?" . http_build_query(['where_locale' => $locale]);
    }

    $response = file_get_contents($url);
    $result = json_decode($response, true);

    $blog = $result['data'];

    if (!$blog) {
        echo "Blog not found\n";
        return;
    }

    echo "Title: {$blog['title']}\n";
    echo "Locale: {$blog['locale']}\n";
    echo "Author: {$blog['author']}\n";
    echo "Tags: " . implode(', ', $blog['tags']) . "\n";
}

getBlogBySlug('zelf-keys-biometric-password-manager-web3-credentials');

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
    let slug = "zelf-keys-biometric-password-manager-web3-credentials";

    let response = client
        .get(format!("{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs/{}", slug))
        .send()
        .await?;

    let result: Value = response.json().await?;

    if result["data"].is_null() {
        println!("Blog not found");
        return Ok(());
    }

    let blog = &result["data"];
    println!("Title: {}", blog["title"].as_str().unwrap());
    println!("Locale: {}", blog["locale"].as_str().unwrap_or("en"));
    println!("Author: {}", blog["author"].as_str().unwrap());

    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- Each blog post has a unique `slug + locale` compound index, so the same slug can exist across different locales.
- Use the `canonicalSlug` from the response to find translations of the same post via the [List Blogs](/docs/api/blogs/list-blogs) endpoint with `where_canonicalSlug`.

## Related Endpoints

- [List Blogs](/docs/api/blogs/list-blogs) — List all published blogs with filtering
- [Get Blogs by Language](/docs/api/blogs/get-blogs-by-language) — Dedicated endpoint for filtering by locale
