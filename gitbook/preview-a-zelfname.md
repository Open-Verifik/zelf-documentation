# Preview a ZelfName

### Endpoint

```
https://api.zelf.world/api/zelf-name-service/preview
```

In this method, we will preview only the public information that was stored inside the `ZelfProof` so you can identify what the `ZelfProof` might contain inside the encrypted private information. This preview process will first search for the `zelfName` in Arweave, retrieve the relevant information if available, and then decrypt the public data for display.

#### **Process Flow**

1. **Search on Arweave**: The service will first perform a search on Arweave using the provided `zelfName` to locate any stored `ZelfProof` data.
2. **Retrieve Data**: Upon finding the data, the service retrieves it, which may include:
   * Arweave transaction ID
   * Arweave URL (e.g., `https://arweave.net/[transaction-id]`)
   * Explorer URL for easy verification on Arweave
   * Encrypted `ZelfProof` and associated `publicData`
3. **Preview**: After retrieving the data from Arweave, the service decrypts the `publicData` (such as the public address of supported chains) within the `ZelfProof`, allowing you to see the preview information without exposing sensitive details. In this preview, you can know if the ZelfProof requires a password or not.

### Request

* **Endpoint**: `/api/zelf-name-service/preview`
* **Method**: POST
* **Content-Type**: `application/json`

### **Request Body**

The request body should be a JSON object containing the following fields:

```json
{
    "zelfName": "myname.zelf"
}
```

#### Fields:

* **zelfName** *(string, required)*: The `zelfName` is your public tag that is directly linked to a `ZelfProof` stored on Arweave. For example, `"myname.zelf"`.

### **Request**

{% tabs %}
{% tab title="Node.js" %}

```javascript

const axios = require('axios');
let data = JSON.stringify({
  "zelfProof": "myname.zelf"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.zelf.world/api/zelf-name-service/preview',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': '••••••'
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
curl --location 'https://api.zelf.world/api/zelf-name-service/preview' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1CJ9.eyJzZXNzaW...G-KJ4Wag' \
--data '{
    "zelfName": "myname.zelf"
}'
```

{% endtab %}
{% endtabs %}

### Response

{% tabs %}
{% tab title="200" %}

```json
{
    "data": [
        {
            "id": "Irv89n76tXXlS2GQV0NHV5EwIex09RO6uUnwp_Njy-E",
            "url": "https://arweave.net/Irv89n76tXXlS2GQV0NHV5EwIex09RO6uUnwp_Njy-E",
            "explorerUrl": "https://viewblock.io/arweave/tx/Irv89n76tXXlS2GQV0NHV5EwIex09RO6uUnwp_Njy-E",
            "publicData": {
                "Content-Type": "image/png",
                "zelfProof": "ArbLPVaOMlgL2ck0idcuVRYTMQg2NZnbxLRNy7NCKgk2OXx7CaDNaJMAyeJGgZOV7czgcWftUbicRZPhKl95beFRbHkVJI2WptnHLCi+7RsFYL7PiAjKrnDw8hh77jLPx9YGbBGEe30b1a+bBSfRe7+YITu9Tuc7+x4I3FKmvgpPK14JRQToAL+Jf905x5qm6LmK3+1lgP7G66dr7Ho+8jRAsJHYiIg0o+d9SI2+jaS1ZlD0HwmqE3mXVvJTrwX+uxW0DcTU0hrm/RUtBw9RXTLQ6UhJrd9LonScplazsMJORHxRwrD2ORH+DySPPwan11rX7UglDkQ/luup+gZi/Qt6eX8Rbf9XvCqIgTmZHO4e9efY5jeQZwOftBFe1tYV9YkffJo8FLLxKdkcHl5X8uAh3wYBsqtwXwSuyHr4A12n9eOBos47lnKeyWnskjyVHECNLs1HyHCGlRi4c5lhX8SjBVZwMv0pYkGZa9BtlrGus0vIoNmHJUjdqca1xx0Wp9ztPhqy2bcUaz3+qLZrswf0cnc9G1hO42CviZk0loKixwkIvk5scTD0kTjYIqRpEpofUHGY15KJYel1fP1mJwG8S1GiWcqmufuAhsh36BPX+zf0LV9pUs6NSl29u7J6I7W3Ph3U6zWlveVUP5erATVjr3biX1KzzobT4Av3VVjPOy2qQCIHW+ltVTT+DnwqmvbWtCkD1xpkc0trQcU1rTFuj5VMGR1aVpICvlcs2hLwpspEnDOexxdHuWhkonk6aIWLV06VhAS0p6/DF+H8KR/L3C/AwDnkWkgal+0ww2b3s35QAqHcbVgvA0VGK7E6CE7JK4nVTWJ4p1BjApeLwwWQrd4w+h+UFQqzrZVKuqWeZseL1V7X1kEO6XQuW4z6oUb/JIGZaokDp5Evyge5M/YrAdVahr0tlYIn4qO0elncluEubmYR5EMb0LDC42KXnGegh12EiHrnNvG7Mr7+82mN+kWI9haYIkng9Rv1/Y8wo+DuvXbQcAY5THZJlONAVPoCnuqFJDZUyllTCPuEn1dqNGAYvD9ccm0shnWaP3YRZof7TH9oUeP4wXT2Idg97xRqlp1mb0t6XO/au2K+ZULNsdk8MFIGzf3bUTO3/5eodFU=",
                "hasPassword": "false",
                "ethAddress": "0x51791504D0E71261c908Cd85E915F36B7ead2026",
                "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
                "solanaAddress": "8dm6fQxfpR9ef4Z13ntVg4cVR8hnzNi9tJDTG9qH8Yc1",
                "btcAddress": "1DCe6a5DLmWaNLgUQg4mcbm7gGw5KtWg9U",
                "zelfName": "importtesttwo2.zelf",
                "leaseExpiresAt": "2025-11-15 19:51:41"
            },
            "zelfProof": "ArbLPVaOMlgL2ck0idcuVRYTMQg2NZnbxLRNy7NCKgk2OXx7CaDNaJMAyeJGgZOV7czgcWftUbicRZPhKl95beFRbHkVJI2WptnHLCi+7RsFYL7PiAjKrnDw8hh77jLPx9YGbBGEe30b1a+bBSfRe7+YITu9Tuc7+x4I3FKmvgpPK14JRQToAL+Jf905x5qm6LmK3+1lgP7G66dr7Ho+8jRAsJHYiIg0o+d9SI2+jaS1ZlD0HwmqE3mXVvJTrwX+uxW0DcTU0hrm/RUtBw9RXTLQ6UhJrd9LonScplazsMJORHxRwrD2ORH+DySPPwan11rX7UglDkQ/luup+gZi/Qt6eX8Rbf9XvCqIgTmZHO4e9efY5jeQZwOftBFe1tYV9YkffJo8FLLxKdkcHl5X8uAh3wYBsqtwXwSuyHr4A12n9eOBos47lnKeyWnskjyVHECNLs1HyHCGlRi4c5lhX8SjBVZwMv0pYkGZa9BtlrGus0vIoNmHJUjdqca1xx0Wp9ztPhqy2bcUaz3+qLZrswf0cnc9G1hO42CviZk0loKixwkIvk5scTD0kTjYIqRpEpofUHGY15KJYel1fP1mJwG8S1GiWcqmufuAhsh36BPX+zf0LV9pUs6NSl29u7J6I7W3Ph3U6zWlveVUP5erATVjr3biX1KzzobT4Av3VVjPOy2qQCIHW+ltVTT+DnwqmvbWtCkD1xpkc0trQcU1rTFuj5VMGR1aVpICvlcs2hLwpspEnDOexxdHuWhkonk6aIWLV06VhAS0p6/DF+H8KR/L3C/AwDnkWkgal+0ww2b3s35QAqHcbVgvA0VGK7E6CE7JK4nVTWJ4p1BjApeLwwWQrd4w+h+UFQqzrZVKuqWeZseL1V7X1kEO6XQuW4z6oUb/JIGZaokDp5Evyge5M/YrAdVahr0tlYIn4qO0elncluEubmYR5EMb0LDC42KXnGegh12EiHrnNvG7Mr7+82mN+kWI9haYIkng9Rv1/Y8wo+DuvXbQcAY5THZJlONAVPoCnuqFJDZUyllTCPuEn1dqNGAYvD9ccm0shnWaP3YRZof7TH9oUeP4wXT2Idg97xRqlp1mb0t6XO/au2K+ZULNsdk8MFIGzf3bUTO3/5eodFU=",
            "zelfName": "importtesttwo2.zelf",
            "zelfProofQRCode": "data:image/png;base64,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",
            "source": "arweave"
        }
    ]
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

#### 200 OK Response

Upon successful preview of a `zelfName`, the response returns detailed information about the retrieved `ZelfProof` stored on Arweave or IPFS as our backup. The structure includes various fields for the transaction and metadata associated with the `zelfName`.

```json
{
    "data": [
        {
            "id": "string",
            "source": "string",
            "url": "string",
            "explorerUrl": "string",
            "zelfProof": "string",
            "preview": {
                "passwordLayer": "string",
                "publicData": {
                    "ethAddress": "string",
                    "btcAddress": "string",
                    "zelfName": "string",
                    "solanaAddress": "string",
                    "evm": "string"
                },
                "requireLiveness": boolean
            },
            "zelfProofQRCode": "string"
        }
    ]
}
```

### **Fields in the response**

* **data** *(array)*: An array containing details of the `zelfName` preview. Each object represents one entry for the `zelfName`.
  * **id** *(string)*: The unique Arweave transaction ID associated with this `zelfProof`.
  * **url** *(string)*: The direct URL to access this transaction on Arweave (e.g., `https://arweave.net/[transaction-id]`).
  * **explorerUrl** *(string)*: A URL to view the transaction on the Arweave explorer, providing further details about the stored data (e.g., `https://viewblock.io/arweave/tx/[transaction-id]`).
  * **zelfProof** *(string)*: The encrypted `zelfProof` data, which includes both public and private encrypted information.
  * **preview** *(object)*: Contains preview information for the `zelfProof`.
    * **passwordLayer** *(string)*: Specifies if a password layer is applied, with possible values like `"NoPassword"` or `"WithPassword"`.
    * **publicData** *(object)*: Decrypted public data within the `zelfProof`, providing essential information.
      * **ethAddress** *(string)*: The Ethereum address associated with the `zelfProof`.
      * **btcAddress** *(string)*: The Bitcoin address associated with the `zelfProof`.
      * **zelfName** *(string)*: The `zelfName` that was previewed (e.g., `"myname.zelf"`).
      * **solanaAddress** *(string)*: The Solana address associated with the `zelfProof`.
      * **evm** *(string)*: Supported EVM-compatible chains for this `zelfProof`, listed as comma-separated values (e.g., `"ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA"`).
    * **requireLiveness** *(boolean)*: Indicates if a liveness check is required to access this `zelfProof`.
  * **zelfProofQRCode** *(string)*: A base64-encoded image of the QR code representing the `zelfProof`. It can be displayed as an image to users for scanning.
