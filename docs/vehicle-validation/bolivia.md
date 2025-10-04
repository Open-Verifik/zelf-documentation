---
id: bolivia
title: Bolivia
description: Bolivian vehicle validation service
---

# Bolivia

## Bolivian Vehicle Information

`GET - https://api.verifik.co/v2/bo/vehicle`

The Vehicle Information Service in Bolivia allows you to retrieve precise details about a vehicle registered in the country. By providing the license plate number, the service returns information such as the vehicle's policy number, brand, class (e.g., work motorcycle), registration location, service type (e.g., private), and model.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="106">Name</th><th width="80">Type</th><th width="119">Required?</th><th width="310">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Vehicle license plate to be consulted.</td><td><code>ABC1234</code></td></tr></tbody></table>

#### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/bo/vehicle',
  params: {plate: 'ABC1234'},
    headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
message = "hello world"
print(message)
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
message = "hello world"
puts message
```

</TabItem>
</Tabs>

### **Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
    "data": {
        "Policy": "180680443",
        "brand": "BAJAJ",
        "clase": "MOTOCICLETA - TRABAJO",
        "declaratory": "GRAL. SAAVEDRA",
        "plate": "1234ZYL",
        "service": "PARTICULAR",
        "type": "BOXER 150"
    },
    "signature": {
        "dateTime": "July 26, 2024 4:55 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "ZX35K"
}
```

</TabItem>
<TabItem value="404" label="404">

```json
{
"code": "NotFound",
"message": "Record not found.",
"signature": {
"dateTime": "August 31, 2022 3:24 PM",
"message": "Certified by Verifik.co"
}
}
```

</TabItem>
<TabItem value="409" label="409">

```json
{
"code": "MissingParameter",
"message": "missing plate\n."
}
```

</TabItem>
</Tabs>
