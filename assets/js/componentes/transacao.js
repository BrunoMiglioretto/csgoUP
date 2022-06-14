export class Transacao {
    constructor(id, tipo, usuarioId, skinId, deposito) {
        this.id = id;
        this.tipo = tipo;
        this.usuarioId = usuarioId;
        this.skinId = skinId;
        this.deposito = deposito;
    }
}