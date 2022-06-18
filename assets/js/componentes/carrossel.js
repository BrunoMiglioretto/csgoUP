import { Skin } from "../modelos/skin.js"
import { Storage } from "../utils/storage.js";
import { TransacaoStorage } from "../utils/Storages/transacaoStorage.js";

export function gerarSlider() {
    const carrosselContainer = document.getElementById("carrossel");

    const transacaoStorage = new TransacaoStorage();
    const listaTransacaoJSON = transacaoStorage.buscarSorteiosSucesso();  

    const skinStorage = new Storage("skin");
    for (const item of listaTransacaoJSON) {
        const skinJSON = skinStorage.buscar(item.skinId);
        const skin = new Skin(
            skinJSON.id, 
            skinJSON.nome, 
            skinJSON.valor, 
            skinJSON.descricao, 
            skinJSON.imagem
        );

        carrosselContainer.append(skin.gerarCardPequeno());
    }
}