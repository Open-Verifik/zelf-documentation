# Security Settings

### Security Settings

#### How it works

This part of the body refers to the security system that will be used to allow or deny access to certain users in your project flow. Here, we will list each element and how it should be used:

* **strategy**: Specifies whether users will be allowed entry or denied access. Use "whitelist" if you want the users you send to be able to access the project flow or "blacklist" if you want to deny them access.
* **source**: Defines how we will send the list of users for our security system. We have two options:

#### **CSV**

In case we use the CSV source, we should provide the list of users in the following way in an array of objects called whitelist. We need to send the following data in each of the objects:

* **name**: User's name
* **email**: Email associated with this user.
* **countryCode**: Country code prefix of the phone.
* **phone**: Phone to be associated with this user.

```json
{
	"security": {
		"apiTestType": "email",
		"source": "CSV",
		"strategy": "whitelist"
	},
	"whiteList": [
	   {
		"name": "<user_name>",
		"email": "<user_email>",
		"countryCode": "<country_code>",
		"phone": "<phone_number>"
	   },
	   {
		"name": "<user_name>",
		"email": "<user_email>",
		"countryCode": "<country_code>",
		"phone": "<phone_number>"
	   }
	]
}
```

#### **API**

If we use the API source, we must provide the following fields in the security object:

* **apiUrl**: This field is an API that should be able to return information about your users. Here, you should have data such as email, phone, country code, and name.
* **apiTestType**: Here, you determine the test value that will be used, whether it's an email or a phone.
* **apiTestValue**: This is an example; it is a real data point that, when used to query the API, will return the appropriate information to add people to the whitelist.

```json
{
    "security": {
        "strategy": "whitelist",
        "source": "API",
        "apiUrl": "<api_endpoint_url>",
        "apiTestType": "email",
        "apiTestValue": "<test_email>"
    }
}
```
