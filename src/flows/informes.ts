// src/flows/cursos.js

import { addKeyword } from "@builderbot/bot";
import { blacklist } from "~/lib/shopFunctions";

const informes = addKeyword(["/informacion/i", "/información/i"],
    {
      regex: true,
    }
  )
  .addAction(async (ctx, { endFlow }) => {
    if (blacklist.includes(ctx.from)) {
      return endFlow();
    }
  })
  .addAnswer(
    `🌟 ¿Te cuesta decidir qué comer todos los días y terminas gastando una fortuna en comida para la oficina? 🌟 \n\n` +
      `Con nuestro eBook de Meal Prep , ¡olvídate del estrés de planificar tus comidas y del gasto descontrolado en deliverys o restaurantes!\n\n` +
      `🔥 ¿Qué obtienes? 🔥` +
      `✅ 100 recetas prácticas y deliciosas divididas en:\n\n` +
      `20 desayunos energéticos para empezar el día con todo 💪.\n` +
      `40 comidas principales perfectas para llevar a la oficina 🍽️.\n` +
      `30 cenas ligeras y fáciles para relajarte después del trabajo 🌙.\n` +
      `10 snacks saludables para esos momentos de antojo 🥨.\n` +
      `✨ Y como BONUS especial : ¡te regalamos 20 recetas exclusivas de postres para endulzar tu día sin complicaciones! 🍰\n\n` +
      `💡 Beneficios clave:\n\n` +
      `Ahorra tiempo y dinero al planificar tus comidas semanales.\n` +
      `Reduce el estrés de "¿qué voy a comer hoy?" 🤔.\n` +
      `Mejora tu alimentación con recetas balanceadas y fáciles de preparar.\n` +
      `Perfecto para personas ocupadas que quieren comer rico y saludable 🚀.\n`
  )

  .addAnswer(
    `🌟 Si te interesa nuestro ebook📒 y quieres saber como pagar solo escribe *Quiero pagar*`
  );

export default informes;
