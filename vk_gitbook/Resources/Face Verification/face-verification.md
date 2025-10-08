# Face Verification

Face Verification Routes are the core facial recognition system within Verifik that processes and validates user facial images during the app registration process. Think of them as the advanced security system that ensures users are who they claim to be by comparing their live facial images with their official document photos through sophisticated facial recognition technology.

{% hint style="warning" %}
Your App Registration must include the following:

* A successful Document Validation record attached to the App Registration record
* A successful Biometric Validation record attached to the App Registration record
  {% endhint %}

### **How Face Verification Routes Work**

Every Face Verification Route represents a single facial comparison session that processes user-submitted facial images against reference images. When someone needs to verify their identity during app registration, Verifik creates a Face Verification to capture live facial images, compare them with document photos, and confirm the user's identity through advanced facial recognition analysis.

Currently, Face Verification Routes support these types:

* **compare** - Standard facial comparison process
* **compareLive** - Live facial comparison with liveness detection
* **compareWithLiveness** - Advanced comparison with enhanced liveness verification
* **app-registration** - Specialized facial comparison for new user registration

### **What Face Verification Routes Store**

Face Verification Routes are comprehensive verification systems that define every aspect of facial recognition:

**Facial Information:**

* Live facial image data and document reference images
* User identity verification scores and comparison results
* Project and client association
* Verification method and security settings

**Comparison Settings:**

* Search mode configuration (FAST vs ACCURATE)
* Gallery and probe image management
* Liveness detection preferences
* Operating system and device tracking

**Security & Compliance:**

* Secure facial data storage with automatic expiration
* Advanced anti-spoofing technology
* IP address tracking for security
* Two-factor authentication support

**Integration Capabilities:**

* App registration workflow integration
* Webhook notifications for real-time updates
* Project flow configuration
* Custom parameter support

### **Key Configuration Areas**

**Basic Information:**

* **Gallery Images**: Reference facial images from official documents
* **Probe Images**: Live facial images captured during verification
* **Search Mode**: FAST for quick results or ACCURATE for precision
* **Client Association**: Specific client and project configuration

**Verification Settings:**

* **Liveness Detection**: Advanced anti-spoofing technology
* **Expiration Time**: Automatic session expiration for security (90 days in production)
* **Image Processing**: Automatic face cropping and optimization
* **Retry Limits**: Number of verification attempts allowed

**Security Features:**

* **Anti-Spoofing**: Prevents photo, video, or mask-based fraud
* **IP Tracking**: Monitor verification request locations
* **Score Thresholds**: Configurable minimum scores for verification
* **Webhook Notifications**: Real-time status updates

**Integration Options:**

* **App Registration Flow**: Seamless integration with user onboarding
* **Webhook URLs**: External notification endpoints
* **Custom Parameters**: Additional data for your systems
* **Status Tracking**: Real-time verification progress

### **Getting Started**

1. **Set up your facial verification settings** (search mode preferences, liveness detection)
2. **Configure your security requirements** (score thresholds, expiration times)
3. **Define your verification methods** (facial recognition, liveness detection)
4. **Set up your integration points** (webhooks, notifications)
5. **Test your configuration** before going live

### **What Happens When You Use Face Verification Routes**

1. **Verification Initiated**: Verifik creates a facial verification with a unique ID
2. **Image Processing**: Live facial images are captured and optimized
3. **Face Comparison**: Advanced algorithms compare live images with document photos
4. **Score Calculation**: Verification scores are calculated based on facial similarity
5. **Status Updated**: Final status is recorded (success or failed)

### **App Registration Flow Integration**

The app-registration flow is specifically designed for new user onboarding and provides:

**Automatic Integration:**

* Seamlessly connects with existing app registration workflows
* Automatically retrieves user facial images and document photos
* Integrates with project flow settings and webhook configurations
* Maintains verification history for audit purposes

**Enhanced Security:**

* Uses project-specific search mode settings
* Applies client-specific verification parameters
* Integrates with webhook systems for real-time notifications
* Maintains comprehensive audit trails

**User Experience:**

* Streamlined verification process during registration
* Automatic image processing and optimization
* Real-time status updates and notifications
* Seamless integration with existing workflows

### **Monitoring and Management**

* **Status Tracking**: Monitor if your face verifications are successful or failed
* **Score Analysis**: Track verification scores and success rates
* **Success Rates**: Monitor verification completion rates
* **Security Monitoring**: Track suspicious activity or failed verifications

### **Use Cases**

* **User Registration**: Verify identity during account creation
* **Document Verification**: Compare live photos with official documents
* **Account Updates**: Verify identity changes for existing accounts
* **Onboarding Flows**: Facial verification as part of KYC processes
* **High-Security Access**: Multi-factor authentication with facial recognition
* **Compliance Requirements**: Meet regulatory requirements for user verification

### **Advanced Features**

**Liveness Detection**: Advanced anti-spoofing technology that ensures the person being verified is physically present and not using a photo, video, or mask.

**Face Cropping**: Automatic detection and cropping of the largest face in images for optimal comparison accuracy.

**Image Optimization**: Automatic image size reduction and format optimization for better performance.

**Search Mode Options**: Choose between FAST mode for quick results or ACCURATE mode for maximum precision.

**Webhook Integration**: Real-time notifications for verification status changes and completion events.

Face Verification Routes give you complete control over how user facial identities are verified in your system, ensuring the highest security standards while providing users with convenient and secure verification options through advanced facial recognition technology.
