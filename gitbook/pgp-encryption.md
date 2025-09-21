# PGP Encryption

### Workflow

1. **Public Key Retrieval**:
   * When the public key is retrieved using the `GET /api/sessions/yek-cilbup` endpoint, the server returns a public key in PGP format. This public key is unique to the session and is intended for use in *encrypting messages sent from the client to the server.*
2. **Message Encryption**:
   * The `encryptMessage` function takes the plain text message that needs to be sent to the server and the armored public key obtained during session creation.
   * The function uses the OpenPGP.js library to:
     1. Read and parse the public key from its armored (ASCII) format.
     2. Encrypt the plain text message using the parsed public key.
     3. Return the encrypted message in PGP format.
3. **Secure Communication**:
   * The encrypted message is then sent to the server, ensuring that the content remains secure during transmission. Because the message is encrypted with the server's public key, only the server (which holds the corresponding private key) can decrypt and read the message.
   * This approach ensures that all sensitive data, such as session information, personal data, or other variables, is protected from interception or unauthorized access during transmission. Nothing is sent in plain text, greatly enhancing the security of the system.

### Retrieve the Public Key

```typescript
_getPublicKey(): void {
	let { hash } = this._walletService.generateUniqueId();
	
	const url = `${this.apiUrl}/api/sessions/yek-cilbup`;
	
	this._httpWrapperService
		.sendRequest("get", url, {
			identifier: hash,
		})
		.then((response) => {
			console.log({ response });
	
			this.publicKey = response.data;
	
			this._httpWrapperService.setPublicKey(this.publicKey);
		});
}


generateUniqueId(): any {
	const navigatorInfo = window.navigator;

	const screenInfo = window.screen;

	let uniqueString = `${navigatorInfo.userAgent}-${navigatorInfo.language}-${navigatorInfo.platform}-${screenInfo.height}x${screenInfo.width}`;

	return { hash: this.simpleHash(uniqueString), userAgent: navigatorInfo.userAgent, height: screenInfo.height, width: screenInfo.width };
}


private simpleHash(input: string): string {
	let hash = 0;

	if (input.length === 0) {
		return hash.toString();
	}

	for (let i = 0; i < input.length; i++) {
		const char = input.charCodeAt(i);

		hash = (hash << 5) - hash + char;

		hash = hash & hash; // Convert to 32bit integer
	}

	return hash.toString();
}
```

```typescript
this.publicKey = response.data;            
```

### Encrypt a Message

The `encryptMessage` function is designed to securely encrypt a plain text message using PGP (Pretty Good Privacy) encryption. This ensures that the message can only be decrypted by the holder of the corresponding private key, enhancing security and privacy in communication between the client (e.g., a browser extension) and the server.

#### Parameters

* **plainTextMessage**: `string` (Required) - The plain text message that needs to be encrypted.
* **publicKeyArmored**: `string` (Required) - The public key in armored format (ASCII text) used to encrypt the message. This public key is typically obtained from the server when a session is created.

#### Returns

* **Promise**: The function returns a promise that resolves to the encrypted message in PGP format.

```typescript
import * as openpgp from "openpgp";


async encryptMessage(data: string): Promise<any> {
	if (!this.publicKey) throw new Error("cannot_encrypt_message");

	const publicKey = await openpgp.readKey({ armoredKey: this.publicKey });

	const encryptedMessage = await openpgp.encrypt({
		message: await openpgp.createMessage({ text: data }),
		encryptionKeys: publicKey,
	});

	return encryptedMessage;
}
```

### Security Benefits

* **End-to-End Encryption**:
  * By encrypting messages with the server’s public key, only the server can decrypt and read the contents, ensuring that sensitive data remains confidential.
* **Protection Against Man-in-the-Middle Attacks**:
  * Even if an attacker intercepts the encrypted message during transmission, they cannot decrypt it without the corresponding private key, which is securely stored on the server.
* **Data Integrity**:
  * The encryption process also ensures that the message has not been tampered with during transmission. Any alteration to the encrypted data would render the decryption process invalid, providing an additional layer of integrity protection.

### Session Communication

* **Session Creation**: When a session is created, the server generates and returns a PGP public key. This key is used by the client (e.g., a browser extension) to encrypt all subsequent communication with the server.
* **Encrypted Variables**: All variables, including sensitive information like authentication tokens, user inputs, or any other session data, are encrypted before being sent to the server.
* **Decryption on the Server**: The server, holding the corresponding private key, decrypts the received message, processes the data, and sends back a response, which can also be encrypted for secure client-side decryption.
