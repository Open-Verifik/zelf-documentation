# Permanent Storage

### **How Arweave Enhances ZelfProof Security**

Every user's `zelfName`, generated during the creation of a ZelfProof, is stored on Arweave. This integration allows users to retrieve their `zelfName` at any time directly from the blockchain, ensuring they have uninterrupted access to their assets. Even **if users lose access to their device or backup**, they can retrieve their `zelfName` and `zelfProof` from **Arweave** by searching the zelfName they leased.

### **Retrieval and Backup**

The Arweave storage mechanism ensures that users:

1. **Never Lose Access**: Since the `zelfName` is stored on a blockchain, users can retrieve it anytime, even if other local or cloud-based storage methods fail.
2. **Easily Recover Assets**: By fetching their `zelfName` from Arweave, users can restore their ZelfProof and access their assets with confidence, knowing that this data is secure, immutable, and permanently stored.

### **How It Works with Zelf Name Service**

1. When a user creates a ZelfProof in Zelf Name Service, the generated ZK-Face Proof is *uploaded* to **Arweave**.
2. The upload process generates a unique transaction ID (TX ID), which serves as a permanent reference to the ZelfProof.
3. Users can retrieve their ZelfProof by querying Arweave using the Zelf Name that is stored inside the tags associated with the QR Code stored inside Arweave.

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FQ7TLz069kgLsf1FfxraL%2Fimage.png?alt=media&#x26;token=697ad636-5a4f-4538-b821-c31da850ae99)

<details>

<summary>Example Query Result for a ZelfName </summary>

```json
{
  "data": {
    "transactions": {
      "edges": [
        {
          "node": {
            "id": "pgjhRRZ8tz6BGajDbk9CQY1eJlHuFZ9pisPphDcint4",
            "owner": {
              "address": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk"
            },
            "data": {
              "size": "18369"
            },
            "tags": [
              {
                "name": "Content-Type",
                "value": "image/png"
              },
              {
                "name": "zelfProof",
                "value": "AvIaAQcM8jLHbMtMhsXI9A6bKCRl5AxaFUQm9RKhwu51xcerX2zE/0fHskw/jWUSviRrr7YCFzCA/wgW8frja5daIIYK+VL77JTygGsvWb6Dy4273bo9535ksR1EECeGvXcOih9pcnruVR9NoLCxBuwcxrZMrBsYLHfunWsbhMwQBa6rUYXvL9OX+Wb7Pa37qPyAPk5oUgav6cQbOD8Zb9bZMekTWC+CJq+gq2/fpSo4YlTn2Dw4QSwW+/B3ZLE6z5drK5JiHZiTaQ5Oag9SluR9UQOmtYspY0jCXjvaitkdVg19jNLknDJp2FwjYMcrEK+y5oGD6wIM6tIZQPCPazI3GiupDyPoVAtPj9XEq2zPfHfdWOA31mTmdlMb4RTEmYoBUVV0y8yREE8ApNzfSbC3+oycz+joGx2GpFyttBU6oS6RD/wFcVG3qQ0Vp8EIPA0kBvspue3uT0VY0uCPrTXibrX0vDghLmJSf2YWfsuo29FTQoCJxA0cisKgiqyUX8pMdmbwS0aSsPgjIdxBgcKgPxv0nXvPmcHtazZOpmNd2LWwzrQs1GsdtUx1ERFsHuCJHHPh5kQS1A2mB5zYgUiUMvJEfmPnvBPUCjkWBVu85Y5XYS9tKE33hlwY5kmIZWKFkEQaM9wXoWwteqNdd3Zf82tGXYuWOlvMnieECKITnOJrlR7snm/t5uxeYapg5/eTVoqr5DYVpDJ28i8KdrHFMfl4udJSwMZumEhW4D+Jhf4jD0sV9C+szCI23P0rudsQnFuKeaR4acoQy3kHzozkr6+udnRAR6ozumF2Jh18jdDIzCC1tfeKP0dIyxk/OCUfH9mBEXZATLUHC9SoCP/GRq4sKk57EuzDs4oIMAyYd/NPj/+fFElCaNAMwRUg5AAtGYu2EIWTrBhhJCr37nAvaisFOmifQrmzvF0ERZOycVvwmDufpk/QjVCpJ2NXswbnKj6OldNzTOBqniieZ1F+3EXwJmvyu71X86u6ApwsTLsrBJZKqKBr/eFi4g/UsoOcozVhT4b8B1J9dK/4KkB0v7P4zQYJc1re5UT+zqBI4fO91UFJX17LjH83xz8HZmZc4vo="
              },
              {
                "name": "ethAddress",
                "value": "0xcDAaDC369460b16a252d6d5C15B9ffF76f431425"
              },
              {
                "name": "evm",
                "value": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA"
              },
              {
                "name": "solanaAddress",
                "value": "Gd8u8PQzunRjSxvkTbijVaE3bdydVJyiU5z8EGjoCQts"
              },
              {
                "name": "btcAddress",
                "value": "13whegsgAc2pwzuu4pJJM5D5AoDVbN5gJz"
              },
              {
                "name": "zelfName",
                "value": "johan1234789.zelf"
              }
            ]
          }
        }
      ]
    }
  }
}
```

</details>

#### **# Transaction Node**

Each transaction is represented as a node containing the following key fields:

* **`id`**: The unique transaction ID. This can be used to fetch the transaction data directly from Arweave using the URL format:\
  `https://arweave.net/{id}`.\
  Example:\
  [https://arweave.net](pgjhRRZ8tz6BGajDbk9CQY1eJlHuFZ9pisPphDcint4)
* **`owner.address`**: The wallet address of the transaction creator. This is the address that uploaded the data to Arweave.
* **`data.size`**: The size of the stored data (in bytes). In this case, it’s `18369` bytes.

#### **# Tags**

Tags are metadata associated with the transaction. In this case, they provide critical information about the `zelfProof` and its linked data:

1. **`Content-Type`**:\
   Indicates the MIME type of the stored data. Here, it’s `image/png`.
2. **`zelfProof`**:\
   A cryptographic proof linked to the `zelfName`. This proof is essential for identity verification, encryption, and secure wallet interactions. It’s stored in an encrypted format, ensuring privacy and security.
3. **`ethAddress`, `solanaAddress`, and `btcAddress`**:\
   Wallet addresses for Ethereum, Solana, and Bitcoin, respectively, associated with this `zelfName`. These addresses allow users to interact with various blockchain ecosystems.
4. **`evm`**:\
   A list of Ethereum Virtual Machine (EVM)-compatible networks supported by this `zelfProof`. For example: `ETH, BNB, MATIC, AVAX`.
5. **`zelfName`**:\
   The unique identifier for the user (`johan1234789.zelf`). This links the `zelfProof` to the user’s account and serves as a lookup key.

#### Accessing Data

To access the backup data for a specific `zelfName`:

1. Query Arweave’s GraphQL API:
   * Filter by the `zelfName` tag to locate the transaction.
   * Example query:

     ```graphql
     {
       transactions(
         tags: [{ name: "zelfName", values: ["your_zelf_name_here.zelf"] }]
          owners: ["vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk"]
       ) {
         edges {
           node {
             id
             owner {
               address
             }
             data {
               size
             }
             tags {
               name
               value
             }
           }
         }
       }
     }
     ```
2. Use the returned `id` to access the transaction:
   * URL: `https://arweave.net/{id}`
   * Example: [https://arweave.net](pgjhRRZ8tz6BGajDbk9CQY1eJlHuFZ9pisPphDcint4)

This implementation establishes Arweave as the backbone of Zelf’s decentralized backup system, enabling users to securely store and retrieve their `zelfProofs,`and access to their wallets. This approach ensures a robust, reliable, and permanent solution giving users seamless access to their cryptographic assets and identities.

### Test it for yourself here

[Watch the video](https://arweave.dev/graphql)
