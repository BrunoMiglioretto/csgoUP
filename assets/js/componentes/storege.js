export class storege{
    constructor(entidade){
        this.entidade = entidade;
        this.localStorege = window.localStorage;
    }


    salvar(objeto) {
        let listaEntidade = this.localStorege.getItem(this.entidade);
        let listaEntidadeJSON = JSON.parse(listaEntidade);
        if (listaEntidadeJSON == undefined) {
            listaEntidadeJSON = [];
        }
        else if (!Array.isArray(listaEntidadeJSON)) {
            listaEntidadeJSON = [listaEntidadeJSON];
        }
        const objetoJson = JSON.stringify(objeto);
        listaEntidadeJSON.push(objetoJson);
        this.localStorege.setItem(this.entidade,JSON.stringify(listaEntidadeJSON));
        return objetoJson;
    }

    buscar(id){
        return this.buscarLista().find((elemento) => elemento.id == id);
    }

    buscarLista(){
        let listaEntidade = this.localStorege.getItem(this.entidade);
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
        let listaEntidade = this.localStorege.getItem(this.entidade);
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
        this.localStorege.setItem(this.entidade, JSON.stringify(listaAtualizada));
    }

    

}