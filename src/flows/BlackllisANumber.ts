// src/flows/cursos.js
import { addKeyword } from "@builderbot/bot";
import { whitelist, blacklist } from "../lib/shopFunctions";

const BlacklistANumber = addKeyword(["/^sudo block (.+)/i"], {
  regex: true,
})
  .addAction(async (ctx, { endFlow, state }) => {
    if (whitelist.includes(ctx.from)) {
      return endFlow();
    }
    await state.update({
      number: ctx.body.match(/^sudo block (.+)/i)[1]
    });
  })
  .addAction(async (ctx, { state }) => {
    await state.update({
      servicio: ctx.body.match(/^sudo block (.+)/i)[1],
    });
  })

  .addAction(async (ctx, { state }) => {
    console.log(ctx.body);
    const number2Block = await state.get("number");
    console.log('number')
    blacklist.push(number2Block)
    
  });
export default BlacklistANumber;
