# Liveness Detection

### Endpoint \[POST]

```
https://api.verifik.co/v2/face-recognition/liveness 
```

The Liveness Detection API allows you to perform a Face scan of an image, determining whether the image belongs to a live person or not. This API is useful for verifying the authenticity of a face and ensuring that the provided image comes from a real person.

You can use the liveness score to determine whether the provided selfie belongs to a live face or not. This API is valuable for various applications, including identity verification, fraud prevention, and ensuring that only live faces are used for authentication and access control.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Params**

| Name    | Type   | Description      |
| ------- | ------ | ---------------- |
| `image` | string | Name of the user |
| `os`    | number | Age of the user  |

```json
{
    "os": "DESKTOP", 
    "image": "base64_encoded_string"
}
```

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "id": "JQ4RM",
  "data": {
    "passed": true,
    "min_score": 0.6,
    "liveness_score": 0.98
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
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
