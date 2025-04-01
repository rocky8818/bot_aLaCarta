// src/flows/cursos.js

import { addKeyword } from "@builderbot/bot";
import { blacklist } from "~/lib/shopFunctions";

const LinkDePago = addKeyword([
  "Como pago",
  "Cómo pago",
  "Quiero pagar",
  "Como puedo pagar",
  "Cómo puedo pagar"
])
  .addAction(async (ctx, { endFlow }) => {
    if (blacklist.includes(ctx.from)) {
      return endFlow();
    }
  })
  .addAnswer(
    [`🌟 Por el momento solo aceptamos mercado pago \n\n`, `1️⃣ Haz clic en el enlace y serás redirigido a la página segura de Mercado Pago.\n\n 2️⃣ Elige tu método de pago:\n Tarjeta de crédito/débito 💳\n Saldo disponible en Mercado Pago 💰\n Depósito en efectivo (OXXO, 7-Eleven, etc.) 🏦\n\n 3️⃣ Completa el pago y guarda el comprobante.\n\n 4️⃣ Envíanos una captura del comprobante o el número de transacción para confirmar tu compra.`]
  )

  .addAnswer(
    'Ingresa al link para pagar https://mpago.la/2S3bdLV'
  )


export default LinkDePago;
