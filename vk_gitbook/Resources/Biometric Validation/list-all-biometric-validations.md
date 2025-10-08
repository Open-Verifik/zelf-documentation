# List all Biometric Validations

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/biometric-validations`

Retrieves a list of biometric validation records based on specified filters and parameters.

### **Headers**

<table><thead><tr><th width="316.7039794921875">Name</th><th>Value</th></tr></thead><tbody><tr><td>Authorization</td><td><code>Bearer {YOUR_ACCESS_TOKEN}</code></td></tr></tbody></table>

### **Query Parameters**

#### **Pagination**

<table><thead><tr><th width="139.243896484375">Parameter</th><th width="127.8116455078125">Type</th><th width="324.8133544921875">Description</th><th>Example</th></tr></thead><tbody><tr><td><code>page</code></td><td>number</td><td>Page number (starts at 1).</td><td><code>page=1</code></td></tr><tr><td><code>perPage</code></td><td>number</td><td>Items per page (default: 20).</td><td><code>perPage=10</code></td></tr><tr><td><code>offset</code></td><td>number</td><td>Alternative to page for skipping records.</td><td><code>offset=20</code></td></tr></tbody></table>

#### **Data Selection**

<table><thead><tr><th width="136.8004150390625">Parameter</th><th width="109.25">Type</th><th width="222.9296875">Description</th><th>Example</th></tr></thead><tbody><tr><td><code>populates[]</code></td><td>array</td><td>Fields to populate with related data.</td><td><code>populates[]=client&#x26;populates[]=project</code></td></tr></tbody></table>

#### **Filtering**

<table><thead><tr><th width="203.388916015625">Parameter</th><th width="96.3446044921875">Type</th><th width="204.1605224609375">Description</th><th>Example</th></tr></thead><tbody><tr><td><code>where_client</code></td><td>string</td><td>Filter by client ID.</td><td><code>where_client=507f1f77bcf86cd799439013</code></td></tr><tr><td><code>where_status</code></td><td>string</td><td>Filter by validation status.</td><td><code>where_status=validated</code></td></tr><tr><td><code>where_type</code></td><td>string</td><td>Filter by validation type.</td><td><code>where_type=login</code></td></tr><tr><td><code>where_livenessSession</code></td><td>string</td><td>Filter by liveness session ID.</td><td><code>where_livenessSession=674de8df21c72be3cc42b8a7</code></td></tr><tr><td><code>in_status</code></td><td>array</td><td>Filter by multiple statuses.</td><td><code>in_status[]=validated&#x26;in_status[]=failed</code></td></tr><tr><td><code>where>_createdAt</code></td><td>string</td><td>Filter records created after date.</td><td><code>where>_createdAt=2024-12-01</code></td></tr></tbody></table>

#### **Sorting**

<table><thead><tr><th width="117.0565185546875">Parameter</th><th width="111.1893310546875">Type</th><th width="348.8524169921875">Description</th><th>Example</th></tr></thead><tbody><tr><td><code>sort</code></td><td>string</td><td>Sort order (prefix with <code>-</code> for descending).</td><td><code>sort=-createdAt</code></td></tr></tbody></table>

### **Request Examples**

{% tabs %}
{% tab title="Basic Request" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}

{% tab title="With Pagination" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations?page=1&perPage=10" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}

{% tab title="With Filters" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations?where_status=validated&where_type=login" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "docs": [
      {
        "_id": "674de8df21c72be3cc42b8a8",
        "status": "validated",
        "type": "login",
        "url": "https://access.verifik.co/sign-in/507f1f77bcf86cd799439011?type=liveness",
        "createdAt": "2024-12-02T17:05:36.788Z"
      }
    ],
    "total": 1,
    "limit": 20,
    "page": 1,
    "pages": 1
  }
}
```

{% endtab %}

{% tab title="204" %}

```json
{
  "data": []
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Authentication Required**: Valid access token with appropriate permissions.
* **Access Control**: Users can only access validations for their own client or with super admin privileges.
* **Default Pagination**: 20 items per page if not specified.
* **Populate Relationships**: Use `populates[]` to include related data like client, project, and liveness session.
* **Filtering**: Apply various filters to narrow down results based on specific criteria.
* **Performance**: Use `lean=true` for better performance when you don't need Mongoose document features.

### **Common Use Cases**

* **Dashboard Views**: Display validation statuses and counts for monitoring.
* **User Management**: List validations for specific users or time periods.
* **Reporting**: Generate reports on validation activities and success rates.
* **Integration**: Retrieve validation data for external system processing.
* **Audit Trails**: Access validation history for compliance and security purposes.

This endpoint provides flexible access to biometric validation records with comprehensive filtering, pagination, and data selection capabilities.
