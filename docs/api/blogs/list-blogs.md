---
title: List Blogs
description: Retrieve a list of published blog posts with optional filtering by locale, sorting, and pagination.
keywords: [blogs api, list blogs, blog posts, zelf blog]
image: /img/social-card.png
---

# List Blogs

Retrieve published blog posts, optionally filtered by locale.

## Endpoint

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/blogs
```

## Description

Returns a list of published blog posts sorted by creation date (newest first). You can filter by locale using query parameters, limit the number of results, and control sorting. Draft posts are excluded by default.

**No authentication required** — this is a public endpoint.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `where_locale` | string | No | Filter by locale (`en`, `es`, `fr`, `ja`, `ko`, `pt`, `zh`, `zh-TW`) |
| `limit` | number | No | Maximum number of results to return |
| `sort` | string | No | Sort field with direction prefix (default: `-createdAt`) |
| `where_published` | string | No | Filter by published state (`true` or `false`) |
| `where_canonicalSlug` | string | No | Filter by canonical slug to find all translations of a post |
| `includeDrafts` | boolean | No | Set to `true` to include draft posts |

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
      "slug": "zelf-keys-biometric-password-manager-web3-credentials",
      "locale": "en",
      "title": "Zelf Keys: Biometric Password Manager with Web3 Credentials",
      "description": "Store passwords, payment cards, notes and OTPs with biometric encryption—no master password required.",
      "author": "Miguel Treviño",
      "coverImage": "/images/blog/zelf-keys-password-manager.png",
      "canonicalSlug": "zelf-keys-biometric-password-manager-web3-credentials",
      "tags": ["zelf-keys", "password-manager", "security", "biometric", "web3"],
      "published": true,
      "markdownContent": "## Summary:\n\n- **Zelf Keys** stores...[truncated for brevity]",
      "date": "2026-02-18T00:00:00.000Z",
      "createdAt": "2026-04-18T14:32:54.832Z",
      "updatedAt": "2026-04-18T14:32:54.832Z"
    }
  ]
}
```

</TabItem>
<TabItem value="200-empty" label="200 OK - Empty">

```json
{
  "data": []
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
| `data[].locale` | string | Language code (`en`, `es`, `fr`, `ja`, `ko`, `pt`, `zh`, `zh-TW`) |
| `data[].title` | string | Blog post title |
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
# List all published blogs
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs"

# List with limit
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs?limit=5"

# Filter by locale using query param
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs?where_locale=es"

# Find all translations of a post
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs?where_canonicalSlug=zelf-keys-biometric-password-manager-web3-credentials"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function listBlogs() {
  try {
    // List all published blogs
    const response = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs', {
      params: {
        limit: 10,
        where_locale: 'en'
      }
    });

    console.log(`Found ${response.data.data.length} blogs`);

    response.data.data.forEach(blog => {
      console.log(`- [${blog.locale}] ${blog.title} (${blog.slug})`);
    });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

listBlogs();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

def list_blogs():
    try:
        response = requests.get(
            "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs",
            params={
                "limit": 10,
                "where_locale": "en"
            }
        )

        result = response.json()
        print(f"Found {len(result['data'])} blogs")

        for blog in result["data"]:
            print(f"- [{blog['locale']}] {blog['title']} ({blog['slug']})")

    except Exception as e:
        print(f"Error: {e}")

list_blogs()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php

function listBlogs() {
    $params = http_build_query([
        'limit' => 10,
        'where_locale' => 'en'
    ]);

    $url = "{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs?{$params}";
    $response = file_get_contents($url);
    $result = json_decode($response, true);

    echo "Found " . count($result['data']) . " blogs\n";

    foreach ($result['data'] as $blog) {
        echo "- [{$blog['locale']}] {$blog['title']} ({$blog['slug']})\n";
    }
}

listBlogs();

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

    let response = client
        .get("{{ZELF_PUBLIC_API_ORIGIN}}/api/blogs")
        .query(&[("limit", "10"), ("where_locale", "en")])
        .send()
        .await?;

    let result: Value = response.json().await?;
    let blogs = result["data"].as_array().unwrap();

    println!("Found {} blogs", blogs.len());

    for blog in blogs {
        println!("- [{}] {} ({})",
            blog["locale"].as_str().unwrap_or("en"),
            blog["title"].as_str().unwrap(),
            blog["slug"].as_str().unwrap()
        );
    }

    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- The `where_locale=en` filter also matches legacy posts that have `null`, empty, or missing `locale` fields, since the schema defaults to `"en"`.
- Draft posts are excluded by default. Use `includeDrafts=true` to include them.
- The `canonicalSlug` field links translated versions of the same post together.

## Related Endpoints

- [Get Blogs by Language](/docs/api/blogs/get-blogs-by-language) — Dedicated endpoint for filtering by locale via URL path
- [Get Blog by Slug](/docs/api/blogs/get-blog-by-slug) — Retrieve a single blog post by its slug
