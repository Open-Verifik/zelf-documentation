# The Person object

### **Attributes**

***

`name`  - String - **Required**

Name of the person that you are going to add to the DB.

***

#### `gender`- String - **Required**

Gender of the person that you are going to add to the DB.

***

#### `date_of_birth`- Object- Required

Date of birth of the person that you are going to add to the DB.

***

#### `nationality`- String - Required

Nationality of the person that you are going to add to the DB.

***

#### `notes`- String - Required

Aditional information related to the person or for the proccess that you are about to do.

***

#### `collection_id`- String - Required

This parameter is the so-called code generated when a collection is created properly.

***

#### `images`- Array- Required

Array of images of the person that you are going to add to the DB, it can be up to three images and all must be from the same person.

***

#### `min_score`- String- Required only when use /search-live-face

This parameter determines the minimum matching score when performing the 1: N comparison between the FaceMap and the FaceHash database in the collection. It determines whether the face already exists in the collection. This parameter is a number between 0.5 and 1.

***

#### `search_mode`- String- Required only when use /search-live-face

This parameter determines how the face search in the collection will be conducted. There are two valid parameters: i) "FAST" for a quick search, and ii) ACCURATE for much more precise queries in the collection. The latter increases the service response times but ensures better mapping to avoid adding duplicate faces.

***

#### `liveness_min_score`- String- Required only when use /search-live-face

Verifik's Life Detection system works by creating a score between 0.0 - 1.0, where 1.0 represents 100% in the life detection of the image. Therefore, when creating a person in a collection, it is important to consider the minimum detection parameter **liveness\_min\_score** according to the specific needs or use case being implemented.

**Note**: For the **liveness\_min\_score** parameter, Verifik recommends using a value higher than 0.75 to ensure accurate life detection and to allow the system to operate with low-quality images.

***

### The Persons object

```json
{
    "images": [
        "image in base 64"
    ],
    "name": "Nicolas Hernandez 2",
    "gender": "M",
    "date_of_birth": "1995-05-07",
    "nationality": "Colombian",
    "notes": "Verifik employee",
    "collection_id": "f9b230af-1e86-4fc2-89e1-e0442eb99b48",
    "min_score": 0.7,
    "search_mode": "FAST",
    "liveness_min_score": 0.5
}
```
