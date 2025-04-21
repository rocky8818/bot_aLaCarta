import LinkDePago from "~/flows/LinkDePago";


export async function formatearFechaHora(fecha: any) {
  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses empiezan en 0
  const anio = fecha.getFullYear();
  const horas = String(fecha.getHours()).padStart(2, "0");
  const minutos = String(fecha.getMinutes()).padStart(2, "0");
  const segundos = String(fecha.getSeconds()).padStart(2, "0");

  console.log(`${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`);
  return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
}

export async function lobbyKeywords(keyword: string, gotoFlow: any) {
  switch (keyword) {
    case "Como pago":
      return gotoFlow(LinkDePago);
    case "Cómo pago":
      return gotoFlow(LinkDePago);

    default:
      return null;
  }
}

export const keywordsArray = [
    "Como pago", 
    "Cómo pago",
];

export const blacklist = [
  "+525545673307",
  "528714582803",
  "5218714582803",
  "523331496079",
  "5213331496079"
];