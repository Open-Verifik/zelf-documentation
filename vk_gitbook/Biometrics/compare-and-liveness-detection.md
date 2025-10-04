# Compare & Liveness detection

### Endpoint \[POST]

```
https://api.verifik.co/v2/face-recognition/compare-with-liveness
```

### **Overview:**

This service helps you compare a **single selfie** (called the "**probe**") with a collection of **selfies** (called the "**gallery**") to **verify** identities and perform a liveness detection to the **probe image**. It’s perfect for controlling access to your app or completing Know Your Customer (KYC) checks securely.&#x20;

* **Facial Comparison (1-to-many):** It checks if the face in your probe selfie matches any face in the gallery of selfies.
* **Liveness Detection:** It ensures the **probe selfie** is of a live person (not a photo or video) to prevent fraud.

By using this, you can confidently allow or deny access to your app based on whether the selfie matches and is from a live person.

### How It Works

* You send a selfie (**probe**) and a **gallery** of selfies to the API.
* The API **compares** the **probe** face against each face in the **gallery** (1-to-many comparison).
* It also checks if the **probe selfie** shows a live person using l**iveness detection.**
* You get a result with scores to decide if there’s a match and if the person is live.

### This is great for:

* **App Access Control:** Only let verified, live users into your app.
* KYC (Know Your Customer): Verify user identities for compliance and security.

### Best Practices

* Security: Keep your API token safe and use HTTPS.
* Image Quality: Use clear, well-lit **selfies** for best results.
* Testing: Test with different devices (iOS, Android) and gallery sizes.
* Thresholds: Start with default min\_score values, then tweak based on false positives/negatives.

#### Examples

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FzzoghQ6LpYG9La0CZ0l7%2Fimage.png?alt=media&#x26;token=472eee81-628e-4d4b-8666-5817e99f5ffd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2F1i9JRvqcu0Nyj5VTIhSk%2Fimage.png?alt=media&#x26;token=72ed872e-c764-4f30-9ba5-d40c70a37518" alt=""><figcaption></figcaption></figure>

<figure><img src="https://3837106321-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FhfLoKpmSMVbW1nu6SbSu%2Fuploads%2FnvSrZH57xnqniWHUOhfT%2Fimage.png?alt=media&#x26;token=996dedd4-d776-479c-8558-c739e2f3f252" alt=""><figcaption></figcaption></figure>

### Troubleshooting

* No Match?
  * Check image quality or try ACCURATE mode.
  * Ensure gallery contains the right faces.
* Liveness Fails?
  * Ensure the probe is a live selfie (not a printed photo).
  * Increase liveness\_min\_score if too many live checks fail.
* Errors?
  * Verify your token and base64 encoding.

### What You Need

* A selfie to compare (probe).
* A set of selfies to compare against (gallery).
* An API token (get this from Verifik’s dashboard or from the Authentication APIs).

### Ready to integrate?

Follow the code example, test with your selfies, and adjust scores to fit your app’s needs.&#x20;

### **Headers**

<table><thead><tr><th width="275">Name</th><th>Value</th></tr></thead><tbody><tr><td>Content-Type</td><td><code>application/json</code></td></tr><tr><td>Authorization</td><td><code>Bearer &#x3C;token></code></td></tr></tbody></table>

### **Body**

<table><thead><tr><th width="217.40234375">Name</th><th width="99">Type</th><th>Description</th></tr></thead><tbody><tr><td>os</td><td>string</td><td>OS from where you are doing the operation. [DESKTOP, IOS, ANDROID]</td></tr><tr><td>probe</td><td>string</td><td>Face encoded in base64. <strong>Liveness test is</strong> performed to this image.</td></tr><tr><td>gallery</td><td>Array</td><td>Array of images to compare with the face inside probe. <strong>No liveness test</strong> is performed on this array.</td></tr><tr><td>search_mode</td><td>string</td><td>search mode, it could be FAST, ACCURATE.</td></tr><tr><td>compare_min_score</td><td>number</td><td>Percentage for the minimum comparison between gallery and probe. (liveness will not be tested if the score is less than the minimum) [min 0.67 - max 0.95]</td></tr><tr><td>liveness_min_score</td><td>number</td><td>Percentage for the minimum value of the liveness test [ min 0.52 - max 1]</td></tr><tr><td>cropFace</td><td>boolean</td><td>if you need to crop the face out of the gallery images, you can set this to true.</td></tr></tbody></table>

### **Body Example**

```json
{
    "os": "DESKTOP",
    "probe": "/9j/4AAQSkZJRgABAQEAAAAAAAD...",
    "gallery": [
        "/9j/4AAQSkZJRgABAQEAAAAAAAD...",
        "/9j/4AAQSkZJRgABAQEAAAAAAAD..."
    ],
    "search_mode": "FAST",
    "compare_min_score": 0.85,
    "liveness_min_score": 0.6
}
```

* probe: The single selfie you want to compare with the gallery. Also we perform a liveness test to this selfie.
* gallery: A list of selfies to compare against (can be multiple images).
* compare\_min\_score: Set how similar the faces need to be (higher = stricter = better).
* liveness\_min\_score: Set how sure you want to be that the person is live (higher = stricter = safer).

### **Response**

{% tabs %}
{% tab title="200" %}

```json
`
{
    "data": {
        "comparison": {
            "client": "613375a1eab2fe08527f81e2",
            "type": "compareLive",
            "search_mode": "ACCURATE",
            "gallery": [],
            "probe": [],
            "status": "success",
            "_id": "66e650d6b71ae4d43a76d95d",
            "comparedAt": "2024-09-15T03:13:26.392Z",
            "result": {
                "score": 1
            },
            "updatedAt": "2024-09-15T03:13:29.652Z",
            "createdAt": "2024-09-15T03:13:29.652Z",
            "__v": 0
        },
        "liveness": {
            "client": "613375a1eab2fe08527f81e2",
            "type": "liveness",
            "status": "success",
            "search_mode": "FAST",
            "os": "DESKTOP",
            "liveness_min_score": 0.7,
            "_id": "66e650d9b71ae4d43a76d95f",
            "result": {
                "liveness_score": 0.77,
                "passed": true,
                "min_score": 0.7
            },
            "updatedAt": "2024-09-15T03:13:31.675Z",
            "createdAt": "2024-09-15T03:13:31.675Z",
            "__v": 0
        }
    },
    "signature": {
        "dateTime": "September 15, 2024 3:13 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "ABRCB"
}

```

{% endtab %}

{% tab title="409" %}

```json
{
    "code": "MissingParameter",
    "message": "missing search_mode\n"
}
 ---------------------------------------
{
    "code": "MissingParameter",
    "message": "missing probe\n"
}
---------------------------------------
{
    "code": "MissingParameter",
    "message": "missing gallery\n"
}

```

{% endtab %}
{% endtabs %}

### Response Structure

**Comparison**

* **client** (String): The unique identifier of the client making the comparison request.
* **type** (String): Describes the type of comparison. In this case, it is `compareLive` for live image comparison.
* **search\_mode** (String): Specifies the mode of search used. Options include `ACCURATE` for precise comparisons.
* **status** (String): Indicates the success or failure of the comparison request. Expected value: `success`.
* **result** (Object): Contains the comparison results:
  * **score** (Number): The score of the comparison. A value of 1 indicates a perfect match.
* **comparedAt** (DateTime): Timestamp of when the comparison was performed.
* **updatedAt** (DateTime): Timestamp of the last update.
* **createdAt** (DateTime): Timestamp of the creation of this record.

**liveness Section**

* **client** (String): The unique identifier of the client making the liveness check request.
* **type** (String): Specifies the type of test. In this case, it is `liveness`.
* **status** (String): Indicates the success or failure of the liveness check. Expected value: `success`.
* **search\_mode** (String): The mode of search used for liveness detection. In this case, `FAST` mode is used.
* **os** (String): Operating system used during the check, e.g., `DESKTOP`.
* **liveness\_min\_score** (Number): The minimum score needed for the liveness check to pass. In this case, the threshold is `0.6`.
* **result** (Object): The result of the liveness check:
  * **liveness\_score** (Number): The score achieved in the liveness test. A score of `0.77` was achieved.
  * **passed** (Boolean): Whether the liveness test passed. In this case, `true` indicates success.
  * **min\_score** (Number): The minimum score needed for passing. For this check, it is `0.6`.
* **updatedAt** (DateTime): Timestamp of the last update.
* **createdAt** (DateTime): Timestamp of the creation of this record.

**Signature Section**

* **dateTime** (String): Timestamp when the results were certified, in human-readable format.
* **message** (String): Certification message confirming that the results were generated and certified by Verifik.co.
