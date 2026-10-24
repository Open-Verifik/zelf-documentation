---
title: Planes y tokens
description: Especificación planificada de los planes de cuenta de Zelf y del modelo de tokens para ranuras extra de contraseñas y 2FA en el plan Free.
keywords: [planes zelf, tokens zelf, plan free, premium, unlimited, zelf keys, zauth, precios]
image: /img/social-card.svg
sidebar_label: Planes y tokens
---

# Planes y tokens

:::warning Planned — not yet live

Esta página es una especificación escrita antes de la implementación. Los nombres de los planes, los precios anuales y los límites incluidos coinciden con la tabla pública de [zelf.world/pricing](https://zelf.world/pricing). Gastar tokens para desbloquear ranuras extra en el plan Free es una propuesta y todavía no está disponible en el producto.

:::

Los planes de cuenta de Zelf cubren contraseñas (zKeys), cuentas de doble factor (zAuth) y funciones de billetera (zWallet). Los precios de abajo son los de facturación anual de esa tabla.

El alquiler de nombres Zelf ID usa otra lista de precios, en el objeto de licencia. Esta página no cambia esos precios.

## Planes

<div class="plans-table-wrap plans-table-wrap--compare">
<table>
  <thead>
    <tr>
      <th>Función</th>
      <th>Free</th>
      <th>Premium</th>
      <th>Unlimited</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Plan de pago</td>
      <td>Proof of Humanity (semanal)</td>
      <td>$2.41/mes, cobrado anual ($28.92/año)</td>
      <td>$8.25/mes, cobrado anual ($99/año)</td>
    </tr>
    <tr>
      <td>Tokens anuales</td>
      <td>Se obtienen con el check-in diario. Cantidad: TBD</td>
      <td>580 por año</td>
      <td>1,980 por año</td>
    </tr>
    <tr>
      <td>Contraseñas (zKeys)</td>
      <td>Hasta 5</td>
      <td>Hasta 100</td>
      <td>Ilimitadas</td>
    </tr>
    <tr>
      <td>Cuentas 2FA (zAuth)</td>
      <td>Hasta 3</td>
      <td>Hasta 20</td>
      <td>Ilimitadas</td>
    </tr>
    <tr>
      <td>Plataformas</td>
      <td>Extensión web, iOS y Android</td>
      <td>Extensión web, iOS y Android</td>
      <td>Extensión web, iOS y Android</td>
    </tr>
    <tr>
      <td>Generación segura de contraseñas</td>
      <td>Incluida</td>
      <td>Incluida</td>
      <td>Incluida</td>
    </tr>
    <tr>
      <td>Guardar y autocompletar credenciales</td>
      <td>Incluido</td>
      <td>Incluido</td>
      <td>Incluido</td>
    </tr>
    <tr>
      <td>Proteger notas personales y tarjetas</td>
      <td>Incluido</td>
      <td>Incluido</td>
      <td>Incluido</td>
    </tr>
    <tr>
      <td>Billetera biométrica</td>
      <td>Incluida</td>
      <td>Incluida</td>
      <td>Incluida</td>
    </tr>
    <tr>
      <td>Gestor de claves privadas</td>
      <td>Incluido</td>
      <td>Incluido</td>
      <td>Incluido</td>
    </tr>
    <tr>
      <td>Servicio de recuperación</td>
      <td>Incluido</td>
      <td>Incluido</td>
      <td>Incluido</td>
    </tr>
  </tbody>
</table>
</div>

Los tokens del plan Free salen del check-in diario. Premium incluye 580 tokens por año. Unlimited incluye 1,980 tokens por año. La cantidad de tokens de cada check-in es TBD.

## Valor del token

Un token de Zelf equivale a **$0.05 USD**.

Esa cifra es el precio de la preventa. También es el valor del token que implican los dos planes de pago: $28.92 / 580 y $99 / 1,980 dan unos $0.05 por token.

Hoy, en la API, este valor está definido en dos sitios:

- El precio de la preventa está fijo en el código como `PRESALE_CONFIG.tokenPrice`, en `Repositories/PreSale/modules/pre-sale.module.js`.
- Un valor de configuración aparte, `rewardPrice`, en `Core/config.js`, lee la variable de entorno `REWARD_PRICE`. El valor por defecto es `0.05`.

Esas dos definiciones deben leerse desde una sola fuente configurable. La ubicación de esa fuente es TBD. Los precios de las ranuras extra de la sección siguiente se definen a partir de ese valor compartido.

## Ranuras extra en el plan Free

Esta sección está planificada y todavía no está disponible.

Una cuenta Free incluye hasta 5 contraseñas y hasta 3 cuentas 2FA. Añadir una sexta contraseña, o una cuarta cuenta 2FA, exige gastar tokens para desbloquear una ranura extra. Hasta que esa ranura se desbloquee, el elemento no se puede añadir.

### Premium como piso de precio

Premium incluye 112 ranuras más que Free:

- 95 contraseñas más (100 − 5)
- 17 cuentas 2FA más (20 − 3)

Esas 112 ranuras forman parte del año Premium, que cuesta $28.92. Eso es unos **$0.26 por ranura al año**.

Una ranura desbloqueada con tokens cuesta más que esa cifra, de modo que Premium sigue siendo la mejor opción para quien necesita muchas ranuras extra. Con los precios de abajo, una ranura de contraseña cuesta $0.50 al año y una ranura 2FA cuesta $1.00 al año. Las dos quedan por encima de unos $0.26.

### Precios propuestos

Los precios de abajo usan el valor actual del token, $0.05.

<div class="plans-table-wrap">
<table>
  <thead>
    <tr>
      <th>Ranura extra</th>
      <th>Tokens por año</th>
      <th>USD por año</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Contraseña</td>
      <td>10</td>
      <td>$0.50</td>
    </tr>
    <tr>
      <td>Cuenta 2FA</td>
      <td>20</td>
      <td>$1.00</td>
    </tr>
  </tbody>
</table>
</div>

Cada ranura dura 12 meses. Es un alquiler. Cuando terminan los 12 meses, la ranura termina con ellos, y conservarla significa pagar otro año. Como el cobro se repite cada año, y cada año cuesta más por ranura que Premium, las ranuras alquiladas siguen siendo más caras que pasar de plan a lo largo del tiempo.

El importe en dólares se calcula a partir del valor configurado del token:

`USD por ranura al año = tokens de esa ranura × valor del token`

A $0.05, una ranura de contraseña es 10 × $0.05 = $0.50, y una ranura 2FA es 20 × $0.05 = $1.00. Si cambia el valor configurado del token, cambian estos precios en dólares.

### Ejemplo

Una persona en el plan Free ya guarda 5 contraseñas y quiere 3 más durante los próximos 12 meses.

1. Esas 3 contraseñas superan el límite incluido, así que hacen falta 3 ranuras extra de contraseña.
2. Tokens: 3 × 10 = 30 tokens.
3. USD: 30 × $0.05 = $1.50 por esos 12 meses.

Al cabo de los 12 meses, las 3 ranuras terminan. Qué ocurre con las contraseñas guardadas en ellas es TBD. Ver [Preguntas abiertas](#preguntas-abiertas).

### Cruce con Premium

Unas **58 ranuras extra de contraseña al año** cuestan aproximadamente lo mismo que Premium.

- Tokens: 58 × 10 = 580 tokens.
- USD: 580 × $0.05 = $29.00.
- Premium durante el mismo año cuesta $28.92.

580 tokens es también la asignación anual de Premium. Alrededor de ese volumen, Premium conviene más: el plan incluye 100 contraseñas, 20 cuentas 2FA y 580 tokens por $28.92. Las ranuras de tokens solo alquilan contraseñas, y el alquiler se vuelve a pagar al año siguiente.

### Check-in diario

Los tokens del plan Free salen del check-in diario. La recompensa es **TBD**.

## Preguntas abiertas

Cada punto de abajo sigue sin resolverse.

- Cuántos tokens otorga un check-in diario: **TBD**.
- Qué ocurre con un elemento guardado en una ranura cuando vence el alquiler de 12 meses: **TBD**.
- Si los tokens incluidos en Premium o Unlimited pueden comprar ranuras por encima de los límites de ese plan: **TBD**.
