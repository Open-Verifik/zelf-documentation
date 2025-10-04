# SmartEnroll

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

### 1. **Basic Configuration**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FLapZuQWAZA6FRdOPbKDH%2Fimage.png?alt=media&#x26;token=335d76e2-966b-4bcb-b2b9-3242a595b681" alt=""><figcaption></figcaption></figure>

#### Project Information

This section is where the core project settings are configured. Each field serves a specific purpose:

* **Project Name**: This is a required field where the user enters the name of their project. It will be used across all references to the project within the Verifik ecosystem.
* **Allowed Countries**: This is where users specify which countries their KYC process will be applicable to. They can select from a predefined list (Canada, Colombia, Mexico, Panama, and the United States). Additional countries can be added by typing the country name in the input field.
* **Email**: The email address associated with the project. This is the contact point for all correspondence related to this project.
* **Privacy Policy (URL)**: A mandatory field where users provide a link to their Privacy Policy document. This ensures compliance with local and international data protection laws.
* **Terms and Conditions (URL)**: A field where the user provides a URL to their Terms and Conditions, which will be shown to the end users during the KYC process.

#### **Data Protection Officer (DPO) Contact Information:**

* **Owner’s Name**: The legal representative of the project or the designated Data Protection Officer's name.
* **Email**: The email address of the person responsible for data protection and compliance.
* **Address**: The primary address (optional).
* **Country, City, Postal Code**: Location details for the Data Protection Officer, which might be required for regulatory purposes.

**Key Note**: This setup phase ensures all legal and basic configurations are aligned before the project can proceed to the next step.

***

### 2. **Signup Form**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FIYHfQWtBv9NfiKGzLDwK%2FScreenshot%202024-09-16%20at%208.11.31%E2%80%AFAM.png?alt=media&#x26;token=2343f684-9b6d-4a6a-a988-7bec9693db04" alt=""><figcaption></figcaption></figure>

In this step, users configure the fields they want to collect from end-users during the signup process.

* **Full Name**: The system allows for flexibility in how names are captured. Users can choose between:
  * First and last names together (a single input field).
  * First and last names separated (two distinct input fields for each part of the name).
* **Email**: You can opt to validate the email address by toggling between "Validate" or "Don't validate."
* **Phone**: Users can decide if phone verification will be done via:
  * WhatsApp
  * SMS
  * Both (WhatsApp and SMS)
  * Don't validate (skip phone number validation).
* **Show Terms and Conditions**: A toggle to display Terms and Conditions to the end-users during the signup process.
* **Show Privacy Policies**: Similar to the Terms and Conditions, this toggle will show privacy policies at the signup stage.
* **Role and Company**: The platform allows users to ask for additional optional fields like Role and Company information. These fields are toggled on or off based on the business's needs.

**Key Note**: This step provides flexibility in data collection while ensuring necessary legal agreements (Terms & Privacy Policies) are presented to the user.

***

### 3. **Document Scanning**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FGx0gz6PUXFYDIDJQ2Ys2%2Fimage.png?alt=media&#x26;token=4d72e8bf-4ba2-4c31-95d2-d17e207c247c" alt=""><figcaption></figcaption></figure>

In this step, the user can configure document verification for identity validation.

* **Valid Documents**: The platform supports scanning and verifying various government-issued documents. Users can select which types of documents are acceptable for their KYC process. Options typically include:
  * Government Identity Document
  * Passport
  * Driving License
* **Set an Attempt Limit**: This allows users to define how many failed document scans are permitted before the process is locked. The range is customizable, from 3 up to 10 attempts. This is critical for controlling potential fraudulent attempts and ensuring efficient resource use.

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2F9W3kCazrCB3xB0MHK80z%2Fimage.png?alt=media&#x26;token=2823e65a-405e-46bf-9a5e-8a92b9c81b2e" alt=""><figcaption></figcaption></figure>

* **ID Verification Methods**:
  * **Option 1**: Upload a digital copy of an ID document.
  * **Option 2**: Use the device’s camera to scan the physical ID for real-time verification.
* **Data Base Screening**: Additional checks can be done against government databases. Users can add:
  * **ID Verification with Government Sources**: Compares the extracted information with official records to verify the authenticity of the document.
  * **Criminal Record Check**: Queries databases to see if the individual has a criminal record.

**Key Note**: This step is where the user sets up verification methods to authenticate documents with an additional layer of security via external checks.

***

### 4. Biometric Registration

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FsWArjrOFo4DlzeW4i96n%2Fimage.png?alt=media&#x26;token=a84fc493-3af7-4868-b970-b5d978f6e36d" alt=""><figcaption></figcaption></figure>

**Biometric Registration:** This is the biometric verification part of the flow, where a user’s face is checked to confirm their presence during the onboarding process.

* **Set an Attempt Limit**: Specifies how many times a user can fail liveness detection before being blocked from continuing. The allowed attempts can be customized from 3 to 10.
* **Liveness Score:** Customize the threshold for liveness detection. This score determines how stringent the system is in verifying that the biometric input is from a live person, not a static image or video. The default recommendation is 50%, which ensures the liveness check works optimally on most devices.
* **Compare Score:** This score sets the accuracy of comparing (1:1) the face of the end user to the document provided. A higher score means an more security,  stricter matching criteria, and demands a higher resemblance to the user in order to gain access. The recommended score for optimal performance is 85%.&#x20;

***

### 5. **Connect Database**

This step is critical for integrating your KYC process with external databases or using CSV files for lists, such as blacklists. This step offers flexibility based on the size, type, and frequency of updates to your data.

**Blacklist Management: Uploading a CSV or Connecting via API**

**1. Upload a Blacklist (CSV):**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FGEHQGu6EdVClRG79r9jM%2Fimage.png?alt=media&#x26;token=6d9314e3-0412-4035-a095-e988d0365d98" alt=""><figcaption></figcaption></figure>

* **When to Use a CSV**:
  * **Static or Small Lists**: CSV files are ideal when you have a fixed, smaller blacklist that doesn’t change frequently. This can include cases where your blacklist is composed of a few hundred entries, such as known fraudulent individuals, or blocked entities, whose data will not change over time.
  * **No Database or Simple System**: If your organization does not maintain a dynamic database or prefers not to deal with the complexity of database integration, a CSV upload provides an easy-to-use alternative. This is especially useful for small businesses or those with limited technical resources.
  * **Offline Maintenance**: In environments where internet access may be limited, or for businesses that manually track their lists (e.g., using Excel or other offline tools), uploading a CSV allows for periodic updates without the need for a connected, always-online solution.
* **How it Works**:
  * Users can upload a CSV file containing up to **500 entries per load**. These entries represent the individuals or entities you want to block from accessing your system.
  * Once uploaded, the platform uses this blacklist to **restrict access** to anyone on the list, preventing them from completing the KYC process.
* **Key Benefits**:
  * **Simplicity**: No need for API setup or a constantly updated database. Users can manage and upload CSVs as needed.
  * **Low Maintenance**: Suitable for organizations that do not expect frequent changes or updates to their blacklists.
  * **Cost-Effective**: No need for investing in additional infrastructure or services to manage databases dynamically.

**2. Connect with API: Dynamic Blacklist Management**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FwpHgQIQYnau9lS3cHE6K%2Fimage.png?alt=media&#x26;token=bae7fdb8-a51e-4bc7-9496-9a05f635d20b" alt=""><figcaption></figcaption></figure>

* **When to Use an API**:
  * **Dynamic and Frequently Updated Lists**: APIs are ideal for larger, dynamic blacklists that are constantly changing or need real-time updates. This could be the case for organizations that deal with a large volume of customer data or want to automatically sync with third-party systems to ensure their blacklist is always up to date.
  * **Centralized Database**: For businesses that already maintain a centralized database or wish to connect their systems for real-time validation, API integration ensures that blacklist data is pulled and applied in real-time during the KYC process.
  * **Multiple Sources**: If the blacklist needs to be compiled from multiple external sources or databases, an API allows you to integrate those systems seamlessly.
* **How it Works**:
  * Users provide an **API endpoint** that the system will use to dynamically pull blacklist data.
  * This ensures that every time a user attempts to sign up or complete the KYC process, the system queries the API to check whether that individual is on the blacklist.
  * The API connection ensures that any changes made to your blacklist (additions or removals) are immediately reflected in the KYC process without requiring manual intervention.
* **Key Benefits**:
  * **Real-Time Updates**: API connections ensure that your blacklist is always up to date, reflecting any changes or new entries as soon as they happen.
  * **Efficiency**: For businesses that need to manage large-scale or frequently changing blacklists, APIs streamline the process, reducing manual work and potential errors.
  * **Scalability**: As your business grows, the API connection can scale to accommodate larger datasets and integrate with other systems, making it ideal for more complex environments.

***

### Project connections

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FFPbIzejJlsvmoGW6JQoR%2Fimage.png?alt=media&#x26;token=29ac6700-d0b2-434d-b0b6-af2b884416a2" alt=""><figcaption></figcaption></figure>

**Webhook Integration:**

* Users can also configure a [**Webhook**](https://docs.verifik.co/resources/webhooks) to receive notifications every time a new entry is added, or someone attempts to access the system who is on the blacklist. This enhances the system’s capability for real-time alerts and monitoring.

**Redirection URL:**

* After completing the KYC process, users will be redirected to a specific URL that you configure. This URL can be customized based on your flow (e.g., redirection to a dashboard, further actions, or simply a thank-you page).

***

### 6. **Customize the Style**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2Fm8iklkIkSPd8pKPqoc46%2FScreenshot%202024-09-16%20at%208.48.06%E2%80%AFAM.png?alt=media&#x26;token=83459575-fe06-4eea-b2f5-b2daa34a97d0" alt=""><figcaption></figcaption></figure>

This section enables full customization of the KYC flow’s visual elements:

* **Logo**: Users can upload their company logo, which will be displayed throughout the KYC process.
* **Image**: Users can upload additional images to accompany the KYC flow for a more personalized experience.
* **Colors**: The interface allows users to select a color scheme to match their brand identity. Customizations include:
  * Title Color
  * Text Color
  * Button Color
  * Background Color
  * Right Background Color (for specific UI components).

**Key note**: Customization ensures that the Verifik Client App seamlessly aligns with the user’s branding guidelines.

***

### 7. **Invite Your Staff**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2F81uOLSSamxwaGRUYN2PH%2FScreenshot%202024-09-16%20at%209.04.08%E2%80%AFAM.png?alt=media&#x26;token=13f5f8ba-2041-49c9-9e61-6603748429ef" alt=""><figcaption></figcaption></figure>

* **Project Members**: Users can manage their team by inviting team members to collaborate on the project. Each member can be assigned a specific role, such as "editor," allowing them certain permissions within the project.
* **Invite Members**: This field enables users to search and invite new members from their workspace to join the project.

**Key note**: This feature provides team collaboration and role management to enhance project efficiency.
