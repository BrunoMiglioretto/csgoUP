import { Skin } from '../modelos/skin.js';
import { Storage } from '../utils/storage.js';


export class Inventario {
    constructor(inventarioId, domInventarioId) {
        this.DOM = document.getElementById(domInventarioId);

        this.inventarioStorage = new Storage("inventario");
        this.inventario = this.inventarioStorage.buscar(inventarioId);
    }

    atualizarDOM(onclick) {
        const skinStorage = new Storage("skin");
        for (const skinId of this.inventario.skinColecao) {
            const skinJSON = skinStorage.buscar(skinId);
            const skin = new Skin(
                skinJSON.id, 
                skinJSON.nome, 
                skinJSON.valor, 
                skinJSON.descricao, 
                skinJSON.imagem, 
                skinJSON.tipoItem
            );
            const card = skin.gerarCardPequeno();
            card.onclick = () => onclick(skin);

            this.DOM.append(card);
        }
    }

}
