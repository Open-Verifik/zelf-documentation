---
title: "Planes: Free, Premium y Unlimited"
description: Cómo funcionan los planes de Zelf ID. Límites de contraseñas y cuentas 2FA en Free, Premium y Unlimited, espacios extra pagados en ZNS, pago, cupones, subida de plan, renovación y vencimiento.
keywords: [planes zelf, plan free, plan premium, plan unlimited, límites zelf keys, espacios extra, zns, crédito de subida, renovación, cupón]
image: /img/social-card.png
sidebar_label: "Planes: Free, Premium y Unlimited"
---

# Planes: Free, Premium y Unlimited

Cada nombre de Zelf ID tiene un plan: **Free**, **Premium** o **Unlimited**. El plan define cuántas contraseñas y cuentas 2FA puede guardar el dueño en Zelf Keys. El nombre es el mismo en cualquier plan.

:::info Los precios vienen de la API de planes

Los precios de esta página son los que devolvió `GET https://v4.zelf.world/api/zelf-ids/payment-options` para un nombre `.zelf` de 6 o más caracteres al momento de escribirla. Los precios se configuran en la licencia del dominio (ver [El objeto License](/docs/api/licenses/license-object)) y pueden cambiar. Consulta siempre el precio vigente con [Payment Options](/docs/api/zelf-ids/payment-options) antes de mostrárselo a un usuario.

:::

## Comparación

| | Free | Premium | Unlimited |
|---|---|---|---|
| Precio (1 año) | $0 | $29 | $99 |
| Contraseñas en Zelf Keys | 5 | 100 | Sin límite |
| Cuentas 2FA en Zelf Keys | 3 | 20 | Sin límite |
| Espacios extra pagados en ZNS | Sí | Sí | No hacen falta |
| Lease del nombre | 100 años | 100 años | 100 años |
| Forma de pago | No hay nada que pagar | Stripe o cripto | Stripe o cripto |
| Disponible para nombres de 1 a 5 caracteres | Sí | No | Sí |

## Cómo funcionan los planes

- **Todo nombre empieza en Free.** Al registrar un nombre, queda en el plan Free con un lease de unos 100 años. No hay que pagar nada.
- **Premium y Unlimited son plazos de pago sobre el nombre.** Comprar un plan fija una fecha de fin del plan (`planExpiresAt`). No cambia el lease del nombre (`leaseExpiresAt`).
- **El plan vigente se calcula en cada consulta.** Mientras el plazo pagado está abierto, el nombre tiene ese plan. Cuando el plazo termina, el nombre vuelve a leerse como Free. No hace falta ninguna migración ni tarea programada.
- **Nombres cortos.** Para nombres de 1 a 5 caracteres la licencia solo ofrece **Unlimited**. Premium se ofrece para nombres de 6 caracteres o más.

## Límites

Los límites aplican a los elementos de Zelf Keys del nombre:

| Elemento | Free | Premium | Unlimited |
|----------|------|---------|-----------|
| Contraseñas | 5 | 100 | Sin límite |
| Cuentas 2FA | 3 | 20 | Sin límite |

Cuando el dueño llega al límite, no puede agregar otro elemento de ese tipo hasta que compre un espacio extra o suba de plan. Editar un elemento que ya está guardado no cuenta como uno nuevo.

Los límites, el uso actual y el precio de los espacios de un nombre se consultan con `GET https://v4.zelf.world/api/zelf-keys/limits`.

## Espacios extra

Los dueños en Free y Premium pueden pasar su límite de uno en uno comprando un **espacio extra** con ZNS, el token de Zelf.

| Espacio extra | Precio | ZNS a $0.05 por ZNS |
|---------------|--------|---------------------|
| Contraseña | $0.50 | 10 ZNS |
| Cuenta 2FA | $1.00 | 20 ZNS |

- El precio de cada espacio está en dólares y se convierte a ZNS enteros con el precio configurado del token. A $0.05 por ZNS, un espacio de contraseña cuesta **10 ZNS** y uno de 2FA **20 ZNS**. Si cambia el precio del token, cambia también la cantidad de ZNS.
- Cada espacio dura **12 meses**. Después termina y deja de sumar al límite.
- Los ZNS salen de la billetera del nombre dueño de la bóveda. La compra se confirma con el rostro del dueño.
- Unlimited no tiene topes, así que no necesita espacios extra.

Los espacios extra se compran con `POST https://v4.zelf.world/api/zelf-keys/slots`.

## Comprar y pagar

1. Pide una cotización con [Payment Options](/docs/api/zelf-ids/payment-options), indicando el nombre, el `plan` (`premium` o `unlimited`) y la `duration`.
2. Paga el monto cotizado con **Stripe** o **cripto**.
3. Confirma con [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation). El plan queda aplicado al nombre.

Los planes se compran por años. La licencia decide qué plazos se ofrecen para cada plan. Para un nombre `.zelf` de 6 o más caracteres, la API ofrece hoy:

| Plazo | Premium | Unlimited |
|-------|---------|-----------|
| 1 año | $29.00 | $99.00 |
| 2 años | $43.49 | $148.99 |
| 3 años | $56.99 | $192.99 |
| De por vida | $144.99 | $494.99 |

Un plazo que la licencia no ofrece devuelve `409` `PLAN_DURATION_NOT_OFFERED_BY_LICENSE`. Un plan que la licencia no ofrece para ese largo de nombre devuelve `409` `PLAN_NOT_OFFERED_FOR_NAME`. Un plan de por vida no tiene fecha de fin.

### La cotización fija el precio

La cotización va firmada (`signedDataPrice`) y es válida por **2 horas**. Durante ese tiempo fija el precio en dólares, los montos en cripto y el crédito de subida, si lo hay. La confirmación usa esas cifras fijadas.

Una cotización vencida se rechaza. Hay que pedir una nueva, que vuelve a calcular todo, incluidas las tasas de cripto y el crédito de subida. Un pago en cripto por el monto completo que llegó antes de que venciera la cotización se sigue respetando.

Stripe necesita que a la cotización le queden al menos 30 minutos para abrir la sesión de pago. Si no, devuelve `409` `QUOTE_EXPIRING` y hay que pedir una cotización nueva.

## Cupones

Un [cupón](/docs-es/api/zelf-ids/cupones) descuenta un porcentaje de un plazo Premium o Unlimited. Pásalo a Payment Options para ver el `amountDue` con el descuento.

- Si el cupón deja el total en **$0**, el plan se otorga directamente, sin pasar por ninguna pasarela de pago.
- Si queda un saldo, el dueño paga ese monto con descuento por Stripe o cripto.

## Subir de plan

Un nombre con un plazo Premium abierto puede pasar a Unlimited en cualquier momento. Bajar de Unlimited a Premium con el plazo abierto no está permitido (`409` `PLAN_DOWNGRADE_NOT_ALLOWED`).

Al pasar de Premium a Unlimited, el tiempo de Premium que no se usó se convierte en **crédito de subida**:

`upgradeCredit = monto realmente pagado por el plazo Premium × tiempo restante / duración total del plazo`

- El crédito se redondea hacia abajo al centavo y nunca supera el precio de Unlimited.
- Se basa solo en lo que realmente se pagó. Un plazo Premium otorgado con un cupón del 100% o por whitelist costó $0, así que da **$0** de crédito. Un cupón parcial acredita lo que sí se pagó.
- Un plazo de por vida o uno que ya terminó no da crédito.
- El crédito queda fijado en la cotización firmada mientras sea válida.
- El nuevo plazo Unlimited empieza el día de la subida.

Payment Options devuelve `listPrice`, `upgradeCredit` y `amountDue`. El cupón se aplica después del crédito:

`amountDue = (listPrice − upgradeCredit) × (100 − percentOff) / 100`

Si el plazo Premium cambia entre la cotización y la confirmación, la confirmación devuelve `409` `UPGRADE_TERM_CHANGED` y hay que pedir una cotización nueva.

El plan actual del dueño y la forma de subir de plan se consultan con `GET https://v4.zelf.world/api/zelf-ids/my-plan`. Ver [Subir de plan](/docs-es/api/zelf-ids/cupones#subir-de-plan).

## Renovación y vencimiento

- **Renovar el mismo plan con el plazo abierto** suma el nuevo plazo a la fecha de fin actual. No se pierde tiempo.
- **Renovar después de que el plazo terminó** empieza un plazo nuevo desde la fecha de compra.
- **Cuando termina un plazo pagado**, el nombre vuelve a **Free** y se aplican otra vez los límites de Free. El nombre conserva su lease de 100 años y no vence. `planExpiresAt` queda con la fecha de fin ya pasada.
- Los elementos guardados con un plan superior no se borran cuando termina el plazo. Para agregar elementos por encima del límite de Free hace falta un espacio extra o un nuevo plazo de pago.

## Relacionado

- [Payment Options](/docs/api/zelf-ids/payment-options)
- [Payment Confirmation](/docs/api/zelf-ids/payment-confirmation)
- [Cupones](/docs-es/api/zelf-ids/cupones)
- [El objeto License](/docs/api/licenses/license-object)
- [Propuesta: acceso mensual ZNS para cuentas Free](/docs-es/api/zelf-ids/propuesta-acceso-mensual-zns)
- [Acceso mensual](/docs-es/api/zelf-ids/acceso-mensual)
