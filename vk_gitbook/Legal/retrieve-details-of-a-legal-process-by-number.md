# Retrieve Details of a Legal Process by Number

### Endpoint

```
https://api.verifik.co/v2/co/rama/proceso/{processNumber}
```

The Legal Branch service allows users to retrieve detailed information about a specific legal process in Colombia by providing its number. The service returns a response that includes details such as the process type, class, subclass, involved parties, actions taken, and more.

This service is valuable for legal professionals and individuals seeking comprehensive information about a particular legal case.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="171">Name</th><th width="81">Type</th><th width="107">Required?</th><th width="239">Description</th><th>Example</th></tr></thead><tbody><tr><td><strong>processNumber</strong></td><td>String</td><td><code>True</code></td><td>Process ID delivered by the <a href="https://www.notion.so/Colombian-Legal-Processes-ffd37fbeff7145bcace10656bbfce3b8?pvs=21">judicial process</a> endpoint.</td><td><code>123456789</code></td></tr></tbody></table>

### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/rama/proceso/18738473',
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/co/rama/proceso/123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/rama/proceso/123456789")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()

```

{% endtab %}

{% tab title="PHP" %}

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/rama/proceso/123456789');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "details": {
      "idRegProceso": 123456,
      "llaveProceso": "12345678987654321",
      "idConexion": 180,
      "esPrivado": false,
      "fechaProceso": "2013-11-28T00:00:00",
      "despacho": "JUZGADO 005 CIVIL DEL CIRCUITO DE BOGOTÁ ",
      "ponente": "XXXX XXXX XXX XXXX",
      "tipoProceso": "Declarativo",
      "claseProceso": "Divisorios",
      "subclaseProceso": "Sin Subclase de Proceso",
      "recurso": "Sin Tipo de Recurso",
      "ubicacion": "Archivo",
      "contenidoRadicacion": "ESCRITURA",
      "fechaConsulta": "2021-12-17T15:53:20.15",
      "ultimaActualizacion": "2021-12-16T18:27:25.95"
    },
    "subjects": [
      {
        "idRegSujeto": 15775331,
        "tipoSujeto": "Demandante",
        "esEmplazado": false,
        "identificacion": "string",
        "nombreRazonSocial": "XXXX XXXX XXXX XXXX",
        "cant": 2
      },
      {
        "idRegSujeto": 15775330,
        "tipoSujeto": "Demandado",
        "esEmplazado": false,
        "identificacion": "string",
        "nombreRazonSocial": "XXXXXX XXXX XXXX XXXX ",
        "cant": 2
      }
    ],
    "actions": [
      {
        "idRegActuacion": 12345678,
        "llaveProceso": "11001310300520130078000",
        "consActuacion": 8,
        "fechaActuacion": "2014-02-10T00:00:00",
        "actuacion": "XXXXXX XXXXX",
        "anotacion": "ARCHIVO FEBRERO DE 2014.PAQUETE 285.",
        "fechaInicial": "string",
        "fechaFinal": "string",
        "fechaRegistro": "2014-02-10T00:00:00",
        "codRegla": "00                              ",
        "conDocumentos": false,
        "cant": 8
      }
    ],
    "signature": {
      "dateTime": "August 30, 2022 1:26 PM",
      "message": "Certified by Verifik.co"
    }
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
    "code": "NotFound",
    "message": "Record not found.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

{% endtab %}

{% tab title="409" %}

```json
{
  "code": "MissingParameter",
  "message": "missing processNumber\n"
}
```

{% endtab %}
{% endtabs %}
