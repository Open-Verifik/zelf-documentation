# Search

## **Search Guide**

The Search services aim to perform a 1: N query within a provided collection. In other words, a search is conducted in the collection with a provided image to find any type of match. This is useful when authentication processes (login) for previously registered individuals are required.

### **Which services perform a Search?**

Currently, there are five services that perform this process, which are:

* [Search 1:N](https://www.notion.so/Search-1-N-f922fc0444b648f481ab372d61fe0155?pvs=21)
* [Search 1:N | Live](https://www.notion.so/Search-1-N-Live-970299bba5f24ff59b45b988042efb23?pvs=21)
* [Search 1:N | Crops](https://www.notion.so/Search-1-N-Crop-7abeaa7d70ac441b98746e8505e36b48?pvs=21)
* [Face Detect](https://www.notion.so/Face-Detect-4b3b11fccc1a416a88cd71ecb6c244c8?pvs=21)
* [Face Verify](https://www.notion.so/Face-Verify-52e2e2c0ee564ad1b3a40ab92797b367?pvs=21)

These services share the same purpose, conducting a search for previously created individuals in a **Collection** to find matches.

### **Similarities in the services**

The aforementioned services have some similarities in their structure. Below, we'll show a **JSON** explaining each of the parameters:

```json
{
  "collection_id": "ID_OF_COLLECTION",
  "images": [
    "base64_encoded_string"
  ],
  "min_score": 0.7,
  "search_mode": "FAST/ACCURATE choose one"
}
```

* **collection\_id**: As mentioned in the explanation of the **Collection**, this parameter, called **code**, is generated when creating a **Collection** properly.
* **min\_score**: This parameter, a number between 0.5 and 1.0, establishes the minimum tolerance for a match when performing a 1:N comparison between the **FaceMap** and **FaceHash** in the Collection. This function determines whether the face already exists in the **collection** or not.
* **search\_mode**: This parameter determines the mode in which the search for the face in the collection will be conducted. There are two possible valid parameters: i) "FAST" for a quick search, and ii) "ACCURATE" for much more precise queries in the collection; the latter value increases the service response times but ensures better mapping to prevent duplicate faces.
* **images**: An array of images; all images must be of the same person, in Base 64 format, and a maximum of three (3) images can be sent.

### **Differences in the services**

Each service has a specific use depending on the applicable need or use case. Below, you will learn about the differences and the most common scenarios:

* [Search 1:N](https://www.notion.so/Search-1-N-f922fc0444b648f481ab372d61fe0155?pvs=21): Standard service for searching matches in the collection. It is recommended for use when you are certain that the person to be searched has undergone liveness detection previously, and their information has been stored in the collection accordingly.
* [Search 1:N | Live](https://www.notion.so/Search-1-N-Live-970299bba5f24ff59b45b988042efb23?pvs=21): The main feature of this service is that it first performs liveness detection on the supplied image before conducting any search in the collection. This service is useful if, at the time of creating a person within the collection, you did not use any liveness detection service.
* [Search 1:N | Crops](https://www.notion.so/Search-1-N-Crop-7abeaa7d70ac441b98746e8505e36b48?pvs=21): Service for searching matches in the collection. Its main difference from the standard service is that it only accepts very small images, a maximum of 120x120 pixels. This case is ideal when enlarging an image without losing resolution is not feasible.
* [Face Detect](https://www.notion.so/Face-Detect-4b3b11fccc1a416a88cd71ecb6c244c8?pvs=21): Service for detecting faces within an image. Ideal for extracting and verifying that an ID has a photo of a person for comparison. This service only detects the image; if a comparison is needed, one must use one of the services in the [Compare](https://www.notion.so/Compare-a8cc18ae7e594d3f8d420c1f342effa3?pvs=21) guide.
* [Face Verify](https://www.notion.so/Face-Verify-52e2e2c0ee564ad1b3a40ab92797b367?pvs=21): Service for performing a 1:1 search with respect to a Person generated previously in a Collection. This service verifies and, if there is a match, returns the information of the existing Person.

### **Other Guides**

Once this guide is completed, the next step is to review the other guides found in this documentation:

* [**Collection and Persons Guide**](https://www.notion.so/Collection-y-Persons-2a2a56f36c6e486db917970851185c84?pvs=21)
* [**Compare Guide**](https://www.notion.so/Compare-a8cc18ae7e594d3f8d420c1f342effa3?pvs=21)
* [**Liveness Guide**](https://www.notion.so/Liveness-d91586bf7fc4408b9efa66e136fd96c2?pvs=21)
