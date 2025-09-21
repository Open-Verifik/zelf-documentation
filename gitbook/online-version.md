# Online Version

The online version of Zelf enables users to interact with their digital identities securely and seamlessly, even within a web extension. By handling **computation** on **a dedicated server (which anyone can host it).** The online version ensures efficient, resource-light interactions, suitable for devices with limited computing power, such as **browser extensions** (eliminating the need of the mobile apps that work offline).

The online version works perfectly for the **web extension.** the mobile version of Zelf works *Offline*, which means that it doesn't require the use of any server to do the heavy lifting that the encryption/decryption requires.

<figure><img src="https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2Fe9CZA2r1bYSMpc77unMe%2FNEW%20ZELF%20NAME%20-%20ONLINE%20(1).jpg?alt=media&#x26;token=de9a1e68-172f-4d11-9d1f-0cd6a729b738" alt=""><figcaption></figcaption></figure>

We have to clarify that the main part of Zelf requires a very heavy computation for encrypting and decrypting the ZelfProof, without mentioning that we perfom liveness tests and that part also requires a good CPU performance to do it almost instantly.&#x20;

* **Reduced Load on Client Devices**: Offloading complex computations to the server ensures that the web extension remains **lightweight**, minimizing the use of local resources and making sure that the code is not manipulated with web changes.
* **Consistent Performance**: Server-based computations provide a smooth experience across different devices and platforms, enabling consistent and reliable interactions with Zelf. The web extension remains fast and secure.

The online version is optimized for web extension scenarios and mobile apps with low CPU or capacity to perform the main functions:

* Users need to authenticate quickly using their `ZK-Face Proof` without substantial local computation.
* Real-time verification and encryption are required but need to remain lightweight on the client side.
* Browser sandboxing and permission restrictions limit complex processing on the client side, making server-based computation an ideal solution.

### Online security and privacy

All interactions in the online version adhere to strict security and privacy standards:

* **End-to-End encryption**: Communication between the client (web extension) and the server is encrypted, ensuring that sensitive data, such as `your face, the password, the mnemonic phrase`, is securely transmitted using *PGP Encryption* with unique keys for each user.
* **No Data retention**: The server processes computations without retaining sensitive user data. Each session is isolated, ensuring privacy with each use. (Don't believe us, please do check the source code in github; it is open source)
* **Real-Time authentication**: For liveness checks and identity verification, real-time computation on the server ensures accuracy and security without relying on client-side processing.

### Benefits of server based computation

* **Scalability**: Centralized computation allows for easy scaling, supporting a large number of users across different platforms like the web extensions and web apps.
* **Device Compatibility**: Works seamlessly on lower-powered devices, such as Chromebooks and mobile browsers, without compromising on performance or security.
* **Rapid Updates**: Updates to the algorithm or security protocols can be deployed on the server without requiring client updates, ensuring users always have the latest features and security measures.
