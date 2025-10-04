# Search 1:N | Live

<mark style="color:green;">`POST -`</mark>` ``https://api.verifik.co/v2/face-recognition/search`

The Search API allows you to perform a 1:N search to find a FaceHash that matches the provided face in the parameters. It conducts facial recognition and returns a list of matching persons along with their details.

Verifik has a guide on what Search services are and how to use them; we invite you to read it: Search Guide.

You can use similarity scores to determine the quality of the matches, and the information provided about the matching persons can be used for various applications, including identity verification, access control, and security systems requiring facial recognition.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name            | Type   | Description                                                                                            |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| `image`         | string | Name of the user                                                                                       |
| `min_score`     | string | Age of the user                                                                                        |
| `search_mode`   | string |                                                                                                        |
| `collection_id` | string | specify the collection where you want to search the person (important when you have multiple projects) |

**Body Example**

```json
{
    "images": ["base64_encoded_string"],
    "min_score": 0.7,
    "search_mode": "FAST/ACCURATE choose one",
    "collection_id": "ID_OF_COLLECTION"
  }
```

**Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "vjca2",
  "data": [
    {
      "id": "651743f2b2eaf872c3541417",
      "name": "Mateo Verifik",
      "notes": "Verifik employee",
      "score": 0.9971,
      "gender": "M",
      "thumbnails": [
        {
          "id": "0a634411-717e-46c4-9c9a-8d7e8f92eef8",
          "thumbnail": "Base 64 image"
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
          "id": "6441f973-7668-471c-b462-1aaeac19fd36",
          "thumbnail": "Base 64 image"
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
          "id": "60855a0d-6ad7-4f28-9216-20bc061520fd",
          "thumbnail": "Base 64 image"
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
          "id": "9403c70c-d760-4be1-a23d-8f3d2455f06f",
          "thumbnail": "Base 64 image"
        }
      ],
      "collections": [],
      "create_date": "2023-09-29T23:36:18.370250",
      "nationality": "Colombian",
      "date_of_birth": "1995-05-07",
      "modified_date": "2023-09-29T23:36:18.370255"
    },
    {
      "id": "65176209e09925fabe3de162",
      "name": "Mateo Verifik",
      "notes": "Verifik employee",
      "score": 0.9971,
      "gender": "M",
      "thumbnails": [
        {
          "id": "12d16680-e889-45f9-b260-729471fa6650",
          "thumbnail": "Base 64 image"
        }
      ],
      "collections": [],
      "create_date": "2023-09-29T23:47:22.721119",
      "nationality": "Colombian",
      "date_of_birth": "1995-05-07",
      "modified_date": "2023-09-29T23:47:22.721124"
    }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "September 29, 2023 11:55 PM"
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
