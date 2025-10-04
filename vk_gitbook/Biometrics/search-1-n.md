# Search 1:N

<mark style="color:green;">`POST -`</mark>` ``https://api.verifik.co/v2/face-recognition/search-live-face`

The Live Face Search API allows you to perform a 1:N search using a FaceScan on a collection of images. It conducts live liveness detection on the provided image and then searches for matching live faces in the specified collection.

You can use the liveness score and similarity scores to determine the confidence level in liveness and the quality of the matches. This API is valuable for various applications, including identity verification, access control, and security systems where live face detection is essential.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name                 | Type   | Description      |
| -------------------- | ------ | ---------------- |
| `image`              | string | Name of the user |
| `min_score`          | string | Age of the user  |
| `search_mode`        | string |                  |
| `collection_id`      | string |                  |
| `liveness_min_score` | string |                  |

**Body Example**

```json
{
    "images": ["base64_encoded_string"],
    "min_score": 0.7,
    "search_mode": "FAST/ACCURATE choose one",
    "collection_id": "ID_OF_COLLECTION",
    "liveness_min_score": 0.5
  }
```

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "ga8sn",
  "data": {
    "persons": [
      {
        "id": "651743f2b2eaf872c3541417",
        "name": "Mateo Verifik",
        "notes": "Verifik employee",
        "score": 0.9971,
        "gender": "M",
        "thumbnails": [
          {
            "id": "0a634411-717e-46c4-93ac-8d7e8f92eef8",
            "thumbnail": "Base 64 Image"
          }
        ],
        "collections": [],
        "create_date": "2023-09-29T21:38:59.306976",
        "nationality": "Colombian",
        "date_of_birth": "1995-05-07",
        "modified_date": "2023-09-29T21:38:59.306981"
      },
      {
        "id": "65175ee13e81e4fad02676a3",
        "name": "Mateo Verifik",
        "notes": "Verifik employee",
        "score": 0.9971,
        "gender": "M",
        "thumbnails": [
          {
            "id": "6441f973-7668-471c-b1x2-1aaeac19fd36",
            "thumbnail": "Base 64 Image"
          }
        ],
        "collections": [],
        "create_date": "2023-09-29T23:33:54.056053",
        "nationality": "Colombian",
        "date_of_birth": "1995-05-07",
        "modified_date": "2023-09-29T23:33:54.056058"
      },
      {
        "id": "65175f133e81e4fad02676ad",
        "name": "Mateo Verifik",
        "notes": "Verifik employee",
        "score": 0.9971,
        "gender": "M",
        "thumbnails": [
          {
            "id": "60855a0d-6ad7-4f28-9wcv6-20bc061520fd",
            "thumbnail": "Base 64 Image"
          }
        ],
        "collections": [],
        "create_date": "2023-09-29T23:34:44.234518",
        "nationality": "Colombian",
        "date_of_birth": "1995-05-07",
        "modified_date": "2023-09-29T23:34:44.234524"
      },
      {
        "id": "65175f713e81e4fad02676bf",
        "name": "Mateo Verifik",
        "notes": "Verifik employee",
        "score": 0.9971,
        "gender": "M",
        "thumbnails": [
          {
            "id": "9403c70c-d760-4be1-abvc-8f3d2455f06f",
            "thumbnail": "Base 64 Image"
          }
        ],
        "collections": [],
        "create_date": "2023-09-29T23:36:18.370250",
        "nationality": "Colombian",
        "date_of_birth": "1995-05-07",
        "modified_date": "2023-09-29T23:36:18.370255"
      }
    ],
    "liveness_score": 0.98
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "September 29, 2023 11:40 PM"
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
