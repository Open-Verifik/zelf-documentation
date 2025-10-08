# Retrieve a Biometric Validation

<mark style="color:green;">`GET`</mark> `https://api.verifik.co/v2/biometric-validations/{id}`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint retrieves a specific biometric validation record by its unique identifier, including all associated data and relationships.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### **Path Parameters**

<table><thead><tr><th width="94.912353515625">Name</th><th width="103.7620849609375">Type</th><th width="123.4183349609375">Required</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td><strong>Yes</strong></td><td>The unique identifier of the biometric validation to retrieve.</td></tr></tbody></table>

### **Query Parameters**

#### **Basic Query Parameters**

<table><thead><tr><th width="135.4678955078125">Parameter</th><th width="80.9140625">Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>populates[]</code></td><td>array</td><td>Fields to populate with related data.</td><td><code>populates[]=client&#x26;populates[]=project</code></td></tr></tbody></table>

#### **Advanced Query Parameters**

<table><thead><tr><th width="121.885498046875">Parameter</th><th width="113.5972900390625">Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>sort</code></td><td>string</td><td>Sort order for results. Prefix with <code>-</code> for descending.</td><td><code>sort=-createdAt</code></td></tr><tr><td><code>limit</code></td><td>number</td><td>Maximum number of results to return.</td><td><code>limit=10</code></td></tr></tbody></table>

#### **Filter Query Parameters**

<table><thead><tr><th>Parameter</th><th width="109.9122314453125">Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>where_client</code></td><td>string</td><td>Filter by client ID.</td><td><code>where_client=507f1f77bcf86cd799439013</code></td></tr><tr><td><code>where_project</code></td><td>string</td><td>Filter by project ID.</td><td><code>where_project=507f1f77bcf86cd799439011</code></td></tr><tr><td><code>where_projectFlow</code></td><td>string</td><td>Filter by project flow ID.</td><td><code>where_projectFlow=507f1f77bcf86cd799439015</code></td></tr><tr><td><code>where_status</code></td><td>string</td><td>Filter by validation status.</td><td><code>where_status=validated</code></td></tr><tr><td><code>where_type</code></td><td>string</td><td>Filter by validation type.</td><td><code>where_type=login</code></td></tr><tr><td><code>where_livenessSession</code></td><td>string</td><td>Filter by liveness session ID.</td><td><code>where_livenessSession=674de8df21c72be3cc42b8a7</code></td></tr></tbody></table>

#### **Comparison Operators**

<table><thead><tr><th width="205.76123046875">Parameter</th><th width="110.919189453125">Type</th><th width="193.80126953125">Description</th><th>Example</th></tr></thead><tbody><tr><td><code>where&#x3C;_createdAt</code></td><td>string</td><td>Filter records created before a date.</td><td><code>where&#x3C;_createdAt=2024-12-01</code></td></tr><tr><td><code>where>_createdAt</code></td><td>string</td><td>Filter records created after a date.</td><td><code>where>_createdAt=2024-12-01</code></td></tr><tr><td><code>where&#x3C;=_createdAt</code></td><td>string</td><td>Filter records created on or before a date.</td><td><code>where&#x3C;=_createdAt=2024-12-01</code></td></tr><tr><td><code>where>=_createdAt</code></td><td>string</td><td>Filter records created on or after a date.</td><td><code>where>=_createdAt=2024-12-01</code></td></tr><tr><td><code>wherenot_status</code></td><td>string</td><td>Filter records where status is not equal to value.</td><td><code>wherenot_status=failed</code></td></tr><tr><td><code>where-null_field</code></td><td>string</td><td>Filter records where field is null.</td><td><code>where-null_redirectUrl</code></td></tr><tr><td><code>where-not-null_field</code></td><td>string</td><td>Filter records where field is not null.</td><td><code>where-not-null_redirectUrl</code></td></tr></tbody></table>

#### **Array and Pattern Matching**

<table><thead><tr><th width="168.8133544921875">Parameter</th><th width="90.541748046875">Type</th><th width="250.6396484375">Description</th><th>Example</th></tr></thead><tbody><tr><td><code>in_status</code></td><td>array</td><td>Filter records where status is in the specified array.</td><td><code>in_status[]=validated&#x26;in_status[]=failed</code></td></tr><tr><td><code>notIn_status</code></td><td>array</td><td>Filter records where status is not in the specified array.</td><td><code>notIn_status[]=expired</code></td></tr><tr><td><code>like_name</code></td><td>string</td><td>Filter records where name contains the specified string (case-insensitive).</td><td><code>like_name=john</code></td></tr><tr><td><code>notLike_name</code></td><td>string</td><td>Filter records where name does not contain the specified string.</td><td><code>notLike_name=test</code></td></tr></tbody></table>

### **Request Examples**

{% tabs %}
{% tab title="Basic Request" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations/674de8df21c72be3cc42b8a8" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}

{% tab title="With Populates" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations/674de8df21c72be3cc42b8a8?populates[]=client&populates[]=project&populates[]=livenessSession" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}

{% tab title="With Field Selection" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations/674de8df21c72be3cc42b8a8?columns=status,type,createdAt,url" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}

{% tab title="With Filters" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations/674de8df21c72be3cc42b8a8?where_status=validated&where_type=login" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}

{% tab title="Complex Query" %}

```bash
curl -X GET "https://api.verifik.co/v2/biometric-validations/674de8df21c72be3cc42b8a8?populates[]=client&populates[]=project&columns=status,type,createdAt,url&where>_createdAt=2024-12-01&sort=-createdAt" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

{% endtab %}
{% endtabs %}

### **Response**

The response will contain the biometric validation record with all requested fields and populated relationships.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a8",
    "client": {
      "_id": "507f1f77bcf86cd799439013",
      "name": "Example Client",
      "status": "active"
    },
    "project": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Example Project",
      "status": "active"
    },
    "projectFlow": {
      "_id": "507f1f77bcf86cd799439015",
      "name": "Login Flow",
      "type": "login"
    },
    "livenessSession": {
      "_id": "674de8df21c72be3cc42b8a7",
      "identifier": "user@example.com",
      "status": "completed",
      "expiresAt": "2024-12-02T17:15:35.000Z"
    },
    "status": "validated",
    "type": "login",
    "url": "https://access.verifik.co/sign-in/507f1f77bcf86cd799439011?type=liveness",
    "assignedCollection": "507f1f77bcf86cd799439016",
    "collectionCode": "col_12345",
    "livenessScore": 0.85,
    "response": {
      "liveness": {
        "score": 0.85,
        "status": "passed"
      },
      "persons": [
        {
          "id": "674de8df21c72be3cc42b8ab",
          "name": "John Doe",
          "score": 0.92
        }
      ]
    },
    "redirectUrl": null,
    "webhook": null,
    "requires2FA": false,
    "createdAt": "2024-12-02T17:05:36.788Z",
    "updatedAt": "2024-12-02T17:15:36.788Z"
  }
}
```

{% endtab %}

{% tab title="204" %}

```json
{
  "data": null
}
```

{% endtab %}

{% tab title="403" %}

```json
{
  "code": "Forbidden",
  "message": "access_denied"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
  "code": "biometric_validation_not_found",
  "message": "404:biometric_validation_not_found"
}
```

{% endtab %}
{% endtabs %}

### **Response Fields**

| Field                | Type    | Description                                                              |
| -------------------- | ------- | ------------------------------------------------------------------------ |
| `_id`                | string  | Unique identifier of the biometric validation.                           |
| `client`             | object  | Client information (populated if requested).                             |
| `project`            | object  | Project information (populated if requested).                            |
| `projectFlow`        | object  | Project flow configuration (populated if requested).                     |
| `livenessSession`    | object  | Liveness detection session details (populated if requested).             |
| `status`             | string  | Current validation status (new, sent, validated, failed, expired).       |
| `type`               | string  | Type of validation process (validation, login, onboarding, oneTimeLink). |
| `url`                | string  | URL where users complete their biometric verification.                   |
| `assignedCollection` | string  | Reference to the assigned collection for biometric data.                 |
| `collectionCode`     | string  | Collection identifier for biometric data storage.                        |
| `livenessScore`      | number  | Liveness detection score (0.0 to 1.0).                                   |
| `response`           | object  | Detailed response from the biometric validation process.                 |
| `redirectUrl`        | string  | Optional URL for redirect after validation.                              |
| `webhook`            | string  | Optional webhook configuration.                                          |
| `requires2FA`        | boolean | Whether two-factor authentication is required.                           |
| `createdAt`          | string  | When the validation was created.                                         |
| `updatedAt`          | string  | When the validation was last updated.                                    |

### **Notes**

* **Authentication Required**: Users must have a valid access token with appropriate permissions.
* **Access Control**: Users can only access biometric validations for their own client or with super admin privileges.
* **Liveness Session Access**: Users with liveness session tokens can access related validations.
* **Populate Relationships**: Use `populates[]` to include related data like client, project, and liveness session information.
* **Field Selection**: Use `columns` or `select` to limit the fields returned in the response.
* **Filtering**: Apply various filters to narrow down results based on specific criteria.
* **Sorting**: Use `sort` parameter to order results by specific fields.
* **Performance**: Use `lean=true` for better performance when you don't need Mongoose document features.

### **Common Use Cases**

* **Status Checking**: Retrieve validation status and results for user feedback.
* **Audit Trails**: Access detailed validation information for compliance and reporting.
* **Integration**: Get validation data for webhook processing or external system integration.
* **User Management**: Retrieve validation details for user account management.
* **Analytics**: Collect validation data for performance analysis and optimization.

### **Query Parameter Best Practices**

1. **Use Specific Fields**: Only request the fields you need with `columns` parameter.
2. **Limit Populates**: Only populate relationships that are necessary for your use case.
3. **Apply Filters**: Use appropriate filters to narrow down results and improve performance.
4. **Consider Pagination**: For large datasets, use `limit` and `sort` parameters effectively.
5. **Use Lean Mode**: Enable `lean=true` when you don't need Mongoose document features.

This endpoint provides comprehensive access to biometric validation records with flexible querying capabilities for various use cases.
