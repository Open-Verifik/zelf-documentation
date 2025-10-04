# Information Validations

Information Validations are comprehensive identity verification records within Verifik's system that store and manage all the personal information collected during the user onboarding process. Think of them as the central database that holds everything we know about a user's identity, from their basic details to verification results and background check outcomes.

### **How Information Validations Work**

Every Information Validation represents a single user's complete identity profile that gets built up throughout the verification process. When someone goes through your onboarding system, Verifik creates an Information Validation record to store all their personal information, verification results, and compliance data in one organized place.

Currently, Information Validations are designed for:

* **onboarding** - New user registration and onboarding

### **What Information Validations Store**

Information Validations are comprehensive identity management systems that track every aspect of user verification:

**Personal Information:**

* Full name, first name, and last name
* Age and date of birth
* Gender identification
* Contact details and address information
* Company and job role information

**Document Verification:**

* Document type and number
* Verification method used (manual, OCR, hybrid, or data API)
* Document validation results and match percentages
* Names matching verification between documents and user input

**Verification Results:**

* Overall validation status and progress
* Individual verification step outcomes
* Background check results and criminal history data
* Manual verification requirements and notes

**Compliance & Security:**

* KYC process completion status
* Identity verification outcomes
* Security flags and risk assessments
* Audit trails for compliance purposes

### **Key Tracking Areas**

**Identity Verification:**

* **Personal Details**: Complete user profile including name, age, gender, and contact information
* **Document Information**: ID documents, verification methods, and validation results
* **Address Details**: Country, city, postal code, and full address information
* **Professional Information**: Company name and job role details

**Verification Status:**

* **Current Status**: Overall verification progress (ASSESSING, ACTIVE, FAILED, NEEDS\_MANUAL\_VERIFICATION)
* **Validation Method**: How the information was verified (manual review, OCR scanning, or data API)
* **Match Percentages**: How well user-provided information matches official documents
* **Verification Notes**: Any special requirements or manual review notes

**Security & Compliance:**

* **Background Check Data**: Criminal history verification results
* **Risk Assessment**: Security flags and compliance requirements
* **Audit Information**: Complete verification history and timestamps
* **Extra Parameters**: Additional data for specific compliance needs

### **Getting Started**

1. **Set up your Project** first (this contains basic information about your system)
2. **Configure your Project Flow** to define what information you need to collect
3. **Information Validations are created automatically** when users start the verification process
4. **Monitor verification progress** through the API to track completion and identify issues

### **What Happens During Information Validation**

1. **User Provides Information**: Someone enters their personal details during onboarding
2. **Validation Record Created**: Verifik creates an Information Validation with a unique ID
3. **Data Collection**: Each piece of information is stored and organized
4. **Verification Process**: Information is validated against documents and databases
5. **Status Updates**: Verification results and progress are continuously updated
6. **Completion**: Final status is recorded (ACTIVE, FAILED, or NEEDS\_MANUAL\_VERIFICATION)

### **Verification Methods**

**Manual Verification:**

* Human review of submitted information
* Best for complex cases or special requirements
* Provides detailed feedback and notes

**OCR (Optical Character Recognition):**

* Automatic text extraction from document images
* Fast and efficient for standard documents
* Reduces manual data entry errors

**Hybrid OCR:**

* Combines automatic and manual verification
* Balances speed with accuracy
* Good for documents with complex formatting

**Data API:**

* Direct integration with government databases
* Real-time verification against official records
* Highest accuracy for supported regions

### **Status Tracking**

**ASSESSING:**

* Information is being collected and verified
* User is still in the onboarding process
* Verification steps are in progress

**ACTIVE:**

* All required information has been verified
* User meets compliance requirements
* Account is ready for activation

**FAILED:**

* Verification requirements were not met
* User needs to provide additional information
* Manual review may be required

**NEEDS\_MANUAL\_VERIFICATION:**

* Automatic verification couldn't complete
* Human review is required
* Special handling needed for compliance

### **Monitoring and Management**

* **Real-time Status**: Check current verification status of any user
* **Bulk Operations**: List and manage multiple verification records
* **Detailed Analytics**: Track success rates and identify bottlenecks
* **Compliance Reporting**: Generate reports for regulatory requirements
* **Security Monitoring**: Track verification attempts and identify patterns

### **Common Use Cases**

* **User Onboarding**: Collect and verify new user information
* **KYC Compliance**: Meet regulatory requirements for identity verification
* **Risk Assessment**: Evaluate potential risks in business relationships
* **Audit Trails**: Maintain comprehensive records for compliance
* **Customer Verification**: Ensure users are who they claim to be

### **Integration with Other Systems**

Information Validations work seamlessly with other Verifik components:

* **App Registrations**: Track user progress through the onboarding process
* **Document Validations**: Verify identity documents and extract information
* **Background Checks**: Perform criminal history and compliance verification
* **Biometric Validations**: Add facial recognition and liveness detection
* **Webhook Notifications**: Real-time updates for external systems

### **Benefits for Your Business**

* **Complete Visibility**: See exactly what information has been collected and verified
* **Compliance Ready**: Built-in audit trails and verification records
* **Risk Management**: Identify potential issues before they become problems
* **Efficiency**: Automated verification reduces manual review time
* **Scalability**: Handle large numbers of users without compromising quality

**Note**: Information Validations are specifically for **storing and managing user identity data** during the verification process. They work together with [App Registrations](https://docs.verifik.co/resources/app-registrations.md) to provide complete visibility into how users progress through your verification system, allowing you to optimize the onboarding process and ensure compliance with your KYC and security requirements.

Information Validations give you complete control over how user identities are verified and stored in your system, ensuring the highest security standards while providing comprehensive audit trails for compliance and business intelligence purposes.
