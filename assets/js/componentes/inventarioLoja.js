import { InventarioStorage } from "../utils/Storages/inventarioLojaStorage.js";

function gerarInventarioLoja(tipoItem = undefined) {
    const inventarioSkinLoja = document.getElementById("inventarioSkinLoja");
    inventarioSkinLoja.innerHTML = "";

    const inventarioStorage = new InventarioStorage(3);
    for (const skin of inventarioStorage.buscarSkins(tipoItem)) {
        inventarioSkinLoja.append(skin.gerarCardPequenoLoja());
    }
}
let divCompra = document.getElementById("caixaCompra");
divCompra.style.display = "block";
gerarInventarioLoja();

document.getElementById("todas").onclick = () => gerarInventarioLoja();
document.getElementById("facas").onclick = () => gerarInventarioLoja("faca");
document.getElementById("luvas").onclick = () => gerarInventarioLoja("luva");
document.getElementById("rifles").onclick = () => gerarInventarioLoja("rifle");
document.getElementById("pistolas").onclick = () => gerarInventarioLoja("pistola");
