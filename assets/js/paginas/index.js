import { Skin } from "../modelos/skin.js";
import { Inventario } from "../componentes/inventario.js";
import { Roleta } from "../componentes/roleta.js";

// function gerarSkinsRoleta() {
//     const caixaRoletaJogador = document.getElementById("caixaRoletaJogador");
//     const caixaRoletaResultado = document.getElementById("caixaRoletaResultado");
//     const caixaRoletaLoja = document.getElementById("caixaRoletaLoja");

//     caixaRoletaJogador.innerHTML = "roleta1";
//     caixaRoletaResultado.innerHTML = "roleta2";
//     caixaRoletaLoja.innerHTML = "roleta3";
// }

// gerarSkinsRoleta();

function sortear() {}

function selecionarSkinAposta() {
    console.log("selecionarSkinAposta")
}
function selecionarSkinDesejada() {
    console.log("selecionarSkinDesejada")
}

const roleta = new Roleta();

const inventarioLoja = new Inventario(3, "inventarioSkinLoja");
const inventarioUsuario = new Inventario(0, "inventarioSkinJogador");

inventarioLoja.atualizarDOM(selecionarSkinDesejada);
inventarioUsuario.atualizarDOM(selecionarSkinAposta);
