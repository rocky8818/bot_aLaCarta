// src/flows/cursos.js

import { addKeyword } from "@builderbot/bot";
import { blacklist } from "~/lib/shopFunctions";

const LinkDePago = addKeyword([
  "Como pago",
  "Cómo pago",
  "Como compro",
  "Cómo compro",
  "Quiero pagar",
  "Quiero comprar",
  "Como puedo pagar",
  "Cómo puedo pagar",
  "Como puedo comprar",
  "Cómo puedo comprar",
])
  .addAction(async (ctx, { endFlow }) => {
    if (blacklist.includes(ctx.from)) {
      return endFlow();
    }
  })
  .addAnswer([
    `🌟 Por el momento solo aceptamos mercado pago \n\n`,
    `1️⃣ Haz clic en el enlace y serás redirigido a la página segura de Mercado Pago.\n\n 2️⃣ Elige tu método de pago:\n Tarjeta de crédito/débito 💳\n Saldo disponible en Mercado Pago 💰\n Depósito en efectivo (OXXO, 7-Eleven, etc.) 🏦\n\n 3️⃣ Completa el pago y guarda el comprobante.\n\n 4️⃣ Envíanos una captura del comprobante o el número de transacción para confirmar tu compra.`,
  ], {
    delay: 1000,
  } )

  .addAnswer("Ingresa al link para pagar https://mpago.la/2S3bdLV" , {
    delay: 1000,
  });

export default LinkDePago;
