# Liveness

## L**iveness Guide**

Liveness detection is a crucial component of the digital identification authentication process. It is a technology that verifies the authenticity of a person's facial features in real-time, ensuring that the individual is physically present and not an attempt at impersonation or a Deepfake.

Face Detection allows for the detection, recognition, and verification of faces in images.

This advanced technology boasts a high completion rate, rapid user verification time, and an exceptional detection rate for Deepfakes, making it an effective tool for Know Your Customer (KYC) and Anti-Money Laundering (AML) processes.

This guide will explain how to use Verifik's Liveness service from start to finish, covering the initial steps to properly detecting a face within an image using all the APIs provided by Verifik.

### **How does Verifik's Liveness work?**

Verifik's Liveness (life detection) operates by generating a score (between 0–1) for an image, determining the degree of liveliness in that image. A liveliness score below 0.5 indicates that the image has a 50% risk of being compromised by the sender (end-user). Conversely, a liveliness score between 0.5–1.0 ensures a higher degree of liveliness. Below, we will explain some use cases for each of the Liveness scores.

#### **Work Hours Registration**

Imagine that a company has created an app that allows for the registration and authentication of employees for tracking work hours. In this case, the engineers have determined that the biometric registration and authentication must generate a liveliness score within the range of 0.5–0.75 to successfully register workers.

#### **Registration with Financial Entity**

Imagine that a Fintech company has created an app that allows users to register digitally. In this case, the engineers have determined that the biometric registration must generate a liveliness score equal to or higher than 0.75 to enable the successful registration of end-users.

### **What services does Verifik offer for liveness detection?**

In this documentation, there are 18 tools for the management of individuals and collections, fulfilling specific functionalities and allowing various actions to be performed, including or excluding processes of Liveness (life detection).

#### **Liveness**

**This guide introduces the services that perform the Liveness process**. The tools or services that include Liveness have the description **(Live or Liveness)** in their title.

Specifically, the services that perform liveness detection are as follows:

* [Create Persons | Live](https://www.notion.so/Create-Persons-Live-fe33ffd8edcd4c1ebe9cb1cd129e5f96?pvs=21)
* [Compare 1:1 | Live](https://www.notion.so/Compare-1-1-Live-dad85a1c43b248098ada7cddad41b97b?pvs=21)
* [Search 1:N | Live](https://www.notion.so/Search-1-N-Live-970299bba5f24ff59b45b988042efb23?pvs=21)
* [Liveness Detect](https://www.notion.so/Liveness-Detect-01a86a47c8a04cbc93cce68cd4b8344b?pvs=21)

### **Other Guides**

Once this guide is completed, the next step is to review the other guides found in this documentation:

* [Collection and Persons Guide](https://www.notion.so/Collection-y-Persons-2a2a56f36c6e486db917970851185c84?pvs=21)
* [**Compare Guide**](https://www.notion.so/Compare-a8cc18ae7e594d3f8d420c1f342effa3?pvs=21)
* [**Search Guide**](https://www.notion.so/Search-02fe51a1b5d9432a9685d35b098c41f9?pvs=21)
