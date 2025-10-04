# Request a Criminal Check

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/information-validations/{id}/background-check`

This endpoint performs comprehensive background checks by querying multiple international criminal databases and watchlists. It validates user information against global security databases to ensure compliance and security standards.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
**Critical Prerequisites**: The `documentValidation` must be completed and valid before running this endpoint. Users must complete both the `signUpForm` step and the `document` step.
{% endhint %}

{% hint style="warning" %}
**Additional Feature**: Background checks are an additional feature and are subject to charges. Each background check request will incur fees based on the databases queried.
{% endhint %}

### **Path Parameters**

| Name | Type   | Required | Description                                                                                |
| ---- | ------ | -------- | ------------------------------------------------------------------------------------------ |
| `id` | string | **Yes**  | The unique identifier of the information validation record to perform background check on. |

### **Body**

| Name                | Type    | Required | Description                                         |
| ------------------- | ------- | -------- | --------------------------------------------------- |
| `force`             | boolean | No       | Force re-validation even if already completed.      |
| `appRegistrationId` | string  | No       | App registration ID (development environment only). |

### **Supported APIs and Regional Availability**

Background checks utilize the following international criminal databases and watchlists:

#### **Global Databases (Worldwide Coverage)**

| Database     | Code                 | Description                                         | Coverage       |
| ------------ | -------------------- | --------------------------------------------------- | -------------- |
| **INTERPOL** | `world_api_interpol` | International Criminal Police Organization database | Global         |
| **FBI**      | `world_api_fbi`      | Federal Bureau of Investigation wanted persons      | Global         |
| **DEA**      | `world_api_dea`      | Drug Enforcement Administration watchlist           | Global         |
| **Europol**  | `world_api_europol`  | European Union law enforcement database             | European Union |
| **OFAC**     | `world_api_ofac`     | Office of Foreign Assets Control sanctions          | Global         |
| **UN/ONU**   | `world_api_onu`      | United Nations sanctions and watchlists             | Global         |

#### **Regional Availability**

| Region             | Available APIs            | Coverage Details                                           |
| ------------------ | ------------------------- | ---------------------------------------------------------- |
| **Global**         | All 6 databases           | Full worldwide coverage for international criminal records |
| **European Union** | Enhanced Europol coverage | Additional European law enforcement data                   |
| **United States**  | Enhanced FBI/DEA coverage | Comprehensive US criminal and drug enforcement data        |
| **International**  | INTERPOL, UN, OFAC        | Global sanctions, international warrants, and watchlists   |

{% hint style="info" %}
**Note**: The specific APIs available for your account may vary based on your subscription plan and regional licensing agreements. Contact your account manager for detailed availability information.
{% endhint %}

### **Request Examples**

{% tabs %}
{% tab title="Basic Request" %}

```bash
curl -X PUT "https://api.verifik.co/v2/information-validations/674de8df21c72be3cc42b8a8/background-check" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

{% endtab %}

{% tab title="Force Re-validation" %}

```bash
curl -X PUT "https://api.verifik.co/v2/information-validations/674de8df21c72be3cc42b8a8/background-check" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "force": true
  }'
```

{% endtab %}

{% tab title="Node.js" %}

```javascript
const axios = require('axios');

axios.put('https://api.verifik.co/v2/information-validations/674de8df21c72be3cc42b8a8/background-check', {}, {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error.response ? error.response.data : error.message);
});
```

{% endtab %}
{% endtabs %}

### **Response**

The response will contain comprehensive background check results from all queried databases.

{% tabs %}
{% tab title="200 - Success" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a8",
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe",
    "status": "ACTIVE",
    "criminalData": {
      "requestedAt": "2024-12-02T17:15:36.788Z",
      "foundKeys": [],
      "world_api_interpol": {
        "totalCards": 0,
        "status": "clear"
      },
      "world_api_fbi": {
        "foundInFBI": false,
        "status": "clear"
      },
      "world_api_europol": {
        "foundInEuropol": false,
        "status": "clear"
      },
      "world_api_onu": {
        "foundInONU": false,
        "status": "clear"
      },
      "world_api_ofac": {
        "foundInOFAC": false,
        "status": "clear"
      },
      "world_api_dea": {
        "foundInDEA": false,
        "status": "clear"
      }
    },
    "createdAt": "2024-12-02T17:05:36.788Z",
    "updatedAt": "2024-12-02T17:15:36.788Z"
  },
  "signature": "abc123def456",
  "id": "xyz789"
}
```

{% endtab %}

{% tab title="200 - Criminal Record Found" %}

```json
{
  "data": {
    "_id": "674de8df21c72be3cc42b8a8",
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe",
    "status": "FAILED",
    "criminalData": {
      "requestedAt": "2024-12-02T17:15:36.788Z",
      "foundKeys": ["world_api_interpol", "world_api_fbi"],
      "world_api_interpol": {
        "totalCards": 2,
        "status": "found",
        "details": "International arrest warrant"
      },
      "world_api_fbi": {
        "foundInFBI": true,
        "status": "found",
        "details": "FBI wanted person"
      }
    }
  },
  "signature": "abc123def456",
  "id": "xyz789"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "Feature_not_available",
  "message": "409:Feature_not_available"
}
```

{% endtab %}
{% endtabs %}

### **Response Fields**

| Field          | Type   | Description                                             |
| -------------- | ------ | ------------------------------------------------------- |
| `_id`          | string | Unique identifier of the information validation record. |
| `firstName`    | string | User's first name.                                      |
| `lastName`     | string | User's last name.                                       |
| `fullName`     | string | User's full name.                                       |
| `status`       | string | Background check status (ACTIVE, FAILED, ASSESSING).    |
| `criminalData` | object | Comprehensive criminal background check results.        |
| `signature`    | string | Unique signature for the response.                      |
| `id`           | string | Unique identifier for the response.                     |

#### **Criminal Data Fields**

| Field                | Type   | Description                                  |
| -------------------- | ------ | -------------------------------------------- |
| `requestedAt`        | string | When the background check was performed.     |
| `foundKeys`          | array  | Array of databases where records were found. |
| `world_api_interpol` | object | INTERPOL database results.                   |
| `world_api_fbi`      | object | FBI database results.                        |
| `world_api_europol`  | object | Europol database results.                    |
| `world_api_onu`      | object | UN sanctions database results.               |
| `world_api_ofac`     | object | OFAC sanctions database results.             |
| `world_api_dea`      | object | DEA watchlist results.                       |

#### **Database Result Fields**

| Field            | Type    | Description                                         |
| ---------------- | ------- | --------------------------------------------------- |
| `totalCards`     | number  | Number of matching records found (INTERPOL).        |
| `foundInFBI`     | boolean | Whether person was found in FBI database.           |
| `foundInEuropol` | boolean | Whether person was found in Europol database.       |
| `foundInONU`     | boolean | Whether person was found in UN sanctions.           |
| `foundInOFAC`    | boolean | Whether person was found in OFAC sanctions.         |
| `foundInDEA`     | boolean | Whether person was found in DEA watchlist.          |
| `status`         | string  | Status of the search (clear, found, error).         |
| `details`        | string  | Additional details about findings (when available). |

### **Prerequisites and Requirements**

#### **App Registration Steps**

* **signUpForm**: Must be completed to provide user information
* **document**: Must be completed to upload and process identity documents
* **documentValidation**: Must be completed and valid before background check

#### **Project Flow Requirements**

* Project flow type must be `onboarding`
* `verifyCriminalHistory` must be enabled in onboarding settings
* Criminal endpoints must be configured in project flow settings

#### **Feature Availability**

* Client must have background check features enabled
* Account must have sufficient credits for all database queries
* Regional licensing agreements must be in place

### **How Background Checks Work**

1. **Validation Check**: Ensures document validation is completed and valid
2. **Feature Validation**: Verifies background check features are available
3. **Database Queries**: Queries all configured criminal databases simultaneously
4. **Result Processing**: Processes and categorizes findings from each database
5. **Status Determination**: Sets overall status based on findings
6. **Webhook Events**: Triggers background check completion webhooks

### **Status Determination Logic**

* **ACTIVE**: No criminal records found in any database
* **FAILED**: Criminal records found in one or more databases
* **ASSESSING**: Background check is in progress or incomplete

### **Cost and Billing**

* **Per-Database Charge**: Each database query incurs individual fees
* **Credit System**: Uses your account's background check credits
* **Dynamic Pricing**: Costs vary based on databases queried
* **Billing Cycle**: Charges are applied immediately upon completion

### **Common Use Cases**

* **Employee Screening**: Comprehensive background checks for new hires
* **Compliance Requirements**: Meet regulatory and industry standards
* **Risk Assessment**: Evaluate potential risks in business relationships
* **Security Audits**: Verify identity and background for security purposes
* **Regulatory Compliance**: Meet KYC, AML, and other compliance requirements

### **Error Scenarios**

* **Feature Not Available**: Background check features not enabled
* **Document Validation Required**: Document validation must be completed first
* **Insufficient Credits**: Account does not have sufficient validation credits
* **API Unavailable**: Criminal database APIs temporarily unavailable
* **Regional Restrictions**: Background checks not available in your region

### **Integration Notes**

* **Webhook Events**: Triggers `information_validation_background_check` webhook events
* **Real-time Results**: Provides immediate background check results
* **Data Persistence**: All results are stored for audit and compliance purposes
* **Re-validation**: Can be forced to re-validate previously completed checks

### **Security and Compliance**

* **Data Protection**: All background check data is encrypted and secure
* **Audit Trails**: Comprehensive logging for compliance and audit purposes
* **Privacy Compliance**: Adheres to international privacy and data protection laws
* **Access Control**: Strict authentication and authorization requirements

This endpoint provides enterprise-grade background checking capabilities through integration with the world's most comprehensive criminal databases and watchlists, ensuring the highest level of security and compliance for your applications.
