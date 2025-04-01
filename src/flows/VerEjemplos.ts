// src/flows/cursos.js

import { addKeyword } from "@builderbot/bot";
import { blacklist } from "~/lib/shopFunctions";

const VerEjemplos = addKeyword([
    "Ver ejemplos"
])
    .addAction(async (ctx, { endFlow }) => {
        if (blacklist.includes(ctx.from)) {
            return endFlow();
        }
    })
    .addAnswer(
        "Mira este es ebook que te enviaremos.😎"
    )
    .addAnswer("Su portada...", {
        media:
            "https://res.cloudinary.com/do144qmdb/image/upload/v1743478689/aLaCartaShop/1_ikjtom.png",
    })
    .addAnswer(
        "Y estos son algunos de los ejemplos."
    )
    .addAnswer("Con 20 desayunos 🥞...", {
        media:
            "https://res.cloudinary.com/do144qmdb/image/upload/v1743478687/aLaCartaShop/20_vinrg2.png",
    })
    .addAnswer("40 comidas 🍝...", {
        media:
            "https://res.cloudinary.com/do144qmdb/image/upload/v1743478686/aLaCartaShop/43_odfrvv.png",
    })
    .addAnswer("30 cenas 🌮...", {
        media:
            "https://res.cloudinary.com/do144qmdb/image/upload/v1743478688/aLaCartaShop/82_x7bdy4.png",
    })
    .addAnswer("Y 10 snacks 🥜...", {
        media:
            "https://res.cloudinary.com/do144qmdb/image/upload/v1743479063/aLaCartaShop/Recetario_100_meal_preps_zsewnl.png",
    })
    .addAnswer(
        "Ademas ahorita estamos incluyendo 20 postres!"
    )
    .addAnswer("20 postres 🍰!!!", {
        media:
            "https://res.cloudinary.com/do144qmdb/image/upload/v1743482181/aLaCartaShop/Recetario_100_meal_preps_2_u7ggyz.png",
    })
    .addAnswer(
        "Te interesa? Escribe **🔵Quiero pagar🔵** Para que te enviemos el link de pago."
    );


export default VerEjemplos;
