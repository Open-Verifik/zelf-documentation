# \[Example] Tarjeta de propiedad

### Request

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "/9j/4AAQSkZJRgABAQEASA....AAD/4gIoS=",
  "documentType": "TLCC"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-studio',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1Ni...nRJ0w1splt4Cw'
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
  "documentType": "TLCC"
}';
$request = new Request('POST', 'https://api.verifik.co/v2/ocr/scan-studio', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();
```

{% endtab %}
{% endtabs %}

### Response

<pre class="language-json"><code class="lang-json"><strong>{
</strong>    "data": {
        "documentNumber": "10029609989",
        "documentType": "TLCC",
        "documentCategory": "Unknown",
        "url": "https://cdn.verifik.co/ocr/613a3a48f2c84b454153add7/1734401980607-png",
        "requiresBackSide": false,
        "status": "ACTIVE_BUT_UNVERIFIED",
        "imageValidated": false,
        "validationMethod": "SCAN_STUDIO",
        "inputMethod": "NOT_SET",
        "namesMatch": false,
        "fullNameMatchPercentage": 0,
        "firstNameMatchPercentage": 0,
        "lastNameMatchPercentage": 0,
        "OCRExtraction": {
            "details": {
                "docType": "TLCC",
                "boundingRegions": [
                    {
                        "pageNumber": 1,
                        "polygon": [
                            {
                                "x": 0,
                                "y": 0
                            },
                            {
                                "x": 1120,
                                "y": 0
                            },
                            {
                                "x": 1120,
                                "y": 722
                            },
                            {
                                "x": 0,
                                "y": 722
                            }
                        ]
                    }
                ],
                "spans": [
                    {
                        "offset": 0,
                        "length": 504
                    }
                ],
                "fields": {
                    "documentNumber": {
                        "kind": "string",
                        "value": "10029609989",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 806,
                                        "y": 161
                                    },
                                    {
                                        "x": 1040,
                                        "y": 159
                                    },
                                    {
                                        "x": 1040,
                                        "y": 193
                                    },
                                    {
                                        "x": 806,
                                        "y": 195
                                    }
                                ]
                            }
                        ],
                        "content": "10029609989",
                        "spans": [
                            {
                                "offset": 89,
                                "length": 11
                            }
                        ],
                        "confidence": 0.915
                    },
                    "model": {
                        "kind": "string",
                        "value": "2017",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 971,
                                        "y": 258
                                    },
                                    {
                                        "x": 1035,
                                        "y": 258
                                    },
                                    {
                                        "x": 1035,
                                        "y": 284
                                    },
                                    {
                                        "x": 971,
                                        "y": 284
                                    }
                                ]
                            }
                        ],
                        "content": "2017",
                        "spans": [
                            {
                                "offset": 145,
                                "length": 4
                            }
                        ],
                        "confidence": 0.939
                    },
                    "line": {
                        "kind": "string",
                        "value": "ESCAPE",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 590,
                                        "y": 258
                                    },
                                    {
                                        "x": 709,
                                        "y": 259
                                    },
                                    {
                                        "x": 709,
                                        "y": 287
                                    },
                                    {
                                        "x": 590,
                                        "y": 286
                                    }
                                ]
                            }
                        ],
                        "content": "ESCAPE",
                        "spans": [
                            {
                                "offset": 138,
                                "length": 6
                            }
                        ],
                        "confidence": 0.935
                    },
                    "brand": {
                        "kind": "string",
                        "value": "FORD",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 273,
                                        "y": 260
                                    },
                                    {
                                        "x": 352,
                                        "y": 261
                                    },
                                    {
                                        "x": 352,
                                        "y": 288
                                    },
                                    {
                                        "x": 273,
                                        "y": 287
                                    }
                                ]
                            }
                        ],
                        "content": "FORD",
                        "spans": [
                            {
                                "offset": 133,
                                "length": 4
                            }
                        ],
                        "confidence": 0.939
                    },
                    "plate": {
                        "kind": "string",
                        "value": "DOQ667",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 86,
                                        "y": 261
                                    },
                                    {
                                        "x": 205,
                                        "y": 261
                                    },
                                    {
                                        "x": 205,
                                        "y": 288
                                    },
                                    {
                                        "x": 86,
                                        "y": 288
                                    }
                                ]
                            }
                        ],
                        "content": "DOQ667",
                        "spans": [
                            {
                                "offset": 126,
                                "length": 6
                            }
                        ],
                        "confidence": 0.936
                    },
                    "cylinderCapacity": {
                        "kind": "string",
                        "value": "1.999",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 91,
                                        "y": 334
                                    },
                                    {
                                        "x": 161,
                                        "y": 334
                                    },
                                    {
                                        "x": 161,
                                        "y": 361
                                    },
                                    {
                                        "x": 91,
                                        "y": 361
                                    }
                                ]
                            }
                        ],
                        "content": "1.999",
                        "spans": [
                            {
                                "offset": 179,
                                "length": 5
                            }
                        ],
                        "confidence": 0.938
                    },
                    "color": {
                        "kind": "string",
                        "value": "ROJO RUBI",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 274,
                                        "y": 333
                                    },
                                    {
                                        "x": 442,
                                        "y": 333
                                    },
                                    {
                                        "x": 442,
                                        "y": 361
                                    },
                                    {
                                        "x": 274,
                                        "y": 361
                                    }
                                ]
                            }
                        ],
                        "content": "ROJO RUBI",
                        "spans": [
                            {
                                "offset": 185,
                                "length": 9
                            }
                        ],
                        "confidence": 0.92
                    },
                    "service": {
                        "kind": "string",
                        "value": "PARTICULAR",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 849,
                                        "y": 331
                                    },
                                    {
                                        "x": 1042,
                                        "y": 332
                                    },
                                    {
                                        "x": 1042,
                                        "y": 361
                                    },
                                    {
                                        "x": 849,
                                        "y": 360
                                    }
                                ]
                            }
                        ],
                        "content": "PARTICULAR",
                        "spans": [
                            {
                                "offset": 195,
                                "length": 10
                            }
                        ],
                        "confidence": 0.92
                    },
                    "vehicleType": {
                        "kind": "string",
                        "value": "WAGON",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 372,
                                        "y": 409
                                    },
                                    {
                                        "x": 469,
                                        "y": 409
                                    },
                                    {
                                        "x": 469,
                                        "y": 432
                                    },
                                    {
                                        "x": 372,
                                        "y": 432
                                    }
                                ]
                            }
                        ],
                        "content": "WAGON",
                        "spans": [
                            {
                                "offset": 279,
                                "length": 5
                            }
                        ],
                        "confidence": 0.94
                    },
                    "class": {
                        "kind": "string",
                        "value": "CAMIONETA",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 88,
                                        "y": 409
                                    },
                                    {
                                        "x": 242,
                                        "y": 408
                                    },
                                    {
                                        "x": 242,
                                        "y": 434
                                    },
                                    {
                                        "x": 88,
                                        "y": 434
                                    }
                                ]
                            }
                        ],
                        "content": "CAMIONETA",
                        "spans": [
                            {
                                "offset": 269,
                                "length": 9
                            }
                        ],
                        "confidence": 0.936
                    },
                    "fuelType": {
                        "kind": "string",
                        "value": "GASOLINA",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 646,
                                        "y": 406
                                    },
                                    {
                                        "x": 800,
                                        "y": 406
                                    },
                                    {
                                        "x": 800,
                                        "y": 434
                                    },
                                    {
                                        "x": 646,
                                        "y": 435
                                    }
                                ]
                            }
                        ],
                        "content": "GASOLINA",
                        "spans": [
                            {
                                "offset": 285,
                                "length": 8
                            }
                        ],
                        "confidence": 0.92
                    },
                    "capacity": {
                        "kind": "string",
                        "value": "5",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 901,
                                        "y": 408
                                    },
                                    {
                                        "x": 916,
                                        "y": 408
                                    },
                                    {
                                        "x": 916,
                                        "y": 433
                                    },
                                    {
                                        "x": 901,
                                        "y": 433
                                    }
                                ]
                            }
                        ],
                        "content": "5",
                        "spans": [
                            {
                                "offset": 294,
                                "length": 1
                            }
                        ],
                        "confidence": 0.094
                    },
                    "vin": {
                        "kind": "string",
                        "value": "WFOCP6A93H1C16729",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 692,
                                        "y": 471
                                    },
                                    {
                                        "x": 971,
                                        "y": 470
                                    },
                                    {
                                        "x": 971,
                                        "y": 496
                                    },
                                    {
                                        "x": 692,
                                        "y": 496
                                    }
                                ]
                            }
                        ],
                        "content": "WFOCP6A93H1C16729",
                        "spans": [
                            {
                                "offset": 331,
                                "length": 17
                            }
                        ],
                        "confidence": 0.916
                    },
                    "ownerName": {
                        "kind": "string",
                        "value": "TOVAR APONTE LUIS FERNANDO",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 90,
                                        "y": 624
                                    },
                                    {
                                        "x": 509,
                                        "y": 624
                                    },
                                    {
                                        "x": 509,
                                        "y": 651
                                    },
                                    {
                                        "x": 90,
                                        "y": 651
                                    }
                                ]
                            }
                        ],
                        "content": "TOVAR APONTE LUIS FERNANDO",
                        "spans": [
                            {
                                "offset": 449,
                                "length": 26
                            }
                        ],
                        "confidence": 0.874
                    },
                    "ownerDocumentNumber": {
                        "kind": "string",
                        "value": "79412150",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 837,
                                        "y": 623
                                    },
                                    {
                                        "x": 952,
                                        "y": 624
                                    },
                                    {
                                        "x": 952,
                                        "y": 651
                                    },
                                    {
                                        "x": 837,
                                        "y": 651
                                    }
                                ]
                            }
                        ],
                        "content": "79412150",
                        "spans": [
                            {
                                "offset": 496,
                                "length": 8
                            }
                        ],
                        "confidence": 0.921
                    },
                    "ownerDocumentType": {
                        "kind": "string",
                        "value": "C.C.",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 771,
                                        "y": 623
                                    },
                                    {
                                        "x": 832,
                                        "y": 623
                                    },
                                    {
                                        "x": 832,
                                        "y": 651
                                    },
                                    {
                                        "x": 771,
                                        "y": 651
                                    }
                                ]
                            }
                        ],
                        "content": "C.C.",
                        "spans": [
                            {
                                "offset": 491,
                                "length": 4
                            }
                        ],
                        "confidence": 0.925
                    },
                    "engineNumber": {
                        "kind": "string",
                        "value": "H1C16729",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 88,
                                        "y": 473
                                    },
                                    {
                                        "x": 211,
                                        "y": 473
                                    },
                                    {
                                        "x": 211,
                                        "y": 497
                                    },
                                    {
                                        "x": 88,
                                        "y": 497
                                    }
                                ]
                            }
                        ],
                        "content": "H1C16729",
                        "spans": [
                            {
                                "offset": 320,
                                "length": 8
                            }
                        ],
                        "confidence": 0.939
                    },
                    "reg": {
                        "kind": "string",
                        "value": "N",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 580,
                                        "y": 476
                                    },
                                    {
                                        "x": 594,
                                        "y": 477
                                    },
                                    {
                                        "x": 593,
                                        "y": 502
                                    },
                                    {
                                        "x": 579,
                                        "y": 501
                                    }
                                ]
                            }
                        ],
                        "content": "N",
                        "spans": [
                            {
                                "offset": 329,
                                "length": 1
                            }
                        ],
                        "confidence": 0.068
                    },
                    "chasisNumber": {
                        "kind": "string",
                        "value": "WFOCP6A93H1C16729",
                        "boundingRegions": [
                            {
                                "pageNumber": 1,
                                "polygon": [
                                    {
                                        "x": 635,
                                        "y": 545
                                    },
                                    {
                                        "x": 915,
                                        "y": 544
                                    },
                                    {
                                        "x": 915,
                                        "y": 571
                                    },
                                    {
                                        "x": 635,
                                        "y": 572
                                    }
                                ]
                            }
                        ],
                        "content": "WFOCP6A93H1C16729",
                        "spans": [
                            {
                                "offset": 386,
                                "length": 17
                            }
                        ],
                        "confidence": 0.911
                    },
                    "seriesNumber": {
                        "kind": "string",
                        "confidence": 0.959
                    }
                },
                "confidence": 0.997
            },
            "documentNumber": "10029609989",
            "model": "2017",
            "line": "ESCAPE",
            "brand": "FORD",
            "plate": "DOQ667",
            "cylinderCapacity": "1.999",
            "color": "ROJO RUBI",
            "service": "PARTICULAR",
            "vehicleType": "WAGON",
            "class": "CAMIONETA",
            "fuelType": "GASOLINA",
            "capacity": "5",
            "vin": "WFOCP6A93H1C16729",
            "ownerName": "TOVAR APONTE LUIS FERNANDO",
            "ownerDocumentNumber": "79412150",
            "ownerDocumentType": "C.C.",
            "engineNumber": "H1C16729",
            "reg": "N",
            "chasisNumber": "WFOCP6A93H1C16729"
        },
        "scoreValidated": false,
        "type": "ocr",
        "infoValidationSupported": true,
        "client": "613a3a48f2c84b454153add7",
        "_id": "6760dfc3687efe20800b92f8",
        "updatedAt": "2024-12-17T02:19:47.341Z",
        "createdAt": "2024-12-17T02:19:47.341Z",
        "__v": 0
    },
    "signature": {
        "dateTime": "December 17, 2024 2:19 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "NQ4KT"
}
</code></pre>
