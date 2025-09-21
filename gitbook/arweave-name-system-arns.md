# Arweave Name System (ArNS)

When the end user creates a zelfName and purchases a subscription for 1 to N years, we create the record in Arweave because when you don't purchase it we just say the temporal zelfNames in IPFS since it's easier to just remove them after the trial period.

When we store it in Arweave we also bring more benefits besides the permanent storage of the ZelfProof, one of those benefits is that we create a permanent website that we keep updating with the information that we store inside Arweave regarding the ZelfName registration.

<figure><img src="https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FZKVVvBf2MflqqBZN9ZzJ%2Fimage.png?alt=media&#x26;token=1f1ca00b-7eb4-47e1-acdd-57c24dbbe8e7" alt=""><figcaption></figcaption></figure>

### Claim your Zelf Name Site

```
https://api.zelf.world/api/ar-io-arns/:zelfName
```

#### Request

Endpoint: `/api/ar-io-arns/:zelfName` \
\
Method: **POST**

Content-Type: `application/json` \\

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/ar-io-arns/myzelfname.zelf',
  headers: { }
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
curl --location --request POST 'https://api.zelf.world/api/ar-io-arns/myzelfname.zelf'
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.zelf.world")
payload = ''
headers = {}
conn.request("POST", "/api/ar-io-arns/myzelfname.zelf", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

#### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "id": "Y1ya0fQhyW9TVKMRwO9cDjlJkjRpa-zWEM3R057-82o",
    "result": {
        "transactionId": "oAXUqVVS2-I2OWPKjVOsLGNnwYVFHUTpJepvCxnrEvY",
        "ttlSeconds": 3600
    },
    "primaryUrl": "https://dinero_zelf.arweave.zelf.world",
    "secondaryUrl": "https://dinero_zelf.arweave.net"
}
```

{% endtab %}

{% tab title="Already registered" %}

```json
{
    "success": true,
    "exists": true,
    "record": {
        "transactionId": "oAXUqVVS2-I2OWPKjVOsLGNnwYVFHUTpJepvCxnrEvY",
        "ttlSeconds": 80,
        "index": 3
    },
    "upToDate": true,
    "zelfName": "jumitrmo",
    "primaryUrl": "https://myzelfname_zelf.arweave.zelf.world",
    "secondaryUrl": "https://myzelfname_zelf.arweave.net"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "message": "not_found_in_arweave",
    "code": "NotFound"
}
```

{% endtab %}
{% endtabs %}

### Query your Zelf Name Site

```
https://api.zelf.world/api/ar-io-arns/:zelfName
```

#### Request

Endpoint: `/api/ar-io-arns/:zelfName` \
\
Method: **GET**

Content-Type: `application/json` \\

{% tabs %}
{% tab title="Node.js" %}

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/ar-io-arns/dinero.zelf',
  headers: { }
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
curl --location --request GET 'https://api.zelf.world/api/ar-io-arns/dinero.zelf'
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.zelf.world")
payload = ''
headers = {}
conn.request("GET", "/api/ar-io-arns/dinero.zelf", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}
{% endtabs %}

#### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "success": true,
    "exists": true,
    "record": {
        "transactionId": "oAXUqVVS2-I2OWPKjVOsLGNnwYVFHUTpJepvCxnrEvY",
        "ttlSeconds": 3600,
        "index": 2
    },
    "upToDate": true,
    "zelfName": "dinero",
    "primaryUrl": "https://dinero_zelf.arweave.zelf.world",
    "secondaryUrl": "https://dinero_zelf.arweave.net"
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "message": "not_found_in_arweave",
    "code": "NotFound"
}
```

{% endtab %}
{% endtabs %}
