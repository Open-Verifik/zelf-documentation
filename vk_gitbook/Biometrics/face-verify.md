# Face Verify

<mark style="color:green;">`POST -`</mark>`https://api.verifik.co/v2/face-recognition/verify`

The Face Verification API allows you to verify the identity of a person by comparing a provided image with the reference image of a known person. It returns a verification result indicating whether the provided image matches the reference image of the known person.

#### **Compare 1:1 Vs Face verify**

If you have read all the guides in this documentation, you may have noticed that these services perform very similar processes, so what sets them apart?:

The differentiating factor between these services is how the comparison process is performed:

* **Face Verify:** Performs the comparison between an image and a person already created within a collection.
* **Compare 1:1:** Performs the comparison between two images. Unlike Face Verify, there is no restriction on where these images come from, making this service more versatile in how it performs the 1:1 comparison.
* **Compare 1:1 Live:** Same operation as the Compare 1:1 service, with the added value of conducting a Liveness check on one of the supplied images.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name          | Type   | Description      |
| ------------- | ------ | ---------------- |
| `image`       | string | Name of the user |
| `min_score`   | string | Age of the user  |
| `search_mode` | string |                  |
| `id`          | string |                  |

**Body Example**

```json
{
    "id": "ID_OF_PERSON_BEING_VERIFIED",
    "images": ["base64_encoded_string"],
    "min_score": 0.7,
    "search_mode": "FAST/ACCURATE choose one"
 }
```

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "rdqqx",
  "data": {
    "match": {
      "id": "651743f2b2eaf872c3541417",
      "name": "MAteo Verifik",
      "notes": "Verifik employee",
      "score": 1,
      "gender": "M",
      "thumbnails": [
        {
          "id": "0a634411-717e-46c4-ab65-8d7e8f92eef8",
          "thumbnail": "Base 64 Image"
        }
      ],
      "collections": [],
      "create_date": "2023-09-29T21:38:59.306976",
      "nationality": "Colombian",
      "date_of_birth": "1995-05-07",
      "modified_date": "2023-09-29T21:38:59.306981"
    }
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "September 29, 2023 11:50 PM"
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
