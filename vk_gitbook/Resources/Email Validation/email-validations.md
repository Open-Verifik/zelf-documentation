# Email Validations

Email Validations are the core verification system within Verifik that processes and validates user email addresses during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their email ownership through secure verification codes.

### **How Email Validations Work**

Every Email Validation represents a single email verification session that processes user-submitted email addresses. When someone enters their email during signup, login, or account verification, Verifik creates an Email Validation to send a secure verification code and confirm the user's email ownership.

Currently, Email Validations support these types:

* **validation** - Standard email verification process
* **login** - Email verification for user authentication
* **onboarding** - Email verification for new user registration
* **oneTimeLink** - Single-use access link verification

### **What Email Validations Track**

Email Validations are comprehensive verification systems that process every aspect of email verification:

**Email Information:**

* Email address and ownership verification
* User name and contact details
* Project and client association
* Verification method and security settings

**Verification Process:**

* One-time password (OTP) generation and delivery
* Email sending status and delivery confirmation
* OTP expiration and security measures
* Multiple verification attempts tracking

**Validation Results:**

* Overall verification status (new, sent, validated, failed)
* OTP matching and security validation
* User authentication completion
* Redirect and webhook notifications

**Security & Compliance:**

* Secure OTP hashing and storage
* IP address tracking for security monitoring
* Two-factor authentication support
* Webhook notifications for real-time updates

### **Key Tracking Areas**

**Progress Tracking:**

* **Status**: Current verification state (new, sent, validated, failed)
* **Validation Method**: How the email is being verified (verification code or manual)
* **Input Method**: How the email was submitted

**Email Processing:**

* **OTP Generation**: Secure verification codes sent to users
* **Delivery Status**: Confirmation of email delivery
* **Expiration Management**: Automatic OTP expiration for security

**Identity Verification:**

* **Email Ownership**: Confirms users control the email address
* **User Authentication**: Validates user identity for login processes
* **Account Creation**: Ensures legitimate user registration

### **Getting Started**

1. **Create your Project** first (this contains basic information about your system)
2. **Create your Project Flow** to define the verification process
3. **Email Validations are created automatically** when users submit email addresses
4. **Monitor progress** through the API to track verification completion

### **What Happens During a Validation**

1. **Email Submitted**: User enters their email address during signup or login
2. **Validation Created**: Verifik creates an Email Validation with a unique ID
3. **OTP Generated**: A secure verification code is created and sent to the user
4. **Email Delivered**: Verification code is sent via email with project branding
5. **User Verification**: User enters the OTP code to complete verification
6. **Completion**: Final status is recorded (validated, failed, or expired)

### **Monitoring and Management**

* **Real-time Status**: Check current progress of any email validation
* **Bulk Operations**: List and manage multiple validations
* **Detailed Analytics**: Track success rates and delivery statistics
* **Security Monitoring**: Monitor for suspicious activity or failed verifications

### **Security Features**

* **Secure OTPs**: Verification codes are automatically hashed for security
* **Automatic Expiration**: OTPs expire after a set time for security
* **IP Tracking**: Monitor the location of verification requests
* **Two-Factor Support**: Optional additional security layer
* **Webhook Notifications**: Real-time updates on verification status

### **Use Cases**

* **User Registration**: Verify email addresses during account creation
* **Password Reset**: Secure email verification for account recovery
* **Login Verification**: Additional security for user authentication
* **Account Updates**: Verify email changes for existing accounts
* **Onboarding Flows**: Email verification as part of KYC processes

**Note**: Email Validations are specifically for **email address verification processes**. They work in conjunction with App Registrations and other verification systems to provide complete user authentication, ensuring compliance with security standards while maintaining a smooth user experience.

Email Validations give you complete visibility into how email addresses are processed and verified in your system, allowing you to maintain high security standards while ensuring users can easily verify their email ownership during the authentication process.
