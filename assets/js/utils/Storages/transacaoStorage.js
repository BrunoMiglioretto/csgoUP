import { Storage } from "../storage.js";
import { Transacao } from "../../modelos/transacao.js";

export class TransacaoStorage extends Storage {
    constructor() {
        super("transacao");
    }

    buscarSorteiosSucesso() {
        const listaTransacaoJSON = this.buscarLista();

        const listaTransacao = [];
        for (const item of listaTransacaoJSON) {
            listaTransacao.push(new Transacao(
                item.id,
                item.tipo, 
                item.deUsuario, 
                item.paraUsuario, 
                item.skinId, 
                item.valor
            ));
        }

        return listaTransacao.filter((item) => item.tipo == "ganhoRoleta");
    }
} 