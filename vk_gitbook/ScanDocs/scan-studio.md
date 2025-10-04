# Scan Studio

## Endpoint \[POST]

```
https://api.verifik.co/v2/ocr/scan-studio
```

The Scan Studio offers a seamless and efficient solution for extracting critical information from scanned documents through state-of-the-art Optical Character Recognition (OCR) technology. To use this service, simply provide the document image in Base64-encoded format or a URL where the image is hosted, and let our system handle the rest.

Powered by advanced OCR technology, the Scan Studio accurately extracts and interprets data from a wide variety of scanned documents, delivering the extracted information as structured OCR text accompanied by corresponding labels for easy integration and use. This ensures that users can quickly access and utilize the data in a format that suits their needs.

\
To ensure the highest levels of data accuracy and reliability, all extracted information undergoes a rigorous validation and verification process. Each field is evaluated, with a clear status indicator showing whether the OCR prediction was accurate, giving users confidence in the quality of the results.

\
Note: **The Scan Studio leverages pre-trained models developed by Verifik, which have been fine-tuned for exceptional performance. This results in faster response times and superior accuracy in data extraction, setting a new standard for reliability in document processing.**

#### **Examples of ID's:**

* [Colombian ID Card](https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1690232072151-image.jpeg)
* [Mexico INE](https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1690301869522-image.png)

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Params**

<table><thead><tr><th width="164">Name</th><th width="146.734375">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>image</code></td><td>string | <strong>required</strong></td><td>Image in Base64 encoded format or a URL where the image is hosted.</td></tr><tr><td><code>documentType</code></td><td>string | <strong>required</strong></td><td>The document type you need to scan information from.<br>List of document types supported are in the following <a href="scan-studio/documents-supported">link</a>.</td></tr></tbody></table>

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "/9j/4AAQSkZJRgABAQEASA....AAD/4gIoS=",
  "documentType": "CC"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-studio',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJ0w1splt4Cw'
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
  'Content-Type' => 'application/json',
  'Authorization' => '••••••'
];
$body = '{
  "image": "/9j/4AAQSkZJRgABAQEA...xbjqiSXFqrqWSutTpCVOELMoqFhH/2Q==",
  "documentType": "CC"
}';
$request = new Request('POST', 'https://api.verifik.co/v2/ocr/scan-studio', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "urw2r",
  "data": {
    "__v": 0,
    "_id": "64f8ba3b06f66f85b1ac9381",
    "url": "https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1690232072151-image.jpeg",
    "type": "ocr",
    "client": "623b6317fe5fd1774be9f566",
    "status": "ACTIVE_BUT_UNVERIFIED",
    "deleted": false,
    "createdAt": "2023-09-06T17:43:23.775Z",
    "updatedAt": "2023-09-06T17:43:23.775Z",
    "requires2FA": false,
    "documentType": "CC",
    "OCRExtraction": {
      "details": {
        "spans": [
          {
            "length": 168,
            "offset": 0
          }
        ],
        "fields": {
          "lastName": {
            "kind": "string",
            "spans": [
              {
                "length": 15,
                "offset": 71
              }
            ],
            "value": "RODRÍGUEZ LÓPEZ",
            "content": "RODRÍGUEZ LÓPEZ",
            "confidence": 0.851,
            "boundingRegions": [
              {
                "polygon": [
                  {
                    "x": 76,
                    "y": 226
                  },
                  {
                    "x": 476,
                    "y": 224
                  },
                  {
                    "x": 476,
                    "y": 270
                  },
                  {
                    "x": 76,
                    "y": 272
                  }
                ],
                "pageNumber": 1
              }
            ]
          },
          "firstName": {
            "kind": "string",
            "spans": [
              {
                "length": 16,
                "offset": 104
              }
            ],
            "value": "MARTÍN FRANCISCO",
            "content": "MARTÍN FRANCISCO",
            "confidence": 0.851,
            "boundingRegions": [
              {
                "polygon": [
                  {
                    "x": 71,
                    "y": 324
                  },
                  {
                    "x": 486,
                    "y": 331
                  },
                  {
                    "x": 485,
                    "y": 379
                  },
                  {
                    "x": 70,
                    "y": 372
                  }
                ],
                "pageNumber": 1
              }
            ]
          },
          "documentNumber": {
            "kind": "string",
            "spans": [
              {
                "length": 17,
                "offset": 53
              }
            ],
            "value": "01101101 01100001",
            "content": "01101101 01100001",
            "confidence": 0.861,
            "boundingRegions": [
              {
                "polygon": [
                  {
                    "x": 159,
                    "y": 172
                  },
                  {
                    "x": 561,
                    "y": 172
                  },
                  {
                    "x": 561,
                    "y": 216
                  },
                  {
                    "x": 159,
                    "y": 216
                  }
                ],
                "pageNumber": 1
              }
            ]
          }
        },
        "docType": "CC",
        "confidence": 0.964,
        "boundingRegions": [
          {
            "polygon": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1000,
                "y": 0
              },
              {
                "x": 1000,
                "y": 614
              },
              {
                "x": 0,
                "y": 614
              }
            ],
            "pageNumber": 1
          }
        ]
      },
      "fullName": "MARTÍN FRANCISCO RODRÍGUEZ LÓPEZ",
      "lastName": "RODRÍGUEZ LÓPEZ",
      "firstName": "MARTÍN FRANCISCO",
      "documentNumber": "01101101 01100001"
    },
    "documentNumber": "01101101 01100001",
    "imageValidated": false,
    "validationMethod": "SCAN_STUDIO"
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "September 6, 2023 5:43 PM"
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

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CC,RUT,PA,ENSAPA,DNI,CCVE,RIFVE,TLCC]"
}
```

{% endtab %}
{% endtabs %}
