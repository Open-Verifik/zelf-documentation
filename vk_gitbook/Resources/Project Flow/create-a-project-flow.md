# Create a Project Flow

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/project-flows`

Project Flows define configurations for a [Project](https://docs.verifik.co/resources/projects) in Verifik. In this context, we will define various data points that Verifik will use to perform validations using passwordless and liveness detection technologies.

<table data-card-size="large" data-view="cards"><thead><tr><th data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><a href="create-a-project-flow/smart-access-project-flow">smart-access-project-flow</a></td></tr><tr><td><a href="create-a-project-flow/smart-enroll-project-flow">smart-enroll-project-flow</a></td></tr></tbody></table>

### How Project Flows Work

Every Project Flow has a type that determines its purpose and behavior. Currently, Verifik supports two main flow types:

* login - For existing users to access your system
* onboarding - For new users to enroll and create accounts

### Choose Your Flow Type

#### Login Flows (type: "login")

Login flows are designed for existing users who need to verify their identity to access your system. They're typically faster and require less information since the user is already known to you.What you can configure:

* Email verification methods
* Phone verification (SMS/WhatsApp)
* Face liveness detection
* Security thresholds and search modes

Best for: Access control, secure logins, multi-factor authentication

#### Onboarding Flows (type: "onboarding")

Onboarding flows are for new users who need to create accounts and verify their identity for the first time. These are more comprehensive and collect more information.What you can configure:

* User registration forms
* Document verification (ID, passport, license)
* Biometric verification (selfie + liveness)
* Basic information collection
* Custom forms and signatures
* Criminal history verification

Best for: New user registration, KYC processes, compliance requirements

### Key Configuration Areas

Regardless of the flow type you choose, you'll configure these main areas:

#### Security Settings

* Strategy: How to handle verification results
* Source: Where security rules come from (API, CSV, or none)
* API Integration: Custom security validation endpoints

#### Communication Settings

* Email Gateway: How verification emails are sent
* Phone Gateway: SMS, WhatsApp, or both for phone verification

#### Verification Thresholds

* Liveness Scores: How strict to be with face verification
* Search Scores: How accurate duplicate detection should be
* Compare Scores: How closely documents should match

### Getting Started

1. [Create your Project](https://docs.verifik.co/resources/projects/create-a-project) first (this contains basic information about your system)
2. Choose your Flow Type based on your needs:
   1. Use `login` for access control
   2. Use `onboarding` for new user registration
3. Configure the specific settings for your chosen flow type
4. Set security parameters to match your compliance requirements

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td>Learn more about Smart Access Project Flows</td><td><a href="create-a-project-flow/smart-access-project-flow">smart-access-project-flow</a></td></tr><tr><td>Learn more about Smart Enroll Project Flows</td><td><a href="create-a-project-flow/smart-enroll-project-flow">smart-enroll-project-flow</a></td></tr></tbody></table>
