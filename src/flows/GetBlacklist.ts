// src/flows/unblockNumber.js
import { addKeyword } from "@builderbot/bot";
import { whitelist, blacklist } from "../lib/shopFunctions";

const GetBlacklist = addKeyword(["Get Blacklist"], {
  regex: true,
})
  .addAction(async (ctx, { endFlow, state, flowDynamic }) => {
    // Verificar si el usuario que intenta desbloquear está en la whitelist
    if (!whitelist.includes(ctx.from)) {
      return endFlow("No tienes permiso para realizar esta acción.");
    }

    await flowDynamic(blacklist.join('_--_'))
  })

export default GetBlacklist;