import { Skin } from "../modelos/skin.js";
import { Usuario } from "../modelos/usuario.js";
import { Inventario } from "../modelos/inventario.js";
import { Storage, AdminStorage } from "./storege.js";
import { Transacao } from "../modelos/transacao.js";

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
                "nome": "Man",
                "valor": 123.89,
                "descricao": "AWP",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png"
            },
            {
                "id": 1,
                "nome": "Neon Revolution",
                "valor": 123.89,
                "descricao": "AK-47",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AK NEON REVOLUTION PNG.png"
            },
            {
                "id": 2,
                "nome": "Wild Lotus",
                "valor": 123.89,
                "descricao": "AK-47",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AK WILD LOTUS.png"
            },
            {
                "id": 3,
                "nome": "Desert Hydra",
                "valor": 123.89,
                "descricao": "AWP",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP DESERT HYDRA PNG.png"
            },
            {
                "id": 4,
                "nome": "Fade",
                "valor": 123.89,
                "descricao": "AWP",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP FADE PNG.png"
            },
            {
                "id": 5,
                "nome": "Wasteland",
                "valor": 123.89,
                "descricao": "Glock",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/GLOCK-18 WASTELAND.png"
            },
            {
                "id": 6,
                "nome": "Chaticos",
                "valor": 123.89,
                "descricao": "M4a1-S",
                "imagem": "../assets/img/armas-inventario/SKINS COVERT/PNG/M4A1S CHATICOS.png"
            }
        ];

        for (const item of listaSkin) {
            let skin = new Skin(item.id, item.nome, item.valor, item.descricao, item.imagem);
            this.skinStorage.salvar(skin);
        }
    }

    criarUsuarios() {
        const listaUsuario = [
            {
                "id": 0,
                "nickname": "Bruno",
                "senha": "1230498lsdfigj",
                "permissao_grupo": "apostador",
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
                "permissao_grupo": "apostador",
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
                "permissao_grupo": "apostador",
                "emailPrincipal": "julia@gmail.com",
                "emailSteam": "juliaStream@gmail.com",
                "foto": "logo.jpg",
                "saldo": 889.99,
                "ultimoAcesso": "2022-06-04 23:32:12",
                "loginAutomantico": true
            }
        ];

        for (const item of listaUsuario) {
            let usuario = new Usuario(
                item.id,
                item.nickname, 
                item.senha, 
                item.permissao_grupo,
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
    criarLojaUsuario() {
        const usuarioLoja = {
            "id": 3,
            "nickname": "Julia",
            "senha": "qoiueriiriirii",
            "permissao_grupo": "loja",
            "emailPrincipal": "julia@gmail.com",
            "emailSteam": "juliaStream@gmail.com",
            "foto": "logo.jpg",
            "saldo": 889.99,
            "ultimoAcesso": "2022-06-04 23:32:12",
            "loginAutomantico": true
        }
        this.usuarioStorage.salvar(usuarioLoja);
    }
    criarLojaInventario() {
        const inventarioLoja = {
            "id": 3,
            "usuarioId": 3,
            "skinColecao": [0, 1, 2]
        };
        this.inventarioStorage.salvar(inventarioLoja);
    }
    criarTransacoes() {
        const listaTransacao = [
            {
                "id": 0,
                "tipo": "tranferencia",
                "de-usuario": 0,
                "para-usuario": 2,
                "skinId": 1,
                "deposito": null
            },
            {
                "id": 1,
                "tipo": "transferencia",
                "de-usuario": 0,
                "para-usuario": 2,
                "skinId": 2,
                "deposito": null
            },
            {
                "id": 2,
                "tipo": "transferencia",
                "de-usuario": 0,
                "para-usuario": 2,
                "skinId": 3,
                "deposito": null
            }
        ];
        for (const item of listaTransacao) {
            const transacao = new Transacao(
                item.id, 
                item.tipo, 
                item.usuarioId, 
                item.skinId, 
                item.deposito
            );
            this.transacaoStorage.salvar(transacao);
        }
    }
}