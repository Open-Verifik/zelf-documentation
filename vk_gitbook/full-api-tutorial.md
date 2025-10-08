# Full API Tutorial

### Overview

Smart Enroll is our automated user onboarding solution that handles identity verification through a series of configurable steps. This guide explains how to set up and implement a full API Smart Enroll solution for your application.

### What You'll Need to Set Up

Before users can enroll, you need to configure two main components:

1. Project - Basic information about your enrollment system
2. Project Flow - Rules for how users complete their enrollment

### Step-by-Step Setup Process

<table data-view="cards"><thead><tr><th></th><th data-type="content-ref"></th></tr></thead><tbody><tr><td>Step 1: API - Create a Project</td><td><a href="../../resources/projects/create-a-project">create-a-project</a></td></tr><tr><td>Step 2: API - Create a Project Flow</td><td><a href="../../resources/project-flows/create-a-project-flow">create-a-project-flow</a></td></tr></tbody></table>

#### 1. Create Your Project

Start by creating a project that will contain all your enrollment configurations.

{% content-ref url="../../resources/projects/create-a-project" %}
[create-a-project](https://docs.verifik.co/resources/projects/create-a-project)
{% endcontent-ref %}

#### 2. Configure Your Project Flow

Set up the rules that determine how users will complete their enrollment process.

{% content-ref url="../../resources/project-flows/create-a-project-flow" %}
[create-a-project-flow](https://docs.verifik.co/resources/project-flows/create-a-project-flow)
{% endcontent-ref %}

**Project Flow Configuration Options**

You can configure your enrollment process with different levels of verification.

{% tabs %}
{% tab title="Basic Enrollment (Optional KYC)" %}

```json
{
    "project": "your-project-id",
    "type": "onboarding",
    "status": "active",
    "redirectUrl": "https://your-app.com",
    "onboardingSettings": {
        "steps": {
            "signUpForm": "mandatory",
            "basicInformation": "skip",
            "document": "optional",
            "liveness": "optional",
            "form": "skip"
        }
    }
}
```

{% endtab %}

{% tab title="Full Verification (Mandatory KYC)" %}

```json
{
    "project": "your-project-id",
    "type": "onboarding",
    "status": "active",
    "redirectUrl": "https://your-app.com",
    "onboardingSettings": {
        "steps": {
            "signUpForm": "mandatory",
            "basicInformation": "skip",
            "document": "mandatory",
            "liveness": "mandatory",
            "form": "skip"
        }
    }
}
```

{% endtab %}
{% endtabs %}

You can view all available options and setup information for [project flows](https://docs.verifik.co/resources/project-flows/create-a-project-flow)

***

### How the Enrollment Process Works

#### General Flow

The recommended flow is made up of the following steps:

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-type="content-ref"></th><th data-type="content-ref"></th><th data-hidden data-card-cover data-type="image">Cover image</th></tr></thead><tbody><tr><td>Initialize a User Registration Record</td><td><a href="../../resources/app-registrations/create-an-app-registration">create-an-app-registration</a></td><td></td><td><a href="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FXjB7MIN69ul3sFYWtmMJ%2Faccess.verifik.co_sign-up_6893c99becea934c17f45c7f%20(1).png?alt=media&#x26;token=10c96216-6c7a-4f99-9bb7-dc91c3f385c7">access.verifik.co_sign-up_6893c99becea934c17f45c7f (1).png</a></td></tr><tr><td>One-Time-Password Registrant Verification</td><td><a href="../../resources/email-validations/create-an-app-registration-email-validation">create-an-app-registration-email-validation</a></td><td><a href="../../resources/phone-validations/create-an-app-registration-phone-validation">create-an-app-registration-phone-validation</a></td><td><a href="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FZjY7l03WfLAHj1y1m3Ei%2Faccess.verifik.co_sign-up_6893c99becea934c17f45c7f%20(3).png?alt=media&#x26;token=4ad9a681-0450-41dc-aba7-3f3b45d981e2">access.verifik.co_sign-up_6893c99becea934c17f45c7f (3).png</a></td></tr><tr><td>Document Validation (If Applicable)</td><td><a href="../../resources/document-validations/create-an-app-registration-document-validation">create-an-app-registration-document-validation</a></td><td></td><td><a href="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FY87r07qnCsUn77wgP0wN%2FScreenshot%202025-08-22%20at%2012.57.41%E2%80%AFPM.png?alt=media&#x26;token=d146c994-5adc-4d0e-a82e-2bec82b2dc62">Screenshot 2025-08-22 at 12.57.41 PM.png</a></td></tr><tr><td>Biometric Validation (If Applicable)</td><td><a href="../../resources/biometric-validations/create-an-app-registration-biometric-validation">create-an-app-registration-biometric-validation</a></td><td></td><td><a href="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FJtpU9hb7t7tNO2qArvox%2FScreenshot%202025-08-22%20at%201.15.07%E2%80%AFPM.png?alt=media&#x26;token=7be20b6a-b123-4eae-a649-02e5531b5361">Screenshot 2025-08-22 at 1.15.07 PM.png</a></td></tr><tr><td>Face Verification (If Applicable)</td><td><a href="../../resources/face-verification/face-verification-for-app-registration">face-verification-for-app-registration</a></td><td></td><td><a href="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2Fyzl1k5yWR9FxEDQb0UBn%2FScreenshot%202025-08-22%20at%201.17.51%E2%80%AFPM.png?alt=media&#x26;token=6a46cb01-093c-4f36-af22-3c46178db6c8">Screenshot 2025-08-22 at 1.17.51 PM.png</a></td></tr></tbody></table>

#### Additional Services

Verifik Smart Enroll provides two more additional services you can add to the flow at additional cost (Geographical Restrictions apply):

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-type="content-ref"></th></tr></thead><tbody><tr><td>Name Validation</td><td><a href="../../resources/document-validations/create-a-name-validation">create-a-name-validation</a></td></tr><tr><td>Criminal/Background Checks</td><td><a href="../../resources/information-validations/request-a-criminal-check">request-a-criminal-check</a></td></tr></tbody></table>

#### 1. User Registration

When a user wants to enroll, you create an App Registration record for them.

{% content-ref url="../../resources/app-registrations/create-an-app-registration" %}
[create-an-app-registration](https://docs.verifik.co/resources/app-registrations/create-an-app-registration)
{% endcontent-ref %}

{% hint style="danger" %}
**IMPORTANT**: Creating the App Registration record your enrollment will provide you with a `token` in the response. This token will be required in the `Headers` of all requests pertaining to this registrant.
{% endhint %}

#### 2. Contact Information Verification

Based on your configuration, users will need to verify their email and/or phone number:

**Email Verification**

* Send a 6-digit code to the user's email

{% content-ref url="../../resources/email-validations/create-an-app-registration-email-validation" %}
[create-an-app-registration-email-validation](https://docs.verifik.co/resources/email-validations/create-an-app-registration-email-validation)
{% endcontent-ref %}

* User enters the code to verify their email address

{% content-ref url="../../resources/email-validations/validate-an-app-registration-email-validation" %}
[validate-an-app-registration-email-validation](https://docs.verifik.co/resources/email-validations/validate-an-app-registration-email-validation)
{% endcontent-ref %}

**Phone Verification**

{% hint style="danger" %}
SMS and WhatsApp OTP's are subject to usage charges
{% endhint %}

* Send a 6-digit code via SMS or WhatsApp

{% content-ref url="../../resources/phone-validations/create-an-app-registration-phone-validation" %}
[create-an-app-registration-phone-validation](https://docs.verifik.co/resources/phone-validations/create-an-app-registration-phone-validation)
{% endcontent-ref %}

* User enters the code to verify their phone number

{% content-ref url="../../resources/phone-validations/validate-an-app-registration-phone-validation" %}
[validate-an-app-registration-phone-validation](https://docs.verifik.co/resources/phone-validations/validate-an-app-registration-phone-validation)
{% endcontent-ref %}

#### 3. Identity Document Verification (If Required)

If your flow requires document verification:

* User uploads a photo of their government ID, passport, or driver's license
* Our system extracts information using OCR technology
* System determines if additional document sides are needed

{% content-ref url="../../resources/document-validations/create-an-app-registration-document-validation" %}
[create-an-app-registration-document-validation](https://docs.verifik.co/resources/document-validations/create-an-app-registration-document-validation)
{% endcontent-ref %}

#### 4. Biometric Verification (If Required)

If your flow requires biometric verification:

* Capture your users face via a webcam or front-facing camera
* System performs liveness detection to ensure the person is real
* System checks for duplicate enrollments
* Compares results against your configured minimum scores

{% content-ref url="../../resources/biometric-validations/create-an-app-registration-biometric-validation" %}
[create-an-app-registration-biometric-validation](https://docs.verifik.co/resources/biometric-validations/create-an-app-registration-biometric-validation)
{% endcontent-ref %}

#### 5. Face Verification (If Required)

If your flow contains both Document Validations and Biometric Validations, you can run this additional endpoint to compare the face of the document, to the biometric data. This provides an extra verification layer to ensure the document and biometrics face match.

* You must successfully capture the users document with a face
* You must successfully capture the biometrics
* A score will be provided for you to validate against

{% content-ref url="../../resources/face-verification/face-verification-for-app-registration" %}
[face-verification-for-app-registration](https://docs.verifik.co/resources/face-verification/face-verification-for-app-registration)
{% endcontent-ref %}

### What Happens Next?

Once all required verifications are complete:

* Verify you are happy with the information collected: [retrieve-an-app-registration](https://docs.verifik.co/resources/app-registrations/retrieve-an-app-registration "mention")&#x20;
* Call the [sync-app-registration-status](https://docs.verifik.co/resources/app-registrations/sync-app-registration-status "mention") with `step: end` and `status: "COMPLETED"`&#x20;
* If the sync runs successfully, the response will contain the final `token`
  * This token can now be used to `redirect` to your application to create a session for the user
  * E.g., `https://verifik.co?token={token}`
* All verification data is stored securely in your project
* You can access the verification results through our API

### Getting Help

If you need assistance with any part of the setup process, refer to the detailed technical documentation linked throughout this guide, or contact our support team.
