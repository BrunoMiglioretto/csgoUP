//Abrir menu com imagens

document.getElementById("edit").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Trocar imagem principal
function img01() {
  document.getElementById("photo").src = "../assets/img/profile/img-profile-1.webp";
}
function img02() {
  document.getElementById("photo").src = "../assets/img/profile/img-profile-2.webp";
}
function img03() {
  document.getElementById("photo").src = "../assets/img/profile/img-profile-3.webp";
}
function img04() {
  document.getElementById("photo").src = "../assets/img/profile/img-profile-4.webp";
}