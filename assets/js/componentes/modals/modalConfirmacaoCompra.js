import { Modal } from "./modal.js";
import { Storage } from "../../utils/storage.js";

export class ModalConfirmacaoCompra extends Modal {
    constructor(id) {
        super(id);
        this.skinId = id;
        this.skinStorage = new Storage("skin");
        this.btnConfirmacao = this.DOM.querySelector(".btnConfirmacao");
        this.btnRecusa = this.DOM.querySelector(".btnRecusar");
        
        this.btnConfirmacao.onclick = () => this.confirmarCompra();
        this.btnRecusa.onclick = () => this.cancelarCompra(); 
    }

    abrirDetalhes(skinId) {
        const skinJSON = this.skinStorage.buscar(skinId);
        this.DOM.querySelector(".skin-confirmacao").src = skinJSON.imagem;
        this.abrir();
    }

    confirmarCompra() {
        // logica para remover o item do inventario da loja e colocar no inventario do usuario
        this.fechar();
    }
    cancelarCompra() {
        this.fechar();
    }
}