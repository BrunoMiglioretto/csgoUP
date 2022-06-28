import { InventarioStorage } from "../utils/Storages/inventarioLojaStorage.js";
import { ModalConfirmacaoCompra } from "../componentes/modals/modalConfirmacaoCompra.js";

function gerarInventarioLoja(tipoItem = undefined) {
    const inventarioSkinLoja = document.getElementById("inventarioSkinLoja");
    inventarioSkinLoja.innerHTML = "";

    const inventarioStorage = new InventarioStorage(3);
    for (const skin of inventarioStorage.buscarSkins(tipoItem)) {
        const card = skin.gerarCardPequenoLoja();
        card.onclick = () => {
            const modal = new ModalConfirmacaoCompra("backgroundModal");
            modal.abrirDetalhes(skin.id);
        }
        inventarioSkinLoja.append(card);
    }
}

gerarInventarioLoja();

document.getElementById("todas").onclick = () => gerarInventarioLoja();
document.getElementById("facas").onclick = () => gerarInventarioLoja("faca");
document.getElementById("luvas").onclick = () => gerarInventarioLoja("luva");
document.getElementById("rifles").onclick = () => gerarInventarioLoja("rifle");
document.getElementById("pistolas").onclick = () => gerarInventarioLoja("pistola");
