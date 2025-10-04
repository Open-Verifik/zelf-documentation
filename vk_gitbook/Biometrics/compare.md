# Compare

## Overview

The comparison services, as the name suggests, aim to perform **1:1** comparisons in search of facial matches. In Verifik, comparisons are managed using a parameter called **score**. This parameter is a number between 0 and 1, determining the degree of facial match found. A score closer to 1 indicates a higher probability that the compared images are of the same person.

### **Which services perform a comparison?**

Currently, there are two services for conducting comparative processes. They are listed below with their respective API links:

{% content-ref url="compare/compare-1-1" %}
[compare-1-1](https://docs.verifik.co/verifik-biometrics-apis/compare/compare-1-1)
{% endcontent-ref %}

{% content-ref url="compare/compare-and-liveness-detection" %}
[compare-and-liveness-detection](https://docs.verifik.co/verifik-biometrics-apis/compare/compare-and-liveness-detection)
{% endcontent-ref %}

These services serve the same purpose: comparing images in search of facial matches. They share many similarities and some differences that will be explained below.

### **Similarities in the Services**

The aforementioned services have a quite similar structure. Below, we'll show a **JSON** explaining each of the parameters:

```json
{
  "probe": [
    "Base 64 String"
  ],
  "gallery": [
    "Base 64 String"
  ]
  "search_mode": "FAST/ACCURATE choose one, default FAST"
}
```

* **probe**: This is an image that must be of a real person and must be supplied in base64 format. If Verifik does not find a face, the service will not work properly.
* **gallery**: Similar to probe, this is an image that must be of a real person and must be supplied in base64 format. If Verifik does not find a face, the service will not work properly.
* **search\_mode**: This parameter determines how the face search in the collection will be conducted. There are two valid parameters: i) "FAST" for a quick search, and ii) "ACCURATE" for much more precise queries in the collection. The latter increases the service response times but ensures better mapping to avoid adding duplicate faces.

### **Differences in the Services**

The only difference between both services is that one performs a liveness detection process, and the other does not. In the case of the service that does perform liveness detection, in addition to the aforementioned parameters, we need to send the following parameter in the body:

```json
{
  "liveness_min_score": 0.7
}
```
