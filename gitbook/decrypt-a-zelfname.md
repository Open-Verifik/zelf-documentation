# Decrypt a ZelfName

### Endpoint

```
https://api.zelf.world/api/zelf-name-service/v2/decrypt
```

This endpoint is used to decrypt a ZelfProof by taking the **ZelfName** along with the face (selfie) and the password (optional). The first thing that we do, is that we perform a liveness test prior the decryption to make sure it's a real person utilizing the decryption API.

### Request

* **Endpoint**: `/api/zelf-name-service/decrypt`
* **Method**: POST
* **Content-Type**: `application/json`

### **Request Body**

The request body should be a JSON object containing the following fields:

```json
{
    "zelfName": "myname.zelf",
    "faceBase64": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYdyobTgp7CcFECoA4juiD/eqR1QsNfRUrJP...",
    "password": "<your_optional_password>",
    "removePGP": true,
}    
```

{% hint style="danger" %}
\[wallet, faceBase64, password]> those variables should be encrypted with PGP if it comes from the Zelf web extension or the Zelf Mobile App using the Online version, but you could disable that encryption if you use the API by your own risk with the following key -> **removePGP** = true.
{% endhint %}

* **zelfName**: `string` (**required**) - The ZelfName that is stored in Arweave, which contains your ZelfProof.
* **faceBase64**: `string` (**required**) - The biometric encryption is mandatory, for that reason we require a selfie again of the owner of the wallet (ZelfProof).
* **password**: `string` (**optional**) - The password is only required if you set one at the moment of the encryption of this  wallet (ZelfProof).

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```java
const axios = require('axios');

let data = JSON.stringify({
  "zelfName": "myname.zelf",
  "faceBase64": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJT...",
  "password": "your_password_here",
  "removePGP": true
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/zelf-name-service/v2/decrypt',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzICJ9.eyJzZXNzaGRr...PIc0'
  },
  data : data
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
```

{% endtab %}

{% tab title="cURL" %}

```bash
curl --location 'https://api.zelf.world/api/zelf-name-service/v2/decrypt' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzIXVCJ9.ey...EQ8R-iw' \
--data '{
    "zelfName": "importtesttwo240testagain10.zelf",
    "removePGP": true,
    "faceBase64": "/9j/4AAQSkZJRgA.../9k="
}'
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client
import json

conn = http.client.HTTPConnection("api.zelf.world")
payload = json.dumps({
  "zelfName": "importtesttwo240testagain10.zelf",
  "removePGP": true,
  "faceBase64": "/9j/4AAQSkZJRgABAQEAS.../9k="
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUkpXVCJ9.eyJjbGllb...Q8R-iw'
}
conn.request("POST", "/api/zelf-name-service/v2/decrypt", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "data": {
        "hasPassword": true,
        "image": "data:image/png;base64,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",
        "pgp": {
            "encryptedMessage": "-----BEGIN PGP MESSAGE-----\n\nwV4DzqVN9t3NaZMSAQdAhxE51siOY3zVMazJ9JV2ebEmZuH0ju79pwfRJiQY\nAmUwFeSmExS9ObvzT/0LbqiYueehJ3oSZRIhSEjrFSL6JUXlvGO5QrTeuw4F\nXcWTGsWy0sA1AR1AKUs0k/wHDZgMWgpXPpQy0SNe179S03B4BoYjre2K4sr9\nnXRHmgy5rdAaolS4Y44wf9PyBrfM+0PPAlEkvbZBGyx9rxFhyeqeKGUltHgT\nfbCpgxUb4xWOdXc7NzQdSrP89U3iAiSvF85/SR6Oy2pDS3eJ98yC29An/hTR\n0HtknKFVfVFOoRDfZz0IlQgGurqWCUrGLJWoNvTf2CsS4PCU4sqKWUznUq57\n0GMPvNlNxJnrOAJPvvFhm0YVPzFnVv3Al34uDXwOy8Mq5phWgvtHVHQWxqrS\nXs4E0X1/7xB33j/2P6UeyRe4b1tevqzXHc9c4E4=\n=LOKx\n-----END PGP MESSAGE-----\n",
            "privateKey": "-----BEGIN PGP PRIVATE KEY BLOCK-----\n\nxYYEaEsnZhYJKwYBBAHaRw8BAQdAFBnS9mGktckr8FnidjamWb/VnAKlHSdQ\nNQOFqNpto53+CQMIUVZng65D+Ozg/cDGV4Tu8aYrzIElj7+NQv1HhLLVLJVy\nED3R/SQYorbUTIc39SIwf5Gq0No2qk93jeqNPlFhGyNMo+Vdl8UzJkWqUxiB\nc80cTWlndWVsIFQgPG1pZ3VlbEB6ZWxmLndvcmxkPsKMBBAWCgA+BYJoSydm\nBAsJBwgJkPdAdn5F6sdWAxUICgQWAAIBAhkBApsDAh4BFiEEORXHMu3FsS4I\n/4rY90B2fkXqx1YAACCrAP9TxEaOlFixdLjnQhGSne/plSY33j0Eau0rOpGD\nmY+wDAEA4ulUTnpi5xtO8ydfRuiwwRxumJVtyrT9QQ/c2wEdTwDHiwRoSydm\nEgorBgEEAZdVAQUBAQdA7CCN7DKR2Toxa+ZjDO2w3n0eQIBCQTJdxa36+09s\ndU8DAQgH/gkDCE9PEFNzVo/f4MpXx8q0/5yzIP2Nd/2BGxCDUnSbjMdc45Ft\nKb3MUqXbYQVhrqm1o7QdG7cvdDXIEsUAsjxY+HkNTdY/i4IPvo+cPPlxRITC\neAQYFgoAKgWCaEsnZgmQ90B2fkXqx1YCmwwWIQQ5Fccy7cWxLgj/itj3QHZ+\nRerHVgAAL7gBALwzEvQJt+B8ZLm2sqJYC3e+NTzz20ZrPkkw+anqzhkVAP9b\nmtuEBJ2m021E4ZNQcFl0S3XybCLs8bBCSaKtwomCAA==\n=t2Nt\n-----END PGP PRIVATE KEY BLOCK-----\n"
        },
        "url": "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreia2c5fmaevhkov264tngrradq4jv3rf2cox54zcy2jfcpy6snwvma",
        "zelfName": "miguel10024.zelf.hold",
        "publicData": {
            "btcAddress": "bc1q0pnxwcm2haf60xpntt5yrhckxnzpvfjjjtxp73",
            "origin": "online",
            "zelfName": "miguel10024.zelf.hold",
            "solanaAddress": "DQi49Q4siUQL789aeELnQaU8GsEJqE8jGcFkJEuMLUGL",
            "ethAddress": "0x9252b6E9DDd38831C8071a1a236A82D234d107D5",
            "name": "miguel10024.zelf",
            "type": "hold",
            "zelfProof": "AnzfhBau8lAPDHWJlA/6p8NtCPOjMT6Tq2VVbhJZbEID+xQBANNFftbKaTN2Ckrkc9+92acCGdgdvd9XV4/C52usDZ7e9dQrN3QkMCMj1Idy/PvPT+lO4Urnuw2x6DzO/UGYgGgFJjjTHCI8k0Qti/5R22rAeqHkamUur31YayyiFGg6Ju2ecWmTgFA+BuTIZ0UTCTQa9aDk5/1kXBitvBXLKf9OfyMacDoI2KYbWiqbVmk9HYUHwShw3YKq2SeNtFBDqtCMsBOyL5kl0FZlPrFe9ElMfGwVku4Xe8uJL4E6tVFU/qe32aoV35O53PWPcpCtwaOrmRCpJ4JxtrFKRP/rH5ussEi7Im36rK89pqmYyeHfglfKnwzcGayJP+n38F/15qCNcJ4+mXTBh0K26qg9RrY8AZ+lXhMQAxz50HASyBiOaP484UpE5J2ikd76FvQK690g6XJ+osH3MkDu7ladqZaJ0qIqGDIVQy5jcn9/UyAsTZWwHTl0V2Xvc8OXFfl7rsrL4kUbPnaxE6uqYosn45X1SoCxRjSpDrFkMtEX795DM1Ro5WhxtmU6hcIHzZ6Fu8nVmYq1524NRHEziSTew9THVyA6ji4uVukPGcDMZgVTn1k82EERVEiOsYf8jNWPSkzZbP/JuagB3Dl7fzV/XufL0dEd6BaoAxRkiqaO8jEH6r3o+jzeIQToeMNtIiIiBjQngTbD/QstQLwbz1YacJ+3dFh3G6r7vENHaklxnTnySny7ssUiB6cAVJNfoasYC3yBuk3L6X2c1uDDgWS2Rn93ThJ5YUpKQEiqKfgig3rWZu+9tYGJFlPOTS1BY12hZ3X6rkrWyYLzVqsN7v8kSv9iaJnF14Iee2kjZHrOf8cync/fezyqiEpM07Sgx9dosfL571cxnhBQzy0LB8mYft77kYCiS7y5co2qDKL8wmljmgvwuhDfEEnUMBmp0/fMPKuVcy2wpGHDiFY0jQpXwuqE/8KAzO2jycnIFHNIg+8NV6TW583cDidOBw4DznvRPcpJWFkpl+PlidAYvbhbIyHWNV23D0ZO14sJafb1lD9cQ9eb4RAUIUCjQcrttvTc7yI=",
            "hasPassword": "true",
            "suiAddress": "0x777ea6453b950b8ac02296b2a95ce95f31c76b3eff7bd978c81da6813d3ad090",
            "price": 0.8,
            "duration": 1,
            "registeredAt": "2025-06-12 14:15:49",
            "expiresAt": "2025-07-12 14:15:49"
        },
        "durationToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ6ZWxmTmFtZSI6Im1pZ3VlbDEwMDI0LnplbGYuaG9sZCIsImV4cCI6MTc1MjM0OTUyNywiaWF0IjoxNzQ5NzU3NTI3fQ.Pu-NgArdM8dZ-9YjNPlhYJKl0REB2hN7CLEebrvSDgM"
    }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "error": "zelfName_not_found"
}
```

{% endtab %}
{% endtabs %}

<figure><img src="https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FBKvAKFFowS9DGwNdjnsD%2FEXISTING%20ZELF%20NAME%20-%20ONLINE%20(1).jpg?alt=media&#x26;token=6fd29167-1b42-4856-adaf-96db392655f2" alt=""><figcaption></figcaption></figure>
