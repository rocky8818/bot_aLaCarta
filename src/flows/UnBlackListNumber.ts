// src/flows/unblockNumber.js
import { addKeyword } from "@builderbot/bot";
import { whitelist, blacklist } from "../lib/shopFunctions";

const UnBlacklistNumber = addKeyword(["/^sudo unblock (.+)/i"], {
  regex: true,
})
  .addAction(async (ctx, { endFlow, state }) => {
    // Verificar si el usuario que intenta desbloquear está en la whitelist
    if (!whitelist.includes(ctx.from)) {
      return endFlow("No tienes permiso para realizar esta acción.");
    }

    // Extraer el número que se desea desbloquear
    const numberToUnblock = ctx.body.match(/^sudo unblock (.+)/i)[1];

    // Actualizar el estado con el número a desbloquear
    await state.update({
      number: numberToUnblock,
    });
  })
  .addAction(async (ctx, { state, flowDynamic }) => {
    // Obtener el número del estado
    const numberToUnblock = await state.get("number");

    // Formatear los números para buscar en la blacklist
    const formattedNumbers = [`521${numberToUnblock}`, `52${numberToUnblock}`];

    // Filtrar la blacklist para eliminar los números coincidentes
    const updatedBlacklist = blacklist.filter(
      (number) => !formattedNumbers.includes(number)
    );

    // Actualizar la blacklist global
    blacklist.length = 0; // Limpiar la lista actual
    blacklist.push(...updatedBlacklist); // Agregar los números restantes

    // Enviar una respuesta dinámica al usuario
    if (updatedBlacklist.length < blacklist.length) {
      await flowDynamic(`El número ${numberToUnblock} ha sido eliminado de la blacklist.`);
    } else {
      await flowDynamic(`El número ${numberToUnblock} no se encontraba en la blacklist.`);
    }
  });

export default UnBlacklistNumber;