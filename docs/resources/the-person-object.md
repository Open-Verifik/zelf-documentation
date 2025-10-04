---
id: the-person-object
title: The Person Object
description: The Person object represents individuals in the facial recognition system
---

# The Person Object

The Person object represents individuals in the facial recognition system. This object contains all the information needed to manage and track people within your Verifik projects.

## Attributes

**`name`** - String - Required

Name of the person that you are going to add to the DB.

**`gender`** - String - Required

Gender of the person that you are going to add to the DB. Options: `M` (Male) or `F` (Female).

**`date_of_birth`** - Object - Required

Date of birth of the person that you are going to add to the DB.

**`nationality`** - String - Required

Nationality of the person that you are going to add to the DB.

**`images`** - Array of String - Required

Base64-encoded images for facial recognition. Multiple images can be provided for better recognition accuracy.

**`collections`** - Array of String - Optional

Array of collection IDs related to this person. Collections help organize people into groups.

**`notes`** - String - Optional

Additional notes about the person.

**`client`** - ObjectId - Required

Reference to the client who owns this person record.

**`status`** - String - Optional

Status of the person record. Can be:

* `active` - Person is active in the system
* `inactive` - Person is inactive
* `pending` - Person record is pending approval

**`faceEncodings`** - Array - Optional

Computed face encodings for facial recognition (automatically generated).

**`createdAt`** - Date - Required

Timestamp when the person record was created.

**`updatedAt`** - Date - Required

Timestamp when the person record was last updated.

## Example Object

```json
{
  "_id": "person_123456789",
  "name": "John Doe",
  "gender": "M",
  "date_of_birth": {
    "year": 1990,
    "month": 1,
    "day": 15
  },
  "nationality": "US",
  "images": [
    "base64_encoded_image_1",
    "base64_encoded_image_2"
  ],
  "collections": ["collection_123456789"],
  "notes": "VIP customer",
  "client": "client_123456789",
  "status": "active",
  "faceEncodings": [
    "face_encoding_1",
    "face_encoding_2"
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```
