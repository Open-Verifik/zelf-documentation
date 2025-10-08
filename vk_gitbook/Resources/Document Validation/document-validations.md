# Document Validations

Document Validations are the core verification system within Verifik that processes and validates user identity documents during the app registration process. Think of them as the quality control system that ensures documents are authentic, readable, and match the user's claimed identity.

### **How Document Validations Work**

Every Document Validation represents a single document verification session that processes user-submitted identity documents. When someone uploads or scans their ID, passport, or license, Verifik creates a Document Validation to analyze the document, extract information, and verify its authenticity.

Currently, Document Validations support these types:

* **validation** - Standard document verification process
* **login** - Document verification for login flows
* **signup** - Document verification for new user registration
* **ocr** - Optical character recognition processing
* **demo** - Demonstration and testing purposes

**What Document Validations Track**

Document Validations are comprehensive verification systems that process every aspect of identity documents:

**Document Information:**

* Document type and category (ID, passport, license)
* Document number and identification details
* Country and nationality verification
* Age and gender information extraction

**Verification Process:**

* Input method (camera, file upload, or not set)
* Image validation and quality assessment
* OCR text extraction and processing
* Name matching and scoring percentages

**Validation Results:**

* Overall verification status
* Name match percentages (first name, last name, full name)
* Document authenticity scores
* Manual review requirements

**Security & Compliance:**

* Validation method used (manual, OCR, scan prompt, scan studio)
* Back-side document requirements
* Webhook notifications and callbacks
* Redirect URLs for user flow

### **Key Tracking Areas**

**Progress Tracking:**

* **Status**: Current verification state (ASSESSING, ACTIVE, FAILED, NEEDS\_MANUAL\_VERIFICATION, etc.)
* **Validation Method**: How the document is being processed
* **Input Method**: How the document was submitted

**Document Analysis:**

* **OCR Extraction**: Text and data extracted from the document
* **Image Validation**: Quality and authenticity of submitted images
* **Score Validation**: Numerical scores for document authenticity

**Identity Verification:**

* **Name Matching**: Percentage match between document and user information
* **Information Validation**: Support for various validation types
* **Template Processing**: AI-powered document analysis

### **Getting Started**

1. **Create your Project** first (this contains basic information about your system)
2. **Create your Project Flow** to define the verification process
3. **Document Validations are created automatically** when users submit documents
4. **Monitor progress** through the API to track verification completion

**What Happens During a Validation**

1. **Document Submitted**: User uploads or scans their identity document
2. **Validation Created**: Verifik creates a Document Validation with a unique ID
3. **Processing Begins**: Document goes through OCR, image analysis, and verification
4. **Results Generated**: Verification scores and status are calculated
5. **Completion**: Final status is recorded (ACTIVE, FAILED, NEEDS\_MANUAL\_VERIFICATION, etc.)

**Monitoring and Management**

* **Real-time Status**: Check current progress of any document validation
* **Bulk Operations**: List and manage multiple validations
* **Detailed Analytics**: Track success rates and identify bottlenecks
* **Security Alerts**: Monitor for suspicious documents or failed verifications

**Note**: Document Validations are specifically for **identity document verification processes**. They work in conjunction with App Registrations to provide complete user verification, ensuring compliance with KYC requirements and security standards.

Document Validations give you complete visibility into how identity documents are processed and verified in your system, allowing you to maintain high security standards while ensuring a smooth user experience during the verification process.
