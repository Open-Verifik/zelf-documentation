# Crear Licencia

Crear o actualizar una licencia para un dominio con configuración completa.

## Endpoint

```
POST /api/license
```

## Descripción

Este endpoint permite a los usuarios autenticados crear una nueva licencia o actualizar una existente para un dominio específico. La licencia contiene configuración detallada para la gestión de dominios, incluyendo características, límites, reglas de validación, configuraciones de almacenamiento, configuraciones de pago y metadatos. El sistema detecta automáticamente si ya existe una licencia y la actualiza en consecuencia.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes autenticarte usando el endpoint `/api/clients/auth` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `domain` | string | Sí | Nombre del dominio para la licencia (debe coincidir con el patrón: `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$`) |
| `faceBase64` | string | Sí | Datos biométricos faciales codificados en Base64 para autenticación |
| `masterPassword` | string | No | Contraseña maestra para seguridad adicional (puede ser cadena vacía) |
| `os` | string | No | Tipo de sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `domainConfig` | object | Sí | Objeto de configuración completo del dominio |

### Objeto DomainConfig

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `name` | string | Sí | Nombre para mostrar del dominio |
| `holdSuffix` | string | No | Sufijo para dominios hold (por defecto: ".hold") |
| `status` | string | No | Estado del dominio ("active", "inactive", "suspended") |
| `description` | string | No | Descripción del dominio |
| `limits` | object | Sí | Configuración de límites de recursos |
| `features` | array | Sí | Array de características habilitadas |
| `validation` | object | Sí | Reglas de validación del dominio |
| `storage` | object | Sí | Configuración de almacenamiento |
| `tagPaymentSettings` | object | Sí | Configuraciones de pago para etiquetas |
| `metadata` | object | No | Metadatos adicionales |

#### Objeto Limits

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `tags` | number | Sí | Número máximo de etiquetas permitidas |
| `zelfkeys` | number | Sí | Número máximo de zelfkeys permitidas |

#### Array Features

Cada objeto de característica contiene:

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `name` | string | Sí | Nombre para mostrar de la característica |
| `code` | string | Sí | Código identificador de la característica |
| `description` | string | Sí | Descripción de la característica |
| `enabled` | boolean | Sí | Si la característica está habilitada |

#### Objeto Validation

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `minLength` | number | Sí | Longitud mínima del nombre del dominio |
| `maxLength` | number | Sí | Longitud máxima del nombre del dominio |
| `allowedChars` | object | No | Patrones de caracteres permitidos |
| `reserved` | array | No | Nombres de dominio reservados |
| `customRules` | array | No | Reglas de validación personalizadas |

#### Objeto Storage

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `keyPrefix` | string | Sí | Prefijo para las claves de almacenamiento |
| `ipfsEnabled` | boolean | No | Habilitar almacenamiento IPFS (por defecto: true) |
| `arweaveEnabled` | boolean | No | Habilitar almacenamiento Arweave (por defecto: false) |
| `walrusEnabled` | boolean | No | Habilitar almacenamiento Walrus (por defecto: false) |

#### Objeto TagPaymentSettings

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `methods` | array | Sí | Métodos de pago ("coinbase", "crypto", "stripe", "paypal") |
| `currencies` | array | Sí | Monedas soportadas ("BTC", "ETH", "SOL", "USD", "EUR", "GBP") |
| `whitelist` | object | No | Configuración de lista blanca de pagos |
| `pricingTable` | object | Sí | Configuración de precios para diferentes longitudes de etiquetas |

#### Objeto Metadata

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| `launchDate` | string | No | Cadena de fecha ISO para la fecha de lanzamiento |
| `version` | string | No | Número de versión |
| `documentation` | string | No | URL de documentación |
| `support` | string | No | Nivel de soporte ("standard", "premium", "enterprise") |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "ipfs": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "testdomain1759017343950.account",
      "size": 1511,
      "number_of_files": 1,
      "mime_type": "text/plain; charset=UTF-8",
      "group_id": null,
      "created_at": "2025-09-27T23:55:45.131Z"
    },
    "name": "testdomain1759017343950",
    "holdSuffix": ".hold",
    "status": "active",
    "description": "Test domain for license creation",
    "limits": {
      "tags": 1000,
      "zelfkeys": 5000
    },
    "features": [
      {
        "name": "Zelf Name System",
        "code": "zns",
        "description": "Encryptions, Decryptions, previews of ZelfProofs",
        "enabled": true
      },
      {
        "name": "Zelf Keys",
        "code": "zelfkeys",
        "description": "Zelf Keys: Passwords, Notes, Credit Cards, etc.",
        "enabled": true
      }
    ],
    "validation": {
      "minLength": 3,
      "maxLength": 50,
      "allowedChars": {},
      "reserved": ["www", "api", "admin", "support", "help"],
      "customRules": []
    },
    "storage": {
      "keyPrefix": "testName",
      "ipfsEnabled": true,
      "arweaveEnabled": false,
      "walrusEnabled": false
    },
    "tagPaymentSettings": {
      "methods": ["coinbase", "crypto", "stripe"],
      "currencies": ["BTC", "ETH", "SOL", "USD"],
      "whitelist": {},
      "pricingTable": {
        "1": {
          "1": 240,
          "2": 432,
          "3": 612,
          "4": 768,
          "5": 900,
          "lifetime": 3600
        },
        "2": {
          "1": 120,
          "2": 216,
          "3": 306,
          "4": 384,
          "5": 450,
          "lifetime": 1800
        }
      }
    },
    "metadata": {
      "launchDate": "2025-01-01",
      "version": "1.0.0",
      "documentation": "https://docs.testdomain.com",
      "support": "standard"
    },
    "subscriptionId": "free",
    "previousDomain": "",
    "domain": "testdomain1759017343950",
    "owner": "testclient_1759017341663_0lxyth@example.com",
    "zelfProof": "Aph3wt3bkFwAA3XxFNqnI28/NDqYjzMqY+HG98PCYDEEEFw1BJDCqJdIczE7x9GV+0inoxg9CORXRBax8DqgAqq6LNztctKhBbTzX4OhbQn5BwQOx/r4BUrTJwn5UyZ/E4qcGitq3RD5o8sI7DJT6DAXQt7z8Bz8IL2tlH4Wy2RVgMLrwieMhmdF3MFlYhg6bR4R22xcm7obK7TrpGEujRAGHN+Lv48ryfUHPlZh9H+uaNFjyOF8qwVHirwtv1qTF4jOQ+kxaOaV0sy3MgOgznX5WlX5DiEBPtlI+ZpNrFpJJCRQCtvvyJPAJxWstRCQbZM/76w3Mw/wzKNXnWbrHX4xFUbq+afTJPACVwBVa1Sc3f7WypV5hLwQDMsJdq+csXLBFuabYWFPBABXxt6NfKRj5aQGv+e+bfDKjxrqdhqkyi7DR6i41AsfwPtbuPmm8qHUa9TgLLfFobR2I2IxQAZMGlFweOn2M2hAX1jII6tvoU8Yj124bJ+tN7V4jsteBRqZcSbUtSm8m4RuIgU/02BlQ5Bi+uwblLhJTd+z211+qCx3f329JcHZWQzcvlGWdw5Frxwh9YoztfDgTJxWlyL3MYlnhMKHi8zFIpzm5QD90JmzUqm8YcBMoi8KasfSPfEOAyWcav4iWkVv5IKgkU5et47G4XTkeD1GYjT9Fr9UTDaeapFinQBkr/WX5oD4e9Eh3/2ROJabnvkTZoJCwlNffKNmY5evsnpB9a9bVyFkmW5zU8U9Ihdgk0ClsrN5x8lzrPi4lhFY7pPpi8Y3MJcJ4skrhvmr9zsF3Fg6br9aBMHJ/ipw9ZNAJEl7bsDn2t0LMDg5frHE+l6FuAYEY7qe9+KZUoROs+SdQvGtjlTZok66eZVA9IjYqvMJdWwaBPmbCqFMdgv0uqBfhtrTmo6oC2BP6abJmI5WZndep4kyQLOEnD9sHX8sAtWBifynbbyZOrkNboyyJCqlXWIU2drYEQGgpyazM6OM/jZem0WOvB64cPHanmiNWUQsa6G1OhtnBu1UmBjc/1dPR5hVyZ6pJoE+E08vYpSxrq29DavroQg3WztkpvLzfytHLgYy0U4c2i240Czw4LnlZlfGEEH8TX+/PHMopadGXvR6aolQLRN5WFDf4TryzPRvC6O7Ab31TKS1rSgeUtuHEOa9yyC/zlKtAk/xtDnzpdNCnA5MQw2NaNhEnoerorEZ20FfmZ6EWFn+2Am7EoOozxTwieNW1BiAgg==",
    "expiresAt": "2026-09-27T23:55:45.131Z"
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Format incorrect: domain"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "code": "InternalServerError",
  "message": "THE PROVIDED PASSWORD IS INVALID."
}
```

</TabItem>
</Tabs>

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | object | Objeto de datos de licencia |
| `data.ipfs` | object | Información de almacenamiento IPFS |
| `data.ipfs.url` | string | URL IPFS para acceder a los datos de licencia |
| `data.ipfs.cid` | string | Identificador de contenido para IPFS |
| `data.ipfs.pinned` | boolean | Si los datos están fijados en IPFS |
| `data.ipfs.web3` | boolean | Si el almacenamiento Web3 está habilitado |
| `data.name` | string | Nombre para mostrar del dominio |
| `data.domain` | string | Nombre del dominio |
| `data.owner` | string | Email del propietario de la licencia |
| `data.subscriptionId` | string | Tipo de suscripción (siempre "free") |
| `data.expiresAt` | string | Timestamp ISO cuando expira la licencia |
| `data.zelfProof` | string | ZelfProof cifrado para verificación biométrica |
| `data.limits` | object | Configuración de límites de recursos |
| `data.features` | array | Array de características habilitadas |
| `data.validation` | object | Reglas de validación del dominio |
| `data.storage` | object | Configuración de almacenamiento |
| `data.tagPaymentSettings` | object | Configuraciones de pago para etiquetas |
| `data.metadata` | object | Metadatos adicionales |

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Primero, autenticarse para obtener el token JWT
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "faceBase64": "your_face_base64_data"
  }'

# Luego crear una licencia
curl -X POST "https://api.zelf.world/api/license" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "domain": "mydomain",
    "faceBase64": "your_face_base64_data",
    "masterPassword": "your_master_password",
    "domainConfig": {
      "name": "mydomain",
      "holdSuffix": ".hold",
      "status": "active",
      "description": "My custom domain",
      "limits": {
        "tags": 1000,
        "zelfkeys": 5000
      },
      "features": [
        {
          "name": "Zelf Name System",
          "code": "zns",
          "description": "Encryptions, Decryptions, previews of ZelfProofs",
          "enabled": true
        }
      ],
      "validation": {
        "minLength": 3,
        "maxLength": 50,
        "allowedChars": {},
        "reserved": ["www", "api", "admin"],
        "customRules": []
      },
      "storage": {
        "keyPrefix": "mydomain",
        "ipfsEnabled": true,
        "arweaveEnabled": false,
        "walrusEnabled": false
      },
      "tagPaymentSettings": {
        "methods": ["coinbase", "crypto"],
        "currencies": ["BTC", "ETH"],
        "whitelist": {},
        "pricingTable": {
          "1": {
            "1": 240,
            "2": 432,
            "3": 612,
            "4": 768,
            "5": 900,
            "lifetime": 3600
          }
        }
      },
      "metadata": {
        "version": "1.0.0",
        "support": "standard"
      }
    }
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function createLicense() {
  try {
    // Primero, autenticarse
    const authResponse = await axios.post('https://api.zelf.world/api/clients/auth', {
      email: 'user@example.com',
      password: 'your_password',
      faceBase64: 'your_face_base64_data'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = authResponse.data.data.token;

    // Luego crear una licencia
    const licenseResponse = await axios.post('https://api.zelf.world/api/license', {
      domain: 'mydomain',
      faceBase64: 'your_face_base64_data',
      masterPassword: 'your_master_password',
      domainConfig: {
        name: 'mydomain',
        holdSuffix: '.hold',
        status: 'active',
        description: 'My custom domain',
        limits: {
          tags: 1000,
          zelfkeys: 5000
        },
        features: [
          {
            name: 'Zelf Name System',
            code: 'zns',
            description: 'Encryptions, Decryptions, previews of ZelfProofs',
            enabled: true
          }
        ],
        validation: {
          minLength: 3,
          maxLength: 50,
          allowedChars: {},
          reserved: ['www', 'api', 'admin'],
          customRules: []
        },
        storage: {
          keyPrefix: 'mydomain',
          ipfsEnabled: true,
          arweaveEnabled: false,
          walrusEnabled: false
        },
        tagPaymentSettings: {
          methods: ['coinbase', 'crypto'],
          currencies: ['BTC', 'ETH'],
          whitelist: {},
          pricingTable: {
            1: {
              1: 240,
              2: 432,
              3: 612,
              4: 768,
              5: 900,
              lifetime: 3600
            }
          }
        },
        metadata: {
          version: '1.0.0',
          support: 'standard'
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Licencia creada:', licenseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

createLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def create_license():
    # Primero, autenticarse
    auth_url = "https://api.zelf.world/api/clients/auth"
    auth_data = {
        "email": "user@example.com",
        "password": "your_password",
        "faceBase64": "your_face_base64_data"
    }
    auth_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    auth_response = requests.post(auth_url, json=auth_data, headers=auth_headers)
    token = auth_response.json()["data"]["token"]
    
    # Luego crear una licencia
    license_url = "https://api.zelf.world/api/license"
    license_data = {
        "domain": "mydomain",
        "faceBase64": "your_face_base64_data",
        "masterPassword": "your_master_password",
        "domainConfig": {
            "name": "mydomain",
            "holdSuffix": ".hold",
            "status": "active",
            "description": "My custom domain",
            "limits": {
                "tags": 1000,
                "zelfkeys": 5000
            },
            "features": [
                {
                    "name": "Zelf Name System",
                    "code": "zns",
                    "description": "Encryptions, Decryptions, previews of ZelfProofs",
                    "enabled": True
                }
            ],
            "validation": {
                "minLength": 3,
                "maxLength": 50,
                "allowedChars": {},
                "reserved": ["www", "api", "admin"],
                "customRules": []
            },
            "storage": {
                "keyPrefix": "mydomain",
                "ipfsEnabled": True,
                "arweaveEnabled": False,
                "walrusEnabled": False
            },
            "tagPaymentSettings": {
                "methods": ["coinbase", "crypto"],
                "currencies": ["BTC", "ETH"],
                "whitelist": {},
                "pricingTable": {
                    "1": {
                        "1": 240,
                        "2": 432,
                        "3": 612,
                        "4": 768,
                        "5": 900,
                        "lifetime": 3600
                    }
                }
            },
            "metadata": {
                "version": "1.0.0",
                "support": "standard"
            }
        }
    }
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.post(license_url, json=license_data, headers=license_headers)
    print("Licencia creada:", license_response.json())

if __name__ == "__main__":
    create_license()
```

</TabItem>
</Tabs>

## Notas

- **Autenticación Biométrica**: Todas las operaciones de licencia requieren verificación biométrica usando datos `faceBase64`
- **Validación de Dominio**: Los nombres de dominio deben seguir el patrón `^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$` (alfanumérico con guiones, sin guiones bajos)
- **Almacenamiento IPFS**: Los datos de licencia se almacenan automáticamente en IPFS para acceso descentralizado
- **Comportamiento de Actualización**: El mismo endpoint maneja tanto creación como actualizaciones - el sistema detecta automáticamente las licencias existentes
- **Integración ZelfProof**: Cada licencia incluye datos ZelfProof cifrados para verificación biométrica segura
- **Expiración**: Las licencias expiran después de 1 año desde la creación/actualización