/*SCRIPT LOGIN*/

import {Autenticador} from "../componentes/autenticacao.js" 
const autenticador = new Autenticador(); 

document.getElementById("botaoLogin").onclick=()=>switchTab('login');
document.getElementById("botaoRegister").onclick=()=>switchTab('register');
document.getElementById("inputConfirm").onkeyup=()=>confirmaSenha();
document.getElementById("inputEnter").onclick=()=>registrar();
// document.getElementById("inputUser").onkeyup=()=>confirmaLogin();
document.getElementById("showOn").onclick=()=>switchShow('on');
document.getElementById("showOff").onclick=()=>switchShow('off');
document.querySelector(".forgot").onclick=()=>switchTab('esqueci');
document.getElementById("inputSenhaEsqueci").onkeyup=()=>confirmaSenha('esqueci');
document.getElementById("botaoAtualizar").onclick=()=>recebeDados('esqueci');
document.getElementById("botaoSignin").onclick=()=>logar();

function logar(){
    var login=document.getElementById("inputUser").value;
    var senha=document.getElementById("inputPass").value;

    const usuario = autenticador.autenticar(login, senha);
    console.log(usuario);
    if(!!usuario){
        window.location.href="http://localhost:5500/paginas/index.html";
        return;
    }
}

function registrar(){
    var nickname=document.getElementById("inputNickname").value;
    var email=document.getElementById("inputEmail").value;
    var senha=document.getElementById("inputNewPassword").value;

    const usuario = autenticador.criarUsuario(email, nickname, senha);
    switchTab('login');
}

function switchTab(nomeBotao){
    let divLogin=document.getElementById("login");
    let divRegister=document.getElementById("register");
    let botaoLogin=document.getElementById("botaoLogin");
    let botaoRegister=document.getElementById("botaoRegister");
    let divEsqueci=document.getElementById("esqueciMinhaSenha");


    if(nomeBotao=="login"){
        divLogin.style.display="block";
        divRegister.style.display="none";
        divEsqueci.style.display="none";
        botaoLogin.style.color = "#00b94b";
    }else{
        botaoLogin.style.color = "#494949";
    }

    if(nomeBotao=="register"){
        divRegister.style.display="block";
        divLogin.style.display="none";
        divEsqueci.style.display="none";
        botaoRegister.style.color = "#00b94b";
    }else{
        botaoRegister.style.color = "#494949";
    }

    if(nomeBotao=="esqueci"){
        divLogin.style.display="none";
        divRegister.style.display="none";
        divEsqueci.style.display="block";
    }
}


function recebeDados(dado){
    
    var email=document.getElementById("inputEmail");

    if(dado=="register"){
        var steam=document.getElementById("inputSteam");
        var senha=document.getElementById("inputNewPassword");

        localStorage.steam = JSON.stringify(steam.value);
        localStorage.email = JSON.stringify(email.value);
    }else if(dado == "esqueci"){                                        //verificar se o email está certo
        var senha=document.getElementById("inputSenhaEsqueci");
    }
    localStorage.senha = JSON.stringify(senha.value);

    switchTab('login');
}

function confirmaSenha(){
    var password1=document.getElementById("inputConfirm");
    var password2=document.getElementById("inputNewPassword");
    let botaoEnter=document.getElementById("inputEnter");
    
    if(password1.value!=password2.value){
        password1.style.color = "#FF0000";
        botaoEnter.style.filter = "hue-rotate(0deg)";
    }else{
        password1.style.color = "#FFFFFF";
        botaoEnter.style.filter = "hue-rotate(100deg)";
    }
}

function switchShow(showStatus){
    let botaoShow=document.getElementById("showOn");
    let botaoShowOff=document.getElementById("showOff");
    let passwordText=document.getElementById("inputPass");

    if(showStatus=="on"){
        botaoShow.style.display="none";
        botaoShowOff.style.display="block";
        passwordText.type="text";
        
    }

    if(showStatus=="off"){
        botaoShow.style.display="block";
        botaoShowOff.style.display="none";
        passwordText.type="password";
    }


}