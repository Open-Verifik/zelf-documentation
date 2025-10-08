# The Project Object

### **Attributes**

***

**`name` - String - Required**

Name that you want to put to the project.

***

**`allowedCountries` - Array - Required**

Countries where your project will be used, there must be defined properly otherwise Verifik can't send OTP to this countries.

***

**`contactEmail` - String - Required**

Email for managing your project, this must be real and have an inbox.

***

**`privacyUrl` - String - Required**

URL where users will be redirected if they use Verifik UI if you want to show legal information.

***

**`termsAndConditionsUrl` - String - Required**

URL where users will be redirected if they use Verifik UI if you want to show legal information.

***

**`status` - String - Required**

Current status of the project. Can be "draft" or "active",

***

**`collectionCode` - String - Read-Only**

Collection identifier for the project.

***

**`currentStep` - Number - Optional**

Current step number in the project workflow.

***

**`lastStep` - Number - Optional**

Last step number in the project workflow.

***

**`projectMembers` - Array - Optional**

Array of project member references.

***

**`branding` - Object - Optional**

Object to represent a brand using Verifik UI. It has the following params:

* `bgColor` - Background color hex code
* `borderColor` - Border color hex code
* `txtColor` - Text color hex code
* `titleColor` - Title color hex code
* `logo` - Logo URL or base64 string
* `buttonColor` - Button background color hex code
* `buttonTxtColor` - Button text color hex code
* `rightBackgroundColor` - Right side background color
* `rightImage` - Right side image URL
* `rightImagePosition` - Right image position CSS value
* `secondaryButtonColor` - Secondary button background color hex code
* `secondaryButtonTextColor` - Secondary button text color hex code
* `tabColor` - Tab color hex code

***

**`dataProtection` - Object - Optional**

Object to add information related to information about who's making the project. It has the following parameters:

* `name` - Company/organization name
* `email` - Contact email address
* `address` - Primary address
* `address2` - Secondary address (optional)
* `city` - City name
* `country` - Country name
* `postalCode` - Postal/ZIP code

***

### The Project Object

```json
{
    "__v": 0,
    "_id": "507f1f77bcf86cd799439011",
    "allowedCountries": ["Colombia"],
    "assignedCollection": "507f1f77bcf86cd799439012",
    "client": "507f1f77bcf86cd799439013",
    "collectionCode": "PROJECT_2024",
    "contactEmail": "contact@example.com",
    "lastStep": 1,
    "name": "Example Project Documentation",
    "currentStep": 0,
    "privacyUrl": "https://example.com/privacy",
    "projectMembers": [],
    "status": "draft",
    "termsAndConditionsUrl": "https://example.com/terms",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z",
    "dataProtection": {
        "address": "123 Main Street",
        "address2": null,
        "city": "Example City",
        "country": "Colombia",
        "email": "support@example.com",
        "name": "Example Company",
        "postalCode": "12345"
    },
    "branding": {
        "bgColor": "#ffffff",
        "borderColor": "#B2BDD3",
        "buttonColor": "#B2BDD3",
        "buttonTxtColor": "#FFFFFF",
        "logo": "https://example.com/logo.png",
        "rightBackgroundColor": "white",
        "rightImage": null,
        "rightImagePosition": "center center",
        "secondaryButtonColor": "#B2BDD3",
        "secondaryButtonTextColor": "#FFFFFF",
        "tabColor": "#01236D",
        "titleColor": "#FFFFFF",
        "txtColor": "#212121"
    }
}
```
