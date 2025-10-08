# Dashboard

### Overview

**Verifik > SmartAccess** provides an interface for monitoring and managing authentication events, webhooks, and usage statistics. The **SmartAccess** project focuses on enabling a smooth and transparent authentication process with detailed status tracking and real-time data insights.

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FVzF9mPESXXdsodXMp8EE%2FScreenshot%202024-09-16%20at%206.57.10%E2%80%AFPM.png?alt=media&#x26;token=bd0f276e-97bd-4ee5-b3b3-ac5c4ef858bd" alt=""><figcaption></figcaption></figure>

#### Main Features

1. **Authentication Tab**
   * View all user authentication attempts, including the login type, date, and current status.
   * Search and filter the authentication logs by:
     * User name
     * Login type (Email, Phone, Biometrics, etc.)
     * Authentication status (Validated, Pending, Failed)
2. **Webhooks Tab**
   * Manage webhook integrations related to the authentication process.
   * View webhook delivery success or failure statuses, with detailed response data (optional).
3. **Statistics Tab**
   * Provides detailed insights into the authentication flow for your project.
   * Includes graphs and summaries showing daily authentication trends, success rates, and failed attempts.

***

### Authentication Tab

**Description**

The **Authentication** tab displays a comprehensive list of all the authentication attempts associated with your project. This allows administrators to track and monitor login activities across different methods.

**UI Elements**

* **Search Bar**: Enter a user's name or part of their login data to search specific records.
* **Filters**:
  * **Login Type**: Filter by Email, Phone, or Biometrics.
  * **Status**: Choose between "All", "Validated", "Pending", or "Failed" to view specific results.
* **Table Headers**:
  * **Name**: Displays the user's name who attempted login.
  * **Login Type**: Shows the method of login (e.g., Email or Phone).
  * **Login Data**: If applicable, shows phone numbers or email addresses.
  * **Date**: Date of the authentication attempt.
  * **Status**: The current validation status of the attempt.

**Authentication Log Example**

| Name                     | Login Type | Login Data | Date       | Status    |
| ------------------------ | ---------- | ---------- | ---------- | --------- |
| Carlos Bleck             | Email      | email      | 05/09/2024 | Validated |
| Zappier Testing          | Phone      | 5514968760 | 05/09/2024 | Validated |
| Enrique Dominguez        | Email      | email      | 05/09/2024 | Validated |
| Jorge                    | Email      | email      | 05/09/2024 | Validated |
| Alexander Treviño Garcia | Email      | email      | 05/09/2024 | Validated |

* **Status Indicators**:
  * 🟢 Validated: The authentication attempt was successful.
  * 🟡 Pending: The authentication attempt is pending review or further action.
  * 🔴 Failed: The authentication attempt was unsuccessful.

***

### Statistics Tab

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FZfsczq369m3p5iO1rzbx%2FScreenshot%202024-09-16%20at%206.57.16%E2%80%AFPM.png?alt=media&#x26;token=aee949ca-71a3-4257-8a35-933170f29933" alt=""><figcaption></figcaption></figure>

**Description**

The **Statistics** tab provides a detailed view of the authentication events and performance metrics over time.

**Main Components**

1. **Authentications Day Summary (Graph)**:
   * A line graph showing the number of authentication attempts throughout the month.
   * The graph is segmented into:
     * **Validated** (Green Line)
     * **Pending** (Orange Line)
     * **Failed** (Red Line)
2. **Authentication Results (Donut Chart)**:
   * Breaks down the types of authentications used during the month.
     * **Email**: 27.66%
     * **Biometrics**: 33.51%
     * **Phone**: 38.83%
3. **Login Method Results (Donut Chart)**:
   * Provides the success rate for different login methods.
     * **Validated**: 66.49%
     * **Pending**: 31.91%
     * **Failed**: 1.60%

***

#### Example Scenarios

**Use Case 1: Checking User Authentication Status**

* Navigate to the **Authentication** tab.
* Use the **Search Bar** to find a user by name or email/phone.
* Filter the list by **Login Type** to only show users who logged in via email or phone.
* Review the **Status** column to determine if their login was successful (validated), pending, or failed.

**Use Case 2: Monitoring Authentication Performance**

* Navigate to the **Statistics** tab.
* Review the **Authentications Day Summary** graph to observe trends in successful and failed attempts.
* Use the **Authentication Results** and **Login Methods Results** donut charts to see the distribution of login types and success rates for the current month.

***

#### Conclusion

The **SmartAccess** project within Verifik's client app provides a powerful interface to monitor, manage, and analyze authentication events for any project. Its clear UI, real-time statistics, and flexible filtering options make it an essential tool for project administrators looking to ensure secure and reliable user authentication processes.
