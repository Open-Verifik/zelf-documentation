# Almacenamiento Permanente

### **Cómo Arweave Mejora la Seguridad de ZelfProof**

Cada `zelfName` del usuario, generado durante la creación de un ZelfProof, se almacena en Arweave. Esta integración permite a los usuarios recuperar su `zelfName` en cualquier momento directamente desde la blockchain, asegurando que tengan acceso ininterrumpido a sus activos. Incluso **si los usuarios pierden acceso a su dispositivo o respaldo**, pueden recuperar su `zelfName` y `zelfProof` de **Arweave** buscando el zelfName que arrendaron.

### **Recuperación y Respaldo**

El mecanismo de almacenamiento de Arweave asegura que los usuarios:

1. **Nunca Pierdan Acceso**: Dado que el `zelfName` se almacena en una blockchain, los usuarios pueden recuperarlo en cualquier momento, incluso si otros métodos de almacenamiento locales o basados en la nube fallan.
2. **Recuperen Activos Fácilmente**: Al obtener su `zelfName` de Arweave, los usuarios pueden restaurar su ZelfProof y acceder a sus activos con confianza, sabiendo que estos datos son seguros, inmutables y permanentemente almacenados.

### **Cómo Funciona con el Servicio de Nombres Zelf**

1. Cuando un usuario crea un ZelfProof en el Servicio de Nombres Zelf, la Prueba ZK-Face generada se *sube* a **Arweave**.
2. El proceso de subida genera un ID de transacción único (TX ID), que sirve como una referencia permanente al ZelfProof.
3. Los usuarios pueden recuperar su ZelfProof consultando Arweave usando el Nombre Zelf que se almacena dentro de las etiquetas asociadas con el Código QR almacenado dentro de Arweave.

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FQ7TLz069kgLsf1FfxraL%2Fimage.png?alt=media&#x26;token=697ad636-5a4f-4538-b821-c31da850ae99)

<details>

<summary>Ejemplo de Resultado de Consulta para un ZelfName </summary>

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

#### **# Nodo de Transacción**

Cada transacción se representa como un nodo que contiene los siguientes campos clave:

* **`id`**: El ID de transacción único. Esto puede usarse para obtener los datos de transacción directamente de Arweave usando el formato de URL:\
  `https://arweave.net/{id}`.\
  Ejemplo:\
  [https://arweave.net](pgjhRRZ8tz6BGajDbk9CQY1eJlHuFZ9pisPphDcint4)
* **`owner.address`**: La dirección de billetera del creador de la transacción. Esta es la dirección que subió los datos a Arweave.
* **`data.size`**: El tamaño de los datos almacenados (en bytes). En este caso, son `18369` bytes.

#### **# Etiquetas**

Las etiquetas son metadatos asociados con la transacción. En este caso, proporcionan información crítica sobre el `zelfProof` y sus datos vinculados:

1. **`Content-Type`**:\
   Indica el tipo MIME de los datos almacenados. Aquí, es `image/png`.
2. **`zelfProof`**:\
   Una prueba criptográfica vinculada al `zelfName`. Esta prueba es esencial para verificación de identidad, cifrado e interacciones seguras de billetera. Se almacena en un formato cifrado, asegurando privacidad y seguridad.
3. **`ethAddress`, `solanaAddress`, y `btcAddress`**:\
   Direcciones de billetera para Ethereum, Solana y Bitcoin, respectivamente, asociadas con este `zelfName`. Estas direcciones permiten a los usuarios interactuar con varios ecosistemas blockchain.
4. **`evm`**:\
   Una lista de redes compatibles con Máquina Virtual de Ethereum (EVM) soportadas por este `zelfProof`. Por ejemplo: `ETH, BNB, MATIC, AVAX`.
5. **`zelfName`**:\
   El identificador único para el usuario (`johan1234789.zelf`). Esto vincula el `zelfProof` a la cuenta del usuario y sirve como una clave de búsqueda.

#### Acceso a Datos

Para acceder a los datos de respaldo para un `zelfName` específico:

1. Consultar la API GraphQL de Arweave:
   * Filtrar por la etiqueta `zelfName` para localizar la transacción.
   * Consulta de ejemplo:

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
2. Usar el `id` devuelto para acceder a la transacción:
   * URL: `https://arweave.net/{id}`
   * Ejemplo: [https://arweave.net](pgjhRRZ8tz6BGajDbk9CQY1eJlHuFZ9pisPphDcint4)

Esta implementación establece a Arweave como la columna vertebral del sistema de respaldo descentralizado de Zelf, permitiendo a los usuarios almacenar y recuperar de forma segura sus `zelfProofs` y acceso a sus billeteras. Este enfoque asegura una solución robusta, confiable y permanente que proporciona a los usuarios acceso sin problemas a sus activos criptográficos e identidades.

### Pruébalo tú mismo aquí

[Ver el video](https://arweave.dev/graphql)
