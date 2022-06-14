export class Usuario {
    constructor(id, nickname, senha, emailPrincipal, emailSteam, foto, saldo, ultimoAcesso, loginAutomantico) {
        this.id = id;
        this.nickname = nickname;
        this.senha = senha;
        this.emailPrincipal = emailPrincipal;
        this.emailSteam = emailSteam;
        this.foto = foto;
        this.saldo = saldo;
        this.ultimoAcesso = ultimoAcesso;
        this.loginAutomantico = loginAutomantico;
    }
}