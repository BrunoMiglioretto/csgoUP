/*SCRIPT CARROSSEL*/
const imgs = document.getElementsId("card");
const img = document.querySelectorAll(".container-carrossel #figure");

let idx =0;

function carrossel(){
    idx++;

    if(idx>img.length-1){
        idx =0;
    }
    imgs.style.transform = 'translateX($(-idx*200)px)';
}

setInterval(carrossel, 1800);
