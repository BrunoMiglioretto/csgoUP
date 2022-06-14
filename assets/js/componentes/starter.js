import { Skin } from './skin.js';
import { Storage, AdminStorage } from './storege.js';

export class Starter {
    constructor() {
        this.skinStorage = new Storage("skin");
        this.inventarioStorage = new Storage("inventario");
        this.usuarioStorage = new Storage("usuario");
        this.transacaoStorage = new Storage("transacao");
        this.adminStorage = new AdminStorage();
    }

    start() {
        this.resetStorage();

        this.criarSkinCatalogo();
        this.criarUsuarios();
        this.criarUsuariosInventario();

        this.criarLojaUsuario();
        this.criarLojaInventario();

        this.criarTransacoes();
    }

    resetStorage() {
        this.adminStorage.resetStorage(); 
    }

    criarSkinCatalogo() {
        let listaSkin = [
            {
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            }
        ];

        for (let item of listaSkin) {
            let skin = new Skin(item.nome, item.valor, item.descricao, item.imagem);
            this.skinStorage.salvar(skin);
        }
    }

    criarUsuarios() {} 
    criarUsuariosInventario() {}
    criarLojaUsuario() {}
    criarLojaInventario() {}
    criarTransacoes() {}
}