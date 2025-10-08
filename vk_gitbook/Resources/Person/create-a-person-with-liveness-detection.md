# Create a Person \[With Liveness detection]

### Endpoint&#x20;

```
https://api.verifik.co/v2/face-recognition/persons/search-live-face
```

Comprehensive service for the proper creation of persons within a collection, ensuring optimal management of individuals through the following workflow:

* It first conducts a search in the collection 1:N to ensure that no duplicate person is generated within the same collection.
* If no match is found stored in the collection, it proceeds to perform a **Liveness Detection** on the incoming selfie.
* Once the above steps are completed, the service accurately creates a new person within the collection. Verifik ensures that a new person request with the same face is stored by performing the search (1:N) and additionally performs a liveness test.

**NOTE:** The "images" parameter is an array in which up to 3 images of the same person can be sent. If they are not of the same person, the system will not create the user correctly.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

<table><thead><tr><th width="236">Parameter</th><th width="94">Type</th><th>Required</th><th width="322">Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td><td>Yes</td><td>Full name of the person</td></tr><tr><td><code>collection_id</code></td><td>String</td><td>Yes</td><td>The unique identifier for the <a href="../collections">collection</a> in which the person will be added.</td></tr><tr><td><code>images</code></td><td>Array</td><td>Yes</td><td>An array containing Base64-encoded images of the person. You can send up to 3 images of the same person. Images must be Base64-encoded strings.</td></tr><tr><td><code>notes</code></td><td>String</td><td>No</td><td>Optional notes or remarks about the person (e.g., employment status, additional details).</td></tr><tr><td><code>date_of_birth</code></td><td>String</td><td>No</td><td>The person's date of birth in <code>YYYY-MM-DD</code> format.</td></tr><tr><td><code>nationality</code></td><td>String</td><td>No</td><td>The person's nationality (e.g., "Colombian").</td></tr><tr><td><code>gender</code></td><td>String</td><td>No</td><td>The person's gender. Accepted values: "M" (Male), "F" (Female).</td></tr><tr><td><code>min_score</code></td><td>Float</td><td>No</td><td>The minimum score for face matching (Search 1:N), ranging from <code>0</code> to <code>1</code>. A higher value requires a stronger match to avoid duplicates. Default is usually around <code>0.8</code>.</td></tr><tr><td><code>search_mode</code></td><td>String</td><td>No</td><td>Defines the search speed. Accepted values: <code>"FAST"</code> (faster but potentially less accurate), <code>"ACCURATE"</code> (slower but more precise).  we set as default <mark style="color:yellow;">"FAST"</mark></td></tr><tr><td><code>liveness_min_score</code></td><td>Float</td><td>No</td><td>The minimum liveness score, ranging from <code>0</code> to <code>1</code>. A value of <code>0.65</code> is typical, where values closer to <code>1</code> increase strictness in confirming liveness.</td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "name": "Juan Miguel Trevino Morales",
  "images": [
    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHB...dz/9k="
  ],
  "gender": "M",
  "date_of_birth": "1992-03-02",
  "nationality": "Mexican",
  "notes": "Created via API",
  "collection_id": "b26cb8c3-0778-4ec5-8bc4-a7cac66b5291",
  "liveness_min_score": 0.7,
  "min_score": 0.67,
  "search_mode": "FAST"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/face-recognition/persons/search-live-face',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzkpXVCJ9.eyJjbGllbnRJZC...4Cw', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```

{% endtab %}

{% tab title="PHP" %}

```php
<?php
$client = new Client();
$headers = [
  'Authorization' => 'Bearer eyJhbGc5cCIVCJ9.eyJjbGllbn...lt4Cw',
  'Content-Type' => 'application/json'
];
$body = '{
  "name": "Juan Miguel Trevino Morales",
  "images": [
    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgY.../8AJWOKZadz/9k="
  ],
  "gender": "M",
  "date_of_birth": "1999-09-22",
  "nationality": "Mexican",
  "notes": "Created via API",
  "collection_id": "b26cb8c3-0778-4ec5-8bc4-a7cac66b5291",
  "liveness_min_score": 0.7,
  "min_score": 0.67,
  "search_mode": "FAST"
}';
$request = new Request('POST', 'https://api.verifik.co/v2/face-recognition/persons/search-live-face', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();

```

{% endtab %}

{% tab title="Swift" %}

```swift
let parameters = "{\n    \"name\": \"Juan Miguel Trevino Morales\",\n    \"images\": [\n        \"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBF2oQrUJ+xwcsQOnBYrMsEQf1GWBzURqVSSgM8VC0ZZTb+oBk4xHcFhW0gV8OM8q1iW3yQZaR5/vDCVmCGyprhuqjUqA1C4S4bzxWbGL6lwfXCxTAZTwcKXqji/hmZ4uLKnjjvkWWcXhn5wQ1PPFY+FJx7jfeJg4vEI8PKO43jlcQu8xvHBzZXGJZ1LgmOmWwZRznRxUFlTXmamTuNSu1zqXL4MnNw31wQ1xWOfUbeDr42VgYkCE08e+CDUPgVHhjqZ4/YZIDUwi/6jN8DrnKTFTHxIkrM7jwrXHctwQlzqO4wNQjx1x1B03Lbl55uVxdwOLYRpodQ3L4vgxDO5l4yMZcNzcYS+M0S++Ca64uEdvjm8z1NyoVDMDMrNz6hCfsoHdQY1ouWXln1csYe5ZgE1KJfDcYXcw4zfw6413wSp9y5c3EYQcwiVK4KSZ646lMwR1cU0ykeDgNzv3NuHjrjMqXUpfgYm2OIEFMfBhMwq/U3PGZUqpR55KeNzriuenEJXm+MkohEmo47Iw1x7m+OjFzCy2j1Lmb1LxUt1zULzw8ErtY71Kw83MSiGeUJgj1Ll9VC+iOJc/8AJWOKZadz/9k=\"\n    ],\n\t\"gender\": \"M\",\n\t\"date_of_birth\": \"1992-03-02\",\n\t\"nationality\": \"Mexican\",\n\t\"notes\": \"Created via API\",\n    \"collection_id\": \"b26cb8c3-0778-4ec5-8bc4-a7cac66b5291\",\n    \"liveness_min_score\": 0.7,\n    \"min_score\": 0.67,\n    \"search_mode\": \"FAST\"\n}"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/face-recognition/persons/search-live-face")!,timeoutInterval: Double.infinity)
request.addValue("Bearer eyJhbGciIkpXVCJ9.eyJjbGllbnRjI4O...V0w1splt4Cw", forHTTPHeaderField: "Authorization")
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

request.httpMethod = "POST"
request.httpBody = postData

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
{% endtabs %}
