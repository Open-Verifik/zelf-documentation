# Project Flows

Project Flows are the blueprints that define how users will verify their identity in your system. Think of them as the instruction manual that tells Verifik exactly what steps to follow, what information to collect, and how strict to be during the verification process.

### **How Project Flows Work**

Every Project Flow is a configuration template that defines the complete user verification journey. When someone wants to use your system, Verifik follows your Project Flow step-by-step to ensure they meet your security and compliance requirements.

Currently, Project Flows support these types:

* **onboarding** - For new users to enroll and create accounts
* **login** - For existing users to access your system

**What Project Flows Configure**

Project Flows are comprehensive configuration systems that define every aspect of your verification process:

**User Experience:**

* Which forms to show and in what order
* What information is required vs. optional
* How users can submit documents
* Whether signatures are needed

**Security Settings:**

* Who can access your system (whitelist/blacklist)
* How strict to be with identity verification
* What security checks to perform
* How to handle suspicious activity

**Verification Methods:**

* Document types to accept (ID, passport, license)
* Biometric verification requirements
* Email and phone verification options
* Criminal history checks

**Communication:**

* How to send verification emails
* SMS or WhatsApp for phone verification
* Custom messages and instructions
* Language preferences

### **Key Configuration Areas**

**Onboard Settings:**

* **Steps**: Which verification steps are mandatory, optional, or skipped
* **Forms**: What user information to collect
* **Documents**: Which ID types to accept and how to validate them
* **Biometrics**: Face verification requirements and settings

**Security Settings:**

* **Strategy**: How to control access (whitelist, blacklist, or open)
* **Source**: Where security rules come from (API, CSV, or none)
* **Validation**: Custom security checks and thresholds

**Communication Settings:**

* **Email Gateway**: How verification emails are sent
* **Phone Gateway**: SMS, WhatsApp, or both for phone verification
* **Custom Messages**: Personalized instructions and prompts

### **Getting Started**

1. **Create your Project** first (this contains basic information about your system)
2. **Choose your Flow Type** based on your needs (onboarding for new users, login for existing users)
3. **Configure the specific settings** for your chosen flow type
4. **Set security parameters** to match your compliance requirements
5. **Test your configuration** before going live

**What Happens When You Create a Flow**

1. **Template Created**: Verifik creates a configuration template based on your settings
2. **Settings Applied**: All your verification rules and requirements are configured
3. **Ready for Use**: The flow is ready to process user verifications
4. **Active Processing**: Users can now go through your configured verification process

**Monitoring and Management**

* **Status Tracking**: Monitor if your flows are active, paused, or in draft
* **Version Control**: Keep track of changes and updates to your flows
* **Performance Metrics**: See how well your verification process is working
* **Security Monitoring**: Track access attempts and identify potential issues

Project Flows give you complete control over how users verify their identity in your system, allowing you to balance security requirements with user experience while ensuring compliance with your business needs.
