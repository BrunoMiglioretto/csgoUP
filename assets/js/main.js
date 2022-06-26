import { gerarSlider } from "./componentes/carrossel.js";
import { Starter } from "./utils/starter.js";
import { gerarInventarioLoja } from "./componentes/inventarioRoleta.js";

const starter = new Starter();
starter.start();

gerarSlider();
gerarInventarioLoja();



// switchSelects(selectEscolhido){
//     let facas = document.getElementById("facas")
//     let pistolas = document.getElementById("pistolas")
//     let luvas = document.getElementById("luvas")
//     let rifles = document.getElementById("rifles")
//     if(selectEscolhido == "todas"){
//         return 1;
//     }else if (selectEscolhido == "facas") {
//         return 2;
//     }else if (selectEscolhido == "pistolas") {
//         return 5;
//     }else if (selectEscolhido == "luvas") {
//         return 3;
//     }else if (selectEscolhido == "rifles") {
//         return 4;
//     }
// }
