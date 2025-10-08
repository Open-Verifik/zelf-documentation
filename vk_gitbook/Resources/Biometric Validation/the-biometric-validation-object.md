# The Biometric Validation Object

The Biometric Validation object represents the process of verifying user identities through biometric data within your Verifik projects. This object contains all the information needed to track and manage biometric verification requests, including facial recognition and liveness detection.

### **Attributes**

#### **`client`** - ObjectId - Read-Only

The client account that owns this biometric validation. This is automatically set based on your authentication token.

#### **`project`** - ObjectId - Optional

The project where this biometric validation is being performed. This is the `_id` generated when creating a project.

#### **`projectFlow`** - ObjectId - Required

The project flow where this biometric validation is being performed. This is the `_id` generated when creating a project flow.

#### **`livenessSession`** - ObjectId - Optional

The liveness detection session associated with this biometric validation. This tracks the user's liveness verification process.

#### **`appRegistration`** - ObjectId - Optional

The app registration record linked to this biometric validation. This connects the validation to a specific user registration process.

#### **`status`** - String - Required

The current status of the biometric validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"sent"` - Verification session has been initiated
* `"validated"` - Biometric data has been successfully verified
* `"failed"` - Biometric validation failed or expired
* `"expired"` - Validation session has expired

#### **`type`** - String - Required

The type of process this biometric validation is for. Can be:

* `"validation"` - General biometric validation (default)
* `"login"` - User authentication process
* `"onboarding"` - User registration process
* `"oneTimeLink"` - Single-use access link

#### **`response`** - Object - Optional

Additional response data from the biometric validation process, including verification results and analysis data.

#### **`url`** - String - Required

The URL where users can access the biometric validation interface to complete their verification.

#### **`livenessScore`** - Number - Optional

A numerical score indicating the confidence level of the liveness detection. Higher scores indicate greater confidence that the person is physically present. Defaults to 0.

#### **`assignedCollection`** - ObjectId - Optional

The collection database where biometric data will be stored and matched against existing records.

#### **`collectionCode`** - String - Optional

A unique code identifying the specific collection for this biometric validation.

#### **`redirectUrl`** - String - Optional

URL where users will be redirected after completing the biometric validation process.

#### **`webhookUrl`** - String - Optional

External webhook URL for receiving real-time notifications about validation status changes.

#### **`webhook`** - ObjectId - Optional

Reference to a webhook configuration for automated notifications.

#### **`requires2FA`** - Boolean - Optional

Indicates whether two-factor authentication is required for this validation. Defaults to `false`.

#### **`face`** - ObjectId - Optional

Reference to the identity image containing the facial biometric data for this validation.

### **The Biometric Validation Object**

```json
{
  "client": "507f1f77bcf86cd799439011",
  "project": "507f1f77bcf86cd799439012",
  "projectFlow": "507f1f77bcf86cd799439013",
  "livenessSession": "507f1f77bcf86cd799439014",
  "appRegistration": "507f1f77bcf86cd799439015",
  "status": "sent",
  "type": "onboarding",
  "response": {},
  "url": "https://verifik.co/biometric-session/abc123",
  "livenessScore": 0.95,
  "assignedCollection": "507f1f77bcf86cd799439016",
  "collectionCode": "col_12345",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://api.client.com/webhooks/verifik",
  "webhook": "507f1f77bcf86cd799439017",
  "requires2FA": false,
  "face": "507f1f77bcf86cd799439018",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### **Important Notes**

* **Security**: Biometric data is securely stored and processed using advanced encryption and privacy protection measures
* **Liveness Detection**: Advanced anti-spoofing technology ensures the person being verified is physically present
* **Session Management**: Liveness sessions provide secure, time-limited verification windows
* **Collection Integration**: Seamless integration with identity databases for comprehensive verification
* **Real-time Processing**: Instant verification results with immediate status updates
* **Privacy Compliance**: Built-in privacy controls and data protection measures

### **Key Features**

**Liveness Detection**: Advanced technology that prevents fraud by ensuring the person being verified is physically present and not using photos, videos, or masks.

**Facial Recognition**: Sophisticated algorithms that analyze facial features for accurate identity verification.

**Session Security**: Secure session handling that protects user privacy and prevents unauthorized access.

**Collection Matching**: Integration with identity databases to match biometric data against existing records.

The Biometric Validation object integrates seamlessly with your project flows and provides comprehensive tracking of the biometric verification process from creation to completion, ensuring the highest levels of security and user privacy.
