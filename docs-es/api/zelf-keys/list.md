---
title: Listar Zelf Keys
description: Recupera una lista de registros almacenados de ZelfKeys.
keywords: [zelf keys, listar contraseñas, obtener contraseñas, listar notas]
---

# Listar Zelf Keys

Recupera tus registros de ZelfKeys almacenados. Puedes listar registros filtrados por una categoría específica o recuperar una lista unificada de todos tus datos almacenados.

## Endpoints

### Listar Por Categoría

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=:category
```

### Listar Todas las Categorías

```
GET {{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list-all
```

## Autenticación

Requiere un token JWT obtenido mediante `POST /api/sessions`.

## Parámetros de Consulta

### Para el Endpoint `/list`
- `category` (string, requerido): La categoría de registros a buscar. Las opciones válidas incluyen `password`, `notes`, `zotp` y `credit_card`.

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-category" label="200 OK (Por Categoría)" default>

```json
{
  "data": {
    "success": true,
    "message": "Found 1 items in category: password",
    "category": "password",
    "totalCount": 1,
    "fullTagName": "miguel.zelf",
    "searchCategory": "miguel.zelf_password",
    "timestamp": "2026-05-13T15:22:09.590Z",
    "data": [
      {
        "id": "password_bafy...",
        "cid": "bafy...",
        "url": "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafy...",
        "publicData": {
          "website": "https://github.com",
          "username": "testuser@zelf.world",
          "timestamp": "2026-05-13T15:23:04.010Z",
          "type": "password"
        },
        "zelfProofQRCode": "data:image/png;base64,...",
        "zelfProof": "eyJhbGciOiJSUzI1NiIsI...",
        "createdAt": "2026-05-13T15:23:05.666Z",
        "updatedAt": "2026-05-13T15:23:05.666Z"
      }
    ]
  }
}
```

</TabItem>
<TabItem value="200-all" label="200 OK (Todo)">

```json
{
  "data": {
    "success": true,
    "totalCount": 4,
    "data": {
      "password": [
        {
          "id": "password_bafy...",
          "publicData": { "website": "https://github.com", "username": "testuser@zelf.world" },
          "zelfProof": "eyJhbGciOiJ..."
        }
      ],
      "notes": [],
      "zotp": [],
      "credit_card": []
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

Devuelto si falta el parámetro de consulta `category` en el endpoint `/list`.

```json
{
  "validationError": "category is required"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="nodejs" label="Node.js" default>

```javascript
const axios = require('axios');

// Listar contraseñas
const passwordsResponse = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=password', {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Contraseñas almacenadas:', passwordsResponse.data.data.data);

// Listar todos los registros
const allRecords = await axios.get('{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list-all', {
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Origin': 'https://yourdomain.com' 
  }
});

console.log('Todos los registros de la bóveda (Contraseñas):', allRecords.data.data.data.password);
```

</TabItem>

<TabItem value="curl" label="cURL">

```bash
# Listar contraseñas
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list?category=password" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Listar todos los registros
curl -X GET "{{ZELF_PUBLIC_API_ORIGIN}}/api/zelf-keys/list-all" \
  -H "Origin: https://yourdomain.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

</TabItem>
</Tabs>
