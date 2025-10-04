# The Phone Validation Object

The Phone Validation object represents the process of verifying phone numbers within your Verifik projects. This object contains all the information needed to track and manage phone verification requests.

### **Attributes**

#### **`client`** - ObjectId - Read-Only

The client account that owns this phone validation. This is automatically set based on your authentication token.

#### **`project`** - ObjectId - Optional

The project where this phone validation is being performed. This is the `_id` generated when creating a project.

#### **`projectFlow`** - ObjectId - Required

The project flow where this phone validation is being performed. This is the `_id` generated when creating a project flow.

#### **`status`** - String - Required

The current status of the phone validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"sent"` - Verification code has been sent to the user
* `"validated"` - Phone has been successfully verified
* `"failed"` - Phone validation failed or expired

#### **`countryCode`** - String - Required

The international dialing code for the phone number (e.g., "+1" for US, "+44" for UK, "+57" for Colombia).

#### **`phone`** - String - Required

The phone number that will be validated in the verification process (without the country code).

#### **`phoneGateway`** - String - Required

The method used to send verification codes. Can be:

* `"whatsapp"` - Send via WhatsApp (default)
* `"sms"` - Send via SMS text message
* `"none"` - No verification code sent

#### **`type`** - String - Required

The type of process this phone validation is for. Can be:

* `"validation"` - General phone validation (default)
* `"login"` - User authentication process
* `"onboarding"` - User registration process
* `"oneTimeLink"` - Single-use access link

#### **`otp`** - String - Optional

The one-time password (OTP) code sent to the user for verification. This field is automatically hashed for security.

#### **`expiresAt`** - Date - Optional

The timestamp when the OTP code expires. After this time, the validation code becomes invalid.

#### **`name`** - String - Optional

The name associated with the phone number being validated.

#### **`phoneData`** - Object - Optional

Additional data related to the phone validation process, such as delivery status or message information.

#### **`extraParams`** - Object - Optional

Additional parameters that can be passed with the phone validation request.

#### **`redirectUrl`** - String - Optional

URL where users will be redirected after completing the phone validation process.

#### **`webhookUrl`** - String - Optional

External webhook URL for receiving real-time notifications about validation status changes.

#### **`requires2FA`** - Boolean - Optional

Indicates whether two-factor authentication is required for this validation. Defaults to `false`.

#### **`ipAddress`** - String - Optional

The IP address of the user requesting the phone validation.

#### **`language`** - String - Optional

The language for verification messages. Can be "en" for English or "es" for Spanish. Defaults to "en".

### The Phone Validation Object

```json
{
    "client": "507f1f77bcf86cd799439011",
    "project": "507f1f77bcf86cd799439012",
    "projectFlow": "507f1f77bcf86cd799439013",
    "status": "sent",
    "countryCode": "+57",
    "phone": "3208364280",
    "phoneGateway": "whatsapp",
    "type": "onboarding",
    "otp": "hashed_otp_code",
    "expiresAt": "2024-01-01T23:59:59.000Z",
    "name": "John Doe",
    "phoneData": {},
    "extraParams": {},
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://api.client.com/webhooks/verifik",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "language": "en",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Important Notes

* **Security**: OTP codes are automatically hashed using bcrypt for security
* **Expiration**: OTP codes have a default expiration time for security purposes
* **Status Tracking**: The status field provides real-time updates on validation progress
* **Gateway Options**: Choose between WhatsApp, SMS, or no verification based on your needs
* **Language Support**: Messages can be sent in English or Spanish
* **2FA Support**: Optional two-factor authentication for enhanced security

The Phone Validation object integrates seamlessly with your project flows and provides comprehensive tracking of the phone verification process from creation to completion.
