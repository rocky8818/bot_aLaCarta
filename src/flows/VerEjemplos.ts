// src/flows/cursos.js

import { addKeyword } from "@builderbot/bot";
import { blacklist } from "~/lib/shopFunctions";

const VerEjemplos = addKeyword(["Ver ejemplos"])
  .addAction(async (ctx, { endFlow }) => {
    if (blacklist.includes(ctx.from)) {
      console.log(ctx.from, ' number in blacklist for examples')
      return endFlow();
    } else{
      console.log(blacklist, 'doesnt include: ', ctx.from)
    }
  })
  .addAnswer("Mira este es recetario que te enviaremos.😎", {
    delay: 700,
  })
  .addAnswer("Su portada...", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743478689/aLaCartaShop/1_ikjtom.png",
    delay: 700,
  })
  .addAnswer("Y estos son algunos de los ejemplos.")
  .addAnswer("Con 20 desayunos 🥞...", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743478687/aLaCartaShop/20_vinrg2.png",
    delay: 700,
  })
  .addAnswer("40 comidas 🍝...", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743478686/aLaCartaShop/43_odfrvv.png",
    delay: 700,
  })
  .addAnswer("30 cenas 🌮...", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743478688/aLaCartaShop/82_x7bdy4.png",
    delay: 700,
  })
  .addAnswer("Y 10 snacks 🥜...", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743479063/aLaCartaShop/Recetario_100_meal_preps_zsewnl.png",
    delay: 700,
  })
  .addAnswer("Ademas ahorita estamos incluyendo 20 postres!")
  .addAnswer("20 postres 🍰!!!", {
    media:
      "https://res.cloudinary.com/do144qmdb/image/upload/v1743482181/aLaCartaShop/Recetario_100_meal_preps_2_u7ggyz.png",
    delay: 700,
  })
  .addAnswer(
    "Te interesa? Escribe **🔵Quiero comprar🔵** Para que te enviemos el link de pago.",
    {
      delay: 700,
    }
  );

export default VerEjemplos;
