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

function recebeRegister(){
    var password1=document.getElementById("inputConfirm");
    var password2=document.getElementById("inputNewPassword");
    
    if(password1.value!=password2.value){
        password1.style.color = "#FF0000";
    }else{
        password1.style.color = "#FFFFFF";
    }
}