import { Usuario } from "../../modelos/usuario.js";
import { Storage } from "../storage.js";

export class AutenticacaoStorage extends Storage {
    constructor() {
        super("autenticacao", "session");
        this.usuarioStorage = new Storage("usuario");
    }

    buscarUsuarioPorNickname(nickname) {
        const listaUsuario = this.usuarioStorage.buscarLista();
        const usuario = listaUsuario.filter((elemento) => elemento.nickname == nickname);    

        return usuario ? usuario[0] : null; 
    }

    buscarUsuarioPorEmail(email) {
        const listaUsuario = this.usuarioStorage.buscarLista();
        const usuario = listaUsuario.filter((elemento) => elemento.email == email);    

        return usuario ? usuario[0] : null; 
    }

    buscarUsuarioLogado() {
        const usuarioId = this.webStorage.getItem(this.entidade);
        const usuarioJSON = this.usuarioStorage.buscar(usuarioId);
        const usuario = new Usuario(
            usuarioJSON.id,
            usuarioJSON.nickname,
            usuarioJSON.senha,
            usuarioJSON.permissao_grupo,
            usuarioJSON.emailPrincipal,
            usuarioJSON.emailSteam,
            usuarioJSON.foto,
            usuarioJSON.saldo,
            usuarioJSON.ultimoAcesso,
            usuarioJSON.loginAutomatico
        ); 

        return usuario;
    }
    
    registarLogin(usuarioId) {
        this.webStorage.setItem(this.entidade, usuarioId);
    }

    registrarLogout() {
        this.webStorage.removeItem(this.entidade);
    }
}