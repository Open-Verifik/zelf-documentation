# Sistema de Nombres de Arweave (ArNS)

Cuando el usuario final crea un zelfName y compra una suscripción por 1 a N años, creamos el registro en Arweave porque cuando no lo compras simplemente almacenamos los zelfNames temporales en IPFS ya que es más fácil removerlos después del período de prueba.

Cuando lo almacenamos en Arweave también obtenemos más beneficios además del almacenamiento permanente del ZelfProof, uno de esos beneficios es que creamos un sitio web permanente que mantenemos actualizado con la información que almacenamos dentro de Arweave con respecto al registro del ZelfName.

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FZKVVvBf2MflqqBZN9ZzJ%2Fimage.png?alt=media&#x26;token=1f1ca00b-7eb4-47e1-acdd-57c24dbbe8e7)

### Reclama tu Sitio de Zelf Name

```
https://api.zelf.world/api/ar-io-arns/:zelfName
```

#### Solicitud

Endpoint: `/api/ar-io-arns/:zelfName` \
\
Método: **POST**

Content-Type: `application/json` \\

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js" label="Node.js">

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

</TabItem>

<TabItem value="cURL" label="cURL">

```bash
curl --location --request POST 'https://api.zelf.world/api/ar-io-arns/myzelfname.zelf'
```

</TabItem>

<TabItem value="Python" label="Python">

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

</TabItem>
</Tabs>

#### Respuesta

<Tabs>
<TabItem value="200" label="200">

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

</TabItem>

<TabItem value="Already registered" label="Ya registrado">

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

</TabItem>

<TabItem value="404" label="404">

```json
{
    "message": "not_found_in_arweave",
    "code": "NotFound"
}
```

</TabItem>
</Tabs>

### Consulta tu Sitio de Zelf Name

```
https://api.zelf.world/api/ar-io-arns/:zelfName
```

#### Solicitud

Endpoint: `/api/ar-io-arns/:zelfName` \
\
Método: **GET**

Content-Type: `application/json` \\

<Tabs>
<TabItem value="Node.js" label="Node.js">

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

</TabItem>

<TabItem value="cURL" label="cURL">

```bash
curl --location --request GET 'https://api.zelf.world/api/ar-io-arns/dinero.zelf'
```

</TabItem>

<TabItem value="Python" label="Python">

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

</TabItem>
</Tabs>

#### Respuesta

<Tabs>
<TabItem value="200" label="200">

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

</TabItem>

<TabItem value="404" label="404">

```json
{
    "message": "not_found_in_arweave",
    "code": "NotFound"
}
```

</TabItem>
</Tabs>
