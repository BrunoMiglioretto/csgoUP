export class Storage {
    constructor(entidade, tipoStorage = "local"){
        this.entidade = entidade;

        if (tipoStorage == "local")
            this.webStorage = window.localStorage;
        else if (tipoStorage == "session")
            this.webStorage = window.sessionStorage;
        else
            throw "Tipo de Web Storage inválida";
    }

    salvar(objeto) {
        let listaEntidade = this.webStorage.getItem(this.entidade);
        let listaEntidadeJSON = JSON.parse(listaEntidade);
        if (listaEntidadeJSON == undefined) {
            listaEntidadeJSON = [];
        }
        else if (!Array.isArray(listaEntidadeJSON)) {
            listaEntidadeJSON = [listaEntidadeJSON];
        }
        const objetoJson = JSON.stringify(objeto);
        listaEntidadeJSON.push(objetoJson);
        this.webStorage.setItem(this.entidade,JSON.stringify(listaEntidadeJSON));
        return objetoJson;
    }

    buscar(id){
        return this.buscarLista().find((elemento) => elemento.id == id);
    }

    buscarLista(){
        let listaEntidade = this.webStorage.getItem(this.entidade);
        let listaEntidadeJSON = JSON.parse(listaEntidade);
        if (listaEntidadeJSON == undefined) {
            listaEntidadeJSON = [];
        }
        else if (!Array.isArray(listaEntidadeJSON)) {
            listaEntidadeJSON = [listaEntidadeJSON];
        }else {
            listaEntidadeJSON = listaEntidadeJSON.map((elemento) => typeof(elemento) == "string" ? JSON.parse(elemento) : elemento);
        }
        return listaEntidadeJSON;
    }

    remover(id){
        let listaEntidade = this.webStorage.getItem(this.entidade);
        let listaEntidadeJSON = JSON.parse(listaEntidade);
        if (listaEntidadeJSON == undefined) {
            listaEntidadeJSON = [];
        }
        else if (!Array.isArray(listaEntidadeJSON)) {
            listaEntidadeJSON = [listaEntidadeJSON];
        }else {
            listaEntidadeJSON = listaEntidadeJSON.map((elemento) => typeof(elemento) == "string" ? JSON.parse(elemento) : elemento);
        }
        const listaAtualizada = listaEntidadeJSON.filter((elemento) => elemento.id != id);
        this.webStorage.setItem(this.entidade, JSON.stringify(listaAtualizada));
    }
    isSet() {
        return !!this.webStorage.getItem(this.entidade);
    }
}

export class AdminStorage extends Storage {
    resetStorage() {
        const storage = new Storage();
        storage.webStorage.clear();
    }
}