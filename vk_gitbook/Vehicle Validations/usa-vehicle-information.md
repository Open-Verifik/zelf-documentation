# Vehicle Information

## United States Vehicle Information

<mark style="color:green;">`GET - https://api.verifik.co/v2/usa/vehicle`</mark>

This service allows you to retrieve detailed information about a vehicle in the United States using its license plate and state. The response includes various data points such as make, model, model year, engine configuration, body class, transmission style, and more.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="95">Name</th><th width="80">Type</th><th width="111">Required?</th><th width="365">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>License plate to be queried, without spaces or dots.</td><td><code>ABC123</code></td></tr><tr><td>state</td><td>String</td><td><code>True</code></td><td>Abbreviation of the state where the vehicle is registered.</td><td><code>AL</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/usa/vehicle>',
  params: {plate: 'ABC1234', state: 'FL'},
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
conn.request("GET", "/v2/usa/vehicle?plate=&state=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/vehicle?plate=&state=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/vehicle?plate=&state=');
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

<pre class="language-json"><code class="lang-json"><strong>{
</strong>  "data": {
    "bodyClass": "Sport Utility Vehicle (SUV)/Multi-Purpose Vehicle (MPV)",
    "brakeSystemType": "Hydraulic",
    "displacement(CC)": "3474.057568",
    "displacement(CI)": "212",
    "displacement(L)": "3.474057568",
    "doors": "5",
    "engineBrake(hp)From": "260.00",
    "engineConfiguration": "V-Shaped",
    "engineModel": "J35A5",
    "engineNumberofCylinders": "6",
    "grossVehicleWeightRatingFrom": "Class 1D: 5,001 - 6,000 lb (2,268 - 2,722 kg)",
    "make": "ACURA",
    "manufacturerName": "HONDA OF CANADA MFG., INC.",
    "model": "MDX",
    "modelYear": "2003",
    "nCSABodyType": "Large utility (ANSI D16.1 Utility Vehicle Categories and \\"Full Size\\" and \\"Large\\")",
    "nCSAModel": "MDX",
    "plantCity": "ALLISTON",
    "plantCountry": "CANADA",
    "plantState": "ONTARIO",
    "plate": "KAS976",
    "state": "AK",
    "transmissionSpeeds": "5",
    "transmissionStyle": "Automatic",
    "valveTrainDesign": "Single Overhead Cam (SOHC)",
    "vehicleDescriptor": "2HNYD182*3H",
    "vehicleType": "MULTIPURPOSE PASSENGER VEHICLE (MPV)",
    "vin": "2HNYD18233H552413"
  },
  "signature": {
    "dateTime": "April 21, 2023 8:27 PM",
    "message": "Certified by Verifik.co"
  }
}
</code></pre>

{% endtab %}

{% tab title="404" %}

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

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "state must be one of: [AL,AK,AS,AZ,AR,CA,CO,CT,DE,DC,FM,FL,GA,GU,HI,ID,IL,IN,IA,KS,KY,LA,ME,MH,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,MP,OH,OK,OR,PW,PA,PR,RI,SC,SD,TN,TX,UT,VT,VI,VA,WA,WV,WI,WY]"
}
```

{% endtab %}
{% endtabs %}
