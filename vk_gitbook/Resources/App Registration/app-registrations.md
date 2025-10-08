# App Registrations

App Registrations are individual user sessions within Verifik's system that allow people to go through the **onboarding and verification process** you've configured in your Project Flow. Think of them as the actual user journey through your new user registration system.

### How App Registrations Work

Every App Registration represents a single user's attempt to **create an account and verify their identity** using your configured Project Flow. When someone wants to **enroll in your system for the first time**, Verifik creates an App Registration to track their progress through the verification steps.

Currently, App Registrations are designed for:

* **onboarding** - For new users to enroll and create accounts

**What App Registrations Track**

App Registrations are comprehensive tracking systems for new user verification processes:

**User Progress:**

* Registration form completion
* Document verification status (ID, passport, license)
* Biometric verification results (selfie + liveness)
* Basic information collection progress
* Custom forms and signatures
* Criminal history verification outcomes

**Security Monitoring:**

* Red flags and security concerns
* Failed validation attempts
* Access control and attempt tracking

**Compliance:**

* KYC process completion
* Document verification results
* Identity validation outcomes

### Key Tracking Areas

**Progress Tracking:**

* **Current Step**: Where the user is in the verification process
* **Status**: Overall progress (STARTED, ONGOING, COMPLETED, FAILED, etc.)
* **Validation Results**: Success/failure of each verification step

**Security Monitoring:**

* **Red Flags**: Any security concerns detected during the process
* **Failed Validations**: Records of unsuccessful verification attempts
* **Access Control**: Tracking of verification attempts and patterns

**User Information:**

* **Contact Details**: Email, phone, and country information
* **Personal Data**: Name and other collected information
* **Language Preference**: User's preferred language for communication

### Getting Started

1. **Create your Project** first (this contains basic information about your system)
2. **Create your Project Flow** to define the verification process
3. **App Registrations are created automatically** when users start the onboarding process
4. **Monitor progress** through the API to track user completion and identify any issues

#### What Happens During a Registration

1. **User Initiates**: Someone starts the onboarding/verification process
2. **Registration Created**: Verifik creates an App Registration with a unique ID
3. **Progress Tracking**: Each step completion is recorded
4. **Validation Results**: Success/failure of each verification is stored
5. **Completion**: Final status is recorded (COMPLETED, FAILED, etc.)

#### Monitoring and Management

* **Real-time Status**: Check current progress of any registration
* **Bulk Operations**: List and manage multiple registrations
* **Detailed Analytics**: Track success rates and identify bottlenecks
* **Security Alerts**: Monitor for suspicious activity or failed attempts

**Note**: App Registrations are specifically for **new user onboarding and verification processes**. For existing user login flows, Verifik uses a separate system ([AppLogin](https://docs.verifik.co/resources/app-logins/create-an-app-login)) to track authentication attempts and manage access control.

App Registrations give you complete visibility into how new users progress through your verification system, allowing you to optimize the onboarding process and ensure compliance with your KYC and security requirements.
