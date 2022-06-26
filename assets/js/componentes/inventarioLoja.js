import { InventarioStorage } from "../utils/Storages/inventarioLojaStorage.js";

function gerarInventarioLoja(tipoItem) {
    const inventarioSkinLoja = document.getElementById("inventarioSkinLoja");
    const inventarioStorage = new InventarioStorage(3);
    
    for (const skin of inventarioStorage.buscarSkins(tipoItem)) {
        inventarioSkinLoja.append(skin.gerarCardPequenoLoja());
    }
}

gerarInventarioLoja();