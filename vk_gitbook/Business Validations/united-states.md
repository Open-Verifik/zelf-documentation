# United States

### Endpoint

```
https://api.verifik.co/v2/usa/company
```

This service provides detailed information about a U.S.-based company specified by the business name. It includes comprehensive data such as addresses, company identification details, stock exchange listings, and historical names. This service is ideal for conducting corporate research or verifying business information.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Body**

<table><thead><tr><th width="125">Name</th><th width="101">Type</th><th width="108">Required?</th><th width="261">Description</th><th>Example</th></tr></thead><tbody><tr><td>business</td><td>String</td><td><code>True</code></td><td>Name of the company, you can send the partial name or the full name.</td><td><code>APPLE INC</code></td></tr></tbody></table>

| Name   | Type   | Description      |
| ------ | ------ | ---------------- |
| `name` | string | Name of the user |
| `age`  | number | Age of the user  |

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/usa/company>',
  params: {business: 'APPLE INC'},
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

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/usa/company?business=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/company?business=")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()

```

{% endtab %}

{% tab title="PHP" %}

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/usa/company?business=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "addresses": {
      "mailing": {
        "street1": "ONE APPLE PARK WAY",
        "street2": null,
        "city": "CUPERTINO",
        "stateOrCountry": "CA",
        "zipCode": "95014",
        "stateOrCountryDescription": "CA"
      },
      "business": {
        "street1": "ONE APPLE PARK WAY",
        "street2": null,
        "city": "CUPERTINO",
        "stateOrCountry": "CA",
        "zipCode": "95014",
        "stateOrCountryDescription": "CA"
      }
    },
    "business": "APPLE INC",
    "cik": "320193",
    "description": "",
    "ein": "942404110",
    "entityType": "operating",
    "exchanges": [
      "Nasdaq"
    ],
    "fiscalYearEnd": "0928",
    "flags": "",
    "formerNames": [
      {
        "name": "APPLE INC",
        "from": "2007-01-10T00:00:00.000Z",
        "to": "2019-08-05T00:00:00.000Z"
      },
      {
        "name": "APPLE COMPUTER INC",
        "from": "1994-01-26T00:00:00.000Z",
        "to": "2007-01-04T00:00:00.000Z"
      },
      {
        "name": "APPLE COMPUTER INC/ FA",
        "from": "1997-07-28T00:00:00.000Z",
        "to": "1997-07-28T00:00:00.000Z"
      }
    ],
    "investorWebsite": "",
    "phone": "(408) 996-1010",
    "sic": "3571",
    "sicDescription": "Electronic Computers",
    "stateOfIncorporation": "CA",
    "stateOfIncorporationDescription": "CA",
    "tickers": [
      "AAPL"
    ],
    "website": ""
  },
  "signature": {
    "dateTime": "January 19, 2024 4:06 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "Y12MC"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la CUIT ingresada",
"signature": {
"dateTime": "February 21, 2024 7:52 PM",
"message": "Certified by Verifik.co"
}
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "missing business\n"
}
```

{% endtab %}
{% endtabs %}
