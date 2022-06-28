import { Skin } from "../modelos/skin.js";
import { Inventario } from "../componentes/inventario.js";
import { Roleta } from "../componentes/roleta.js";

const caixaRoletaJogador = document.getElementById("caixaRoletaJogador");
const caixaRoletaResultado = document.getElementById("caixaRoletaResultado");
const caixaRoletaLoja = document.getElementById("caixaRoletaLoja");

const roleta = new Roleta();

const inventarioLoja = new Inventario(3, "inventarioSkinLoja");
const inventarioUsuario = new Inventario(0, "inventarioSkinJogador");

let skinAposta;
let skinDesejada;

function sortear() {
    console.log("sortear");
    if (!skinAposta) {
        return;
    }
    if (!skinDesejada) {
        return;
    }

    caixaRoletaResultado.innerHTML = "";
    const resultado = roleta.sortear(skinAposta, skinDesejada);
    if (!resultado) {
        caixaRoletaResultado.innerHTML = "tentar novamente";
        return;
    }

    caixaRoletaResultado.append(resultado.gerarCardGrande());
}

function selecionarSkinAposta(skin) {
    skinAposta = skin;

    caixaRoletaJogador.innerHTML = "";
    caixaRoletaJogador.append(skin.gerarCardGrande());
}
function selecionarSkinDesejada(skin) {
    skinDesejada = skin;

    caixaRoletaLoja.innerHTML = "";
    caixaRoletaLoja.append(skin.gerarCardGrande());
}

inventarioLoja.atualizarDOM(selecionarSkinDesejada);
inventarioUsuario.atualizarDOM(selecionarSkinAposta);

caixaRoletaResultado.onclick = sortear;
