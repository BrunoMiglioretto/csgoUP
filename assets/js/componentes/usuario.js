export class Usuario {
    constructor(id, nickname, senha, permissao_grupo, emailPrincipal, emailSteam, foto, saldo, ultimoAcesso, loginAutomantico) {
        this.id = id;
        this.nickname = nickname;
        this.senha = senha;
        this.permissao_grupo = permissao_grupo;
        this.emailPrincipal = emailPrincipal;
        this.emailSteam = emailSteam;
        this.foto = foto;
        this.saldo = saldo;
        this.ultimoAcesso = ultimoAcesso;
        this.loginAutomantico = loginAutomantico;
    }
}