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
      console.log(ctx.from, ' number in blacklist for payment')
      return endFlow();
    }
  })
  .addAnswer([
    `🌟 Por el momento solo aceptamos mercado pago \n\n`,
    `1️⃣ Haz clic en el enlace y serás redirigido a la página segura de Mercado Pago.\n\n 2️⃣ Elige tu método de pago:\n Tarjeta de crédito/débito 💳\n Saldo disponible en Mercado Pago 💰\n Depósito en efectivo (OXXO, 7-Eleven, etc.) 🏦\n\n 3️⃣ Completa el pago y guarda el comprobante.\n\n 4️⃣ Envíanos una captura del comprobante o el número de transacción para confirmar tu compra.`,
  ], {
    delay: 700,
  } )

  .addAnswer("Ingresa al link para pagar https://mpago.la/2S3bdLV" , {
    delay: 700,
  })

  .addAnswer("Verás un menú como este, ahí podrás pagar con tarjeta de crédito, débito, efectivo ó transferencia.", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743482181/aLaCartaShop/Recetario_100_meal_preps_2_u7ggyz.png",
    delay: 700,
  });

export default LinkDePago;
