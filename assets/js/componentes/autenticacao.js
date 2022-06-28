import { AutenticacaoStorage } from "../utils/Storages/autenticacaoStorage.js";
import { Usuario } from "../modelos/usuario.js";

export class Autenticador {
    constructor() {
        this.autenticacaoStorage = new AutenticacaoStorage();
    }

    autenticar(nickname, senha) {
        const usuario = this.autenticacaoStorage.buscarUsuarioPorNickname(nickname);
        if (!usuario) {
            return null;
        }

        if (usuario.senha != senha) {
            return null;
        }
        return usuario;
    }

    criarUsuario(email, nickname, senha) {
        const usuarioValido = this.validarUsuario(email, nickname);
        if (!usuarioValido) {
            return null;
        }

        const usuarioId = this.autenticacaoStorage.proximoRegistroId();
        const usuario = new Usuario(usuarioId, nickname, senha, "apostador", email, null, null, 0, null, false);
        this.autenticacaoStorage.salvar(usuario);

        return usuario;
    }

    validarUsuario(email, nickname) {
        const emailValido = this.validarEmail(email);
        if (!emailValido) {
            return false;
        }
        const nicknameValido = this.validarNickname(nickname);
        if (!nicknameValido) {
            return false;
        }
 
        return true;
    }

    validarEmail(email) {
        return !this.autenticacaoStorage.buscarUsuarioPorEmail(email); 
    }
    validarNickname(nickname) {
        return !this.autenticacaoStorage.buscarUsuarioPorNickname(nickname);
    }
}
