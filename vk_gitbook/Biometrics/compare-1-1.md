# Compare 1:1

### Endpoint \[POST]

```
https://api.verifik.co/v2/face-recognition/compare
```

This service helps you compare a **single selfie** (called the "**probe**") with a collection of **selfies** (called the "**gallery**") to **verify** identities and perform a liveness detection to the **probe image**. It’s perfect for controlling access to your app or completing Know Your Customer (KYC) checks securely.&#x20;

The Face Comparison API allows you to perform a 1:1 comparison to find facial similarity. It offers the ability to analyze and score the resemblance between two images, which can be images from a document or camera images, as long as they differ between the "gallery" and "probe" parameters.

Ensure you provide valid images encoded in base64 in the request and choose the appropriate search mode for your specific needs (FAST or ACCURATE). The response will contain essential information about the comparison work, including timestamps and certification details.

### **Compare 1:1 Vs Face verify**

If you have read all the guides in this documentation, you may have noticed that these services perform very similar processes, so what sets them apart?

The differentiating factor between these services is how the comparison process is performed:

* **Face Verify:** Performs the comparison between an image and a person already created within a collection.
* **Compare 1:1:** Performs the comparison between two images. Unlike Face Verify, there is no restriction on where these images come from, making this service more versatile in how it performs the 1:1 comparison.
* **Compare 1:1 Live:** Same operation as the Compare 1:1 service, with the added value of conducting a Liveness check on one of the supplied images.

#### Best Practices

* Security: Keep your API token safe and use HTTPS.
* Image Quality: Use clear, well-lit **selfies** for best results.
* Testing: Test with different devices (iOS, Android) and gallery sizes.
* Thresholds: Start with default min\_score values, then tweak based on false positives/negatives.

#### Examples

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FzzoghQ6LpYG9La0CZ0l7%2Fimage.png?alt=media&#x26;token=472eee81-628e-4d4b-8666-5817e99f5ffd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2F1i9JRvqcu0Nyj5VTIhSk%2Fimage.png?alt=media&#x26;token=72ed872e-c764-4f30-9ba5-d40c70a37518" alt=""><figcaption></figcaption></figure>

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FrA9QvBe8jzH5iKTSuAYU%2Fimage.png?alt=media&#x26;token=a7fecb83-f351-4fc4-9dc8-85ad94ebcdf0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FnvSrZH57xnqniWHUOhfT%2Fimage.png?alt=media&#x26;token=996dedd4-d776-479c-8558-c739e2f3f252" alt=""><figcaption></figcaption></figure>

#### Troubleshooting

* No Match?
  * Check image quality or try ACCURATE mode.
  * Ensure gallery contains the right faces.
* Errors?
  * Verify your token and base64 encoding.

#### What You Need

* A selfie to compare (probe).
* A set of selfies to compare against (gallery).
* An API token (get this from Verifik’s dashboard or from the Authentication APIs).

#### Ready to integrate?

Follow the code example, test with your selfies, and adjust scores to fit your app’s needs.&#x20;

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Body**

<table><thead><tr><th>Name</th><th width="99">Type</th><th>Description</th></tr></thead><tbody><tr><td>os</td><td>string</td><td>OS from where you are doing the operation. [DESKTOP, IOS, ANDROID]</td></tr><tr><td>probe</td><td>string</td><td>Face encoded in base64</td></tr><tr><td>gallery</td><td>Array</td><td>Array of images to compare with the face inside probe.</td></tr><tr><td>search_mode</td><td>string</td><td>search mode, it could be FAST, ACCURATE.</td></tr></tbody></table>

### **Body Example**

```json
{
    "os": "DESKTOP",
    "probe": "base64_encoded_string",
    "gallery": ["base64_encoded_string"],
    "search_mode": "FAST/ACCURATE choose one, default FAST"
}
```

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "0jy93",
  "data": {
    "__v": 0,
    "_id": "65171e23640f7872b17ed99d",
    "type": "compare",
    "probe": [
      "Base 64 image"
    ],
    "client": "64404b1f9856cc8cebd762e7",
    "result": {
      "score": 1
    },
    "deleted": false,
    "gallery": [
      "Base 64 image"
    ],
    "createdAt": "2023-09-29T18:57:42.028Z",
    "updatedAt": "2023-09-29T18:57:42.028Z",
    "comparedAt": "2023-09-29T18:57:39.059Z",
    "search_mode": "FAST"
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "September 29, 2023 6:57 PM"
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
