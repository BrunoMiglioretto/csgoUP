import { Inventario } from "../../modelos/inventario.js";
import { Skin } from "../../modelos/skin.js";
import { Storage } from "../storage.js";

export class InventarioStorage extends Storage {

    constructor(usuarioId) {
        super("inventario");
        this.usuarioId = usuarioId;
    }

    buscarSkins(tipoItem = undefined) {
        const inventario = this.buscarInvetario();
        const skinStorage = new Storage("skin");
        const listaSkin = [];
        for(const skinId of inventario.skinColecao) {
            const skinJson = skinStorage.buscar(skinId);
            listaSkin.push(new Skin(skinJson.id, skinJson.nome, skinJson.valor, skinJson.descricao, skinJson.imagem, skinJson.tipoItem));
        }
        if (tipoItem == undefined) {
            return listaSkin;
        }
        return listaSkin.filter((elemento) => elemento.tipoItem == tipoItem);
    }


    buscarInvetario() {
        const listaInventario = this.buscarLista();
        let inventario;
        for(const item of listaInventario){
            if (item.usuarioId = this.usuarioId) {
                inventario = new Inventario(item.id,item.usuarioId,item.skinColecao);
            }
        }
        return inventario;
    }



}