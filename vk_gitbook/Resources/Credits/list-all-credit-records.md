# List all credit records

Here's the documentation for the **List Document Validations** API endpoint, formatted in a similar structure to the screenshots you provided:

***

### List Document Validations

#### Endpoint

**GET** - `https://api.verifik.co/v2/document-validations`

Retrieve a list of Document Validation records in Verifik’s system. This endpoint returns an array of document validation objects, each containing detailed information about the validation status, document attributes, and associated projects.

#### Headers

Include the necessary authentication headers for authorization and content-type, such as:

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Params

Here’s a table format for the query parameters used in this API call. This will clearly show what each `populate` parameter does by converting `ObjectId` references into the corresponding objects.

<table><thead><tr><th width="320">Parameter</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>page</code></td><td><code>1</code></td><td>Specifies the page number for pagination, starting from 1.</td></tr><tr><td><code>perPage</code></td><td><code>20</code></td><td>Defines the number of items per page for pagination.</td></tr><tr><td><code>populates[]=project</code></td><td><code>project</code></td><td>Populates the <code>project</code> field, providing the full project details such as branding, allowed countries, and status, instead of just an ObjectId.</td></tr><tr><td><code>populates[]=projectFlow</code></td><td><code>projectFlow</code></td><td>Populates the <code>projectFlow</code> field, transforming the ObjectId into the full project flow object containing the flow setup and related details.</td></tr><tr><td><code>where_status=&#x3C;status></code></td><td><code>ONGOING</code></td><td>Where condition to filter by status where the options are <a href="../document-validations/the-document-validation-object">specified here</a></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="cURL" %}

```bash
curl --location 'https://api.verifik.co/v2/document-validations' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.verifik.co/v2/document-validations',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
};

axios(config)
  .then(response => {
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });
```

{% endtab %}
{% endtabs %}

### Response

On a successful request, you will receive a JSON array containing document validation objects. Each object includes details such as document type, status, associated project, and validation metadata.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": [
    {
      "requiresBackSide": true,
      "_id": "62a03c32b541ca63ff72424a",
      "documentNumber": "123456789",
      "documentType": "DLXX",
      "documentCategory": "DriverLicense",
      "country": "Brazil",
      "nationality": "Brazilian",
      "age": "29",
      "gender": "Female",
      "project": "62ae085c963a3247fda57c4",
      "projectFlow": "62ae0b3c963a3247fda57cb",
      "url": "https://cdn.verifik.co/ocr/samples/random-license.jpg",
      "status": "ACTIVE_BUT_UNVERIFIED",
      "imageValidated": false,
      "validationMethod": "OCR_SCAN",
      "inputMethod": "CAMERA",
      "namesMatch": false,
      "fullNameMatchPercentage": 0,
      "firstNameMatchPercentage": 0,
      "lastNameMatchPercentage": 0,
      "OCRExtraction": {
        "firstName": "MARIA",
        "lastName": "SILVA RODRIGUES",
        "fullName": "MARIA SILVA RODRIGUES",
        "documentNumber": "123456789",
        "CURP": "SIRB900715HBSLND03",
        "dateOfBirth": "20/JUN/1994",
        "expirationDate": "12/DEC/2026",
        "licenseType": "PERMANENTE",
        "age": 29,
        "gender": "Female",
        "country": "Brazil",
        "documentType": "DLXX"
      },
      "scoreValidated": false,
      "type": "signup",
      "appRegistration": "62b03bdfb541ca63ff7241f3",
      "client": "62a7f594e3bb7129d1d89af",
      "updatedAt": "2024-10-29T01:36:50.999Z",
      "createdAt": "2024-10-29T01:36:50.999Z",
      "__v": 0
    }
    // Additional document validations...
  ]
}

```

{% endtab %}
{% endtabs %}
