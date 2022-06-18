export class Transacao {
    /*
        tipos:
        - ganhoRoleta 
        - perdaRoleta
        - deposito
        - saque
        - compra 
    */
    constructor(id, tipo, deUsuario, paraUsuario, skinId, valor) {
        this.id = id;
        this.tipo = tipo;
        this.deUsuario = deUsuario;
        this.paraUsuario = paraUsuario;
        this.skinId = skinId;
        this.valor = valor;
    }
}