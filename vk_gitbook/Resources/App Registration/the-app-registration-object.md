# The App Registration Object

### **Attributes**

***

**`client` - ObjectId - Required**

The client associated with this registration.

***

**`project` - ObjectId - Required**

The project this registration belongs to.

***

**`projectFlow` - ObjectId - Required**

The specific flow configuration for this registration.

***

**`smartLink` - ObjectId - Optional**

A single-use link for this registration.

***

**`status` - String - Required**

Current status of the registration. Can be:

* `STARTED` - Registration has begun
* `ONGOING` - Registration is in progress
* `COMPLETED_WITHOUT_KYC` - Registration finished without identity verification
* `COMPLETED` - Registration successfully finished
* `FAILED` - Registration failed
* `NEEDS_MANUAL_VERIFICATION` - Requires human review
* `EXPIRED` - Registration has expired

***

**`email` - String - Optional**

Email address for this registration.

***

**`countryCode` - String - Optional**

Country code for the phone number.

***

**`phone` - String - Optional**

Phone number for this registration.

***

**`name` - String - Optional**

Name of the person being registered.

***

**`currentStep` - String - Required**

The current step in the registration process.

***

**`informationValidation` - ObjectId - Optional**

Reference to validation checks for personal information.

***

**`emailValidation` - ObjectId - Optional**

Reference to email verification results.

***

**`phoneValidation` - ObjectId - Optional**

Reference to phone verification results.

***

**`biometricValidation` - ObjectId - Optional**

Reference to biometric verification results.

***

**`person` - ObjectId - Optional**

Reference to the person's profile information.

***

**`assignedCollection` - ObjectId - Optional**

Reference to the collection where this registration is stored.

***

**`documentValidation` - ObjectId - Optional**

Reference to document verification results.

***

**`face` - ObjectId - Optional**

Reference to the person's face image for verification.

***

**`documentFace` - ObjectId - Optional**

Reference to the face image from the submitted document.

***

**`compareFaceVerification` - ObjectId - Optional**

Reference to face comparison verification results.

***

**`cryptoValidation` - ObjectId - Optional**

Reference to cryptocurrency validation results.

***

**`formSubmission` - ObjectId - Optional**

Reference to form submission details.

***

**`signature` - ObjectId - Optional**

Reference to the encrypted signature.

***

**`redFlags` - Number - Optional**

Number of security concerns raised during registration. Starts at 0.

***

**`redFlagsDetails` - Object - Optional**

Detailed information about any security concerns.

***

**`language` - String - Required**

Language preference for this registration. Defaults to English.

***

**`accessControlLog` - ObjectId - Optional**

Reference to access attempt tracking.

***

**`failedEmailValidations` - Array of ObjectIds - Optional**

List of failed email verification attempts.

***

**`failedPhoneValidations` - Array of ObjectIds - Optional**

List of failed phone verification attempts.

***

**`failedBiometricValidations` - Array of ObjectIds - Optional**

List of failed biometric verification attempts.

***

**`failedDocumentValidations` - Array of ObjectIds - Optional**

List of failed document verification attempts.

***

**`notes` - String - Optional**

Additional comments or notes about this registration.

***

### **The App Registration Object**

```json
{
  "client": "507f1f77bcf86cd799439011",
  "project": "507f1f77bcf86cd799439012",
  "projectFlow": "507f1f77bcf86cd799439013",
  "smartLink": "507f1f77bcf86cd799439014",
  "status": "ONGOING",
  "email": "user@example.com",
  "countryCode": "US",
  "phone": "1234567890",
  "name": "John Doe",
  "currentStep": "Document Verification",
  "informationValidation": "507f1f77bcf86cd799439015",
  "emailValidation": "507f1f77bcf86cd799439016",
  "phoneValidation": "507f1f77bcf86cd799439017",
  "biometricValidation": "507f1f77bcf86cd799439018",
  "person": "507f1f77bcf86cd799439019",
  "assignedCollection": "507f1f77bcf86cd799439020",
  "documentValidation": "507f1f77bcf86cd799439021",
  "face": "507f1f77bcf86cd799439022",
  "documentFace": "507f1f77bcf86cd799439023",
  "compareFaceVerification": "507f1f77bcf86cd799439024",
  "cryptoValidation": "507f1f77bcf86cd799439025",
  "formSubmission": "507f1f77bcf86cd799439026",
  "signature": "507f1f77bcf86cd799439027",
  "redFlags": 0,
  "redFlagsDetails": {},
  "language": "en",
  "accessControlLog": "507f1f77bcf86cd799439028",
  "failedEmailValidations": ["507f1f77bcf86cd799439029"],
  "failedPhoneValidations": ["507f1f77bcf86cd799439030"],
  "failedBiometricValidations": ["507f1f77bcf86cd799439031"],
  "failedDocumentValidations": ["507f1f77bcf86cd799439032"],
  "notes": "Additional verification required."
}
```
