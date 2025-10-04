# Face Detection

### Endpoint \[POST]

```
https://api.verifik.co/v2/face-recognition/face-validation
```

This API provides advanced face detection and validation capabilities for selfie verification and liveness testing. Validates that an uploaded image is a proper selfie suitable for liveness testing.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Params**

| Name    | Type   | Description                                            |
| ------- | ------ | ------------------------------------------------------ |
| `image` | string | Base64 encoded image (with or without data URL prefix) |

```json
{
    "image": "base64_encoded_string"
}
```

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "/9j/4AAQSkZJRgAB...AQEASABIAA",
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/face-recognition/face-validation',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR...dTiT0OLF9rrFmXff899c'
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

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.verifik.co/v2/face-recognition/face-validation',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "image": "/9j/4AAQSkZJRgABAQ...EASABIAAD/4"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...FmXff899c'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "success": true,
        "message": "Valid selfie detected",
        "faceCount": 1,
        "facePercentage": 31.9,
        "faceBox": {
            "_x": 120.83665157463362,
            "_y": 161.9015470147133,
            "_width": 268.11956652562935,
            "_height": 350.7357820868492
        }
    },
    "signature": {
        "dateTime": "July 17, 2025 1:08 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "CC2AW"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing image\n"
}
```

{% endtab %}

{% tab title="500" %}

```json
{
    "code": "InternalServer",
    "message": "Face is too small in the image. Please take a closer selfie with your face more prominent."
}
```

{% endtab %}
{% endtabs %}
