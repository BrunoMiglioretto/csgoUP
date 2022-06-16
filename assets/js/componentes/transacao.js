export class Transacao {
    constructor(id, tipo, usuarioId, skinId, valor) {
        this.id = id;
        this.tipo = tipo;
        this.usuarioId = usuarioId;
        this.skinId = skinId;
        this.valor = valor;
    }
}