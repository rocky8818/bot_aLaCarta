// ./flows/SendThanksFlow.js
import { addKeyword } from "@builderbot/bot";
import { whitelist } from "../lib/shopFunctions";

const SendBook = addKeyword(["enviar gracias", "agradecer"])
  .addAnswer(
    `Por favor, envíame el número al que quieres mandar el agradecimiento, con lada (ej: 5215551234567) `,
    { capture: true },
    async (ctx, { state }) => {
      await state.update({ phone: ctx.body });
      console.log(state.get("phone"));
    }
  )
  .addAction(async (ctx, { endFlow, provider }) => {
    if (!whitelist.includes(ctx.from)) {
      return endFlow("❌ No tienes permiso para realizar esta acción.");
    }

    const phone = ctx.body.match(/\d{10,15}/)?.[0];

    if (!phone) {
      return endFlow(
        "❌ El número no es válido. Asegúrate de incluir lada (ej: 521...)."
      );
    }

    try {
      await provider.sendMessage(
        phone,
        "🙏 ¡Gracias por tu interés en nuestra app!"
      );
      await provider.sendMedia(
        phone,
        "https://i.imgur.com/0HpzsEm.png",
        "gracias.png",
        "Aquí tienes una imagen 😊"
      );
      return endFlow("✅ Mensaje de agradecimiento enviado correctamente.");
    } catch (err) {
        try {
            if(!provider){
                console.log('Provider no definido')
            }
        } catch (error) {
            console.log('hay otro error')
        }
      console.error("Error al enviar el mensaje:", err);
      return endFlow("❌ Hubo un error al enviar el mensaje.");
    }
  });

export default SendBook;
