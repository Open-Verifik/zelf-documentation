---
title: "Propuesta: acceso mensual ZNS para cuentas Free"
description: Propuesta de diseño para una tarifa mensual en ZNS de las cuentas Free de Zelf ID, cobrada en el primer descifrado con prueba de vida de un mes calendario, con una apertura de gracia si el saldo de ZNS no alcanza. No está implementada.
keywords: [propuesta, acceso mensual zns, plan free, prueba de vida, zelf keys, equivalente premium, recompensa diaria]
image: /img/social-card.png
sidebar_label: "Propuesta: acceso mensual ZNS"
---

# Propuesta: acceso mensual ZNS para cuentas Free

:::info Solo una propuesta

Esta página es una propuesta de diseño de producto. Nada de lo descrito está implementado, y los endpoints del [esquema de API](#esquema-de-api-propuesto) no están desplegados. Los precios y los límites de abajo son el comportamiento actual de v4 descrito en [Planes](/docs-es/api/zelf-ids/planes). Una implementación futura debe leer la licencia vigente y el precio del token en el servidor. No debe copiar las cifras de la ilustración en un cliente.

:::

## Problema

Cada prueba de vida con el rostro que abre un Zelf ID tiene un costo de usuario activo mensual para Zelf. El monto configurado de usuario activo mensual parte de **$0.10**. Una cuenta Free no paga nada a Zelf y, aun así, genera ese costo el mes en que alguien vuelve y descifra.

Free hoy, según [Planes](/docs-es/api/zelf-ids/planes):

| | Free |
|---|---|
| Contraseñas en Zelf Keys | 5 |
| Cuentas 2FA en Zelf Keys | 3 |
| Lease del nombre | unos 100 años |
| Precio en dinero | $0 |

Premium para un nombre `.zelf` de 6 o más caracteres cuesta **$29 por un año** en la foto actual de payment-options (**$2.42** al mes). La meta es que una cuenta Free pague ese equivalente mensual de Premium en **ZNS**, en los meses en que de verdad abre sus datos. Las personas ya ganan ZNS con la recompensa diaria, que se reclama con el rostro y, cuando el Zelf ID tiene contraseña maestra, también con esa contraseña. Quien reclama con constancia puede cubrir el mes con ese saldo. La tarifa tiene además un piso en el costo de la prueba de vida, para que un token barato no deje el cobro por debajo de lo que el mes le cuesta a Zelf.

Premium y Unlimited quedan exentos de esta tarifa de Free. Una sección aparte, de menor prioridad, enumera formas en que esos planes de pago podrían usar ZNS más adelante. Esa sección no es un compromiso.

## Valores recomendados

| Tema | Recomendación |
|---|---|
| Quién paga | Solo Free. Premium y Unlimited están exentos mientras el plazo de pago está activo. |
| Cuándo | El primer descifrado con prueba de vida que abre secretos guardados o desbloquea la billetera en un mes de facturación. Un mes sin esa apertura no se cobra. |
| Mes | Mes calendario en **UTC**. Clave de periodo `YYYY-MM`. |
| Cuántos cobros | Un débito por Zelf ID y por periodo. La apertura de gracia no es un débito. Cuando el periodo está pagado, las aperturas posteriores que disparan la tarifa quedan cubiertas. |
| Monto | El precio en dólares de un año de Premium en la licencia, dividido entre 12, convertido a ZNS enteros con el precio del token en el servidor y el mismo redondeo de los espacios extra. Piso: el monto configurado de usuario activo mensual (por defecto $0.10). |
| Ilustración | $29 / 12 a $0.05 por ZNS redondea hacia arriba a **49 ZNS**. La cotización vigente reemplaza esta cifra. |
| Saldo insuficiente | **Decidido el 2026-10-25.** Una apertura de gracia en el mes. La tarifa queda impaga. Las aperturas posteriores que disparan la tarifa se bloquean hasta que el mes se pague. Sin deuda. La exportación de la billetera y la recuperación del lease siguen disponibles y no gastan la gracia. Ver [Decisiones](#decisiones). |
| Recompensa diaria | Exenta. Es la forma de ganar el saldo. Los nombres Free confirmados usan la ruleta de mainnet: 2, 4, …, 24 ZNS al día (media 13). |
| Cotización | Firmada y fijada por 2 horas, con la misma idea que [Payment Options](/docs/api/zelf-ids/payment-options). |

## Cuándo se cobra la tarifa

Se cobra en el **primer descifrado con prueba de vida del mes de facturación** que abre datos de Zelf Keys o desbloquea la billetera para usarla.

Quien no abre sus datos ese mes no paga. Eso coincide con la facturación por usuario activo mensual: el costo aparece cuando la cuenta está activa, y no aparece en un mes en calma.

Cuando esa primera apertura paga la tarifa, el pago cubre cada apertura posterior de ese mismo periodo que dispararía la tarifa, incluidas visitas nuevas y sesiones verificadas nuevas de 10 minutos.

Cuando el saldo no alcanza, esa primera apertura es el descifrado de gracia del mes. Deja la tarifa impaga. Las aperturas posteriores de ese mes que disparan la tarifa siguen cerradas hasta que el mes se pague. Ver [ZNS insuficientes](#zns-insuficientes).

### Qué mes

| Reloj | Cómo funciona | Contrapartida |
|---|---|---|
| Mes calendario, UTC | Clave de periodo `YYYY-MM`. El 31 de enero y el 1 de febrero son dos periodos. | Coincide con una factura de usuario activo mensual. Es fácil de mostrar en un recibo ("octubre de 2026"). Quien abre datos el último día de un mes y el primero del siguiente paga dos veces, porque son dos meses activos. |
| 30 días corridos desde la primera apertura | El siguiente cobro vence 30 días después del último. | Una apertura puede caer entre dos meses calendario mientras Zelf tiene dos facturas de usuario activo, o dos aperturas pueden caer en el mismo mes calendario. Es más difícil de explicar en la app. |

**Recomendación: mes calendario, UTC.** La recompensa diaria ya es una vez por día calendario. La tarifa de acceso debe ser una vez por mes calendario, con un reloj que no dependa de la zona horaria local del servidor. El periodo se guarda como `YYYY-MM` en UTC.

La tarifa es **por Zelf ID**. Las recompensas, la bóveda y la prueba de vida ya son por nombre. Tres nombres Free abiertos en el mismo mes son tres cobros. Si una cuenta familiar debería tener un tope es una [pregunta abierta](#preguntas-abiertas).

## Monto

El cobro es el equivalente mensual de Premium en ZNS, y nunca baja del piso de la prueba de vida.

1. Leer el precio en dólares de **un año de Premium** en la licencia del dominio (`tags.payment.planPricing`, duración `"1"`), la misma consulta que usa [Payment Options](/docs/api/zelf-ids/payment-options). No usar las celdas de dos años, tres años ni de por vida. Esos plazos son paquetes con descuento. No usar el precio de Unlimited.
2. USD mensuales = ese precio anual / 12.
3. Convertir los USD mensuales a ZNS enteros con el precio del token en el servidor (`getTokenPriceUsd`). Los espacios extra ya lo hacen así: un entero exacto se queda en ese entero, y cualquier otro valor redondea hacia arriba.
4. Convertir el piso de la misma forma. El piso es el monto configurado de usuario activo mensual, por defecto **$0.10**.
5. Cobrar el mayor de los dos montos en ZNS.

El precio del token y el precio de la licencia son configuración del servidor. Los clientes muestran la cotización firmada. No guardan $29, $0.05 ni 49.

Los nombres de 1 a 5 caracteres no pueden comprar Premium. **Recomendación:** esos nombres Free usan igual el precio de un año de Premium de la licencia para los nombres que sí pueden comprarlo (la celda de 6 o más caracteres `.zelf` en la foto actual). Así, cada nombre Free paga la misma tarifa de acceso. Usar una parte de Unlimited ($99 al año en esa foto) dejaría un nombre corto Free muy por encima del equivalente Premium que busca esta propuesta.

### Ilustración, no una constante

La foto de [Planes](/docs-es/api/zelf-ids/planes) para un nombre `.zelf` de 6 o más caracteres es **$29** por un año de Premium. El precio del token en el servidor parte de **$0.05** por ZNS. El redondeo de los espacios extra da entonces:

| Paso | Valor |
|---|---|
| Premium anual | $29.00 |
| USD mensuales | 29 / 12 = $2.4166… (mostrar **$2.42**) |
| ZNS antes de redondear | 2.4166… / 0.05 = 48.333… |
| ZNS enteros | **49** |
| Piso | $0.10 / 0.05 = **2** ZNS |
| Cobro | **49 ZNS** |

Si se mueve el precio de la licencia o el del token, se mueve la cotización. Con un precio del token por debajo de unos **$0.043**, un mes completo de las recompensas diarias mainnet más pequeñas (28 × 2 ZNS) ya no cubre una tarifa equivalente a $29. La cotización debe mostrar dólares y ZNS para que ese cambio se vea. Ver [Cálculo de la recompensa diaria](#cálculo-de-la-recompensa-diaria).

### Cotización firmada

Sigue a la cotización de pago. `signedDataPrice` en [Payment Options](/docs/api/zelf-ids/payment-options) fija los montos en dólares y en cripto por **2 horas**.

La cotización de acceso mensual fija, durante esas mismas dos horas:

| Campo fijado | Significado |
|---|---|
| `zelfName` | El nombre que se abre |
| `periodKey` | `YYYY-MM` en UTC |
| `premiumYearlyUsd` | Celda de la licencia usada |
| `amountUsd` | Anual / 12, antes del redondeo a ZNS |
| `tokenPriceUsd` | Precio del servidor al cotizar |
| `floorUsd` | Piso de usuario activo mensual usado |
| `amountZns` | ZNS enteros a debitar |
| `exp` | Vencimiento de la cotización, 2 horas |

La confirmación de una cotización vencida se rechaza. El cliente pide una cotización nueva. Una segunda confirmación de una cotización que ya pagó este periodo devuelve el registro pagado y no vuelve a debitar.

## ZNS insuficientes

Miguel decidió esto el **2026-10-25**. Ver [Decisiones](#decisiones). No hay saldo negativo. La tarifa impaga de un mes de gracia no se arrastra al mes siguiente como deuda.

### Este mes

La comprobación corre en la primera apertura que dispara la tarifa del mes UTC, después de que la cotización firmada dice cuántos ZNS cuesta el mes.

| Situación | Qué ocurre |
|---|---|
| Los ZNS disponibles cubren la cotización | Se debita una vez. El estado pasa a `paid`. Las aperturas posteriores de ese mes que disparan la tarifa siguen. |
| Los ZNS disponibles no alcanzan, y este mes puede usar la gracia | La apertura funciona. El estado pasa a `grace`. La tarifa queda impaga y no se debitan ZNS. La hoja dice que este es el pase libre del mes y muestra los ZNS y los dólares que todavía faltan. |
| El estado ya es `grace` y la tarifa sigue impaga | La apertura se bloquea. La hoja ofrece tres formas de seguir: subir a Premium, pagar con tarjeta los dólares fijados de la cotización firmada vigente, o conseguir más ZNS (por ejemplo la recompensa diaria) y después pagar el mes. |
| La persona paga más tarde en ese mismo mes | Una confirmación en ZNS o un pago con tarjeta de la cotización firmada convierte `grace` en `paid`. El bloqueo se levanta. Las aperturas posteriores del mes que disparan la tarifa siguen. |
| La persona sube a un plazo Premium o Unlimited activo | La tarifa de Free deja de aplicar, así que el bloqueo se levanta mientras ese plazo esté activo. |
| Exportación de la billetera o [recuperación del lease](/docs/api/zelf-ids/lease-recovery) | Siempre disponibles. Estas llamadas no crean un registro de gracia, no consumen la apertura de gracia y no abren la bóveda de Zelf Keys. |

Un segundo dispositivo que abre en el mismo momento que la apertura de gracia resuelve al mismo registro de gracia. No otorga un segundo pase. El pago es idempotente: una segunda confirmación de un mes que ya está `paid` devuelve ese registro y no vuelve a debitar.

El monto de la tarjeta es el `amountUsd` de la cotización firmada que la persona confirma. Esa cotización sigue el bloqueo de dos horas de [Monto](#monto). Un pago después de que vence la cotización pide primero una cotización nueva. Esa cotización nueva es la que se guarda cuando el estado pasa a `paid`.

### El mes siguiente

**Valor recomendado, para que Miguel lo confirme.** Es la [pregunta abierta 1](#preguntas-abiertas).

La gracia se renueva solo cuando el mes UTC anterior fue `paid`, o cuando ese mes no tuvo un uso que dispare la tarifa (no hay registro de acceso mensual).

Cuando el mes anterior sigue en `grace`, el mes nuevo no ofrece gracia. La primera apertura que dispara la tarifa exige el pago. Si el saldo cubre la cotización del mes nuevo, esa apertura lo debita y el estado queda `paid`. Si el saldo no alcanza, la apertura se bloquea y aparecen las mismas tres opciones: Premium, tarjeta por los dólares fijados de este mes, o más ZNS. La tarifa impaga de gracia del mes anterior no se suma a esta cotización, y el saldo no baja de cero.

| Mes anterior | Este mes, saldo corto en la primera apertura que dispara la tarifa |
|---|---|
| `paid` | Una apertura de gracia. El estado pasa a `grace`. |
| Sin uso que dispare la tarifa | Una apertura de gracia. El estado pasa a `grace`. |
| `grace`, y después se pagó antes de que terminara el mes | Una apertura de gracia. El estado pasa a `grace`. |
| `grace`, y la tarifa nunca se pagó | Sin gracia. La primera apertura se bloquea hasta que este mes se pague. |

## Qué operaciones cuentan

La prueba de vida con el rostro se usa en todo el producto. **Solo un descifrado que abre secretos guardados, o que desbloquea la billetera para usarla, dispara la tarifa.** Un disparo en el periodo cubre el resto. El reclamo de la recompensa diaria está exento porque ese reclamo es la forma de ganar el saldo de ZNS.

| Operación | Hoy | Esta propuesta |
|---|---|---|
| Recuperar un elemento de Zelf Keys (contraseña, 2FA, nota, tarjeta) | Rostro | **Dispara** |
| Descifrado de Zelf ID | Rostro | **Dispara** |
| Descifrado de la billetera para usarla (`POST /api/my-wallets/decrypt`) | Rostro | **Dispara** |
| Descifrado de Tags y descifrado ZNS v2, cuando abren un nombre Free | Rostro | **Disparan** |
| Recompensa diaria (`POST /api/rewards/daily`) | Rostro, más la contraseña maestra cuando el Zelf ID la tiene | **Exenta** |
| Exportar la billetera / mover fondos propios, y recuperación del lease | Rostro en la recuperación | **Exentas.** Siempre disponibles. Nunca cuentan como la apertura de gracia. |
| Vista previa de Zelf Keys | Rostro | **Exenta**. No abre elementos guardados de la bóveda. |
| Guardar o agregar una contraseña, 2FA, nota o tarjeta | Rostro | **Exenta** |
| Cambiar la contraseña maestra | Rostro | **Exenta** |
| Borrar un elemento de Zelf Keys, o borrar el Zelf ID | Rostro | **Exenta** |
| Lease, crear billetera, importar billetera | Rostro | **Exenta** |
| Compra de espacio extra (`POST /api/zelf-keys/slots`) | Rostro | **Exenta** de esta tarifa. Tiene su propio precio en ZNS. |
| Confirmación de pago, envío de pago en Solana | Rostro | **Exenta** |
| Transferencia del nombre, extensión de licencia | Rostro | **Exenta** |
| Staff, abogados, clientes, administración de licencias, certificados faciales, human authn | Rostro en esos productos | **Fuera de alcance** |

Firmar una transacción después de que la billetera ya está desbloqueada no vuelve a ejecutar una prueba de vida, así que no es un segundo cobro. El desbloqueo que inició ese uso es el disparo. Una firma posterior, en un mes que ya está pagado, no vuelve a cotizar.

Guardar, cambiar la contraseña y borrar usan el rostro y pueden crear un usuario activo sin abrir secretos ya guardados. La recomendación los deja exentos para que la tarifa siga atada a "abrí mis datos", que es el caso para el que está escrita esta propuesta. Si cualquier prueba de rostro debería contar es una [pregunta abierta](#preguntas-abiertas).

## Planes de pago, cupones, whitelist, vencimiento, espacios y la sesión

### Premium y Unlimited

Mientras el plan vigente sea **premium** o **unlimited**, la tarifa de Free no corre. Eso incluye una suscripción de Zelf Keys cuyo plan sea uno de esos dos: gana el plan más alto, igual que ya ocurre con los límites de la bóveda.

Un plazo de pago que terminó vuelve a leerse como Free (`planExpiresAt` en el pasado, lease del nombre sin cambio). La siguiente apertura que dispara la tarifa, en un mes UTC sin registro de acceso pagado, se cobra. Los elementos guardados durante el plazo de pago siguen guardados. Los elementos nuevos por encima de los topes de Free siguen necesitando un espacio extra o un plazo de pago nuevo, como en [Planes](/docs-es/api/zelf-ids/planes).

Las titularidades antiguas de Zelf Keys que no son free, premium ni unlimited no cambian hoy el plan de consumo. Un nombre Free en ese estado entraría en esta tarifa. Si esas titularidades deberían quedar exentas es una [pregunta abierta](#preguntas-abiertas).

### Cupones y whitelist

Un [cupón](/docs-es/api/zelf-ids/cupones) o una concesión por whitelist eximen al nombre **solo después** de que el plan de pago está activo.

| Estado | Tarifa |
|---|---|
| Cotización de cupón o whitelist todavía en curso | Sigue en Free. Una apertura que dispara la tarifa puede cobrar. |
| Cupón del 100% o concesión por whitelist, plan ya premium o unlimited | Exento hasta que termina el plazo. Un Unlimited de por vida no termina. |
| Cupón parcial, checkout terminado, plan activo | Exento hasta que termina el plazo. |
| Plazo terminado | Vuelven las reglas de Free. |

Un cupón del 100% o una concesión por whitelist costó $0, así que no produce crédito de subida. Esa regla actual no cambia. La exención de aquí es el plan activo, no el porcentaje del cupón.

### Espacios extra

Los espacios extra siguen siendo una compra aparte. Al precio por defecto del token, $0.05, son **10 ZNS** por un espacio de contraseña ($0.50) y **20 ZNS** por un espacio de 2FA ($1.00), durante 12 meses. Ver [Planes](/docs-es/api/zelf-ids/planes).

Los dos gastos usan un solo saldo disponible: ZNS en cadena menos los ZNS ya comprometidos en espacios. Comprar un espacio no paga la tarifa de acceso mensual. Debitar el acceso mensual no otorga un espacio.

**Recomendación:** permitir la compra del espacio mientras el mes está impago, y que la hoja de confirmación avise cuando el saldo restante dejaría el mes sin cubrir. Los dos débitos no pueden tener éxito a la vez contra los mismos tokens.

Unlimited no vende espacios extra. Los topes de Premium (100 contraseñas, 20 cuentas 2FA) sí permiten espacios. Esos nombres están exentos de la tarifa de Free mientras el plazo de pago está activo, y pueden seguir comprando espacios.

### La sesión de 10 minutos

Una prueba de rostro exitosa, junto con la contraseña maestra cuando el Zelf ID la tiene, marca la sesión como verificada por **10 minutos**. Esa ventana se queda como está.

| Situación | Tarifa |
|---|---|
| Mes ya pagado, dentro o fuera de la ventana de 10 minutos | No hay otro cobro de acceso. El rostro sigue ejecutándose cuando la acción lo pide. |
| El mes todavía no tiene registro, dentro de una ventana abierta el mes pasado | La primera apertura que dispara la tarifa en el periodo nuevo igual cotiza. La ventana no arrastra el pago del mes anterior. |
| El mes está en `grace` y sigue impago, dentro de la ventana de 10 minutos | La ventana no otorga otra apertura de la bóveda. Las aperturas posteriores que disparan la tarifa siguen bloqueadas hasta que el mes se pague. |
| Recompensa diaria dentro de una ventana verificada | Sigue exenta. |

## Cálculo de la recompensa diaria

La recompensa diaria es una ruleta, no un estipendio fijo. Cada Zelf ID puede reclamarla una vez por día calendario, después de una prueba de rostro y, cuando el Zelf ID tiene contraseña maestra, de esa contraseña. El reclamo paga cuando la cuenta de Solana del nombre está activa.

| Tipo de nombre | Segmentos de la ruleta (ZNS enteros) | Media |
|---|---|---|
| Mainnet, incluido un lease Free confirmado | 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 | **13** |
| Hold heredado | 1 a 12 | **6.5** |

Los leases Free nuevos son mainnet, así que la ruleta que importa es la de mainnet. Una recompensa aparte, de una sola vez, por la primera transacción, sortea **de 1 a 100 ZNS** una vez. No es una fuente diaria y no entra en los totales mensuales de abajo.

Comparado con la ilustración de **49 ZNS** ($29 / 12 a $0.05 por ZNS):

| Patrón de reclamo | ZNS | ¿Cubre 49? |
|---|---|---|
| Un reclamo mainnet | 2 a 24 | No. El mejor segmento es 24. |
| Tres reclamos en la media | 39 | No |
| Cuatro reclamos en la media | 52 | Sí |
| Mes completo en el segmento mínimo | 56 a 62 (28 a 31 días × 2) | Sí, con el valor por defecto de $0.05 |
| Mes completo en la media | unos 364 a 403 | Sí |
| Hold heredado, mes completo en el mínimo | 28 a 31 | No |

Un nombre Free que reclama la mayoría de los días cubre el mes ilustrado incluso con una racha del segmento más pequeño. Una sola visita no lo cubre. Quien vuelve después de varios meses en calma, sin reclamos en el medio, no tiene recompensa nueva de esos meses. El saldo anterior sin gastar podría cubrir la apertura. Cuando no alcanza, la primera apertura de un mes que puede usar la gracia es el [descifrado de gracia](#zns-insuficientes). La recompensa diaria sigue disponible después, así que puede ganar ZNS y pagar el mes antes de la siguiente apertura.

El reclamo en sí debe seguir exento. Cobrar la tarifa en el reclamo quitaría ZNS de la acción que los genera, y bloquear la recompensa quitaría la forma de pagar un mes de gracia.

La cobertura se mueve si se mueve el precio del token. En la ilustración de $29, un mes de 28 días con reclamos de 2 ZNS (56 ZNS) cubre la tarifa mientras el precio del token se mantiene en unos **$0.043** o más. El valor por defecto de $0.05 está por encima de esa línea. Lo que muestra la app es la cotización vigente, no esta tabla.

## Experiencia en la extensión y en la app

La extensión y la app deben mostrar el mes antes de que empiece la cámara, para que quien rechace el cobro no inicie una prueba de vida.

1. **Saldo.** La bóveda muestra los ZNS disponibles (en cadena menos los tokens ya comprometidos) y el periodo actual: `Sin cargo`, `Gracia`, `Pagado` o `Incluido con Premium` / `Incluido con Unlimited`.
2. **ZNS suficientes.** En la primera apertura que dispara la tarifa de un mes Free impago, una hoja muestra la cotización fijada: periodo, ZNS, dólares, precio del token y el saldo después del débito. Confirmar paga el mes y sigue con el rostro y, cuando el Zelf ID la tiene, la contraseña maestra. Cancelar deja los datos cerrados y no enciende la cámara. Reintentar esa confirmación no vuelve a debitar.
3. **Apertura de gracia.** Cuando el saldo no alcanza y la gracia está disponible, la hoja dice que esta apertura es el pase libre del mes. Muestra los ZNS que todavía faltan, los dólares de la cotización y el saldo actual. Después la apertura funciona. El mes sigue impago.
4. **Pantalla de bloqueo.** Después de esa apertura de gracia, cada apertura posterior que dispara la tarifa, mientras el mes sigue impago, muestra una pantalla de bloqueo con tres opciones: subir a Premium, pagar con tarjeta los dólares fijados, o conseguir más ZNS (la recompensa diaria, si el reclamo de hoy sigue abierto). La bóveda sigue cerrada. Cuando un pago en ZNS o con tarjeta convierte el mes a `paid`, el bloqueo se levanta.
5. **Exportación y recuperación.** **Exportar billetera** y **Recuperar nombre** siguen habilitados en la hoja de gracia y en la pantalla de bloqueo. No usan el pase de gracia.
6. **Recibo.** Un mes pagado agrega una fila al historial: `Acceso mensual · octubre 2026 · 49 ZNS`, con los dólares fijados, el precio del token y la hora. Un mes de gracia agrega `Acceso mensual · octubre 2026 · gracia`, con los ZNS que todavía faltaban. Esas mismas filas son las que soporte puede leer en el registro de auditoría.
7. **Con el mes pagado.** Las aperturas posteriores de ese mes UTC se saltan la hoja. El rostro y la sesión de 10 minutos se comportan como hoy.
8. **Subida de plan.** La hoja de gracia y la pantalla de bloqueo pueden decir que Premium incluye este acceso durante el plazo de pago. El precio del botón sale de la cotización vigente de payment-options, no de una constante en la app.

## Esquema de API propuesto

Solo propuesto. Va en el router actual de Zelf ID, en el mismo orden que usa el resto de v4: **ruta → middleware Joi → controlador → módulo**.

| Capa | Lugar propuesto |
|---|---|
| Ruta | `Repositories/ZelfID/routes/zelf-ids.routes.js` |
| Middleware Joi | `Repositories/ZelfID/middlewares/zelf-id-monthly-access.middleware.js` |
| Controlador | `Repositories/ZelfID/controllers/zelf-id-monthly-access.controller.js` |
| Módulo | `Repositories/ZelfID/modules/zelf-id-monthly-access.module.js` |

La autenticación coincide con las demás llamadas protegidas de Zelf ID: un JWT de sesión de `POST /api/sessions`.

| Método y ruta | Función |
|---|---|
| `GET /api/zelf-ids/monthly-access` | Estado para `tagName` y `domain`: plan, periodo, `none` / `grace` / `paid` / `exempt`, si otra apertura que dispara la tarifa está permitida, saldo disponible e historial. |
| `GET /api/zelf-ids/monthly-access/quote` | Arma y firma la cotización del periodo UTC actual. Sin débito. |
| `POST /api/zelf-ids/monthly-access/confirm` | Acepta el `token` firmado, debita una vez y deja el periodo en `paid`. Un periodo que estaba en `grace` pasa a `paid`. |

En un mes Free sin registro, un descifrado que dispara la tarifa con saldo corto devuelve los secretos una vez y escribe `grace`. Un descifrado posterior que dispara la tarifa, mientras el estado es `grace`, no devuelve secretos hasta que la confirmación haya dejado `paid`, salvo que la llamada sea la exportación de la billetera o la recuperación del lease. El cliente muestra el aviso de gracia, o la pantalla de bloqueo, antes de encender la cámara.

### Registro

Un registro de acceso mensual por Zelf ID y por periodo. La clave natural de idempotencia es `monthly-access:{zelfName}:{periodKey}`.

```json
{
  "zelfName": "myname.zelf",
  "periodKey": "2026-10",
  "status": "grace",
  "amountZns": 49,
  "amountUsd": "2.4166666667",
  "tokenPriceUsd": 0.05,
  "premiumYearlyUsd": 29,
  "floorUsd": 0.1,
  "trigger": "retrieve",
  "graceAt": "2026-10-25T16:00:00.000Z"
}
```

`amountZns` y los campos en dólares de ese ejemplo son la ilustración de la foto actual de $29 y $0.05. Un registro real guarda la cotización mostrada para ese periodo.

El `status` de una fila guardada es `grace` o `paid`. Si no hay fila para ese Zelf ID y ese periodo, el estado es `none`: el mes no tuvo una apertura que dispare la tarifa. Un nombre Premium o Unlimited no necesita una fila de débito: la consulta de estado devuelve `exempt` con `reason` `premium` o `unlimited`.

Una fila de gracia no tiene `settlement` ni `chargedAt`. Cuando la persona paga, la misma fila queda así:

| Campo | Después del pago |
|---|---|
| `status` | `paid` |
| `settlement` | `zns` o `card` |
| `chargedAt` | Hora de la confirmación exitosa |
| `amountZns`, `amountUsd`, `tokenPriceUsd` | La cotización firmada aceptada al pagar |

Escribir la fila de gracia es idempotente. Un segundo intento en el mismo periodo devuelve la fila existente y no otorga otra apertura de gracia. Una segunda confirmación después de `paid` devuelve la fila pagada y no aumenta el saldo comprometido. Dos dispositivos que llegan al mismo periodo resuelven en una sola fila.

### Registro de auditoría

Solo de agregado, una fila por intento:

| Campo | Ejemplo |
|---|---|
| `zelfName`, `periodKey` | `myname.zelf`, `2026-10` |
| `event` | `quoted`, `grace_opened`, `grace_blocked`, `paid`, `idempotent_replay`, `exempt` |
| `amountZns`, `amountUsd`, `tokenPriceUsd` | Cifras de la cotización fijada |
| `trigger` | `retrieve`, `decrypt`, `wallet-decrypt` |
| `at` | ISO-8601 UTC |

### Configuración de administración

Sin una lista de precios nueva, y sin un monto en el cliente.

| Dato | Dónde vive hoy |
|---|---|
| USD de un año de Premium | Licencia `tags.payment.planPricing.premium`, duración `"1"` |
| Precio de ZNS | Precio del token en el servidor, por defecto $0.05 |
| Piso | Monto de usuario activo mensual, por defecto $0.10 |
| Redondeo | La misma regla de ZNS enteros que los espacios extra |
| Vida de la cotización | 2 horas, igual que las cotizaciones de pago |

Un campo posterior de la licencia podría escalar los USD mensuales. El valor por defecto no lo necesita.

### Liquidación

**Recomendación para una primera versión:** debitar el mismo saldo disponible que usan los espacios extra (ZNS en cadena menos ZNS ya comprometidos) y registrar ahí el cobro mensual. El saldo que la app ya muestra es entonces el saldo que paga la tarifa, y el débito es idempotente por periodo.

Una transferencia en cadena de esos ZNS a una tesorería es una alternativa si finanzas quiere que los tokens salgan de la billetera. Esa elección es una [pregunta abierta](#preguntas-abiertas). Debe conservar la misma cotización firmada y la misma regla de una vez por periodo.

## Premium y Unlimited: opciones con tokens

Solo diseño. Ninguna opción de aquí está elegida. Los planes de pago siguen exentos de la tarifa de Free en cualquier caso.

### 1. Descuento en ZNS al renovar

Al renovar, convertir los ZNS disponibles en un crédito en dólares sobre la cotización normal de la licencia, fijado en `signedDataPrice` como el crédito de subida.

- Encaja en el checkout que ya existe.
- Necesita un tope para que un saldo grande no deje en cero, por accidente, un precio alto de Unlimited.
- Igual hace falta una regla sobre si los ZNS se comprometen en el libro de espacios o se transfieren.

### 2. Pagar la suscripción en ZNS

Cotizar el plazo completo de Premium o Unlimited en ZNS con el mismo redondeo a tokens enteros, fijarlo por 2 horas y liquidarlo desde el saldo de ZNS en lugar de Stripe o cripto.

- Una sola historia de pago para el acceso Free y para los plazos de pago.
- Encaja mejor en el checkout único de Zelf ID que en una suscripción de tienda, que ya tiene su propio recibo.
- La cotización tiene que absorber el movimiento del precio del token dentro del bloqueo de 2 horas, igual que las cotizaciones en cripto.

### 3. ZNS por encima del plan, o por encima de una cuota alta de prueba de vida

Premium ya puede comprar espacios extra más allá de 100 contraseñas y 20 cuentas 2FA. Unlimited no tiene tope, así que los espacios no son un destino de tokens para ese plan.

Un segundo destino: después de un número alto de aperturas con prueba de vida en un mes, las aperturas siguientes cuestan ZNS. La divulgación de facturación ya tiene una cifra de descifrados incluidos (por defecto 10). Ese número es un valor de divulgación, no una cuota propuesta para Free. Cualquier umbral de un plan de pago debería quedar muy por encima del uso ordinario.

- Le da a Unlimited un uso de tokens sin cambiar el precio en dinero.
- Es fácil que se sienta como un recargo para quien ya paga el año.
- El umbral es una decisión de producto, no algo que copiar de la tarifa de Free.

## Decisiones

### Saldo corto de ZNS

**Miguel, 2026-10-25.** Cuando un Zelf ID Free abre su bóveda por primera vez en un mes UTC y el saldo de ZNS disponible no cubre la tarifa mensual:

- Esa apertura funciona. El mes se guarda como `grace` y la tarifa queda impaga.
- Cualquier apertura posterior de ese mismo mes que dispare la tarifa, mientras la tarifa siga impaga, se bloquea.
- La pantalla de bloqueo ofrece subir a Premium, pagar con tarjeta los dólares fijados de la cotización firmada, o conseguir más ZNS (por ejemplo la recompensa diaria). Después de que el mes se paga, esas aperturas continúan.
- Pagar en ZNS o con tarjeta convierte `grace` en `paid` y levanta el bloqueo. Subir a un plazo Premium o Unlimited activo levanta el bloqueo porque la tarifa de Free ya no aplica.
- El saldo no queda negativo. La tarifa impaga de gracia no se arrastra como deuda.
- La exportación de la billetera y la recuperación del lease siguen disponibles todo el tiempo. Nunca cuentan como la apertura de gracia, y no abren Zelf Keys.

La regla del **mes siguiente** no forma parte de esta decisión. El valor recomendado está en [El mes siguiente](#el-mes-siguiente), y es la [pregunta abierta 1](#preguntas-abiertas).

## Preguntas abiertas

Para Miguel y el CEO. La decisión sobre el saldo corto está en [Decisiones](#decisiones). La pregunta 1 es la parte de esa decisión que sigue abierta: cómo se comporta la gracia el mes siguiente. Las preguntas 2 a 12 son las preguntas anteriores 2 a 12.

1. **Gracia el mes siguiente.** Confirmar el valor recomendado: se ofrece una gracia nueva solo cuando el mes UTC anterior fue pagado, o no tuvo un uso que dispare la tarifa. Si el mes anterior quedó en `grace` y nunca se pagó, el mes siguiente no ofrece gracia, y la primera apertura que dispara la tarifa exige el pago. La tarifa anterior no se suma como deuda.
2. **Desbloqueo de la billetera frente a exportación.** Confirmar que desbloquear la billetera para usarla dispara la tarifa, y que una exportación dedicada de los fondos del dueño queda exenta y no abre Zelf Keys.
3. **Qué pruebas de rostro cuentan.** Confirmar que solo el descifrado y el desbloqueo de la billetera disparan la tarifa, y que guardar, borrar, cambiar la contraseña y la recompensa diaria siguen exentos aunque usen el rostro.
4. **Nombres cortos.** Confirmar que un nombre Free de 1 a 5 caracteres, que no puede comprar Premium, usa el precio de un año de Premium de la licencia para los nombres que sí pueden.
5. **Varios nombres Free.** Confirmar que la tarifa es por Zelf ID y por mes, sin un tope a nivel de cuenta.
6. **Liquidación.** ¿Débito en el libro compartido con los espacios extra, o transferencia en cadena a una tesorería?
7. **Mes con tarjeta.** ¿Un pago con tarjeta de un mes, por los dólares fijados, entra en la primera versión, y qué checkout existente debería alojarlo?
8. **Espacios antes de la tarifa.** Confirmar que se puede comprar un espacio con el mes impago, siempre que la hoja avise que el saldo restante puede no cubrir el acceso.
9. **Vencimiento.** Confirmar que la primera apertura que dispara la tarifa, después de que termina un plazo Premium o Unlimited, se cobra, incluidos los plazos que terminaron por cupón o whitelist.
10. **Titularidades antiguas de Zelf Keys** que no son free, premium ni unlimited. ¿Esos nombres siguen en alcance mientras el plan de consumo se lee como Free?
11. **ZNS en planes de pago.** Si hay que explorar después alguna de las tres opciones, ¿cuál? Ninguna está comprometida.
12. **Meses en calma.** Confirmar que un nombre que no abre datos ese mes nunca se cobra, aunque reclame la recompensa diaria. La recomendación es que sí: el reclamo está exento, y la tarifa espera una apertura que la dispare.
