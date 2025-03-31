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
    `El costo por hora es de $400. Puedes elegir la cantidad de bloques segun tu nivel de experiencia.`
  )


export default LinkDePago;
