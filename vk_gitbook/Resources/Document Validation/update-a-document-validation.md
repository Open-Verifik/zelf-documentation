# Update a Document Validation

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/document-validations/{id}`

Method for updating an existing Document Validation. To make the service work, the `_id` parameter is required, which is generated when a Document Validation is created correctly.

**Note**: The Document Validation update functionality is currently not implemented in the system. This endpoint will return a "`method_not_set`" error if called.

### **Response**

{% tabs %}
{% tab title="405" %}

```json
{
  "error": "Method not allowed",
  "message": "method_not_set"
}
```

{% endtab %}
{% endtabs %}

**Important Notes**

* **Update Not Available**: The Document Validation update functionality is currently not implemented in the system.
* **Alternative Methods**: To modify document validation data, you may need to:
  * Create a new Document Validation record
  * Use the name validation endpoint (`PUT /document-validations/{id}/validate`) for specific validation updates
  * Contact support for manual updates if required

**Available Alternative Endpoints**

* **Name Validation**: `PUT /document-validations/{id}/validate` - For updating name validation results
* **Create New**: `POST /document-validations` - For creating new document validation records
* **Create with App Registration**: `POST /document-validations/app-registration` - For document processing during app registration

**Key Differences from Project Flow Updates**

* Project Flows support full update functionality
* Document Validations currently only support creation and specific validation updates
* The update endpoint exists but is not implemented
* Alternative validation-specific endpoints are available for specific use cases

This limitation is by design to maintain data integrity in the document validation process, where most updates should occur through the validation workflow rather than direct API modifications.
