# Service Level Agreement

### **Service Level Agreement**

#### **I. Service Channels: The User shall have access to the following Verifik service channels**

1. CRM on [Verifik.co](http://verifik.co)
2. Email <support@verifik.co>
3. Customer service Discord channel

#### **II. Hours of Operation**

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM UTC-5

#### **III. Criticality levels**

The requests or requirements raised by Users to the support team will be classified according to the impact they have on the User's operation, as follows:

| **Critical:** | Total service unavailability.                                                |
| ------------- | ---------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                            |
| **Medium:**   | Loss of functionality in specific cases.                                     |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

#### **IV. Support Response times**

1. **Definitions**: Terms used in this section, shall have the following meanings:

```
i. Attention: The time elapsed between the request or requirement and
the assignment of a service agent.
ii. Review: The time elapsed between the agent's greeting and the first
response regarding the request or requirement.
iii. Escalation: The time elapsed between the agent's escalation and
the case review by the person to whom it was escalated. This time only
applies in events where it is necessary to escalate the user's
request or requirement.
iv. Resolution: The time elapsed between the agent's greeting and
the moment the case is resolved.
```

The response time varies according to the criticality of the requirement, as follows:

| <p><strong>SEVERITY/</strong></p><p><strong>TIME</strong></p> | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| ------------------------------------------------------------- | ------------- | ---------- | -------------- | -------------- |
| **Critical**                                                  | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Urgent**                                                    | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Medium**                                                    | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |
| **Normal**                                                    | 1 hrs         | 1 hrs      | 0.5 hr         | 96 hrs         |

**Note:** 48 hrs means that we take up to 48 hours to solve the incident depending on its complexity.

Response times will be counted from the last message sent by the user.

#### **V. Platform Availability:**

The Platform will be available for at least:

| **Product/AP**                             | **Availability**                                                                         | **Notes**                                                |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <p>SmartCHECK<br>(Data Base Screening)</p> | 90.0% > Data API                                                                         | Data API, depends on connections with Government Sources |
| smartACCESS                                | <p>99.0% > Email/Tel </p><p>98.0% > Biometrics</p>                                       |                                                          |
| smartENROLL                                | <p>99.0% > Email/Tel <br>98.0% > Biometrics <br>98.0% > Doc Scan<br>90.0% > Data API</p> | Data API, depends on connections with Government Sources |

**VI. Compensation for Downtime**&#x20;

Compensation in Credit awarded for the affected month will be provided in the form of a credit equal to the cost of the ineffective API call. If the unavailability of the service is caused by Verifik's Internal Problems (database, servers, internal API problems) and is not effectively resolved by the Company, Verifik will compensate as follows:

| **Uptime**                                                                                    | **Credit Compensation**                  | **Product**                       |
| --------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------- |
| <p><strong>Data API (Data Base Screening)</strong><br>90.00% or greater<br>89.99% or less</p> | <p><br><br>No Credit<br>Compensation</p> | smartCHECK                        |
| <p><strong>Email/Tel</strong><br>99.00% or greater<br>98.99% or less</p>                      | <p><br>No Credit<br>Compensation</p>     | <p>smartACCESS<br>smartENROLL</p> |
| <p><strong>Biometrics</strong><br>98.00% or greater<br>97.99% or less<br></p>                 | <p><br>No Credit<br>Compensation</p>     | <p>smartACCESS<br>smartENROLL</p> |
| <p><strong>Doc Scan</strong><br>98.00% or greater<br>97.99% or less</p>                       | <p></p><p>No Credit<br>Compensation </p> | <p>smartENROLL<br>smartACCESS</p> |

Internal Problems of the Data API service (Data Consultation) exclude problems considered by Force Majeure (Fortuitous Events) either due to migration, disconnection, or external intervention of the governments that guard the databases. Verifik is an intermediary, therefore, it does NOT have the power and control of the databases consulted.

#### VII. Data Base Service Charging Scheme

The charging scheme applies to the product smartCHECK, which allows the consultation of government databases. Verifik is not the owner, manager, or responsible (it does not control or update) of government databases of the different countries that we offer; therefore Verifik reserves from offering guarantees regarding “***Response Time***”, “***Average Up Time***”, or “***Data Accuracy***”.

If the query returns a **200** or **404**, it will be charged. If the query returns a **403**, **409**, **412**, **422,** or **500**, it will not be charged.

| **Charge** | **Absent of Charge** |
| ---------- | -------------------- |
| 200        | 403                  |
| 404        | 409                  |
|            | 412                  |
|            | 422                  |
|            | 500                  |

#### **VIII. There is no availability of the Platform**

Scheduled maintenance times will be carried out at night or on weekends, with prior communication via email to users.

#### **IX. Adaptations or New developments**

The periods for development or new adaptations (due to unexpected changes by the Users' systems that are integrated via API with the Platform) will vary according to the changes required by the User and will not count as Platform Downtime.
