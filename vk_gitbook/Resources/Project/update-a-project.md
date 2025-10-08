# Update a Project

<mark style="color:green;">`PUT`</mark> `https://api.verifik.co/v2/projects/{id}`

Method for updating an existing project. To make the service work, the \_id parameter is required, which is generated when a project is created correctly.

If we want our project to become an active project, we must change the **"status"** parameter from **"draft"** to **"active"**.

#### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### **Query Parameters**

<table><thead><tr><th width="100">Name</th><th width="85">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string</td><td>ID of the Project that you want to bring the information.</td></tr></tbody></table>

#### **Body**

<table><thead><tr><th width="163.96484375">Name</th><th width="169.7890625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>status</code></td><td><code>string</code></td><td>Current status of the project, can be <code>draft</code> or <code>active</code>, only <code>active</code> projects can be used.</td></tr></tbody></table>

### Body

In the body of this service, you can send all the fields generated when creating a project. The only thing to consider is that the fields we want to modify are the ones that must be included in the body.

```json
{
  "allowedCountries": ["Colombia"],
  "contactEmail": "hola@verifik.co",
  "name": "Ejemplo Documentacion Verifik",
  "privacyUrl": "<your privacy link>",
  "termsAndConditionsUrl": "<your terms and conditions link>",
  "branding": {
    "bgColor": "#ffffff",
    "borderColor": "#B2BDD3",
    "logo": "<http or base64>",
    "tabColor": "#B2BDD3",
    "titleColor": "#FFFFFF",
    "txtColor": "#212121"
  },
  "dataProtection": {
    "address": "KR 7 # 33 - 42",
    "address2": null,
    "city": "Bogota",
    "country": "Colombia",
    "email": "support@verifik.co",
    "name": "Verifik",
    "postalCode": "111631"
  }
}
```

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "status": "completed",
    "data": {
        "__v": 0,
        "_id": "68a743e5...",
        "allowedCountries": ["Colombia"],
        "client": "67054dc...",
        "collectionCode": "fbf8a322...",
        "contactEmail": "hola@verifik.co",
        "createdAt": "2025-08-21T00:00:00.000Z",
        "currentStep": 0,
        "lastStep": 1,
        "name": "Ejemplo Documentacion Verifik",
        "privacyUrl": "<your privacy link>",
        "projectMembers": [],
        "status": "draft",
        "termsAndConditionsUrl": "<your terms and conditions link>",
        "updatedAt": "2025-08-21T00:00:00.000Z",
        "assignedCollection": {
            "__v": 0,
            "_id": "68a743e5...",
            "client": "67054dc6...",
            "code": "fbf8a322...",
            "createdAt": "2025-08-21T00:00:00.000Z",
            "description": "project #68a743e5...",
            "name": "Ejemplo Documentacion Verifik_0LVV",
            "project": "68a743e5...",
            "updatedAt": "2025-08-21T00:00:00.000Z"
        },
        "branding": {
            "bgColor": "#ffffff",
            "borderColor": "#B2BDD3",
            "buttonColor": "#B2BDD3",
            "buttonTxtColor": "#FFFFFF",
            "logo": "<http or base64>",
            "rightBackgroundColor": "white",
            "rightImage": null,
            "rightImagePosition": "center center",
            "secondaryButtonColor": "#B2BDD3",
            "secondaryButtonTextColor": "#FFFFFF",
            "tabColor": "#B2BDD3",
            "titleColor": "#FFFFFF",
            "txtColor": "#212121"
        },
        "dataProtection": {
            "address": "KR 7 # 33 - 42",
            "address2": null,
            "city": "Bogota",
            "country": "Colombia",
            "email": "support@verifik.co",
            "name": "Verifik",
            "postalCode": "111631"
        }
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "message": "project_not_found",
    "code": "NotFound"
}
```

{% endtab %}

{% tab title="409" %}
Must create a project flow before setting a Project to `active` status

```json
{
    "message": "project_flow_required",
    "code": "Conflict"
}
```

{% content-ref url="../project-flows/create-a-project-flow" %}
[create-a-project-flow](https://docs.verifik.co/resources/project-flows/create-a-project-flow)
{% endcontent-ref %}
{% endtab %}
{% endtabs %}
