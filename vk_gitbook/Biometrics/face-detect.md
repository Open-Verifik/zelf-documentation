# Face Detect

## Endpoint

```
https://api.verifik.co/v2/face-recognition/detect 
```

The Face Detection API allows you to detect faces within an image. It analyzes the provided image and returns information about the detected faces, including their coordinates, landmarks, and detection scores.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "/9j/4AAQSkZJRgABAQEASABIAAD/4...",
  "max_results": 99,
  "min_score": 0.8,
  "search_mode": "FAST"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/face-recognition/detect',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1N....qNBNyZJ0cobEI-vnzY7EfSM', 
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

{% tab title="Rust" %}

```rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .build()?;

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGl...0cobEI-vnzY7EfSM".parse()?);
    headers.insert("Content-Type", "application/json".parse()?);

    let data = r#"{
    "image": "/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUA...AQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiA",
    "max_results": 99,
    "min_score": 0.8,
    "search_mode": "FAST"
}"#;

    let json: serde_json::Value = serde_json::from_str(&data)?;

    let request = client.request(reqwest::Method::POST, "https://api.verifik.co/v2/face-recognition/detect")
        .headers(headers)
        .json(&json);

    let response = request.send().await?;
    let body = response.text().await?;

    println!("{}", body);

    Ok(())
}
```

{% endtab %}

{% tab title="PHP" %}

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.verifik.co/v2/face-recognition/detect',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "image": "/9j/4AAQSkZJRg...ABAQ",
    "max_results": 99,
    "min_score": 0.8,
    "search_mode": "FAST"
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR...cobEI-vnzY7EfSM',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

{% endtab %}
{% endtabs %}

**Body**

| Name            | Type   | Description                                                                                                             |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| `image`         | string | image in base64 format. this image will be used to search in  persons.                                                  |
| `min_score`     | string | <p>minimum score to search and do a comparison: 80% is the recommended value: 0.80.<br><br>it goes from 0.70-0.95</p>   |
| `search_mode`   | string | search method: \[FAST, ACCURATE]                                                                                        |
| `collection_id` | string | [collection](https://docs.verifik.co/resources/collections) id that the person belongs to.                              |
| `max_results`   | string | maximum of results to compare the faces in the images, the min\_score is used here. Range from 1 to 100. Default is 99. |

**Body Example**

```json
{
    "images": ["base64_encoded_string"],
    "min_score": 0.7,
    "search_mode": "FAST/ACCURATE choose one",
    "collection_id": "ID_OF_COLLECTION"
 }
```

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "pgui5",
  "data": [
    {
      "box": {
        "top": 169,
        "left": 698,
        "right": 1214,
        "bottom": 845
      },
      "persons": [],
      "landmarks": {
        "nose": [
          961,
          550
        ],
        "left_eye": [
          836,
          422
        ],
        "right_eye": [
          1080,
          425
        ],
        "left_mouth": [
          865,
          679
        ],
        "right_mouth": [
          1049,
          683
        ]
      },
      "thumbnail": "Base 64 image",
      "detection_score": 0.8
    }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "September 29, 2023 9:10 PM"
  }
}
```

{% endtab %}

{% tab title="400" %}

```json
{
  "error": "Invalid request"
}
```

{% endtab %}
{% endtabs %}

### **What is the collection\_id and how to get it?**

For the service to work correctly, a parameter called collection\_id must be provided. This parameter is obtained when creating a [new collection](https://docs.verifik.co/resources/collections/create-a-collection) with the name "code." Here is an example of a collection creation response:

```json
{
  "data": {
    "_id": "65175da13e81e4fabc12345",
    "deleted": false,
    "name": "Test2",
    "description": "Test Collection",
    "client": "65175da13e81e4fabc12345",
    "code": "dac2c81b-96a6-4f19-ab54-d1a72d55b64b", //Parametro a enviar en collection_id
    "updatedAt": "2023-09-29T23:28:33.894Z",
    "createdAt": "2023-09-29T23:28:33.894Z",
    "__v": 0
  }
}
```
