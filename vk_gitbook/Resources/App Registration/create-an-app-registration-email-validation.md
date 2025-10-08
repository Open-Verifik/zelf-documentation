# Create an App Registration Email Validation

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/email-validations/app-registration`

This endpoint creates an email validation process specifically for users who are in the middle of an app registration flow. It automatically links the email validation to the user's app registration and handles credit charging for your SmartEnroll plan. A successful response (200) indicates that Verifik has sent an email with an OTP that will be used to complete the email verification process.

### **Headers**

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

{% hint style="warning" %}
The JWT Token you should use when creating `App Registration Email Validations` is provided from the [`App Registration`](https://docs.verifik.co/resources/app-registrations/create-an-app-registration).
{% endhint %}

### **Body**

<table><thead><tr><th width="182.1805419921875">Name</th><th width="97.4200439453125">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>project</code></td><td>string</td><td>The project ID where this email validation will be performed. This is the <code>_id</code> generated when creating a project.</td></tr><tr><td><code>validationMethod</code></td><td>string</td><td>Defines how the email will be validated. Must be either "manual" or "verificationCode".</td></tr><tr><td><code>email</code></td><td>string</td><td>The email address that will be validated. This field is required and will be automatically converted to lowercase.</td></tr><tr><td><code>type</code></td><td>string</td><td>The type of process this email validation is for. Must be one of: "validation", "login", "onboarding", or "oneTimeLink".</td></tr><tr><td><code>expiresAt</code></td><td>string</td><td>Optional timestamp when the OTP code expires. If not provided, a default expiration time will be set.</td></tr><tr><td><code>redirectUrl</code></td><td>string</td><td>Optional URL where users will be redirected after completing the email validation process.</td></tr><tr><td><code>webhookUrl</code></td><td>string</td><td>Optional external webhook URL for receiving real-time notifications about validation status changes.</td></tr><tr><td><code>requires2FA</code></td><td>boolean</td><td>Optional boolean indicating whether two-factor authentication is required. Defaults to false.</td></tr><tr><td><code>ipAddress</code></td><td>string</td><td>Optional IP address of the user requesting the email validation.</td></tr></tbody></table>

#### **`validationMethod` Values**

| Value              | Description                                   |
| ------------------ | --------------------------------------------- |
| "verificationCode" | Send OTP code via email for user verification |
| "manual"           | Manual verification process without OTP       |

#### **`type` Values**

<table><thead><tr><th width="165.3583984375">Value</th><th>Description</th></tr></thead><tbody><tr><td>"validation"</td><td>General email validation process<br><br>For general validation purposes - <strong>you must use</strong> <a data-mention href="create-an-email-validation">create-an-email-validation</a></td></tr><tr><td>"login"</td><td>User authentication process<br><br>For login validation purposes - <strong>you must use</strong> <a data-mention href="create-an-email-validation">create-an-email-validation</a></td></tr><tr><td>"onboarding"</td><td>User registration process</td></tr></tbody></table>

### Body (Basic App Registration Email Validation)

```json
{
    "project": "6266193db77ccc8111730c90",
    "validationMethod": "verificationCode",
    "email": "user@example.com",
    "type": "onboarding"
}
```

### Body (Advanced App Registration Email Validation)

```json
{
    "project": "6266193db77ccc8111730c90",
    "validationMethod": "verificationCode",
    "email": "user@example.com",
    "type": "onboarding",
    "expiresAt": "2024-12-31T23:59:59.000Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://api.client.com/webhooks/verifik",
    "requires2FA": true,
    "ipAddress": "192.168.1.1"
}
```

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "status": "sent",
        "validationMethod": "verificationCode",
        "extraParams": [],
        "type": "onboarding",
        "requires2FA": false,
        "deleted": false,
        "_id": "65c28d66c3abd708cc9b12e2",
        "email": "user@example.com",
        "project": "6266193db77ccc8322530c90",
        "projectFlow": "658ed28b02589f325134d7b78",
        "ipAddress": "4.246.194.90",
        "emailData": {
            "firstName": "John",
            "title": "Verifik Client App",
            "projectName": "Verifik Client App",
            "contactEmail": "support@verifik.co",
            "logo": "https://cdn.verifik.co/access/verifikprojectlogo.png",
            "authLink": "https://access.verifik.co/sign-up/6266193db77ccc8111730c90?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&otp="
        },
        "otp": "$2a$10$MCdw130G.RbW4je9Uj2MvuSTzm7.raG23f0Zaasda0FKC1Gl98r0s4D1m",
        "expiresAt": "2024-02-06T19:59:58.000Z",
        "client": "613375a1eab2fe01237f81e2",
        "updatedAt": "2024-02-06T19:49:59.397Z",
        "createdAt": "2024-02-06T19:49:59.397Z",
        "__v": 0,
        "existing": false,
        "sent": true
    }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "message": "missing project\n. missing validationMethod\n. missing email\n. missing type",
    "code": "MissingParameter"
}
```

{% endtab %}
{% endtabs %}

### Important Notes

* **App Registration Linking**: This endpoint automatically links the email validation to the user's app registration using the `appRegistrationId` from the authentication token
* **Credit Charging**: Each email validation request consumes credits from your SmartEnroll plan (handled automatically by `ClientSmartEnrollPlanModule.chargeEmailCount`)
* **Enhanced Email Data**: The system automatically populates additional email data including the user's first name from their information validation if available
* **Auth Link Generation**: For onboarding flows, the system generates a secure JWT token and auth link for seamless user experience
* **Duplicate Prevention**: If an active email validation already exists for the same email, project flow, and type, the system will resend the existing OTP instead of creating a new one
* **Security Features**: The system validates email security policies and identity verification requirements based on your project flow configuration

### Use Cases

* **User Registration**: Send verification emails during the signup process
* **Onboarding Flows**: Verify email addresses as part of the KYC process
* **App Registration Integration**: Seamlessly integrate email validation with your existing app registration system
* **SmartEnroll Projects**: Perfect for projects that require email verification as part of the enrollment process

Once your app registration email validation is created successfully, you can use the `_id` returned in the response to track the validation status and complete the verification process using the Update Email Validation endpoint.
