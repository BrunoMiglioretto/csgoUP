import { Skin } from "./skin.js";
import { Usuario } from "./usuario.js";
import { Inventario } from "./inventario.js";
import { Storage, AdminStorage } from "./storege.js";

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
        const listaSkin = [
            {
                "id": 0,
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "id": 1,
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "id": 2,
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "id": 3,
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "id": 4,
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "id": 5,
                "nome": "skin de nome 1",
                "valor": 123.89,
                "descricao": "uma descricao",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            }
        ];

        for (const item of listaSkin) {
            let skin = new Skin(item.nome, item.valor, item.descricao, item.imagem);
            this.skinStorage.salvar(skin);
        }
    }

    criarUsuarios() {
        const listaUsuario = [
            {
                "id": 0,
                "nickname": "Bruno",
                "senha": "1230498lsdfigj",
                "emailPrincipal": "bruno@gmail.com",
                "emailSteam": "brunoStream@gmail.com",
                "foto": "logo.jpg",
                "saldo": 123.12,
                "ultimoAcesso": "2022-06-10 13:32:12",
                "loginAutomantico": true
            },
            {
                "id": 1,
                "nickname": "Alan",
                "senha": "efkfkfk44444",
                "emailPrincipal": "alan@gmail.com",
                "emailSteam": "alanStream@gmail.com",
                "foto": "logo.jpg",
                "saldo": 44.21,
                "ultimoAcesso": "2021-09-10 13:32:12",
                "loginAutomantico": false
            },
            {
                "id": 2,
                "nickname": "Julia",
                "senha": "qoiueriiriirii",
                "emailPrincipal": "julia@gmail.com",
                "emailSteam": "juliaStream@gmail.com",
                "foto": "logo.jpg",
                "saldo": 889.99,
                "ultimoAcesso": "2022-06-04 23:32:12",
                "loginAutomantico": true
            }
        ];

        for (const item in listaUsuario) {
            let usuario = new Usuario(
                item.id,
                item.nickname, 
                item.senha, 
                item.emailPrincipal, 
                item.emailSteam, 
                item.foto, 
                item.saldo, 
                item.ultimoAcesso, 
                item.loginAutomantico
            );
            this.usuarioStorage.salvar(usuario);
        }
    } 
    criarUsuariosInventario() {
        const listaInventario = [
            {
                "id": 0,
                "usuarioId": 0,
                "skinColecao": [0, 1, 2, 3, 4]
            },
            {
                "id": 1,
                "usuarioId": 1,
                "skinColecao": [0, 2, 4]
            },
            {
                "id": 2,
                "usuarioId": 2,
                "skinColecao": [0, 4, 5]
            }
        ];
        
        for (const item of listaInventario) {
            let inventario = new Inventario(item.id, item.usuarioId, item.skinColecao);
            this.inventarioStorage.salvar(inventario);
        }
    }
    criarLojaUsuario() {}
    criarLojaInventario() {}
    criarTransacoes() {}
}