# Phone Validations

Phone Validations are the core verification system within Verifik that processes and validates user phone numbers during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their phone ownership through secure verification codes sent via SMS or WhatsApp.

### **How Phone Validations Work**

Every Phone Validation represents a single phone verification session that processes user-submitted phone numbers. When someone enters their phone number during signup, login, or account verification, Verifik creates a Phone Validation to send a secure verification code and confirm the user's phone ownership.

Currently, Phone Validations support these types:

* **validation** - Standard phone verification process
* **login** - Phone verification for user authentication
* **onboarding** - Phone verification for new user registration
* **oneTimeLink** - Single-use access link verification

### **What Phone Validations Store**

Phone Validations are comprehensive verification systems that define every aspect of phone verification:

**Phone Information:**

* Phone number and country code
* User name and contact details
* Project and client association
* Verification method and security settings

**Communication Settings:**

* SMS or WhatsApp delivery options
* Language preferences for messages
* Custom message templates
* Delivery confirmation tracking

**Security & Compliance:**

* Secure OTP generation and storage
* Phone number validation and formatting
* IP address tracking for security
* Two-factor authentication support

**Geographic Coverage:**

* Country code validation and support
* Regional phone number formats
* Local compliance requirements
* International verification capabilities

### **Key Configuration Areas**

**Basic Information:**

* **Phone Number**: User's mobile phone number
* **Country Code**: International dialing code (e.g., +1, +44)
* **Phone Gateway**: SMS, WhatsApp, or both delivery methods
* **Language**: Preferred language for verification messages

**Verification Settings:**

* **OTP Generation**: Secure verification codes for users
* **Expiration Time**: Automatic code expiration for security
* **Delivery Method**: SMS, WhatsApp, or both options
* **Retry Limits**: Number of verification attempts allowed

**Security Features:**

* **Two-Factor Authentication**: Optional additional security layer
* **IP Tracking**: Monitor verification request locations
* **OTP Hashing**: Secure storage of verification codes
* **Webhook Notifications**: Real-time status updates

**Integration Options:**

* **Redirect URLs**: Where users go after verification
* **Webhook URLs**: External notification endpoints
* **Custom Parameters**: Additional data for your systems
* **Status Tracking**: Real-time verification progress

### **Getting Started**

1. **Set up your phone verification settings** (SMS/WhatsApp preferences, language options)
2. **Configure your security requirements** (OTP expiration, retry limits, 2FA)
3. **Define your delivery methods** (SMS, WhatsApp, or both)
4. **Set up your integration points** (redirects, webhooks, notifications)
5. **Test your configuration** before going live

### **What Happens When You Create a Phone Validation**

1. **Verification Created**: Verifik creates a phone verification with a unique ID
2. **OTP Generated**: A secure verification code is created and stored
3. **Message Delivered**: Verification code is sent via SMS or WhatsApp
4. **User Verification**: User enters the OTP code to complete verification
5. **Status Updated**: Final status is recorded (validated, failed, or expired)

### **Monitoring and Management**

* **Status Tracking**: Monitor if your phone validations are new, sent, validated, or failed
* **Delivery Confirmation**: Track successful SMS and WhatsApp deliveries
* **Success Rates**: Monitor verification completion rates
* **Security Monitoring**: Track suspicious activity or failed verifications

### **Use Cases**

* **User Registration**: Verify phone numbers during account creation
* **Password Reset**: Secure phone verification for account recovery
* **Login Verification**: Additional security for user authentication
* **Account Updates**: Verify phone changes for existing accounts
* **Onboarding Flows**: Phone verification as part of KYC processes

Phone Validations give you complete control over how phone numbers are verified in your system, ensuring high security standards while providing users with convenient verification options through their preferred communication method.
