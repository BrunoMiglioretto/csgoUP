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

function recebeRegister(){
    var password1=document.getElementById("inputConfirm");
    var password2=document.getElementById("inputNewPassword");
    
    if(password1.value!=password2.value){
        password1.style.color = "#FF0000";
    }else{
        password1.style.color = "#FFFFFF";
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