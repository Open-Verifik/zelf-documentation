# The Credit object

### Attributes

* **amount** - Number - Optional The number of credits (default: 0).

***

* **status** - String - Optional The status of the credit transaction with possible values:
  * approved
  * pending
  * failed
  * postPaid Default: null.

***

* **category** - String - Optional The category of the credit with possible values:
  * **`purchase`**
  * **`usage`** Default: usage.

***

* **client** - ObjectId - Optional Reference to the Client model, linking credits to a specific client account. Default: null.

***

* **superAdmin** - ObjectId - Optional Reference to the SuperAdmin model for administrative oversight. Default: null.

***

* **apiRequest** - ObjectId - Required Reference to the APIRequest model, tying a credit usage to a specific API request.

***

* **group** - String - Optional Categorizes the credit usage (e.g., "apiRequest", "smartAccess"). Required: false.

***

* **code** - String - Optional A code associated with the credit (if applicable). Required: false.

***

* **transaction** - ObjectId - Optional Reference to the Transaction model for payment tracking. Default: null.

***

* **invoice** - ObjectId - Optional Reference to the StripeInvoice model for billing purposes. Required: false.

***

* **memo** - String - Optional Optional notes for internal reference or auditing. Required: false.

***

* **reason** - String - Optional Optional reason for the credit entry. Required: false.

***

* **expiresAt** - Date - Optional The timestamp when credits expire (if applicable). Default: null.

***

* **isExpired** - Boolean - Optional Indicates if the credits are no longer valid. Default: false.

***

* **partialExpiredAmount** - Number - Optional Tracks any partially expired credits. Default: undefined.

***

### Example JSON Representation

```json
{
  "credit": {
    "amount": 10,
    "status": "approved",
    "category": "usage",
    "group": null,
    "code": null,
    "memo": null,
    "reason": null,
    "expiresAt": "2025-12-01 10:10:10",
    "isExpired": false,
    "partialExpiredAmount": null
  }
}
```
