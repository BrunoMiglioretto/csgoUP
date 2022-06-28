export class Modal {
    constructor(id) {
        this.DOM = document.getElementById(id);
    }
   
    abrir() {
        this.DOM.style.display = "block";
    }

    fechar() {
        this.DOM.style.display = "none";
    }
}


