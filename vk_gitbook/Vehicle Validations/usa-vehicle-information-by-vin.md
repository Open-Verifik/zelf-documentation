# Vehicle Information by VIN

## United States Vehicle Information by VIN

<mark style="color:green;">`GET - https://api.verifik.co/v2/usa/vehicle-by-vin`</mark>

This service provides comprehensive information about a vehicle registered in the United States using its Vehicle Identification Number (VIN). By querying the VIN, you can retrieve detailed data including the vehicle's body class, engine displacement, engine configuration, manufacturer, model, model year, and the plant where it was manufactured, among other details. This service is ideal for verifying vehicle specifications and history based on its VIN.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="101">Name</th><th width="87">Type</th><th width="107">Required?</th><th width="248">Description</th><th>Example</th></tr></thead><tbody><tr><td>vin</td><td>String</td><td><code>True</code></td><td>VIN of the vehicle to consult.</td><td><code>1N6BA06B66N545123</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/usa/vehicle-by-vin>',
  params: {vin: '1N6BA06B66N545123'},
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
import requests

options = {
    'method': 'GET',
    'url': 'https://api.verifik.co/v2/usa/vehicle-by-vin',
    'params': {'vin': '1N6BA06B66N545123'},
    'headers': {
        'Accept': 'application/json',
        'Authorization': 'jwt <tu_token>'
    }
}

try:
    response = requests.request(options['method'], options['url'], headers=options['headers'], params=options['params'])
    data = response.json()
    print(data)
except Exception as error:
    print(error)


```

{% endtab %}

{% tab title="Swift" %}

```swift
import Foundation

let url = URL(string: "https://api.verifik.co/v2/usa/vehicle-by-vin?vin=1N6BA06B66N545123")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("jwt <tu_token>", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in
    if let error = error {
        print(error)
        return
    }
    
    guard let data = data else {
        print("No data received")
        return
    }
    
    do {
        let json = try JSONSerialization.jsonObject(with: data, options: [])
        print(json)
    } catch {
        print("Error parsing JSON: \(error)")
    }
}

task.resume()


```

{% endtab %}

{% tab title="PHP" %}

```php
<?php

$options = [
    'http' => [
        'header' => [
            "Accept: application/json",
            "Authorization: jwt <tu_token>"
        ],
        'method' => 'GET',
    ]
];

$context = stream_context_create($options);
$url = 'https://api.verifik.co/v2/usa/vehicle-by-vin?vin=1N6BA06B66N545123';

try {
    $data = file_get_contents($url, false, $context);
    echo $data;
} catch (Exception $error) {
    echo $error->getMessage();
}

?>
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "bodyClass": "Pickup",
        "cabType": "Extra/Super/Quad/Double/King/Extended",
        "displacement(CC)": "5600.0",
        "displacement(CI)": "341.73296693050",
        "displacement(L)": "5.6",
        "driveType": "4WD/4-Wheel Drive/4x4",
        "grossVehicleWeightRatingFrom": "Class 2E: 6,001 - 7,000 lb (2,722 - 3,175 kg)",
        "make": "NISSAN",
        "manufacturerName": "NISSAN NORTH AMERICA, INC.",
        "model": "Titan",
        "modelYear": "2006",
        "nCSABodyType": "Light Pickup",
        "nCSAModel": "Titan (from 2004-06; see 481 for 2007 on)",
        "plantCity": "CANTON",
        "plantCountry": "UNITED STATES (USA)",
        "plantState": "MISSISSIPPI",
        "vehicleType": "TRUCK",
        "vin": "1N6BA06B66N545157"
    },
    "signature": {
        "dateTime": "June 24, 2024 7:44 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "71NHZ"
}
```

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
"message": "missing vin\n"
}
```

{% endtab %}
{% endtabs %}
