// src/flows/cursos.js

import { addKeyword } from "@builderbot/bot";
import { blacklist } from "~/lib/shopFunctions";

const LinkDePago = addKeyword([
  "Como pago",
  "Cómo pago",
])
  .addAction(async (ctx, { endFlow }) => {
    if (blacklist.includes(ctx.from)) {
      return endFlow();
    }
  })
  .addAnswer(
    `🤖Claro! los cursos a la medida se arman en base a nuestra oferta educativa disponible. 🕒 En bloques de 5 hrs. `,
    null,
    async (ctx, { state }) => {
      if (!state.get("first")) {
        await state.update({ first: ctx.body });
      } else {
        console.log(state.get("first"));
      }
    }
  )

  .addAnswer(
    [`🌟 ¿Cómo pagar con Mercado Pago?`, 
      `1️⃣ Haz clic en el enlace y serás redirigido a la página segura de Mercado Pago.
      2️⃣ Elige tu método de pago:
Tarjeta de crédito/débito 💳
Saldo disponible en Mercado Pago 💰
Depósito en efectivo (OXXO, 7-Eleven, etc.) 🏦
 Completa el pago y guarda el comprobante.
3️⃣ 
4️⃣ Envíanos una captura del comprobante o el número de transacción para confirmar tu compra.`]
  )


export default LinkDePago;
