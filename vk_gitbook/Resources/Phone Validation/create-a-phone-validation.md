# Create a Phone Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/phone-validations`

A Phone Validation is an instance within Verifik's system that allows you to process and validate phone numbers during authentication and registration processes. This process ensures the authenticity of user phone numbers and provides secure verification through SMS or WhatsApp delivery methods.

### **Headers**

<table><thead><tr><th width="245.0330810546875">Name</th><th>Value</th></tr></thead><tbody><tr><td>Content-Type</td><td><code>application/json</code></td></tr></tbody></table>

### **Body**

<table><thead><tr><th width="178.447021484375">Name</th><th width="140.6622314453125">Type</th><th>Description</th><th data-hidden>Required</th></tr></thead><tbody><tr><td><code>project</code></td><td>string</td><td>The unique identifier for the project where this phone validation will be used.</td><td><strong>Yes</strong></td></tr><tr><td><code>validationMethod</code></td><td>string</td><td>The validation method, set to <code>verificationCode</code>.</td><td><strong>Yes</strong></td></tr><tr><td><code>phone</code></td><td>string</td><td>The phone number that will be validated (spaces will be automatically removed).</td><td><strong>Yes</strong></td></tr><tr><td><code>countryCode</code></td><td>string</td><td>The country code of the phone number in format <code>+XXX</code> (e.g., <code>+507</code> for Panama).</td><td><strong>Yes</strong></td></tr><tr><td><code>type</code></td><td>string</td><td>Type of validation: <code>validation</code>, <code>login</code>, <code>onboarding</code>, or <code>oneTimeLink</code>.</td><td><strong>Yes</strong></td></tr><tr><td><code>expiresAt</code></td><td>string</td><td>Optional expiration date for the validation code.</td><td>No</td></tr><tr><td><code>redirectUrl</code></td><td>string</td><td>Optional URL for redirect after validation.</td><td>No</td></tr><tr><td><code>webhookUrl</code></td><td>string</td><td>Optional webhook URL for validation notifications.</td><td>No</td></tr><tr><td><code>identityUrl</code></td><td>string</td><td>Optional identity verification URL.</td><td>No</td></tr><tr><td><code>requires2FA</code></td><td>boolean</td><td>Optional flag indicating if two-factor authentication is required.</td><td>No</td></tr><tr><td><code>ipAddress</code></td><td>string</td><td>Optional IP address of the user.</td><td>No</td></tr></tbody></table>

#### **`validationMethod` Values**

| Value              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `verificationCode` | Sends a one-time password (OTP) to the phone number for verification. |
| `manual`           | Manual verification process without OTP.                              |

#### **`type` Values**

| Value        | Description                                                                                                                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validation` | General phone number validation.                                                                                                                                                                                             |
| `login`      | Phone verification during user login.                                                                                                                                                                                        |
| `onboarding` | <p>Phone verification during user registration.<br><br><strong>For onboarding - you must use</strong> <a data-mention href="create-an-app-registration-phone-validation">create-an-app-registration-phone-validation</a></p> |

### **Body Examples**

#### **Basic Phone Validation**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "validationMethod": "verificationCode",
  "phone": "62647737",
  "countryCode": "+507",
  "type": "validation"
}
```

#### **Advanced Phone Validation**

```json
{
  "project": "507f1f77bcf86cd799439011",
  "validationMethod": "verificationCode",
  "phone": "62647737",
  "countryCode": "+507",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://yourapp.com/success",
  "webhookUrl": "https://yourapp.com/webhook",
  "identityUrl": "https://yourapp.com/identity",
  "requires2FA": false,
  "ipAddress": "192.168.1.1"
}
```

### **Response**

The response will contain information about the new `Phone Validation` instance. Important fields include the unique identifier `_id`, the `status` of the validation process, and the encrypted OTP that was sent to the user.

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "client": "507f1f77bcf86cd799439013",
    "project": "507f1f77bcf86cd799439011",
    "projectFlow": "507f1f77bcf86cd799439015",
    "status": "sent",
    "countryCode": "+507",
    "phone": "62647737",
    "phoneGateway": "whatsapp",
    "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
    "expiresAt": "2024-12-02T17:15:35.000Z",
    "phoneData": {},
    "type": "validation",
    "redirectUrl": "https://api.verifik.co",
    "requires2FA": false,
    "ipAddress": "172.17.0.1",
    "language": "en",
    "_id": "674de8df21c72be3cc42b8a7",
    "updatedAt": "2024-12-02T17:05:36.788Z",
    "createdAt": "2024-12-02T17:05:36.788Z",
    "__v": 0,
    "new": true
  }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "Invalid countryCode format. CountryCode should be in the format + followed by 1 to 3 digits."
}
```

{% endtab %}
{% endtabs %}

### **Notes**

* **Country Code Format**: The `countryCode` must be in the format `+XXX` where X are digits (1-3 digits maximum).
* **Phone Number**: Spaces in phone numbers are automatically removed during processing.
* **OTP Security**: The OTP is encrypted using bcrypt before storage for security.
* **Default Gateway**: Phone validations default to WhatsApp delivery method.
* **Credit System**: This endpoint automatically reduces credits from your account for each phone validation created.

Once your **Phone Validation** is created, you can use the `_id` field to validate the OTP sent to the user's phone number using the Validate Phone Validation endpoint.
