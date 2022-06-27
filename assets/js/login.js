/*SCRIPT LOGIN*/
function switchTab(nomeBotao){
    let divLogin=document.getElementById("login");
    let divRegister=document.getElementById("register");
    let botaoLogin=document.getElementById("botaoLogin");
    let botaoRegister=document.getElementById("botaoRegister");


    if(nomeBotao=="login"){
        divLogin.style.display="block";
        divRegister.style.display="none";
        botaoLogin.style.color = "#00b94b";
    }else{
        botaoLogin.style.color = "#494949";
    }

    if(nomeBotao=="register"){
        divRegister.style.display="block";
        divLogin.style.display="none";
        botaoRegister.style.color = "#00b94b";
    }else{
        botaoRegister.style.color = "#494949";
    }
}

function recebeDadosRegister(){
    var email=document.getElementById("inputEmail");
    var steam=document.getElementById("inputSteam");
    var senha=document.getElementById("inputNewPassword");

    localStorage.email = JSON.stringify(email.value);
    localStorage.steam = JSON.stringify(steam.value);
    localStorage.senha = JSON.stringify(senha.value);
}

function confirmaSenha(){
    var password1=document.getElementById("inputConfirm");
    var password2=document.getElementById("inputNewPassword");
    let botaoEnter=document.getElementById("inputEnter");
    // let botaoEnterVermelho=document.getElementById("inputEnterVermelho");
    
    if(password1.value!=password2.value){
        password1.style.color = "#FF0000";
        botaoEnter.src="../assets/img/startButtonVermelho.png";
        botaoEnter.style.transition="1s"
    }else{
        password1.style.color = "#FFFFFF";
        botaoEnter.src="../assets/img/startButton.png";
    }
}

function esqueciASenha(){
    let login = document.getElementById("login");
    let esqueci = document.getElementById("esqueciSenha");

    login.style.display="none";
    esqueci.style.display="block";
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