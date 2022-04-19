function switchTab(nomeBotao){
    let divLogin=document.getElementById("login");
    let divRegister=document.getElementById("register");

    if(nomeBotao=="login"){
        divLogin.style.display="block";
        divRegister.style.display="none";
    }

    if(nomeBotao=="register"){
        divRegister.style.display="block";
        divLogin.style.display="none";
    }

}