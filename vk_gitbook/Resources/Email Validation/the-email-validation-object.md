# The Email Validation Object

The Email Validation object represents the process of verifying email addresses within your Verifik projects. This object contains all the information needed to track and manage email validation requests.

### **Attributes**

#### **`client`** - ObjectId - Optional

The client account that owns this email validation. This is automatically set based on your authentication token.

***

#### **`project`** - ObjectId - Optional

The project where this email validation is being performed. This is the `_id` generated when creating a project.

***

#### **`projectFlow`** - ObjectId - Required

The project flow where this email validation is being performed. This is the `_id` generated when creating a project flow.

***

#### **`status`** - String - Required

The current status of the email validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"sent"` - Verification email has been sent to the user
* `"validated"` - Email has been successfully verified
* `"failed"` - Email validation failed or expired

***

#### **`validationMethod`** - String - Required

Defines how the email will be validated. Can be:

* `"verificationCode"` - Send OTP code via email (default)
* `"manual"` - Manual verification process

***

#### **`email`** - String - Required

The email address that will be validated in the verification process.

***

#### **`type`** - String - Required

The type of process this email validation is for. Can be:

* `"validation"` - General email validation (default)
* `"login"` - User authentication process
* `"onboarding"` - User registration process

***

#### **`otp`** - String - Read-Only

The one-time password (OTP) code sent to the user for verification. This field is automatically hashed for security.

***

#### **`expiresAt`** - Date - Optional

The timestamp when the OTP code expires. After this time, the validation code becomes invalid.

***

#### **`name`** - String - Optional

The name associated with the email address being validated.

***

#### **`extraParams`** - Array of Strings - Optional

Additional parameters that can be passed with the email validation request.

***

#### **`redirectUrl`** - String - Optional

URL where users will be redirected after completing the email validation process.

***

#### **`webhookUrl`** - String - Optional

External webhook URL for receiving real-time notifications about validation status changes.

***

#### **`requires2FA`** - Boolean - Optional

Indicates whether two-factor authentication is required for this validation. Defaults to `false`.

***

#### **`ipAddress`** - String - Optional

The IP address of the user requesting the email validation.

***

#### **`emailData`** - Object - Optional

Additional data related to the email validation process, such as delivery status or bounce information.

***

### The Email Validation Object

```json
{
    "client": "507f1f77bcf86cd799439011",
    "project": "507f1f77bcf86cd799439012",
    "projectFlow": "507f1f77bcf86cd799439013",
    "status": "sent",
    "validationMethod": "verificationCode",
    "email": "user@example.com",
    "type": "onboarding",
    "otp": "hashed_otp_code",
    "expiresAt": "2024-01-01T23:59:59.000Z",
    "name": "John Doe",
    "extraParams": ["param1", "param2"],
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://api.client.com/webhooks/verifik",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "emailData": {}
}
```

### Important Notes

* **Security**: OTP codes are automatically hashed using bcrypt for security
* **Expiration**: OTP codes have a default expiration time for security purposes
* **Status Tracking**: The status field provides real-time updates on validation progress
* **Webhook Support**: Configure webhooks to receive instant notifications about validation events
* **Multiple Types**: Support for different validation scenarios (login, onboarding, general validation)
* **2FA Support**: Optional two-factor authentication for enhanced security

The Email Validation object integrates seamlessly with your project flows and provides comprehensive tracking of the email verification process from creation to completion.
