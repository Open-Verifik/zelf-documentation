---
id: create-an-app-login
title: Create an App Login
description: App Logins are created automatically through validation methods
---

# Create an App Login

You cannot create an instance of an `AppLogin` directly. This is a product of interactions between the user and the login options defined in the **Project > ProjectFlow**. AppLogins are generated automatically when the user performs one of the following validation methods:

* **Email Validation**
* **Phone Validation**  
* **Biometric Validation**

The AppLogin is tied to the respective validation method used during the login process. Refer to the examples below for the different login methods and how they interact with the AppLogin object.

## Access via Email Example

This example illustrates how an AppLogin is created when the user logs in using an email validation method. The AppLogin will contain an `emailValidation` field that tracks the email-related authentication details.

## Access via Phone Example

This example shows how an AppLogin is created when the user logs in using a phone validation method. The AppLogin will contain a `phoneValidation` field that tracks the phone-related authentication details.

## Access via Biometric Example

This example demonstrates how an AppLogin is created when the user logs in using a biometric validation method. The AppLogin will contain a `biometricValidation` field that tracks the biometric-related authentication details.

## Automatic Creation Process

1. **User Initiates Login**: User starts the login process through your application
2. **Validation Method Selected**: Based on the ProjectFlow configuration, a validation method is triggered
3. **Validation Process**: The selected validation method (email, phone, or biometric) is executed
4. **AppLogin Creation**: Upon successful validation, an AppLogin record is automatically created
5. **Token Generation**: An authentication token is generated and associated with the AppLogin

## Important Notes

* **No Direct Creation**: AppLogins cannot be created via API calls
* **Automatic Generation**: They are automatically generated during the validation process
* **Validation Dependency**: Each AppLogin is tied to a specific validation method
* **ProjectFlow Configuration**: The login behavior is controlled by your ProjectFlow settings

## Related Endpoints

* [Email Validation](../email-validations/create-an-email-validation)
* [Phone Validation](../phone-validations/create-a-phone-validation)
* [Biometric Validation](../biometric-validations/create-a-biometric-validation)
