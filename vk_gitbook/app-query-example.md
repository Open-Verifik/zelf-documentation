# App Query example

### API Requests in Verifik

Verifik provides a powerful, no-code interface to validate people, businesses, vehicles, and more, across multiple countries. The platform offers a range of API endpoints that users can query to obtain various data points related to identity verification, business validation, vehicle registration checks, and even background screenings. Here’s a step-by-step guide on how to make API requests within the Verifik platform:

***

**1. Choosing an API Endpoint**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FNROWxI7KzRRpZTomJZ4K%2FScreenshot%202024-09-16%20at%209.18.08%E2%80%AFAM.png?alt=media&#x26;token=ce4d555f-d3e6-43de-bd19-b6c53c230d6c" alt=""><figcaption></figcaption></figure>

* **Search the API Here**: Start by selecting the type of validation you want to perform (person, business, or vehicle) by using the search bar. You can search by country and category (e.g., Identity, Background Check, Business Validation).
* **API Endpoints List**: The left sidebar provides a list of available API endpoints for validation. Each endpoint is labeled with:
  * A country flag (indicating which country's data it pulls from).
  * The type of service it offers (Identity, Background Check, Business Validation, etc.).
  * The cost per query (e.g., $0.05 per request). **The price it all depends on the plan you currently have in your account. Starting price is&#x20;*****$0.20*****&#x20;per API Request.**
* **Select Your API**: For example, if you want to validate a Colombian citizen, you can select the **Colombian Citizen Information** API (`/v2/co/cedula`), which retrieves identification details such as full name and identification number.

***

**2. Enter Input Parameters**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FKgYhLOmmxMGwb9lvSPW6%2FScreenshot%202024-09-16%20at%209.30.30%E2%80%AFAM.png?alt=media&#x26;token=66e69a80-e06e-4c5a-86fa-7eee2b43263d" alt=""><figcaption></figcaption></figure>

* **Document Type**: Once you’ve selected an API, input fields will appear. For identity verification APIs, you will typically need to enter a **document type** (e.g., CC for Colombian Cedula).
* **Document Number**: Enter the citizen’s **document number** in the field provided (e.g., `1023942106`).
* **Add More Queries**: You can add multiple queries to your list by selecting the “+ Add” button, allowing you to validate multiple people or documents in a single session.

**Dynamic Lists via API**: The system dynamically handles lists, so when you add a document number or any data to be validated, Verifik immediately queues this request in your session. This dynamic handling allows you to validate large lists quickly and efficiently.

***

**3. Viewing the Cart and Cost**

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FVZEvH9X0auBE61FJKSol%2FScreenshot%202024-09-16%20at%209.21.38%E2%80%AFAM.png?alt=media&#x26;token=77dde334-f5f8-4f4b-a452-460bb5e9f63b" alt=""><figcaption></figcaption></figure>

* **Cart Overview**: Once you’ve added one or more queries, the total cost for your requests is displayed on the right sidebar. You can review all queued API calls here.
  * Each API request shows the document number or input data you are querying.
  * The price per API call is clearly indicated, allowing you to keep track of the total cost.
* **Erase All**: If you want to remove all entries before proceeding, you can clear your cart by clicking the **Erase all** button.
* **Proceed with Query**: Once ready, click the **Query** button to execute the API calls and retrieve the data.

***

**4. Results and Response Data**

![](https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FnxqvOnI64gfQNisITURF%2FScreenshot%202024-09-16%20at%209.21.48%E2%80%AFAM.png?alt=media\&token=65af91fa-bfd4-492a-b44b-168804f82079)

* **Consulted Services**: After submitting the queries, the system returns results in the **Consultation Report**. For each document or validation request:
  * The API endpoint used (e.g., `/v2/co/cedula`).
  * The input parameters (e.g., Document Number and Document Type).
  * Results, including the person’s full name and document verification status.
* **No-code and JSON Views**: The results can be viewed in two formats:
  * **No-code View**: This presents the results in a human-readable table format.
  * **JSON View**: If you want to access the raw data or use it in your systems, the response is available in JSON format, which is useful for integrating results into your own applications or platforms.

**Key Information Returned**:

* **Full Name**: The full legal name associated with the document number.
* **Document Number**: The unique ID number provided.
* **Date of Birth** and **Expedition Date**: Some APIs may return private or semi-private data, such as birth dates, document issue dates, or additional details related to the document’s authenticity.

***

#### Supported Countries and Categories

Verifik’s API platform supports a wide range of countries and validation categories:

* **Countries Supported**: You can select different countries for your validation queries, including Colombia, Mexico, the United States, and more. The system dynamically lists all available APIs based on the selected country.
* **Validation Categories**:
  * **Identity Verification**: Verify individuals using national identification systems.
  * **Background Checks**: Check for criminal records, watchlist status, and more.
  * **Business Validation**: Verify the legitimacy of registered businesses, their legal status, and public filings.
  * **Vehicle Validation**: Retrieve information on vehicle registrations, ownership, and legal statuses.

***

#### Example of API Integration Code

For developers looking to integrate Verifik's API services into their own applications, here is an example of the JavaScript (Axios) code to perform an API request:

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY',
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error('Error making the request:', error);
}
```

**How it Works**:

* **Authorization**: Each request to the Verifik API requires a valid JWT token in the headers.
* **Endpoint**: The API URL specifies the country and type of data you’re querying (in this example, `/v2/co/cedula` is for Colombian Citizen Information).
* **Response**: The API will return a structured JSON response with the queried person’s data, which can be handled as needed by your application.

***

### Conclusion

Verifik’s platform offers a seamless no-code and API-driven solution for validating people, businesses, and vehicles across multiple countries. Whether you need real-time identity checks, business registrations, or background checks, Verifik’s dynamic API system adapts to your needs, allowing for fast, scalable validation processes that integrate with your existing systems.

This guide should help users, developers, and organizations to quickly get started with Verifik’s powerful API suite for their KYC and compliance needs.
